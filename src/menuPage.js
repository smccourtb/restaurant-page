import {content, Props} from './homePage.js'


const geegee = (() => {
    const main = document.getElementById("content")
    const tree = Props.appleTree()
    tree.classList.add('new-tree')

    const applyNodes = () => {
        main.append(tree)
    };

    return {applyNodes}

})();

export {geegee}
