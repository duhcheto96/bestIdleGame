
let inventoryMaterials = {
    miningMaterials: {},
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
            },
            this.upgrade = {
                index: 0,
                list: ["Wooden pickaxe", "Stone pickaxe",
                    "Iron pickaxe", "Gold pickaxe",
                    "Platinum pickaxe", "Diamond pickaxe"],
                lessHealthOfMaterials: 1,
                lessCostOfUpgrades: 1,
                moreDamageFromLevels: 1,
            }
            this.xp = {
                level: 1,
                tier: 1,
                currentXp: 0,
                neededXp: 1,
                totalXP: 0,
                initialNeededXp: 1,
                neededXpOnLevel: 1,
                bonusXpFromTier: 1,
            }
            this.damage = {
                power: 100,
                initialPower: 100,
                powerOnLevel: 2,
                initialPowerOnLevel: 2,
                powerFromLevels: 0,
                powerFromUpgrades: 0,
                bonusDmgFromTier: 1,
            }
            this.aps = 2_00
            this.lookingForTime = 2_00
            this.chanceForDoubleMaterial = 0
            this.getPower = function () {
                return (this.damage.power +
                    this.damage.powerFromLevels +
                    this.damage.powerFromUpgrades) *
                    this.xp.tier;
            }
        }
    },

    woodcuttingTool: {
        reset: function () {
            this.index = 1,
            this.getName = function () {
                return this.upgrade.list[this.upgrade.index];
            },
            this.upgrade = {
                index: 0,
                list: ["Wooden axe", "Stone axe",
                    "Iron axe", "Gold axe",
                    "Platinum axe", "Diamond axe"],
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


// index, health, healthOnLevel, xp, drop, chance, totalDropped
let areas = {
    miningAreas: {
        area1: {
            reset: function () {
                this.materials = {
                    stone: createMaterial(1, 10, 1, 1, 1, 1000, 0),
                    ironOre: createMaterial(2, 30, 3, 3, 1, 400, 0),
                    copper: createMaterial(3, 20, 2, 2, 1, 250, 0),
                    silver: createMaterial(4, 40, 4, 4, 1, 100, 0),
                    gold: createMaterial(5, 50, 5, 5, 1, 50, 0),
                    platinum: createMaterial(6, 100, 10, 10, 1, 40, 0),

                    lead: createMaterial(7, 100, 10, 10, 1, 25, 0),
                    titanium: createMaterial(8, 100, 10, 10, 1, 10, 0),
                    diamond: createMaterial(9, 100, 10, 10, 1, 1, 0),
                };
                this.name = 'Iron mine';
                this.index = 0;
                this.level = 1;
                this.totalLevel = 1;
                this.materialsDropped = 0;
                this.requiredMaterialsForNextLevel = 5;
                this.unlocked = true;
            },
        },
        area2: {
            reset: function () {
                this.materials = {
                    Stone: createMaterial(1, 10, 1, 1, 1, 1000, 0),
                    ironOre: createMaterial(2, 30, 3, 3, 1, 400, 0),
                    copper: createMaterial(3, 20, 2, 2, 1, 250, 0),
                    silver: createMaterial(4, 40, 4, 4, 1, 100, 0),
                    gold: createMaterial(5, 50, 5, 5, 1, 50, 0),
                    platinum: createMaterial(6, 100, 10, 10, 1, 40, 0),
                }
                this.name = 'mine1'
                this.index = 1
                this.totalLevel = 1
                this.level = 1
                this.materialsDropped = 0
                this.requiredMaterialsForNextLevel = 6
                this.unlocked = false
            }

            // Bronze
            // Chromite
            // Cobalt
            // Lithium
            // Manganese
            // Nickel
            // Quartz
            // Zinc
            // Perlite
            // Pyrite
            // Obsidian
            // Azurite
        },
        area3: {
            reset: function () {

                materials = {
                    stone: createMaterial(1, 10, 1, 1, 1, 1000, 0),
                    ironOre: createMaterial(2, 30, 3, 3, 1, 400, 0),
                    copper: createMaterial(3, 20, 2, 2, 1, 250, 0),
                    silver: createMaterial(4, 40, 4, 4, 1, 100, 0),
                    gold: createMaterial(5, 50, 5, 5, 1, 50, 0),
                    platinum: createMaterial(6, 100, 10, 10, 1, 40, 0),
                }
                name = 'mine2'
                index = 2
                totalLevel = 1
                level = 1
                materialsDropped = 0
                requiredMaterialsForNextLevel = 5
                unlocked = false
            }


            // Amethyst
            // Ruby
            // Sapphire
            // Emerald
            // Amber
            // Citrine
            // Turquoise
            // Topaz
            // Aquamarine
            // Sunstone
            // Moonstone
            // Bloodstone
            // Onyx
        },
        area4: {
            reset: function () {
                materials = {
                    stone: createMaterial(1, 10, 1, 1, 1, 1000, 0),
                    ironOre: createMaterial(2, 30, 3, 3, 1, 400, 0),
                    copper: createMaterial(3, 20, 2, 2, 1, 250, 0),
                    silver: createMaterial(4, 40, 4, 4, 1, 100, 0),
                    gold: createMaterial(5, 50, 5, 5, 1, 50, 0),
                    platinum: createMaterial(6, 100, 10, 10, 1, 40, 0),
                }
                name = 'mine3'
                index = 3
                totalLevel = 1
                level = 1
                materialsDropped = 0
                requiredMaterialsForNextLevel = 5
                unlocked = false
            }

            // Sulfur
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
                this.totalLevel = 1
                this.level = 1
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
                this.totalLevel = 1
                this.level = 1
                this.materialsDropped = 0
                this.requiredMaterialsForNextLevel = 5
                this.unlocked = true
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
                this.totalLevel = 1
                this.level = 1
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
                this.totalLevel = 1
                this.level = 1
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
                this.name = 'h0'
                this.index = 0
                this.totalLevel = 1
                this.level = 1
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
                this.name = 'h1'
                this.index = 1
                this.totalLevel = 1
                this.level = 1
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
                this.name = 'h2'
                this.index = 2
                this.totalLevel = 1
                this.level = 1
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
                this.name = 'h3'
                this.index = 3
                this.totalLevel = 1
                this.level = 1
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
                        required: 1,
                        initialRequired: 1,
                        requiredOnLevel: 1
                    },
                    copper: {
                        required: 1,
                        initialRequired: 1,
                        requiredOnLevel: 1
                    },
                    ironOre: {
                        required: 1,
                        initialRequired: 1,
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
