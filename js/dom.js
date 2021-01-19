

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










// AREA INFORMATION ON HOVER

sa('.areas').forEach((domArea, tabIndex) => {
    domArea.childNodes.forEach((area, index) => {
        const div = createDiv('areaHover');
        switch (index) {
            case 0:
                div.classList.add('topLeftAreaHover');
                break;
            case 1:
                div.classList.add('topRightHover');
                break;
            case 2:
                div.classList.add('botLeftHover');
                break;
            case 3:
                div.classList.add('botRightHover');
                break;
            default:
                break;
        }
        
        div.textContent = "This area contains: "

        area.style.position = 'relative';
        area.appendChild(div);




        area.addEventListener('mouseenter', x => {
            x.target.childNodes[0].style.visibility = "visible";

        });
        area.addEventListener('mouseleave', x => {
            x.target.childNodes[0].style.visibility = "hidden";

        });
    })
});


