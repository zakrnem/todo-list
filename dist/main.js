(()=>{"use strict";var e={426:(e,n,t)=>{t.d(n,{Z:()=>s});var r=t(864),o=t.n(r),a=t(352),i=t.n(a)()(o());i.push([e.id,"/* @font-face {\n    font-family: para;\n    src: url(Exo2-VariableFont_wght.ttf);\n}\n */\n:root {\n    --main: #8117de;\n    --secondary: #995ad0;\n  }\n\n* {\n    margin: 0;\n    padding: 0;\n    font-size: inherit;\n    font-family: inherit;\n}\n\nheader {\n    background-color: var(--main);\n    box-shadow: 0 5px 5px rgb(178 178 178);\n    padding: 0.75rem 2rem;\n    display: flex;\n    gap: 0.4rem;\n    margin-bottom: 1.5rem;\n}\n\n.header-button {\n    background: none;\n\tborder: none;\n\tpadding: 0;\n}\n\n.header-icon {\n    height: 3rem;\n    filter: invert(100%) sepia(100%) saturate(0%) hue-rotate(256deg) brightness(106%) contrast(101%);\n}\n\n.icon:hover {\n    filter: invert(82%) sepia(33%) saturate(1048%) hue-rotate(37deg) brightness(94%) contrast(98%);\n}","",{version:3,sources:["webpack://./src/style.css"],names:[],mappings:"AAAA;;;;EAIE;AACF;IACI,eAAe;IACf,oBAAoB;EACtB;;AAEF;IACI,SAAS;IACT,UAAU;IACV,kBAAkB;IAClB,oBAAoB;AACxB;;AAEA;IACI,6BAA6B;IAC7B,sCAAsC;IACtC,qBAAqB;IACrB,aAAa;IACb,WAAW;IACX,qBAAqB;AACzB;;AAEA;IACI,gBAAgB;CACnB,YAAY;CACZ,UAAU;AACX;;AAEA;IACI,YAAY;IACZ,gGAAgG;AACpG;;AAEA;IACI,8FAA8F;AAClG",sourcesContent:["/* @font-face {\n    font-family: para;\n    src: url(Exo2-VariableFont_wght.ttf);\n}\n */\n:root {\n    --main: #8117de;\n    --secondary: #995ad0;\n  }\n\n* {\n    margin: 0;\n    padding: 0;\n    font-size: inherit;\n    font-family: inherit;\n}\n\nheader {\n    background-color: var(--main);\n    box-shadow: 0 5px 5px rgb(178 178 178);\n    padding: 0.75rem 2rem;\n    display: flex;\n    gap: 0.4rem;\n    margin-bottom: 1.5rem;\n}\n\n.header-button {\n    background: none;\n\tborder: none;\n\tpadding: 0;\n}\n\n.header-icon {\n    height: 3rem;\n    filter: invert(100%) sepia(100%) saturate(0%) hue-rotate(256deg) brightness(106%) contrast(101%);\n}\n\n.icon:hover {\n    filter: invert(82%) sepia(33%) saturate(1048%) hue-rotate(37deg) brightness(94%) contrast(98%);\n}"],sourceRoot:""}]);const s=i},352:e=>{e.exports=function(e){var n=[];return n.toString=function(){return this.map((function(n){var t="",r=void 0!==n[5];return n[4]&&(t+="@supports (".concat(n[4],") {")),n[2]&&(t+="@media ".concat(n[2]," {")),r&&(t+="@layer".concat(n[5].length>0?" ".concat(n[5]):""," {")),t+=e(n),r&&(t+="}"),n[2]&&(t+="}"),n[4]&&(t+="}"),t})).join("")},n.i=function(e,t,r,o,a){"string"==typeof e&&(e=[[null,e,void 0]]);var i={};if(r)for(var s=0;s<this.length;s++){var c=this[s][0];null!=c&&(i[c]=!0)}for(var d=0;d<e.length;d++){var u=[].concat(e[d]);r&&i[u[0]]||(void 0!==a&&(void 0===u[5]||(u[1]="@layer".concat(u[5].length>0?" ".concat(u[5]):""," {").concat(u[1],"}")),u[5]=a),t&&(u[2]?(u[1]="@media ".concat(u[2]," {").concat(u[1],"}"),u[2]=t):u[2]=t),o&&(u[4]?(u[1]="@supports (".concat(u[4],") {").concat(u[1],"}"),u[4]=o):u[4]="".concat(o)),n.push(u))}},n}},864:e=>{e.exports=function(e){var n=e[1],t=e[3];if(!t)return n;if("function"==typeof btoa){var r=btoa(unescape(encodeURIComponent(JSON.stringify(t)))),o="sourceMappingURL=data:application/json;charset=utf-8;base64,".concat(r),a="/*# ".concat(o," */"),i=t.sources.map((function(e){return"/*# sourceURL=".concat(t.sourceRoot||"").concat(e," */")}));return[n].concat(i).concat([a]).join("\n")}return[n].join("\n")}},701:e=>{var n=[];function t(e){for(var t=-1,r=0;r<n.length;r++)if(n[r].identifier===e){t=r;break}return t}function r(e,r){for(var a={},i=[],s=0;s<e.length;s++){var c=e[s],d=r.base?c[0]+r.base:c[0],u=a[d]||0,p="".concat(d," ").concat(u);a[d]=u+1;var l=t(p),f={css:c[1],media:c[2],sourceMap:c[3],supports:c[4],layer:c[5]};if(-1!==l)n[l].references++,n[l].updater(f);else{var A=o(f,r);r.byIndex=s,n.splice(s,0,{identifier:p,updater:A,references:1})}i.push(p)}return i}function o(e,n){var t=n.domAPI(n);return t.update(e),function(n){if(n){if(n.css===e.css&&n.media===e.media&&n.sourceMap===e.sourceMap&&n.supports===e.supports&&n.layer===e.layer)return;t.update(e=n)}else t.remove()}}e.exports=function(e,o){var a=r(e=e||[],o=o||{});return function(e){e=e||[];for(var i=0;i<a.length;i++){var s=t(a[i]);n[s].references--}for(var c=r(e,o),d=0;d<a.length;d++){var u=t(a[d]);0===n[u].references&&(n[u].updater(),n.splice(u,1))}a=c}}},80:e=>{var n={};e.exports=function(e,t){var r=function(e){if(void 0===n[e]){var t=document.querySelector(e);if(window.HTMLIFrameElement&&t instanceof window.HTMLIFrameElement)try{t=t.contentDocument.head}catch(e){t=null}n[e]=t}return n[e]}(e);if(!r)throw new Error("Couldn't find a style target. This probably means that the value for the 'insert' parameter is invalid.");r.appendChild(t)}},182:e=>{e.exports=function(e){var n=document.createElement("style");return e.setAttributes(n,e.attributes),e.insert(n,e.options),n}},850:(e,n,t)=>{e.exports=function(e){var n=t.nc;n&&e.setAttribute("nonce",n)}},236:e=>{e.exports=function(e){var n=e.insertStyleElement(e);return{update:function(t){!function(e,n,t){var r="";t.supports&&(r+="@supports (".concat(t.supports,") {")),t.media&&(r+="@media ".concat(t.media," {"));var o=void 0!==t.layer;o&&(r+="@layer".concat(t.layer.length>0?" ".concat(t.layer):""," {")),r+=t.css,o&&(r+="}"),t.media&&(r+="}"),t.supports&&(r+="}");var a=t.sourceMap;a&&"undefined"!=typeof btoa&&(r+="\n/*# sourceMappingURL=data:application/json;base64,".concat(btoa(unescape(encodeURIComponent(JSON.stringify(a))))," */")),n.styleTagTransform(r,e,n.options)}(n,e,t)},remove:function(){!function(e){if(null===e.parentNode)return!1;e.parentNode.removeChild(e)}(n)}}}},213:e=>{e.exports=function(e,n){if(n.styleSheet)n.styleSheet.cssText=e;else{for(;n.firstChild;)n.removeChild(n.firstChild);n.appendChild(document.createTextNode(e))}}}},n={};function t(r){var o=n[r];if(void 0!==o)return o.exports;var a=n[r]={id:r,exports:{}};return e[r](a,a.exports,t),a.exports}t.n=e=>{var n=e&&e.__esModule?()=>e.default:()=>e;return t.d(n,{a:n}),n},t.d=(e,n)=>{for(var r in n)t.o(n,r)&&!t.o(e,r)&&Object.defineProperty(e,r,{enumerable:!0,get:n[r]})},t.o=(e,n)=>Object.prototype.hasOwnProperty.call(e,n),t.nc=void 0,(()=>{var e=t(701),n=t.n(e),r=t(236),o=t.n(r),a=t(80),i=t.n(a),s=t(850),c=t.n(s),d=t(182),u=t.n(d),p=t(213),l=t.n(p),f=t(426),A={};function h(e,n,t,r,o){let a=document.createElement("button");a.className=e,a.id=n,a.textContent=o;let i=document.createElement("img");return i.src=`./img/${t}`,i.className=r,a.appendChild(i),a}A.styleTagTransform=l(),A.setAttributes=c(),A.insert=i().bind(null,"head"),A.domAPI=o(),A.insertStyleElement=u(),n()(f.Z,A),f.Z&&f.Z.locals&&f.Z.locals,function(){let e=document.querySelector("#content"),n=document.createElement("header"),t=h("header-button","sidebar-button","sidebar-close-svgrepo-com.svg","header-icon");n.appendChild(t);let r=h("header-button","home-button","home-svgrepo-com.svg","header-icon");n.appendChild(r);let o=document.createElement("input");o.setAttribute("type","text"),o.className="header-search",o.id="search-bar",n.appendChild(o);let a=h("header-button","search-button","search-svgrepo-com.svg","header-icon");n.appendChild(a);let i=h("header-button","plus-button","plus-svgrepo-com.svg","header-icon");n.appendChild(i),e.appendChild(n)}(),function(){let e=document.querySelector("#content"),n=document.createElement("div");n.className="sidebar";let t=h("sidebar-button","add-task","plus-svgrepo-com.svg","sidebar-icon","New Task");n.appendChild(t);let r=h("sidebar-button","project-dropdown","plus-svgrepo-com.svg","sidebar-icon","Projects");n.appendChild(r),e.appendChild(n)}()})()})();
//# sourceMappingURL=main.js.map