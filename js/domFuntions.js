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

function expandCollapseUpgrades(e, type) {
    e.stopPropagation();
    let upgrades = sa(`${type} .upgrade`);
    for (let el = 0; el < upgrades.length; el++) {
        for (let i = 2; i < 5; i++) {
            elem = upgrades[el].childNodes[i];
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
    }
}

function addAllElementsToDomInventory() {
    Object.keys(materials).forEach((type, index) => {
        let list = sa('.itemsList')[index];

        Object.keys(materials[type]).forEach((material) => {
            let materialIndex = materials[type][material].index

            const item = createDiv('invItem');
            const invItemName = createDiv('invItemName');
            const invItemQuantity = createDiv('invItemQuantity');
        
            invItemName.textContent = camelCaseToNormal(material);
            invItemName.dataset.name = material;
            
            invItemQuantity.textContent = materials[type][material].quantity;

            item.appendChild(invItemName);
            item.appendChild(invItemQuantity);
            list.appendChild(item);
        })
    })
    
    updateInventory();
}

let removeAllMaterialsQuantities = function() {
    for(let type in materials) {
        for(let item in materials[type]) {
            materials[type][item].quantity = 0
        }
    }
}

function generateDomUpgrade(type, name) {
    const upgrade = createDiv(`upgrade`);
    upgrade.dataset.type = type;

    const upgLevel = createDiv(`upgradeLevel`);

    const upgName = createDiv(`upgradeName`);
    upgName.dataset.name = name;
    upgName.textContent = camelCaseToNormal(name);

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


    // REQUIRED ITEMS 
    const reqItems = createDiv(`upgradeReqItems`, 'activeUpgrade');
    const reqItemsTitle = createDiv("upgradeReqItemsTitle");
    reqItemsTitle.textContent = "Required items:";
    const reqItemsItems = createDiv(`upgradeReqItemsItems`);

    const reqLvlTierTitle = createDiv("upgradeReqLvlTierTitle");
    const reqLvlTier = createDiv("upgradeReqLvlTier");

    for (let mat in upgrades[type][name].requiredMaterials) {

        const reqItem = createDiv(`upgradeReqItem`);
        reqItem.dataset.name = mat;
        const spanName = addSpan(camelCaseToNormal(mat));
        // remove later- ---- 
        spanName.style.width = '100px';
        spanName.style.float = 'left';

        const spanQuantity = addSpan();

        appendMoreChilds(reqItem, spanName, spanQuantity);
        reqItemsItems.appendChild(reqItem);
    }

    appendMoreChilds(reqItems, reqItemsTitle, reqLvlTierTitle, reqItemsItems, reqLvlTier);
    appendMoreChilds(upgrade, upgLevel, upgName, button, stats, reqItems);

    s(`.${type}UpgradesList`).appendChild(upgrade);
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

        let type = element.dataset.type
        let upgName = nameElement.dataset.name
        let requiredMaterials = upgrades[type][upgName].requiredMaterials
        let requiredLevelTier = upgrades[type][upgName].requiredLevel

        if (areUpgradeMaterialsAvailable(requiredMaterials) &&
            areUpgradeRequirementsMet(nameElement.dataset.name)) {
            levelElement.style.backgroundColor =  greenColor;
            nameElement.style.backgroundColor = greenColor;
        } else {
            levelElement.style.backgroundColor = redColor;
            nameElement.style.backgroundColor = redColor;
        }
    });
}

function generateMaterialGatheringTab(tab, type) {
    tab.dataset.sort = 'farming'
    tab.dataset.type = type
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
        let currentLevel = createDiv('areaCurrentLevel');
        let totalLevel = createDiv('areaTotalLevel');
        let isUnlocked = createDiv('areaUnlocked');
        let progress = createDiv('areaProgress');

        // AREA INFORMATION ON HOVER
        const areaHover = createDiv('areaHover');
        switch (i) {
            case 0:
                areaHover.classList.add('topLeftAreaHover');
                break;
            case 1:
                areaHover.classList.add('topRightHover');
                break;
            case 2:
                areaHover.classList.add('botLeftHover');
                break;
            case 3:
                areaHover.classList.add('botRightHover');
                break;
            default:
                break;
        }

        areaHover.textContent = "This area contains: "

        area.style.position = 'relative';

        area.addEventListener('mouseenter', x => {
            x.target.childNodes.forEach(el => {
                if (el.classList.contains("areaHover")) {
                    el.style.visibility = "visible";
                }
            });
        });
        area.addEventListener('mouseleave', x => {
            x.target.childNodes.forEach(el => {
                if (el.classList.contains("areaHover")) {
                    el.style.visibility = "hidden";
                }
            });
        });

        if (i == 0) {
            area.classList.add('activeArea');
        }

        appendMoreChilds(area, name, currentLevel, totalLevel, isUnlocked, progress, areaHover);
        areas.appendChild(area);
    }
    // end adding areas

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

    let log = createDiv('log');
    const clearLogButton = createDiv('clearLogButton');
    clearLogButton.textContent = 'Clear log';
    log.appendChild(clearLogButton);
    let progress = createDiv('progress');
    let HPbar = createDiv('HPbar');
    appendMoreChilds(progress, addSpan('Health: 0 / 0'), HPbar)

    appendMoreChilds(tab, toolName, toolTier, toolBonuses, areas, material, log, progress);
}

function resetHPandMat(tab) {
    let material = tab.childNodes[4];
    let HPbar = tab.childNodes[6];

    material.childNodes[0].textContent = 'Click to start';
    HPbar.childNodes[0].textContent = 'Health: 0 / 0';

    material.style.backgroundColor = 'white';
    HPbar.childNodes[1].style.width = '0px';

}

let resetHPandMatAll = function () {
    sa('.fieldTab').forEach(tab => {
        if (tab.dataset.sort === "farming") {
            resetHPandMat(tab);
        }
    })
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
    el.childNodes[0].textContent = "Health: " + Math.ceil(curHP) + "/" + totalHP;
    let width = curHP / totalHP * 100;
    let color = curHP / totalHP * 255;
    el.childNodes[1].style.backgroundColor = `rgb(200, ${color}, 0)`;
    el.childNodes[1].style.width = `${width}%`;
}


// FIX COLORS
function updateAreas() {
    sa('.areas').forEach((domAreas, tabIndex) => {
        domAreas.childNodes.forEach((area, index) => {

            let name = area.childNodes[0];
            let currentLevel = area.childNodes[1];
            let totalLevel = area.childNodes[2];
            let unlocked = area.childNodes[3];
            let progress = area.childNodes[4];
            let areaHover = area.childNodes[5];

            let currentArea = areas[`${domAreas.dataset.type}`][`${index}`];

            name.textContent = currentArea.name;
            currentLevel.textContent = `current level: ${currentArea.level}`;
            totalLevel.textContent = `total level: ${currentArea.totalLevel}`;
            if (currentArea.unlocked) {
                unlocked.textContent = 'Area unlocked!';
                unlocked.style.backgroundColor = greenColor;
                unlocked.style.color = 'rgb(11, 55, 3)';
            } else {
                let previousArea = areas[`${domAreas.dataset.type}`][`${index - 1}`];
                unlocked.textContent = `Area locked. Need lvl ${currentArea.previousAreaLevelRequired} ${previousArea.name}.`;
                unlocked.style.backgroundColor = redColor;
                unlocked.style.color = 'rgb(44, 22, 33)';
            }

            
            if (currentArea.level < currentArea.totalLevel) {
                progress.textContent = '';
            } else {
                progress.textContent = `${currentArea.materialsDropped} / ${currentArea.requiredMaterialsForNextLevel}`;
            }

            let areaItems = createDiv();
            appendMoreChilds(areaItems, addSpan('This area contains: '), addBR());
            let materialChanceArr = getDropChance(currentArea.materials);

            materialChanceArr.forEach(mat => {
                appendMoreChilds(areaItems, addSpan(mat), addBR());
            });

            // reset innerHTML, so it does not stack when updated twice
            areaHover.innerHTML = '';
            areaHover.appendChild(areaItems);
        });
    });
}

function updateToolStats() {

    for (let type in tools) {
        let tool = tools[type];

        // + 1, because we start from second tab
        let elements = sa(`.fieldTab:nth-of-type(${Number(tool.index) + 2}) > div`);

        let toolName = elements[0];
        const toolTier = elements[1].childNodes;
        const toolBonuses = elements[2].childNodes;

        toolName.textContent = tool.name;
        toolTier[3].textContent = tool.xp.tier;
        toolBonuses[0].textContent = "Level : " + tool.xp.level;
        toolBonuses[2].textContent = "XP : " + tool.xp.currentXp + "/" + tool.xp.neededXp + " (" + tool.xp.totalXP + ")";
        toolBonuses[4].textContent = "Power : " + Math.floor(tool.power);
        toolBonuses[6].textContent = "Atacks per second : " + (1000 / tool.aps).toFixed(2);
    }
}

// add woodcutting, hunting, etc.
function updateInventory() {
    const invItems = sa('.invItem');
    let quantity;

    invItems.forEach((item, i, list) => {
        let name = item.childNodes[0].dataset.name;
        for (let itemGroup in materials) {
            if (materials[itemGroup][name] !== undefined) {
                quantity = materials[itemGroup][name].quantity;
                break;
            }
        }
        item.childNodes[1].textContent = quantity;
        if (item.childNodes[1].textContent == 0) {
            item.style.display = 'none'
        } else {
            item.style.display = 'grid'
        }
    });
}

function updateUpgradesCost() {
    for (let upg in upgrades) {
        for (let upgName in upgrades[upg]) {
            for (let material in upgrades[upg][upgName].requiredMaterials) {

                let total = upgrades[upg][upgName].requiredMaterials[material].initialRequired;

                upgrades[upg][upgName].requiredMaterials[material].required = upgrades[upg][upgName].requiredMaterials[material].initialRequired;

                for (let i = 1; i < multiplier; i++) {
                    upgrades[upg][upgName].requiredMaterials[material].required += upgrades[upg][upgName].requiredMaterials[material].requiredOnLevel;
                    total += upgrades[upg][upgName].requiredMaterials[material].required;
                }
                upgrades[upg][upgName].requiredMaterials[material].required = total;
            }
        }
    }
}

function updateUpgrades() {
    sa('.upgrade').forEach((upgrade) => {
        let name = upgrade.childNodes[1].dataset.name;
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
        let currentBonus = upgrades[type][name].currentBonus;

        let nextLevelBonusDisplay = upgrade.childNodes[3].childNodes[1].childNodes[2];
        let nextLevelBonus = upgrades[type][name].currentBonus + upgrades[type][name].bonusOnLevel;

        if (upgrades[type][name]['value'] == 'flat') {
            currentBonusDisplay.textContent = currentBonus;
            nextLevelBonusDisplay.textContent = nextLevelBonus;
        } else if (upgrades[type][name]['value'] == 'percent') {
            currentBonusDisplay.textContent = (currentBonus * 100).toFixed(2) + "%";
            nextLevelBonusDisplay.textContent = ((nextLevelBonus) * 100).toFixed(2) + "%";
        }

        upgrade.childNodes[4].childNodes[2].childNodes.forEach((reqItem) => {
            let itemName = reqItem.dataset.name;
            let quantity = reqItem.childNodes[1];

            quantity.textContent = upgrades[type][name].requiredMaterials[itemName].required;
        })

        if (upgrades[type][name].hasOwnProperty('requiredLevel')) {
            upgrade.childNodes[4].childNodes[1].textContent = 'Required level';
            upgrade.childNodes[4].childNodes[3].textContent = upgrades[type][name].requiredLevel;
        } else if (upgrades[type][name].hasOwnProperty('requiredTier')) {
            upgrade.childNodes[4].childNodes[1].textContent = 'Required tier';
            upgrade.childNodes[4].childNodes[3].textContent = upgrades[type][name].requiredTier;
        }


        updateUpgradesCost();
    });
}


function updateMaterialLevels() {
    sa('.material')[main.mining.index].childNodes[1].textContent = main.mining.area.level;
    //toDo add the other tabs
}



function updateEverything() {
    updateInventory()
    updateToolStats()
    updateUpgrades()
    markUpgradesBuyable()
    unlockAreas()
    updateAreas()
    updateShop()
}

// END OF UPDATES



let clearLog = function (element) {
    while (element.childNodes.length > 1) {
        element.removeChild(element.lastChild);
    }
}

let clearLogs = function () {
    sa('.log').forEach(element => {
        clearLog(element)
    })
}



let generateShop = () => {
    let tab = sa('.fieldTab')[4]
    let shopMenu = createDiv('shopMenu')
    let coins = createDiv('coins')
    coins.textContent = main.coins
    shopMenu.appendChild(coins)

    // SELL
    let sellDiv = createDiv('sellDiv')
    
    Object.keys(materials).forEach(type => {
        let sellType = createDiv('expandable')
        sellType.textContent = type
        let sellList = createDiv('sellList', 'expanded')
        sellList.dataset.type = type

        addShopItems(sellList, type)
        appendMoreChilds(sellDiv, sellType, sellList)
    })

    let sellButton = createDiv('sellButton')
    sellButton.innerHTML = 'SELL <br> '

    // BUY
    let buyDiv = createDiv('buyDiv')

    Object.keys(materials).forEach(type => {
        let buyType = createDiv('expandable')
        buyType.textContent = type
        let buyList = createDiv('buyList', 'expanded')
        buyList.dataset.type = type

        addShopItems(buyList, type)
        appendMoreChilds(buyDiv, buyType, buyList)
    })

    let buyButton = createDiv('buyButton')
    buyButton.innerHTML = 'BUY <br> '

    appendMoreChilds(tab, shopMenu, sellDiv, buyDiv, sellButton, buyButton)
}


let addShopItems = (list, type) => {
    Object.keys(materials[type]).forEach(item => {
        let group = list.classList.contains('buyList') ? 'Buy' : 'Sell'
        
        // if (materials[type][item].quantity <= 0 && group == 'Sell') return

        let shopItem = createDiv('shopItem')
        shopItem.dataset.itemName = item

        let name = createDiv('itemName')
        name.textContent = camelCaseToNormal(item)
        let quantity = createDiv('itemQuantity')
        let price = createDiv('itemPrice')

        let buyQuantity = document.createElement('input');
        buyQuantity.className = 'inputBox'

        let sellAllButton = document.createElement('button');
        sellAllButton.textContent = 'Max'
        sellAllButton.addEventListener('click', () => {
            buyQuantity.value = materials[type][item].quantity
            toggleSellButton()
        })

        if (group == 'Sell') {
            appendMoreChilds(shopItem, name, quantity, price, buyQuantity, sellAllButton)
        } else {
            appendMoreChilds(shopItem, name, quantity, price, buyQuantity)
        }

        list.appendChild(shopItem)
    })
}

// change display type
let updateShop = () => {
    let tab = sa('.fieldTab')[4]
    let coins = tab.childNodes[0].childNodes[0]
    coins.textContent = main.coins

    sa('.sellList').forEach(list => {
        let type = list.dataset.type
        list.childNodes.forEach(item => {
            let itemName = item.dataset.itemName
            item.querySelector('.itemQuantity').textContent = materials[type][itemName].quantity
            item.querySelector('.itemPrice').textContent = 'Sell price :' + materials[type][itemName].sellPrice
            
            if (item.childNodes[1].textContent == 0) {
                item.style.display = 'none'
            } else {
                item.style.display = 'inline-block'
            }
        })
    })

    sa('.buyList').forEach(list => {
        let type = list.dataset.type
        list.childNodes.forEach(item => {
            let itemName = item.dataset.itemName
            item.querySelector('.itemQuantity').textContent = materials[type][itemName].quantity
            item.querySelector('.itemPrice').textContent = 'Buy price: ' + materials[type][itemName].buyPrice
        })
    })

    toggleSellButton()
    toggleBuyButton()
}

let toggleSellButton = () => {
    let totalValue = 0;
    let missingMaterial = false

    sa('div.sellDiv > div > div.shopItem').forEach(x => {
        let [quantity, shopItemName] = [x.childNodes[3].value, x.dataset.itemName];
        
        // IGNORE FIELDS WITH 0 or no value
        if (quantity.trim() === "") return
        quantity = parseInt(quantity)

        for (let type in materials) {
            for (let item in materials[type]) {
                if (shopItemName == item) {
                    if (materials[type][item].quantity >= quantity) {
                        totalValue += materials[type][item].sellPrice * quantity
                    } else {
                        missingMaterial = true
                    }
                }
            }
        }
    })

    if (!missingMaterial && totalValue != 0) {
        s('.sellButton').style.background = greenColor
        s('.sellButton').innerHTML = `SELL <br> Total value: ${totalValue}`
        s('.sellButton').addEventListener('click', sell)
    } else {
        s('.sellButton').style.background = redColor
        s('.sellButton').innerHTML = `SELL <br>`
        s('.sellButton').removeEventListener('click', sell)
    }
}

let toggleBuyButton = () => {
    let totalCost = 0;

    sa('div.buyDiv > div > div.shopItem').forEach(x => {
        let [quantity, shopItemName] = [x.childNodes[3].value, x.dataset.itemName];
        
        // IGNORE FIELDS WITH 0 or no value
        if (quantity.trim() === "") return
        quantity = parseInt(quantity)

        for (let type in materials) {
            for (let item in materials[type]) {
                if (shopItemName == item) {
                    totalCost += materials[type][item].buyPrice * quantity
                }
            }
        }
    })

    if (totalCost <= main.coins && totalCost != 0) {
        s('.buyButton').style.background = greenColor
        s('.buyButton').innerHTML = `BUY <br> Total cost: ${totalCost}`
        s('.buyButton').addEventListener('click', buy)
    } else {
        s('.buyButton').style.background = redColor
        s('.buyButton').innerHTML = `BUY <br>`
        s('.buyButton').removeEventListener('click', buy)
    }
}