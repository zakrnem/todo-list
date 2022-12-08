(()=>{"use strict";var e={426:(e,n,t)=>{t.d(n,{Z:()=>s});var r=t(864),a=t.n(r),i=t(352),o=t.n(i)()(a());o.push([e.id,"/* @font-face {\n    font-family: para;\n    src: url(Exo2-VariableFont_wght.ttf);\n}\n */\n:root {\n    --main: #8117de;\n    --main-filter: invert(20%) sepia(69%) saturate(6232%) hue-rotate(270deg) brightness(85%) contrast(108%);\n    --secondary: #8e31e0;\n    --secondary-filter: invert(22%) sepia(82%) saturate(4698%) hue-rotate(267deg) brightness(92%) contrast(89%);\n    --tertiary: #a364db;\n    --tertiary-filter: invert(47%) sepia(20%) saturate(2775%) hue-rotate(233deg) brightness(94%) contrast(81%);\n    --inverse: #7ee821;\n    --inverse-filter: invert(81%) sepia(86%) saturate(512%) hue-rotate(32deg) brightness(95%) contrast(92%);\n    --inverse-active: #539618;\n    --inverse-active-filter: invert(62%) sepia(65%) saturate(6830%) hue-rotate(64deg) brightness(101%) contrast(81%);\n    --white-filter: invert(86%) sepia(100%) saturate(1764%) hue-rotate(182deg) brightness(130%) contrast(100%);\n    --border-radius: 7px;\n    --separator: solid 3px #aaaaaa;\n  }\n\n* {\n    margin: 0;\n    padding: 0;\n    font-size: inherit;\n    font-family: inherit;\n}\n\nheader {\n    background-color: var(--main);\n    box-shadow: 0 5px 5px rgb(178 178 178);\n    padding: 1rem 1.5rem;\n    display: flex;\n    gap: 1rem;\n    margin-bottom: 1rem;\n}\n\n.header-button,\n.sidebar-button,\n.task-detail-button,\n.task-delete-button {\n    background: none;\n\tborder: none;\n}\n\n.header-icon {\n    height: 3rem;\n    filter: var(--white-filter)\n}\n\n.header-icon:hover {\n    filter: var(--inverse-filter)\n}\n\n.header-icon:active {\n    filter: var(--inverse-active-filter)\n}\n\n.header-search {\n    border-radius: var(--border-radius);\n    flex: content;\n    margin-left: 2rem;\n}\n\nmain {\n    display: flex;\n}\n\n.sidebar {\n    display: flex;\n    flex-direction: column;\n    gap: 0.5rem;\n    padding: 1rem 0.75rem;\n    margin-right: 1.5rem;\n}\n\n.sidebar-button {\n    display: flex;\n    align-items: center;\n    flex-direction: row-reverse;\n    justify-content: flex-end;\n    gap: 0.5rem;\n    padding-bottom: 0.5rem;\n    border-bottom: var(--separator);\n}\n\n.sidebar-icon {\n    height: 1.5rem;\n    filter: var(--main-filter)\n}\n\n.sidebar-icon:hover{\n    filter: var(--secondary-filter)\n}\n\n.sidebar-icon:active {\n    filter: var(--tertiary-filter)\n}\n\n.dashboard {\n    flex: auto;\n    padding: 0.25rem 2rem;\n}\n\n.task-dashboard {\n    margin-bottom: 3rem;\n}\n\n.task-container1 {\n    display: flex;\n    align-items: center;\n    border-bottom: var(--separator)\n}\n\n#task-title {\n    font-size: 1.2rem;\n    padding: 0.5rem;\n    flex:content;\n    margin: 0.75rem 1rem;\n    border-radius: var(--border-radius);\n}\n\ninput {\n    border: none;\n}\n\n.task-detail-button,\n.task-delete-button {\n    width: 1.5rem;\n    filter: var(--main-filter);\n    margin-right: 2rem;\n}\n\n.task-delete-button {\n    width: 2.2rem;\n}\n\n.task-detail-button:hover,\n.task-delete-button:hover {\n    filter: var(--secondary-filter)\n}\n\n.task-detail-button:active,\n.task-delete-button:active {\n    filter: var(--tertiary-filter)\n}\n\n#task-completed {\n    width: 2rem;\n    height: 2rem;\n}\n\n.task-container2 {\n    display: flex;\n    gap: 1rem;\n    margin-top: 1rem;\n    padding-bottom: 1.5rem;\n    border-bottom: var(--separator);\n}\n\n#task-description {\n    padding: 0.5rem;\n    flex: content;\n    font-size: 1.1rem;\n}\n\n.task-container3 {\n    display: flex;\n    flex-direction: column;\n    justify-content: space-between;\n    align-items: flex-end;\n}\n\n.task-container4 {\n    display: flex;\n    gap: 0.3rem;\n}\n\n.task-container4 > *,\n#task-submit {\n    padding: 0.6rem 0.5rem;\n    border-radius: var(--border-radius);\n    background-color: var(--main);\n    border: none;\n    color: white;\n    font-weight: bold;\n}\n\n.task-container4 > *:hover,\n#task-submit:hover {\n    background-color: var(--secondary);\n}\n\n.task-container4 > *:active,\n#task-submit:active {\n    background-color: var(--tertiary);\n}\n\n#task-submit {\n    border-radius: var(--border-radius);\n    padding: 0.7rem 1.5rem;\n    width: fit-content;\n}\n\n.task-edit-input {\n    border-radius: var(--border-radius);\n}\n","",{version:3,sources:["webpack://./src/style.css"],names:[],mappings:"AAAA;;;;EAIE;AACF;IACI,eAAe;IACf,uGAAuG;IACvG,oBAAoB;IACpB,2GAA2G;IAC3G,mBAAmB;IACnB,0GAA0G;IAC1G,kBAAkB;IAClB,uGAAuG;IACvG,yBAAyB;IACzB,gHAAgH;IAChH,0GAA0G;IAC1G,oBAAoB;IACpB,8BAA8B;EAChC;;AAEF;IACI,SAAS;IACT,UAAU;IACV,kBAAkB;IAClB,oBAAoB;AACxB;;AAEA;IACI,6BAA6B;IAC7B,sCAAsC;IACtC,oBAAoB;IACpB,aAAa;IACb,SAAS;IACT,mBAAmB;AACvB;;AAEA;;;;IAII,gBAAgB;CACnB,YAAY;AACb;;AAEA;IACI,YAAY;IACZ;AACJ;;AAEA;IACI;AACJ;;AAEA;IACI;AACJ;;AAEA;IACI,mCAAmC;IACnC,aAAa;IACb,iBAAiB;AACrB;;AAEA;IACI,aAAa;AACjB;;AAEA;IACI,aAAa;IACb,sBAAsB;IACtB,WAAW;IACX,qBAAqB;IACrB,oBAAoB;AACxB;;AAEA;IACI,aAAa;IACb,mBAAmB;IACnB,2BAA2B;IAC3B,yBAAyB;IACzB,WAAW;IACX,sBAAsB;IACtB,+BAA+B;AACnC;;AAEA;IACI,cAAc;IACd;AACJ;;AAEA;IACI;AACJ;;AAEA;IACI;AACJ;;AAEA;IACI,UAAU;IACV,qBAAqB;AACzB;;AAEA;IACI,mBAAmB;AACvB;;AAEA;IACI,aAAa;IACb,mBAAmB;IACnB;AACJ;;AAEA;IACI,iBAAiB;IACjB,eAAe;IACf,YAAY;IACZ,oBAAoB;IACpB,mCAAmC;AACvC;;AAEA;IACI,YAAY;AAChB;;AAEA;;IAEI,aAAa;IACb,0BAA0B;IAC1B,kBAAkB;AACtB;;AAEA;IACI,aAAa;AACjB;;AAEA;;IAEI;AACJ;;AAEA;;IAEI;AACJ;;AAEA;IACI,WAAW;IACX,YAAY;AAChB;;AAEA;IACI,aAAa;IACb,SAAS;IACT,gBAAgB;IAChB,sBAAsB;IACtB,+BAA+B;AACnC;;AAEA;IACI,eAAe;IACf,aAAa;IACb,iBAAiB;AACrB;;AAEA;IACI,aAAa;IACb,sBAAsB;IACtB,8BAA8B;IAC9B,qBAAqB;AACzB;;AAEA;IACI,aAAa;IACb,WAAW;AACf;;AAEA;;IAEI,sBAAsB;IACtB,mCAAmC;IACnC,6BAA6B;IAC7B,YAAY;IACZ,YAAY;IACZ,iBAAiB;AACrB;;AAEA;;IAEI,kCAAkC;AACtC;;AAEA;;IAEI,iCAAiC;AACrC;;AAEA;IACI,mCAAmC;IACnC,sBAAsB;IACtB,kBAAkB;AACtB;;AAEA;IACI,mCAAmC;AACvC",sourcesContent:["/* @font-face {\n    font-family: para;\n    src: url(Exo2-VariableFont_wght.ttf);\n}\n */\n:root {\n    --main: #8117de;\n    --main-filter: invert(20%) sepia(69%) saturate(6232%) hue-rotate(270deg) brightness(85%) contrast(108%);\n    --secondary: #8e31e0;\n    --secondary-filter: invert(22%) sepia(82%) saturate(4698%) hue-rotate(267deg) brightness(92%) contrast(89%);\n    --tertiary: #a364db;\n    --tertiary-filter: invert(47%) sepia(20%) saturate(2775%) hue-rotate(233deg) brightness(94%) contrast(81%);\n    --inverse: #7ee821;\n    --inverse-filter: invert(81%) sepia(86%) saturate(512%) hue-rotate(32deg) brightness(95%) contrast(92%);\n    --inverse-active: #539618;\n    --inverse-active-filter: invert(62%) sepia(65%) saturate(6830%) hue-rotate(64deg) brightness(101%) contrast(81%);\n    --white-filter: invert(86%) sepia(100%) saturate(1764%) hue-rotate(182deg) brightness(130%) contrast(100%);\n    --border-radius: 7px;\n    --separator: solid 3px #aaaaaa;\n  }\n\n* {\n    margin: 0;\n    padding: 0;\n    font-size: inherit;\n    font-family: inherit;\n}\n\nheader {\n    background-color: var(--main);\n    box-shadow: 0 5px 5px rgb(178 178 178);\n    padding: 1rem 1.5rem;\n    display: flex;\n    gap: 1rem;\n    margin-bottom: 1rem;\n}\n\n.header-button,\n.sidebar-button,\n.task-detail-button,\n.task-delete-button {\n    background: none;\n\tborder: none;\n}\n\n.header-icon {\n    height: 3rem;\n    filter: var(--white-filter)\n}\n\n.header-icon:hover {\n    filter: var(--inverse-filter)\n}\n\n.header-icon:active {\n    filter: var(--inverse-active-filter)\n}\n\n.header-search {\n    border-radius: var(--border-radius);\n    flex: content;\n    margin-left: 2rem;\n}\n\nmain {\n    display: flex;\n}\n\n.sidebar {\n    display: flex;\n    flex-direction: column;\n    gap: 0.5rem;\n    padding: 1rem 0.75rem;\n    margin-right: 1.5rem;\n}\n\n.sidebar-button {\n    display: flex;\n    align-items: center;\n    flex-direction: row-reverse;\n    justify-content: flex-end;\n    gap: 0.5rem;\n    padding-bottom: 0.5rem;\n    border-bottom: var(--separator);\n}\n\n.sidebar-icon {\n    height: 1.5rem;\n    filter: var(--main-filter)\n}\n\n.sidebar-icon:hover{\n    filter: var(--secondary-filter)\n}\n\n.sidebar-icon:active {\n    filter: var(--tertiary-filter)\n}\n\n.dashboard {\n    flex: auto;\n    padding: 0.25rem 2rem;\n}\n\n.task-dashboard {\n    margin-bottom: 3rem;\n}\n\n.task-container1 {\n    display: flex;\n    align-items: center;\n    border-bottom: var(--separator)\n}\n\n#task-title {\n    font-size: 1.2rem;\n    padding: 0.5rem;\n    flex:content;\n    margin: 0.75rem 1rem;\n    border-radius: var(--border-radius);\n}\n\ninput {\n    border: none;\n}\n\n.task-detail-button,\n.task-delete-button {\n    width: 1.5rem;\n    filter: var(--main-filter);\n    margin-right: 2rem;\n}\n\n.task-delete-button {\n    width: 2.2rem;\n}\n\n.task-detail-button:hover,\n.task-delete-button:hover {\n    filter: var(--secondary-filter)\n}\n\n.task-detail-button:active,\n.task-delete-button:active {\n    filter: var(--tertiary-filter)\n}\n\n#task-completed {\n    width: 2rem;\n    height: 2rem;\n}\n\n.task-container2 {\n    display: flex;\n    gap: 1rem;\n    margin-top: 1rem;\n    padding-bottom: 1.5rem;\n    border-bottom: var(--separator);\n}\n\n#task-description {\n    padding: 0.5rem;\n    flex: content;\n    font-size: 1.1rem;\n}\n\n.task-container3 {\n    display: flex;\n    flex-direction: column;\n    justify-content: space-between;\n    align-items: flex-end;\n}\n\n.task-container4 {\n    display: flex;\n    gap: 0.3rem;\n}\n\n.task-container4 > *,\n#task-submit {\n    padding: 0.6rem 0.5rem;\n    border-radius: var(--border-radius);\n    background-color: var(--main);\n    border: none;\n    color: white;\n    font-weight: bold;\n}\n\n.task-container4 > *:hover,\n#task-submit:hover {\n    background-color: var(--secondary);\n}\n\n.task-container4 > *:active,\n#task-submit:active {\n    background-color: var(--tertiary);\n}\n\n#task-submit {\n    border-radius: var(--border-radius);\n    padding: 0.7rem 1.5rem;\n    width: fit-content;\n}\n\n.task-edit-input {\n    border-radius: var(--border-radius);\n}\n"],sourceRoot:""}]);const s=o},352:e=>{e.exports=function(e){var n=[];return n.toString=function(){return this.map((function(n){var t="",r=void 0!==n[5];return n[4]&&(t+="@supports (".concat(n[4],") {")),n[2]&&(t+="@media ".concat(n[2]," {")),r&&(t+="@layer".concat(n[5].length>0?" ".concat(n[5]):""," {")),t+=e(n),r&&(t+="}"),n[2]&&(t+="}"),n[4]&&(t+="}"),t})).join("")},n.i=function(e,t,r,a,i){"string"==typeof e&&(e=[[null,e,void 0]]);var o={};if(r)for(var s=0;s<this.length;s++){var d=this[s][0];null!=d&&(o[d]=!0)}for(var A=0;A<e.length;A++){var c=[].concat(e[A]);r&&o[c[0]]||(void 0!==i&&(void 0===c[5]||(c[1]="@layer".concat(c[5].length>0?" ".concat(c[5]):""," {").concat(c[1],"}")),c[5]=i),t&&(c[2]?(c[1]="@media ".concat(c[2]," {").concat(c[1],"}"),c[2]=t):c[2]=t),a&&(c[4]?(c[1]="@supports (".concat(c[4],") {").concat(c[1],"}"),c[4]=a):c[4]="".concat(a)),n.push(c))}},n}},864:e=>{e.exports=function(e){var n=e[1],t=e[3];if(!t)return n;if("function"==typeof btoa){var r=btoa(unescape(encodeURIComponent(JSON.stringify(t)))),a="sourceMappingURL=data:application/json;charset=utf-8;base64,".concat(r),i="/*# ".concat(a," */"),o=t.sources.map((function(e){return"/*# sourceURL=".concat(t.sourceRoot||"").concat(e," */")}));return[n].concat(o).concat([i]).join("\n")}return[n].join("\n")}},701:e=>{var n=[];function t(e){for(var t=-1,r=0;r<n.length;r++)if(n[r].identifier===e){t=r;break}return t}function r(e,r){for(var i={},o=[],s=0;s<e.length;s++){var d=e[s],A=r.base?d[0]+r.base:d[0],c=i[A]||0,l="".concat(A," ").concat(c);i[A]=c+1;var m=t(l),u={css:d[1],media:d[2],sourceMap:d[3],supports:d[4],layer:d[5]};if(-1!==m)n[m].references++,n[m].updater(u);else{var p=a(u,r);r.byIndex=s,n.splice(s,0,{identifier:l,updater:p,references:1})}o.push(l)}return o}function a(e,n){var t=n.domAPI(n);return t.update(e),function(n){if(n){if(n.css===e.css&&n.media===e.media&&n.sourceMap===e.sourceMap&&n.supports===e.supports&&n.layer===e.layer)return;t.update(e=n)}else t.remove()}}e.exports=function(e,a){var i=r(e=e||[],a=a||{});return function(e){e=e||[];for(var o=0;o<i.length;o++){var s=t(i[o]);n[s].references--}for(var d=r(e,a),A=0;A<i.length;A++){var c=t(i[A]);0===n[c].references&&(n[c].updater(),n.splice(c,1))}i=d}}},80:e=>{var n={};e.exports=function(e,t){var r=function(e){if(void 0===n[e]){var t=document.querySelector(e);if(window.HTMLIFrameElement&&t instanceof window.HTMLIFrameElement)try{t=t.contentDocument.head}catch(e){t=null}n[e]=t}return n[e]}(e);if(!r)throw new Error("Couldn't find a style target. This probably means that the value for the 'insert' parameter is invalid.");r.appendChild(t)}},182:e=>{e.exports=function(e){var n=document.createElement("style");return e.setAttributes(n,e.attributes),e.insert(n,e.options),n}},850:(e,n,t)=>{e.exports=function(e){var n=t.nc;n&&e.setAttribute("nonce",n)}},236:e=>{e.exports=function(e){var n=e.insertStyleElement(e);return{update:function(t){!function(e,n,t){var r="";t.supports&&(r+="@supports (".concat(t.supports,") {")),t.media&&(r+="@media ".concat(t.media," {"));var a=void 0!==t.layer;a&&(r+="@layer".concat(t.layer.length>0?" ".concat(t.layer):""," {")),r+=t.css,a&&(r+="}"),t.media&&(r+="}"),t.supports&&(r+="}");var i=t.sourceMap;i&&"undefined"!=typeof btoa&&(r+="\n/*# sourceMappingURL=data:application/json;base64,".concat(btoa(unescape(encodeURIComponent(JSON.stringify(i))))," */")),n.styleTagTransform(r,e,n.options)}(n,e,t)},remove:function(){!function(e){if(null===e.parentNode)return!1;e.parentNode.removeChild(e)}(n)}}}},213:e=>{e.exports=function(e,n){if(n.styleSheet)n.styleSheet.cssText=e;else{for(;n.firstChild;)n.removeChild(n.firstChild);n.appendChild(document.createTextNode(e))}}}},n={};function t(r){var a=n[r];if(void 0!==a)return a.exports;var i=n[r]={id:r,exports:{}};return e[r](i,i.exports,t),i.exports}t.n=e=>{var n=e&&e.__esModule?()=>e.default:()=>e;return t.d(n,{a:n}),n},t.d=(e,n)=>{for(var r in n)t.o(n,r)&&!t.o(e,r)&&Object.defineProperty(e,r,{enumerable:!0,get:n[r]})},t.o=(e,n)=>Object.prototype.hasOwnProperty.call(e,n),t.nc=void 0,(()=>{var e=t(701),n=t.n(e),r=t(236),a=t.n(r),i=t(80),o=t.n(i),s=t(850),d=t.n(s),A=t(182),c=t.n(A),l=t(213),m=t.n(l),u=t(426),p={};function b(e,n,t,r,a){let i=document.createElement("button");i.className=e,i.id=n,i.textContent=a;let o=document.createElement("img");return o.src=`./img/${t}`,o.className=r,i.appendChild(o),i}function f(e,n){if(null===e){let e=document.createElement("main");e.appendChild(n),content.appendChild(e)}else e.appendChild(n),content.appendChild(e)}p.styleTagTransform=m(),p.setAttributes=d(),p.insert=o().bind(null,"head"),p.domAPI=a(),p.insertStyleElement=c(),n()(u.Z,p),u.Z&&u.Z.locals&&u.Z.locals,function(){let e=document.querySelector("#content"),n=document.createElement("header"),t=b("header-button","sidebar-button","sidebar-close-svgrepo-com.svg","header-icon");n.appendChild(t);let r=b("header-button","home-button","home-svgrepo-com.svg","header-icon");n.appendChild(r);let a=document.createElement("input");a.setAttribute("type","text"),a.className="header-search",a.id="search-bar",n.appendChild(a);let i=b("header-button","search-button","search-svgrepo-com.svg","header-icon");n.appendChild(i);let o=b("header-button","add-task1","plus-svgrepo-com.svg","header-icon");n.appendChild(o),e.appendChild(n)}(),function(){let e=document.querySelector("#content"),n=document.createElement("div");n.className="sidebar";let t=b("sidebar-button","add-task2","plus-svgrepo-com.svg","sidebar-icon","New Task");n.appendChild(t);let r=b("sidebar-button","upcoming","calendar-svgrepo-com.svg","sidebar-icon","Upcoming Tasks");n.appendChild(r);let a=b("sidebar-button","project-dropdown","stack-svgrepo-com.svg","sidebar-icon","Projects");n.appendChild(a);let i=document.createElement("main");i.appendChild(n),e.appendChild(i)}(),document.addEventListener("click",(e=>{(e.target.id.includes("add-task")||e.target.parentElement.id.includes("add-task"))&&(console.log("New task!"),function(){document.querySelector("#content");let e=document.createElement("div");e.className="task-dashboard";let n=document.createElement("div");n.className="task-container1",e.appendChild(n);let t=document.createElement("input");t.setAttribute("type","checkbox"),t.id="task-completed",n.appendChild(t);let r=document.createElement("input");r.setAttribute("type","text"),r.placeholder="Title your task",r.id="task-title",n.appendChild(r);let a=b("task-detail-button","task-detail","down-svgrepo-com.svg","task-icon");n.appendChild(a);let i=b("task-delete-button","task-delete","delete-svgrepo-com.svg","task-icon");n.appendChild(i);let o=document.createElement("div");o.className="task-container2",e.appendChild(o);let s=document.createElement("textarea");s.setAttribute("rows","8"),s.placeholder="Add a description",s.className="task-edit-input",s.id="task-description",o.appendChild(s);let d=document.createElement("div");d.className="task-container3",o.appendChild(d);let A=document.createElement("div");A.className="task-container4",d.appendChild(A);let c=document.createElement("button");c.id="today",c.textContent="Today",A.appendChild(c);let l=document.createElement("button");l.id="tomorrow",l.textContent="Tomorrow",A.appendChild(l);let m=document.createElement("input");m.setAttribute("type","date"),A.appendChild(m);let u=document.createElement("button");u.id="task-submit",u.textContent="Submit",d.appendChild(u),function(e){let n=document.querySelector(".dashboard"),t=document.querySelector("main");if(null===n){let n=document.createElement("div");n.className="dashboard",n.appendChild(e),f(t,n)}else n.appendChild(e),f(t,n)}(e)}())})),document.addEventListener("click",(e=>{let n=document.querySelector(".dashboard");if("task-delete"===e.target.parentElement.id){let t=e.target.parentElement.parentElement.parentElement;n.removeChild(t)}})),document.addEventListener("click",(e=>{!function(e){"task-detail"===e.target.parentElement.id&&(e.target.parentElement.parentElement.nextSibling.style.display="none")}(e),function(e){"task-detail"===e.target.parentElement.id&&(e.target.parentElement.style.cssText="transform: rotate(180deg);transition: transform 1s;")}(e)}))})()})();
//# sourceMappingURL=main.js.map