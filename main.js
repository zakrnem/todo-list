(()=>{"use strict";var e={426:(e,n,t)=>{t.d(n,{Z:()=>d});var r=t(864),a=t.n(r),o=t(352),i=t.n(o)()(a());i.push([e.id,"/* @font-face {\n    font-family: para;\n    src: url(Exo2-VariableFont_wght.ttf);\n}\n */\n:root {\n    --main: #8117de;\n    --main-filter: invert(20%) sepia(69%) saturate(6232%) hue-rotate(270deg) brightness(85%) contrast(108%);\n    --secondary: #8e31e0;\n    --secondary-filter: invert(22%) sepia(82%) saturate(4698%) hue-rotate(267deg) brightness(92%) contrast(89%);\n    --tertiary: #a364db;\n    --tertiary-filter: invert(47%) sepia(20%) saturate(2775%) hue-rotate(233deg) brightness(94%) contrast(81%);\n    --hover: #e6d5f5;\n    --inverse: #7ee821;\n    --inverse-filter: invert(81%) sepia(86%) saturate(512%) hue-rotate(32deg) brightness(95%) contrast(92%);\n    --inverse-active: #539618;\n    --inverse-active-filter: invert(62%) sepia(65%) saturate(6830%) hue-rotate(64deg) brightness(101%) contrast(81%);\n    --white-filter: invert(86%) sepia(100%) saturate(1764%) hue-rotate(182deg) brightness(130%) contrast(100%);\n    --border-radius: 7px;\n    --separator: solid 3px #aaaaaa;\n    --button-padding: 0.75rem 1.5rem;\n    --button-border-radius: 0.7rem;\n  }\n\n* {\n    margin: 0;\n    padding: 0;\n    font-size: inherit;\n    font-family: inherit;\n    user-select: none;\n}\n\nheader {\n    background-color: var(--main);\n    box-shadow: 0 5px 5px rgb(178 178 178);\n    padding: 1rem 1.5rem;\n    display: flex;\n    gap: 1rem;\n    margin-bottom: 1rem;\n}\n\n.header-button,\n.sidebar-button,\n.task-detail-button,\n.task-delete-button {\n    background: none;\n\tborder: none;\n}\n\n.header-icon {\n    height: 3rem;\n    filter: var(--white-filter)\n}\n\n.header-icon:hover {\n    filter: var(--inverse-filter)\n}\n\n.header-icon:active {\n    filter: var(--inverse-active-filter)\n}\n\n.header-search {\n    border-radius: var(--border-radius);\n    flex: content;\n    margin-left: 2rem;\n}\n\nmain {\n    display: flex;\n}\n\n.sidebar {\n    display: flex;\n    flex-direction: column;\n    gap: 0.5rem;\n    padding: 1rem 0.75rem;\n    margin-right: 1.5rem;\n}\n\n.sidebar-button {\n    display: flex;\n    align-items: center;\n    flex-direction: row-reverse;\n    justify-content: flex-end;\n    gap: 0.5rem;\n    padding-bottom: 0.5rem;\n    border-bottom: var(--separator);\n}\n\n.sidebar-icon {\n    height: 1.5rem;\n    filter: var(--main-filter)\n}\n\n.sidebar-icon:hover{\n    filter: var(--secondary-filter)\n}\n\n.sidebar-icon:active {\n    filter: var(--tertiary-filter)\n}\n\n.dashboard {\n    flex: auto;\n    padding: 0.25rem 2rem;\n}\n\n.task-dashboard {\n    margin-bottom: 3rem;\n}\n\n.task-container1 {\n    display: flex;\n    align-items: center;\n    border-bottom: var(--separator)\n}\n\n.task-title {\n    font-size: 1.2rem;\n    padding: 0.5rem;\n    flex:content;\n    margin: 0.75rem 1rem;\n    border-radius: var(--border-radius);\n}\n\ninput {\n    border: none;\n}\n\n.task-detail-button,\n.task-delete-button {\n    filter: var(--main-filter);\n        \n}\n\n.task-delete-button {\n    width: 2.2rem;\n}\n\n.task-detail-button {\n    transform: rotate(180deg);\n}\n\n.task-detail-button:hover,\n.task-delete-button:hover {\n    filter: var(--secondary-filter)\n}\n\n.task-detail-button:active,\n.task-delete-button:active {\n    filter: var(--tertiary-filter)\n}\n\n.task-completed {\n    width: 2rem;\n    height: 2rem;\n}\n\n.task-container2 {\n    display: flex;\n    gap: 1rem;\n    margin-top: 1rem;\n    padding-bottom: 1.5rem;\n    border-bottom: var(--separator);\n}\n\n.task-description {\n    padding: 0.5rem;\n    flex: content;\n    font-size: 1.1rem;\n}\n\n.task-container3 {\n    display: flex;\n    flex-direction: column;\n    justify-content: space-between;\n    align-items: flex-end;\n}\n\n.task-container4 {\n    display: flex;\n    gap: 0.3rem;\n}\n\n.task-container4 > *,\n.task-submit {\n    padding: 0.6rem 0.5rem;\n    border-radius: var(--border-radius);\n    background-color: var(--main);\n    border: none;\n    color: white;\n    font-weight: bold;\n}\n\n.task-container4 > *:hover,\n.task-submit:hover {\n    background-color: var(--secondary);\n}\n\n.task-container4 > *:active,\n.task-submit:active {\n    background-color: var(--tertiary);\n}\n\n.task-submit {\n    border-radius: var(--border-radius);\n    padding: 0.7rem 1.5rem;\n    width: fit-content;\n}\n\n.task-edit-input {\n    border-radius: var(--border-radius);\n}\n\n.projects-dashboard,\n.edit-project-dash {\n    margin-top: 1.5rem;\n    display: flex;\n    flex-direction: column;\n    align-items: center;\n    gap: 2rem;\n    font-weight: bolder;\n}\n\n.new-button {\n    padding: var(--button-padding);\n    background-color: var(--main);\n    color: white;\n    font-weight: bolder;\n    border-radius: var(--border-radius);\n    border: none;\n}\n\n.new-button:hover {\n    background-color: var(--secondary);\n}\n\n.new-button:active {\n    background-color: var(--tertiary);\n}\n\n.projects-grid {\n    display: grid;\n    grid-template-columns: repeat(auto-fill, minmax(25ch, 1fr));\n    gap: 1rem;\n    width: 100%;\n}\n\n.project {\n    border: 3px solid var(--main);\n    border-radius: 0.5rem;\n    height: 10rem;\n    padding: 0.5rem 1rem;\n    display: flex;\n    flex-direction: column;\n    align-items: center;\n}\n\n.project:hover {\n    background-color: var(--hover);\n    border: 3px solid var(--tertiary);\n}\n\n.project > * {\n    width: 100%;\n    padding: .3rem 0;\n    text-align: center;\n    font-weight: bold;\n}\n\n.task-container {\n    width: 100%;\n    margin-bottom: 1rem;\n}\n\n.project-title-edit {\n    background-color: transparent;\n}\n\n.project-title-edit:hover {\n    background-color: white;\n}\n\n.project-title-edit:active {\n    background-color: white;\n}\n\n.project-title {\n    font-size: 2rem;\n}","",{version:3,sources:["webpack://./src/style.css"],names:[],mappings:"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",sourcesContent:["/* @font-face {\n    font-family: para;\n    src: url(Exo2-VariableFont_wght.ttf);\n}\n */\n:root {\n    --main: #8117de;\n    --main-filter: invert(20%) sepia(69%) saturate(6232%) hue-rotate(270deg) brightness(85%) contrast(108%);\n    --secondary: #8e31e0;\n    --secondary-filter: invert(22%) sepia(82%) saturate(4698%) hue-rotate(267deg) brightness(92%) contrast(89%);\n    --tertiary: #a364db;\n    --tertiary-filter: invert(47%) sepia(20%) saturate(2775%) hue-rotate(233deg) brightness(94%) contrast(81%);\n    --hover: #e6d5f5;\n    --inverse: #7ee821;\n    --inverse-filter: invert(81%) sepia(86%) saturate(512%) hue-rotate(32deg) brightness(95%) contrast(92%);\n    --inverse-active: #539618;\n    --inverse-active-filter: invert(62%) sepia(65%) saturate(6830%) hue-rotate(64deg) brightness(101%) contrast(81%);\n    --white-filter: invert(86%) sepia(100%) saturate(1764%) hue-rotate(182deg) brightness(130%) contrast(100%);\n    --border-radius: 7px;\n    --separator: solid 3px #aaaaaa;\n    --button-padding: 0.75rem 1.5rem;\n    --button-border-radius: 0.7rem;\n  }\n\n* {\n    margin: 0;\n    padding: 0;\n    font-size: inherit;\n    font-family: inherit;\n    user-select: none;\n}\n\nheader {\n    background-color: var(--main);\n    box-shadow: 0 5px 5px rgb(178 178 178);\n    padding: 1rem 1.5rem;\n    display: flex;\n    gap: 1rem;\n    margin-bottom: 1rem;\n}\n\n.header-button,\n.sidebar-button,\n.task-detail-button,\n.task-delete-button {\n    background: none;\n\tborder: none;\n}\n\n.header-icon {\n    height: 3rem;\n    filter: var(--white-filter)\n}\n\n.header-icon:hover {\n    filter: var(--inverse-filter)\n}\n\n.header-icon:active {\n    filter: var(--inverse-active-filter)\n}\n\n.header-search {\n    border-radius: var(--border-radius);\n    flex: content;\n    margin-left: 2rem;\n}\n\nmain {\n    display: flex;\n}\n\n.sidebar {\n    display: flex;\n    flex-direction: column;\n    gap: 0.5rem;\n    padding: 1rem 0.75rem;\n    margin-right: 1.5rem;\n}\n\n.sidebar-button {\n    display: flex;\n    align-items: center;\n    flex-direction: row-reverse;\n    justify-content: flex-end;\n    gap: 0.5rem;\n    padding-bottom: 0.5rem;\n    border-bottom: var(--separator);\n}\n\n.sidebar-icon {\n    height: 1.5rem;\n    filter: var(--main-filter)\n}\n\n.sidebar-icon:hover{\n    filter: var(--secondary-filter)\n}\n\n.sidebar-icon:active {\n    filter: var(--tertiary-filter)\n}\n\n.dashboard {\n    flex: auto;\n    padding: 0.25rem 2rem;\n}\n\n.task-dashboard {\n    margin-bottom: 3rem;\n}\n\n.task-container1 {\n    display: flex;\n    align-items: center;\n    border-bottom: var(--separator)\n}\n\n.task-title {\n    font-size: 1.2rem;\n    padding: 0.5rem;\n    flex:content;\n    margin: 0.75rem 1rem;\n    border-radius: var(--border-radius);\n}\n\ninput {\n    border: none;\n}\n\n.task-detail-button,\n.task-delete-button {\n    filter: var(--main-filter);\n        \n}\n\n.task-delete-button {\n    width: 2.2rem;\n}\n\n.task-detail-button {\n    transform: rotate(180deg);\n}\n\n.task-detail-button:hover,\n.task-delete-button:hover {\n    filter: var(--secondary-filter)\n}\n\n.task-detail-button:active,\n.task-delete-button:active {\n    filter: var(--tertiary-filter)\n}\n\n.task-completed {\n    width: 2rem;\n    height: 2rem;\n}\n\n.task-container2 {\n    display: flex;\n    gap: 1rem;\n    margin-top: 1rem;\n    padding-bottom: 1.5rem;\n    border-bottom: var(--separator);\n}\n\n.task-description {\n    padding: 0.5rem;\n    flex: content;\n    font-size: 1.1rem;\n}\n\n.task-container3 {\n    display: flex;\n    flex-direction: column;\n    justify-content: space-between;\n    align-items: flex-end;\n}\n\n.task-container4 {\n    display: flex;\n    gap: 0.3rem;\n}\n\n.task-container4 > *,\n.task-submit {\n    padding: 0.6rem 0.5rem;\n    border-radius: var(--border-radius);\n    background-color: var(--main);\n    border: none;\n    color: white;\n    font-weight: bold;\n}\n\n.task-container4 > *:hover,\n.task-submit:hover {\n    background-color: var(--secondary);\n}\n\n.task-container4 > *:active,\n.task-submit:active {\n    background-color: var(--tertiary);\n}\n\n.task-submit {\n    border-radius: var(--border-radius);\n    padding: 0.7rem 1.5rem;\n    width: fit-content;\n}\n\n.task-edit-input {\n    border-radius: var(--border-radius);\n}\n\n.projects-dashboard,\n.edit-project-dash {\n    margin-top: 1.5rem;\n    display: flex;\n    flex-direction: column;\n    align-items: center;\n    gap: 2rem;\n    font-weight: bolder;\n}\n\n.new-button {\n    padding: var(--button-padding);\n    background-color: var(--main);\n    color: white;\n    font-weight: bolder;\n    border-radius: var(--border-radius);\n    border: none;\n}\n\n.new-button:hover {\n    background-color: var(--secondary);\n}\n\n.new-button:active {\n    background-color: var(--tertiary);\n}\n\n.projects-grid {\n    display: grid;\n    grid-template-columns: repeat(auto-fill, minmax(25ch, 1fr));\n    gap: 1rem;\n    width: 100%;\n}\n\n.project {\n    border: 3px solid var(--main);\n    border-radius: 0.5rem;\n    height: 10rem;\n    padding: 0.5rem 1rem;\n    display: flex;\n    flex-direction: column;\n    align-items: center;\n}\n\n.project:hover {\n    background-color: var(--hover);\n    border: 3px solid var(--tertiary);\n}\n\n.project > * {\n    width: 100%;\n    padding: .3rem 0;\n    text-align: center;\n    font-weight: bold;\n}\n\n.task-container {\n    width: 100%;\n    margin-bottom: 1rem;\n}\n\n.project-title-edit {\n    background-color: transparent;\n}\n\n.project-title-edit:hover {\n    background-color: white;\n}\n\n.project-title-edit:active {\n    background-color: white;\n}\n\n.project-title {\n    font-size: 2rem;\n}"],sourceRoot:""}]);const d=i},352:e=>{e.exports=function(e){var n=[];return n.toString=function(){return this.map((function(n){var t="",r=void 0!==n[5];return n[4]&&(t+="@supports (".concat(n[4],") {")),n[2]&&(t+="@media ".concat(n[2]," {")),r&&(t+="@layer".concat(n[5].length>0?" ".concat(n[5]):""," {")),t+=e(n),r&&(t+="}"),n[2]&&(t+="}"),n[4]&&(t+="}"),t})).join("")},n.i=function(e,t,r,a,o){"string"==typeof e&&(e=[[null,e,void 0]]);var i={};if(r)for(var d=0;d<this.length;d++){var A=this[d][0];null!=A&&(i[A]=!0)}for(var s=0;s<e.length;s++){var l=[].concat(e[s]);r&&i[l[0]]||(void 0!==o&&(void 0===l[5]||(l[1]="@layer".concat(l[5].length>0?" ".concat(l[5]):""," {").concat(l[1],"}")),l[5]=o),t&&(l[2]?(l[1]="@media ".concat(l[2]," {").concat(l[1],"}"),l[2]=t):l[2]=t),a&&(l[4]?(l[1]="@supports (".concat(l[4],") {").concat(l[1],"}"),l[4]=a):l[4]="".concat(a)),n.push(l))}},n}},864:e=>{e.exports=function(e){var n=e[1],t=e[3];if(!t)return n;if("function"==typeof btoa){var r=btoa(unescape(encodeURIComponent(JSON.stringify(t)))),a="sourceMappingURL=data:application/json;charset=utf-8;base64,".concat(r),o="/*# ".concat(a," */"),i=t.sources.map((function(e){return"/*# sourceURL=".concat(t.sourceRoot||"").concat(e," */")}));return[n].concat(i).concat([o]).join("\n")}return[n].join("\n")}},701:e=>{var n=[];function t(e){for(var t=-1,r=0;r<n.length;r++)if(n[r].identifier===e){t=r;break}return t}function r(e,r){for(var o={},i=[],d=0;d<e.length;d++){var A=e[d],s=r.base?A[0]+r.base:A[0],l=o[s]||0,c="".concat(s," ").concat(l);o[s]=l+1;var u=t(c),m={css:A[1],media:A[2],sourceMap:A[3],supports:A[4],layer:A[5]};if(-1!==u)n[u].references++,n[u].updater(m);else{var p=a(m,r);r.byIndex=d,n.splice(d,0,{identifier:c,updater:p,references:1})}i.push(c)}return i}function a(e,n){var t=n.domAPI(n);return t.update(e),function(n){if(n){if(n.css===e.css&&n.media===e.media&&n.sourceMap===e.sourceMap&&n.supports===e.supports&&n.layer===e.layer)return;t.update(e=n)}else t.remove()}}e.exports=function(e,a){var o=r(e=e||[],a=a||{});return function(e){e=e||[];for(var i=0;i<o.length;i++){var d=t(o[i]);n[d].references--}for(var A=r(e,a),s=0;s<o.length;s++){var l=t(o[s]);0===n[l].references&&(n[l].updater(),n.splice(l,1))}o=A}}},80:e=>{var n={};e.exports=function(e,t){var r=function(e){if(void 0===n[e]){var t=document.querySelector(e);if(window.HTMLIFrameElement&&t instanceof window.HTMLIFrameElement)try{t=t.contentDocument.head}catch(e){t=null}n[e]=t}return n[e]}(e);if(!r)throw new Error("Couldn't find a style target. This probably means that the value for the 'insert' parameter is invalid.");r.appendChild(t)}},182:e=>{e.exports=function(e){var n=document.createElement("style");return e.setAttributes(n,e.attributes),e.insert(n,e.options),n}},850:(e,n,t)=>{e.exports=function(e){var n=t.nc;n&&e.setAttribute("nonce",n)}},236:e=>{e.exports=function(e){var n=e.insertStyleElement(e);return{update:function(t){!function(e,n,t){var r="";t.supports&&(r+="@supports (".concat(t.supports,") {")),t.media&&(r+="@media ".concat(t.media," {"));var a=void 0!==t.layer;a&&(r+="@layer".concat(t.layer.length>0?" ".concat(t.layer):""," {")),r+=t.css,a&&(r+="}"),t.media&&(r+="}"),t.supports&&(r+="}");var o=t.sourceMap;o&&"undefined"!=typeof btoa&&(r+="\n/*# sourceMappingURL=data:application/json;base64,".concat(btoa(unescape(encodeURIComponent(JSON.stringify(o))))," */")),n.styleTagTransform(r,e,n.options)}(n,e,t)},remove:function(){!function(e){if(null===e.parentNode)return!1;e.parentNode.removeChild(e)}(n)}}}},213:e=>{e.exports=function(e,n){if(n.styleSheet)n.styleSheet.cssText=e;else{for(;n.firstChild;)n.removeChild(n.firstChild);n.appendChild(document.createTextNode(e))}}}},n={};function t(r){var a=n[r];if(void 0!==a)return a.exports;var o=n[r]={id:r,exports:{}};return e[r](o,o.exports,t),o.exports}t.n=e=>{var n=e&&e.__esModule?()=>e.default:()=>e;return t.d(n,{a:n}),n},t.d=(e,n)=>{for(var r in n)t.o(n,r)&&!t.o(e,r)&&Object.defineProperty(e,r,{enumerable:!0,get:n[r]})},t.o=(e,n)=>Object.prototype.hasOwnProperty.call(e,n),t.nc=void 0,(()=>{var e=t(701),n=t.n(e),r=t(236),a=t.n(r),o=t(80),i=t.n(o),d=t(850),A=t.n(d),s=t(182),l=t.n(s),c=t(213),u=t.n(c),m=t(426),p={};function C(e,n,t,r,a){let o=document.createElement("button");o.className=e,o.id=n,o.textContent=a;let i=document.createElement("img");return i.src=`./img/${t}`,i.className=r,o.appendChild(i),o}function b(e){let n=document.querySelector(".dashboard"),t=document.querySelector("main");if(null===n){let n=document.createElement("div");n.className="dashboard",n.appendChild(e),t.appendChild(n),content.appendChild(t)}else n.appendChild(e),t.appendChild(n),content.appendChild(t)}function h(e,n){document.querySelector(".projects-dashboard");let t=document.querySelector(".projects-grid"),r=document.createElement("div");r.id=`projectN${e}`,r.className="project";let a=document.createElement("input");a.setAttribute("type","text"),a.value=n,a.id=`projectT${e}`,a.className="project-title-edit",r.appendChild(a),t.appendChild(r)}function g(e,n){let t=document.createElement("div");t.className="projects-dashboard";let r=document.createElement("button");r.id="new-project",r.className="new-button",r.textContent="New project",t.appendChild(r);let a=document.createElement("div");a.className="projects-grid",t.appendChild(a),document.addEventListener("DOMContentLoaded",(()=>{h(e,n)})),b(t)}function f(){let e=document.querySelector(".dashboard");e.removeChild(e.firstElementChild)}function v(e,n,t){if("read"===e)return I;if("write"===e){let e;for(let r in I)I[r].id==n&&(I[r]=t,I.length,e=!0);!0!==e&&(I.push(t),I.length)}}p.styleTagTransform=u(),p.setAttributes=A(),p.insert=i().bind(null,"head"),p.domAPI=a(),p.insertStyleElement=l(),n()(m.Z,p),m.Z&&m.Z.locals&&m.Z.locals;const I=[{title:"Personal",tasks:{},id:1}];function B(e,n,t,r,a){let o;null!=a&&(1===a.month.toString().length&&(a.month=`0${a.month}`),1===a.date.toString().length&&(a.date=`0${a.date}`),o=`${a.year}-${a.month}-${a.date}`),void 0===t&&(t="",r="");let i=document.querySelector(".edit-project-dash"),d=document.createElement("div");d.className="task-container",i.appendChild(d);let A=document.createElement("div");A.className="task-container1",d.appendChild(A);let s=document.createElement("input");s.setAttribute("type","checkbox"),s.id=`task-completed${e}`,s.className="task-completed",s.checked=n,A.appendChild(s);let l=document.createElement("input");l.setAttribute("type","text"),l.placeholder="Title your task",l.id=`task-title${e}`,l.className="task-title",l.value=t,A.appendChild(l);let c=C("task-detail-button",`task-detail${e}`,"down-svgrepo-com.svg","task-icon");A.appendChild(c);let u=C("task-delete-button",`task-delete${e}`,"delete-svgrepo-com.svg","task-icon");A.appendChild(u);let m=document.createElement("div");m.className="task-container2",d.appendChild(m);let p=document.createElement("textarea");p.setAttribute("rows","8"),p.placeholder="Add a description",p.className="task-description",p.id=`task-description${e}`,p.value=r,m.appendChild(p);let h=document.createElement("div");h.className="task-container3",m.appendChild(h);let g=document.createElement("div");g.className="task-container4",h.appendChild(g);let f=document.createElement("button");f.id=`today${e}`,f.textContent="Today",g.appendChild(f);let v=document.createElement("button");v.id=`tomorrow${e}`,v.textContent="Tomorrow",g.appendChild(v);let I=document.createElement("input");I.setAttribute("type","date"),I.id=`date${e}`,I.value=o,g.appendChild(I);let B=document.createElement("button");B.id=`task-submit${e}`,B.textContent="Submit",B.className="task-submit",h.appendChild(B),b(i)}function k(e){for(let n=document.querySelectorAll(".task-container").length;n>0;n--){let t=document.getElementById(`task-title${n}`),r=document.getElementById(`task-description${n}`),a=document.getElementById(`task-completed${n}`),o=document.getElementById(`date${n}`);if(null!=t){let i=o.value.split("-");o={month:parseInt(i[1]),date:parseInt(i[2]),year:parseInt(i[0])};const d={index:n,title:t.value,description:r.value,date:o,completed:a.checked};e.push(d)}}return e}!function(){let e=document.querySelector("#content"),n=document.createElement("header"),t=C("header-button","sidebar-button","sidebar-close-svgrepo-com.svg","header-icon");n.appendChild(t);let r=C("header-button","home-button","home-svgrepo-com.svg","header-icon");n.appendChild(r);let a=document.createElement("input");a.setAttribute("type","text"),a.className="header-search",a.id="search-bar",n.appendChild(a);let o=C("header-button","search-button","search-svgrepo-com.svg","header-icon");n.appendChild(o),e.appendChild(n)}(),function(){let e=document.querySelector("#content"),n=document.createElement("div");n.className="sidebar";let t=C("sidebar-button","upcoming","calendar-svgrepo-com.svg","sidebar-icon","Upcoming Tasks");n.appendChild(t);let r=C("sidebar-button","project-button1","stack-svgrepo-com.svg","sidebar-icon","Projects");n.appendChild(r);let a=document.createElement("main");a.appendChild(n),e.appendChild(a)}(),function(){let e=document.querySelector("#content"),n=v("read"),t=n.length;g(t,n[t-1].title),e.addEventListener("click",(e=>{(e.target.id.includes("project-button")||e.target.parentElement.id.includes("project-button"))&&(f(),g(),h(t,n[t-1].title)),e.target.id.includes("new-project")&&h(++t,`New project #${t}`)})),e.addEventListener("dblclick",(e=>{if(e.target.id.includes("projectN")){let t=e.target.id.match(/\d+$/)[0];!function(e,n){f();let t=document.querySelector(".sidebar"),r=C("sidebar-button","returnB1","return-back-svgrepo-com.svg","sidebar-icon","Return");t.appendChild(r);let a=document.createElement("div");a.className="edit-project-dash";let o=document.createElement("p");o.className="project-title",o.textContent=e,o.id=n,a.appendChild(o);let i=document.createElement("button");i.id="add-task1",i.className="new-button",i.textContent="New task",a.appendChild(i),b(a),document.addEventListener("click",(e=>{(e.target.id.includes("today")||e.target.id.includes("tomorrow"))&&function(e){let n=parseInt(e.target.id.match(/\d+$/)[0]),t=document.getElementById(`date${n}`);const r=new Date;let a=r.getDate().toString();1===a.length&&(a=0+a);let o=(r.getMonth()+1).toString();1===o.length&&(o=0+o);let i=`${r.getFullYear()}-${o}-${a}`;const d=new Date;d.setDate(d.getDate()+1);let A=d.getDate().toString();1===A.toString().length&&(A=0+A);let s=(d.getMonth()+1).toString();1===s.length&&(s=0+s);let l=`${d.getFullYear()}-${s}-${A}`;switch(!0){case"Today"===e.target.textContent:t.value=i;break;case"Tomorrow"===e.target.textContent:t.value=l}}(e)}))}(document.querySelector(`#projectT${t}`).value,t);for(let e in n)if(n[e].id===t){n[e].tasks.length;for(let t in n[e].tasks){let r=n[e].tasks[t].title,a=n[e].tasks[t].completed,o=n[e].tasks[t].description,i=n[e].tasks[t].date;B(parseInt(t)+1,a,r,o,i)}}}}))}(),function(){let e,n=document.querySelector("#content"),t=0;n.addEventListener("click",(n=>{let r=document.querySelector(".edit-project-dash");if(null!=r){if(n.target.id.includes("add-task")&&(t+=1,B(t)),n.target.parentElement.id.includes("task-delete")){let t=n.target.parentElement.parentElement.parentElement;r.removeChild(t);const a=n.target.parentElement.id;e=parseInt(a.replace(/\D/g,""))}if(a=n.target.parentElement.id,o=n.target.parentElement.parentElement.nextSibling,i=n.target.parentElement,a.includes("task-detail")&&!i.outerHTML.includes("rotate")?(o.style.display="none",i.style.cssText="transform-box: fill-box; transform-origin: center;transform: rotate(0deg);transition: transform 0.7s;"):a.includes("task-detail")&&i.outerHTML.includes("rotate")&&(o.style.display="flex",i.style.cssText=""),n.target.id.includes("returnB")||n.target.parentElement.id.includes("returnB")){const e=[];let n=document.querySelector(".project-title").textContent,r=document.querySelector(".project-title").id;v("write",r,{title:n,tasks:k(e),id:r}),f(),g();let a=v("read");console.log(a);let o=a.length;for(;o>0;o--)h(o,a[o-1].title);t=0;let i=document.querySelector(".sidebar"),d=document.querySelector("#returnB1");i.removeChild(d)}}var a,o,i}))}()})()})();
//# sourceMappingURL=main.js.map