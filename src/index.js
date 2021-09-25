import {content, Props} from './homePage.js'
//import {} from './menuPage.js'
import './style.css';
import Icon from './apple.svg';
import Icon2 from './apple-color.svg';
// const cont = (content)


const header = (() => {

    const appleIcon = () => {
        const apple = new Image();
        apple.src = Icon;
        apple.classList.add("apple")
    
        apple.addEventListener('mouseover', () => {
            apple.classList.add("wiggler");
            if (apple.src === Icon) {
                apple.src = Icon2;
            }
        });
        return apple;
    };

    const headerContainer = (() => {
        const cont = document.createElement('div');
        cont.classList.add('header-container');
        return cont;
    })();

    const title = (() => {
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

    const appleTab = (label) => {
        const plateContainer = document.createElement('div');
        const plate = document.createElement('div');
        const myIcon = appleIcon()
        const text = document.createElement('div');
        text.classList.add("text");
        text.innerHTML = label;
        plateContainer.classList.add("plate-container");
        plate.classList.add("plate");
        plateContainer.appendChild(plate);
        plateContainer.appendChild(text);
        plate.appendChild(myIcon);
        return plateContainer;
    };

    
    headerContainer.append(title);
    headerContainer.append(table);
    const labels = ["Menu", "Home", "About"]
    for (let i = 0; i < 3; i++) {
        const x = appleTab(labels[i]);
        table.append(x)
    };
    
    return {headerContainer}
})();

const main = document.getElementById("content")
main.append(header.headerContainer)
content.applyNodes()