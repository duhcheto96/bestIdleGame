class Areas {
    constructor(...areas) {
        this.generateAreas()
        this.initAreas(...areas)
    }

    initAreas(...areas) {
        if (areas[0] !== null && areas[0] !== undefined) {
            this.mining = areas[0].mining
            this.woodcutting = areas[0].woodcutting
            this.hunting = areas[0].hunting
        }
        Object.keys(this).forEach(type => {
            let newAreas = {
                ...this[type],
                // ADD METHODS IF ANY
                
            }
            this[type] = newAreas
        })
    }
    generateAreas() {
        this.mining = {
            0: {
                materials: {
                    stone: {material: materials.mining.stone, chance: 1000},
                    ironOre: {material: materials.mining.ironOre, chance: 800},
                    copper: {material: materials.mining.copper, chance: 700},
                    silver: {material: materials.mining.silver, chance: 500},
                    gold: {material: materials.mining.gold, chance: 400},
                    platinum: {material: materials.mining.platinum, chance: 250},
                    lead: {material: materials.mining.lead, chance: 180},
                    titanium: {material: materials.mining.titanium, chance: 140},
                    bronze: {material: materials.mining.bronze, chance: 90},
                    cobalt: {material: materials.mining.cobalt, chance: 60},
                    nickel: {material: materials.mining.nickel, chance: 2},
                    diamond: {material: materials.mining.diamond, chance: 1},
                },
                name: 'Underground mine',
                index: 0,
                level: 1,
                totalLevel: 1,
                materialsDropped: 0,
                requiredMaterialsForNextLevel : 20,
                unlocked : true,
            },
            1: {
                materials : {
                    titanium: {material: materials.mining.titanium, chance: 400},
                    chromite: {material: materials.mining.chromite, chance: 200},
                    lithium: {material: materials.mining.lithium, chance: 250},
                    manganese: {material: materials.mining.manganese, chance: 120},
                    nickel: {material: materials.mining.nickel, chance: 60},
                    quartz: {material: materials.mining.quartz, chance: 90},
                    zinc: {material: materials.mining.zinc, chance: 150},
                    perlite: {material: materials.mining.perlite, chance: 40},
                    obsidian: {material: materials.mining.obsidian, chance: 75},
                    azurite: {material: materials.mining.azurite, chance: 140},
                    citrine: {material: materials.mining.citrine, chance: 80},
                    turquoise: {material: materials.mining.turquoise, chance: 30},
                },
                name : 'Surface mine',
                index : 1,
                level : 1,
                totalLevel : 1,
                previousAreaLevelRequired : 30,
                materialsDropped : 0,
                requiredMaterialsForNextLevel : 20,
                unlocked : false,
            },
            2: {
                materials : {
                    turquoise: {material: materials.mining.turquoise, chance: 1000},
                    diamond: {material: materials.mining.diamond, chance: 700},
                    pyrite: {material: materials.mining.pyrite, chance: 680},
                    amethyst: {material: materials.mining.amethyst, chance: 500},
                    ruby: {material: materials.mining.ruby, chance: 370},
                    sapphire: {material: materials.mining.sapphire, chance: 180},
                    emerald: {material: materials.mining.emerald, chance: 310},
                    amber: {material: materials.mining.amber, chance: 220},
                    aquamarine: {material: materials.mining.aquamarine, chance: 150},
                    sunstone: {material: materials.mining.sunstone, chance: 90},
                    moonstone: {material: materials.mining.moonstone, chance: 50},
                    onyx: {material: materials.mining.onyx, chance: 2},
                },
                name : 'In-situ mine',
                index : 2,
                level : 1,
                totalLevel : 1,
                previousAreaLevelRequired : 40,
                materialsDropped : 0,
                requiredMaterialsForNextLevel : 20,
                unlocked : false,
            },
            3: {
                materials : {
                    topaz: {material: materials.mining.topaz, chance: 2000},
                    bloodstone: {material: materials.mining.bloodstone, chance: 1750},
                    sulfur: {material: materials.mining.sulfur, chance: 1300},
                    zeolite: {material: materials.mining.zeolite, chance: 600},
                    lapisLazuli: {material: materials.mining.lapisLazuli, chance: 800},
                    cavansite: {material: materials.mining.cavansite, chance: 550},
                    garnet: {material: materials.mining.garnet, chance: 300},
                    howlite: {material: materials.mining.howlite, chance: 190},
                    zircon: {material: materials.mining.zircon, chance: 80},
                    tanzanite: {material: materials.mining.tanzanite, chance: 50},
                    blackStarDiopside: {material: materials.mining.blackStarDiopside, chance: 1},
                },
                name : 'Bingham Canyon mine',
                index : 3,
                level : 1,
                totalLevel : 1,
                previousAreaLevelRequired : 50,
                materialsDropped : 0,
                requiredMaterialsForNextLevel : 20,
                unlocked : false,
            }
        }
        this.woodcutting = {
            0: {
                materials : {
                    stick: {material: materials.woodcutting.stick, chance: 1800},
                    oakWood: {material: materials.woodcutting.oakWood, chance: 200},
                    mapleWood: {material: materials.woodcutting.mapleWood, chance: 350},
                    mahagonyWood: {material: materials.woodcutting.mahagonyWood, chance: 260},
                    birchWood: {material: materials.woodcutting.birchWood, chance: 120},
                    cedarWood: {material: materials.woodcutting.cedarWood, chance: 20},
                },
                name : 'Tropical Forest',
                index : 0,
                level : 1,
                totalLevel : 1,
                materialsDropped : 0,
                requiredMaterialsForNextLevel : 20,
                unlocked : true,
            },
            1: {
                materials : {
                    stick: {material: materials.woodcutting.stick, chance: 1500},
                    mapleWood: {material: materials.woodcutting.mapleWood, chance: 500},
                    beechWood: {material: materials.woodcutting.beechWood, chance: 250},
                    elmWood: {material: materials.woodcutting.elmWood, chance: 280},
                    willowWood: {material: materials.woodcutting.willowWood, chance: 140},
                    redWood: {material: materials.woodcutting.redWood, chance: 50},

                },
                name : 'Temperate Forest',
                index : 1,
                level : 1,
                totalLevel : 1,
                previousAreaLevelRequired : 20,
                materialsDropped : 0,
                requiredMaterialsForNextLevel : 20,
                unlocked : false,
            },
            2: {
                materials : {
                    stick: {material: materials.woodcutting.stick, chance: 700},
                    hickoryWood: {material: materials.woodcutting.hickoryWood, chance: 300},
                    cedarWood: {material: materials.woodcutting.cedarWood, chance: 160},
                    pineWood: {material: materials.woodcutting.pineWood, chance: 220},
                    spruceWood: {material: materials.woodcutting.spruceWood, chance: 80},
                    firWood: {material: materials.woodcutting.firWood, chance: 15},
                },
                name : 'Boreal Forest',
                index : 2,
                level : 1,
                totalLevel : 1,
                previousAreaLevelRequired : 25,
                materialsDropped : 0,
                requiredMaterialsForNextLevel : 20,
                unlocked : false,
            },
            3: {
                materials : {
                    stick: {material: materials.woodcutting.stick, chance: 2000},
                    ghostedWood: {material: materials.woodcutting.ghostedWood, chance: 120},
                    blackWood: {material: materials.woodcutting.blackWood, chance: 88},
                    shinyWood: {material: materials.woodcutting.shinyWood, chance: 96},
                    sparklyWood: {material: materials.woodcutting.sparklyWood, chance: 38},
                    cursedWood: {material: materials.woodcutting.cursedWood, chance: 14},
                    treeOfLife: {material: materials.woodcutting.treeOfLife, chance: 1},
                },
                name : 'Magic Forest',
                index : 3,
                level : 1,
                totalLevel : 1,
                previousAreaLevelRequired : 40,
                materialsDropped : 0,
                requiredMaterialsForNextLevel : 40,
                unlocked : false,
            },
        }
        this.hunting = {
            0: {
                materials : {
                    beetle : {material: materials.hunting.beetle , chance: 280},
                    rabbit : {material: materials.hunting.rabbit , chance: 60 },
                    frog   : {material: materials.hunting.frog   , chance: 260},
                    chicken: {material: materials.hunting.chicken, chance: 180},
                    bat    : {material: materials.hunting.bat    , chance: 30 },
                    pigeon : {material: materials.hunting.pigeon , chance: 300},
                    turtle : {material: materials.hunting.turtle , chance: 220},
                    rat    : {material: materials.hunting.rat    , chance: 60 },
                    beaver : {material: materials.hunting.beaver , chance: 100},
                    owl    : {material: materials.hunting.owl    , chance: 70 },
                    fox    : {material: materials.hunting.fox    , chance: 110},
                    wolf   : {material: materials.hunting.wolf   , chance: 110},
                    bear   : {material: materials.hunting.bear   , chance: 10 },
                },
                name : 'Forest',
                index : 0,
                level : 1,
                totalLevel : 1,
                materialsDropped : 0,
                requiredMaterialsForNextLevel : 50,
                unlocked : true,
            },
            1: {
                materials : {
                    beetle   : {material: materials.hunting.beetle   , chance: 300},
                    bat      : {material: materials.hunting.bat      , chance: 280},
                    crab     : {material: materials.hunting.crab     , chance: 450},
                    camel    : {material: materials.hunting.camel    , chance: 130},
                    lizard   : {material: materials.hunting.lizard   , chance: 160},
                    crocodile: {material: materials.hunting.crocodile, chance: 20 },
                },
                name : 'Desert',
                index : 1,
                level : 1,
                totalLevel : 1,
                previousAreaLevelRequired : 40,
                materialsDropped : 0,
                requiredMaterialsForNextLevel : 45,
                unlocked : false,
            },
            2: {
                materials : {
                    honeyBadger: {material: materials.hunting.honeyBadger, chance: 220},
                    cow        : {material: materials.hunting.cow        , chance: 250},
                    wolf       : {material: materials.hunting.wolf       , chance: 180},
                    deer       : {material: materials.hunting.deer       , chance: 260},
                    lizard     : {material: materials.hunting.lizard     , chance: 360},
                    antelope   : {material: materials.hunting.antelope   , chance: 80},
                    armadillo  : {material: materials.hunting.armadillo  , chance: 110},
                    panda      : {material: materials.hunting.panda      , chance: 40},
                    ape        : {material: materials.hunting.ape        , chance: 65},
                    leopard    : {material: materials.hunting.leopard    , chance: 15},
                },
                name : 'Mountain',
                index : 2,
                level : 1,
                totalLevel : 1,
                previousAreaLevelRequired : 45,
                materialsDropped : 0,
                requiredMaterialsForNextLevel : 40,
                unlocked : false,
            },
            3: {
                materials : {
                    penguin  : {material: materials.hunting.penguin  , chance: 160},
                    ape      : {material: materials.hunting.ape      , chance: 800},
                    elephant : {material: materials.hunting.elephant , chance: 440},
                    crocodile: {material: materials.hunting.crocodile, chance: 500},
                    lion     : {material: materials.hunting.lion     , chance: 360},
                    bison    : {material: materials.hunting.bison    , chance: 460},
                    rhino    : {material: materials.hunting.rhino    , chance: 240},
                    ghost    : {material: materials.hunting.ghost    , chance: 1},
                },
                name : 'Jungle',
                index : 3,
                level : 1,
                totalLevel : 1,
                previousAreaLevelRequired : 50,
                materialsDropped : 0,
                requiredMaterialsForNextLevel : 30,
                unlocked : false,
            },
        }
    }
}


class Main {
    constructor(...main) {
        this.generateMain()
        this.initMain(...main)
    }

    initMain(...main) {
        if (main[0] !== null && main[0] !== undefined) {
            this.coins = main[0].coins
            this.mining.area = main[0].mining.area
            this.woodcutting.area = main[0].woodcutting.area
            this.hunting.area = main[0].hunting.area
        }
        Object.keys(this).forEach(type => {
            if (type === 'coins') return
            let newMain = {
                ...this[type],
                get materials() {
                    return materials[this.type]
                },
                get tool() {
                    return tools[this.type]
                },
                get area() {
                    return areas[this.type][this.areaIndex]
                },
            }
            this[type] = newMain
        })
    }
    generateMain() {
        this.coins = 10;
        this.mining = {
            index: 0,
            clicked: false,
            material: undefined,
            currentHP: undefined,
            totalHP: undefined,
            areaIndex: 0,
            breakingTime: undefined,
            timeout: undefined,
            type: 'mining',
        }
        this.woodcutting = {
            index: 1,
            clicked: false,
            material: undefined,
            currentHP: undefined,
            totalHP: undefined,
            areaIndex: 0,
            breakingTime: undefined,
            timeout: undefined,
            type: 'woodcutting',
        }
        this.hunting = {
            index: 2,
            clicked: false,
            material: undefined,
            currentHP: undefined,
            totalHP: undefined,
            areaIndex: 0,
            breakingTime: undefined,
            timeout: undefined,
            type: 'hunting',
        }
    }
}


class Materials {
    constructor(...materials) {
        this.generateMaterials()
        this.initMaterials(...materials)
    }

    initMaterials(...materials) {
        if (materials[0] !== null && materials[0] !== undefined) {
            this.mining = materials[0].mining
            this.woodcutting = materials[0].woodcutting
            this.hunting = materials[0].hunting
        }
        Object.keys(this).forEach(type => {
            let newMaterials = {
                ...this[type],
                // ADD METHODS IF ANY
                // ADD MATERIAL? 
            }
            this[type] = newMaterials
        })
    }

    newMat(props) {
        if(props.drop == undefined) props.drop = 1;
    
        return {
            drop: props.drop, // Could add a materials that drops 2+
            quantity: 0,
            totalDropped: 0,
            sellPrice: props.sp,
            buyPrice: props.bp,
            index: props.i,
            health: props.hp,
            xp: props.xp,
        }
    }

    generateMaterials() {
        // i -> index
        // hp -> health points
        // xp -> experience points
        // sp -> sell price
        // bp -> buy price
        this.mining = {
            stone             : this.newMat({i:0  , hp: 20   , xp: 1   , sp: 1, bp: 5 }),
            ironOre           : this.newMat({i:1  , hp: 50   , xp: 3   , sp: 2, bp: 8 }),
            copper            : this.newMat({i:2  , hp: 40   , xp: 2   , sp: 2, bp: 6 }),
            silver            : this.newMat({i:3  , hp: 100  , xp: 5   , sp: 3, bp: 10 }),
            gold              : this.newMat({i:4  , hp: 200  , xp: 20  , sp: 20, bp: 45 }),
            platinum          : this.newMat({i:5  , hp: 300  , xp: 50  , sp: 8, bp: 20 }),
            lead              : this.newMat({i:6  , hp: 500  , xp: 100 , sp: 8, bp: 15 }),
            titanium          : this.newMat({i:7  , hp: 800  , xp: 175 , sp: 15, bp: 28 }),
            bronze            : this.newMat({i:8  , hp: 400  , xp: 65  , sp: 10, bp: 25 }),
            chromite          : this.newMat({i:9 , hp: 500  , xp: 80  , sp: 15, bp: 30 }),
            cobalt            : this.newMat({i:10 , hp: 450  , xp: 75  , sp: 12, bp: 27 }),
            diamond           : this.newMat({i:11  , hp: 1000 , xp: 250 , sp: 1000, bp: 3370 }),
            lithium           : this.newMat({i:12 , hp: 700  , xp: 110 , sp: 300, bp: 1200 }),
            manganese         : this.newMat({i:13 , hp: 300  , xp: 40  , sp: 100, bp: 350 }),
            nickel            : this.newMat({i:14 , hp: 900  , xp: 300 , sp: 700, bp: 2300 }),
            quartz            : this.newMat({i:15 , hp: 400  , xp: 280 , sp: 110, bp: 1000 }),
            zinc              : this.newMat({i:16 , hp: 1400  , xp: 420 , sp: 230, bp: 880 }),
            perlite           : this.newMat({i:17 , hp: 2200  , xp: 450 , sp: 500, bp: 3600 }),
            pyrite            : this.newMat({i:18 , hp: 3200  , xp: 640 , sp: 480, bp: 1300 }),
            obsidian          : this.newMat({i:19 , hp: 6000  , xp: 200 , sp: 120, bp: 150 }),
            azurite           : this.newMat({i:20 , hp: 2900  , xp: 600 , sp: 380, bp: 1100 }),
            amethyst          : this.newMat({i:21 , hp: 4500  , xp: 500 , sp: 600, bp: 2000 }),
            ruby              : this.newMat({i:22 , hp: 8000  , xp: 1000 , sp: 1000, bp: 6500 }),
            sapphire          : this.newMat({i:23 , hp: 9500  , xp: 1200 , sp: 700, bp: 5600 }),
            emerald           : this.newMat({i:24 , hp: 6700  , xp: 800 , sp: 900, bp: 4200 }),
            amber             : this.newMat({i:25 , hp: 12000  , xp: 2000 , sp: 1200, bp: 8000 }),
            citrine           : this.newMat({i:26 , hp: 4800  , xp: 370 , sp: 500, bp: 1000 }),
            turquoise         : this.newMat({i:27 , hp: 15800  , xp: 1200 , sp: 2500, bp: 10_000 }),
            topaz             : this.newMat({i:28 , hp: 28000  , xp: 2000 , sp: 3000, bp: 10_000 }),
            aquamarine        : this.newMat({i:29 , hp: 14000  , xp: 800 , sp: 900, bp: 8000 }),
            sunstone          : this.newMat({i:30 , hp: 10000  , xp: 500 , sp: 1000, bp: 2000 }),
            moonstone         : this.newMat({i:31 , hp: 10000  , xp: 500 , sp: 1000, bp: 2000 }),
            bloodstone        : this.newMat({i:32 , hp: 10000  , xp: 500 , sp: 1000, bp: 2000 }),
            onyx              : this.newMat({i:33 , hp: 45000  , xp: 4000 , sp: 4000, bp: 32000 }),
            sulfur            : this.newMat({i:34 , hp: 19000  , xp: 750 , sp: 1400, bp: 6000 }),
            // URANIUM MISSING
            uranium           : this.newMat({i:35 , hp: 1  , xp: 1 , sp: 10000, bp: 100_000 }),
            zeolite           : this.newMat({i:36 , hp: 80000  , xp: 2600 , sp: 6000, bp: 22000 }),
            lapisLazuli       : this.newMat({i:37 , hp: 64000  , xp: 1800 , sp: 3200, bp: 32000 }),
            cavansite         : this.newMat({i:38 , hp: 120_000  , xp: 4000 , sp: 8000, bp: 45000 }),
            garnet            : this.newMat({i:39 , hp: 99_999  , xp: 1999 , sp: 999, bp: 9999 }),
            howlite           : this.newMat({i:40 , hp: 170000  , xp: 6500 , sp: 4800, bp: 9500 }),
            zircon            : this.newMat({i:41 , hp: 280000  , xp: 10000 , sp: 10000, bp: 80000 }),
            tanzanite         : this.newMat({i:42 , hp: 540000  , xp: 16000 , sp: 12000, bp: 140000 }),
            blackStarDiopside : this.newMat({i:43 , hp: 1_800_000  , xp: 50000 , sp: 99999, bp: 1_000_000 }),
            },
        this.woodcutting = {
            stick        : this.newMat({i: 0  , hp: 20, xp: 1, sp: 1, bp: 2 }),
            oakWood      : this.newMat({i: 1  , hp: 80, xp: 5, sp: 10, bp: 40 }),
            mapleWood    : this.newMat({i: 2  , hp: 65, xp: 4, sp: 8, bp: 32 }),
            mahagonyWood : this.newMat({i: 3  , hp: 220, xp: 12, sp: 18, bp: 60 }),
            birchWood    : this.newMat({i: 4  , hp: 380, xp: 28, sp: 25, bp: 160 }),
            beechWood    : this.newMat({i: 5  , hp: 960, xp: 60, sp: 100, bp: 290 }),
            elmWood      : this.newMat({i: 6  , hp: 1400, xp: 100, sp: 65, bp: 200 }),
            willowWood   : this.newMat({i: 7  , hp: 2600, xp: 240, sp: 120, bp: 500 }),
            hickoryWood  : this.newMat({i: 8  , hp: 3200, xp: 265, sp: 180, bp: 1000 }),
            cedarWood    : this.newMat({i: 9  , hp: 750, xp: 50, sp: 65, bp: 220 }),
            pineWood     : this.newMat({i: 10 , hp: 8000, xp: 600, sp: 500, bp: 800 }),
            spruceWood   : this.newMat({i: 11 , hp: 13560, xp: 900, sp: 1000, bp: 9000 }),
            redWood      : this.newMat({i: 12 , hp: 6200, xp: 500, sp: 1000, bp: 6000 }),
            firWood      : this.newMat({i: 13 , hp: 25000, xp: 2500, sp: 1600, bp: 8500 }),
            ghostedWood  : this.newMat({i: 14 , hp: 60000, xp: 1, sp: 10000, bp: 10000 }),
            blackWood    : this.newMat({i: 15 , hp: 35000, xp: 1800, sp: 4000, bp: 12000 }),
            shinyWood    : this.newMat({i: 16 , hp: 80000, xp: 4500, sp: 6000, bp: 26000 }),
            sparklyWood  : this.newMat({i: 17 , hp: 150_000, xp: 6000, sp: 8000, bp: 25000 }),
            cursedWood   : this.newMat({i: 18 , hp: 400_000, xp: 12000, sp: 20_000, bp: 80_000 }),
            treeOfLife   : this.newMat({i: 19 , hp: 1_250_000, xp: 50_000, sp: 60_000, bp: 500_000 }),
            },
        this.hunting = {
            beetle      : this.newMat({i: 0  , hp: 20, xp: 1, sp: 1, bp: 2 }),
            rabbit      : this.newMat({i: 1  , hp: 80, xp: 2, sp: 10, bp: 100 }),
            frog        : this.newMat({i: 2  , hp: 60, xp: 2, sp: 3, bp: 40 }),
            chicken     : this.newMat({i: 3  , hp: 180, xp: 3, sp: 20, bp: 50 }),
            bat         : this.newMat({i: 4  , hp: 150, xp: 6, sp: 5, bp: 80 }),
            pigeon      : this.newMat({i: 5  , hp: 300, xp: 10, sp: 25, bp: 40 }),
            turtle      : this.newMat({i: 6  , hp: 1000, xp: 30, sp: 30, bp: 200 }),
            crab        : this.newMat({i: 7  , hp: 1800, xp: 25, sp: 35, bp: 130 }),
            rat         : this.newMat({i: 8  , hp: 600, xp: 15, sp: 10, bp: 15 }),
            beaver      : this.newMat({i: 9  , hp: 2400, xp: 50, sp: 60, bp: 250 }),
            owl         : this.newMat({i: 10 , hp: 3100, xp: 55, sp: 55, bp: 400 }),
            fox         : this.newMat({i: 11 , hp: 3890, xp: 100, sp: 90, bp: 400 }),
            honeyBadger : this.newMat({i: 12 , hp: 8000, xp: 260, sp: 300, bp: 1800 }),
            cow         : this.newMat({i: 13 , hp: 20000, xp: 400, sp: 1000, bp: 2500 }),
            wolf        : this.newMat({i: 14 , hp: 15000, xp: 360, sp: 1800, bp: 6000 }),
            deer        : this.newMat({i: 15 , hp: 26000, xp: 500, sp: 2000, bp: 5600 }),
            bear        : this.newMat({i: 16 , hp: 40000, xp: 1000, sp: 8000, bp: 10000 }),
            camel       : this.newMat({i: 17 , hp: 35000, xp: 1000, sp: 6500, bp: 10000 }),
            lizard      : this.newMat({i: 18 , hp: 4000, xp: 600, sp: 1000, bp: 1500 }),
            antelope    : this.newMat({i: 19 , hp: 50000, xp: 2000, sp: 1300, bp: 5400 }),
            armadillo   : this.newMat({i: 20 , hp: 27000, xp: 900, sp: 700, bp: 2500 }),
            penguin     : this.newMat({i: 21 , hp: 70000, xp: 1700, sp: 1500, bp: 7000 }),
            panda       : this.newMat({i: 22 , hp: 160000, xp: 6000, sp: 4000, bp: 5000 }),
            ape         : this.newMat({i: 23 , hp: 120000, xp: 5500, sp: 4500, bp: 9000 }),
            leopard     : this.newMat({i: 24 , hp: 140000, xp: 7000, sp: 5000, bp: 25000 }),
            elephant    : this.newMat({i: 25 , hp: 380000, xp: 15000, sp: 12000, bp: 35000 }),
            crocodile   : this.newMat({i: 26 , hp: 600000, xp: 20000, sp: 9999, bp: 49999 }),
            lion        : this.newMat({i: 27 , hp: 1_000_000, xp: 35000, sp: 16000, bp: 35000 }),
            bison       : this.newMat({i: 28 , hp: 5_000_000, xp: 70000, sp: 25000, bp: 40000 }),
            rhino       : this.newMat({i: 29 , hp: 16_000_000, xp: 90000, sp: 50000, bp: 100000 }),
            ghost       : this.newMat({i: 30 , hp: 200_000_000, xp: 1, sp: 1, bp: 50_000_000 }),
        }
    }
}


class Tools {
    constructor(...tools) {
        this.generateTools()
        this.initTools(...tools)
    }
    initTools(...tools) {
        if (tools[0] !== null && tools[0] !== undefined) {
            this.mining = tools[0].mining
            this.woodcutting = tools[0].woodcutting
            this.hunting = tools[0].hunting
        }

        Object.keys(this).forEach(tool => {
            let newTool = {
                ...this[tool],
                get name() {
                    return this.upgrade.list[this.upgrade.index]
                },
                upgradeTool() {
                    this.upgrade.index++
                },
                get power() {
                    let damageFromUpgrades = () => this.upgrade.index * 3 / 10 + 1
                    let damageFromTier = () => 0.9 + this.xp.tier / 10
    
                    // upgrades give % bonus to powerFromLevels
                    // tier gives total % bonus
                    return Math.floor((
                        this.damage.power +
                        this.damage.powerFromLevels * damageFromUpgrades() +
                        this.damage.powerFromUpgrades)
                        * damageFromTier());
                },
                get lowerMaterialHealth() {
                    return this.upgrade.index / 10 + 1
                },
                get bonusDrop() {
                    return this.upgrade.index
                },
                get bonusXpFromTier() {
                    return 0.9 + this.xp.tier / 10
                }
            }
            this[tool] = newTool
        });
    }

    generateTools() {
        this.mining = {
            index : 0,
            upgrade : {
                index: 0,
                list: ["Wooden pickaxe", "Stone pickaxe",
                    "Iron pickaxe", "Gold pickaxe",
                    "Platinum pickaxe", "Diamond pickaxe"],
            },
            xp : {
                level: 1,
                tier: 1,
                currentXp: 0,
                neededXp: 20,
                totalXP: 0,
                initialNeededXp: 20,
                neededXpOnLevel: 20,
            },
            damage : {
                power: 5,
                initialPower: 5,
                powerOnLevel: 1,
                initialPowerOnLevel: 1,
                powerFromLevels: 0,
                powerFromUpgrades: 0,
            },
            aps : 2_000,
            lookingForTime : 2_000,
            chanceForDoubleMaterial : 0,
        }
        this.woodcutting = {
            index : 1,
            upgrade : {
                index: 0,
                list: ["Wooden axe", "Stone axe",
                    "Iron axe", "Gold axe",
                    "Platinum axe", "Diamond axe"],
            },
            xp : {
                level: 1,
                tier: 1,
                currentXp: 0,
                neededXp: 15,
                totalXP: 0,
                initialNeededXp: 15,
                neededXpOnLevel: 15,
            },
            damage : {
                power: 5,
                initialPower: 5,
                powerOnLevel: 1,
                initialPowerOnLevel: 2,
                powerFromLevels: 0,
                powerFromUpgrades: 0,
            },
            aps : 2_000,
            lookingForTime : 2_000,
            chanceForDoubleMaterial : 0,
        }
        this.hunting = {
            index : 2,
            upgrade : {
                index: 0,
                list: ["Wooden bow", "Stone bow",
                    "Iron bow", "Gold bow",
                    "Platinum bow", "Diamond bow"],
            },
            xp : {
                level: 1,
                tier: 1,
                currentXp: 0,
                neededXp: 50,
                totalXP: 0,
                initialNeededXp: 50,
                neededXpOnLevel: 30,
            },
            damage : {
                power: 10,
                initialPower: 10,
                powerOnLevel: 2,
                initialPowerOnLevel: 2,
                powerFromLevels: 0,
                powerFromUpgrades: 0,
                bonusDmgFromTier: 1,
            },
            aps : 1_000,
            lookingForTime : 10_000,
            chanceForDoubleMaterial : 0,
        }
    }
}


class Upgrades {
    constructor(...upgrades) {
        this.generateUpgrades()
        this.initUpgrades(...upgrades)
    }

    initUpgrades(...upgrades) {
        if (upgrades[0] !== null && upgrades[0] !== undefined) {
            this.mining = upgrades[0].mining
            this.woodcutting = upgrades[0].woodcutting
            this.hunting = upgrades[0].hunting
        }
        Object.keys(this).forEach(type => {
            let newUpgrades = {
                ...this[type],
                
            }
            this[type] = newUpgrades
        })
    }

    requiredMaterial(required, requiredOnLevel) {
        return {
            required: required,
            initialRequired: required,
            requiredOnLevel: requiredOnLevel,
        }
    }

    generateUpgrades() {
        this.mining = {
            increasePickaxePower: {
                level : 0,
                currentBonus : 0,
                bonusOnLevel : 2,
                value : "flat",
                requiredMaterials : {
                    stone: this.requiredMaterial(1, 1),
                    ironOre: this.requiredMaterial(1, 0),
                    stick: this.requiredMaterial(1, 1),
                },
            },
            increasePickaxeAtackSpeed: {
                level : 0,
                currentBonus : 0,
                bonusOnLevel : .01,
                value : "percent",
                requiredMaterials : {
                    copper: this.requiredMaterial(1, 1),
                    silver: this.requiredMaterial(1, 0),
                    stick: this.requiredMaterial(1, 1),
                },
            },
            upgradeTier: {
                level : 0,
                currentBonus : 0,
                bonusOnLevel : 1,
                value : "flat",
                requiredLevel : 50,
                requiredMaterials : {

                },
            },
            decreaseLookingForMaterialTime: {
                level : 0,
                currentBonus : 0,
                bonusOnLevel : .01,
                value : "percent",
                requiredMaterials : {
                    copper: this.requiredMaterial(1, 1)
                },
            },
            upgradePickaxe: {
                level : 0,
                currentBonus : 0,
                bonusOnLevel : 1,
                value : "flat",
                requiredTier : 50,
                requiredMaterials : {

                },
            },
            addChanceForDoubleMaterialGain: {
                level : 0,
                currentBonus : 0,
                bonusOnLevel : 1,
                value : "flat",
                requiredMaterials : {
                    stone: this.requiredMaterial(10, 5),
                },
            },
            increaseStoneDrop: {
                level : 0,
                currentBonus : 0,
                bonusOnLevel : 1,
                value : "flat",
                requiredMaterials : {
                    stone: this.requiredMaterial(100, 100),
                },
            },
            increaseIronOreDrop: {
                level : 0,
                currentBonus : 0,
                bonusOnLevel : 1,
                value : "flat",
                requiredMaterials : {
                    ironOre: this.requiredMaterial(100, 100),
                },
            },
            increaseCopperDrop: {
                level : 0,
                currentBonus : 0,
                bonusOnLevel : 1,
                value : "flat",
                requiredMaterials : {
                    copper: this.requiredMaterial(100, 100),
                },
            },
            increaseSilverDrop: {
                level : 0,
                currentBonus : 0,
                bonusOnLevel : 1,
                value : "flat",
                requiredMaterials : {
                    silver: this.requiredMaterial(100, 100),
                },
            },
            increaseGoldDrop: {
                level : 0,
                currentBonus : 0,
                bonusOnLevel : 1,
                value : "flat",
                requiredMaterials : {
                    gold: this.requiredMaterial(100, 100),
                }
            },
            increasePlatinumDrop: {
                level : 0,
                currentBonus : 0,
                bonusOnLevel : 1,
                value : "flat",
                requiredMaterials : {
                    platinum: this.requiredMaterial(100, 100),
                },
            },
            increaseChanceToFindDiamond: {
                level : 0,
                currentBonus : 0,
                bonusOnLevel : 0.05,
                value : "percent",
                requiredMaterials : {
                    silver: this.requiredMaterial(50, 50),
                    gold: this.requiredMaterial(50, 50),
                    platinum: this.requiredMaterial(50, 50),
                    diamond: this.requiredMaterial(5, 5),
                },
            },
            increaseChanceToFindAzurite: {
                level : 0,
                currentBonus : 0,
                bonusOnLevel : 0.05,
                value : "percent",
                requiredMaterials : {

                },
            },
            increaseChanceToFindOnyx: {

                level : 0,
                currentBonus : 0,
                bonusOnLevel : 0.05,
                value : "percent",
                requiredMaterials : {

                },
            },
            increaseChanceToFindBlackStarDiopside: {
                level : 0,
                currentBonus : 0,
                bonusOnLevel : 0.05,
                value : "percent",
                requiredMaterials : {

                }
            },
        }
        this.woodcutting = {
            increaseAxePower: {
                level : 0,
                currentBonus : 0,
                bonusOnLevel : 2,
                value : "flat",
                requiredMaterials : {
                    stone: this.requiredMaterial(1, 1),
                    stick: this.requiredMaterial(1, 1),
                },
            },
        }
        this.hunting = {
            increaseWeaponPower: {
                level : 0,
                currentBonus : 0,
                bonusOnLevel : 2,
                value : "flat",
                requiredMaterials : {
                    stone: this.requiredMaterial(1, 1),
                    stick: this.requiredMaterial(1, 1),
                },
            },
        }
    }
}


//localStorage.clear()


let multiplier = 1;
let scroll = true;

let greenColor = 'rgba(0, 200, 0, 0.5)'
let redColor = 'rgb(192, 206, 195)'

let materials = new Materials(JSON.parse(localStorage.getItem("materials")))
let tools = new Tools(JSON.parse(localStorage.getItem("tools")))
let upgrades = new Upgrades(JSON.parse(localStorage.getItem("upgrades")))
let areas = new Areas(JSON.parse(localStorage.getItem("areas")))
let main = new Main(JSON.parse(localStorage.getItem("main")))
