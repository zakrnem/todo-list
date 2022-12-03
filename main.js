(()=>{"use strict";var e={426:(e,n,t)=>{t.d(n,{Z:()=>s});var a=t(864),r=t.n(a),o=t(352),i=t.n(o)()(r());i.push([e.id,"/* @font-face {\n    font-family: para;\n    src: url(Exo2-VariableFont_wght.ttf);\n}\n */\n:root {\n    --main: #8117de;\n    --secondary: #995ad0;\n  }\n\n* {\n    margin: 0;\n    padding: 0;\n    font-size: inherit;\n    font-family: inherit;\n}\n\nheader {\n    background-color: var(--main);\n    box-shadow: 0 5px 5px rgb(178 178 178);\n    padding: 0.75rem 2rem;\n    display: flex;\n    gap: 0.4rem;\n    margin-bottom: 1rem;\n}\n\n.header-button,\n.sidebar-button,\n.task-detail-button {\n    background: none;\n\tborder: none;\n}\n\n.header-icon {\n    height: 3rem;\n    filter: invert(100%) sepia(100%) saturate(0%) hue-rotate(256deg) brightness(106%) contrast(101%);\n}\n\n.header-icon:hover {\n    filter: invert(82%) sepia(33%) saturate(1048%) hue-rotate(37deg) brightness(94%) contrast(98%);\n}\n\n.sidebar {\n    background-color: aqua;\n}\n\n.task-dashboard {\n    background-color: #995ad0;\n}\n\nmain {\n    display: flex;\n}\n\n.sidebar {\n    display: flex;\n    flex-direction: column;\n    gap: 0.5rem;\n}\n\n.sidebar-button {\n    display: flex;\n    align-items: center;\n    flex-direction: row-reverse;\n    justify-content: flex-end;\n    gap: 0.5rem;\n}\n\n.sidebar-icon {\n    height: 1.5rem;\n}\n\n.task-dashboard {\n    flex: auto;\n    flex-direction: column;\n    padding: 0.75rem 1.5rem;\n}\n\n.task-container1 {\n    display: flex;\n    align-items: center;\n}\n\n#task-title {\n    font-size: 1.2rem;\n    padding: 0.5rem;\n    flex:content;\n    margin: 0.75rem 1rem;\n}\n\ninput {\n    border: none;\n}\n\n.task-detail-button {\n    width: 2rem;\n    filter: invert(20%) sepia(69%) saturate(6232%) hue-rotate(270deg) brightness(85%) contrast(108%);\n}\n\n.task-detail-button:hover {\n    filter: invert(54%) sepia(74%) saturate(4301%) hue-rotate(241deg) brightness(87%) contrast(86%);\n}\n\n#task-completed {\n    width: 2rem;\n    height: 2rem;\n}\n\n.task-container2 {\n    display: flex;\n    align-items: center;\n}","",{version:3,sources:["webpack://./src/style.css"],names:[],mappings:"AAAA;;;;EAIE;AACF;IACI,eAAe;IACf,oBAAoB;EACtB;;AAEF;IACI,SAAS;IACT,UAAU;IACV,kBAAkB;IAClB,oBAAoB;AACxB;;AAEA;IACI,6BAA6B;IAC7B,sCAAsC;IACtC,qBAAqB;IACrB,aAAa;IACb,WAAW;IACX,mBAAmB;AACvB;;AAEA;;;IAGI,gBAAgB;CACnB,YAAY;AACb;;AAEA;IACI,YAAY;IACZ,gGAAgG;AACpG;;AAEA;IACI,8FAA8F;AAClG;;AAEA;IACI,sBAAsB;AAC1B;;AAEA;IACI,yBAAyB;AAC7B;;AAEA;IACI,aAAa;AACjB;;AAEA;IACI,aAAa;IACb,sBAAsB;IACtB,WAAW;AACf;;AAEA;IACI,aAAa;IACb,mBAAmB;IACnB,2BAA2B;IAC3B,yBAAyB;IACzB,WAAW;AACf;;AAEA;IACI,cAAc;AAClB;;AAEA;IACI,UAAU;IACV,sBAAsB;IACtB,uBAAuB;AAC3B;;AAEA;IACI,aAAa;IACb,mBAAmB;AACvB;;AAEA;IACI,iBAAiB;IACjB,eAAe;IACf,YAAY;IACZ,oBAAoB;AACxB;;AAEA;IACI,YAAY;AAChB;;AAEA;IACI,WAAW;IACX,gGAAgG;AACpG;;AAEA;IACI,+FAA+F;AACnG;;AAEA;IACI,WAAW;IACX,YAAY;AAChB;;AAEA;IACI,aAAa;IACb,mBAAmB;AACvB",sourcesContent:["/* @font-face {\n    font-family: para;\n    src: url(Exo2-VariableFont_wght.ttf);\n}\n */\n:root {\n    --main: #8117de;\n    --secondary: #995ad0;\n  }\n\n* {\n    margin: 0;\n    padding: 0;\n    font-size: inherit;\n    font-family: inherit;\n}\n\nheader {\n    background-color: var(--main);\n    box-shadow: 0 5px 5px rgb(178 178 178);\n    padding: 0.75rem 2rem;\n    display: flex;\n    gap: 0.4rem;\n    margin-bottom: 1rem;\n}\n\n.header-button,\n.sidebar-button,\n.task-detail-button {\n    background: none;\n\tborder: none;\n}\n\n.header-icon {\n    height: 3rem;\n    filter: invert(100%) sepia(100%) saturate(0%) hue-rotate(256deg) brightness(106%) contrast(101%);\n}\n\n.header-icon:hover {\n    filter: invert(82%) sepia(33%) saturate(1048%) hue-rotate(37deg) brightness(94%) contrast(98%);\n}\n\n.sidebar {\n    background-color: aqua;\n}\n\n.task-dashboard {\n    background-color: #995ad0;\n}\n\nmain {\n    display: flex;\n}\n\n.sidebar {\n    display: flex;\n    flex-direction: column;\n    gap: 0.5rem;\n}\n\n.sidebar-button {\n    display: flex;\n    align-items: center;\n    flex-direction: row-reverse;\n    justify-content: flex-end;\n    gap: 0.5rem;\n}\n\n.sidebar-icon {\n    height: 1.5rem;\n}\n\n.task-dashboard {\n    flex: auto;\n    flex-direction: column;\n    padding: 0.75rem 1.5rem;\n}\n\n.task-container1 {\n    display: flex;\n    align-items: center;\n}\n\n#task-title {\n    font-size: 1.2rem;\n    padding: 0.5rem;\n    flex:content;\n    margin: 0.75rem 1rem;\n}\n\ninput {\n    border: none;\n}\n\n.task-detail-button {\n    width: 2rem;\n    filter: invert(20%) sepia(69%) saturate(6232%) hue-rotate(270deg) brightness(85%) contrast(108%);\n}\n\n.task-detail-button:hover {\n    filter: invert(54%) sepia(74%) saturate(4301%) hue-rotate(241deg) brightness(87%) contrast(86%);\n}\n\n#task-completed {\n    width: 2rem;\n    height: 2rem;\n}\n\n.task-container2 {\n    display: flex;\n    align-items: center;\n}"],sourceRoot:""}]);const s=i},352:e=>{e.exports=function(e){var n=[];return n.toString=function(){return this.map((function(n){var t="",a=void 0!==n[5];return n[4]&&(t+="@supports (".concat(n[4],") {")),n[2]&&(t+="@media ".concat(n[2]," {")),a&&(t+="@layer".concat(n[5].length>0?" ".concat(n[5]):""," {")),t+=e(n),a&&(t+="}"),n[2]&&(t+="}"),n[4]&&(t+="}"),t})).join("")},n.i=function(e,t,a,r,o){"string"==typeof e&&(e=[[null,e,void 0]]);var i={};if(a)for(var s=0;s<this.length;s++){var d=this[s][0];null!=d&&(i[d]=!0)}for(var c=0;c<e.length;c++){var l=[].concat(e[c]);a&&i[l[0]]||(void 0!==o&&(void 0===l[5]||(l[1]="@layer".concat(l[5].length>0?" ".concat(l[5]):""," {").concat(l[1],"}")),l[5]=o),t&&(l[2]?(l[1]="@media ".concat(l[2]," {").concat(l[1],"}"),l[2]=t):l[2]=t),r&&(l[4]?(l[1]="@supports (".concat(l[4],") {").concat(l[1],"}"),l[4]=r):l[4]="".concat(r)),n.push(l))}},n}},864:e=>{e.exports=function(e){var n=e[1],t=e[3];if(!t)return n;if("function"==typeof btoa){var a=btoa(unescape(encodeURIComponent(JSON.stringify(t)))),r="sourceMappingURL=data:application/json;charset=utf-8;base64,".concat(a),o="/*# ".concat(r," */"),i=t.sources.map((function(e){return"/*# sourceURL=".concat(t.sourceRoot||"").concat(e," */")}));return[n].concat(i).concat([o]).join("\n")}return[n].join("\n")}},701:e=>{var n=[];function t(e){for(var t=-1,a=0;a<n.length;a++)if(n[a].identifier===e){t=a;break}return t}function a(e,a){for(var o={},i=[],s=0;s<e.length;s++){var d=e[s],c=a.base?d[0]+a.base:d[0],l=o[c]||0,A="".concat(c," ").concat(l);o[c]=l+1;var u=t(A),p={css:d[1],media:d[2],sourceMap:d[3],supports:d[4],layer:d[5]};if(-1!==u)n[u].references++,n[u].updater(p);else{var m=r(p,a);a.byIndex=s,n.splice(s,0,{identifier:A,updater:m,references:1})}i.push(A)}return i}function r(e,n){var t=n.domAPI(n);return t.update(e),function(n){if(n){if(n.css===e.css&&n.media===e.media&&n.sourceMap===e.sourceMap&&n.supports===e.supports&&n.layer===e.layer)return;t.update(e=n)}else t.remove()}}e.exports=function(e,r){var o=a(e=e||[],r=r||{});return function(e){e=e||[];for(var i=0;i<o.length;i++){var s=t(o[i]);n[s].references--}for(var d=a(e,r),c=0;c<o.length;c++){var l=t(o[c]);0===n[l].references&&(n[l].updater(),n.splice(l,1))}o=d}}},80:e=>{var n={};e.exports=function(e,t){var a=function(e){if(void 0===n[e]){var t=document.querySelector(e);if(window.HTMLIFrameElement&&t instanceof window.HTMLIFrameElement)try{t=t.contentDocument.head}catch(e){t=null}n[e]=t}return n[e]}(e);if(!a)throw new Error("Couldn't find a style target. This probably means that the value for the 'insert' parameter is invalid.");a.appendChild(t)}},182:e=>{e.exports=function(e){var n=document.createElement("style");return e.setAttributes(n,e.attributes),e.insert(n,e.options),n}},850:(e,n,t)=>{e.exports=function(e){var n=t.nc;n&&e.setAttribute("nonce",n)}},236:e=>{e.exports=function(e){var n=e.insertStyleElement(e);return{update:function(t){!function(e,n,t){var a="";t.supports&&(a+="@supports (".concat(t.supports,") {")),t.media&&(a+="@media ".concat(t.media," {"));var r=void 0!==t.layer;r&&(a+="@layer".concat(t.layer.length>0?" ".concat(t.layer):""," {")),a+=t.css,r&&(a+="}"),t.media&&(a+="}"),t.supports&&(a+="}");var o=t.sourceMap;o&&"undefined"!=typeof btoa&&(a+="\n/*# sourceMappingURL=data:application/json;base64,".concat(btoa(unescape(encodeURIComponent(JSON.stringify(o))))," */")),n.styleTagTransform(a,e,n.options)}(n,e,t)},remove:function(){!function(e){if(null===e.parentNode)return!1;e.parentNode.removeChild(e)}(n)}}}},213:e=>{e.exports=function(e,n){if(n.styleSheet)n.styleSheet.cssText=e;else{for(;n.firstChild;)n.removeChild(n.firstChild);n.appendChild(document.createTextNode(e))}}}},n={};function t(a){var r=n[a];if(void 0!==r)return r.exports;var o=n[a]={id:a,exports:{}};return e[a](o,o.exports,t),o.exports}t.n=e=>{var n=e&&e.__esModule?()=>e.default:()=>e;return t.d(n,{a:n}),n},t.d=(e,n)=>{for(var a in n)t.o(n,a)&&!t.o(e,a)&&Object.defineProperty(e,a,{enumerable:!0,get:n[a]})},t.o=(e,n)=>Object.prototype.hasOwnProperty.call(e,n),t.nc=void 0,(()=>{var e=t(701),n=t.n(e),a=t(236),r=t.n(a),o=t(80),i=t.n(o),s=t(850),d=t.n(s),c=t(182),l=t.n(c),A=t(213),u=t.n(A),p=t(426),m={};function h(e,n,t,a,r){let o=document.createElement("button");o.className=e,o.id=n,o.textContent=r;let i=document.createElement("img");return i.src=`./img/${t}`,i.className=a,o.appendChild(i),o}m.styleTagTransform=u(),m.setAttributes=d(),m.insert=i().bind(null,"head"),m.domAPI=r(),m.insertStyleElement=l(),n()(p.Z,m),p.Z&&p.Z.locals&&p.Z.locals,function(){let e=document.querySelector("#content"),n=document.createElement("header"),t=h("header-button","sidebar-button","sidebar-close-svgrepo-com.svg","header-icon");n.appendChild(t);let a=h("header-button","home-button","home-svgrepo-com.svg","header-icon");n.appendChild(a);let r=document.createElement("input");r.setAttribute("type","text"),r.className="header-search",r.id="search-bar",n.appendChild(r);let o=h("header-button","search-button","search-svgrepo-com.svg","header-icon");n.appendChild(o);let i=h("header-button","plus-button","plus-svgrepo-com.svg","header-icon");n.appendChild(i),e.appendChild(n)}(),function(){let e=document.querySelector("#content"),n=document.createElement("div");n.className="sidebar";let t=h("sidebar-button","add-task","plus-svgrepo-com.svg","sidebar-icon","New Task");n.appendChild(t);let a=h("sidebar-button","upcoming","calendar-svgrepo-com.svg","sidebar-icon","Upcoming Tasks");n.appendChild(a);let r=h("sidebar-button","project-dropdown","stack-svgrepo-com.svg","sidebar-icon","Projects");n.appendChild(r);let o=document.createElement("main");o.appendChild(n),e.appendChild(o)}(),function(){let e=document.querySelector("#content"),n=document.createElement("div");n.className="task-dashboard";let t=document.createElement("div");t.className="task-container1",n.appendChild(t);let a=document.createElement("input");a.setAttribute("type","checkbox"),a.id="task-completed",t.appendChild(a);let r=document.createElement("input");r.setAttribute("type","text"),r.placeholder="Title your task",r.id="task-title",t.appendChild(r);let o=h("task-detail-button","task-detail-icon","down-svgrepo-com.svg","task-icon");t.appendChild(o);let i=document.createElement("div");i.className="task-container2",n.appendChild(i);let s=document.createElement("input");s.setAttribute("type","text"),s.placeholder="Add a description",s.className="task-edit-input",s.id="task-content",i.appendChild(s);let d=document.createElement("div");d.className="task-container3",i.appendChild(d);let c=document.createElement("button");c.id="today",c.textContent="Today",d.appendChild(c);let l=document.createElement("button");c.id="tomorrow",l.textContent="Tomorrow",d.appendChild(l);let A=document.createElement("input");A.setAttribute("type","date"),d.appendChild(A);let u=document.createElement("button");u.id="task-submit",u.textContent="Submit",i.appendChild(u);let p=document.querySelector("main");if(null===p){let t=document.createElement("main");t.appendChild(n),e.appendChild(t)}else p.appendChild(n),e.appendChild(p)}()})()})();
//# sourceMappingURL=main.js.map