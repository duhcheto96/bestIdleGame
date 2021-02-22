"use strict"
// resetProgress();
updateEverything();


// START MINING
sa('.material')[0].childNodes[0].addEventListener('click', () => {
    if (main.mining.clicked) {
        clearInterval(main.mining.breakingTime);
        clearTimeout(main.mining.timeout);
        main.mining.clicked = false;
        resetHPandMat(sa('.fieldTab')[1]);
        return; // so it can be clicked ONLY ONCE
    }
    main.mining.clicked = true;
    mainMaterialGatheringFunction(main.mining);
});

// START WOODCUTTING
sa('.material')[1].addEventListener('click', () => {
    if (main.woodcutting.clicked) {
        clearInterval(main.woodcutting.breakingTime);
        clearTimeout(main.woodcutting.timeout);
        main.woodcutting.clicked = false;
        resetHPandMat(sa('.fieldTab')[2]);
        return; // so it can be clicked ONLY ONCE
    }
    main.woodcutting.clicked = true;
    mainMaterialGatheringFunction(main.woodcutting);
});

// START HUNTING
sa('.material')[2].addEventListener('click', () => {
    if (main.hunting.clicked) {
        clearInterval(main.hunting.breakingTime);
        clearTimeout(main.hunting.timeout);
        main.hunting.clicked = false;
        resetHPandMat(sa('.fieldTab')[3]);
        return; // so it can be clicked ONLY ONCE
    }
    main.hunting.clicked = true;
    mainMaterialGatheringFunction(main.hunting);
});



// increase area level
sa('.material')[0].childNodes[3].addEventListener('click', () => {
    if (main.mining.area.materialsDropped >= main.mining.area.requiredMaterialsForNextLevel) {
        if (main.mining.area.level == main.mining.area.totalLevel) {
            main.mining.area.totalLevel++;
            main.mining.area.materialsDropped = 0;
        }
        main.mining.area.level++;
    } else if (main.mining.area.totalLevel > main.mining.area.level) {
        main.mining.area.level++;
    }
    unlockAreas();
    updateAreas();
    updateMaterialLevels();
});
// decrease area level
sa('.material')[0].childNodes[2].addEventListener('click', () => {
    if (main.mining.area.level > 1) {
        main.mining.area.level--;
    }
    unlockAreas();
    updateAreas();
    updateMaterialLevels();
});







let mainMaterialGatheringFunction = (mainType) => {

    if (mainType.material === "Looking for material") {
        mainType.material = getRandomElement(mainType.area.materials);
    } else {
        mainType.material = "Looking for material";
    }
    
    updateEverything();
    
    materialColor(sa('.material')[mainType.index], mainType.material);

    if (mainType.material === "Looking for material") {
        
        mainType.timeout = setTimeout(mainMaterialGatheringFunction.bind(null, mainType), mainType.getTool().lookingForTime);
    } else {
        mainType.currentHP = getMaterialHealth(mainType);
        mainType.totalHP = getMaterialHealth(mainType);
        
        setHPbar(sa('.progress')[mainType.index], mainType.currentHP, mainType.totalHP);

        mainType.breakingTime = setInterval(breakBlock.bind(null, mainType), mainType.getTool().aps);
    }
}


let breakBlock = (mainType) => {

    mainType.currentHP -= mainType.getTool().getPower();
    
    if (mainType.currentHP < 0) mainType.currentHP = 0;
    
    updateHPbar(sa('.progress')[mainType.index], mainType.currentHP, mainType.totalHP);

    if (mainType.currentHP == 0) {
        if (mainType.inventory()[mainType.material] === undefined ||
         mainType.inventory()[mainType.material] === 0) {
            addNewItemToInventory(mainType);
        }

        let drop = getDropQuantity(mainType);
        
        mainType.inventory()[mainType.material] += drop;
        mainType.area.materials[mainType.material].totalDropped += drop;

        // add drop if on the last level
        if (mainType.area.level == mainType.area.totalLevel) {
            // limit to the maximum
            if (mainType.area.materialsDropped < mainType.area.requiredMaterialsForNextLevel) {
                if (mainType.area.materialsDropped + drop > mainType.area.requiredMaterialsForNextLevel) {
                    mainType.area.materialsDropped = mainType.area.requiredMaterialsForNextLevel
                } else {
                    mainType.area.materialsDropped += drop;
                }
            }
        }
        
        markUpgradesBuyable();

        // it is -1 because on lvl 1 there should be no bonus (CHANGEABLE if needed)
        let xp = (mainType.area.materials[mainType.material].xp 
        + (mainType.area.level - 1) * mainType.area.materials[mainType.material].xp)
        * mainType.getTool().xp.getBonusXpFromTier();

        xp = Math.floor(xp);

        increaseToolXP(mainType.getTool(), xp);

        const logSpan = addSpan(`You have obtained ${mainType.area.materials[mainType.material]['drop']} ${camelCaseToNormal(mainType.material)} (${xp} xp)`);

        logElementColor(logSpan, mainType.material);

        appendMoreChilds(sa('.log')[mainType.index], logSpan, addBR());

        // scroll to bottom of the log, while mouse is out of it
        if (scroll) sa('.log')[mainType.index].scrollTop = sa('.log')[mainType.index].scrollHeight;

        mainMaterialGatheringFunction(mainType)

        clearInterval(mainType.breakingTime);
    }
}






// Start and stop scrolling of the log, depending on scroll variable
sa('.log').forEach(x => {
    x.addEventListener("mouseenter", function() {
        scroll=false;
    });
    x.addEventListener("mouseleave", function() {
        scroll=true;
    });

    // add logic for Clear log button
    x.childNodes[0].addEventListener('click', clearLog.bind(null, x));
});



// Add event listeners to every upgrade button, based on name
sa('.upgrade').forEach(element => {
    
    let upgName = element.childNodes[1].dataset.name;
    let lvlUpButton = element.childNodes[2];
    
    lvlUpButton.addEventListener("click", () => {

        if (!areUpgradeMaterialsAvailable(upgName)) return;
        if (!areUpgradeRequirementsMet(upgName)) return;

        removeUpgradeMaterials(upgName);
        removeUpgradeLevelsOrTier(upgName);

        addUpgradeBonus(upgName);
        
        updateEverything();
    });
});


// modify multiplier ( might add buy maximum later * or not )
document.addEventListener('keydown', (key) => {
    if (key.code === 'KeyZ') {

        if (multiplier == 1) multiplier = 5;
        else if (multiplier == 5) multiplier = 10;
        else if (multiplier == 10) multiplier = 25;
        else if (multiplier == 25) multiplier = 50;
        else if (multiplier == 50) multiplier = 1;

        updateUpgrades();

        updateEverything();
    }
});

// add all items to inventory on next log in 
// addAllElementsToInventory();

updateEverything();

resetHPandMatAll()


// upgrade -> -10% health of mats, 30% dmg from levels, 100% drop
// tier -> 10% more dmg, 10% more xp, 


// reset game at start and make a variable TRUE ( as the game started ), then next time do not reset

// reset button / fix later 
sa(".fieldTab")[5].appendChild(createDiv('asd'))

sa(".fieldTab")[5].childNodes[3].addEventListener('click', x => {
    resetProgress()
    updateEverything()
})




// make gold like currency and it gives no xp, then shop for exchanging gold  for almost any other material





