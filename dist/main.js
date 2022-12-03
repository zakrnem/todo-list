(()=>{"use strict";var e={426:(e,n,t)=>{t.d(n,{Z:()=>s});var r=t(864),a=t.n(r),o=t(352),i=t.n(o)()(a());i.push([e.id,"/* @font-face {\n    font-family: para;\n    src: url(Exo2-VariableFont_wght.ttf);\n}\n */\n:root {\n    --main: #8117de;\n    --secondary: #995ad0;\n    --inverse: #7ee821;\n    --inverse-filter: invert(81%) sepia(86%) saturate(512%) hue-rotate(32deg) brightness(95%) contrast(92%);\n    --white-filter: invert(86%) sepia(100%) saturate(1764%) hue-rotate(182deg) brightness(130%) contrast(100%);\n    --border-radius: 7px;\n  }\n\n* {\n    margin: 0;\n    padding: 0;\n    font-size: inherit;\n    font-family: inherit;\n}\n\nheader {\n    background-color: var(--main);\n    box-shadow: 0 5px 5px rgb(178 178 178);\n    padding: 0.75rem 2rem;\n    display: flex;\n    gap: 0.4rem;\n    margin-bottom: 1rem;\n}\n\n.header-button,\n.sidebar-button,\n.task-detail-button {\n    background: none;\n\tborder: none;\n}\n\n.header-icon {\n    height: 3rem;\n    filter: var(--white-filter)\n}\n\n.header-icon:hover {\n    filter: var(--inverse-filter)\n}\n\n.sidebar {\n    background-color: aqua;\n}\n\n.task-dashboard {\n    background-color: #995ad0;\n}\n\nmain {\n    display: flex;\n}\n\n.sidebar {\n    display: flex;\n    flex-direction: column;\n    gap: 0.5rem;\n}\n\n.sidebar-button {\n    display: flex;\n    align-items: center;\n    flex-direction: row-reverse;\n    justify-content: flex-end;\n    gap: 0.5rem;\n}\n\n.sidebar-icon {\n    height: 1.5rem;\n}\n\n.task-dashboard {\n    flex: auto;\n    flex-direction: column;\n    padding: 0.75rem 1.5rem;\n}\n\n.task-container1 {\n    display: flex;\n    align-items: center;\n}\n\n#task-title {\n    font-size: 1.2rem;\n    padding: 0.5rem;\n    flex:content;\n    margin: 0.75rem 1rem;\n}\n\ninput {\n    border: none;\n}\n\n.task-detail-button {\n    width: 2rem;\n    filter: invert(20%) sepia(69%) saturate(6232%) hue-rotate(270deg) brightness(85%) contrast(108%);\n}\n\n.task-detail-button:hover {\n    filter: invert(54%) sepia(74%) saturate(4301%) hue-rotate(241deg) brightness(87%) contrast(86%);\n}\n\n#task-completed {\n    width: 2rem;\n    height: 2rem;\n}\n\n.task-container2 {\n    display: flex;\n    gap: 1rem;\n    margin-top: 1rem;\n}\n\n#task-description {\n    padding: 0.5rem;\n    flex: content;\n    font-size: 1.1rem;\n}\n\n.task-container3 {\n    display: flex;\n    flex-direction: column;\n    justify-content: space-between;\n    align-items: flex-end;\n}\n\n.task-container4 {\n    display: flex;\n    gap: 0.3rem;\n}\n\n.task-container4 > * {\n    padding: 0.6rem 0.5rem;\n    border-radius: var(--border-radius);\n}\n\n#task-submit {\n    border-radius: var(--border-radius);\n    padding: 0.7rem 1.5rem;\n    width: fit-content;\n}\n","",{version:3,sources:["webpack://./src/style.css"],names:[],mappings:"AAAA;;;;EAIE;AACF;IACI,eAAe;IACf,oBAAoB;IACpB,kBAAkB;IAClB,uGAAuG;IACvG,0GAA0G;IAC1G,oBAAoB;EACtB;;AAEF;IACI,SAAS;IACT,UAAU;IACV,kBAAkB;IAClB,oBAAoB;AACxB;;AAEA;IACI,6BAA6B;IAC7B,sCAAsC;IACtC,qBAAqB;IACrB,aAAa;IACb,WAAW;IACX,mBAAmB;AACvB;;AAEA;;;IAGI,gBAAgB;CACnB,YAAY;AACb;;AAEA;IACI,YAAY;IACZ;AACJ;;AAEA;IACI;AACJ;;AAEA;IACI,sBAAsB;AAC1B;;AAEA;IACI,yBAAyB;AAC7B;;AAEA;IACI,aAAa;AACjB;;AAEA;IACI,aAAa;IACb,sBAAsB;IACtB,WAAW;AACf;;AAEA;IACI,aAAa;IACb,mBAAmB;IACnB,2BAA2B;IAC3B,yBAAyB;IACzB,WAAW;AACf;;AAEA;IACI,cAAc;AAClB;;AAEA;IACI,UAAU;IACV,sBAAsB;IACtB,uBAAuB;AAC3B;;AAEA;IACI,aAAa;IACb,mBAAmB;AACvB;;AAEA;IACI,iBAAiB;IACjB,eAAe;IACf,YAAY;IACZ,oBAAoB;AACxB;;AAEA;IACI,YAAY;AAChB;;AAEA;IACI,WAAW;IACX,gGAAgG;AACpG;;AAEA;IACI,+FAA+F;AACnG;;AAEA;IACI,WAAW;IACX,YAAY;AAChB;;AAEA;IACI,aAAa;IACb,SAAS;IACT,gBAAgB;AACpB;;AAEA;IACI,eAAe;IACf,aAAa;IACb,iBAAiB;AACrB;;AAEA;IACI,aAAa;IACb,sBAAsB;IACtB,8BAA8B;IAC9B,qBAAqB;AACzB;;AAEA;IACI,aAAa;IACb,WAAW;AACf;;AAEA;IACI,sBAAsB;IACtB,mCAAmC;AACvC;;AAEA;IACI,mCAAmC;IACnC,sBAAsB;IACtB,kBAAkB;AACtB",sourcesContent:["/* @font-face {\n    font-family: para;\n    src: url(Exo2-VariableFont_wght.ttf);\n}\n */\n:root {\n    --main: #8117de;\n    --secondary: #995ad0;\n    --inverse: #7ee821;\n    --inverse-filter: invert(81%) sepia(86%) saturate(512%) hue-rotate(32deg) brightness(95%) contrast(92%);\n    --white-filter: invert(86%) sepia(100%) saturate(1764%) hue-rotate(182deg) brightness(130%) contrast(100%);\n    --border-radius: 7px;\n  }\n\n* {\n    margin: 0;\n    padding: 0;\n    font-size: inherit;\n    font-family: inherit;\n}\n\nheader {\n    background-color: var(--main);\n    box-shadow: 0 5px 5px rgb(178 178 178);\n    padding: 0.75rem 2rem;\n    display: flex;\n    gap: 0.4rem;\n    margin-bottom: 1rem;\n}\n\n.header-button,\n.sidebar-button,\n.task-detail-button {\n    background: none;\n\tborder: none;\n}\n\n.header-icon {\n    height: 3rem;\n    filter: var(--white-filter)\n}\n\n.header-icon:hover {\n    filter: var(--inverse-filter)\n}\n\n.sidebar {\n    background-color: aqua;\n}\n\n.task-dashboard {\n    background-color: #995ad0;\n}\n\nmain {\n    display: flex;\n}\n\n.sidebar {\n    display: flex;\n    flex-direction: column;\n    gap: 0.5rem;\n}\n\n.sidebar-button {\n    display: flex;\n    align-items: center;\n    flex-direction: row-reverse;\n    justify-content: flex-end;\n    gap: 0.5rem;\n}\n\n.sidebar-icon {\n    height: 1.5rem;\n}\n\n.task-dashboard {\n    flex: auto;\n    flex-direction: column;\n    padding: 0.75rem 1.5rem;\n}\n\n.task-container1 {\n    display: flex;\n    align-items: center;\n}\n\n#task-title {\n    font-size: 1.2rem;\n    padding: 0.5rem;\n    flex:content;\n    margin: 0.75rem 1rem;\n}\n\ninput {\n    border: none;\n}\n\n.task-detail-button {\n    width: 2rem;\n    filter: invert(20%) sepia(69%) saturate(6232%) hue-rotate(270deg) brightness(85%) contrast(108%);\n}\n\n.task-detail-button:hover {\n    filter: invert(54%) sepia(74%) saturate(4301%) hue-rotate(241deg) brightness(87%) contrast(86%);\n}\n\n#task-completed {\n    width: 2rem;\n    height: 2rem;\n}\n\n.task-container2 {\n    display: flex;\n    gap: 1rem;\n    margin-top: 1rem;\n}\n\n#task-description {\n    padding: 0.5rem;\n    flex: content;\n    font-size: 1.1rem;\n}\n\n.task-container3 {\n    display: flex;\n    flex-direction: column;\n    justify-content: space-between;\n    align-items: flex-end;\n}\n\n.task-container4 {\n    display: flex;\n    gap: 0.3rem;\n}\n\n.task-container4 > * {\n    padding: 0.6rem 0.5rem;\n    border-radius: var(--border-radius);\n}\n\n#task-submit {\n    border-radius: var(--border-radius);\n    padding: 0.7rem 1.5rem;\n    width: fit-content;\n}\n"],sourceRoot:""}]);const s=i},352:e=>{e.exports=function(e){var n=[];return n.toString=function(){return this.map((function(n){var t="",r=void 0!==n[5];return n[4]&&(t+="@supports (".concat(n[4],") {")),n[2]&&(t+="@media ".concat(n[2]," {")),r&&(t+="@layer".concat(n[5].length>0?" ".concat(n[5]):""," {")),t+=e(n),r&&(t+="}"),n[2]&&(t+="}"),n[4]&&(t+="}"),t})).join("")},n.i=function(e,t,r,a,o){"string"==typeof e&&(e=[[null,e,void 0]]);var i={};if(r)for(var s=0;s<this.length;s++){var d=this[s][0];null!=d&&(i[d]=!0)}for(var A=0;A<e.length;A++){var c=[].concat(e[A]);r&&i[c[0]]||(void 0!==o&&(void 0===c[5]||(c[1]="@layer".concat(c[5].length>0?" ".concat(c[5]):""," {").concat(c[1],"}")),c[5]=o),t&&(c[2]?(c[1]="@media ".concat(c[2]," {").concat(c[1],"}"),c[2]=t):c[2]=t),a&&(c[4]?(c[1]="@supports (".concat(c[4],") {").concat(c[1],"}"),c[4]=a):c[4]="".concat(a)),n.push(c))}},n}},864:e=>{e.exports=function(e){var n=e[1],t=e[3];if(!t)return n;if("function"==typeof btoa){var r=btoa(unescape(encodeURIComponent(JSON.stringify(t)))),a="sourceMappingURL=data:application/json;charset=utf-8;base64,".concat(r),o="/*# ".concat(a," */"),i=t.sources.map((function(e){return"/*# sourceURL=".concat(t.sourceRoot||"").concat(e," */")}));return[n].concat(i).concat([o]).join("\n")}return[n].join("\n")}},701:e=>{var n=[];function t(e){for(var t=-1,r=0;r<n.length;r++)if(n[r].identifier===e){t=r;break}return t}function r(e,r){for(var o={},i=[],s=0;s<e.length;s++){var d=e[s],A=r.base?d[0]+r.base:d[0],c=o[A]||0,l="".concat(A," ").concat(c);o[A]=c+1;var p=t(l),u={css:d[1],media:d[2],sourceMap:d[3],supports:d[4],layer:d[5]};if(-1!==p)n[p].references++,n[p].updater(u);else{var m=a(u,r);r.byIndex=s,n.splice(s,0,{identifier:l,updater:m,references:1})}i.push(l)}return i}function a(e,n){var t=n.domAPI(n);return t.update(e),function(n){if(n){if(n.css===e.css&&n.media===e.media&&n.sourceMap===e.sourceMap&&n.supports===e.supports&&n.layer===e.layer)return;t.update(e=n)}else t.remove()}}e.exports=function(e,a){var o=r(e=e||[],a=a||{});return function(e){e=e||[];for(var i=0;i<o.length;i++){var s=t(o[i]);n[s].references--}for(var d=r(e,a),A=0;A<o.length;A++){var c=t(o[A]);0===n[c].references&&(n[c].updater(),n.splice(c,1))}o=d}}},80:e=>{var n={};e.exports=function(e,t){var r=function(e){if(void 0===n[e]){var t=document.querySelector(e);if(window.HTMLIFrameElement&&t instanceof window.HTMLIFrameElement)try{t=t.contentDocument.head}catch(e){t=null}n[e]=t}return n[e]}(e);if(!r)throw new Error("Couldn't find a style target. This probably means that the value for the 'insert' parameter is invalid.");r.appendChild(t)}},182:e=>{e.exports=function(e){var n=document.createElement("style");return e.setAttributes(n,e.attributes),e.insert(n,e.options),n}},850:(e,n,t)=>{e.exports=function(e){var n=t.nc;n&&e.setAttribute("nonce",n)}},236:e=>{e.exports=function(e){var n=e.insertStyleElement(e);return{update:function(t){!function(e,n,t){var r="";t.supports&&(r+="@supports (".concat(t.supports,") {")),t.media&&(r+="@media ".concat(t.media," {"));var a=void 0!==t.layer;a&&(r+="@layer".concat(t.layer.length>0?" ".concat(t.layer):""," {")),r+=t.css,a&&(r+="}"),t.media&&(r+="}"),t.supports&&(r+="}");var o=t.sourceMap;o&&"undefined"!=typeof btoa&&(r+="\n/*# sourceMappingURL=data:application/json;base64,".concat(btoa(unescape(encodeURIComponent(JSON.stringify(o))))," */")),n.styleTagTransform(r,e,n.options)}(n,e,t)},remove:function(){!function(e){if(null===e.parentNode)return!1;e.parentNode.removeChild(e)}(n)}}}},213:e=>{e.exports=function(e,n){if(n.styleSheet)n.styleSheet.cssText=e;else{for(;n.firstChild;)n.removeChild(n.firstChild);n.appendChild(document.createTextNode(e))}}}},n={};function t(r){var a=n[r];if(void 0!==a)return a.exports;var o=n[r]={id:r,exports:{}};return e[r](o,o.exports,t),o.exports}t.n=e=>{var n=e&&e.__esModule?()=>e.default:()=>e;return t.d(n,{a:n}),n},t.d=(e,n)=>{for(var r in n)t.o(n,r)&&!t.o(e,r)&&Object.defineProperty(e,r,{enumerable:!0,get:n[r]})},t.o=(e,n)=>Object.prototype.hasOwnProperty.call(e,n),t.nc=void 0,(()=>{var e=t(701),n=t.n(e),r=t(236),a=t.n(r),o=t(80),i=t.n(o),s=t(850),d=t.n(s),A=t(182),c=t.n(A),l=t(213),p=t.n(l),u=t(426),m={};function f(e,n,t,r,a){let o=document.createElement("button");o.className=e,o.id=n,o.textContent=a;let i=document.createElement("img");return i.src=`./img/${t}`,i.className=r,o.appendChild(i),o}m.styleTagTransform=p(),m.setAttributes=d(),m.insert=i().bind(null,"head"),m.domAPI=a(),m.insertStyleElement=c(),n()(u.Z,m),u.Z&&u.Z.locals&&u.Z.locals,function(){let e=document.querySelector("#content"),n=document.createElement("header"),t=f("header-button","sidebar-button","sidebar-close-svgrepo-com.svg","header-icon");n.appendChild(t);let r=f("header-button","home-button","home-svgrepo-com.svg","header-icon");n.appendChild(r);let a=document.createElement("input");a.setAttribute("type","text"),a.className="header-search",a.id="search-bar",n.appendChild(a);let o=f("header-button","search-button","search-svgrepo-com.svg","header-icon");n.appendChild(o);let i=f("header-button","plus-button","plus-svgrepo-com.svg","header-icon");n.appendChild(i),e.appendChild(n)}(),function(){let e=document.querySelector("#content"),n=document.createElement("div");n.className="sidebar";let t=f("sidebar-button","add-task","plus-svgrepo-com.svg","sidebar-icon","New Task");n.appendChild(t);let r=f("sidebar-button","upcoming","calendar-svgrepo-com.svg","sidebar-icon","Upcoming Tasks");n.appendChild(r);let a=f("sidebar-button","project-dropdown","stack-svgrepo-com.svg","sidebar-icon","Projects");n.appendChild(a);let o=document.createElement("main");o.appendChild(n),e.appendChild(o)}(),function(){let e=document.querySelector("#content"),n=document.createElement("div");n.className="task-dashboard";let t=document.createElement("div");t.className="task-container1",n.appendChild(t);let r=document.createElement("input");r.setAttribute("type","checkbox"),r.id="task-completed",t.appendChild(r);let a=document.createElement("input");a.setAttribute("type","text"),a.placeholder="Title your task",a.id="task-title",t.appendChild(a);let o=f("task-detail-button","task-detail-icon","down-svgrepo-com.svg","task-icon");t.appendChild(o);let i=document.createElement("div");i.className="task-container2",n.appendChild(i);let s=document.createElement("textarea");s.setAttribute("rows","8"),s.placeholder="Add a description",s.className="task-edit-input",s.id="task-description",i.appendChild(s);let d=document.createElement("div");d.className="task-container3",i.appendChild(d);let A=document.createElement("div");A.className="task-container4",d.appendChild(A);let c=document.createElement("button");c.id="today",c.textContent="Today",A.appendChild(c);let l=document.createElement("button");c.id="tomorrow",l.textContent="Tomorrow",A.appendChild(l);let p=document.createElement("input");p.setAttribute("type","date"),A.appendChild(p);let u=document.createElement("button");u.id="task-submit",u.textContent="Submit",d.appendChild(u);let m=document.querySelector("main");if(null===m){let t=document.createElement("main");t.appendChild(n),e.appendChild(t)}else m.appendChild(n),e.appendChild(m)}()})()})();
//# sourceMappingURL=main.js.map