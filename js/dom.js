

for (let type in upgrades) {
    for (const name in upgrades[type]) {
        if (upgrades[type].hasOwnProperty(name)) {
            generateUpgrade(type, name);
        }
    }
}
// generateUpgrade("woodcuttingUpgrades", name);

generateMaterialGatheringTab(sa('.fieldTab')[1]);
generateMaterialGatheringTab(sa('.fieldTab')[2]);
generateMaterialGatheringTab(sa('.fieldTab')[3]);




updateEverything();










// INFORMATION ON HOVER
// const fMiningAreas = sa('.area');
// const div = document.createElement('div');
// div.textContent = "This area contains: "
// div.style.visibility = 'hidden';
// div.style.position = "absolute";
// div.style.top = "0";
// div.style.height = "150%";
// div.style.width = "150%";
// div.style.backgroundColor = "silver";
// fMiningAreas[0].style.position = 'relative';
// fMiningAreas[0].appendChild(div);

// fMiningAreas[0].addEventListener('mouseenter', x => {
//     x.target.childNodes[0].style.visibility = "visible";

// });
// fMiningAreas[0].addEventListener('mouseleave', x => {
//     x.target.childNodes[0].style.visibility = "hidden";

// });
// END 


