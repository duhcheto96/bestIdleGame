
let inventory = {
    mining: {},
    woodcutting: {},
    hunting: {},
};

let tools = {
    mining: {
        reset: function () {
            this.index = 0
            // this.getName = function () {
            //     return this.upgrade.list[this.upgrade.index];
            // }
            this.upgrade = {
                index: 0,
                list: ["Wooden pickaxe", "Stone pickaxe",
                    "Iron pickaxe", "Gold pickaxe",
                    "Platinum pickaxe", "Diamond pickaxe"],
                // getLessHealthOfMaterials: function () {
                //     return this.index / 10 + 1
                // },
                // getMoreDamageFromLevels: function () {
                //     return this.index * 3 / 10 + 1
                // },
                // getBonusDrop: function () {
                //     return this.index
                // }
            }
            this.xp = {
                level: 1,
                tier: 1,
                currentXp: 0,
                neededXp: 20,
                totalXP: 0,
                initialNeededXp: 20,
                neededXpOnLevel: 20,
                // getBonusXpFromTier: function () {
                //     return 0.9 + this.tier / 10
                // },
                // getBonusDamageFromTier: function () {
                //     return 0.9 + this.tier / 10
                // }
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
            // this.getPower = function () {
            //     return Math.floor((this.damage.power +
            //         this.damage.powerFromLevels *
            //         this.upgrade.getMoreDamageFromLevels() +
            //         this.damage.powerFromUpgrades) *
            //         this.xp.getBonusDamageFromTier());
            // }
        }
    },

    woodcutting: {
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
                getLessHealthOfMaterials: function () {
                    return this.index / 10 + 1
                },
                getMoreDamageFromLevels: function () {
                    return this.index * 3 / 10 + 1
                },
                getBonusDrop: function () {
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
                getBonusXpFromTier: function () {
                    return 0.9 + this.tier / 10
                },
                getBonusDamageFromTier: function () {
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
                }
            this.upgrade = {
                index: 0,
                list: ["Wooden bow", "Stone bow",
                    "Iron bow", "Gold bow",
                    "Platinum bow", "Diamond bow"],
                getLessHealthOfMaterials: function () {
                    return this.index / 10 + 1
                },
                getMoreDamageFromLevels: function () {
                    return this.index * 3 / 10 + 1
                },
                getBonusDrop: function () {
                    return this.index
                }
            }
            this.xp = {
                level: 1,
                tier: 1,
                currentXp: 0,
                neededXp: 20,
                totalXP: 0,
                initialNeededXp: 20,
                neededXpOnLevel: 20,
                getBonusXpFromTier: function () {
                    return 0.9 + this.tier / 10
                },
                getBonusDamageFromTier: function () {
                    return 0.9 + this.tier / 10
                }
            }
            this.damage = {
                power: 10,
                initialPower: 10,
                powerOnLevel: 2,
                initialPowerOnLevel: 2,
                powerFromLevels: 0,
                powerFromUpgrades: 0,
                bonusDmgFromTier: 1,
            },
                this.aps = 1_000
            this.lookingForTime = 10_000
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
}

let materials = {
    mining: {
        stone             : (c) => createMaterial(index = 0  , health = 20   , xp = 1   , chance = c),
        ironOre           : (c) => createMaterial(index = 1  , health = 50   , xp = 3   , chance = c),
        copper            : (c) => createMaterial(index = 2  , health = 40   , xp = 2   , chance = c),
        silver            : (c) => createMaterial(index = 3  , health = 100  , xp = 5   , chance = c),
        gold              : (c) => createMaterial(index = 4  , health = 200  , xp = 20  , chance = c),
        platinum          : (c) => createMaterial(index = 5  , health = 300  , xp = 50  , chance = c),
        lead              : (c) => createMaterial(index = 6  , health = 500  , xp = 100 , chance = c),
        titanium          : (c) => createMaterial(index = 7  , health = 800  , xp = 175 , chance = c),
        diamond           : (c) => createMaterial(index = 8  , health = 1000 , xp = 250 , chance = c),
        bronze            : (c) => createMaterial(index = 9  , health = 400  , xp = 65  , chance = c),
        chromite          : (c) => createMaterial(index = 10 , health = 500  , xp = 80  , chance = c),
        cobalt            : (c) => createMaterial(index = 11 , health = 450  , xp = 75  , chance = c),
        lithium           : (c) => createMaterial(index = 12 , health = 700  , xp = 110 , chance = c),
        manganese         : (c) => createMaterial(index = 13 , health = 300  , xp = 40  , chance = c),
        nickel            : (c) => createMaterial(index = 14 , health = 900  , xp = 300 , chance = c),
        quartz            : (c) => createMaterial(index = 15 , health = 900  , xp = 300 , chance = c),
        zinc              : (c) => createMaterial(index = 16 , health = 900  , xp = 300 , chance = c),
        perlite           : (c) => createMaterial(index = 17 , health = 900  , xp = 300 , chance = c),
        pyrite            : (c) => createMaterial(index = 18 , health = 900  , xp = 300 , chance = c),
        obsidian          : (c) => createMaterial(index = 19 , health = 900  , xp = 300 , chance = c),
        azurite           : (c) => createMaterial(index = 20 , health = 900  , xp = 300 , chance = c),
        amethyst          : (c) => createMaterial(index = 21 , health = 900  , xp = 300 , chance = c),
        ruby              : (c) => createMaterial(index = 22 , health = 900  , xp = 300 , chance = c),
        sapphire          : (c) => createMaterial(index = 23 , health = 900  , xp = 300 , chance = c),
        emerald           : (c) => createMaterial(index = 24 , health = 900  , xp = 300 , chance = c),
        amber             : (c) => createMaterial(index = 25 , health = 900  , xp = 300 , chance = c),
        citrine           : (c) => createMaterial(index = 26 , health = 900  , xp = 300 , chance = c),
        turquoise         : (c) => createMaterial(index = 27 , health = 900  , xp = 300 , chance = c),
        topaz             : (c) => createMaterial(index = 28 , health = 900  , xp = 300 , chance = c),
        aquamarine        : (c) => createMaterial(index = 29 , health = 900  , xp = 300 , chance = c),
        sunstone          : (c) => createMaterial(index = 30 , health = 900  , xp = 300 , chance = c),
        moonstone         : (c) => createMaterial(index = 31 , health = 900  , xp = 300 , chance = c),
        bloodstone        : (c) => createMaterial(index = 32 , health = 900  , xp = 300 , chance = c),
        onyx              : (c) => createMaterial(index = 33 , health = 900  , xp = 300 , chance = c),
        sulfur            : (c) => createMaterial(index = 34 , health = 900  , xp = 300 , chance = c),
        uranium           : (c) => createMaterial(index = 35 , health = 900  , xp = 300 , chance = c),
        zeolite           : (c) => createMaterial(index = 36 , health = 900  , xp = 300 , chance = c),
        lapisLazuli       : (c) => createMaterial(index = 37 , health = 900  , xp = 300 , chance = c),
        cavansite         : (c) => createMaterial(index = 38 , health = 900  , xp = 300 , chance = c),
        garnet            : (c) => createMaterial(index = 39 , health = 900  , xp = 300 , chance = c),
        howlite           : (c) => createMaterial(index = 40 , health = 900  , xp = 300 , chance = c),
        zircon            : (c) => createMaterial(index = 41 , health = 900  , xp = 300 , chance = c),
        tanzanite         : (c) => createMaterial(index = 42 , health = 900  , xp = 300 , chance = c),
        blackStarDiopside : (c) => createMaterial(index = 43 , health = 900  , xp = 300 , chance = c),

    },
    woodcutting: {
        stick       : (c) => createMaterial(index = 0 , health = 20, xp = 1, chance = c),
        oakWood     : (c) => createMaterial(index = 1 , health = 20, xp = 1, chance = c),
        mapleWood   : (c) => createMaterial(index = 2 , health = 20, xp = 1, chance = c),
        mahagonyWood: (c) => createMaterial(index = 3 , health = 20, xp = 1, chance = c),
        birchWood   : (c) => createMaterial(index = 4 , health = 20, xp = 1, chance = c),
        beechWood   : (c) => createMaterial(index = 5 , health = 20, xp = 1, chance = c),
        elmWood     : (c) => createMaterial(index = 6 , health = 20, xp = 1, chance = c),
        willowWood  : (c) => createMaterial(index = 7 , health = 20, xp = 1, chance = c),
        hickoryWood : (c) => createMaterial(index = 8 , health = 20, xp = 1, chance = c),
        cedarWood   : (c) => createMaterial(index = 9 , health = 20, xp = 1, chance = c),
        pineWood    : (c) => createMaterial(index = 10, health = 20, xp = 1, chance = c),
        spruceWood  : (c) => createMaterial(index = 11, health = 20, xp = 1, chance = c),
        redWood     : (c) => createMaterial(index = 12, health = 20, xp = 1, chance = c),
        firWood     : (c) => createMaterial(index = 13, health = 20, xp = 1, chance = c),
        ghostedWood : (c) => createMaterial(index = 14, health = 20, xp = 1, chance = c),
        blackWood   : (c) => createMaterial(index = 15, health = 20, xp = 1, chance = c),
        shinyWood   : (c) => createMaterial(index = 16, health = 20, xp = 1, chance = c),
        sparklyWood : (c) => createMaterial(index = 17, health = 20, xp = 1, chance = c),
        cursedWood  : (c) => createMaterial(index = 18, health = 20, xp = 1, chance = c),
        treeOfLife  : (c) => createMaterial(index = 19, health = 20, xp = 1, chance = c),


    },
    hunting: {
        beetle     : (c) => createMaterial(index = 0 , health = 20, xp = 1, chance = c),
        rabbit     : (c) => createMaterial(index = 1 , health = 20, xp = 1, chance = c),
        frog       : (c) => createMaterial(index = 2 , health = 20, xp = 1, chance = c),
        chicken    : (c) => createMaterial(index = 3 , health = 20, xp = 1, chance = c),
        bat        : (c) => createMaterial(index = 4 , health = 20, xp = 1, chance = c),
        pigeon     : (c) => createMaterial(index = 5 , health = 20, xp = 1, chance = c),
        turtle     : (c) => createMaterial(index = 6 , health = 20, xp = 1, chance = c),
        crab       : (c) => createMaterial(index = 7 , health = 20, xp = 1, chance = c),
        rat        : (c) => createMaterial(index = 8 , health = 20, xp = 1, chance = c),
        beaver     : (c) => createMaterial(index = 9 , health = 20, xp = 1, chance = c),
        owl        : (c) => createMaterial(index = 10, health = 20, xp = 1, chance = c),
        fox        : (c) => createMaterial(index = 11, health = 20, xp = 1, chance = c),
        honeyBadger: (c) => createMaterial(index = 12, health = 20, xp = 1, chance = c),
        cow        : (c) => createMaterial(index = 13, health = 20, xp = 1, chance = c),
        wolf       : (c) => createMaterial(index = 14, health = 20, xp = 1, chance = c),
        deer       : (c) => createMaterial(index = 15, health = 20, xp = 1, chance = c),
        bear       : (c) => createMaterial(index = 16, health = 20, xp = 1, chance = c),
        camel      : (c) => createMaterial(index = 17, health = 20, xp = 1, chance = c),
        lizard     : (c) => createMaterial(index = 18, health = 20, xp = 1, chance = c),
        antelope   : (c) => createMaterial(index = 19, health = 20, xp = 1, chance = c),
        armadillo  : (c) => createMaterial(index = 20, health = 20, xp = 1, chance = c),
        penguin    : (c) => createMaterial(index = 21, health = 20, xp = 1, chance = c),
        panda      : (c) => createMaterial(index = 22, health = 20, xp = 1, chance = c),
        ape        : (c) => createMaterial(index = 23, health = 20, xp = 1, chance = c),
        leopard    : (c) => createMaterial(index = 24, health = 20, xp = 1, chance = c),
        elephant   : (c) => createMaterial(index = 25, health = 20, xp = 1, chance = c),
        crocodile  : (c) => createMaterial(index = 26, health = 20, xp = 1, chance = c),
        lion       : (c) => createMaterial(index = 27, health = 20, xp = 1, chance = c),
        bison      : (c) => createMaterial(index = 28, health = 20, xp = 1, chance = c),
        rhino      : (c) => createMaterial(index = 29, health = 20, xp = 1, chance = c),
        ghost      : (c) => createMaterial(index = 30, health = 20, xp = 1, chance = c),

    }
}


let areas = {
    mining: {
        area1: {
            reset: function () {
                this.materials = {
                    stone: materials.mining.stone(1000),
                    ironOre: materials.mining.ironOre(300),
                    copper: materials.mining.copper(200),
                    silver: materials.mining.silver(100),
                    gold: materials.mining.gold(50),
                    platinum: materials.mining.platinum(25),

                    lead: materials.mining.lead(10),
                    titanium: materials.mining.titanium(5),
                    diamond: materials.mining.diamond(1),
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
                    stone: materials.mining.stone(100),
                }
                this.name = 'Platinum mine'
                this.index = 1
                this.level = 1
                this.totalLevel = 1
                this.previousAreaLevelRequired = 50;
                this.materialsDropped = 0
                this.requiredMaterialsForNextLevel = 40
                this.unlocked = false
            }


        },
        area3: {
            reset: function () {

                this.materials = {

                }
                this.name = 'Gold mine'
                this.index = 2
                this.level = 1
                this.totalLevel = 1
                this.previousAreaLevelRequired = 50;
                this.materialsDropped = 0
                this.requiredMaterialsForNextLevel = 40
                this.unlocked = false
            }



        },
        area4: {
            reset: function () {
                this.materials = {

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
    woodcutting: {
        area1: {
            reset: function () {
                this.materials = {
                    stick: materials.woodcutting.stick(1000),
                    oakWood: materials.woodcutting.oakWood(100),
                    mapleWood: materials.woodcutting.mapleWood(100),
                    mahagonyWood: materials.woodcutting.mahagonyWood(100),
                    birchWood: materials.woodcutting.birchWood(100),
                    cedarWood: materials.woodcutting.cedarWood(100),
                }
                this.name = 'Tropical Forest'
                this.index = 0
                this.level = 1
                this.totalLevel = 1
                this.materialsDropped = 0
                this.requiredMaterialsForNextLevel = 5
                this.unlocked = true
            }
        },
        area2: {
            reset: function () {
                this.materials = {
                    stick: materials.woodcutting.stick(1000),
                    mapleWood: materials.woodcutting.mapleWood(1000),
                    beechWood: materials.woodcutting.beechWood(1000),
                    elmWood: materials.woodcutting.elmWood(1000),
                    willowWood: materials.woodcutting.willowWood(1000),
                    redWood: materials.woodcutting.redWood(1000),

                }
                this.name = 'Temperate Forest'
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
                    stick: materials.woodcutting.stick(1000),
                    hickoryWood: materials.woodcutting.hickoryWood(1000),
                    cedarWood: materials.woodcutting.cedarWood(1000),
                    pineWood: materials.woodcutting.pineWood(1000),
                    spruceWood: materials.woodcutting.spruceWood(1000),
                    firWood: materials.woodcutting.firWood(1000),
                }
                this.name = 'Boreal Forest'
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
                    stick: materials.woodcutting.stick(1000),
                    ghostedWood: materials.woodcutting.ghostedWood(1000),
                    blackWood: materials.woodcutting.blackWood(1000),
                    shinyWood: materials.woodcutting.shinyWood(1000),
                    sparklyWood: materials.woodcutting.sparklyWood(1000),
                    cursedWood: materials.woodcutting.cursedWood(1000),
                    treeOfLife: materials.woodcutting.treeOfLife(1000),
                }
                this.name = 'Magic Forest'
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
    hunting: {
        area1: {
            reset: function () {
                this.materials = {
                    beetle: materials.hunting.beetle(1000),
                    rabbit: materials.hunting.rabbit(1000),
                    frog: materials.hunting.frog(1000),
                    chicken: materials.hunting.chicken(1000),
                    bat: materials.hunting.bat(1000),
                    pigeon: materials.hunting.pigeon(1000),
                    turtle: materials.hunting.turtle(1000),
                    rat: materials.hunting.rat(1000),
                    beaver: materials.hunting.beaver(1000),
                    owl: materials.hunting.owl(1000),
                    fox: materials.hunting.fox(1000),
                    wolf: materials.hunting.wolf(1000),
                    bear: materials.hunting.bear(1000),

                }
                this.name = 'Forest'
                this.index = 0
                this.level = 1
                this.totalLevel = 1
                this.materialsDropped = 0
                this.requiredMaterialsForNextLevel = 5
                this.unlocked = true
            }
        },
        area2: {
            reset: function () {
                this.materials = {
                    beetle: materials.hunting.beetle(1000),
                    bat: materials.hunting.bat(1000),
                    crab: materials.hunting.crab(1000),
                    camel: materials.hunting.camel(1000),
                    lizard: materials.hunting.lizard(1000),
                    crocodile: materials.hunting.crocodile(1000),

                }
                this.name = 'Desert'
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
                    honeyBadger: materials.hunting.honeyBadger(1000),
                    cow: materials.hunting.cow(1000),
                    wolf: materials.hunting.wolf(1000),
                    deer: materials.hunting.deer(1000),
                    lizard: materials.hunting.lizard(1000),
                    antelope: materials.hunting.antelope(1000),
                    armadillo: materials.hunting.armadillo(1000),
                    panda: materials.hunting.panda(1000),
                    ape: materials.hunting.ape(1000),
                    leopard: materials.hunting.leopard(1000),
                }
                this.name = 'Mountain'
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
                    penguin: materials.hunting.penguin(1000),
                    ape: materials.hunting.ape(1000),
                    elephant: materials.hunting.elephant(1000),
                    crocodile: materials.hunting.crocodile(1000),
                    lion: materials.hunting.lion(1000),
                    bison: materials.hunting.bison(1000),
                    rhino: materials.hunting.rhino(1000),
                    ghost: materials.hunting.ghost(1),
                }
                this.name = 'Jungle'
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
}

let upgrades = {
    mining: {
        increasePickaxePower: {
            reset: function () {
                this.level = 0
                this.currentBonus = 0
                this.bonusOnLevel = 2
                this.value = "flat"
                this.requiredMaterials = {
                    stone: requiredMaterial(10, 5),
                    copper: requiredMaterial(1, 1),
                    ironOre: requiredMaterial(3, 1),
                    stick: requiredMaterial(5, 1),
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
                    copper: requiredMaterial(1, 1),
                }
            }
        },
        upgradeTier: {
            reset: function () {
                this.level = 0
                this.currentBonus = 0
                this.bonusOnLevel = 1
                this.value = "flat"
                this.requiredLevel = 50
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
                    copper: requiredMaterial(1, 1)
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
                    stone: requiredMaterial(10, 5),
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
                    stone: requiredMaterial(100, 100),
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
                    ironOre: requiredMaterial(100, 100),
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
                    copper: requiredMaterial(100, 100),
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
                    silver: requiredMaterial(100, 100),
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
                    gold: requiredMaterial(100, 100),
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
                    platinum: requiredMaterial(100, 100),
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
                    silver: requiredMaterial(50, 50),
                    gold: requiredMaterial(50, 50),
                    platinum: requiredMaterial(50, 50),
                    diamond: requiredMaterial(5, 5),
                }
            }
        },
        increaseChanceToFindAzurite: {
            reset: function () {
                this.level = 0
                this.currentBonus = 0
                this.bonusOnLevel = 0.05
                this.value = "percent"
                this.requiredMaterials = {

                }
            }
        },
        increaseChanceToFindOnyx: {
            reset: function () {

                this.level = 0
                this.currentBonus = 0
                this.bonusOnLevel = 0.05
                this.value = "percent"
                this.requiredMaterials = {

                }
            }
        },
        increaseChanceToFindBlackStarDiopside: {
            reset: function () {
                this.level = 0
                this.currentBonus = 0
                this.bonusOnLevel = 0.05
                this.value = "percent"
                this.requiredMaterials = {

                }
            }
        },
    },
    woodcutting: {
        increaseAxePower: {
            reset: function () {
                this.level = 0
                this.currentBonus = 0
                this.bonusOnLevel = 2
                this.value = "flat"
                this.requiredMaterials = {
                    stone: requiredMaterial(1, 1),
                    stick: requiredMaterial(1, 1),
                }
            }
        },
    },
    hunting: {
        increaseWeaponPower: {
            reset: function () {
                this.level = 0
                this.currentBonus = 0
                this.bonusOnLevel = 2
                this.value = "flat"
                this.requiredMaterials = {
                    stone: requiredMaterial(1, 1),
                    stick: requiredMaterial(1, 1),
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
        area: areas.mining.area1,
        inventory: function () {
            return inventory[this.itemGroup]
        },
        getTool: function () {
            return tools.mining
        },
        breakingTime: undefined,
        timeout: undefined,
        type: 'mining',
        reset: function () {
            this.clicked = false;
            this.area = areas.mining.area1
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
        area: areas.woodcutting.area1,
        inventory: function () {
            return inventory[this.itemGroup]
        },
        getTool: function () {
            return tools.woodcutting
        },
        breakingTime: undefined,
        timeout: undefined,
        itemGroup: 'woodcuttingMaterials',
        areaGroup: 'woodcuttingAreas',
        reset: function () {
            this.clicked = false;
            this.area = areas.woodcutting.area1
        }
    },
    hunting: {
        index: 2,
        clicked: false,
        material: undefined,
        currentHP: undefined,
        totalHP: undefined,
        area: areas.hunting.area1,
        inventory: function () {
            return inventory[this.itemGroup]
        },
        getTool: function () {
            return tools.huntingTool
        },
        breakingTime: undefined,
        timeout: undefined,
        itemGroup: 'huntingMaterials',
        areaGroup: 'huntingAreas',
        reset: function () {
            this.clicked = false;
            this.area = areas.hunting.area1
        }
    },
}
