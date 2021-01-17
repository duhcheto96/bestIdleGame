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

function addNewItemToInventory(itemName, itemGroup, list) {
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
        let itemIndex = materials[itemGroup]['area1'][itemName].index;
        
        let curItem = list.childNodes[c];
        let curName = curItem.childNodes[0].textContent;
        let curIndex = materials[itemGroup]['area1'][curName].index;
        
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

function increaseToolXP(tool, xp) {
    xp = Math.round(xp + xp * tool.bonusXPfromTier * tool.tier);
    tool.xp += xp;
    tool.totalXP += xp;
    while (tool.xp >= tool['needed xp']) {
        tool.level += 1;
        tool.xp -= tool['needed xp'];
        tool['needed xp'] += tool['needed xp on level'];
        tool['power from levels'] += tool['power on level'];
    }
}

function updateHPbar(el, curHP, totalHP) {
    el.childNodes[0].textContent = "Health: " + curHP + "/" + totalHP;
    let width = curHP / totalHP * 100;
    let color = curHP / totalHP * 255;
    el.childNodes[1].style.backgroundColor = `rgb(200, ${color}, 0)`;
    el.childNodes[1].style.width = `${width}%`;
}

function setHPbar(el, curHP, totalHP) {
    el.childNodes[0].textContent = "Health: " + curHP + "/" + totalHP;
    el.childNodes[1].style.backgroundColor = "rgb(200, 255, 0)";
    el.childNodes[1].style.width = "100%";
}

function getRandomElement(mats) {
    let items = Object.keys(mats);
    let chances = [];
    
    for (let key in mats) chances.push(mats[key]['chance']);

    let q = 0;
    chances = chances.map((el) => q = el + q);

    let rand = Math.random() * chances[chances.length - 1];

    let material = items[chances.filter(el => el <= rand).length];
    return material
}
// not done
function getDropChance() {
    let mats = materials.miningMaterials.area1
    let chances = [];
    for (let key in mats) chances.push(mats[key]['chance']);
    let sum = 0;
    sum = chances.reduce((e1, e2) => sum = e1 + e2, 0);

    for (let mat in mats) {
        console.log(`${mat} chance to drop: ${(mats[mat].chance / sum * 100).toFixed(2)}%`);
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

function areUpgradeMaterialsAvailable(upgradeName) {
    let reqMats;
    for (let type in upgrades) {
        if (upgrades[type].hasOwnProperty(upgradeName)) {
            reqMats = upgrades[type][upgradeName]['required materials'];
        }
    }

    let found = 0;

    for (let mat in reqMats) {
        for (let group in inventoryMaterials) {
            if (inventoryMaterials[group].hasOwnProperty(mat)) {
                found++;
            }
        }
    }

    if(found < Object.keys(reqMats).length) {
        return false;
    }

    for (let mat in reqMats) {
        for (let group in inventoryMaterials) {
            if (inventoryMaterials[group].hasOwnProperty(mat)) {
                if (inventoryMaterials[group][mat] < reqMats[mat]['required']) {
                    return false;
                }
            }
        }
    }

    return true;
}

function areUpgradeRequirementsMet(upgradeName) {
    let t;
    let reqLevel;
    let reqTier;

    for (let type in upgrades) {
        if (upgrades[type].hasOwnProperty(upgradeName)) {
            for (let prop in upgrades[type][upgradeName]) {
                if (prop == 'required levels') {
                    t = type;
                    reqLevel = upgrades[type][upgradeName][prop];
                    break;
                } else if (prop == 'required tier') {
                    t = type;
                    reqTier = upgrades[type][upgradeName][prop];
                    break;
                }
            }
        }
    }
    if (t == 'miningUpgrades') {
        if (reqLevel != undefined) {
            if (tools.miningTool.level >= reqLevel) {
                return true
            }
        } else if (reqTier != undefined) {
            if (tools.miningTool.tier >= reqTier) {
                return true
            }
        }
    }
    return false
}

function removeUpgradeMaterials(upgradeName) {
    let reqMats;
    for (let type in upgrades) {
        if (upgrades[type].hasOwnProperty(upgradeName)) {
            reqMats = upgrades[type][upgradeName]['required materials'];
        }
    }

    for (let mat in reqMats) {
        for (let group in inventoryMaterials) {
            if (inventoryMaterials[group].hasOwnProperty(mat)) {
                inventoryMaterials[group][mat] -= reqMats[mat]['required'];
            }
        }
    }

    updateInventory();
    return true;

}

function removeUpgradeLevelsOrTier(upgradeName) {
    let t;
    let reqLevel;
    let reqTier;

    for (let type in upgrades) {
        if (upgrades[type].hasOwnProperty(upgradeName)) {
            for (let prop in upgrades[type][upgradeName]) {
                if (prop == 'required levels') {
                    t = type;
                    reqLevel = upgrades[type][upgradeName][prop];
                    break;
                } else if (prop == 'required tier') {
                    t = type;
                    reqTier = upgrades[type][upgradeName][prop];
                    break;
                }
            }
        }
    }


    if (t == 'miningUpgrades') {
            if (tools.miningTool.level >= reqLevel) {
                tools.miningTool.level = 1;
                tools.miningTool['needed xp'] = tools.miningTool['initial needed xp'];
                tools.miningTool.xp = 0;
                tools.miningTool.totalXP = 0;
            }
            if (tools.miningTool.tier >= reqTier) {
                tools.miningTool.tier = 1;
            }
    } else if (t == 'woodcuttingUpgrades') {

    }



}

function addUpgradeBonus(upgradeName) {

    let bonus;
    let type;

    for (let upg in upgrades) {
        if (upgrades[upg].hasOwnProperty(upgradeName)) {
            bonus = upgrades[upg][upgradeName]['bonus on level'];
            type = upg;
            break;
        }
    }

    let upgrade = upgrades[type][upgradeName]['required materials'];
    
    for (let i = 0; i < multiplier; i++) {
        if (type == 'miningUpgrades') addMiningUpgradeBonus(upgradeName, bonus, type);
        if (type == 'woodcuttingUpgrades') addWoodcuttingUpgradeBonus(upgradeName, bonus, type);
        if (type == 'huntingUpgrades') addHuntingUpgradeBonus(upgradeName, bonus, type);
        
        increaseUpgradeRequirements(upgrade);
        
        upgrades[type][upgradeName]['level'] += 1;
        upgrades[type][upgradeName]['current bonus'] += bonus;
    }
    updateUpgradesCost();
}

function addMiningUpgradeBonus(upgradeName, bonus, type) {
    if (upgradeName == "Increase pickaxe power") {
        tools.miningTool['power from upgrades'] += bonus;
    } else if (upgradeName == "Increase pickaxe atack speed") {
        tools.miningTool.aps *= 1 - bonus;
        // if (upgrades[type][upgradeName]['level'] === 301) {
        //     upgrades[type][upgradeName]['level'] = "MAX";
        // } else if (upgrades[type][upgradeName]['level'] == "MAX") {
        // }
    } else if (upgradeName == "Upgrade tier") {
        tools.miningTool.tier += bonus;
    } else if (upgradeName == "Decrease looking for material time") {
        tools.miningTool.lookingForTime *= 1 - bonus;
    } else if (upgradeName == "Upgrade pickaxe") {

    } else if (upgradeName == "Add chance for double material gain") {

    }

    if (upgradeName == 'Increase Stone drop') increaseDrop('Stone')
    if (upgradeName == 'Increase Iron Ore drop') increaseDrop('Iron Ore')
    if (upgradeName == 'Increase Copper drop') increaseDrop('Copper')
    if (upgradeName == 'Increase Silver drop') increaseDrop('Silver')
    if (upgradeName == 'Increase Gold drop') increaseDrop('Gold')
    if (upgradeName == 'Increase Platinum drop') increaseDrop('Platinum')

    if (upgradeName == 'Increase chance to find Diamond') {
        materials.miningMaterials.area1['Diamond'].chance += materials.miningMaterials.area1['Diamond'].chance * bonus;
    } else if (upgradeName == 'Increase chance to find Azurite') {
        materials.miningMaterials.area2['Azurite'].chance += materials.miningMaterials.area1['Azurite'].chance * bonus;
    } else if (upgradeName == 'Increase chance to find Onyx') {
        materials.miningMaterials.area3['Onyx'].chance += materials.miningMaterials.area1['Onyx'].chance * bonus;
    } else if (upgradeName == 'Increase chance to find Black Star Diopside') {
        materials.miningMaterials.area4['Black Star Diopside'].chance += materials.miningMaterials.area1['Black Star Diopside'].chance * bonus;
    }
}

function addWoodcuttingUpgradeBonus() {

}

function addHuntingUpgradeBonus() {

}

function increaseDrop(material) {
    let type;

    for(let t in materials) {
        for (let area in materials[t]) {
            if (materials[t][area].hasOwnProperty(material)) {
                type = t;
            }
        }
    }
    for(let area in materials[type]) {
        if (materials[type][area][material] != undefined) {
            materials[type][area][material]['drop'] += 1;
        }
    }
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

function increaseUpgradeRequirements(upgrade) {
    for (let upg in upgrade) {
        upgrade[upg]['initial required'] += upgrade[upg]['required on level'];
        upgrade[upg]['required'] += upgrade[upg]['required on level'];
    }
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

function createMaterial(index, health, healthOnKill, xp, drop, chance, totalDropped) {
    return {
        index: index,
        health: health,
        healthOnKill: healthOnKill,
        xp: xp,
        drop: drop,
        chance: chance,
        totalDropped: totalDropped,
    }
}

function updateToolStats () {
    
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

function updateEverything() {
    updateInventory();
    updateToolStats();
    updateUpgrades();
    markUpgradesBuyable();
}

function logElementColor(e, mat) {
    if (mat == "dirt") e.style.color = "gold";
}

function materialColor(e, mat) {
    e.childNodes[0].textContent = `${mat}`;
    if (mat === "gold") e.style.backgroundColor = "yellow";
    if (mat === "Looking for material") e.style.backgroundColor = "white";
    // add colors to other materials
}

function resetHPandMat(tab) {
    let material = tab.childNodes[4];
    let HPbar = tab.childNodes[6];
    
    material.childNodes[0].textContent = 'Click to start';
    HPbar.childNodes[0].textContent = 'Health: 0 / 0';

    material.style.backgroundColor = 'white';
    HPbar.childNodes[1].style.width = '0px';

}

function generateMaterialGatheringTab(tab) {
    let toolName = createDiv("toolName");
    let toolTier = createDiv("toolTier");
    appendMoreChilds(toolTier, addSpan("Tier:"), addBR(), addBR(), addSpan("1"));

    let toolBonuses = createDiv('toolBonuses');
    appendMoreChilds(toolBonuses, addSpan(), addBR(), addSpan(), addBR(), addSpan(), addBR(), addSpan())

    let areas = createDiv('areas')
    for (let i = 0; i < 4; i++) {
        let area = createDiv('area')
        if (i == 0) {
            area.classList.add('activeArea');
        }
        areas.appendChild(area);
    }

    let material = createDiv('material');
    let matNameDiv = createDiv('materialName');
    let matLevel = createDiv('materialLevel');

    let leftArrow = createDiv('leftArrow');
    const leftArrowImg = createImg("images/leftArrow.png", "arrowImg");
    leftArrow.appendChild(leftArrowImg);
    
    let rightArrow = createDiv('rightArrow');
    const rightArrowImg = createImg("images/rightArrow.png", "arrowImg");
    rightArrow.appendChild(rightArrowImg);


    matNameDiv.textContent = 'Click to start';
    appendMoreChilds(material, matNameDiv, matLevel, leftArrow, rightArrow);
    
    
    // material.textContent = 'Click to start';
    let log = createDiv('log');
    let progress = createDiv('progress');
    let HPbar = createDiv('HPbar');
    appendMoreChilds(progress, addSpan('Health: 0 / 0'), HPbar)
    


    appendMoreChilds(tab, toolName, toolTier,
         toolBonuses, areas, material,
          log, progress);
}

function addAllElementsToInventory() {
    for(let mats in inventoryMaterials) {
        let index;
        for (let type in main) {
            if (main[type].itemGroup == mats) {
                index = main[type].index
            }
        }
        for(let mat in inventoryMaterials[mats]) {
            addNewItemToInventory(mat, mats, sa('.itemsList')[index])
        }
    }
    updateInventory();
}

// DOM ELEMENTS
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





