

for (let type in upgrades) {
    for (const name in upgrades[type]) {
        if (upgrades[type].hasOwnProperty(name)) {
            generateUpgrade(type, name);
        }
    }
}
// generateUpgrade("woodcuttingUpgrades", name);

generateMaterialGatheringTab(sa('.fieldTab')[1], 'mining');
generateMaterialGatheringTab(sa('.fieldTab')[2], 'woodcutting');
generateMaterialGatheringTab(sa('.fieldTab')[3], 'hunting');


updateEverything();