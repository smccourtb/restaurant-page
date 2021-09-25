import './style.css';
import Icon from './apple.svg';
import Icon2 from './apple-color.svg';

const material = (() => {
    const appleIcon = (() => {
        const myIcon = new Image();
        myIcon.src = Icon;
        myIcon.classList.add(".apple")

        myIcon.addEventListener('mouseover', () => {
            if (myIcon.src === Icon) {
                myIcon.src = Icon2;
            }
        });
        return myIcon;
    });
    return {appleIcon}
})();


const content = document.getElementById("content")




const header = (() => {
    const header = (() => {
        const banner = document.createElement('div');
        banner.innerHTML = "The Orchard";
        banner.classList.add('header');
        return banner
    })();

    const table = (() => {
        const table = document.createElement('div');
        table.classList.add("table");
        return table;
    })();


    return {header, table}

})();

content.appendChild(header.header);
content.appendChild(header.table);

content.appendChild(appleTabs("Menu"));
content.appendChild(appleTabs("Home"));
content.appendChild(appleTabs("Contact"));
content.append(addSun());
content.appendChild(appleCard());
content.appendChild(addGround());
// content.appendChild(addFooter());
// Header
    // restuarant title
    // 'table
        // 3 plates
            // 3 apples (links)

// APPLE CARD STUFF
function appleCard () {
    const cardContainer = document.createElement('div');
    const card = document.createElement('div');
    cardContainer.classList.add("card-container");
    card.classList.add('about-card');
    card.innerHTML = "Here at The Orchard we have been tending to our apple trees for over 75 years. Every dish on the menu is made from our organically grown apples from scratch.";
    cardContainer.append(card);
    const upperCard = document.createElement('div');
    const leaf = document.createElement('div');
    upperCard.classList.add('upperCard');
    leaf.classList.add('leaf');
    card.appendChild(upperCard);
    cardContainer.appendChild(leaf);
    return cardContainer;
};

function appleTabs (label) {
    const plateContainer = document.createElement('div');
    const table = document.querySelector(".table");
    const plate = document.createElement('div');
    const text = document.createElement('div');
    text.classList.add("text");
    text.innerHTML = label;
    plateContainer.classList.add("plate-container");
    table.appendChild(plateContainer);
    // Add the image to our existing div.
    const myIcon = new Image();
    myIcon.src = Icon;
    myIcon.classList.add("apple");
    plate.classList.add("plate");
    plateContainer.appendChild(plate);
    plate.appendChild(myIcon);
    myIcon.addEventListener('mouseover', () =>{
        myIcon.classList.add("wiggler");
        if (myIcon.src === Icon) {
            myIcon.src = Icon2;
        }
    });
    plateContainer.appendChild(text);
    return table;
};

function addSun() {
    const sunContainer = document.createElement('div');
    const sun1 = document.createElement('div');
    const sun2 = document.createElement('div');
    const sun3 = document.createElement('div');
    sunContainer.classList.add('sunContainer')
    sun1.classList.add('sun-center');
    sun2.classList.add('sun-middle');
    sun3.classList.add('sun-outer');
    
    sunContainer.append(sun3)
    sun3.append(sun2)
    sun2.append(sun1)
    return sunContainer
};

function makeInteractiveApple() {
    const myIcon = new Image();
    myIcon.src = Icon;
    myIcon.classList.add("treeApple")

    myIcon.addEventListener('mouseover', () => {
        if (myIcon.src === Icon) {
            myIcon.src = Icon2;
        }
    });

    // myIcon.addEventListener('click', () => {
    //     const elem = document.querySelector(".treeApple");
    //     elem.classList.toggle("animation")

    // })
    return myIcon;
};

function makeTree() {
    const treeContainer = document.createElement('div');
    const treeTrunk = document.createElement('div');
    const treeLeaves = document.createElement('div');
    const treeLeaves2 = document.createElement('div');
    const treeLeaves3 = document.createElement('div');
    const treeLeavesContainer = document.createElement('div');
    const treeTrunkContainer = document.createElement('div');
    treeLeavesContainer.classList.add('treeLeavesContainer');
    treeTrunkContainer.classList.add('treeTrunkContainer');
    treeContainer.classList.add('treeContainer');
    treeTrunk.classList.add('treeTrunk');
    treeLeaves.classList.add('treeLeaves');
    treeLeaves2.classList.add('treeLeaves2');
    treeLeaves3.classList.add('treeLeaves3');
    treeContainer.append(treeTrunkContainer);
    treeContainer.append(treeLeavesContainer);
    treeTrunkContainer.append(treeTrunk);
    treeLeavesContainer.append(treeLeaves);
    treeLeavesContainer.append(treeLeaves2);
    treeLeavesContainer.append(treeLeaves3);
    treeLeaves.append(makeInteractiveApple());
    return treeContainer;
};

function addGround() {
    const ground = document.createElement('div');
    ground.classList.add('ground');
    ground.append(makeTree());
    return ground;
};

function addFooter() {
    const footer = document.createElement('div')
    footer.classList.add('footer');
    return footer;
};