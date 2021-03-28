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
                    ironOre: {material: materials.mining.ironOre, chance: 300},
                    copper: {material: materials.mining.copper, chance: 200},
                    silver: {material: materials.mining.silver, chance: 100},
                    gold: {material: materials.mining.gold, chance: 50},
                    platinum: {material: materials.mining.platinum, chance: 25},
                    lead: {material: materials.mining.lead, chance: 10},
                    titanium: {material: materials.mining.titanium, chance: 5},
                    diamond: {material: materials.mining.diamond, chance: 1},
                },
                name: 'Iron mine',
                index: 0,
                level: 1,
                totalLevel: 1,
                materialsDropped: 0,
                requiredMaterialsForNextLevel : 40,
                unlocked : true,
            },
            1: {
                materials : {
                    stone: {material: materials.mining.stone, chance: 1000},
                },
                name : 'Platinum mine',
                index : 1,
                level : 1,
                totalLevel : 1,
                previousAreaLevelRequired : 50,
                materialsDropped : 0,
                requiredMaterialsForNextLevel : 40,
                unlocked : false,
            },
            2: {
                materials : {
                    stone: {material: materials.mining.stone, chance: 1000},
                },
                name : 'Gold mine',
                index : 2,
                level : 1,
                totalLevel : 1,
                previousAreaLevelRequired : 50,
                materialsDropped : 0,
                requiredMaterialsForNextLevel : 40,
                unlocked : false,
            },
            3: {
                materials : {
                    stone: {material: materials.mining.stone, chance: 1000},
                },
                name : 'Bingham Canyon mine',
                index : 3,
                level : 1,
                totalLevel : 1,
                previousAreaLevelRequired : 50,
                materialsDropped : 0,
                requiredMaterialsForNextLevel : 5,
                unlocked : false,
            }
        }
        this.woodcutting = {
            0: {
                materials : {
                    stick: {material: materials.woodcutting.stick, chance: 1000},
                    oakWood: {material: materials.woodcutting.oakWood, chance: 100},
                    mapleWood: {material: materials.woodcutting.mapleWood, chance: 100},
                    mahagonyWood: {material: materials.woodcutting.mahagonyWood, chance: 100},
                    birchWood: {material: materials.woodcutting.birchWood, chance: 100},
                    cedarWood: {material: materials.woodcutting.cedarWood, chance: 100},
                },
                name : 'Tropical Forest',
                index : 0,
                level : 1,
                totalLevel : 1,
                materialsDropped : 0,
                requiredMaterialsForNextLevel : 5,
                unlocked : true,
            },
            1: {
                materials : {
                    stick: {material: materials.woodcutting.stick, chance: 1000},
                    mapleWood: {material: materials.woodcutting.mapleWood, chance: 1000},
                    beechWood: {material: materials.woodcutting.beechWood, chance: 1000},
                    elmWood: {material: materials.woodcutting.elmWood, chance: 1000},
                    willowWood: {material: materials.woodcutting.willowWood, chance: 1000},
                    redWood: {material: materials.woodcutting.redWood, chance: 1000},

                },
                name : 'Temperate Forest',
                index : 1,
                level : 1,
                totalLevel : 1,
                previousAreaLevelRequired : 50,
                materialsDropped : 0,
                requiredMaterialsForNextLevel : 5,
                unlocked : false,
            },
            2: {
                materials : {
                    stick: {material: materials.woodcutting.stick, chance: 1000},
                    hickoryWood: {material: materials.woodcutting.hickoryWood, chance: 1000},
                    cedarWood: {material: materials.woodcutting.cedarWood, chance: 1000},
                    pineWood: {material: materials.woodcutting.pineWood, chance: 1000},
                    spruceWood: {material: materials.woodcutting.spruceWood, chance: 1000},
                    firWood: {material: materials.woodcutting.firWood, chance: 1000},
                },
                name : 'Boreal Forest',
                index : 2,
                level : 1,
                totalLevel : 1,
                previousAreaLevelRequired : 50,
                materialsDropped : 0,
                requiredMaterialsForNextLevel : 5,
                unlocked : false,
            },
            3: {
                materials : {
                    stick: {material: materials.woodcutting.stick, chance: 1000},
                    ghostedWood: {material: materials.woodcutting.ghostedWood, chance: 1000},
                    blackWood: {material: materials.woodcutting.blackWood, chance: 1000},
                    shinyWood: {material: materials.woodcutting.shinyWood, chance: 1000},
                    sparklyWood: {material: materials.woodcutting.sparklyWood, chance: 1000},
                    cursedWood: {material: materials.woodcutting.cursedWood, chance: 1000},
                    treeOfLife: {material: materials.woodcutting.treeOfLife, chance: 1000},
                },
                name : 'Magic Forest',
                index : 3,
                level : 1,
                totalLevel : 1,
                previousAreaLevelRequired : 50,
                materialsDropped : 0,
                requiredMaterialsForNextLevel : 5,
                unlocked : false,
            },
        }
        this.hunting = {
            0: {
                materials : {
                    beetle: {material: materials.hunting.beetle, chance: 1000},
                    rabbit: {material: materials.hunting.rabbit, chance: 1000},
                    frog: {material: materials.hunting.frog, chance: 1000},
                    chicken: {material: materials.hunting.chicken, chance: 1000},
                    bat: {material: materials.hunting.bat, chance: 1000},
                    pigeon: {material: materials.hunting.pigeon, chance: 1000},
                    turtle: {material: materials.hunting.turtle, chance: 1000},
                    rat: {material: materials.hunting.rat, chance: 1000},
                    beaver: {material: materials.hunting.beaver, chance: 1000},
                    owl: {material: materials.hunting.owl, chance: 1000},
                    fox: {material: materials.hunting.fox, chance: 1000},
                    wolf: {material: materials.hunting.wolf, chance: 1000},
                    bear: {material: materials.hunting.bear, chance: 1000},
                },
                name : 'Forest',
                index : 0,
                level : 1,
                totalLevel : 1,
                materialsDropped : 0,
                requiredMaterialsForNextLevel : 5,
                unlocked : true,
            },
            1: {
                materials : {
                    beetle: {material: materials.hunting.beetle, chance: 1000},
                    bat: {material: materials.hunting.bat, chance: 1000},
                    crab: {material: materials.hunting.crab, chance: 1000},
                    camel: {material: materials.hunting.camel, chance: 1000},
                    lizard: {material: materials.hunting.lizard, chance: 1000},
                    crocodile: {material: materials.hunting.crocodile, chance: 1000},
                },
                name : 'Desert',
                index : 1,
                level : 1,
                totalLevel : 1,
                previousAreaLevelRequired : 50,
                materialsDropped : 0,
                requiredMaterialsForNextLevel : 5,
                unlocked : false,
            },
            2: {
                materials : {
                    honeyBadger: {material: materials.hunting.honeyBadger, chance: 1000},
                    cow: {material: materials.hunting.cow, chance: 1000},
                    wolf: {material: materials.hunting.wolf, chance: 1000},
                    deer: {material: materials.hunting.deer, chance: 1000},
                    lizard: {material: materials.hunting.lizard, chance: 1000},
                    antelope: {material: materials.hunting.antelope, chance: 1000},
                    armadillo: {material: materials.hunting.armadillo, chance: 1000},
                    panda: {material: materials.hunting.panda, chance: 1000},
                    ape: {material: materials.hunting.ape, chance: 1000},
                    leopard: {material: materials.hunting.leopard, chance: 1000},
                },
                name : 'Mountain',
                index : 2,
                level : 1,
                totalLevel : 1,
                previousAreaLevelRequired : 50,
                materialsDropped : 0,
                requiredMaterialsForNextLevel : 5,
                unlocked : false,
            },
            3: {
                materials : {
                    penguin: {material: materials.hunting.penguin, chance: 1000},
                    ape: {material: materials.hunting.ape, chance: 1000},
                    elephant: {material: materials.hunting.elephant, chance: 1000},
                    crocodile: {material: materials.hunting.crocodile, chance: 1000},
                    lion: {material: materials.hunting.lion, chance: 1000},
                    bison: {material: materials.hunting.bison, chance: 1000},
                    rhino: {material: materials.hunting.rhino, chance: 1000},
                    ghost: {material: materials.hunting.ghost, chance: 1000},
                },
                name : 'Jungle',
                index : 3,
                level : 1,
                totalLevel : 1,
                previousAreaLevelRequired : 50,
                materialsDropped : 0,
                requiredMaterialsForNextLevel : 5,
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
            quantity: 10,
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
            stone             : this.newMat({i:0  , hp: 20   , xp: 1   , sp: 5, bp: 1 }),
            ironOre           : this.newMat({i:1  , hp: 50   , xp: 3   , sp: 1, bp: 1 }),
            copper            : this.newMat({i:2  , hp: 40   , xp: 2   , sp: 1, bp: 1 }),
            silver            : this.newMat({i:3  , hp: 100  , xp: 5   , sp: 1, bp: 1 }),
            gold              : this.newMat({i:4  , hp: 200  , xp: 20  , sp: 1, bp: 1 }),
            platinum          : this.newMat({i:5  , hp: 300  , xp: 50  , sp: 1, bp: 1 }),
            lead              : this.newMat({i:6  , hp: 500  , xp: 100 , sp: 1, bp: 1 }),
            titanium          : this.newMat({i:7  , hp: 800  , xp: 175 , sp: 1, bp: 1 }),
            diamond           : this.newMat({i:8  , hp: 1000 , xp: 250 , sp: 1, bp: 1 }),
            bronze            : this.newMat({i:9  , hp: 400  , xp: 65  , sp: 1, bp: 1 }),
            chromite          : this.newMat({i:10 , hp: 500  , xp: 80  , sp: 1, bp: 1 }),
            cobalt            : this.newMat({i:11 , hp: 450  , xp: 75  , sp: 1, bp: 1 }),
            lithium           : this.newMat({i:12 , hp: 700  , xp: 110 , sp: 1, bp: 1 }),
            manganese         : this.newMat({i:13 , hp: 300  , xp: 40  , sp: 1, bp: 1 }),
            nickel            : this.newMat({i:14 , hp: 900  , xp: 300 , sp: 1, bp: 1 }),
            quartz            : this.newMat({i:15 , hp: 900  , xp: 300 , sp: 1, bp: 1 }),
            zinc              : this.newMat({i:16 , hp: 900  , xp: 300 , sp: 1, bp: 1 }),
            perlite           : this.newMat({i:17 , hp: 900  , xp: 300 , sp: 1, bp: 1 }),
            pyrite            : this.newMat({i:18 , hp: 900  , xp: 300 , sp: 1, bp: 1 }),
            obsidian          : this.newMat({i:19 , hp: 900  , xp: 300 , sp: 1, bp: 1 }),
            azurite           : this.newMat({i:20 , hp: 900  , xp: 300 , sp: 1, bp: 1 }),
            amethyst          : this.newMat({i:21 , hp: 900  , xp: 300 , sp: 1, bp: 1 }),
            ruby              : this.newMat({i:22 , hp: 900  , xp: 300 , sp: 1, bp: 1 }),
            sapphire          : this.newMat({i:23 , hp: 900  , xp: 300 , sp: 1, bp: 1 }),
            emerald           : this.newMat({i:24 , hp: 900  , xp: 300 , sp: 1, bp: 1 }),
            amber             : this.newMat({i:25 , hp: 900  , xp: 300 , sp: 1, bp: 1 }),
            citrine           : this.newMat({i:26 , hp: 900  , xp: 300 , sp: 1, bp: 1 }),
            turquoise         : this.newMat({i:27 , hp: 900  , xp: 300 , sp: 1, bp: 1 }),
            topaz             : this.newMat({i:28 , hp: 900  , xp: 300 , sp: 1, bp: 1 }),
            aquamarine        : this.newMat({i:29 , hp: 900  , xp: 300 , sp: 1, bp: 1 }),
            sunstone          : this.newMat({i:30 , hp: 900  , xp: 300 , sp: 1, bp: 1 }),
            moonstone         : this.newMat({i:31 , hp: 900  , xp: 300 , sp: 1, bp: 1 }),
            bloodstone        : this.newMat({i:32 , hp: 900  , xp: 300 , sp: 1, bp: 1 }),
            onyx              : this.newMat({i:33 , hp: 900  , xp: 300 , sp: 1, bp: 1 }),
            sulfur            : this.newMat({i:34 , hp: 900  , xp: 300 , sp: 1, bp: 1 }),
            uranium           : this.newMat({i:35 , hp: 900  , xp: 300 , sp: 1, bp: 1 }),
            zeolite           : this.newMat({i:36 , hp: 900  , xp: 300 , sp: 1, bp: 1 }),
            lapisLazuli       : this.newMat({i:37 , hp: 900  , xp: 300 , sp: 1, bp: 1 }),
            cavansite         : this.newMat({i:38 , hp: 900  , xp: 300 , sp: 1, bp: 1 }),
            garnet            : this.newMat({i:39 , hp: 900  , xp: 300 , sp: 1, bp: 1 }),
            howlite           : this.newMat({i:40 , hp: 900  , xp: 300 , sp: 1, bp: 1 }),
            zircon            : this.newMat({i:41 , hp: 900  , xp: 300 , sp: 1, bp: 1 }),
            tanzanite         : this.newMat({i:42 , hp: 900  , xp: 300 , sp: 1, bp: 1 }),
            blackStarDiopside : this.newMat({i:43 , hp: 900  , xp: 300 , sp: 1, bp: 1 }),
            },
        this.woodcutting = {
            stick        : this.newMat({i: 0  , hp: 20, xp: 1, sp: 1, bp: 1 }),
            oakWood      : this.newMat({i: 1  , hp: 20, xp: 1, sp: 1, bp: 1 }),
            mapleWood    : this.newMat({i: 2  , hp: 20, xp: 1, sp: 1, bp: 1 }),
            mahagonyWood : this.newMat({i: 3  , hp: 20, xp: 1, sp: 1, bp: 1 }),
            birchWood    : this.newMat({i: 4  , hp: 20, xp: 1, sp: 1, bp: 1 }),
            beechWood    : this.newMat({i: 5  , hp: 20, xp: 1, sp: 1, bp: 1 }),
            elmWood      : this.newMat({i: 6  , hp: 20, xp: 1, sp: 1, bp: 1 }),
            willowWood   : this.newMat({i: 7  , hp: 20, xp: 1, sp: 1, bp: 1 }),
            hickoryWood  : this.newMat({i: 8  , hp: 20, xp: 1, sp: 1, bp: 1 }),
            cedarWood    : this.newMat({i: 9  , hp: 20, xp: 1, sp: 1, bp: 1 }),
            pineWood     : this.newMat({i: 10 , hp: 20, xp: 1, sp: 1, bp: 1 }),
            spruceWood   : this.newMat({i: 11 , hp: 20, xp: 1, sp: 1, bp: 1 }),
            redWood      : this.newMat({i: 12 , hp: 20, xp: 1, sp: 1, bp: 1 }),
            firWood      : this.newMat({i: 13 , hp: 20, xp: 1, sp: 1, bp: 1 }),
            ghostedWood  : this.newMat({i: 14 , hp: 20, xp: 1, sp: 1, bp: 1 }),
            blackWood    : this.newMat({i: 15 , hp: 20, xp: 1, sp: 1, bp: 1 }),
            shinyWood    : this.newMat({i: 16 , hp: 20, xp: 1, sp: 1, bp: 1 }),
            sparklyWood  : this.newMat({i: 17 , hp: 20, xp: 1, sp: 1, bp: 1 }),
            cursedWood   : this.newMat({i: 18 , hp: 20, xp: 1, sp: 1, bp: 1 }),
            treeOfLife   : this.newMat({i: 19 , hp: 20, xp: 1, sp: 1, bp: 1 }),
            },
        this.hunting = {
            beetle      : this.newMat({i: 0  , hp: 20, xp: 1, sp: 1, bp: 1 }),
            rabbit      : this.newMat({i: 1  , hp: 20, xp: 2, sp: 1, bp: 1 }),
            frog        : this.newMat({i: 2  , hp: 20, xp: 1, sp: 1, bp: 1 }),
            chicken     : this.newMat({i: 3  , hp: 20, xp: 1, sp: 1, bp: 1 }),
            bat         : this.newMat({i: 4  , hp: 20, xp: 1, sp: 1, bp: 1 }),
            pigeon      : this.newMat({i: 5  , hp: 20, xp: 1, sp: 1, bp: 1 }),
            turtle      : this.newMat({i: 6  , hp: 20, xp: 1, sp: 1, bp: 1 }),
            crab        : this.newMat({i: 7  , hp: 20, xp: 1, sp: 1, bp: 1 }),
            rat         : this.newMat({i: 8  , hp: 20, xp: 1, sp: 1, bp: 1 }),
            beaver      : this.newMat({i: 9  , hp: 20, xp: 1, sp: 1, bp: 1 }),
            owl         : this.newMat({i: 10 , hp: 20, xp: 1, sp: 1, bp: 1 }),
            fox         : this.newMat({i: 11 , hp: 20, xp: 1, sp: 1, bp: 1 }),
            honeyBadger : this.newMat({i: 12 , hp: 20, xp: 1, sp: 1, bp: 1 }),
            cow         : this.newMat({i: 13 , hp: 20, xp: 1, sp: 1, bp: 1 }),
            wolf        : this.newMat({i: 14 , hp: 20, xp: 1, sp: 1, bp: 1 }),
            deer        : this.newMat({i: 15 , hp: 20, xp: 1, sp: 1, bp: 1 }),
            bear        : this.newMat({i: 16 , hp: 20, xp: 1, sp: 1, bp: 1 }),
            camel       : this.newMat({i: 17 , hp: 20, xp: 1, sp: 1, bp: 1 }),
            lizard      : this.newMat({i: 18 , hp: 20, xp: 1, sp: 1, bp: 1 }),
            antelope    : this.newMat({i: 19 , hp: 20, xp: 1, sp: 1, bp: 1 }),
            armadillo   : this.newMat({i: 20 , hp: 20, xp: 1, sp: 1, bp: 1 }),
            penguin     : this.newMat({i: 21 , hp: 20, xp: 1, sp: 1, bp: 1 }),
            panda       : this.newMat({i: 22 , hp: 20, xp: 1, sp: 1, bp: 1 }),
            ape         : this.newMat({i: 23 , hp: 20, xp: 1, sp: 1, bp: 1 }),
            leopard     : this.newMat({i: 24 , hp: 20, xp: 1, sp: 1, bp: 1 }),
            elephant    : this.newMat({i: 25 , hp: 20, xp: 1, sp: 1, bp: 1 }),
            crocodile   : this.newMat({i: 26 , hp: 20, xp: 1, sp: 1, bp: 1 }),
            lion        : this.newMat({i: 27 , hp: 20, xp: 1, sp: 1, bp: 1 }),
            bison       : this.newMat({i: 28 , hp: 20, xp: 1, sp: 1, bp: 1 }),
            rhino       : this.newMat({i: 29 , hp: 20, xp: 1, sp: 1, bp: 1 }),
            ghost       : this.newMat({i: 30 , hp: 20, xp: 1, sp: 1, bp: 1 }),
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
                neededXp: 1,
                totalXP: 0,
                initialNeededXp: 1,
                neededXpOnLevel: 1,
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
                neededXp: 20,
                totalXP: 0,
                initialNeededXp: 20,
                neededXpOnLevel: 20,
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
    generateUpgrades() {
        this.mining = {
            increasePickaxePower: {
                level : 0,
                currentBonus : 0,
                bonusOnLevel : 2,
                value : "flat",
                requiredMaterials : {
                    stone: requiredMaterial(1, 0),
                    // copper: requiredMaterial(1, 1),
                    // ironOre: requiredMaterial(3, 1),
                    // stick: requiredMaterial(5, 1),
                },
            },
            increasePickaxeAtackSpeed: {
                level : 0,
                currentBonus : 0,
                bonusOnLevel : .01,
                value : "percent",
                requiredMaterials : {
                    copper: requiredMaterial(1, 1),
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
                    copper: requiredMaterial(1, 1)
                },
            },
            upgradePickaxe: {
                level : 0,
                currentBonus : 0,
                bonusOnLevel : 1,
                value : "flat",
                requiredTier : 5,
                requiredMaterials : {

                },
            },
            addChanceForDoubleMaterialGain: {
                level : 0,
                currentBonus : 0,
                bonusOnLevel : 1,
                value : "flat",
                requiredMaterials : {
                    stone: requiredMaterial(10, 5),
                },
            },
            increaseStoneDrop: {
                level : 0,
                currentBonus : 0,
                bonusOnLevel : 1,
                value : "flat",
                requiredMaterials : {
                    stone: requiredMaterial(100, 100),
                },
            },
            increaseIronOreDrop: {
                level : 0,
                currentBonus : 0,
                bonusOnLevel : 1,
                value : "flat",
                requiredMaterials : {
                    ironOre: requiredMaterial(100, 100),
                },
            },
            increaseCopperDrop: {
                level : 0,
                currentBonus : 0,
                bonusOnLevel : 1,
                value : "flat",
                requiredMaterials : {
                    copper: requiredMaterial(100, 100),
                },
            },
            increaseSilverDrop: {
                level : 0,
                currentBonus : 0,
                bonusOnLevel : 1,
                value : "flat",
                requiredMaterials : {
                    silver: requiredMaterial(100, 100),
                },
            },
            increaseGoldDrop: {
                level : 0,
                currentBonus : 0,
                bonusOnLevel : 1,
                value : "flat",
                requiredMaterials : {
                    gold: requiredMaterial(100, 100),
                }
            },
            increasePlatinumDrop: {
                level : 0,
                currentBonus : 0,
                bonusOnLevel : 1,
                value : "flat",
                requiredMaterials : {
                    platinum: requiredMaterial(100, 100),
                },
            },
            increaseChanceToFindDiamond: {
                level : 0,
                currentBonus : 0,
                bonusOnLevel : 0.05,
                value : "percent",
                requiredMaterials : {
                    silver: requiredMaterial(50, 50),
                    gold: requiredMaterial(50, 50),
                    platinum: requiredMaterial(50, 50),
                    diamond: requiredMaterial(5, 5),
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
                    stone: requiredMaterial(1, 1),
                    stick: requiredMaterial(1, 1),
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
                    stone: requiredMaterial(1, 1),
                    stick: requiredMaterial(1, 1),
                },
            },
        }
    }
}


localStorage.clear()


let multiplier = 1;
let scroll = true;

let greenColor = 'rgba(0, 200, 0, 0.5)'
let redColor = 'rgb(192, 206, 195)'

let materials = new Materials(JSON.parse(localStorage.getItem("materials")))
let tools = new Tools(JSON.parse(localStorage.getItem("tools")))
let upgrades = new Upgrades(JSON.parse(localStorage.getItem("upgrades")))
let areas = new Areas(JSON.parse(localStorage.getItem("areas")))
let main = new Main(JSON.parse(localStorage.getItem("main")))

