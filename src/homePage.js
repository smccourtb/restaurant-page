import './style.css';
import Icon from './apple.svg';
import Icon2 from './apple-color.svg';

const Props = (() => {
    const appleIcon = () => {
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
    
    const appleTree = () => {
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
        treeLeaves.append(appleIcon());
        return treeContainer;
    };

    const sun = () => {
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

    return {appleTree, sun}
})();

const content = (() => {
    const main = document.querySelector("#content")
    const sun = Props.sun()

    

    const appleCard = (() => {
        const cardContainer = document.createElement('div');
        const card = document.createElement('div');
        const upperCard = document.createElement('div');
        const leaf = document.createElement('div');
        cardContainer.classList.add("card-container");
        card.classList.add('about-card');
        upperCard.classList.add('upperCard');
        leaf.classList.add('leaf');
        cardContainer.append(card);
        card.appendChild(upperCard);
        cardContainer.appendChild(leaf);
        return cardContainer;
    })();

    const footer = (() => {
        const footerContainer = (() => {
            const cont = document.createElement('div');
            cont.classList.add('footer-container');
            return cont;
        })();
    
        const ground = (() => {
            const tree = Props.appleTree()
            const ground = document.createElement('div');
            ground.classList.add('ground');
            ground.append(tree);
            return ground;
        })();
    
        const foot = (() => {
            const ter = document.createElement('div')
            ter.classList.add('footer');
            return ter;
        })();
        footerContainer.append(foot);
        footerContainer.append(ground);
        
        return footerContainer
    
    })();

    const applyNodes = () => {
        main.append(sun)
        main.append(appleCard)
        main.append(footer)
        
    };
    return {applyNodes}
})();


export {content, Props}

