

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




sa('.expandCollapseAllUpg').forEach(x => x.addEventListener('click', (e) => {
    expandCollapseUpgrades(e, x.dataset.type)
}));


sa('.menuItem').forEach((x, y) => {
    x.addEventListener('click', activeTab.bind(null, sa('.fieldTab')[y]))
});



// Set active area
sa('.areas').forEach((domAreas, tabIndex) => {
    domAreas.childNodes.forEach((area, index) => {
        area.addEventListener('click', (e) => {

            let type;
            if (tabIndex == 0) {
                type = 'mining';
            }
            if (tabIndex == 1) {
                type = 'woodcutting';
            }
            if (tabIndex == 2) {
                type = 'hunting';
            }

            let nextArea = areas[`${type}Areas`][`area${index + 1}`];

            unlockAreas();

            if (!nextArea.unlocked) {
                return;
            }

            main[type].area = nextArea;


            domAreas.childNodes.forEach((area) => {
                area.classList.remove('activeArea');
            });
            area.classList.add('activeArea');

            updateMaterialLevels();

            // MAKE IT FOR ALL, NOT JUST MINING ,,,, LATER
            clearInterval(main.mining.breakingTime);
            clearTimeout(main.mining.timeout);
            main.mining.clicked = false;
            resetHPandMat(sa('.fieldTab')[1]);
        });
    });
});


sa('.expandable').forEach((x, y) => {
    x.addEventListener('click', 
    expandCollapse.bind(null, (sa(`.expandable + div`)[y])));
});



// expand collapse single upgrades
sa('.upgrade').forEach((upgrade, num) => {
    upgrade.childNodes[1].addEventListener('click', () => {
        for(let i = 2; i < 5; i++) {
            let elem = upgrade.childNodes[i];
            elem.classList.forEach((c) => {
                if (c === "activeUpgrade") {
                    elem.classList.remove('activeUpgrade');
                    elem.classList.add('unactiveUpgrade');
                } else if (c === "unactiveUpgrade") {
                    elem.classList.remove('unactiveUpgrade');
                    elem.classList.add('activeUpgrade');
                }
            });
        }
    });
});





