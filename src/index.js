import './style.css';
import Icon from './apple.svg';
import Icon2 from './apple-color.svg';
const content = document.getElementById("content")
const left = document.createElement('div')
const right = document.createElement('div')
left.classList.add("left")
right.classList.add("right")
content.appendChild(left);
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

function aboutUs () {
    const cardContainer = document.createElement('div')
    const table = document.querySelector(".table")
    const card = document.createElement('div')
    
    const plate = document.createElement('div')
    cardContainer.classList.add("card-container")
    card.classList.add('about-card')
    card.innerHTML = "Here at The Orchard we have been tending to our apple trees for over 75 years. Every dish on the menu is made from our organically grown apples from scratch."
    // Add the image to our existing div.
    const myIcon = new Image();
    myIcon.src = Icon;
    myIcon.classList.add("apple")
    plate.classList.add("plate")
    table.appendChild(plate)
    plate.appendChild(myIcon);
    cardContainer.append(card)
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
    
    return cardContainer
}

left.appendChild(aboutUs());
const cardContainer = document.querySelector('.card-container')
const card = document.querySelector('.about-card')
const upperCard = document.createElement('div');
const leaf = document.createElement('div')
upperCard.classList.add('upperCard');
leaf.classList.add('leaf')
card.appendChild(upperCard);
cardContainer.appendChild(leaf);