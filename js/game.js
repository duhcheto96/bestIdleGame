"use strict"

let main = {
    mining: {
        index: 0,
        clicked: false,
        material: undefined,
        currentHP: undefined,
        totalHP: undefined,
        area: areas.miningAreas['area1'],
        inventory: inventoryMaterials.miningMaterials,
        tool: tools.miningTool,
        breakingTime: undefined,
        timeout: undefined,
        itemGroup: 'miningMaterials',
        areaGroup: 'miningAreas',
    },
    woodcutting: {
        index: 1,
        clicked: false,
        material: undefined,
        currentHP: undefined,
        totalHP: undefined,
        area: areas.woodcuttingAreas['area1'],
        inventory: inventoryMaterials.woodcuttingMaterials,
        tool: tools.woodcuttingTool,
        breakingTime: undefined,
        timeout: undefined,
        itemGroup: 'woodcuttingMaterials',
    },
    hunting: {
        index: 2,
        clicked: false,
        material: undefined,
        currentHP: undefined,
        totalHP: undefined,
        area: areas.huntingAreas['area1'],
        inventory: inventoryMaterials.huntingMaterials,
        tool: tools.huntingTool,
        breakingTime: undefined,
        timeout: undefined,
        itemGroup: 'huntingMaterials',
    },
}

let scroll = true;

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
        main.mining.area.level++;
        main.mining.area.totalLevel++;
        main.mining.area.materialsDropped = 0;
    } else if (main.mining.area.totalLevel > main.mining.area.level) {
        main.mining.area.level++;
    }
    unlockAreas();
    updateMaterialLevels();
});
// decrease area level
sa('.material')[0].childNodes[2].addEventListener('click', () => {
    if (main.mining.area.level > 1) {
        main.mining.area.level--;
    }
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
        
        mainType.timeout = setTimeout(mainMaterialGatheringFunction.bind(null, mainType), mainType.tool.lookingForTime);
    } else {
        mainType.currentHP = getMaterialHealth(mainType);
        mainType.totalHP = getMaterialHealth(mainType);
        
        setHPbar(sa('.progress')[mainType.index], mainType.currentHP, mainType.totalHP);

        mainType.breakingTime = setInterval(breakBlock.bind(null, mainType), mainType.tool.aps);
    }
}








let breakBlock = (mainType) => {

    mainType.currentHP -= mainType.tool.getPower();
    
    if (mainType.currentHP < 0) mainType.currentHP = 0;
    
    updateHPbar(sa('.progress')[mainType.index], mainType.currentHP, mainType.totalHP);

    if (mainType.currentHP == 0) {
        if (mainType.inventory[mainType.material] === undefined) {
            addNewItemToInventory(mainType);
        }

        let drop = mainType.area.materials[mainType.material]['drop'];
        
        mainType.inventory[mainType.material] += drop;
        mainType.area.materials[mainType.material]['totalDropped'] += drop;

        // add drop if on the last level
        if (mainType.area.level == mainType.area.totalLevel) {
            mainType.area.materialsDropped += drop;
        }
        
        markUpgradesBuyable();

        // it is -1 because on lvl 1 there should be no bonus (CHANGEABLE if needed)
        let xp = mainType.area.materials[mainType.material]['xp'] 
        + (mainType.area.level - 1) * mainType.area.materials[mainType.material]['xpOnLevel'];


        increaseToolXP(mainType.tool, xp);

        const logSpan = addSpan(`You have obtained ${mainType.area.materials[mainType.material]['drop']} ${mainType.material}`);

        logElementColor(logSpan, mainType.material);

        appendMoreChilds(sa('.log')[mainType.index], logSpan, addBR());

        // scroll to bottom of the log, while mouse is out of it
        if (scroll) sa('.log')[mainType.index].scrollTop = sa('.log')[mainType.index].scrollHeight;

        mainMaterialGatheringFunction(mainType)

        clearInterval(mainType.breakingTime);
    }
}




















// Set active area
sa('.areas').forEach((domAreas, tabIndex) => {
    domAreas.childNodes.forEach((area, index) => {
        area.addEventListener('click', (e) => {

            let type;
            if (tabIndex == 0) {
                type = 'mining';
            }
            if (tabIndex == 1) {
                type = 'woodcutting';
            }
            if (tabIndex == 2) {
                type = 'hunting';
            }

            let nextArea = areas[`${type}Areas`][`area${index + 1}`];

            unlockAreas();

            if (!nextArea.unlocked) {
                return;
            }

            main[type].area = nextArea;


            domAreas.childNodes.forEach((area) => {
                area.classList.remove('activeArea');
            });
            area.classList.add('activeArea');

            updateMaterialLevels();

            // MAKE IT FOR ALL, NOT JUST MINING ,,,, LATER
            clearInterval(main.mining.breakingTime);
            clearTimeout(main.mining.timeout);
            main.mining.clicked = false;
            resetHPandMat(sa('.fieldTab')[1]);
        });
    });
});


sa('.menuItem').forEach((x, y) => {
    x.addEventListener('click', activeTab.bind(null, sa('.fieldTab')[y]))
});


sa('.expandable').forEach((x, y) => {
    x.addEventListener('click', 
    expandCollapse.bind(null, (sa(`.expandable + div`)[y])));
});


// expand collapse single upgrades
sa('.upgrade').forEach((upgrade, num) => {
    upgrade.childNodes[1].addEventListener('click', () => {
        for(let i = 2; i < 5; i++) {
            let elem = upgrade.childNodes[i];
            elem.classList.forEach((c) => {
                if (c === "activeUpgrade") {
                    elem.classList.remove('activeUpgrade');
                    elem.classList.add('unactiveUpgrade');
                } else if (c === "unactiveUpgrade") {
                    elem.classList.remove('unactiveUpgrade');
                    elem.classList.add('activeUpgrade');
                }
            });
        }
    });
});

// Start and stop scrolling of the log, depending on scroll variable
sa('.log').forEach(x => {
    x.addEventListener("mouseenter", function() {
        scroll=false;
    });
    x.addEventListener("mouseleave", function() {
        scroll=true;
    });
});

// Add event listeners to every upgrade button, based on name
sa('.upgrade').forEach(element => {
    
    let upgName = element.childNodes[1].textContent;
    let lvlUpButton = element.childNodes[2];
    
    lvlUpButton.addEventListener("click", () => {

        if (!areUpgradeMaterialsAvailable(upgName)) return;
        if (!areUpgradeRequirementsMet(upgName)) return;

        removeUpgradeMaterials(upgName);
        removeUpgradeLevelsOrTier(upgName);

        addUpgradeBonus(upgName);
        
        updateUpgrades();

        updateToolStats();
        
        markUpgradesBuyable();
    });
});


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

// add all items to inventory
addAllElementsToInventory();

updateEverything();













