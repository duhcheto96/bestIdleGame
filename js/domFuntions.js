// expand and collapse inventory items and upgrades
function expandCollapse(e) {
    e.classList.forEach(c => {
        if (c == "collapsed" || c == "expanded") {
            if (c == "collapsed") {
                e.classList.remove("collapsed");
                e.classList.add("expanded");
            } else {
                e.classList.remove("expanded");
                e.classList.add("collapsed");
            }
        }
    });
}

// function for changing tabs in field + highlighting menu items
function activeTab(elem, e) {
    // cycle for removing active class to all tab elements
    for (let i = 0; i < sa('.fieldTab').length; i++) {
        const tab = sa('.fieldTab')[i];
        tab.classList.remove('activeTab');
    }
    for (let i = 0; i < sa('.menuItem').length; i++) {
        const item = sa('.menuItem')[i];
        item.classList.remove('activeMenu');
    }
    // current menu item to be highlighted
    e.target.classList.add('activeMenu');
    
    // current tab element to be displayed
    elem.classList.add("activeTab");
}

function addNewItemToInventory(mainType) {
    itemName = mainType.material;
    itemGroup = mainType.itemGroup;
    areaGroup = mainType.areaGroup;
    list = sa('.itemsList')[mainType.index];
    if (inventoryMaterials[itemGroup][itemName] == undefined) {
        inventoryMaterials[itemGroup][itemName] = 0;
    }

    const item = createDiv('invItem');
    const invItemName = createDiv('invItemName');
    const invItemQuantity = createDiv('invItemQuantity');

    invItemName.textContent = itemName;
    invItemQuantity.textContent = inventoryMaterials[itemGroup][itemName];

    item.appendChild(invItemName);
    item.appendChild(invItemQuantity);
    
    let added = false;

    for (let c = 0; c < list.childNodes.length; c++) {
        let itemIndex = areas[areaGroup]['area1'].materials[itemName].index;
        
        let curItem = list.childNodes[c];
        let curName = curItem.childNodes[0].textContent;
        let curIndex = areas[areaGroup]['area1'].materials[curName].index;
        
        if (itemIndex < curIndex) {
            list.insertBefore(item, curItem);
            added = true;
            break;
        }
    }
    if (!added) {
        list.appendChild(item);
    }
}

function generateUpgrade(type, name) {
    const upgrade = createDiv(`upgrade`);

    const upgLevel = createDiv(`upgradeLevel`);

    const upgName = createDiv(`upgradeName`);
    upgName.textContent = name;

    const button = createDiv(`upgradeButton`, 'activeUpgrade');

    const stats = createDiv(`upgradeStats`, 'activeUpgrade');

    const currentStat = document.createElement('div');
    const curStatTitle = addSpan("Current bonus:");
    const curStatSpan = addSpan();

    const nextStat = document.createElement('div');
    const nextStatTitle = addSpan("Next level bonus:");
    const nextStatSpan = addSpan();

    let currentBonus = upgrades[type][name]['current bonus'];
    let nextBonus = upgrades[type][name]['current bonus'] + upgrades[type][name]['bonus on level'];

    if (upgrades[type][name]['value'] == "flat") {
        curStatSpan.textContent = `${currentBonus}`;
        nextStatSpan.textContent = `${nextBonus}`;
    }
    if (upgrades[type][name]['value'] == "percent") {
        curStatSpan.textContent = `${(currentBonus * 100).toFixed(2)}%`;
        nextStatSpan.textContent = `${(nextBonus * 100).toFixed(2)}%`;
    }

    appendMoreChilds(currentStat, curStatTitle, addBR(), curStatSpan);
    appendMoreChilds(nextStat, nextStatTitle, addBR(), nextStatSpan);
    appendMoreChilds(stats, currentStat, nextStat);


    const reqItems = createDiv(`upgradeReqItems`, 'activeUpgrade')
    const reqItemsTitle = createDiv("upgradeReqItemsTitle");
    reqItemsTitle.textContent = "Required items:";
    const reqItemsItems = createDiv(`upgradeReqItemsItems`);

    for (let mat in upgrades[type][name]['required materials']) {

        const reqItem = createDiv(`upgradeReqItem`);
        const spanName = addSpan(mat);
        // remove later- ---- 
        spanName.style.width = '100px';
        spanName.style.float = 'left';

        const spanQuantity = addSpan();

        appendMoreChilds(reqItem, spanName, spanQuantity);
        reqItemsItems.appendChild(reqItem);
    }

    appendMoreChilds(reqItems, reqItemsTitle, reqItemsItems);
    appendMoreChilds(upgrade, upgLevel, upgName, button, stats, reqItems);

    s(`.${type}List`).appendChild(upgrade);
}

function setHPbar(el, curHP, totalHP) {
    el.childNodes[0].textContent = "Health: " + curHP + "/" + totalHP;
    el.childNodes[1].style.backgroundColor = "rgb(200, 255, 0)";
    el.childNodes[1].style.width = "100%";
}

function markUpgradesBuyable() {
    sa('.upgrade').forEach((element) => {

        let levelElement = element.childNodes[0];
        let nameElement = element.childNodes[1];

        if(areUpgradeMaterialsAvailable(nameElement.textContent)) {
            levelElement.style.backgroundColor = 'rgba(0, 200, 0, 0.5)';
            nameElement.style.backgroundColor = 'rgba(0, 200, 0, 0.5)';
        } else {
            levelElement.style.backgroundColor = 'rgb(192, 206, 195)';
            nameElement.style.backgroundColor = 'rgb(192, 206, 195)';
        }
    });
}

function generateMaterialGatheringTab(tab, type) {
    let toolName = createDiv("toolName");
    let toolTier = createDiv("toolTier");
    appendMoreChilds(toolTier, addSpan("Tier:"), addBR(), addBR(), addSpan("1"));

    let toolBonuses = createDiv('toolBonuses');
    appendMoreChilds(toolBonuses, addSpan(), addBR(), addSpan(), addBR(), addSpan(), addBR(), addSpan());




    let areas = createDiv('areas');
    areas.setAttribute('data-type', type);
    for (let i = 0; i < 4; i++) {

        let area = createDiv('area');
        let name = createDiv('areaName');
        name.textContent = 'area';
        let currentLevel = createDiv('areaCurrentLevel');
        currentLevel.textContent = 'current level: 1';
        let totalLevel = createDiv('areaTotalLevel');
        totalLevel.textContent = 'total level: 1';
        let isUnlocked = createDiv('areaUnlocked');
        isUnlocked.textContent = 'unlocked';
        let progress = createDiv('areaProgress');
        progress.textContent = '1/5';



        if (i == 0) {
            area.classList.add('activeArea');
        }
        
        appendMoreChilds(area, name, currentLevel, totalLevel, isUnlocked, progress);
        areas.appendChild(area);
    }







    let material = createDiv('material');
    let matNameDiv = createDiv('materialName');
    let areaLevel = createDiv('areaLevel');
    // REMOVE LATER, to update on reload (level is on main object)
    areaLevel.textContent = 1;

    let leftArrow = createDiv('leftArrow');
    const leftArrowImg = createImg("images/leftArrow.png", "arrowImg");
    leftArrow.appendChild(leftArrowImg);
    
    let rightArrow = createDiv('rightArrow');
    const rightArrowImg = createImg("images/rightArrow.png", "arrowImg");
    rightArrow.appendChild(rightArrowImg);


    matNameDiv.textContent = 'Click to start';
    appendMoreChilds(material, matNameDiv, areaLevel, leftArrow, rightArrow);
    
    
    // material.textContent = 'Click to start';
    let log = createDiv('log');
    let progress = createDiv('progress');
    let HPbar = createDiv('HPbar');
    appendMoreChilds(progress, addSpan('Health: 0 / 0'), HPbar)
    


    appendMoreChilds(tab, toolName, toolTier,
         toolBonuses, areas, material,
          log, progress);
}

function resetHPandMat(tab) {
    let material = tab.childNodes[4];
    let HPbar = tab.childNodes[6];
    
    material.childNodes[0].textContent = 'Click to start';
    HPbar.childNodes[0].textContent = 'Health: 0 / 0';

    material.style.backgroundColor = 'white';
    HPbar.childNodes[1].style.width = '0px';

}

// DOM ELEMENTS ( helper functions)
function addBR() {
    const br = document.createElement('br');
    return br;
}

function addSpan(content) {
    const span = document.createElement('span');
    span.textContent = content;
    return span;
}

function appendMoreChilds(e, ...childs) {
    for (let c in childs) {
        e.appendChild(childs[c]);
    }
    return e;
}

function createDiv(...classes) {
    const e = document.createElement(`div`);
    for (let c in classes) {
        e.classList.add(`${classes[c]}`);
    }
    return e
}

function createImg(src, ...classes) {
    const e = document.createElement('img');
    e.setAttribute("src", src);
    for (let c in classes) {
        e.classList.add(`${classes[c]}`);
    }
    return e
}

function s(c) {
    // s -> select
    const el = document.querySelector(c);
    return el;
}

function sa(c) {
    // sa -> select all
    const el = document.querySelectorAll(c);
    return el;
}



// UPDATES
function updateHPbar(el, curHP, totalHP) {
    el.childNodes[0].textContent = "Health: " + curHP + "/" + totalHP;
    let width = curHP / totalHP * 100;
    let color = curHP / totalHP * 255;
    el.childNodes[1].style.backgroundColor = `rgb(200, ${color}, 0)`;
    el.childNodes[1].style.width = `${width}%`;
}

function updateAreas() {
    sa('.areas').forEach((domAreas, tabIndex) => {
        domAreas.childNodes.forEach((area, index) => {

            let name = area.childNodes[0];
            let currentLevel = area.childNodes[1];
            let totalLevel = area.childNodes[2];
            let unlocked = area.childNodes[3];
            let progress = area.childNodes[4];


            let currentArea = areas[`${domAreas.dataset.type}Areas`][`area${index + 1}`];
            
            name.textContent = currentArea.name;
            currentLevel.textContent = `current level: ${currentArea.level}`;
            totalLevel.textContent = `total level: ${currentArea.totalLevel}`;
            if (currentArea.unlocked) {
                unlocked.textContent = 'Area unlocked!';
                unlocked.style.backgroundColor = 'rgb(12, 242, 58)';
                unlocked.style.color = 'rgb(11, 55, 3)';
            } else {
                let previousArea = areas[`${domAreas.dataset.type}Areas`][`area${index}`];
                unlocked.textContent = `Area locked. Need lvl 100 ${previousArea.name}.`;
                unlocked.style.backgroundColor = 'rgb(184, 29, 50)';
                unlocked.style.color = 'rgb(92, 32, 40)';
            }
            if (currentArea.level < currentArea.totalLevel) {
                progress.textContent = '';
            } else {
                progress.textContent = `${currentArea.materialsDropped} 
                / ${currentArea.requiredMaterialsForNextLevel}`;
            }

        });
    });
}

function updateToolStats() {
    
    for (let tool in tools) {
        
        // + 1, because we start from second tab
        let elements = sa(`.fieldTab:nth-of-type(${Number(tools[tool].index) + 1}) > div`);

        let toolName = elements[0];
        const toolTier = elements[1].childNodes;
        const toolBonuses = elements[2].childNodes;
        
        toolName.textContent = tools[tool].name;
        toolTier[3].textContent = tools[tool].tier;
        toolBonuses[0].textContent = "Level : " + tools[tool].level;
        toolBonuses[2].textContent = "XP : " + tools[tool].xp + "/" + tools[tool]['needed xp'] + " (" + tools[tool].totalXP + ")";
        toolBonuses[4].textContent = "Power : " + tools[tool].getPower();
        toolBonuses[6].textContent = "Atacks per second : " + (1000 / tools[tool].aps).toFixed(2);
    }
}

// add woodcutting, hunting, etc.
function updateInventory() {
    const invItems = sa('.invItem');
    let quantity;

    invItems.forEach((item, i, list) => {
        let name = item.childNodes[0].textContent;
        for (let itemGroup in inventoryMaterials) {
            if (inventoryMaterials[itemGroup][name] !== undefined) {
                quantity = inventoryMaterials[itemGroup][name];
            }
        }
        item.childNodes[1].textContent = quantity;
    });
}

function updateUpgradesCost() {
    for (let upg in upgrades) {
        for (let upgName in upgrades[upg]) {
            for (let material in upgrades[upg][upgName]['required materials']) {

                let total = upgrades[upg][upgName]['required materials'][material]['initial required'];

                upgrades[upg][upgName]['required materials'][material]['required'] = upgrades[upg][upgName]['required materials'][material]['initial required'];
                for (let i = 1; i < multiplier; i++) {
                    upgrades[upg][upgName]['required materials'][material]['required'] += upgrades[upg][upgName]['required materials'][material]['required on level'];
                    total += upgrades[upg][upgName]['required materials'][material]['required']
                }
                upgrades[upg][upgName]['required materials'][material]['required'] = total;
            }
        }
    }
}

function updateUpgrades() {
    sa('.upgrade').forEach((upgrade) => {
        let name = upgrade.childNodes[1].textContent;
        let type;

        for (let upg in upgrades) {
            if (upgrades[upg].hasOwnProperty(name)) {
                type = upg;
            }
        }
        
        let level = upgrades[type][name]['level'];
        upgrade.childNodes[0].textContent = `Level: ${level}`;

        upgrade.childNodes[2].textContent = `lvlUP ${multiplier}`;

        
        let currentBonusDisplay = upgrade.childNodes[3].childNodes[0].childNodes[2];
        let currentBonus = upgrades[type][name]['current bonus'];

        let nextLevelBonusDisplay = upgrade.childNodes[3].childNodes[1].childNodes[2];
        let nextLevelBonus = upgrades[type][name]['current bonus'] + upgrades[type][name]['bonus on level'];

        if (upgrades[type][name]['value'] == 'flat') {
            currentBonusDisplay.textContent = currentBonus;
            nextLevelBonusDisplay.textContent = nextLevelBonus;
        } else if (upgrades[type][name]['value'] == 'percent') {
            currentBonusDisplay.textContent = (currentBonus*100).toFixed(2) + "%";
            nextLevelBonusDisplay.textContent = ((nextLevelBonus) * 100).toFixed(2) + "%";
        }

        
        upgrade.childNodes[4].childNodes[1].childNodes.forEach((reqItem) => {
            let itemName = reqItem.childNodes[0].textContent;
            let quantity = reqItem.childNodes[1];

            quantity.textContent = upgrades[type][name]['required materials'][itemName]['required'];
        })
        updateUpgradesCost();
    });
}


function updateMaterialLevels() {
    sa('.material')[main.mining.index].childNodes[1].textContent = main.mining.area.level;
    //toDo add the other tabs
}

function updateEverything() {
    updateInventory();
    updateToolStats();
    updateUpgrades();
    markUpgradesBuyable();
    unlockAreas();
    updateAreas();
}

// END OF UPDATES














