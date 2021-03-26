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
                    stone: materials.mining.stone(1000),
                    ironOre: materials.mining.ironOre(300),
                    copper: materials.mining.copper(200),
                    silver: materials.mining.silver(100),
                    gold: materials.mining.gold(50),
                    platinum: materials.mining.platinum(25),

                    lead: materials.mining.lead(10),
                    titanium: materials.mining.titanium(5),
                    diamond: materials.mining.diamond(1),
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
                    stone: materials.mining.stone(100),
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
                    stone: materials.mining.stone(100),
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
                    stone: materials.mining.stone(100),
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
                    stick: materials.woodcutting.stick(1000),
                    oakWood: materials.woodcutting.oakWood(100),
                    mapleWood: materials.woodcutting.mapleWood(100),
                    mahagonyWood: materials.woodcutting.mahagonyWood(100),
                    birchWood: materials.woodcutting.birchWood(100),
                    cedarWood: materials.woodcutting.cedarWood(100),
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
                    stick: materials.woodcutting.stick(1000),
                    mapleWood: materials.woodcutting.mapleWood(1000),
                    beechWood: materials.woodcutting.beechWood(1000),
                    elmWood: materials.woodcutting.elmWood(1000),
                    willowWood: materials.woodcutting.willowWood(1000),
                    redWood: materials.woodcutting.redWood(1000),

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
                    stick: materials.woodcutting.stick(1000),
                    hickoryWood: materials.woodcutting.hickoryWood(1000),
                    cedarWood: materials.woodcutting.cedarWood(1000),
                    pineWood: materials.woodcutting.pineWood(1000),
                    spruceWood: materials.woodcutting.spruceWood(1000),
                    firWood: materials.woodcutting.firWood(1000),
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
                    stick: materials.woodcutting.stick(1000),
                    ghostedWood: materials.woodcutting.ghostedWood(1000),
                    blackWood: materials.woodcutting.blackWood(1000),
                    shinyWood: materials.woodcutting.shinyWood(1000),
                    sparklyWood: materials.woodcutting.sparklyWood(1000),
                    cursedWood: materials.woodcutting.cursedWood(1000),
                    treeOfLife: materials.woodcutting.treeOfLife(1000),
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
                    beetle: materials.hunting.beetle(1000),
                    bat: materials.hunting.bat(1000),
                    crab: materials.hunting.crab(1000),
                    camel: materials.hunting.camel(1000),
                    lizard: materials.hunting.lizard(1000),
                    crocodile: materials.hunting.crocodile(1000),
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
                    penguin: materials.hunting.penguin(1000),
                    ape: materials.hunting.ape(1000),
                    elephant: materials.hunting.elephant(1000),
                    crocodile: materials.hunting.crocodile(1000),
                    lion: materials.hunting.lion(1000),
                    bison: materials.hunting.bison(1000),
                    rhino: materials.hunting.rhino(1000),
                    ghost: materials.hunting.ghost(1),
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
                get inventory() {
                    return inventory[this.type]
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




class Inventory {
    constructor(...inventory) {
        this.generateInventory()
        this.initInventory(...inventory)
    }

    initInventory(...inventory) {
        if (inventory[0] !== null && inventory[0] !== undefined) {
            this.mining = inventory[0].mining
            this.woodcutting = inventory[0].woodcutting
            this.hunting = inventory[0].hunting
        }
        Object.keys(this).forEach(type => {
            let newInventory = {
                ...this[type],
                // ADD METHODS IF ANY
                // ADD MATERIAL? 
            }
            this[type] = newInventory
        })
    }
    generateInventory() {
        this.mining = {stone: 1}
        this.woodcutting = {stick: 1}
        this.hunting = {rabbit: 1}
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
                    stone: requiredMaterial(10, 5),
                    copper: requiredMaterial(1, 1),
                    ironOre: requiredMaterial(3, 1),
                    stick: requiredMaterial(5, 1),
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




let materials = {
    mining: {
        stone             : (c) => createMaterial({index:0  , health: 20   , xp: 1   , chance: c}),
        ironOre           : (c) => createMaterial({index:1  , health: 50   , xp: 3   , chance: c}),
        copper            : (c) => createMaterial({index:2  , health: 40   , xp: 2   , chance: c}),
        silver            : (c) => createMaterial({index:3  , health: 100  , xp: 5   , chance: c}),
        gold              : (c) => createMaterial({index:4  , health: 200  , xp: 20  , chance: c}),
        platinum          : (c) => createMaterial({index:5  , health: 300  , xp: 50  , chance: c}),
        lead              : (c) => createMaterial({index:6  , health: 500  , xp: 100 , chance: c}),
        titanium          : (c) => createMaterial({index:7  , health: 800  , xp: 175 , chance: c}),
        diamond           : (c) => createMaterial({index:8  , health: 1000 , xp: 250 , chance: c}),
        bronze            : (c) => createMaterial({index:9  , health: 400  , xp: 65  , chance: c}),
        chromite          : (c) => createMaterial({index:10 , health: 500  , xp: 80  , chance: c}),
        cobalt            : (c) => createMaterial({index:11 , health: 450  , xp: 75  , chance: c}),
        lithium           : (c) => createMaterial({index:12 , health: 700  , xp: 110 , chance: c}),
        manganese         : (c) => createMaterial({index:13 , health: 300  , xp: 40  , chance: c}),
        nickel            : (c) => createMaterial({index:14 , health: 900  , xp: 300 , chance: c}),
        quartz            : (c) => createMaterial({index:15 , health: 900  , xp: 300 , chance: c}),
        zinc              : (c) => createMaterial({index:16 , health: 900  , xp: 300 , chance: c}),
        perlite           : (c) => createMaterial({index:17 , health: 900  , xp: 300 , chance: c}),
        pyrite            : (c) => createMaterial({index:18 , health: 900  , xp: 300 , chance: c}),
        obsidian          : (c) => createMaterial({index:19 , health: 900  , xp: 300 , chance: c}),
        azurite           : (c) => createMaterial({index:20 , health: 900  , xp: 300 , chance: c}),
        amethyst          : (c) => createMaterial({index:21 , health: 900  , xp: 300 , chance: c}),
        ruby              : (c) => createMaterial({index:22 , health: 900  , xp: 300 , chance: c}),
        sapphire          : (c) => createMaterial({index:23 , health: 900  , xp: 300 , chance: c}),
        emerald           : (c) => createMaterial({index:24 , health: 900  , xp: 300 , chance: c}),
        amber             : (c) => createMaterial({index:25 , health: 900  , xp: 300 , chance: c}),
        citrine           : (c) => createMaterial({index:26 , health: 900  , xp: 300 , chance: c}),
        turquoise         : (c) => createMaterial({index:27 , health: 900  , xp: 300 , chance: c}),
        topaz             : (c) => createMaterial({index:28 , health: 900  , xp: 300 , chance: c}),
        aquamarine        : (c) => createMaterial({index:29 , health: 900  , xp: 300 , chance: c}),
        sunstone          : (c) => createMaterial({index:30 , health: 900  , xp: 300 , chance: c}),
        moonstone         : (c) => createMaterial({index:31 , health: 900  , xp: 300 , chance: c}),
        bloodstone        : (c) => createMaterial({index:32 , health: 900  , xp: 300 , chance: c}),
        onyx              : (c) => createMaterial({index:33 , health: 900  , xp: 300 , chance: c}),
        sulfur            : (c) => createMaterial({index:34 , health: 900  , xp: 300 , chance: c}),
        uranium           : (c) => createMaterial({index:35 , health: 900  , xp: 300 , chance: c}),
        zeolite           : (c) => createMaterial({index:36 , health: 900  , xp: 300 , chance: c}),
        lapisLazuli       : (c) => createMaterial({index:37 , health: 900  , xp: 300 , chance: c}),
        cavansite         : (c) => createMaterial({index:38 , health: 900  , xp: 300 , chance: c}),
        garnet            : (c) => createMaterial({index:39 , health: 900  , xp: 300 , chance: c}),
        howlite           : (c) => createMaterial({index:40 , health: 900  , xp: 300 , chance: c}),
        zircon            : (c) => createMaterial({index:41 , health: 900  , xp: 300 , chance: c}),
        tanzanite         : (c) => createMaterial({index:42 , health: 900  , xp: 300 , chance: c}),
        blackStarDiopside : (c) => createMaterial({index:43 , health: 900  , xp: 300 , chance: c}),
    },
    woodcutting: {
        stick       : (c) => createMaterial({index: 0 , health: 20, xp: 1, chance: c}),
        oakWood     : (c) => createMaterial({index: 1 , health: 20, xp: 1, chance: c}),
        mapleWood   : (c) => createMaterial({index: 2 , health: 20, xp: 1, chance: c}),
        mahagonyWood: (c) => createMaterial({index: 3 , health: 20, xp: 1, chance: c}),
        birchWood   : (c) => createMaterial({index: 4 , health: 20, xp: 1, chance: c}),
        beechWood   : (c) => createMaterial({index: 5 , health: 20, xp: 1, chance: c}),
        elmWood     : (c) => createMaterial({index: 6 , health: 20, xp: 1, chance: c}),
        willowWood  : (c) => createMaterial({index: 7 , health: 20, xp: 1, chance: c}),
        hickoryWood : (c) => createMaterial({index: 8 , health: 20, xp: 1, chance: c}),
        cedarWood   : (c) => createMaterial({index: 9 , health: 20, xp: 1, chance: c}),
        pineWood    : (c) => createMaterial({index: 10, health: 20, xp: 1, chance: c}),
        spruceWood  : (c) => createMaterial({index: 11, health: 20, xp: 1, chance: c}),
        redWood     : (c) => createMaterial({index: 12, health: 20, xp: 1, chance: c}),
        firWood     : (c) => createMaterial({index: 13, health: 20, xp: 1, chance: c}),
        ghostedWood : (c) => createMaterial({index: 14, health: 20, xp: 1, chance: c}),
        blackWood   : (c) => createMaterial({index: 15, health: 20, xp: 1, chance: c}),
        shinyWood   : (c) => createMaterial({index: 16, health: 20, xp: 1, chance: c}),
        sparklyWood : (c) => createMaterial({index: 17, health: 20, xp: 1, chance: c}),
        cursedWood  : (c) => createMaterial({index: 18, health: 20, xp: 1, chance: c}),
        treeOfLife  : (c) => createMaterial({index: 19, health: 20, xp: 1, chance: c}),
    },
    hunting: {
        beetle     : (c) => createMaterial({index: 0 , health: 20, xp: 1, chance: c}),
        rabbit     : (c) => createMaterial({index: 1 , health: 20, xp: 1, chance: c}),
        frog       : (c) => createMaterial({index: 2 , health: 20, xp: 1, chance: c}),
        chicken    : (c) => createMaterial({index: 3 , health: 20, xp: 1, chance: c}),
        bat        : (c) => createMaterial({index: 4 , health: 20, xp: 1, chance: c}),
        pigeon     : (c) => createMaterial({index: 5 , health: 20, xp: 1, chance: c}),
        turtle     : (c) => createMaterial({index: 6 , health: 20, xp: 1, chance: c}),
        crab       : (c) => createMaterial({index: 7 , health: 20, xp: 1, chance: c}),
        rat        : (c) => createMaterial({index: 8 , health: 20, xp: 1, chance: c}),
        beaver     : (c) => createMaterial({index: 9 , health: 20, xp: 1, chance: c}),
        owl        : (c) => createMaterial({index: 10, health: 20, xp: 1, chance: c}),
        fox        : (c) => createMaterial({index: 11, health: 20, xp: 1, chance: c}),
        honeyBadger: (c) => createMaterial({index: 12, health: 20, xp: 1, chance: c}),
        cow        : (c) => createMaterial({index: 13, health: 20, xp: 1, chance: c}),
        wolf       : (c) => createMaterial({index: 14, health: 20, xp: 1, chance: c}),
        deer       : (c) => createMaterial({index: 15, health: 20, xp: 1, chance: c}),
        bear       : (c) => createMaterial({index: 16, health: 20, xp: 1, chance: c}),
        camel      : (c) => createMaterial({index: 17, health: 20, xp: 1, chance: c}),
        lizard     : (c) => createMaterial({index: 18, health: 20, xp: 1, chance: c}),
        antelope   : (c) => createMaterial({index: 19, health: 20, xp: 1, chance: c}),
        armadillo  : (c) => createMaterial({index: 20, health: 20, xp: 1, chance: c}),
        penguin    : (c) => createMaterial({index: 21, health: 20, xp: 1, chance: c}),
        panda      : (c) => createMaterial({index: 22, health: 20, xp: 1, chance: c}),
        ape        : (c) => createMaterial({index: 23, health: 20, xp: 1, chance: c}),
        leopard    : (c) => createMaterial({index: 24, health: 20, xp: 1, chance: c}),
        elephant   : (c) => createMaterial({index: 25, health: 20, xp: 1, chance: c}),
        crocodile  : (c) => createMaterial({index: 26, health: 20, xp: 1, chance: c}),
        lion       : (c) => createMaterial({index: 27, health: 20, xp: 1, chance: c}),
        bison      : (c) => createMaterial({index: 28, health: 20, xp: 1, chance: c}),
        rhino      : (c) => createMaterial({index: 29, health: 20, xp: 1, chance: c}),
        ghost      : (c) => createMaterial({index: 30, health: 20, xp: 1, chance: c}),
    }
}

let multiplier = 1;
let scroll = true;

let greenColor = 'rgba(0, 200, 0, 0.5)'
let redColor = 'rgb(192, 206, 195)'

let inventory = new Inventory(JSON.parse(localStorage.getItem("inventory")))
let tools = new Tools(JSON.parse(localStorage.getItem("tools")))
let upgrades = new Upgrades(JSON.parse(localStorage.getItem("upgrades")))
let areas = new Areas(JSON.parse(localStorage.getItem("areas")))
let main = new Main(JSON.parse(localStorage.getItem("main")))

