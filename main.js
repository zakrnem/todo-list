(()=>{"use strict";var e={426:(e,n,t)=>{t.d(n,{Z:()=>s});var r=t(864),a=t.n(r),o=t(352),i=t.n(o)()(a());i.push([e.id,"/* @font-face {\n    font-family: para;\n    src: url(Exo2-VariableFont_wght.ttf);\n}\n */\n:root {\n    --main: #8117de;\n    --main-filter: invert(20%) sepia(69%) saturate(6232%) hue-rotate(270deg) brightness(85%) contrast(108%);\n    --secondary: #8e31e0;\n    --secondary-filter: invert(22%) sepia(82%) saturate(4698%) hue-rotate(267deg) brightness(92%) contrast(89%);\n    --tertiary: #a364db;\n    --tertiary-filter: invert(47%) sepia(20%) saturate(2775%) hue-rotate(233deg) brightness(94%) contrast(81%);\n    --inverse: #7ee821;\n    --inverse-filter: invert(81%) sepia(86%) saturate(512%) hue-rotate(32deg) brightness(95%) contrast(92%);\n    --inverse-active: #539618;\n    --inverse-active-filter: invert(62%) sepia(65%) saturate(6830%) hue-rotate(64deg) brightness(101%) contrast(81%);\n    --white-filter: invert(86%) sepia(100%) saturate(1764%) hue-rotate(182deg) brightness(130%) contrast(100%);\n    --border-radius: 7px;\n    --separator: solid 3px #aaaaaa;\n  }\n\n* {\n    margin: 0;\n    padding: 0;\n    font-size: inherit;\n    font-family: inherit;\n}\n\nheader {\n    background-color: var(--main);\n    box-shadow: 0 5px 5px rgb(178 178 178);\n    padding: 1rem 1.5rem;\n    display: flex;\n    gap: 1rem;\n    margin-bottom: 1rem;\n}\n\n.header-button,\n.sidebar-button,\n.task-detail-button,\n.task-delete-button {\n    background: none;\n\tborder: none;\n}\n\n.header-icon {\n    height: 3rem;\n    filter: var(--white-filter)\n}\n\n.header-icon:hover {\n    filter: var(--inverse-filter)\n}\n\n.header-icon:active {\n    filter: var(--inverse-active-filter)\n}\n\n.header-search {\n    border-radius: var(--border-radius);\n    flex: content;\n    margin-left: 2rem;\n}\n\nmain {\n    display: flex;\n}\n\n.sidebar {\n    display: flex;\n    flex-direction: column;\n    gap: 0.5rem;\n    padding: 1rem 0.75rem;\n    margin-right: 1.5rem;\n}\n\n.sidebar-button {\n    display: flex;\n    align-items: center;\n    flex-direction: row-reverse;\n    justify-content: flex-end;\n    gap: 0.5rem;\n    padding-bottom: 0.5rem;\n    border-bottom: var(--separator);\n}\n\n.sidebar-icon {\n    height: 1.5rem;\n    filter: var(--main-filter)\n}\n\n.sidebar-icon:hover{\n    filter: var(--secondary-filter)\n}\n\n.sidebar-icon:active {\n    filter: var(--tertiary-filter)\n}\n\n.dashboard {\n    flex: auto;\n    padding: 0.25rem 2rem;\n}\n\n.task-dashboard {\n    margin-bottom: 3rem;\n}\n\n.task-container1 {\n    display: flex;\n    align-items: center;\n    border-bottom: var(--separator)\n}\n\n.task-title {\n    font-size: 1.2rem;\n    padding: 0.5rem;\n    flex:content;\n    margin: 0.75rem 1rem;\n    border-radius: var(--border-radius);\n}\n\ninput {\n    border: none;\n}\n\n.task-detail-button,\n.task-delete-button {\n    filter: var(--main-filter);\n        \n}\n\n.task-delete-button {\n    width: 2.2rem;\n}\n\n.task-detail-button {\n    transform: rotate(180deg);\n}\n\n.task-detail-button:hover,\n.task-delete-button:hover {\n    filter: var(--secondary-filter)\n}\n\n.task-detail-button:active,\n.task-delete-button:active {\n    filter: var(--tertiary-filter)\n}\n\n.task-completed {\n    width: 2rem;\n    height: 2rem;\n}\n\n.task-container2 {\n    display: flex;\n    gap: 1rem;\n    margin-top: 1rem;\n    padding-bottom: 1.5rem;\n    border-bottom: var(--separator);\n}\n\n.task-description {\n    padding: 0.5rem;\n    flex: content;\n    font-size: 1.1rem;\n}\n\n.task-container3 {\n    display: flex;\n    flex-direction: column;\n    justify-content: space-between;\n    align-items: flex-end;\n}\n\n.task-container4 {\n    display: flex;\n    gap: 0.3rem;\n}\n\n.task-container4 > *,\n.task-submit {\n    padding: 0.6rem 0.5rem;\n    border-radius: var(--border-radius);\n    background-color: var(--main);\n    border: none;\n    color: white;\n    font-weight: bold;\n}\n\n.task-container4 > *:hover,\n.task-submit:hover {\n    background-color: var(--secondary);\n}\n\n.task-container4 > *:active,\n.task-submit:active {\n    background-color: var(--tertiary);\n}\n\n.task-submit {\n    border-radius: var(--border-radius);\n    padding: 0.7rem 1.5rem;\n    width: fit-content;\n}\n\n.task-edit-input {\n    border-radius: var(--border-radius);\n}\n","",{version:3,sources:["webpack://./src/style.css"],names:[],mappings:"AAAA;;;;EAIE;AACF;IACI,eAAe;IACf,uGAAuG;IACvG,oBAAoB;IACpB,2GAA2G;IAC3G,mBAAmB;IACnB,0GAA0G;IAC1G,kBAAkB;IAClB,uGAAuG;IACvG,yBAAyB;IACzB,gHAAgH;IAChH,0GAA0G;IAC1G,oBAAoB;IACpB,8BAA8B;EAChC;;AAEF;IACI,SAAS;IACT,UAAU;IACV,kBAAkB;IAClB,oBAAoB;AACxB;;AAEA;IACI,6BAA6B;IAC7B,sCAAsC;IACtC,oBAAoB;IACpB,aAAa;IACb,SAAS;IACT,mBAAmB;AACvB;;AAEA;;;;IAII,gBAAgB;CACnB,YAAY;AACb;;AAEA;IACI,YAAY;IACZ;AACJ;;AAEA;IACI;AACJ;;AAEA;IACI;AACJ;;AAEA;IACI,mCAAmC;IACnC,aAAa;IACb,iBAAiB;AACrB;;AAEA;IACI,aAAa;AACjB;;AAEA;IACI,aAAa;IACb,sBAAsB;IACtB,WAAW;IACX,qBAAqB;IACrB,oBAAoB;AACxB;;AAEA;IACI,aAAa;IACb,mBAAmB;IACnB,2BAA2B;IAC3B,yBAAyB;IACzB,WAAW;IACX,sBAAsB;IACtB,+BAA+B;AACnC;;AAEA;IACI,cAAc;IACd;AACJ;;AAEA;IACI;AACJ;;AAEA;IACI;AACJ;;AAEA;IACI,UAAU;IACV,qBAAqB;AACzB;;AAEA;IACI,mBAAmB;AACvB;;AAEA;IACI,aAAa;IACb,mBAAmB;IACnB;AACJ;;AAEA;IACI,iBAAiB;IACjB,eAAe;IACf,YAAY;IACZ,oBAAoB;IACpB,mCAAmC;AACvC;;AAEA;IACI,YAAY;AAChB;;AAEA;;IAEI,0BAA0B;;AAE9B;;AAEA;IACI,aAAa;AACjB;;AAEA;IACI,yBAAyB;AAC7B;;AAEA;;IAEI;AACJ;;AAEA;;IAEI;AACJ;;AAEA;IACI,WAAW;IACX,YAAY;AAChB;;AAEA;IACI,aAAa;IACb,SAAS;IACT,gBAAgB;IAChB,sBAAsB;IACtB,+BAA+B;AACnC;;AAEA;IACI,eAAe;IACf,aAAa;IACb,iBAAiB;AACrB;;AAEA;IACI,aAAa;IACb,sBAAsB;IACtB,8BAA8B;IAC9B,qBAAqB;AACzB;;AAEA;IACI,aAAa;IACb,WAAW;AACf;;AAEA;;IAEI,sBAAsB;IACtB,mCAAmC;IACnC,6BAA6B;IAC7B,YAAY;IACZ,YAAY;IACZ,iBAAiB;AACrB;;AAEA;;IAEI,kCAAkC;AACtC;;AAEA;;IAEI,iCAAiC;AACrC;;AAEA;IACI,mCAAmC;IACnC,sBAAsB;IACtB,kBAAkB;AACtB;;AAEA;IACI,mCAAmC;AACvC",sourcesContent:["/* @font-face {\n    font-family: para;\n    src: url(Exo2-VariableFont_wght.ttf);\n}\n */\n:root {\n    --main: #8117de;\n    --main-filter: invert(20%) sepia(69%) saturate(6232%) hue-rotate(270deg) brightness(85%) contrast(108%);\n    --secondary: #8e31e0;\n    --secondary-filter: invert(22%) sepia(82%) saturate(4698%) hue-rotate(267deg) brightness(92%) contrast(89%);\n    --tertiary: #a364db;\n    --tertiary-filter: invert(47%) sepia(20%) saturate(2775%) hue-rotate(233deg) brightness(94%) contrast(81%);\n    --inverse: #7ee821;\n    --inverse-filter: invert(81%) sepia(86%) saturate(512%) hue-rotate(32deg) brightness(95%) contrast(92%);\n    --inverse-active: #539618;\n    --inverse-active-filter: invert(62%) sepia(65%) saturate(6830%) hue-rotate(64deg) brightness(101%) contrast(81%);\n    --white-filter: invert(86%) sepia(100%) saturate(1764%) hue-rotate(182deg) brightness(130%) contrast(100%);\n    --border-radius: 7px;\n    --separator: solid 3px #aaaaaa;\n  }\n\n* {\n    margin: 0;\n    padding: 0;\n    font-size: inherit;\n    font-family: inherit;\n}\n\nheader {\n    background-color: var(--main);\n    box-shadow: 0 5px 5px rgb(178 178 178);\n    padding: 1rem 1.5rem;\n    display: flex;\n    gap: 1rem;\n    margin-bottom: 1rem;\n}\n\n.header-button,\n.sidebar-button,\n.task-detail-button,\n.task-delete-button {\n    background: none;\n\tborder: none;\n}\n\n.header-icon {\n    height: 3rem;\n    filter: var(--white-filter)\n}\n\n.header-icon:hover {\n    filter: var(--inverse-filter)\n}\n\n.header-icon:active {\n    filter: var(--inverse-active-filter)\n}\n\n.header-search {\n    border-radius: var(--border-radius);\n    flex: content;\n    margin-left: 2rem;\n}\n\nmain {\n    display: flex;\n}\n\n.sidebar {\n    display: flex;\n    flex-direction: column;\n    gap: 0.5rem;\n    padding: 1rem 0.75rem;\n    margin-right: 1.5rem;\n}\n\n.sidebar-button {\n    display: flex;\n    align-items: center;\n    flex-direction: row-reverse;\n    justify-content: flex-end;\n    gap: 0.5rem;\n    padding-bottom: 0.5rem;\n    border-bottom: var(--separator);\n}\n\n.sidebar-icon {\n    height: 1.5rem;\n    filter: var(--main-filter)\n}\n\n.sidebar-icon:hover{\n    filter: var(--secondary-filter)\n}\n\n.sidebar-icon:active {\n    filter: var(--tertiary-filter)\n}\n\n.dashboard {\n    flex: auto;\n    padding: 0.25rem 2rem;\n}\n\n.task-dashboard {\n    margin-bottom: 3rem;\n}\n\n.task-container1 {\n    display: flex;\n    align-items: center;\n    border-bottom: var(--separator)\n}\n\n.task-title {\n    font-size: 1.2rem;\n    padding: 0.5rem;\n    flex:content;\n    margin: 0.75rem 1rem;\n    border-radius: var(--border-radius);\n}\n\ninput {\n    border: none;\n}\n\n.task-detail-button,\n.task-delete-button {\n    filter: var(--main-filter);\n        \n}\n\n.task-delete-button {\n    width: 2.2rem;\n}\n\n.task-detail-button {\n    transform: rotate(180deg);\n}\n\n.task-detail-button:hover,\n.task-delete-button:hover {\n    filter: var(--secondary-filter)\n}\n\n.task-detail-button:active,\n.task-delete-button:active {\n    filter: var(--tertiary-filter)\n}\n\n.task-completed {\n    width: 2rem;\n    height: 2rem;\n}\n\n.task-container2 {\n    display: flex;\n    gap: 1rem;\n    margin-top: 1rem;\n    padding-bottom: 1.5rem;\n    border-bottom: var(--separator);\n}\n\n.task-description {\n    padding: 0.5rem;\n    flex: content;\n    font-size: 1.1rem;\n}\n\n.task-container3 {\n    display: flex;\n    flex-direction: column;\n    justify-content: space-between;\n    align-items: flex-end;\n}\n\n.task-container4 {\n    display: flex;\n    gap: 0.3rem;\n}\n\n.task-container4 > *,\n.task-submit {\n    padding: 0.6rem 0.5rem;\n    border-radius: var(--border-radius);\n    background-color: var(--main);\n    border: none;\n    color: white;\n    font-weight: bold;\n}\n\n.task-container4 > *:hover,\n.task-submit:hover {\n    background-color: var(--secondary);\n}\n\n.task-container4 > *:active,\n.task-submit:active {\n    background-color: var(--tertiary);\n}\n\n.task-submit {\n    border-radius: var(--border-radius);\n    padding: 0.7rem 1.5rem;\n    width: fit-content;\n}\n\n.task-edit-input {\n    border-radius: var(--border-radius);\n}\n"],sourceRoot:""}]);const s=i},352:e=>{e.exports=function(e){var n=[];return n.toString=function(){return this.map((function(n){var t="",r=void 0!==n[5];return n[4]&&(t+="@supports (".concat(n[4],") {")),n[2]&&(t+="@media ".concat(n[2]," {")),r&&(t+="@layer".concat(n[5].length>0?" ".concat(n[5]):""," {")),t+=e(n),r&&(t+="}"),n[2]&&(t+="}"),n[4]&&(t+="}"),t})).join("")},n.i=function(e,t,r,a,o){"string"==typeof e&&(e=[[null,e,void 0]]);var i={};if(r)for(var s=0;s<this.length;s++){var d=this[s][0];null!=d&&(i[d]=!0)}for(var A=0;A<e.length;A++){var c=[].concat(e[A]);r&&i[c[0]]||(void 0!==o&&(void 0===c[5]||(c[1]="@layer".concat(c[5].length>0?" ".concat(c[5]):""," {").concat(c[1],"}")),c[5]=o),t&&(c[2]?(c[1]="@media ".concat(c[2]," {").concat(c[1],"}"),c[2]=t):c[2]=t),a&&(c[4]?(c[1]="@supports (".concat(c[4],") {").concat(c[1],"}"),c[4]=a):c[4]="".concat(a)),n.push(c))}},n}},864:e=>{e.exports=function(e){var n=e[1],t=e[3];if(!t)return n;if("function"==typeof btoa){var r=btoa(unescape(encodeURIComponent(JSON.stringify(t)))),a="sourceMappingURL=data:application/json;charset=utf-8;base64,".concat(r),o="/*# ".concat(a," */"),i=t.sources.map((function(e){return"/*# sourceURL=".concat(t.sourceRoot||"").concat(e," */")}));return[n].concat(i).concat([o]).join("\n")}return[n].join("\n")}},701:e=>{var n=[];function t(e){for(var t=-1,r=0;r<n.length;r++)if(n[r].identifier===e){t=r;break}return t}function r(e,r){for(var o={},i=[],s=0;s<e.length;s++){var d=e[s],A=r.base?d[0]+r.base:d[0],c=o[A]||0,l="".concat(A," ").concat(c);o[A]=c+1;var u=t(l),m={css:d[1],media:d[2],sourceMap:d[3],supports:d[4],layer:d[5]};if(-1!==u)n[u].references++,n[u].updater(m);else{var p=a(m,r);r.byIndex=s,n.splice(s,0,{identifier:l,updater:p,references:1})}i.push(l)}return i}function a(e,n){var t=n.domAPI(n);return t.update(e),function(n){if(n){if(n.css===e.css&&n.media===e.media&&n.sourceMap===e.sourceMap&&n.supports===e.supports&&n.layer===e.layer)return;t.update(e=n)}else t.remove()}}e.exports=function(e,a){var o=r(e=e||[],a=a||{});return function(e){e=e||[];for(var i=0;i<o.length;i++){var s=t(o[i]);n[s].references--}for(var d=r(e,a),A=0;A<o.length;A++){var c=t(o[A]);0===n[c].references&&(n[c].updater(),n.splice(c,1))}o=d}}},80:e=>{var n={};e.exports=function(e,t){var r=function(e){if(void 0===n[e]){var t=document.querySelector(e);if(window.HTMLIFrameElement&&t instanceof window.HTMLIFrameElement)try{t=t.contentDocument.head}catch(e){t=null}n[e]=t}return n[e]}(e);if(!r)throw new Error("Couldn't find a style target. This probably means that the value for the 'insert' parameter is invalid.");r.appendChild(t)}},182:e=>{e.exports=function(e){var n=document.createElement("style");return e.setAttributes(n,e.attributes),e.insert(n,e.options),n}},850:(e,n,t)=>{e.exports=function(e){var n=t.nc;n&&e.setAttribute("nonce",n)}},236:e=>{e.exports=function(e){var n=e.insertStyleElement(e);return{update:function(t){!function(e,n,t){var r="";t.supports&&(r+="@supports (".concat(t.supports,") {")),t.media&&(r+="@media ".concat(t.media," {"));var a=void 0!==t.layer;a&&(r+="@layer".concat(t.layer.length>0?" ".concat(t.layer):""," {")),r+=t.css,a&&(r+="}"),t.media&&(r+="}"),t.supports&&(r+="}");var o=t.sourceMap;o&&"undefined"!=typeof btoa&&(r+="\n/*# sourceMappingURL=data:application/json;base64,".concat(btoa(unescape(encodeURIComponent(JSON.stringify(o))))," */")),n.styleTagTransform(r,e,n.options)}(n,e,t)},remove:function(){!function(e){if(null===e.parentNode)return!1;e.parentNode.removeChild(e)}(n)}}}},213:e=>{e.exports=function(e,n){if(n.styleSheet)n.styleSheet.cssText=e;else{for(;n.firstChild;)n.removeChild(n.firstChild);n.appendChild(document.createTextNode(e))}}}},n={};function t(r){var a=n[r];if(void 0!==a)return a.exports;var o=n[r]={id:r,exports:{}};return e[r](o,o.exports,t),o.exports}t.n=e=>{var n=e&&e.__esModule?()=>e.default:()=>e;return t.d(n,{a:n}),n},t.d=(e,n)=>{for(var r in n)t.o(n,r)&&!t.o(e,r)&&Object.defineProperty(e,r,{enumerable:!0,get:n[r]})},t.o=(e,n)=>Object.prototype.hasOwnProperty.call(e,n),t.nc=void 0,(()=>{var e=t(701),n=t.n(e),r=t(236),a=t.n(r),o=t(80),i=t.n(o),s=t(850),d=t.n(s),A=t(182),c=t.n(A),l=t(213),u=t.n(l),m=t(426),p={};function f(e,n,t,r,a){let o=document.createElement("button");o.className=e,o.id=n,o.textContent=a;let i=document.createElement("img");return i.src=`./img/${t}`,i.className=r,o.appendChild(i),o}function b(e){const n=["task-title","task-description","task-completed","task-submit","Today","Tomorrow","date"];function t(t){n.includes(t.target.className)&&function(e){const n=[];for(let t=e;t>0;t--){let e=document.getElementById(`task-title${t}`),r=document.getElementById(`task-description${t}`),a=document.getElementById(`task-completed${t}`),o=document.getElementById(`date${t}`);if(null!=e){const i={index:t,title:e.value,description:r.value,date:o.value,completed:a.checked};n.push(i)}}console.log(n)}(e)}document.addEventListener("input",(e=>{t(e)})),document.addEventListener("click",(e=>{t(e),function(e){(n.includes(e.target.textContent)||n.includes(e.target.type))&&function(e){const n=new Date;let t={month:n.getMonth()+1,date:n.getDate(),year:n.getFullYear()},r=t;switch(!0){case"Today"===e.target.textContent:console.log(r);break;case"Tomorrow"===e.target.textContent:r={month:t.month,date:t.date+1,year:t.year},console.log(r);break;case"date"===e.target.type:let n=e.target.value.split("-");r={month:parseInt(n[1]),date:parseInt(n[2]),year:parseInt(n[0])},console.log(r)}}(e)}(e)}))}function C(e,n){if(null===e){let e=document.createElement("main");e.appendChild(n),content.appendChild(e)}else e.appendChild(n),content.appendChild(e)}p.styleTagTransform=u(),p.setAttributes=d(),p.insert=i().bind(null,"head"),p.domAPI=a(),p.insertStyleElement=c(),n()(m.Z,p),m.Z&&m.Z.locals&&m.Z.locals,function(){let e=document.querySelector("#content"),n=document.createElement("header"),t=f("header-button","sidebar-button","sidebar-close-svgrepo-com.svg","header-icon");n.appendChild(t);let r=f("header-button","home-button","home-svgrepo-com.svg","header-icon");n.appendChild(r);let a=document.createElement("input");a.setAttribute("type","text"),a.className="header-search",a.id="search-bar",n.appendChild(a);let o=f("header-button","search-button","search-svgrepo-com.svg","header-icon");n.appendChild(o);let i=f("header-button","add-task1","plus-svgrepo-com.svg","header-icon");n.appendChild(i),e.appendChild(n)}(),function(){let e=document.querySelector("#content"),n=document.createElement("div");n.className="sidebar";let t=f("sidebar-button","add-task2","plus-svgrepo-com.svg","sidebar-icon","New Task");n.appendChild(t);let r=f("sidebar-button","upcoming","calendar-svgrepo-com.svg","sidebar-icon","Upcoming Tasks");n.appendChild(r);let a=f("sidebar-button","project-dropdown","stack-svgrepo-com.svg","sidebar-icon","Projects");n.appendChild(a);let o=document.createElement("main");o.appendChild(n),e.appendChild(o)}(),function(){let e=0;document.addEventListener("click",(n=>{(n.target.id.includes("add-task")||n.target.parentElement.id.includes("add-task"))&&(e+=1,function(e){document.querySelector("#content");let n=document.createElement("div");n.className="task-dashboard";let t=document.createElement("div");t.className="task-container1",n.appendChild(t);let r=document.createElement("input");r.setAttribute("type","checkbox"),r.id=`task-completed${e}`,r.className="task-completed",t.appendChild(r);let a=document.createElement("input");a.setAttribute("type","text"),a.placeholder="Title your task",a.id=`task-title${e}`,a.className="task-title",t.appendChild(a);let o=f("task-detail-button",`task-detail${e}`,"down-svgrepo-com.svg","task-icon");t.appendChild(o);let i=f("task-delete-button",`task-delete${e}`,"delete-svgrepo-com.svg","task-icon");t.appendChild(i);let s=document.createElement("div");s.className="task-container2",n.appendChild(s);let d=document.createElement("textarea");d.setAttribute("rows","8"),d.placeholder="Add a description",d.className="task-description",d.id=`task-description${e}`,s.appendChild(d);let A=document.createElement("div");A.className="task-container3",s.appendChild(A);let c=document.createElement("div");c.className="task-container4",A.appendChild(c);let l=document.createElement("button");l.id=`today${e}`,l.textContent="Today",c.appendChild(l);let u=document.createElement("button");u.id=`tomorrow${e}`,u.textContent="Tomorrow",c.appendChild(u);let m=document.createElement("input");m.setAttribute("type","date"),m.id=`date${e}`,c.appendChild(m);let p=document.createElement("button");p.id=`task-submit${e}`,p.textContent="Submit",p.className="task-submit",A.appendChild(p),function(e){let n=document.querySelector(".dashboard"),t=document.querySelector("main");if(null===n){let n=document.createElement("div");n.className="dashboard",n.appendChild(e),C(t,n)}else n.appendChild(e),C(t,n)}(n)}(e),b(e))}))}(),function(){let e;document.addEventListener("click",(n=>{let t=document.querySelector(".dashboard");if(n.target.parentElement.id.includes("task-delete")){let r=n.target.parentElement.parentElement.parentElement;t.removeChild(r);const a=n.target.parentElement.id;e=parseInt(a.replace(/\D/g,""))}}))}(),document.addEventListener("click",(e=>{var n,t,r;n=e.target.parentElement.id,t=e.target.parentElement.parentElement.nextSibling,r=e.target.parentElement,n.includes("task-detail")&&!r.outerHTML.includes("rotate")?(t.style.display="none",r.style.cssText="transform-box: fill-box; transform-origin: center;transform: rotate(0deg);transition: transform 0.7s;"):n.includes("task-detail")&&r.outerHTML.includes("rotate")&&(t.style.display="flex",r.style.cssText="")})),b()})()})();
//# sourceMappingURL=main.js.map