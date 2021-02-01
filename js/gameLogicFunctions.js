function increaseToolXP(tool, xp) {

    // xp = Math.round(xp + xp * tool.bonusXPfromTier * tool.tier);
    tool.xp += xp;
    tool.totalXP += xp;
    while (tool.xp >= tool['needed xp']) {
        tool.level += 1;
        tool.xp -= tool['needed xp'];
        tool['needed xp'] += tool['needed xp on level'];
        tool['power from levels'] += tool['power on level'];
    }
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

function getDropChance(mats) {
    
    let chances = [];
    for (let key in mats) chances.push(mats[key]['chance']);
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

    // if materials found are less than required, return
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
            if (tools.miningTool.level < reqLevel) {
                return false
            }
        } else if (reqTier != undefined) {
            if (tools.miningTool.tier < reqTier) {
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
            tools.miningTool['power from levels'] = 0;
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
        if (type == 'miningUpgrades') addMiningUpgradeBonus(upgradeName, bonus);
        if (type == 'woodcuttingUpgrades') addWoodcuttingUpgradeBonus(upgradeName, bonus);
        if (type == 'huntingUpgrades') addHuntingUpgradeBonus(upgradeName, bonus);
        
        increaseUpgradeRequirements(upgrade);
        
        upgrades[type][upgradeName]['level'] += 1;
        upgrades[type][upgradeName]['current bonus'] += bonus;
    }
    updateUpgradesCost();
}






function addMiningUpgradeBonus(upgradeName, bonus) {
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
        tools.miningTool.chanceForDoubleMaterial += bonus;
    }

    if (upgradeName == 'Increase Stone drop') increaseDrop('Stone')
    if (upgradeName == 'Increase Iron Ore drop') increaseDrop('Iron Ore')
    if (upgradeName == 'Increase Copper drop') increaseDrop('Copper')
    if (upgradeName == 'Increase Silver drop') increaseDrop('Silver')
    if (upgradeName == 'Increase Gold drop') increaseDrop('Gold')
    if (upgradeName == 'Increase Platinum drop') increaseDrop('Platinum')

    if (upgradeName == 'Increase chance to find Diamond') {
        areas.miningAreas.area1['Diamond'].chance += areas.miningAreas.area1['Diamond'].chance * bonus;
    } else if (upgradeName == 'Increase chance to find Azurite') {
        areas.miningAreas.area2['Azurite'].chance += areas.miningAreas.area1['Azurite'].chance * bonus;
    } else if (upgradeName == 'Increase chance to find Onyx') {
        areas.miningAreas.area3['Onyx'].chance += areas.miningAreas.area1['Onyx'].chance * bonus;
    } else if (upgradeName == 'Increase chance to find Black Star Diopside') {
        areas.miningAreas.area4['Black Star Diopside'].chance += areas.miningAreas.area1['Black Star Diopside'].chance * bonus;
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
            areas[type][area].materials[material]['drop'] += 1;
        }
    }
}

function increaseUpgradeRequirements(upgrade) {
    for (let upg in upgrade) {
        upgrade[upg]['initial required'] += upgrade[upg]['required on level'];
        upgrade[upg]['required'] += upgrade[upg]['required on level'];
    }
}


function createMaterial(index, health, healthOnLevel, xp, drop, chance, totalDropped) {
    return {
        index: index,
        health: health,
        healthOnLevel: healthOnLevel,
        xp: xp,
        xpOnLevel: xp,
        drop: drop,
        chance: chance,
        totalDropped: totalDropped,
    }
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
    return mainType.area.materials[mainType.material]['health'] * mainType.area.level;
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


