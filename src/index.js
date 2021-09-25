import './style.css';
import Icon from './apple.svg';
import Icon2 from './apple-color.svg';

const content = document.getElementById("content")
const left = document.createElement('div')
const right = document.createElement('div')

left.classList.add("left")
right.classList.add("right")
content.appendChild(left);
const ground = document.createElement('div')
ground.classList.add('ground');

content.appendChild(right);
 function component() {
    const header = document.createElement('div');
    const table = document.createElement('div');
   header.innerHTML = "The Orchard";
   header.classList.add('header');
   table.classList.add("table")
   left.append(header)
    return table;
 }

left.appendChild(component());



// APPLE CARD STUFF
function appleCard () {
    const cardContainer = document.createElement('div')
    const card = document.createElement('div')
    cardContainer.classList.add("card-container")
    card.classList.add('about-card')
    card.innerHTML = "Here at The Orchard we have been tending to our apple trees for over 75 years. Every dish on the menu is made from our organically grown apples from scratch."
    cardContainer.append(card)
    return cardContainer
}

function appleTabs (label) {
    const plateContainer = document.createElement('div');
    const table = document.querySelector(".table");
    const plate = document.createElement('div');
    const text = document.createElement('div')
    text.classList.add("text");
    text.innerHTML = label
    plateContainer.classList.add("plate-container")
    table.appendChild(plateContainer)
    // Add the image to our existing div.
    const myIcon = new Image();
    myIcon.src = Icon;
    myIcon.classList.add("apple")
    plate.classList.add("plate")
    plateContainer.appendChild(plate)
    plate.appendChild(myIcon);
    myIcon.addEventListener('mouseover', () =>{
        myIcon.classList.add("wiggler")
        if (myIcon.src === Icon) {
            myIcon.src = Icon2;
        }
    })
    myIcon.addEventListener('click', () => {
        const elem = document.querySelector(".apple");   
        elem.classList.toggle("animation")
        elem.classList.toggle("wiggler")
        setTimeout(() => {elem.classList.toggle("animation")}, 1300)
      })
    plateContainer.appendChild(text)
    
    return table
}
const textLabels = ["Menu", "Home", "Contact"]
left.appendChild(appleTabs("Menu"));
left.appendChild(appleTabs("Home"));
left.appendChild(appleTabs("Contact"));
// SUN STUFF
const sunContainer = document.createElement('div');
const sun1 = document.createElement('div');
const sun2 = document.createElement('div');
const sun3 = document.createElement('div');
sunContainer.classList.add('sunContainer')
sun1.classList.add('sun-center');
sun2.classList.add('sun-middle');
sun3.classList.add('sun-outer');
left.append(sunContainer)
sunContainer.append(sun3)
sun3.append(sun2)
sun2.append(sun1)
left.appendChild(appleCard())

left.appendChild(ground)
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


const myIcon = new Image();
myIcon.src = Icon;
myIcon.classList.add("treeApple")
myIcon.addEventListener('mouseover', () =>{
    myIcon.classList.add("wiggler")
    if (myIcon.src === Icon) {
        myIcon.src = Icon2;
    }
})
myIcon.addEventListener('click', () => {
    const elem = document.querySelector(".treeApple");   
    elem.classList.toggle("animation")
    elem.classList.toggle("wiggler")
    setTimeout(() => {elem.classList.toggle("animation")}, 1300)
  })
ground.append(treeContainer)
treeContainer.append(treeTrunkContainer)
treeContainer.append(treeLeavesContainer)

treeTrunkContainer.append(treeTrunk)

treeLeavesContainer.append(treeLeaves)
treeLeavesContainer.append(treeLeaves2)
treeLeavesContainer.append(treeLeaves3)


treeLeaves.append(myIcon)
const cardContainer = document.querySelector('.card-container')
const card = document.querySelector('.about-card')
const upperCard = document.createElement('div');
const leaf = document.createElement('div')
upperCard.classList.add('upperCard');
leaf.classList.add('leaf')
card.appendChild(upperCard);
cardContainer.appendChild(leaf);