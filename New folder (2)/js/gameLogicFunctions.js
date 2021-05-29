let increaseToolXP = (tool, xp) => {

    // xp = Math.round(xp + xp * tool.bonusXPfromTier * tool.tier);
    tool.xp.currentXp += xp;
    tool.xp.totalXP += xp;
    while (tool.xp.currentXp >= tool.xp.neededXp) {
        tool.xp.level += 1;
        tool.xp.currentXp -= tool.xp.neededXp;
        tool.xp.neededXp += tool.xp.neededXpOnLevel;
        tool.damage.powerFromLevels += tool.damage.powerOnLevel;
    }
}

let getRandomElement = (mats) => {
    let items = Object.keys(mats);
    let chances = [];
    
    for (let key in mats) chances.push(mats[key].chance);

    let q = 0;
    chances = chances.map((el) => q = el + q);

    let rand = Math.random() * chances[chances.length - 1];

    let material = items[chances.filter(el => el <= rand).length];
    return material
}

let getDropChance = (mats) => {
    
    let chances = [];
    for (let key in mats) chances.push(mats[key].chance);
    let sum = 0;
    sum = chances.reduce((e1, e2) => sum = e1 + e2, 0);

    let materialChanceArr = [];

    for (let mat in mats) {
        materialChanceArr.push(`${mat} : ${(mats[mat].chance / sum * 100).toFixed(2)}%`);
    }
    return materialChanceArr;
}

let areUpgradeMaterialsAvailable = (requiredMaterials) => {
    for (let mat in requiredMaterials) {
        for (let type in materials) {
            if (materials[type].hasOwnProperty(mat)) {
                if (materials[type][mat].quantity < requiredMaterials[mat].required) {
                    return false;
                }
            }
        }
    }

    return true;
}

let areUpgradeRequirementsMet = (upgradeName) => {
    let t;
    let reqLevel;
    let reqTier;

    for (let type in upgrades) {
        if (upgrades[type].hasOwnProperty(upgradeName)) {
            for (let prop in upgrades[type][upgradeName]) {
                if (prop == 'requiredLevel') {
                    t = type;
                    reqLevel = upgrades[type][upgradeName][prop];
                    break;
                } else if (prop == 'requiredTier') {
                    t = type;
                    reqTier = upgrades[type][upgradeName][prop];
                    break;
                }
            }
        }
    }
    
    if (t == 'mining') {
        if (reqLevel != undefined) {
            if (tools.mining.xp.level < reqLevel) {
                return false
            }
        } else if (reqTier != undefined) {
            if (tools.mining.xp.tier < reqTier) {
                return false
            }
        }
    }
    return true
}

let removeUpgradeMaterials = (upgradeName) => {
    let reqMats
    for (let type in upgrades) {
        if (upgrades[type].hasOwnProperty(upgradeName)) {
            reqMats = upgrades[type][upgradeName].requiredMaterials
        }
    }

    for (let mat in reqMats) {
        for (let type in materials) {
            if (materials[type].hasOwnProperty(mat)) {
                materials[type][mat].quantity -= reqMats[mat].required
            }
        }
    }

    updateInventory()
}

let removeUpgradeLevelsOrTier = (upgradeName) => {
    let t;
    let reqLevel;
    let reqTier;

    for (let type in upgrades) {
        if (upgrades[type].hasOwnProperty(upgradeName)) {
            for (let prop in upgrades[type][upgradeName]) {
                if (prop == 'requiredLevel') {
                    t = type;
                    reqLevel = upgrades[type][upgradeName][prop];
                    break;
                } else if (prop == 'requiredTier') {
                    t = type;
                    reqTier = upgrades[type][upgradeName][prop];
                    break;
                }
            }
        }
    }


    if (t == 'miningUpgrades') {
        if (tools.mining.xp.level >= reqLevel) {
            tools.mining.xp.level = 1;
            tools.mining.xp.neededXp = tools.mining.xp.initialNeededXp;
            tools.mining.xp.currentXp = 0;
            tools.mining.xp.totalXP = 0;
            tools.mining.damage.powerFromLevels = 0;
        }
        if (tools.mining.xp.tier >= reqTier) {
            tools.mining.xp.tier = 1;
        }
    } else if (t == 'woodcuttingUpgrades') {

    }



}

let addUpgradeBonus = (upgradeName) => {

    let bonus;
    let type;

    for (let upg in upgrades) {
        if (upgrades[upg].hasOwnProperty(upgradeName)) {
            bonus = upgrades[upg][upgradeName].bonusOnLevel;
            type = upg;
            break;
        }
    }

    let requiredMaterials = upgrades[type][upgradeName].requiredMaterials;
    
    for (let i = 0; i < multiplier; i++) {
        if (type == 'mining') addMiningUpgradeBonus(upgradeName, bonus);
        if (type == 'woodcutting') addWoodcuttingUpgradeBonus(upgradeName, bonus);
        if (type == 'hunting') addHuntingUpgradeBonus(upgradeName, bonus);
        
        increaseUpgradeRequirements(requiredMaterials);
        
        upgrades[type][upgradeName].level += 1;
        upgrades[type][upgradeName].currentBonus += bonus;
    }
    updateUpgradesCost();
}

function addMiningUpgradeBonus(upgradeName, bonus) {
    const tool = tools.mining;
    if (upgradeName == "increasePickaxePower") {
        tool.damage.powerFromUpgrades += bonus;
    } else if (upgradeName == "increasePickaxeAtackSpeed") {
        tool.aps *= 1 - bonus;
        // if (upgrades[type][upgradeName]['level'] === 301) {
        //     upgrades[type][upgradeName]['level'] = "MAX";
        // } else if (upgrades[type][upgradeName]['level'] == "MAX") {
        // }
    } else if (upgradeName == "upgradeTier") {
        tool.xp.tier += bonus;
    } else if (upgradeName == "decreaseLookingForMaterialTime") {
        tool.lookingForTime *= 1 - bonus;
    } else if (upgradeName == "upgradePickaxe") {
        if (tool.upgrade.list.length - 1 === tool.upgrade.index) {
            console.log("last upgrade reached");
            return;
        }
        tool.upgrade.index++;
    } else if (upgradeName == "addChanceForDoubleMaterialGain") {
        tool.chanceForDoubleMaterial += bonus;
    }

    if (upgradeName == 'increaseStoneDrop') increaseDrop('stone')
    if (upgradeName == 'increaseIronOredrop') increaseDrop('ironOre')
    if (upgradeName == 'increaseCopperDrop') increaseDrop('copper')
    if (upgradeName == 'increaseSilverDrop') increaseDrop('silver')
    if (upgradeName == 'increaseGoldDrop') increaseDrop('gold')
    if (upgradeName == 'increasePlatinumDrop') increaseDrop('platinum')

    if (upgradeName == 'increaseChanceToFindDiamond') {
        areas.mining.area1['diamond'].chance += areas.mining.area1['diamond'].chance * bonus;
    } else if (upgradeName == 'increaseChanceToFindAzurite') {
        areas.mining.area2['azurite'].chance += areas.mining.area1['azurite'].chance * bonus;
    } else if (upgradeName == 'increaseChanceToFindOnyx') {
        areas.mining.area3['onyx'].chance += areas.mining.area1['onyx'].chance * bonus;
    } else if (upgradeName == 'increaseChanceToFindBlackStarDiopside') {
        areas.mining.area4['blackStarDiopside'].chance += areas.mining.area1['blackStarDiopside'].chance * bonus;
    }
}

function addWoodcuttingUpgradeBonus() {

}

function addHuntingUpgradeBonus() {

}


// PERHAPS SIMPLiFY THIS FUNCTION
function increaseDrop(material) {
    let type;

    for(let t in areas) {
        for (let area in areas[t]) {
            if (areas[t][area].materials.hasOwnProperty(material)) {
                type = t;
            }
        }
    }
    for(let area in areas[type]) {
        if (areas[type][area].materials[material] != undefined) {
            areas[type][area].materials[material].drop += 1;
        }
    }
}



function increaseUpgradeRequirements(requiredMaterials) {
    for (let mat in requiredMaterials) {
        // row below have to be CHANGED!!!! 
        // requiredMaterials[mat].initialRequired += requiredMaterials[mat].requiredOnLevel;
        requiredMaterials[mat].required += requiredMaterials[mat].requiredOnLevel;
    }
}

let getDropQuantity = function(mainType) {
    let drop = mainType.materials[mainType.material].drop;
    let rand = Math.floor(Math.random() * 100) + 1;

    if (mainType.tool.chanceForDoubleMaterial >= rand) {
        drop *= 2;
    }

    drop += drop * mainType.tool.bonusDrop;
    return drop;
}


function logElementColor(e, mat) {
    if (mat == "dirt") e.style.color = "gold";
    // add materials
}

function materialColor(e, mat) {
    e.childNodes[0].textContent = `${camelCaseToNormal(mat)}`;
    e.childNodes[0].dataset.name = mat;
    if (mat === "gold") e.style.backgroundColor = "yellow";
    if (mat === "Looking for material") e.style.backgroundColor = "white";
    // add colors to other materials
}


function getMaterialHealth(mainType) {
    return mainType.materials[mainType.material].health *
    mainType.area.level / 
    mainType.tool.lowerMaterialHealth;
}

// update level *** 
function unlockAreas() {
    Object.keys(areas).forEach((type, typeIndex) => {
        Object.keys(areas[type]).forEach((area, areaIndex) => {
            if (areas[type][area].hasOwnProperty('previousAreaLevelRequired') && 
            areas[type][areaIndex-1].level >= areas[type][area].previousAreaLevelRequired) {
                areas[type][area].unlocked = true;
            }
        })
    })
}


let resetProgress = function() {
    removeAllMaterialsQuantities()
    resetIntervals()
    clearLogs()
    resetHPandMatAll()
    materials = new Materials()
    tools = new Tools()
    upgrades = new Upgrades()
    areas = new Areas()
    main = new Main()
}

let resetIntervals = () => {
    Object.keys(main).forEach(type => {
        clearInterval(main[type].breakingTime)
        clearTimeout(main[type].timeout)
    })
}


let camelCaseToNormal = function(str) {
    let output = "";
    output += str[0].toUpperCase();
    for (let i = 1; i < str.length; i++) {
        const letter = str[i];
        if (letter.toUpperCase() === letter) {
            output += ' ';
        }
        output += letter.toLowerCase();
    }
    return output;
}


let updateLocalStorage = function() {
    localStorage.setItem('materials', JSON.stringify(materials))
    localStorage.setItem('tools', JSON.stringify(tools))
    localStorage.setItem('areas', JSON.stringify(areas))
    localStorage.setItem('upgrades', JSON.stringify(upgrades))
    localStorage.setItem('main', JSON.stringify(main))
}


let buy = () => {
    let totalCost = 0;
    let materialsClone = new Materials(JSON.parse(JSON.stringify(materials)))

    sa('div.buyDiv > div > div.shopItem').forEach(x => {
        let [quantity, shopItemName] = [x.childNodes[3].value, x.dataset.itemName];
        x.childNodes[3].value = '' // RESET FIELDS AFTER CLICK
        
        // IGNORE FIELDS WITH 0 or no value
        if (quantity.trim() === "") return
        quantity = parseInt(quantity)

        for (let type in materials) {
            for (let item in materials[type]) {
                if (shopItemName == item) {
                    materialsClone[type][item].quantity += quantity
                    totalCost += materials[type][item].buyPrice * quantity
                }
            }
        }
    })

    if (main.coins - totalCost >= 0) {
        main.coins -= totalCost;
        materials = materialsClone
    }

    updateEverything()
}

let sell = () => {
    let totalValue = 0;
    let missingMaterial = false

    sa('div.sellDiv > div > div.shopItem').forEach(x => {
        let [quantity, shopItemName] = [x.childNodes[3].value, x.dataset.itemName];
        x.childNodes[3].value = '' // RESET FIELDS AFTER CLICK
        
        // IGNORE FIELDS WITH 0 or no value
        if (quantity.trim() === "") return
        quantity = parseInt(quantity)

        for (let type in materials) {
            for (let item in materials[type]) {
                if (shopItemName == item) {
                    if (materials[type][item].quantity >= quantity) {
                        materials[type][item].quantity -= quantity
                        totalValue += materials[type][item].sellPrice * quantity
                    } else {
                        missingMaterial = true
                    }
                }
            }
        }
    })

    if (!missingMaterial) {
        main.coins += totalValue;
    } else {
        alert("Not enough materials")
    }

    updateEverything()
}

