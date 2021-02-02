
let inventoryMaterials = {
    miningMaterials: {},
    woodcuttingMaterials: {},
    huntingMaterials: {},
    farmingMaterials: {},
};

let tools = {
    miningTool: {
        index: 1,
        name: "Wooden Pickaxe",
        xp: {
            level: 1,
            tier: 1,
            currentXp: 0,
            neededXp: 1,
            totalXP: 0,
            initialNeededXp: 1,
            neededXpOnLevel: 1,
            bonusXpFromTier: 1,
        },
        damage: {
            power: 100,
            initialPower: 100,
            powerOnLevel: 2,
            initialPowerOnLevel: 2,
            powerFromLevels: 0,
            powerFromUpgrades: 0,
            bonusDmgFromTier: 1,
        },
        aps: 2_00,
        lookingForTime: 2_00,
        chanceForDoubleMaterial: 0,
        getPower: function() {
            return (this.damage.power +
                this.damage.powerFromLevels +
                this.damage.powerFromUpgrades) *
                this.xp.tier;
        },
        reset: function() {
            this.xp = this.initialNeededXp;
            this.neededXp = this.initialNeededXp;
            this.totalXP = 0;
            this.level = 1;
            this.tier = 1;
            this.name = "Wooden Pickaxe";
            this.damage.power = this.damage.initialPower;
            this.damage.powerFromLevels = 0;
            this.damage.powerFromUpgrades = 0;
            this.damage.powerOnLevel = this.damage.initialPowerOnLevel;
            this.aps = 2_000;
            this.lookingForTime = 2_000;
            this.chanceForDoubleMaterial = 0;
        },
    },

    woodcuttingTool: {
        index: 2,
        xp: 0,
        neededXp: 1,
        initialNeededXp: 1,
        neededXpOnLevel: 1,
        totalXP: 0,
        name: "Wooden Axe",
        power: 1,
        powerOnLevel: 2,
        powerFromLevels: 0,
        powerFromUpgrades: 0,
        aps: 1_000,
        lookingForTime: 2_000,
        level: 1,
        tier: 1,
        bonuses: {
            a: 1
        },
        getPower: () => {
            return tools.woodcuttingTool.power +
                tools.woodcuttingTool['power from levels'] +
                tools.woodcuttingTool['power from upgrades'];
        },
    },

    huntingTool: {
        index: 3,
        xp: 0,
        neededXp: 1,
        initialNeededXp: 1,
        neededXpOnLevel: 1,
        totalXP: 0,
        name: "Short wooden bow",
        power: 1,
        powerOnLevel: 2,
        powerFromLevels: 0,
        powerFromUpgrades: 0,
        aps: 1_000,
        lookingForTime: 2_000,
        level: 1,
        tier: 1,
        bonuses: {
            a: 1
        },
        getPower: () => {
            return tools.huntingTool.power +
                tools.huntingTool['power from levels'] +
                tools.huntingTool['power from upgrades'];
        },
    },

}
// index, health, healthOnLevel, xp, drop, chance, totalDropped
let areas = {
    miningAreas: {
        area1: {
            materials: {
                stone: createMaterial(1, 10, 1, 1, 1, 1000, 0),
                ironOre: createMaterial(2, 30, 3, 3, 1, 400, 0),
                copper: createMaterial(3, 20, 2, 2, 1, 250, 0),
                silver: createMaterial(4, 40, 4, 4, 1, 100, 0),
                gold: createMaterial(5, 50, 5, 5, 1, 50, 0),
                platinum: createMaterial(6, 100, 10, 10, 1, 40, 0),

                lead: createMaterial(7, 100, 10, 10, 1, 25, 0),
                titanium: createMaterial(8, 100, 10, 10, 1, 10, 0),
                diamond: createMaterial(9, 100, 10, 10, 1, 1, 0),
            },
            name: 'Iron mine',
            index: 0,
            totalLevel: 1,
            level: 1,
            materialsDropped: 0,
            requiredMaterialsForNextLevel: 5,
            unlocked: true,
            reset: function() {
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
                this.level = 1;
                this.totalLevel = 1;
                this.materialsDropped = 0;
                this.requiredMaterialsForNextLevel = 5;
                this.unlocked = true;
            },
        },
        area2: {
            materials: {
                Stone: createMaterial(1, 10, 1, 1, 1, 1000, 0),
                ironOre: createMaterial(2, 30, 3, 3, 1, 400, 0),
                copper: createMaterial(3, 20, 2, 2, 1, 250, 0),
                silver: createMaterial(4, 40, 4, 4, 1, 100, 0),
                gold: createMaterial(5, 50, 5, 5, 1, 50, 0),
                platinum: createMaterial(6, 100, 10, 10, 1, 40, 0),
            },
            name: 'mine1',
            index: 1,
            totalLevel: 1,
            level: 1,
            materialsDropped: 0,
            requiredMaterialsForNextLevel: 6,
            unlocked: false,

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
            materials: {
                stone: createMaterial(1, 10, 1, 1, 1, 1000, 0),
                ironOre: createMaterial(2, 30, 3, 3, 1, 400, 0),
                copper: createMaterial(3, 20, 2, 2, 1, 250, 0),
                silver: createMaterial(4, 40, 4, 4, 1, 100, 0),
                gold: createMaterial(5, 50, 5, 5, 1, 50, 0),
                platinum: createMaterial(6, 100, 10, 10, 1, 40, 0),
            },
            name: 'mine2',
            index: 2,
            totalLevel: 1,
            level: 1,
            materialsDropped: 0,
            requiredMaterialsForNextLevel: 5,
            unlocked: false,


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
            materials: {
                stone : createMaterial(1, 10, 1, 1, 1, 1000, 0),
                ironOre: createMaterial(2, 30, 3, 3, 1, 400, 0),
                copper: createMaterial(3, 20, 2, 2, 1, 250, 0),
                silver: createMaterial(4, 40, 4, 4, 1, 100, 0),
                gold: createMaterial(5, 50, 5, 5, 1, 50, 0),
                platinum: createMaterial(6, 100, 10, 10, 1, 40, 0),
            },
            name: 'mine3',
            index: 3,
            totalLevel: 1,
            level: 1,
            materialsDropped: 0,
            requiredMaterialsForNextLevel: 5,
            unlocked: false,

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
            materials: {
                stick: createMaterial(1, 20, 1, 10, 100),
                oakWood: createMaterial(2, 20, 1, 10, 150),
                mapleWood: createMaterial(3, 20, 1, 10, 200),
                mahoganyWood: createMaterial(4, 20, 1, 10, 250),
                birchWood: createMaterial(5, 20, 1, 10, 300),
            },
            name: 'w0',
            index: 0,
            totalLevel: 1,
            level: 1,
            materialsDropped: 0,
            requiredMaterialsForNextLevel: 5,
            unlocked: true,
        },
        area2: {
            materials: {
                stick: createMaterial(1, 20, 1, 10, 100),
                oakWood: createMaterial(2, 20, 1, 10, 150),
                mapleWood: createMaterial(3, 20, 1, 10, 200),
                mahoganyWood: createMaterial(4, 20, 1, 10, 250),
                birchWood: createMaterial(5, 20, 1, 10, 300),
            },
            name: 'w1',
            index: 1,
            totalLevel: 1,
            level: 1,
            materialsDropped: 0,
            requiredMaterialsForNextLevel: 5,
            unlocked: false,
        },
        area3: {
            materials: {
                stick: createMaterial(1, 20, 1, 10, 100),
                oakWood: createMaterial(2, 20, 1, 10, 150),
                mapleWood: createMaterial(3, 20, 1, 10, 200),
                mahoganyWood: createMaterial(4, 20, 1, 10, 250),
                birchWood: createMaterial(5, 20, 1, 10, 300),
            },
            name: 'w2',
            index: 2,
            totalLevel: 1,
            level: 1,
            materialsDropped: 0,
            requiredMaterialsForNextLevel: 5,
            unlocked: false,
        },
        area4: {
            materials: {
                stick: createMaterial(1, 20, 1, 10, 100),
                oakWood: createMaterial(2, 20, 1, 10, 150),
                mapleWood: createMaterial(3, 20, 1, 10, 200),
                mahoganyWood: createMaterial(4, 20, 1, 10, 250),
                birchWood: createMaterial(5, 20, 1, 10, 300),
            },
            name: 'w3',
            index: 3,
            totalLevel: 1,
            level: 1,
            materialsDropped: 0,
            requiredMaterialsForNextLevel: 5,
            unlocked: false,
        },
    },
    huntingAreas: {
        area1: {
            materials: {
                rabbitLeg: createMaterial(1, 20, 1, 10, 100),
                deerHorns: createMaterial(2, 20, 1, 10, 150),
                deerSkin: createMaterial(3, 20, 1, 10, 200),
                foxSkin: createMaterial(4, 20, 1, 10, 250),
                buckSteak: createMaterial(5, 20, 1, 10, 300),
            },
            name: 'h0',
            index: 0,
            totalLevel: 1,
            level: 1,
            materialsDropped: 0,
            requiredMaterialsForNextLevel: 5,
            unlocked: true,
        },
        area2: {
            materials: {
                rabbitLeg: createMaterial(1, 20, 1, 10, 100),
                deerHorns: createMaterial(2, 20, 1, 10, 150),
                deerSkin: createMaterial(3, 20, 1, 10, 200),
                foxSkin: createMaterial(4, 20, 1, 10, 250),
                buckSteak: createMaterial(5, 20, 1, 10, 300),
            },
            name: 'h1',
            index: 1,
            totalLevel: 1,
            level: 1,
            materialsDropped: 0,
            requiredMaterialsForNextLevel: 5,
            unlocked: false,

        },
        area3: {
            materials: {
                rabbitLeg: createMaterial(1, 20, 1, 10, 100),
                deerHorns: createMaterial(2, 20, 1, 10, 150),
                deerSkin: createMaterial(3, 20, 1, 10, 200),
                foxSkin: createMaterial(4, 20, 1, 10, 250),
                buckSteak: createMaterial(5, 20, 1, 10, 300),
            },
            name: 'h2',
            index: 2,
            totalLevel: 1,
            level: 1,
            materialsDropped: 0,
            requiredMaterialsForNextLevel: 5,
            unlocked: false,

        },
        area4: {
            materials: {
                rabbitLeg: createMaterial(1, 20, 1, 10, 100),
                deerHorns: createMaterial(2, 20, 1, 10, 150),
                deerSkin: createMaterial(3, 20, 1, 10, 200),
                foxSkin: createMaterial(4, 20, 1, 10, 250),
                buckSteak: createMaterial(5, 20, 1, 10, 300),
            },
            name: 'h3',
            index: 3,
            totalLevel: 1,
            level: 1,
            materialsDropped: 0,
            requiredMaterialsForNextLevel: 5,
            unlocked: false,

        },
    },
}

let upgrades = {
    miningUpgrades: {
        increasePickaxePower: {
            level: 0,
            currentBonus: 0,
            bonusOnLevel: 2,
            value: "flat",
            requiredMaterials: {
                stone: {
                    required: 1,
                    initialRequired: 1,
                    requiredOnLevel: 1,
                },
                copper: {
                    required: 1,
                    initialRequired: 1,
                    requiredOnLevel: 1,
                },
                ironOre: {
                    required: 1,
                    initialRequired: 1,
                    requiredOnLevel: 1,
                },
            },
            reset: function() {
                this.level = 0;
                this.currentBonus = 0;
                this.bonusOnLevel = 2;
                Object.keys(this.requiredMaterials).forEach(mat => {
                    this.requiredMaterials[`${mat}`].required = this.requiredMaterials[`${mat}`].initialRequired;
                });
            },
        },
        increasePickaxeAtackSpeed: {
            level: 0,
            currentBonus: 0,
            bonusOnLevel: .01,
            value: "percent",
            requiredMaterials: {
                copper: {
                    required: 1,
                    initialRequired: 1,
                    requiredOnLevel: 1,
                },
            }
        },
        upgradeTier: {
            level: 0,
            currentBonus: 0,
            bonusOnLevel: 1,
            value: "flat",
            requiredMaterials: {

            },
            requiredLevel: 2,

        },
        decreaseLookingForMaterialTime: {
            level: 0,
            currentBonus: 0,
            bonusOnLevel: .01,
            value: "percent",
            requiredMaterials: {
                copper: {
                    required: 1,
                    initialRequired: 1,
                    requiredOnLevel: 1,
                },
            }

        },
        upgradePickaxe: {
            level: 0,
            currentBonus: 0,
            bonusOnLevel: 1,
            value: "flat",
            requiredMaterials: {

            },
            requiredTier: 5,

        },
        addChanceForDoubleMaterialGain: {
            level: 0,
            currentBonus: 0,
            bonusOnLevel: 1,
            value: "flat",
            requiredMaterials: {
                stone: {
                    required: 1,
                    initialRequired: 1,
                    requiredOnLevel: 1,
                }
            },
        },
        increaseStoneDrop: {
            level: 0,
            currentBonus: 0,
            bonusOnLevel: 1,
            value: "flat",
            requiredMaterials: {
                stone: {
                    required: 100,
                    initialRequired: 100,
                    requiredOnLevel: 100,
                },
            }
        },
        increaseIronOreDrop: {
            level: 0,
            currentBonus: 0,
            bonusOnLevel: 1,
            value: "flat",
            requiredMaterials: {
                ironOre: {
                    required: 100,
                    initialRequired: 100,
                    requiredOnLevel: 100,
                },
            }
        },
        increaseCopperDrop: {
            level: 0,
            currentBonus: 0,
            bonusOnLevel: 1,
            value: "flat",
            requiredMaterials: {
                copper: {
                    required: 100,
                    initialRequired: 100,
                    requiredOnLevel: 100,
                },
            }
        },
        increaseSilverDrop: {
            level: 0,
            currentBonus: 0,
            bonusOnLevel: 1,
            value: "flat",
            requiredMaterials: {
                silver: {
                    required: 100,
                    initialRequired: 100,
                    requiredOnLevel: 100,
                },
            }
        },
        increaseGoldDrop: {
            level: 0,
            currentBonus: 0,
            bonusOnLevel: 1,
            value: "flat",
            requiredMaterials: {
                gold: {
                    required: 100,
                    initialRequired: 100,
                    requiredOnLevel: 100,
                },
            }
        },
        increasePlatinumDrop: {
            level: 0,
            currentBonus: 0,
            bonusOnLevel: 1,
            value: "flat",
            requiredMaterials: {
                platinum: {
                    required: 100,
                    initialRequired: 100,
                    requiredOnLevel: 100,
                },
            }
        },
        increaseChanceToFindDiamond: {
            level: 0,
            currentBonus: 0,
            bonusOnLevel: 0.05,
            value: "percent",
            requiredMaterials: {
                silver : {
                    required: 50,
                    initialRequired: 50,
                    requiredOnLevel: 50,
                },
                gold : {
                    required: 50,
                    initialRequired: 50,
                    requiredOnLevel: 50,
                },
                platinum : {
                    required: 50,
                    initialRequired: 50,
                    requiredOnLevel: 50,
                },
                diamond : {
                    required: 5,
                    initialRequired: 5,
                    requiredOnLevel: 5,
                },
            }
        },
        increaseChanceToFindAzurite: {
            level: 0,
            currentBonus: 0,
            bonusOnLevel: 0.05,
            value: "percent",
            requiredMaterials: {
                // 'Silver' : {
                //     'required': 50,
                //     'initial required': 50,
                //     'required on level': 50,
                // },
                // 'Gold' : {
                //     'required': 50,
                //     'initial required': 50,
                //     'required on level': 50,
                // },
                // 'Platinum' : {
                //     'required': 50,
                //     'initial required': 50,
                //     'required on level': 50,
                // },
                // 'Diamond' : {
                //     'required': 5,
                //     'initial required': 5,
                //     'required on level': 5,
                // },
            }
        },
        increaseChanceToFindOnyx: {
            level: 0,
            currentBonus: 0,
            bonusOnLevel: 0.05,
            value: "percent",
            requiredMaterials: {
                // 'Silver' : {
                //     'required': 50,
                //     'initial required': 50,
                //     'required on level': 50,
                // },
                // 'Gold' : {
                //     'required': 50,
                //     'initial required': 50,
                //     'required on level': 50,
                // },
                // 'Platinum' : {
                //     'required': 50,
                //     'initial required': 50,
                //     'required on level': 50,
                // },
                // 'Diamond' : {
                //     'required': 5,
                //     'initial required': 5,
                //     'required on level': 5,
                // },
            }
        },
        increaseChanceToFindBlackStarDiopside: {
            level: 0,
            currentBonus: 0,
            bonusOnLevel: 0.05,
            value: "percent",
            requiredMaterials: {
                // 'Silver' : {
                //     'required': 50,
                //     'initial required': 50,
                //     'required on level': 50,
                // },
                // 'Gold' : {
                //     'required': 50,
                //     'initial required': 50,
                //     'required on level': 50,
                // },
                // 'Platinum' : {
                //     'required': 50,
                //     'initial required': 50,
                //     'required on level': 50,
                // },
                // 'Diamond' : {
                //     'required': 5,
                //     'initial required': 5,
                //     'required on level': 5,
                // },
            }
        },
    },
    woodcuttingUpgrades: {
        increaseAxePower: {
            level: 0,
            currentBonus: 0,
            bonusOnLevel: 2,
            value: "flat",
            requiredMaterials: {
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
        },
    },
    huntingUpgrades: {
        increaseWeaponPower: {
            level: 0,
            currentBonus: 0,
            bonusOnLevel: 2,
            value: "flat",
            requiredMaterials: {
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
        },
    },
}



var multiplier = 1;
