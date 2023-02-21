(()=>{"use strict";var e={426:(e,t,n)=>{n.d(t,{Z:()=>s});var r=n(864),a=n.n(r),i=n(352),o=n.n(i)()(a());o.push([e.id,"/* @font-face {\n    font-family: para;\n    src: url(Exo2-VariableFont_wght.ttf);\n}\n */\n:root {\n    --main: #8117de;\n    --main-filter: invert(20%) sepia(69%) saturate(6232%) hue-rotate(270deg) brightness(85%) contrast(108%);\n    --secondary: #8e31e0;\n    --secondary-filter: invert(22%) sepia(82%) saturate(4698%) hue-rotate(267deg) brightness(92%) contrast(89%);\n    --tertiary: #a364db;\n    --tertiary-filter: invert(47%) sepia(20%) saturate(2775%) hue-rotate(233deg) brightness(94%) contrast(81%);\n    --inverse: #7ee821;\n    --inverse-filter: invert(81%) sepia(86%) saturate(512%) hue-rotate(32deg) brightness(95%) contrast(92%);\n    --inverse-active: #539618;\n    --inverse-active-filter: invert(62%) sepia(65%) saturate(6830%) hue-rotate(64deg) brightness(101%) contrast(81%);\n    --white-filter: invert(86%) sepia(100%) saturate(1764%) hue-rotate(182deg) brightness(130%) contrast(100%);\n    --border-radius: 7px;\n    --separator: solid 3px #aaaaaa;\n  }\n\n* {\n    margin: 0;\n    padding: 0;\n    font-size: inherit;\n    font-family: inherit;\n}\n\nheader {\n    background-color: var(--main);\n    box-shadow: 0 5px 5px rgb(178 178 178);\n    padding: 1rem 1.5rem;\n    display: flex;\n    gap: 1rem;\n    margin-bottom: 1rem;\n}\n\n.header-button,\n.sidebar-button,\n.task-detail-button,\n.task-delete-button {\n    background: none;\n\tborder: none;\n}\n\n.header-icon {\n    height: 3rem;\n    filter: var(--white-filter)\n}\n\n.header-icon:hover {\n    filter: var(--inverse-filter)\n}\n\n.header-icon:active {\n    filter: var(--inverse-active-filter)\n}\n\n.header-search {\n    border-radius: var(--border-radius);\n    flex: content;\n    margin-left: 2rem;\n}\n\nmain {\n    display: flex;\n}\n\n.sidebar {\n    display: flex;\n    flex-direction: column;\n    gap: 0.5rem;\n    padding: 1rem 0.75rem;\n    margin-right: 1.5rem;\n}\n\n.sidebar-button {\n    display: flex;\n    align-items: center;\n    flex-direction: row-reverse;\n    justify-content: flex-end;\n    gap: 0.5rem;\n    padding-bottom: 0.5rem;\n    border-bottom: var(--separator);\n}\n\n.sidebar-icon {\n    height: 1.5rem;\n    filter: var(--main-filter)\n}\n\n.sidebar-icon:hover{\n    filter: var(--secondary-filter)\n}\n\n.sidebar-icon:active {\n    filter: var(--tertiary-filter)\n}\n\n.dashboard {\n    flex: auto;\n    padding: 0.25rem 2rem;\n}\n\n.task-dashboard {\n    margin-bottom: 3rem;\n}\n\n.task-container1 {\n    display: flex;\n    align-items: center;\n    border-bottom: var(--separator)\n}\n\n.task-title {\n    font-size: 1.2rem;\n    padding: 0.5rem;\n    flex:content;\n    margin: 0.75rem 1rem;\n    border-radius: var(--border-radius);\n}\n\ninput {\n    border: none;\n}\n\n.task-detail-button,\n.task-delete-button {\n    filter: var(--main-filter);\n        \n}\n\n.task-delete-button {\n    width: 2.2rem;\n}\n\n.task-detail-button {\n    transform: rotate(180deg);\n}\n\n.task-detail-button:hover,\n.task-delete-button:hover {\n    filter: var(--secondary-filter)\n}\n\n.task-detail-button:active,\n.task-delete-button:active {\n    filter: var(--tertiary-filter)\n}\n\n.task-completed {\n    width: 2rem;\n    height: 2rem;\n}\n\n.task-container2 {\n    display: flex;\n    gap: 1rem;\n    margin-top: 1rem;\n    padding-bottom: 1.5rem;\n    border-bottom: var(--separator);\n}\n\n.task-description {\n    padding: 0.5rem;\n    flex: content;\n    font-size: 1.1rem;\n}\n\n.task-container3 {\n    display: flex;\n    flex-direction: column;\n    justify-content: space-between;\n    align-items: flex-end;\n}\n\n.task-container4 {\n    display: flex;\n    gap: 0.3rem;\n}\n\n.task-container4 > *,\n.task-submit {\n    padding: 0.6rem 0.5rem;\n    border-radius: var(--border-radius);\n    background-color: var(--main);\n    border: none;\n    color: white;\n    font-weight: bold;\n}\n\n.task-container4 > *:hover,\n.task-submit:hover {\n    background-color: var(--secondary);\n}\n\n.task-container4 > *:active,\n.task-submit:active {\n    background-color: var(--tertiary);\n}\n\n.task-submit {\n    border-radius: var(--border-radius);\n    padding: 0.7rem 1.5rem;\n    width: fit-content;\n}\n\n.task-edit-input {\n    border-radius: var(--border-radius);\n}\n","",{version:3,sources:["webpack://./src/style.css"],names:[],mappings:"AAAA;;;;EAIE;AACF;IACI,eAAe;IACf,uGAAuG;IACvG,oBAAoB;IACpB,2GAA2G;IAC3G,mBAAmB;IACnB,0GAA0G;IAC1G,kBAAkB;IAClB,uGAAuG;IACvG,yBAAyB;IACzB,gHAAgH;IAChH,0GAA0G;IAC1G,oBAAoB;IACpB,8BAA8B;EAChC;;AAEF;IACI,SAAS;IACT,UAAU;IACV,kBAAkB;IAClB,oBAAoB;AACxB;;AAEA;IACI,6BAA6B;IAC7B,sCAAsC;IACtC,oBAAoB;IACpB,aAAa;IACb,SAAS;IACT,mBAAmB;AACvB;;AAEA;;;;IAII,gBAAgB;CACnB,YAAY;AACb;;AAEA;IACI,YAAY;IACZ;AACJ;;AAEA;IACI;AACJ;;AAEA;IACI;AACJ;;AAEA;IACI,mCAAmC;IACnC,aAAa;IACb,iBAAiB;AACrB;;AAEA;IACI,aAAa;AACjB;;AAEA;IACI,aAAa;IACb,sBAAsB;IACtB,WAAW;IACX,qBAAqB;IACrB,oBAAoB;AACxB;;AAEA;IACI,aAAa;IACb,mBAAmB;IACnB,2BAA2B;IAC3B,yBAAyB;IACzB,WAAW;IACX,sBAAsB;IACtB,+BAA+B;AACnC;;AAEA;IACI,cAAc;IACd;AACJ;;AAEA;IACI;AACJ;;AAEA;IACI;AACJ;;AAEA;IACI,UAAU;IACV,qBAAqB;AACzB;;AAEA;IACI,mBAAmB;AACvB;;AAEA;IACI,aAAa;IACb,mBAAmB;IACnB;AACJ;;AAEA;IACI,iBAAiB;IACjB,eAAe;IACf,YAAY;IACZ,oBAAoB;IACpB,mCAAmC;AACvC;;AAEA;IACI,YAAY;AAChB;;AAEA;;IAEI,0BAA0B;;AAE9B;;AAEA;IACI,aAAa;AACjB;;AAEA;IACI,yBAAyB;AAC7B;;AAEA;;IAEI;AACJ;;AAEA;;IAEI;AACJ;;AAEA;IACI,WAAW;IACX,YAAY;AAChB;;AAEA;IACI,aAAa;IACb,SAAS;IACT,gBAAgB;IAChB,sBAAsB;IACtB,+BAA+B;AACnC;;AAEA;IACI,eAAe;IACf,aAAa;IACb,iBAAiB;AACrB;;AAEA;IACI,aAAa;IACb,sBAAsB;IACtB,8BAA8B;IAC9B,qBAAqB;AACzB;;AAEA;IACI,aAAa;IACb,WAAW;AACf;;AAEA;;IAEI,sBAAsB;IACtB,mCAAmC;IACnC,6BAA6B;IAC7B,YAAY;IACZ,YAAY;IACZ,iBAAiB;AACrB;;AAEA;;IAEI,kCAAkC;AACtC;;AAEA;;IAEI,iCAAiC;AACrC;;AAEA;IACI,mCAAmC;IACnC,sBAAsB;IACtB,kBAAkB;AACtB;;AAEA;IACI,mCAAmC;AACvC",sourcesContent:["/* @font-face {\n    font-family: para;\n    src: url(Exo2-VariableFont_wght.ttf);\n}\n */\n:root {\n    --main: #8117de;\n    --main-filter: invert(20%) sepia(69%) saturate(6232%) hue-rotate(270deg) brightness(85%) contrast(108%);\n    --secondary: #8e31e0;\n    --secondary-filter: invert(22%) sepia(82%) saturate(4698%) hue-rotate(267deg) brightness(92%) contrast(89%);\n    --tertiary: #a364db;\n    --tertiary-filter: invert(47%) sepia(20%) saturate(2775%) hue-rotate(233deg) brightness(94%) contrast(81%);\n    --inverse: #7ee821;\n    --inverse-filter: invert(81%) sepia(86%) saturate(512%) hue-rotate(32deg) brightness(95%) contrast(92%);\n    --inverse-active: #539618;\n    --inverse-active-filter: invert(62%) sepia(65%) saturate(6830%) hue-rotate(64deg) brightness(101%) contrast(81%);\n    --white-filter: invert(86%) sepia(100%) saturate(1764%) hue-rotate(182deg) brightness(130%) contrast(100%);\n    --border-radius: 7px;\n    --separator: solid 3px #aaaaaa;\n  }\n\n* {\n    margin: 0;\n    padding: 0;\n    font-size: inherit;\n    font-family: inherit;\n}\n\nheader {\n    background-color: var(--main);\n    box-shadow: 0 5px 5px rgb(178 178 178);\n    padding: 1rem 1.5rem;\n    display: flex;\n    gap: 1rem;\n    margin-bottom: 1rem;\n}\n\n.header-button,\n.sidebar-button,\n.task-detail-button,\n.task-delete-button {\n    background: none;\n\tborder: none;\n}\n\n.header-icon {\n    height: 3rem;\n    filter: var(--white-filter)\n}\n\n.header-icon:hover {\n    filter: var(--inverse-filter)\n}\n\n.header-icon:active {\n    filter: var(--inverse-active-filter)\n}\n\n.header-search {\n    border-radius: var(--border-radius);\n    flex: content;\n    margin-left: 2rem;\n}\n\nmain {\n    display: flex;\n}\n\n.sidebar {\n    display: flex;\n    flex-direction: column;\n    gap: 0.5rem;\n    padding: 1rem 0.75rem;\n    margin-right: 1.5rem;\n}\n\n.sidebar-button {\n    display: flex;\n    align-items: center;\n    flex-direction: row-reverse;\n    justify-content: flex-end;\n    gap: 0.5rem;\n    padding-bottom: 0.5rem;\n    border-bottom: var(--separator);\n}\n\n.sidebar-icon {\n    height: 1.5rem;\n    filter: var(--main-filter)\n}\n\n.sidebar-icon:hover{\n    filter: var(--secondary-filter)\n}\n\n.sidebar-icon:active {\n    filter: var(--tertiary-filter)\n}\n\n.dashboard {\n    flex: auto;\n    padding: 0.25rem 2rem;\n}\n\n.task-dashboard {\n    margin-bottom: 3rem;\n}\n\n.task-container1 {\n    display: flex;\n    align-items: center;\n    border-bottom: var(--separator)\n}\n\n.task-title {\n    font-size: 1.2rem;\n    padding: 0.5rem;\n    flex:content;\n    margin: 0.75rem 1rem;\n    border-radius: var(--border-radius);\n}\n\ninput {\n    border: none;\n}\n\n.task-detail-button,\n.task-delete-button {\n    filter: var(--main-filter);\n        \n}\n\n.task-delete-button {\n    width: 2.2rem;\n}\n\n.task-detail-button {\n    transform: rotate(180deg);\n}\n\n.task-detail-button:hover,\n.task-delete-button:hover {\n    filter: var(--secondary-filter)\n}\n\n.task-detail-button:active,\n.task-delete-button:active {\n    filter: var(--tertiary-filter)\n}\n\n.task-completed {\n    width: 2rem;\n    height: 2rem;\n}\n\n.task-container2 {\n    display: flex;\n    gap: 1rem;\n    margin-top: 1rem;\n    padding-bottom: 1.5rem;\n    border-bottom: var(--separator);\n}\n\n.task-description {\n    padding: 0.5rem;\n    flex: content;\n    font-size: 1.1rem;\n}\n\n.task-container3 {\n    display: flex;\n    flex-direction: column;\n    justify-content: space-between;\n    align-items: flex-end;\n}\n\n.task-container4 {\n    display: flex;\n    gap: 0.3rem;\n}\n\n.task-container4 > *,\n.task-submit {\n    padding: 0.6rem 0.5rem;\n    border-radius: var(--border-radius);\n    background-color: var(--main);\n    border: none;\n    color: white;\n    font-weight: bold;\n}\n\n.task-container4 > *:hover,\n.task-submit:hover {\n    background-color: var(--secondary);\n}\n\n.task-container4 > *:active,\n.task-submit:active {\n    background-color: var(--tertiary);\n}\n\n.task-submit {\n    border-radius: var(--border-radius);\n    padding: 0.7rem 1.5rem;\n    width: fit-content;\n}\n\n.task-edit-input {\n    border-radius: var(--border-radius);\n}\n"],sourceRoot:""}]);const s=o},352:e=>{e.exports=function(e){var t=[];return t.toString=function(){return this.map((function(t){var n="",r=void 0!==t[5];return t[4]&&(n+="@supports (".concat(t[4],") {")),t[2]&&(n+="@media ".concat(t[2]," {")),r&&(n+="@layer".concat(t[5].length>0?" ".concat(t[5]):""," {")),n+=e(t),r&&(n+="}"),t[2]&&(n+="}"),t[4]&&(n+="}"),n})).join("")},t.i=function(e,n,r,a,i){"string"==typeof e&&(e=[[null,e,void 0]]);var o={};if(r)for(var s=0;s<this.length;s++){var d=this[s][0];null!=d&&(o[d]=!0)}for(var c=0;c<e.length;c++){var l=[].concat(e[c]);r&&o[l[0]]||(void 0!==i&&(void 0===l[5]||(l[1]="@layer".concat(l[5].length>0?" ".concat(l[5]):""," {").concat(l[1],"}")),l[5]=i),n&&(l[2]?(l[1]="@media ".concat(l[2]," {").concat(l[1],"}"),l[2]=n):l[2]=n),a&&(l[4]?(l[1]="@supports (".concat(l[4],") {").concat(l[1],"}"),l[4]=a):l[4]="".concat(a)),t.push(l))}},t}},864:e=>{e.exports=function(e){var t=e[1],n=e[3];if(!n)return t;if("function"==typeof btoa){var r=btoa(unescape(encodeURIComponent(JSON.stringify(n)))),a="sourceMappingURL=data:application/json;charset=utf-8;base64,".concat(r),i="/*# ".concat(a," */"),o=n.sources.map((function(e){return"/*# sourceURL=".concat(n.sourceRoot||"").concat(e," */")}));return[t].concat(o).concat([i]).join("\n")}return[t].join("\n")}},701:e=>{var t=[];function n(e){for(var n=-1,r=0;r<t.length;r++)if(t[r].identifier===e){n=r;break}return n}function r(e,r){for(var i={},o=[],s=0;s<e.length;s++){var d=e[s],c=r.base?d[0]+r.base:d[0],l=i[c]||0,A="".concat(c," ").concat(l);i[c]=l+1;var m=n(A),u={css:d[1],media:d[2],sourceMap:d[3],supports:d[4],layer:d[5]};if(-1!==m)t[m].references++,t[m].updater(u);else{var p=a(u,r);r.byIndex=s,t.splice(s,0,{identifier:A,updater:p,references:1})}o.push(A)}return o}function a(e,t){var n=t.domAPI(t);return n.update(e),function(t){if(t){if(t.css===e.css&&t.media===e.media&&t.sourceMap===e.sourceMap&&t.supports===e.supports&&t.layer===e.layer)return;n.update(e=t)}else n.remove()}}e.exports=function(e,a){var i=r(e=e||[],a=a||{});return function(e){e=e||[];for(var o=0;o<i.length;o++){var s=n(i[o]);t[s].references--}for(var d=r(e,a),c=0;c<i.length;c++){var l=n(i[c]);0===t[l].references&&(t[l].updater(),t.splice(l,1))}i=d}}},80:e=>{var t={};e.exports=function(e,n){var r=function(e){if(void 0===t[e]){var n=document.querySelector(e);if(window.HTMLIFrameElement&&n instanceof window.HTMLIFrameElement)try{n=n.contentDocument.head}catch(e){n=null}t[e]=n}return t[e]}(e);if(!r)throw new Error("Couldn't find a style target. This probably means that the value for the 'insert' parameter is invalid.");r.appendChild(n)}},182:e=>{e.exports=function(e){var t=document.createElement("style");return e.setAttributes(t,e.attributes),e.insert(t,e.options),t}},850:(e,t,n)=>{e.exports=function(e){var t=n.nc;t&&e.setAttribute("nonce",t)}},236:e=>{e.exports=function(e){var t=e.insertStyleElement(e);return{update:function(n){!function(e,t,n){var r="";n.supports&&(r+="@supports (".concat(n.supports,") {")),n.media&&(r+="@media ".concat(n.media," {"));var a=void 0!==n.layer;a&&(r+="@layer".concat(n.layer.length>0?" ".concat(n.layer):""," {")),r+=n.css,a&&(r+="}"),n.media&&(r+="}"),n.supports&&(r+="}");var i=n.sourceMap;i&&"undefined"!=typeof btoa&&(r+="\n/*# sourceMappingURL=data:application/json;base64,".concat(btoa(unescape(encodeURIComponent(JSON.stringify(i))))," */")),t.styleTagTransform(r,e,t.options)}(t,e,n)},remove:function(){!function(e){if(null===e.parentNode)return!1;e.parentNode.removeChild(e)}(t)}}}},213:e=>{e.exports=function(e,t){if(t.styleSheet)t.styleSheet.cssText=e;else{for(;t.firstChild;)t.removeChild(t.firstChild);t.appendChild(document.createTextNode(e))}}}},t={};function n(r){var a=t[r];if(void 0!==a)return a.exports;var i=t[r]={id:r,exports:{}};return e[r](i,i.exports,n),i.exports}n.n=e=>{var t=e&&e.__esModule?()=>e.default:()=>e;return n.d(t,{a:t}),t},n.d=(e,t)=>{for(var r in t)n.o(t,r)&&!n.o(e,r)&&Object.defineProperty(e,r,{enumerable:!0,get:t[r]})},n.o=(e,t)=>Object.prototype.hasOwnProperty.call(e,t),n.nc=void 0,(()=>{var e=n(701),t=n.n(e),r=n(236),a=n.n(r),i=n(80),o=n.n(i),s=n(850),d=n.n(s),c=n(182),l=n.n(c),A=n(213),m=n.n(A),u=n(426),p={};function b(e,t,n,r,a){let i=document.createElement("button");i.className=e,i.id=t,i.textContent=a;let o=document.createElement("img");return o.src=`./img/${n}`,o.className=r,i.appendChild(o),i}function f(e){const t=["task-title","task-description","task-completed","task-submit","Today","Tomorrow","date"];function n(n){t.includes(n.target.className)&&function(e){const t=[];for(let n=e;n>0;n--){let e=document.getElementById(`task-title${n}`),r=document.getElementById(`task-description${n}`),a=document.getElementById(`task-completed${n}`),i=document.getElementById(`date${n}`);if(null!=e){let o=i.value.split("-");i={month:parseInt(o[1]),date:parseInt(o[2]),year:parseInt(o[0])};const s={index:n,title:e.value,description:r.value,date:i,completed:a.checked};t.push(s)}}console.log(t)}(e)}document.addEventListener("input",(e=>{n(e)})),document.addEventListener("click",(e=>{n(e),function(e){(t.includes(e.target.textContent)||t.includes(e.target.type))&&function(e){let t=parseInt(e.target.id.match(/\d+$/)[0]),n=document.getElementById(`date${t}`);const r=new Date;let a=r.getDate().toString();1===a.length&&(a=0+a);let i=(parseInt(a)+1).toString();1===i.length&&(i=0+i);let o=(r.getMonth()+1).toString();1===o.length&&(o=0+o);let s=`${r.getFullYear()}-${o}-${a}`,d=`${r.getFullYear()}-${o}-${i}`;switch(!0){case"Today"===e.target.textContent:n.value=s;break;case"Tomorrow"===e.target.textContent:n.value=d}}(e)}(e)}))}function C(e){let t=document.querySelector(".dashboard"),n=document.querySelector("main");if(null===t){let t=document.createElement("div");t.className="dashboard",t.appendChild(e),n.appendChild(t),content.appendChild(n)}else t.appendChild(e),n.appendChild(t),content.appendChild(n)}p.styleTagTransform=m(),p.setAttributes=d(),p.insert=o().bind(null,"head"),p.domAPI=a(),p.insertStyleElement=l(),t()(u.Z,p),u.Z&&u.Z.locals&&u.Z.locals,function(){let e=document.querySelector("#content"),t=document.createElement("header"),n=b("header-button","sidebar-button","sidebar-close-svgrepo-com.svg","header-icon");t.appendChild(n);let r=b("header-button","home-button","home-svgrepo-com.svg","header-icon");t.appendChild(r);let a=document.createElement("input");a.setAttribute("type","text"),a.className="header-search",a.id="search-bar",t.appendChild(a);let i=b("header-button","search-button","search-svgrepo-com.svg","header-icon");t.appendChild(i);let o=b("header-button","add-task1","plus-svgrepo-com.svg","header-icon");t.appendChild(o),e.appendChild(t)}(),function(){let e=document.querySelector("#content"),t=document.createElement("div");t.className="sidebar";let n=b("sidebar-button","add-task2","plus-svgrepo-com.svg","sidebar-icon","New Task");t.appendChild(n);let r=b("sidebar-button","upcoming","calendar-svgrepo-com.svg","sidebar-icon","Upcoming Tasks");t.appendChild(r);let a=b("sidebar-button","project","stack-svgrepo-com.svg","sidebar-icon","Projects");t.appendChild(a);let i=document.createElement("main");i.appendChild(t),e.appendChild(i)}(),function(){let e=0;document.addEventListener("click",(t=>{(t.target.id.includes("add-task")||t.target.parentElement.id.includes("add-task"))&&(e+=1,function(e){let t=document.createElement("div");t.className="task-dashboard";let n=document.createElement("div");n.className="task-container1",t.appendChild(n);let r=document.createElement("input");r.setAttribute("type","checkbox"),r.id=`task-completed${e}`,r.className="task-completed",n.appendChild(r);let a=document.createElement("input");a.setAttribute("type","text"),a.placeholder="Title your task",a.id=`task-title${e}`,a.className="task-title",n.appendChild(a);let i=b("task-detail-button",`task-detail${e}`,"down-svgrepo-com.svg","task-icon");n.appendChild(i);let o=b("task-delete-button",`task-delete${e}`,"delete-svgrepo-com.svg","task-icon");n.appendChild(o);let s=document.createElement("div");s.className="task-container2",t.appendChild(s);let d=document.createElement("textarea");d.setAttribute("rows","8"),d.placeholder="Add a description",d.className="task-description",d.id=`task-description${e}`,s.appendChild(d);let c=document.createElement("div");c.className="task-container3",s.appendChild(c);let l=document.createElement("div");l.className="task-container4",c.appendChild(l);let A=document.createElement("button");A.id=`today${e}`,A.textContent="Today",l.appendChild(A);let m=document.createElement("button");m.id=`tomorrow${e}`,m.textContent="Tomorrow",l.appendChild(m);let u=document.createElement("input");u.setAttribute("type","date"),u.id=`date${e}`,l.appendChild(u);let p=document.createElement("button");p.id=`task-submit${e}`,p.textContent="Submit",p.className="task-submit",c.appendChild(p),C(t)}(e),f(e))}))}(),function(){let e;document.addEventListener("click",(t=>{let n=document.querySelector(".dashboard");if(t.target.parentElement.id.includes("task-delete")){let r=t.target.parentElement.parentElement.parentElement;n.removeChild(r);const a=t.target.parentElement.id;e=parseInt(a.replace(/\D/g,""))}}))}(),document.addEventListener("click",(e=>{var t,n,r;t=e.target.parentElement.id,n=e.target.parentElement.parentElement.nextSibling,r=e.target.parentElement,t.includes("task-detail")&&!r.outerHTML.includes("rotate")?(n.style.display="none",r.style.cssText="transform-box: fill-box; transform-origin: center;transform: rotate(0deg);transition: transform 0.7s;"):t.includes("task-detail")&&r.outerHTML.includes("rotate")&&(n.style.display="flex",r.style.cssText="")})),f(),document.addEventListener("click",(e=>{(e.target.id.includes("project")||e.target.parentElement.id.includes("project"))&&function(){let e=document.createElement("div");e.className="projects-dashboard";let t=document.createElement("div");t.className="new-project",e.appendChild(t);let n=document.createElement("button");n.className="new-project-button",n.textContent="New project",t.appendChild(n);let r=document.createElement("div");r.className="projects-grid",e.appendChild(r);let a=document.createElement("div");a.className="project1",a.textContent="Personal",r.appendChild(a),C(e)}()}))})()})();
//# sourceMappingURL=main.js.map