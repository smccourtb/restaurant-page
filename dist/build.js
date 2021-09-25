(()=>{"use strict";var n={426:(n,e,t)=>{t.d(e,{Z:()=>x});var r=t(81),o=t.n(r),a=t(645),i=t.n(a),d=t(667),s=t.n(d),c=new URL(t(94),t.b),p=new URL(t(483),t.b),l=i()(o()),u=s()(c),g=s()(p);l.push([n.id,"@font-face {\n    font-family: 'DrukaatieBurti';\n    src: url("+u+") format('truetype'),\n        url("+g+") format('truetype');\n    font-weight: 600;\n    font-style: normal;\n}\n\nbody {\n    background-color: rgb(172, 227, 248);\n    /*/url('./background.jpg');/*/\n    background-size: 100%;\n    margin: 0px;\n    padding: 0px;\n}\n\n#content {\n    display: flex;\n    flex-direction: column;\n    justify-content: space-between;\n    align-items: center;\n    padding: 0px;\n    margin: 0px;\n}\n\n.left {\n    display: flex;\n    flex-direction: column;\n    align-items: center;\n    justify-content: center;\n    flex: 1 1 auto;\n}\n\n.header {\n    display: flex;\n    background: rgba(255, 255, 255, .7);\n    border-radius: 0px 0px 10px 10px;\n    height: 75px;\n    flex-grow: 1;\n    width: 50vw;\n    justify-content: center;\n    align-items: center;\n    font-family: 'DrukaatieBurti';\n    font-size: 48px;\n    border-color: rgb(155, 110, 68);\n    border-width: 3px;\n    border-style: solid;\n}\n\n.header:hover {\n    box-shadow: 12px 12px 15px 1px rgba(0, 0, 0, .5);\n}\n\n.about-card {\n    display: flex;\n    flex-flow: column-reverse wrap;\n    border-radius: 10px;\n    width: 200px;\n    height: 200px;\n    text-align: center;\n    background-image: linear-gradient(rgba(238, 67, 67, 0.7), rgba(143, 42, 42, 0.7));\n    /* background: rgba(238, 67, 67, 0.7); */\n    padding: 10px;\n    justify-content: space-around;\n}\n\n.apple {\n    width: 50px;\n    margin: 5px;\n    position: relative;\n}\n\n.about-card:hover {\n    box-shadow: 12px 12px 15px 1px rgba(0, 0, 0, .5);\n}\n\n.animation {\n    animation: appleFall .5s ease 1;\n    animation-direction: normal;\n    -webkit-animation-fill-mode: forwards;\n}\n\n\n@keyframes appleFall {\n    0% {\n        top: 0px;\n    }\n\n    100% {\n        top: 150px;\n    }\n}\n\n@keyframes wiggle {\n    0% {\n        transform: rotate(10deg);\n    }\n\n    50% {\n        transform: rotate(-10deg);\n        scale: 1.25;\n    }\n\n    100% {\n        transform: rotate(10deg);\n    }\n}\n\n.wiggler:hover {\n    animation: wiggle .5s 1;\n}\n\n.table {\n    display: flex;\n    width: 33%;\n    height: 75px;\n    background-color: rgb(202, 139, 87);\n    border-color: rgb(155, 110, 68);\n    border-top-color: rgba(255, 255, 255, .7);\n    border-top-width: 3px;\n    border-radius: 0px 0px 10px 10px;\n    border-style: solid;\n    align-items: center;\n    justify-content: space-around;\n    padding: 5px 100px;\n}\n\n.plate {\n    display: flex;\n    width: 50px;\n    height: 50px;\n    border-radius: 50%;\n    background-color: white;\n    align-items: center;\n    justify-content: center;\n    border-width: 5px;\n    border-color: rgb(118, 126, 120);\n    border-style: solid;\n}\n\n.upperCard {\n    /* background-color: rgba(247, 181, 181,.7); */\n    display: flex;\n    background: rgba(247, 181, 181, .7);\n    width: 25%;\n    height: 20px;\n    border-radius: 0 10px 0 0;\n    margin-right: 10px;\n    margin-bottom: 15px;\n    margin-left: 125px;\n    justify-content: center;\n}\n\n.leaf {\n    width: 80px;\n    height: 70px;\n    background-image: linear-gradient(#5a975a, #386138);\n    border-radius: 0 100%;\n    flex: 1 1 auto;\n    margin-right: 45px;\n}\n\n.card-container {\n    display: flex;\n    flex-direction: column-reverse;\n    align-items: center;\n    justify-content: center;\n    padding-top: 100px;\n    font-family: 'DrukaatieBurti';\n    font-size: 16px;\n    color: rgb(25, 25, 48);\n    padding-bottom: 100px;\n    z-index: 3;\n}\n\n.ground {\n    width: 100%;\n    height: 33vh;\n    background-color: rgb(104, 163, 104);\n    border-radius: 100% 100% 0px 0px;\n    border-style: solid;\n    border-color: rgb(79, 126, 79);\n    border-width: 3px;\n\n}\n\n.treeContainer {\n    display: flex;\n    flex-direction: column-reverse;\n    align-items: center;\n    justify-content: center;\n    margin-left: 600px;\n    width: 150px;\n    scale: 1.2;\n    margin-top: -100px;\n    margin-left: 250px;\n}\n\n.treeTrunk {\n    height: 0;\n    width: 15px;\n    border-bottom: 80px solid rgb(187, 146, 92);\n    border-left: 10px solid transparent;\n    border-right: 10px solid transparent;\n}\n\n.treeLeavesContainer {\n    display: flex;\n    width: 100%;\n    position: relative;\n    padding-bottom: 100px;\n    padding-left: 25px;\n}\n\n.treeTrunkContainer {\n    display: flex;\n    width: 100%;\n    justify-content: center;\n}\n\n.treeLeaves {\n    width: 100px;\n    height: 100px;\n    border-style: solid;\n    border-width: 3px;\n    border-color: rgb(8, 99, 8);\n    border-radius: 50% 50% 35% 35%;\n    background-color: green;\n    padding: 10px;\n    position: absolute;\n    box-shadow: 0px 5px 5px 0px rgba(0, 0, 0, .5);\n}\n\n.treeLeaves2 {\n    width: 50px;\n    height: 50px;\n    border-style: solid;\n    border-width: 3px;\n    border-color: rgb(11, 116, 11);\n    border-radius: 50% 50% 35% 35%;\n    background-color: rgb(3, 146, 3);\n    position: absolute;\n    z-index: 3;\n    margin-left: 75px;\n    margin-top: 50px;\n    box-shadow: 0px 5px 5px 0px rgba(0, 0, 0, .5);\n}\n\n.treeLeaves3 {\n    width: 60px;\n    height: 60px;\n    border-style: solid;\n    border-width: 3px;\n    border-color: rgb(11, 116, 11);\n    border-radius: 50% 50% 35% 35%;\n    background-color: rgb(3, 146, 3);\n    position: absolute;\n    z-index: 2;\n    box-shadow: 0px 5px 5px 0px rgba(0, 0, 0, .5);\n}\n\n\n\n.treeApple {\n    width: 20px;\n    margin: 5px;\n    position: relative;\n    z-index: 5;\n\n}\n\n.sunContainer {\n    align-self: flex-start;\n    width: 175px;\n    height: 175px;\n    display: flex;\n    align-items: center;\n    justify-content: center;\n    margin-top: -100px;\n    margin-left: 75px;\n    scale: 1.5;\n}\n\n.sun-center {\n    display: flex;\n    align-items: center;\n    justify-content: center;\n    width: 100px;\n    height: 100px;\n    border-radius: 50%;\n    background: rgb(248, 248, 164);\n}\n\n.sun-middle {\n    animation: sunMiddle 7s ease infinite;\n    animation-direction: normal;\n    display: flex;\n    align-items: center;\n    justify-content: center;\n    width: 125px;\n    height: 125px;\n    border-radius: 50%;\n    background: rgba(248, 248, 164, 0.562);\n}\n\n.sun-outer {\n    animation: sunOuter 5s ease infinite;\n    animation-direction: normal;\n    display: flex;\n    align-items: center;\n    justify-content: center;\n    width: 150px;\n    height: 150px;\n    border-radius: 50%;\n    background: rgba(248, 248, 164, 0.3);\n}\n\n@keyframes sunMiddle {\n    50% {\n        scale: .98;\n    }\n}\n\n@keyframes sunOuter {\n    50% {\n        scale: 1.05;\n    }\n}\n\n.plate-container {\n    font-family: 'DrukaatieBurti';\n    height: auto;\n    width: auto;\n    display: flex;\n    flex-direction: column;\n    justify-content: center;\n    align-items: center;\n    padding-top: 5px;\n}\n\n.text {\n    color: black;\n}\n\n.footer {\n    height: 100px;\n    background-color: rgb(6, 77, 6);\n\n}\n\n.header-container {\n    display: flex;\n    flex-direction: column;\n    align-items: center;\n    justify-content: center;\n}",""]);const x=l},645:n=>{n.exports=function(n){var e=[];return e.toString=function(){return this.map((function(e){var t="",r=void 0!==e[5];return e[4]&&(t+="@supports (".concat(e[4],") {")),e[2]&&(t+="@media ".concat(e[2]," {")),r&&(t+="@layer".concat(e[5].length>0?" ".concat(e[5]):""," {")),t+=n(e),r&&(t+="}"),e[2]&&(t+="}"),e[4]&&(t+="}"),t})).join("")},e.i=function(n,t,r,o,a){"string"==typeof n&&(n=[[null,n,void 0]]);var i={};if(r)for(var d=0;d<this.length;d++){var s=this[d][0];null!=s&&(i[s]=!0)}for(var c=0;c<n.length;c++){var p=[].concat(n[c]);r&&i[p[0]]||(void 0!==a&&(void 0===p[5]||(p[1]="@layer".concat(p[5].length>0?" ".concat(p[5]):""," {").concat(p[1],"}")),p[5]=a),t&&(p[2]?(p[1]="@media ".concat(p[2]," {").concat(p[1],"}"),p[2]=t):p[2]=t),o&&(p[4]?(p[1]="@supports (".concat(p[4],") {").concat(p[1],"}"),p[4]=o):p[4]="".concat(o)),e.push(p))}},e}},667:n=>{n.exports=function(n,e){return e||(e={}),n?(n=String(n.__esModule?n.default:n),/^['"].*['"]$/.test(n)&&(n=n.slice(1,-1)),e.hash&&(n+=e.hash),/["'() \t\n]|(%20)/.test(n)||e.needQuotes?'"'.concat(n.replace(/"/g,'\\"').replace(/\n/g,"\\n"),'"'):n):n}},81:n=>{n.exports=function(n){return n[1]}},379:n=>{var e=[];function t(n){for(var t=-1,r=0;r<e.length;r++)if(e[r].identifier===n){t=r;break}return t}function r(n,r){for(var a={},i=[],d=0;d<n.length;d++){var s=n[d],c=r.base?s[0]+r.base:s[0],p=a[c]||0,l="".concat(c," ").concat(p);a[c]=p+1;var u=t(l),g={css:s[1],media:s[2],sourceMap:s[3],supports:s[4],layer:s[5]};if(-1!==u)e[u].references++,e[u].updater(g);else{var x=o(g,r);r.byIndex=d,e.splice(d,0,{identifier:l,updater:x,references:1})}i.push(l)}return i}function o(n,e){var t=e.domAPI(e);return t.update(n),function(e){if(e){if(e.css===n.css&&e.media===n.media&&e.sourceMap===n.sourceMap&&e.supports===n.supports&&e.layer===n.layer)return;t.update(n=e)}else t.remove()}}n.exports=function(n,o){var a=r(n=n||[],o=o||{});return function(n){n=n||[];for(var i=0;i<a.length;i++){var d=t(a[i]);e[d].references--}for(var s=r(n,o),c=0;c<a.length;c++){var p=t(a[c]);0===e[p].references&&(e[p].updater(),e.splice(p,1))}a=s}}},569:n=>{var e={};n.exports=function(n,t){var r=function(n){if(void 0===e[n]){var t=document.querySelector(n);if(window.HTMLIFrameElement&&t instanceof window.HTMLIFrameElement)try{t=t.contentDocument.head}catch(n){t=null}e[n]=t}return e[n]}(n);if(!r)throw new Error("Couldn't find a style target. This probably means that the value for the 'insert' parameter is invalid.");r.appendChild(t)}},216:n=>{n.exports=function(n){var e=document.createElement("style");return n.setAttributes(e,n.attributes),n.insert(e,n.options),e}},565:(n,e,t)=>{n.exports=function(n){var e=t.nc;e&&n.setAttribute("nonce",e)}},795:n=>{n.exports=function(n){var e=n.insertStyleElement(n);return{update:function(t){!function(n,e,t){var r="";t.supports&&(r+="@supports (".concat(t.supports,") {")),t.media&&(r+="@media ".concat(t.media," {"));var o=void 0!==t.layer;o&&(r+="@layer".concat(t.layer.length>0?" ".concat(t.layer):""," {")),r+=t.css,o&&(r+="}"),t.media&&(r+="}"),t.supports&&(r+="}");var a=t.sourceMap;a&&"undefined"!=typeof btoa&&(r+="\n/*# sourceMappingURL=data:application/json;base64,".concat(btoa(unescape(encodeURIComponent(JSON.stringify(a))))," */")),e.styleTagTransform(r,n,e.options)}(e,n,t)},remove:function(){!function(n){if(null===n.parentNode)return!1;n.parentNode.removeChild(n)}(e)}}}},589:n=>{n.exports=function(n,e){if(e.styleSheet)e.styleSheet.cssText=n;else{for(;e.firstChild;)e.removeChild(e.firstChild);e.appendChild(document.createTextNode(n))}}},483:(n,e,t)=>{n.exports=t.p+"9c56d1c51f6625cc9c71.ttf"},94:(n,e,t)=>{n.exports=t.p+"bb48ce481ec31b7494cb.ttf"},646:(n,e,t)=>{n.exports=t.p+"afe802b69dd5bc0b3ead.svg"},177:(n,e,t)=>{n.exports=t.p+"6252656139edd4c92b8c.svg"}},e={};function t(r){var o=e[r];if(void 0!==o)return o.exports;var a=e[r]={id:r,exports:{}};return n[r](a,a.exports,t),a.exports}t.m=n,t.n=n=>{var e=n&&n.__esModule?()=>n.default:()=>n;return t.d(e,{a:e}),e},t.d=(n,e)=>{for(var r in e)t.o(e,r)&&!t.o(n,r)&&Object.defineProperty(n,r,{enumerable:!0,get:e[r]})},t.g=function(){if("object"==typeof globalThis)return globalThis;try{return this||new Function("return this")()}catch(n){if("object"==typeof window)return window}}(),t.o=(n,e)=>Object.prototype.hasOwnProperty.call(n,e),(()=>{var n;t.g.importScripts&&(n=t.g.location+"");var e=t.g.document;if(!n&&e&&(e.currentScript&&(n=e.currentScript.src),!n)){var r=e.getElementsByTagName("script");r.length&&(n=r[r.length-1].src)}if(!n)throw new Error("Automatic publicPath is not supported in this browser");n=n.replace(/#.*$/,"").replace(/\?.*$/,"").replace(/\/[^\/]+$/,"/"),t.p=n})(),t.b=document.baseURI||self.location.href,(()=>{var n=t(379),e=t.n(n),r=t(795),o=t.n(r),a=t(569),i=t.n(a),d=t(565),s=t.n(d),c=t(216),p=t.n(c),l=t(589),u=t.n(l),g=t(426),x={};x.styleTagTransform=u(),x.setAttributes=s(),x.insert=i().bind(null,"head"),x.domAPI=o(),x.insertStyleElement=p(),e()(g.Z,x),g.Z&&g.Z.locals&&g.Z.locals;var f=t(177),b=t(646);const h=(()=>{const n=(()=>{const n=document.createElement("div");return n.classList.add("header-container"),n})(),e=(()=>{const n=document.createElement("div");return n.innerHTML="The Orchard",n.classList.add("header"),n})(),t=(()=>{const n=document.createElement("div");return n.classList.add("table"),n})(),r=n=>{const e=document.createElement("div"),t=document.createElement("div"),r=(()=>{const n=new Image;return n.src=f,n.classList.add("apple"),n.addEventListener("mouseover",(()=>{n.classList.add("wiggler"),n.src===f&&(n.src=b)})),n})(),o=document.createElement("div");return o.classList.add("text"),o.innerHTML=n,e.classList.add("plate-container"),t.classList.add("plate"),e.appendChild(t),e.appendChild(o),t.appendChild(r),e};return(()=>{n.append(e),n.append(t);const o=["Menu","Home","About"];for(let n=0;n<3;n++){const e=r(o[n]);t.append(e)}})(),{headerContainer:n}})();document.getElementById("content").appendChild(h.headerContainer)})()})();