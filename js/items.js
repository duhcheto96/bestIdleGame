
let inventoryMaterials = {
    miningMaterials: {},
    woodcuttingMaterials: {},
    huntingMaterials: {},
    farmingMaterials: {},
};

let tools = {
    miningTool: {
        index: 1,
        xp: 0,
        'needed xp': 1,
        'initial needed xp': 1,
        'needed xp on level': 1,
        totalXP: 0,
        name: "Wooden Pickaxe",
        power: 100,
        'power on level': 2,
        'power from levels': 0,
        'power from upgrades': 0,
        aps: 2_00,
        lookingForTime: 2_00,
        level: 1,
        tier: 1,
        // bonusXPfromTier: 0.1,
        bonuses: {
            a: 1,
        },
        getPower: () => {
            return (tools.miningTool.power +
                tools.miningTool['power from levels'] +
                tools.miningTool['power from upgrades']) *
                tools.miningTool.tier;
        },
    },

    woodcuttingTool: {
        index: 2,
        xp: 0,
        'needed xp': 1,
        'initial needed xp': 1,
        'needed xp on level': 1,
        totalXP: 0,
        name: "Wooden Axe",
        power: 1,
        'power on level': 2,
        'power from levels': 0,
        'power from upgrades': 0,
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
        'needed xp': 1,
        'initial needed xp': 1,
        'needed xp on level': 1,
        totalXP: 0,
        name: "Short wooden bow",
        power: 1,
        'power on level': 2,
        'power from levels': 0,
        'power from upgrades': 0,
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
                'Stone': createMaterial(1, 10, 1, 1, 1, 1000, 0),
                'Iron Ore': createMaterial(2, 30, 3, 3, 1, 400, 0),
                'Copper': createMaterial(3, 20, 2, 2, 1, 250, 0),
                'Silver': createMaterial(4, 40, 4, 4, 1, 100, 0),
                'Gold': createMaterial(5, 50, 5, 5, 1, 50, 0),
                "Platinum": createMaterial(6, 100, 10, 10, 1, 40, 0),

                "Lead": createMaterial(7, 100, 10, 10, 1, 25, 0),
                "Titanium": createMaterial(8, 100, 10, 10, 1, 10, 0),
                "Diamond": createMaterial(9, 100, 10, 10, 1, 1, 0),
            },
            totalLevel: 1,
            level: 1,
            materialsDropped: 0,
            requiredMaterialsForNextLevel: 5,
        },
        area2: {
            'Stone': createMaterial(1, 10, 1, 1, 1, 1000, 0),
            'Iron Ore': createMaterial(2, 30, 3, 3, 1, 400, 0),
            'Copper': createMaterial(3, 20, 2, 2, 1, 250, 0),
            'Silver': createMaterial(4, 40, 4, 4, 1, 100, 0),
            'Gold': createMaterial(5, 50, 5, 5, 1, 50, 0),
            "Platinum": createMaterial(6, 100, 10, 10, 1, 40, 0),

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
            'Stone': createMaterial(1, 10, 1, 1, 1, 1000, 0),
            'Iron Ore': createMaterial(2, 30, 3, 3, 1, 400, 0),
            'Copper': createMaterial(3, 20, 2, 2, 1, 250, 0),
            'Silver': createMaterial(4, 40, 4, 4, 1, 100, 0),
            'Gold': createMaterial(5, 50, 5, 5, 1, 50, 0),
            "Platinum": createMaterial(6, 100, 10, 10, 1, 40, 0),


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
            // 'Stone' : createMaterial(1, 10, 1, 1, 1, 1000, 0),
            'Iron Ore': createMaterial(2, 30, 3, 3, 1, 400, 0),
            'Copper': createMaterial(3, 20, 2, 2, 1, 250, 0),
            'Silver': createMaterial(4, 40, 4, 4, 1, 100, 0),
            'Gold': createMaterial(5, 50, 5, 5, 1, 50, 0),
            "Platinum": createMaterial(6, 100, 10, 10, 1, 40, 0),

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
    woodcuttingMaterials: {
        area1: {
            stick: createMaterial(1, 20, 1, 10, 100),
            oakWood: createMaterial(2, 20, 1, 10, 150),
            mapleWood: createMaterial(3, 20, 1, 10, 200),
            mahoganyWood: createMaterial(4, 20, 1, 10, 250),
            birchWood: createMaterial(5, 20, 1, 10, 300),
        },
        area2: {

        },
        area3: {

        },
        area4: {

        },
    },
    huntingMaterials: {
        area1: {
            rabbitLeg: createMaterial(1, 20, 1, 10, 100),
            deerHorns: createMaterial(2, 20, 1, 10, 150),
            deerSkin: createMaterial(3, 20, 1, 10, 200),
            'foxSkin': createMaterial(4, 20, 1, 10, 250),
            buckSteak: createMaterial(5, 20, 1, 10, 300),
        },
        area2: {

        },
        area3: {

        },
        area4: {

        },
    },
}

let upgrades = {
    miningUpgrades: {
        'Increase pickaxe power': {
            'level': 0,
            'current bonus': 0,
            'bonus on level': 2,
            'value': "flat",
            'required materials': {
                'Stone': {
                    'required': 1,
                    'initial required': 1,
                    'required on level': 1,
                },
                'Copper': {
                    'required': 1,
                    'initial required': 1,
                    'required on level': 1,
                },
                'Iron Ore': {
                    'required': 1,
                    'initial required': 1,
                    'required on level': 1,
                },
            }
        },
        'Increase pickaxe atack speed': {
            'level': 0,
            'current bonus': 0,
            'bonus on level': .01,
            'value': "percent",
            'required materials': {
                'Copper': {
                    'required': 1,
                    'initial required': 1,
                    'required on level': 1,
                },
            }
        },
        'Upgrade tier': {
            'level': 0,
            'current bonus': 0,
            'bonus on level': 1,
            'value': "flat",
            'required materials': {

            },
            'required levels': 2,

        },
        'Decrease looking for material time': {
            'level': 0,
            'current bonus': 0,
            'bonus on level': .01,
            'value': "percent",
            'required materials': {
                'Copper': {
                    'required': 1,
                    'initial required': 1,
                    'required on level': 1,
                },
            }

        },
        'Upgrade pickaxe': {
            'level': 0,
            'current bonus': 0,
            'bonus on level': 1,
            'value': "flat",
            'required materials': {

            },
            'required levels': 5,

        },
        'Add chance for double material gain': {
            'level': 0,
            'current bonus': 0,
            'bonus on level': 1,
            'value': "flat",
            'required materials': {

            },
            'required levels': 5,

        },
        'Increase Stone drop': {
            'level': 0,
            'current bonus': 0,
            'bonus on level': 1,
            'value': "flat",
            'required materials': {
                'Stone': {
                    'required': 100,
                    'initial required': 100,
                    'required on level': 100,
                },
            }
        },
        'Increase Iron Ore drop': {
            'level': 0,
            'current bonus': 0,
            'bonus on level': 1,
            'value': "flat",
            'required materials': {
                'Iron Ore': {
                    'required': 100,
                    'initial required': 100,
                    'required on level': 100,
                },
            }
        },
        'Increase Copper drop': {
            'level': 0,
            'current bonus': 0,
            'bonus on level': 1,
            'value': "flat",
            'required materials': {
                'Copper': {
                    'required': 100,
                    'initial required': 100,
                    'required on level': 100,
                },
            }
        },
        'Increase Silver drop': {
            'level': 0,
            'current bonus': 0,
            'bonus on level': 1,
            'value': "flat",
            'required materials': {
                'Silver': {
                    'required': 100,
                    'initial required': 100,
                    'required on level': 100,
                },
            }
        },
        'Increase Gold drop': {
            'level': 0,
            'current bonus': 0,
            'bonus on level': 1,
            'value': "flat",
            'required materials': {
                'Gold': {
                    'required': 100,
                    'initial required': 100,
                    'required on level': 100,
                },
            }
        },
        'Increase Platinum drop': {
            'level': 0,
            'current bonus': 0,
            'bonus on level': 1,
            'value': "flat",
            'required materials': {
                'Platinum': {
                    'required': 100,
                    'initial required': 100,
                    'required on level': 100,
                },
            }
        },
        'Increase chance to find Diamond': {
            'level': 0,
            'current bonus': 0,
            'bonus on level': 0.05,
            'value': "percent",
            'required materials': {
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
        'Increase chance to find Azurite': {
            'level': 0,
            'current bonus': 0,
            'bonus on level': 0.05,
            'value': "percent",
            'required materials': {
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
        'Increase chance to find Onyx': {
            'level': 0,
            'current bonus': 0,
            'bonus on level': 0.05,
            'value': "percent",
            'required materials': {
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
        'Increase chance to find Black Star Diopside': {
            'level': 0,
            'current bonus': 0,
            'bonus on level': 0.05,
            'value': "percent",
            'required materials': {
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
        'Increase axe power': {
            'level': 0,
            'current bonus': 0,
            'bonus on level': 2,
            'value': "flat",
            'required materials': {
                'Stone': {
                    'required': 1,
                    'initial required': 1,
                    'required on level': 1,
                },
                'stick': {
                    'required': 1,
                    'initial required': 1,
                    'required on level': 1,
                },
            }
        },
    },
    huntingUpgrades: {
        'Increase weapon power': {
            'level': 0,
            'current bonus': 0,
            'bonus on level': 2,
            'value': "flat",
            'required materials': {
                'Stone': {
                    'required': 1,
                    'initial required': 1,
                    'required on level': 1,
                },
                'stick': {
                    'required': 1,
                    'initial required': 1,
                    'required on level': 1,
                },
            }
        },
    },
}



var multiplier = 1;
