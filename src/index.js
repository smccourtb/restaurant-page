import './style.css';
import Icon from './background.jpg';
const content = document.getElementById("content")

 function component() {
    const header = document.createElement('div');

   // Lodash, now imported by this script
   header.innerHTML = "The Orchard";
   header.classList.add('header');

  // Add the image to our existing div.
    // const myIcon = new Image();
    // myIcon.src = Icon;
    // content.appendChild(myIcon);

    return header;
 }

content.appendChild(component());