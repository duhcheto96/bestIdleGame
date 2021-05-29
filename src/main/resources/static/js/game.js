"use strict"

addAllElementsToDomInventory();

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
sa('.material')[1].childNodes[0].addEventListener('click', () => {
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
sa('.material')[2].childNodes[0].addEventListener('click', () => {
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


// AREA LEVEL INCREASE / DECREASE
sa('.fieldTab').forEach(tab => {
    if (tab.dataset.sort != 'farming') {
        return
    }
    let type = tab.dataset.type

    let leftArrowImage = tab.querySelectorAll('.arrowImg')[0]
    leftArrowImage.addEventListener('click', (e) => {
        let area = main[type].area
        if (area.level > 1) {
            area.level--;
        }
        unlockAreas();
        updateAreas();
        updateMaterialLevels();
    })
    
    let rightArrowImage = tab.querySelectorAll('.arrowImg')[1]
    rightArrowImage.addEventListener('click', (e) => {
        let area = main[type].area
        if (area.materialsDropped >= area.requiredMaterialsForNextLevel) {
            if (area.level == area.totalLevel) {
                area.totalLevel++;
                area.materialsDropped = 0;
            }
            area.level++;
        } else if (area.totalLevel > area.level) {
            area.level++;
        }
        unlockAreas();
        updateAreas();
        updateMaterialLevels();
    })
})



let mainMaterialGatheringFunction = (mainType) => {
    let lookingFor = ''
    lookingFor = mainType.type === 'hunting' ? 'Looking for animal' : "Looking for material"

    if (mainType.material === lookingFor) {
        mainType.material = getRandomElement(mainType.area.materials);
    } else {
        mainType.material = lookingFor;
    }

    updateEverything();

    materialColor(sa('.material')[mainType.index], mainType.material);

    if (mainType.material === lookingFor) {

        mainType.timeout = setTimeout(mainMaterialGatheringFunction.bind(null, mainType), mainType.tool.lookingForTime);
    } else {
        mainType.currentHP = getMaterialHealth(mainType);
        mainType.totalHP = getMaterialHealth(mainType);

        setHPbar(sa('.progress')[mainType.index], mainType.currentHP, mainType.totalHP);
        
        mainType.breakingTime = setInterval(() => breakBlock(mainType), mainType.tool.aps);
    }
}


let breakBlock = (mainType) => {

    mainType.currentHP -= mainType.tool.power;

    if (mainType.currentHP < 0) mainType.currentHP = 0;

    updateHPbar(sa('.progress')[mainType.index], mainType.currentHP, mainType.totalHP);

    if (mainType.currentHP == 0) {

        let area = mainType.area;

        let drop = getDropQuantity(mainType);

        mainType.materials[mainType.material].quantity += drop;
        mainType.materials[mainType.material].totalDropped += drop;


        // add drop if on the last level
        if (area.level == area.totalLevel) {
            // limit to the maximum
            if (area.materialsDropped < area.requiredMaterialsForNextLevel) {
                if (area.materialsDropped + drop > area.requiredMaterialsForNextLevel) {
                    area.materialsDropped = area.requiredMaterialsForNextLevel
                } else {
                    area.materialsDropped += drop;
                }
            }
        }

        markUpgradesBuyable();

        // it is -1 because on lvl 1 there should be no bonus (CHANGEABLE if needed)
        let xp = Math.floor((mainType.materials[mainType.material].xp
            + (area.level - 1) * mainType.materials[mainType.material].xp)
            * mainType.tool.bonusXpFromTier)


        increaseToolXP(mainType.tool, xp);

        const logSpan = addSpan(`You have obtained ${drop} ${camelCaseToNormal(mainType.material)} (${xp} xp)`);

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
    x.addEventListener("mouseenter", function () {
        scroll = false;
    });
    x.addEventListener("mouseleave", function () {
        scroll = true;
    });

    // add logic for Clear log button
    x.childNodes[0].addEventListener('click', clearLog.bind(null, x));
});



// Add event listeners to every upgrade button, based on name
sa('.upgrade').forEach(element => {

    let upgName = element.childNodes[1].dataset.name;
    let type = element.dataset.type;
    let requiredMaterials = upgrades[type][upgName].requiredMaterials
    
    let lvlUpButton = element.childNodes[2];
    lvlUpButton.addEventListener("click", () => {
        if (!areUpgradeMaterialsAvailable(requiredMaterials)) return;
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

        updateUpgradesCost();
        updateEverything();
    }
});

// upgrade -> -10% health of mats, 30% dmg from levels, 100% drop
// tier -> 10% more dmg, 10% more xp, 


// reset button / fix later 
sa(".fieldTab")[5].appendChild(createDiv('asd'))


// reset progress
sa(".fieldTab")[5].childNodes[3].addEventListener('click', x => {
    resetProgress()
    updateEverything()
})





// SAVE TO LOCAL STORAGE
window.onbeforeunload = () => {
    updateLocalStorage()
}





