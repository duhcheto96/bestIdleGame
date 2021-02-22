
let inventoryMaterials = {
    miningMaterials: {
        stone: 100,
        loop: 132,
    },
    woodcuttingMaterials: {},
    huntingMaterials: {},
    farmingMaterials: {},
};

let tools = {
    miningTool: {
        reset: function () {
            this.index = 0
            this.getName = function () {
                return this.upgrade.list[this.upgrade.index];
            }
            this.upgrade = {
                index: 0,
                list: ["Wooden pickaxe", "Stone pickaxe",
                    "Iron pickaxe", "Gold pickaxe",
                    "Platinum pickaxe", "Diamond pickaxe"],
                getLessHealthOfMaterials: function() {
                    return this.index / 10 + 1
                },
                getMoreDamageFromLevels: function() {
                    return this.index * 3 / 10 + 1
                },
                getBonusDrop: function() {
                    return this.index
                }
            },
            this.xp = {
                level: 1,
                tier: 1,
                currentXp: 0,
                neededXp: 20,
                totalXP: 0,
                initialNeededXp: 20,
                neededXpOnLevel: 20,
                getBonusXpFromTier: function() {
                    return 0.9 + this.tier / 10
                },
                getBonusDamageFromTier: function() {
                    return 0.9 + this.tier / 10
                }
            }
            this.damage = {
                power: 5,
                initialPower: 5,
                powerOnLevel: 1,
                initialPowerOnLevel: 1,
                powerFromLevels: 0,
                powerFromUpgrades: 0,
            }
            this.aps = 2_000
            this.lookingForTime = 2_000
            this.chanceForDoubleMaterial = 0
            this.getPower = function () {
                return Math.floor((this.damage.power +
                    this.damage.powerFromLevels * 
                    this.upgrade.getMoreDamageFromLevels() +
                    this.damage.powerFromUpgrades) *
                    this.xp.getBonusDamageFromTier());
            }
        }
    },

    woodcuttingTool: {
        reset: function () {
            this.index = 1,
            this.getName = function () {
                return this.upgrade.list[this.upgrade.index];
            }
            this.upgrade = {
                index: 0,
                list: ["Wooden axe", "Stone axe",
                    "Iron axe", "Gold axe",
                    "Platinum axe", "Diamond axe"],
                getLessHealthOfMaterials: function() {
                    return this.index / 10 + 1
                },
                getMoreDamageFromLevels: function() {
                    return this.index * 3 / 10 + 1
                },
                getBonusDrop: function() {
                    return this.index
                }
            }
            this.xp = {
                level: 1,
                tier: 1,
                currentXp: 0,
                neededXp: 1,
                totalXP: 0,
                initialNeededXp: 1,
                neededXpOnLevel: 1,
                getBonusXpFromTier: function() {
                    return 0.9 + this.tier / 10
                },
                getBonusDamageFromTier: function() {
                    return 0.9 + this.tier / 10
                }
            }
            this.damage = {
                power: 5,
                initialPower: 5,
                powerOnLevel: 1,
                initialPowerOnLevel: 2,
                powerFromLevels: 0,
                powerFromUpgrades: 0,
            }
            this.aps = 2_000
            this.lookingForTime = 2_000
            this.chanceForDoubleMaterial = 0
            this.getPower = function () {
                return Math.floor((this.damage.power +
                    this.damage.powerFromLevels * 
                    this.upgrade.getMoreDamageFromLevels() +
                    this.damage.powerFromUpgrades) *
                    this.xp.getBonusDamageFromTier());
            }
        },
    },

    huntingTool: {
        reset: function () {
            this.index = 2,
            this.getName = function () {
                return this.upgrade.list[this.upgrade.index];
            },
            this.upgrade = {
                index: 0,
                list: ["Wooden bow", "Stone bow",
                    "Iron bow", "Gold bow",
                    "Platinum bow", "Diamond bow"],
                lessHealthOfMaterials: 1,
                lessCostOfUpgrades: 1,
                moreDamageFromLevels: 1,
            },
            this.xp = {
                level: 1,
                tier: 1,
                currentXp: 0,
                neededXp: 1,
                totalXP: 0,
                initialNeededXp: 1,
                neededXpOnLevel: 1,
                bonusXpFromTier: 1,
            },
            this.damage = {
                power: 100,
                initialPower: 100,
                powerOnLevel: 2,
                initialPowerOnLevel: 2,
                powerFromLevels: 0,
                powerFromUpgrades: 0,
                bonusDmgFromTier: 1,
            },
            this.aps = 2_00,
            this.lookingForTime = 2_00,
            this.chanceForDoubleMaterial = 0,
            this.getPower = function () {
                return (this.damage.power +
                    this.damage.powerFromLevels +
                    this.damage.powerFromUpgrades) *
                    this.xp.tier;
            }
        },
    },
}

let materials = {
    miningMaterials: {
        stone: (chance) => createMaterial(index = 0, health = 20, xp = 1, chance = chance),
        ironOre: (chance) => createMaterial(index = 1, health = 50, xp = 3, chance = chance),
        copper: (chance) => createMaterial(index = 2, health = 40, xp = 2, chance = chance),
        silver: (chance) => createMaterial(index = 3, health = 100, xp = 5, chance = chance),
        gold: (chance) => createMaterial(index = 4, health = 200, xp = 20, chance = chance),
        platinum: (chance) => createMaterial(index = 5, health = 300, xp = 50, chance = chance),
        lead: (chance) => createMaterial(index = 6, health = 500, xp = 100, chance = chance),
        titanium: (chance) => createMaterial(index = 7, health = 800, xp = 175, chance = chance),
        diamond: (chance) => createMaterial(index = 8, health = 1000, xp = 250, chance = chance),

        bronze: (chance) => createMaterial(index = 9, health = 400, xp = 65, chance = chance),
        chromite: (chance) => createMaterial(index = 10, health = 500, xp = 80, chance = chance),
        cobalt: (chance) => createMaterial(index = 11, health = 450, xp = 75, chance = chance),
        lithium: (chance) => createMaterial(index = 12, health = 700, xp = 110, chance = chance),
        manganese: (chance) => createMaterial(index = 13, health = 300, xp = 40, chance = chance),
        nickel: (chance) => createMaterial(index = 14, health = 900, xp = 300, chance = chance),
        quartz: (chance) => createMaterial(index = 15, health = 900, xp = 300, chance = chance),
        zinc: (chance) => createMaterial(index = 16, health = 900, xp = 300, chance = chance),
        perlite: (chance) => createMaterial(index = 17, health = 900, xp = 300, chance = chance),
        pyrite: (chance) => createMaterial(index = 18, health = 900, xp = 300, chance = chance),
        obsidian: (chance) => createMaterial(index = 19, health = 900, xp = 300, chance = chance),
        azurite: (chance) => createMaterial(index = 20, health = 900, xp = 300, chance = chance),
        amethyst: (chance) => createMaterial(index = 21, health = 900, xp = 300, chance = chance),
        ruby: (chance) => createMaterial(index = 22, health = 900, xp = 300, chance = chance),
        sapphire: (chance) => createMaterial(index = 23, health = 900, xp = 300, chance = chance),
        emerald: (chance) => createMaterial(index = 24, health = 900, xp = 300, chance = chance),
        amber: (chance) => createMaterial(index = 25, health = 900, xp = 300, chance = chance),
        citrine: (chance) => createMaterial(index = 26, health = 900, xp = 300, chance = chance),
        turquoise: (chance) => createMaterial(index = 27, health = 900, xp = 300, chance = chance),
        topaz: (chance) => createMaterial(index = 28, health = 900, xp = 300, chance = chance),
        aquamarine: (chance) => createMaterial(index = 29, health = 900, xp = 300, chance = chance),
        sunstone: (chance) => createMaterial(index = 30, health = 900, xp = 300, chance = chance),
        moonstone: (chance) => createMaterial(index = 31, health = 900, xp = 300, chance = chance),
        bloodstone: (chance) => createMaterial(index = 32, health = 900, xp = 300, chance = chance),
        onyx: (chance) => createMaterial(index = 33, health = 900, xp = 300, chance = chance),
        sulfur: (chance) => createMaterial(index = 34, health = 900, xp = 300, chance = chance),
        
            // Uranium
            // Zeolite
            // Lapis Lazuli
            // Cavansite
            // Garnet
            // Howlite
            // Zircon
            // Tanzanite
            // Black Star Diopside
    },
    woodcuttingMaterials: {
        stick: (chance) => createMaterial(index = 0, health = 20, xp = 1, chance = chance),
        oakWood: (chance) => createMaterial(index = 1, health = 20, xp = 1, chance = chance),
        mapleWood: (chance) => createMaterial(index = 2, health = 20, xp = 1, chance = chance),
        mahagonyWood: (chance) => createMaterial(index = 3, health = 20, xp = 1, chance = chance),
        birchWood: (chance) => createMaterial(index = 4, health = 20, xp = 1, chance = chance),



    },
    huntingMaterials: {
        rabbitLeg: (chance) => createMaterial(index = 0, health = 20, xp = 1, chance = chance),
    }
}


let areas = {
    miningAreas: {
        area1: {
            reset: function () {
                this.materials = {
                    stone: materials.miningMaterials.stone(1000),
                    ironOre: materials.miningMaterials.ironOre(300),
                    copper: materials.miningMaterials.copper(200),
                    silver: materials.miningMaterials.silver(100),
                    gold: materials.miningMaterials.gold(50),
                    platinum: materials.miningMaterials.platinum(25),

                    lead: materials.miningMaterials.lead(10),
                    titanium: materials.miningMaterials.titanium(5),
                    diamond: materials.miningMaterials.diamond(1),
                };
                this.name = 'Iron mine';
                this.index = 0;
                this.level = 1;
                this.totalLevel = 1;
                this.materialsDropped = 0;
                this.requiredMaterialsForNextLevel = 40;
                this.unlocked = true;
            },
        },
        area2: {
            reset: function () {
                this.materials = {
                    stone: materials.miningMaterials.stone(100),
                }
                this.name = 'Platinum mine'
                this.index = 1
                this.level = 1
                this.totalLevel = 1
                this.previousAreaLevelRequired = 50;
                this.materialsDropped = 0
                this.requiredMaterialsForNextLevel = 6
                this.unlocked = false
            }


        },
        area3: {
            reset: function () {

                this.materials = {
                    stone: createMaterial(1, 10, 1, 1, 1, 1000, 0),
                    ironOre: createMaterial(2, 30, 3, 3, 1, 400, 0),
                    copper: createMaterial(3, 20, 2, 2, 1, 250, 0),
                    silver: createMaterial(4, 40, 4, 4, 1, 100, 0),
                    gold: createMaterial(5, 50, 5, 5, 1, 50, 0),
                    platinum: createMaterial(6, 100, 10, 10, 1, 40, 0),
                }
                this.name = 'Gold mine'
                this.index = 2
                this.level = 1
                this.totalLevel = 1
                this.previousAreaLevelRequired = 50;
                this.materialsDropped = 0
                this.requiredMaterialsForNextLevel = 5
                this.unlocked = false
            }



        },
        area4: {
            reset: function () {
                this.materials = {
                    stone: createMaterial(1, 10, 1, 1, 1, 1000, 0),
                    ironOre: createMaterial(2, 30, 3, 3, 1, 400, 0),
                    copper: createMaterial(3, 20, 2, 2, 1, 250, 0),
                    silver: createMaterial(4, 40, 4, 4, 1, 100, 0),
                    gold: createMaterial(5, 50, 5, 5, 1, 50, 0),
                    platinum: createMaterial(6, 100, 10, 10, 1, 40, 0),
                }
                this.name = 'Bingham Canyon mine'
                this.index = 3
                this.level = 1
                this.totalLevel = 1
                this.previousAreaLevelRequired = 50;
                this.materialsDropped = 0
                this.requiredMaterialsForNextLevel = 5
                this.unlocked = false
            }


        },
    },
    woodcuttingAreas: {
        area1: {
            reset: function () {

                this.materials = {
                    stick: createMaterial(1, 20, 1, 10, 100),
                    oakWood: createMaterial(2, 20, 1, 10, 150),
                    mapleWood: createMaterial(3, 20, 1, 10, 200),
                    mahoganyWood: createMaterial(4, 20, 1, 10, 250),
                    birchWood: createMaterial(5, 20, 1, 10, 300),
                }
                this.name = 'w0'
                this.index = 0
                this.level = 1
                this.totalLevel = 1
                this.previousAreaLevelRequired = 50;
                this.materialsDropped = 0
                this.requiredMaterialsForNextLevel = 5
                this.unlocked = true
            }
        },
        area2: {
            reset: function () {

                this.materials = {
                    stick: createMaterial(1, 20, 1, 10, 100),
                    oakWood: createMaterial(2, 20, 1, 10, 150),
                    mapleWood: createMaterial(3, 20, 1, 10, 200),
                    mahoganyWood: createMaterial(4, 20, 1, 10, 250),
                    birchWood: createMaterial(5, 20, 1, 10, 300),
                }
                this.name = 'w1'
                this.index = 1
                this.level = 1
                this.totalLevel = 1
                this.previousAreaLevelRequired = 50;
                this.materialsDropped = 0
                this.requiredMaterialsForNextLevel = 5
                this.unlocked = false
            }
        },
        area3: {
            reset: function () {

                this.materials = {
                    stick: createMaterial(1, 20, 1, 10, 100),
                    oakWood: createMaterial(2, 20, 1, 10, 150),
                    mapleWood: createMaterial(3, 20, 1, 10, 200),
                    mahoganyWood: createMaterial(4, 20, 1, 10, 250),
                    birchWood: createMaterial(5, 20, 1, 10, 300),
                }
                this.name = 'w2'
                this.index = 2
                this.level = 1
                this.totalLevel = 1
                this.previousAreaLevelRequired = 50;
                this.materialsDropped = 0
                this.requiredMaterialsForNextLevel = 5
                this.unlocked = true
            }
        },
        area4: {
            reset: function () {

                this.materials = {
                    stick: createMaterial(1, 20, 1, 10, 100),
                    oakWood: createMaterial(2, 20, 1, 10, 150),
                    mapleWood: createMaterial(3, 20, 1, 10, 200),
                    mahoganyWood: createMaterial(4, 20, 1, 10, 250),
                    birchWood: createMaterial(5, 20, 1, 10, 300),
                }
                this.name = 'w3'
                this.index = 3
                this.level = 1
                this.totalLevel = 1
                this.previousAreaLevelRequired = 50;
                this.materialsDropped = 0
                this.requiredMaterialsForNextLevel = 5
                this.unlocked = true
            }
        },
    },
    huntingAreas: {
        area1: {
            reset: function () {
                this.materials = {
                    rabbitLeg: createMaterial(1, 20, 1, 10, 100),
                    deerHorns: createMaterial(2, 20, 1, 10, 150),
                    deerSkin: createMaterial(3, 20, 1, 10, 200),
                    foxSkin: createMaterial(4, 20, 1, 10, 250),
                    buckSteak: createMaterial(5, 20, 1, 10, 300),
                }
                this.name = 'Forest'
                this.index = 0
                this.level = 1
                this.totalLevel = 1
                this.previousAreaLevelRequired = 50;
                this.materialsDropped = 0
                this.requiredMaterialsForNextLevel = 5
                this.unlocked = true
            }
        },
        area2: {
            reset: function () {
                this.materials = {
                    rabbitLeg: createMaterial(1, 20, 1, 10, 100),
                    deerHorns: createMaterial(2, 20, 1, 10, 150),
                    deerSkin: createMaterial(3, 20, 1, 10, 200),
                    foxSkin: createMaterial(4, 20, 1, 10, 250),
                    buckSteak: createMaterial(5, 20, 1, 10, 300),
                }
                this.name = 'Desert'
                this.index = 1
                this.level = 1
                this.totalLevel = 1
                this.previousAreaLevelRequired = 50;
                this.materialsDropped = 0
                this.requiredMaterialsForNextLevel = 5
                this.unlocked = true
            }
        },
        area3: {
            reset: function () {
                this.materials = {
                    rabbitLeg: createMaterial(1, 20, 1, 10, 100),
                    deerHorns: createMaterial(2, 20, 1, 10, 150),
                    deerSkin: createMaterial(3, 20, 1, 10, 200),
                    foxSkin: createMaterial(4, 20, 1, 10, 250),
                    buckSteak: createMaterial(5, 20, 1, 10, 300),
                }
                this.name = 'Mountain'
                this.index = 2
                this.level = 1
                this.totalLevel = 1
                this.previousAreaLevelRequired = 50;
                this.materialsDropped = 0
                this.requiredMaterialsForNextLevel = 5
                this.unlocked = true
            }
        },
        area4: {
            reset: function () {
                this.materials = {
                    rabbitLeg: createMaterial(1, 20, 1, 10, 100),
                    deerHorns: createMaterial(2, 20, 1, 10, 150),
                    deerSkin: createMaterial(3, 20, 1, 10, 200),
                    foxSkin: createMaterial(4, 20, 1, 10, 250),
                    buckSteak: createMaterial(5, 20, 1, 10, 300),
                }
                this.name = 'Jungle'
                this.index = 3
                this.level = 1
                this.totalLevel = 1
                this.previousAreaLevelRequired = 50;
                this.materialsDropped = 0
                this.requiredMaterialsForNextLevel = 5
                this.unlocked = true
            }
        },
    },
}

let upgrades = {
    miningUpgrades: {
        increasePickaxePower: {
            reset: function () {
                this.level = 0
                this.currentBonus = 0
                this.bonusOnLevel = 2
                this.value = "flat"
                this.requiredMaterials = {
                    stone: {
                        required: 10,
                        initialRequired: 10,
                        requiredOnLevel: 5
                    },
                    copper: {
                        required: 1,
                        initialRequired: 1,
                        requiredOnLevel: 1
                    },
                    ironOre: {
                        required: 3,
                        initialRequired: 3,
                        requiredOnLevel: 1
                    },
                    stick: {
                        required: 5,
                        initialRequired: 5,
                        requiredOnLevel: 1
                    }
                }
            }
        },
        increasePickaxeAtackSpeed: {
            reset: function () {
                this.level = 0
                this.currentBonus = 0
                this.bonusOnLevel = .01
                this.value = "percent"
                this.requiredMaterials = {
                    copper: {
                        required: 1,
                        initialRequired: 1,
                        requiredOnLevel: 1,
                    },
                }
            }
        },
        upgradeTier: {
            reset: function () {
                this.level = 0
                this.currentBonus = 0
                this.bonusOnLevel = 1
                this.value = "flat"
                this.requiredLevel = 2
                this.requiredMaterials = {

                }
            }
        },
        decreaseLookingForMaterialTime: {
            reset: function () {
                this.level = 0
                this.currentBonus = 0
                this.bonusOnLevel = .01
                this.value = "percent"
                this.requiredMaterials = {
                    copper: {
                        required: 1,
                        initialRequired: 1,
                        requiredOnLevel: 1,
                    }
                }
            }
        },
        upgradePickaxe: {
            reset: function () {
                this.level = 0
                this.currentBonus = 0
                this.bonusOnLevel = 1
                this.value = "flat"
                this.requiredTier = 5
                this.requiredMaterials = {

                }
            }
        },
        addChanceForDoubleMaterialGain: {
            reset: function () {
                this.level = 0
                this.currentBonus = 0
                this.bonusOnLevel = 1
                this.value = "flat"
                this.requiredMaterials = {
                    stone: {
                        required: 1,
                        initialRequired: 1,
                        requiredOnLevel: 1,
                    }
                }
            }
        },
        increaseStoneDrop: {
            reset: function () {
                this.level = 0
                this.currentBonus = 0
                this.bonusOnLevel = 1
                this.value = "flat"
                this.requiredMaterials = {
                    stone: {
                        required: 100,
                        initialRequired: 100,
                        requiredOnLevel: 100,
                    },
                }
            }
        },
        increaseIronOreDrop: {
            reset: function () {
                this.level = 0
                this.currentBonus = 0
                this.bonusOnLevel = 1
                this.value = "flat"
                this.requiredMaterials = {
                    ironOre: {
                        required: 100,
                        initialRequired: 100,
                        requiredOnLevel: 100,
                    },
                }
            }
        },
        increaseCopperDrop: {
            reset: function () {
                this.level = 0
                this.currentBonus = 0
                this.bonusOnLevel = 1
                this.value = "flat"
                this.requiredMaterials = {
                    copper: {
                        required: 100,
                        initialRequired: 100,
                        requiredOnLevel: 100,
                    },
                }
            }
        },
        increaseSilverDrop: {
            reset: function () {
                this.level = 0
                this.currentBonus = 0
                this.bonusOnLevel = 1
                this.value = "flat"
                this.requiredMaterials = {
                    silver: {
                        required: 100,
                        initialRequired: 100,
                        requiredOnLevel: 100,
                    },
                }
            }
        },
        increaseGoldDrop: {
            reset: function () {
                this.level = 0
                this.currentBonus = 0
                this.bonusOnLevel = 1
                this.value = "flat"
                this.requiredMaterials = {
                    gold: {
                        required: 100,
                        initialRequired: 100,
                        requiredOnLevel: 100,
                    },
                }
            }
        },
        increasePlatinumDrop: {
            reset: function () {
                this.level = 0
                this.currentBonus = 0
                this.bonusOnLevel = 1
                this.value = "flat"
                this.requiredMaterials = {
                    platinum: {
                        required: 100,
                        initialRequired: 100,
                        requiredOnLevel: 100,
                    },
                }
            }
        },
        increaseChanceToFindDiamond: {
            reset: function () {
                this.level = 0
                this.currentBonus = 0
                this.bonusOnLevel = 0.05
                this.value = "percent"
                this.requiredMaterials = {
                    silver: {
                        required: 50,
                        initialRequired: 50,
                        requiredOnLevel: 50,
                    },
                    gold: {
                        required: 50,
                        initialRequired: 50,
                        requiredOnLevel: 50,
                    },
                    platinum: {
                        required: 50,
                        initialRequired: 50,
                        requiredOnLevel: 50,
                    },
                    diamond: {
                        required: 5,
                        initialRequired: 5,
                        requiredOnLevel: 5,
                    },
                }
            }
        },
        increaseChanceToFindAzurite: {
            reset: function() {
                this.level = 0
                this.currentBonus = 0
                this.bonusOnLevel = 0.05
                this.value = "percent"
                this.requiredMaterials = {
                    
                }
            }
        },
        increaseChanceToFindOnyx: {
            reset: function() {

                this.level = 0
                this.currentBonus = 0
                this.bonusOnLevel = 0.05
                this.value = "percent"
                this.requiredMaterials = {

                }
            }
        },
        increaseChanceToFindBlackStarDiopside: {
            reset: function() {
                this.level = 0
                this.currentBonus = 0
                this.bonusOnLevel = 0.05
                this.value = "percent"
                this.requiredMaterials = {
                    
                }
            }
        },
    },
    woodcuttingUpgrades: {
        increaseAxePower: {
            reset: function() {
                this.level = 0
                this.currentBonus = 0
                this.bonusOnLevel = 2
                this.value = "flat"
                this.requiredMaterials = {
                    stone: {
                        required: 1,
                        initialRequired: 1,
                        requiredOnLevel: 1,
                    },
                    stick: {
                        required: 1,
                        initialRequired: 1,
                        requiredOnLevel: 1,
                    },
                }
            }
        },
    },
    huntingUpgrades: {
        increaseWeaponPower: {
            reset: function() {
                this.level = 0
                this.currentBonus = 0
                this.bonusOnLevel = 2
                this.value = "flat"
                this.requiredMaterials = {
                    stone: {
                        required: 1,
                        initialRequired: 1,
                        requiredOnLevel: 1,
                    },
                    stick: {
                        required: 1,
                        initialRequired: 1,
                        requiredOnLevel: 1,
                    },
                }
            }
        },
    },
}



var multiplier = 1;
var played = false;
var scroll = true;


let main = {
    mining: {
        index: 0,
        clicked: false,
        material: undefined,
        currentHP: undefined,
        totalHP: undefined,
        area: areas.miningAreas.area1,
        inventory: function() {
            return inventoryMaterials[this.itemGroup]
        },
        getTool: function() {
            return tools.miningTool
        },
        breakingTime: undefined,
        timeout: undefined,
        itemGroup: 'miningMaterials',
        areaGroup: 'miningAreas',
        reset: function() {
            this.clicked = false;
            this.area = areas.miningAreas.area1
            clearInterval(this.breakingTime);
            clearTimeout(this.timeout)
        }
    },
    woodcutting: {
        index: 1,
        clicked: false,
        material: undefined,
        currentHP: undefined,
        totalHP: undefined,
        area: areas.woodcuttingAreas.area1,
        inventory: function() {
            return inventoryMaterials[this.itemGroup]
        },
        getTool: function() {
            return tools.woodcuttingTool
        },
        breakingTime: undefined,
        timeout: undefined,
        itemGroup: 'woodcuttingMaterials',
        areaGroup: 'woodcuttingAreas',
        reset: function() {
            this.clicked = false;
            this.area = areas.woodcuttingAreas.area1
        }
    },
    hunting: {
        index: 2,
        clicked: false,
        material: undefined,
        currentHP: undefined,
        totalHP: undefined,
        area: areas.huntingAreas.area1,
        inventory: function() {
            return inventoryMaterials[this.itemGroup]
        },
        getTool: function() {
            return tools.huntingTool
        },
        breakingTime: undefined,
        timeout: undefined,
        itemGroup: 'huntingMaterials',
        areaGroup: 'huntingAreas',
        reset: function() {
            this.clicked = false;
            this.area = areas.huntingAreas.area1
        }
    },
}
