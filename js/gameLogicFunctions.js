function increaseToolXP(tool, xp) {

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

function getRandomElement(mats) {
    let items = Object.keys(mats);
    let chances = [];
    
    for (let key in mats) chances.push(mats[key].chance);

    let q = 0;
    chances = chances.map((el) => q = el + q);

    let rand = Math.random() * chances[chances.length - 1];

    let material = items[chances.filter(el => el <= rand).length];
    return material
}

function getDropChance(mats) {
    
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

//increase pickaxe power = upgradeName
function areUpgradeMaterialsAvailable(upgradeName) {
    let reqMats;
    for (let type in upgrades) {
        if (upgrades[type].hasOwnProperty(upgradeName)) {
            reqMats = upgrades[type][upgradeName].requiredMaterials;
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

    // if materials found are less than required, return
    if(found < Object.keys(reqMats).length) {
        return false;
    }

    for (let mat in reqMats) {
        for (let group in inventoryMaterials) {
            if (inventoryMaterials[group].hasOwnProperty(mat)) {
                if (inventoryMaterials[group][mat] < reqMats[mat].required) {
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
                if (prop == 'requiredLevels') {
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
        if (reqLevel != undefined) {
            if (tools.miningTool.xp.level < reqLevel) {
                return false
            }
        } else if (reqTier != undefined) {
            if (tools.miningTool.xp.tier < reqTier) {
                return false
            }
        }
    }
    return true
}

function removeUpgradeMaterials(upgradeName) {
    let reqMats;
    for (let type in upgrades) {
        if (upgrades[type].hasOwnProperty(upgradeName)) {
            reqMats = upgrades[type][upgradeName].requiredMaterials;
        }
    }

    for (let mat in reqMats) {
        for (let group in inventoryMaterials) {
            if (inventoryMaterials[group].hasOwnProperty(mat)) {
                inventoryMaterials[group][mat] -= reqMats[mat].required;
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
                if (prop == 'requiredLevels') {
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
        if (tools.miningTool.xp.level >= reqLevel) {
            tools.miningTool.xp.level = 1;
            tools.miningToolxp.neededXp = tools.miningTool.xp.initialNeededXp;
            tools.miningTool.xp.currentXp = 0;
            tools.miningTool.xp.totalXP = 0;
            tools.miningTool.damage.powerFromLevels = 0;
        }
        if (tools.miningTool.xp.tier >= reqTier) {
            tools.miningTool.xp.tier = 1;
        }
    } else if (t == 'woodcuttingUpgrades') {

    }



}

function addUpgradeBonus(upgradeName) {

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
        if (type == 'miningUpgrades') addMiningUpgradeBonus(upgradeName, bonus);
        if (type == 'woodcuttingUpgrades') addWoodcuttingUpgradeBonus(upgradeName, bonus);
        if (type == 'huntingUpgrades') addHuntingUpgradeBonus(upgradeName, bonus);
        
        increaseUpgradeRequirements(requiredMaterials);
        
        upgrades[type][upgradeName].level += 1;
        upgrades[type][upgradeName].currentBonus += bonus;
    }
    updateUpgradesCost();
}






function addMiningUpgradeBonus(upgradeName, bonus) {
    if (upgradeName == "increasePickaxePower") {
        tools.miningTool.damage.powerFromUpgrades += bonus;
    } else if (upgradeName == "increasePickaxeAtackSpeed") {
        tools.miningTool.aps *= 1 - bonus;
        // if (upgrades[type][upgradeName]['level'] === 301) {
        //     upgrades[type][upgradeName]['level'] = "MAX";
        // } else if (upgrades[type][upgradeName]['level'] == "MAX") {
        // }
    } else if (upgradeName == "upgradeTier") {
        tools.miningTool.xp.tier += bonus;
    } else if (upgradeName == "decreaseLookingForMaterialTime") {
        tools.miningTool.lookingForTime *= 1 - bonus;
    } else if (upgradeName == "upgradePickaxe") {
        
    } else if (upgradeName == "addChanceForDoubleMaterialGain") {
        tools.miningTool.chanceForDoubleMaterial += bonus;
    }

    if (upgradeName == 'increaseStoneDrop') increaseDrop('stone')
    if (upgradeName == 'increaseIronOredrop') increaseDrop('ironOre')
    if (upgradeName == 'increaseCopperDrop') increaseDrop('copper')
    if (upgradeName == 'increaseSilverDrop') increaseDrop('silver')
    if (upgradeName == 'increaseGoldDrop') increaseDrop('gold')
    if (upgradeName == 'increasePlatinumDrop') increaseDrop('platinum')

    if (upgradeName == 'increaseChanceToFindDiamond') {
        areas.miningAreas.area1['diamond'].chance += areas.miningAreas.area1['diamond'].chance * bonus;
    } else if (upgradeName == 'increaseChanceToFindAzurite') {
        areas.miningAreas.area2['azurite'].chance += areas.miningAreas.area1['azurite'].chance * bonus;
    } else if (upgradeName == 'increaseChanceToFindOnyx') {
        areas.miningAreas.area3['onyx'].chance += areas.miningAreas.area1['onyx'].chance * bonus;
    } else if (upgradeName == 'increaseChanceToFindBlackStarDiopside') {
        areas.miningAreas.area4['blackStarDiopside'].chance += areas.miningAreas.area1['blackStarDiopside'].chance * bonus;
    }
}

function addWoodcuttingUpgradeBonus() {

}

function addHuntingUpgradeBonus() {

}

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
        requiredMaterials[mat].initialRequired += requiredMaterials[mat].requiredOnLevel;
        requiredMaterials[mat].required += requiredMaterials[mat].requiredOnLevel;
    }
}


function createMaterial(index, health, healthOnLevel, xp, drop, chance, totalDropped) {
    return {
        index: index,
        health: health,
        healthOnLevel: healthOnLevel,
        xp: xp,
        // think about this below
        xpOnLevel: xp,
        drop: drop,
        chance: chance,
        totalDropped: totalDropped,
    }
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

function getMaterialHealth(mainType) {
    return mainType.area.materials[mainType.material].health * mainType.area.level;
}


// update level *** 
function unlockAreas() {
    Object.keys(areas).forEach((areaType, typeIndex) => {
        Object.keys(areas[areaType]).forEach((area, areaIndex) => {

            if (areas[areaType][area].level >= 3) {
                if (areas[areaType][`area${areaIndex + 2}`] !== undefined) {
                    areas[areaType][`area${areaIndex + 2}`].unlocked = true;
                }
            }
        })
    })
}


let resetProgress = function() {
    Object.keys(upgrades).forEach(type => {
        Object.keys(upgrades[type]).forEach(upgrade => {
            let upg = upgrades[type][upgrade];
            upg.reset();
        })
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
