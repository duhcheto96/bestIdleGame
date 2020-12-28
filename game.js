"use strict"

var main = {
    mining: {
        index: 0,
        clicked: false,
        material: undefined,
        currentHP: undefined,
        totalHP: undefined,
        currentArea: materials.miningMaterials['area1'],
        inventory: inventoryMaterials.miningMaterials,
        tool: tools.miningTool,
        breakingTime: undefined,
        timeout: undefined,
        itemGroup: 'miningMaterials',
    },
    woodcutting: {
        index: 1,
        clicked: false,
        material: undefined,
        currentHP: undefined,
        totalHP: undefined,
        currentArea: materials.woodcuttingMaterials['area1'],
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
        currentArea: materials.huntingMaterials['area1'],
        inventory: inventoryMaterials.huntingMaterials,
        tool: tools.huntingTool,
        breakingTime: undefined,
        timeout: undefined,
        itemGroup: 'huntingMaterials',
    },
}

var scroll = true;


// START MINING
sa('.material')[0].addEventListener('click', () => {
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



let mainMaterialGatheringFunction = (main) => {

    if (main.material === "Looking for material") {
        main.material = getRandomElement(main.currentArea);
    } else {
        main.material = "Looking for material";
    }
    
    updateEverything();
    
    materialColor(sa('.material')[main.index], main.material);

    if (main.material === "Looking for material") {
        
        main.timeout = setTimeout(mainMaterialGatheringFunction.bind(null, main), main.tool.lookingForTime);
    } else {
        main.currentHP = main.currentArea[main.material]['health'];
        main.totalHP = main.currentArea[main.material]['health'];
        
        setHPbar(sa('.progress')[main.index], main.currentHP, main.totalHP);

        main.breakingTime = setInterval(breakBlock.bind(null, main), main.tool.aps);
    }
}

let breakBlock = (main) => {

    main.currentHP -= main.tool.getPower();
    
    if (main.currentHP < 0) main.currentHP = 0;
    
    updateHPbar(sa('.progress')[main.index], main.currentHP, main.totalHP);

    if (main.currentHP == 0) {
        if (main.inventory[main.material] === undefined) {
            addNewItemToInventory(main.material, main.itemGroup, sa('.itemsList')[main.index]);
        }
        
        main.inventory[main.material] += main.currentArea[main.material]['drop'];
        main.currentArea[main.material]['totalDropped'] += main.currentArea[main.material]['drop'];

        main.currentArea[main.material]['health'] += main.currentArea[main.material]['healthOnKill'];

        
        markUpgradesBuyable();

        increaseToolXP(main.tool, main.currentArea[main.material]['xp']);

        const logSpan = addSpan(`You have obtained ${main.currentArea[main.material]['drop']} ${main.material}`);

        logElementColor(logSpan, main.material);

        appendMoreChilds(sa('.log')[main.index], logSpan, addBR());

        // scroll to bottom of the log, while mouse is out of it
        if (scroll) sa('.log')[main.index].scrollTop = sa('.log')[main.index].scrollHeight;

        mainMaterialGatheringFunction(main)

        clearInterval(main.breakingTime);
    }
}




















// Set active area
sa('.areas').forEach((areas, tabIndex) => {
    areas.childNodes.forEach((area, index) => {
        area.addEventListener('click', () => {
            areas.childNodes.forEach((area) => {
                area.classList.remove('activeArea');
            });
            area.classList.add('activeArea');
            if (tabIndex == 0) main.mining.currentArea = materials.miningMaterials[`area${index + 1}`];
            if (tabIndex == 1) main.woodcutting.currentArea = materials.woodcuttingMaterials[`area${index + 1}`];
            if (tabIndex == 2) main.hunting.currentArea = materials.huntingMaterials[`area${index + 1}`];
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




















