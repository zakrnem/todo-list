/******/ (() => { // webpackBootstrap
/******/ 	"use strict";
/******/ 	var __webpack_modules__ = ({

/***/ "./node_modules/css-loader/dist/cjs.js!./src/style.css":
/*!*************************************************************!*\
  !*** ./node_modules/css-loader/dist/cjs.js!./src/style.css ***!
  \*************************************************************/
/***/ ((module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _node_modules_css_loader_dist_runtime_sourceMaps_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../node_modules/css-loader/dist/runtime/sourceMaps.js */ "./node_modules/css-loader/dist/runtime/sourceMaps.js");
/* harmony import */ var _node_modules_css_loader_dist_runtime_sourceMaps_js__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_node_modules_css_loader_dist_runtime_sourceMaps_js__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../node_modules/css-loader/dist/runtime/api.js */ "./node_modules/css-loader/dist/runtime/api.js");
/* harmony import */ var _node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1__);
// Imports


var ___CSS_LOADER_EXPORT___ = _node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1___default()((_node_modules_css_loader_dist_runtime_sourceMaps_js__WEBPACK_IMPORTED_MODULE_0___default()));
// Module
___CSS_LOADER_EXPORT___.push([module.id, "/* @font-face {\n    font-family: para;\n    src: url(Exo2-VariableFont_wght.ttf);\n}\n */\n:root {\n    --main: #8117de;\n    --main-filter: invert(20%) sepia(69%) saturate(6232%) hue-rotate(270deg) brightness(85%) contrast(108%);\n    --secondary: #8e31e0;\n    --secondary-filter: invert(22%) sepia(82%) saturate(4698%) hue-rotate(267deg) brightness(92%) contrast(89%);\n    --tertiary: #a364db;\n    --tertiary-filter: invert(47%) sepia(20%) saturate(2775%) hue-rotate(233deg) brightness(94%) contrast(81%);\n    --hover: #e6d5f5;\n    --inverse: #7ee821;\n    --inverse-filter: invert(81%) sepia(86%) saturate(512%) hue-rotate(32deg) brightness(95%) contrast(92%);\n    --inverse-active: #539618;\n    --inverse-active-filter: invert(62%) sepia(65%) saturate(6830%) hue-rotate(64deg) brightness(101%) contrast(81%);\n    --white-filter: invert(86%) sepia(100%) saturate(1764%) hue-rotate(182deg) brightness(130%) contrast(100%);\n    --border-radius: 7px;\n    --separator: solid 3px #aaaaaa;\n    --button-padding: 0.75rem 1.5rem;\n    --button-border-radius: 0.7rem;\n    --transition-time: 0.2s;\n  }\n\n* {\n    margin: 0;\n    padding: 0;\n    font-size: inherit;\n    font-family: inherit;\n    user-select: none;\n}\n\nhtml, body {\n    height: 100%;\n}\n\nbody {\n    display: flex;\n    flex-direction: column;\n  }\n\n#content {\n    display: flex;\n    flex-direction: column;\n    flex: 1 0 auto;\n}\n\nfooter {\n    background-color: var(--main);\n    color: white;\n    display: flex;\n    align-items: center;\n    justify-content: center;\n    padding: 0.4rem 0;\n    gap: 0.5rem;\n    flex-shrink: 0;\n    margin-top: 1.5rem;\n}\n\n.github {\n    height: 1.5rem;\n    width:auto;\n    fill: white\n}\n\n.github:hover {\n    transform: rotate(720deg);\n    transition: transform 1.5s;\n    fill: white\n}\n\nheader {\n    background-color: var(--main);\n    box-shadow: 0 5px 5px rgb(178 178 178);\n    padding: 1rem 1.5rem;\n    display: flex;\n    gap: 1rem;\n    margin-bottom: 1rem;\n}\n\n.header-button,\n.sidebar-button,\n.task-detail-button,\n.task-delete-button {\n    background: none;\n\tborder: none;\n}\n\n.header-icon {\n    height: 3rem;\n    filter: var(--white-filter)\n}\n\n.header-icon:hover {\n    filter: var(--inverse-filter)\n}\n\n.header-icon:active {\n    filter: var(--inverse-active-filter)\n}\n\n.header-search {\n    border-radius: var(--border-radius);\n    flex: content;\n    margin-left: 2rem;\n}\n\nmain {\n    display: flex;\n}\n\n.sidebar {\n    display: flex;\n    flex-direction: column;\n    gap: 0.5rem;\n    padding: 1rem 0.75rem;\n    margin-right: 1.5rem;\n}\n\n.sidebar-button {\n    display: flex;\n    align-items: center;\n    flex-direction: row-reverse;\n    justify-content: flex-end;\n    gap: 0.5rem;\n    padding-bottom: 0.5rem;\n    border-bottom: var(--separator);\n}\n\n.sidebar-icon {\n    height: 1.5rem;\n    filter: var(--main-filter)\n}\n\n.sidebar-icon:hover{\n    filter: var(--secondary-filter)\n}\n\n.sidebar-icon:active {\n    filter: var(--tertiary-filter)\n}\n\n.dashboard {\n    flex: auto;\n    padding: 0.25rem 2rem;\n}\n\n.task-dashboard {\n    margin-bottom: 3rem;\n}\n\n.task-container1 {\n    display: flex;\n    align-items: center;\n    border-bottom: var(--separator)\n}\n\n.task-title {\n    font-size: 1.2rem;\n    padding: 0.5rem;\n    flex:content;\n    margin: 0.75rem 1rem;\n    border-radius: var(--border-radius);\n}\n\ninput {\n    border: none;\n}\n\n.task-detail-button,\n.task-delete-button {\n    filter: var(--main-filter);\n        \n}\n\n.task-delete-button {\n    width: 2.2rem;\n}\n\n.task-detail-button {\n    transform: rotate(180deg);\n}\n\n.task-detail-button:hover,\n.task-delete-button:hover {\n    filter: var(--secondary-filter)\n}\n\n.task-detail-button:active,\n.task-delete-button:active {\n    filter: var(--tertiary-filter)\n}\n\n.task-completed {\n    width: 2rem;\n    height: 2rem;\n}\n\n.task-container2 {\n    display: flex;\n    gap: 1rem;\n    margin-top: 1rem;\n    padding-bottom: 1.5rem;\n    border-bottom: var(--separator);\n}\n\n.task-description {\n    padding: 0.5rem;\n    flex: content;\n    font-size: 1.1rem;\n}\n\n.task-container3 {\n    display: flex;\n    flex-direction: column;\n    justify-content: space-between;\n    align-items: flex-end;\n}\n\n.task-container4 {\n    display: flex;\n    gap: 0.3rem;\n}\n\n.task-container4 > *,\n.task-submit {\n    padding: 0.6rem 0.5rem;\n    border-radius: var(--border-radius);\n    background-color: var(--main);\n    border: none;\n    color: white;\n    font-weight: bold;\n}\n\n.task-container4 > *:hover,\n.task-submit:hover {\n    background-color: var(--secondary);\n}\n\n.task-container4 > *:active,\n.task-submit:active {\n    background-color: var(--tertiary);\n}\n\n.task-submit {\n    border-radius: var(--border-radius);\n    padding: 0.7rem 1.5rem;\n    width: fit-content;\n}\n\n.task-edit-input {\n    border-radius: var(--border-radius);\n}\n\n.projects-dashboard,\n.edit-project-dash,\n.upcoming-dash {\n    margin-top: 1.5rem;\n    display: flex;\n    flex-direction: column;\n    align-items: center;\n    gap: 2rem;\n    font-weight: bolder;\n}\n\n.new-button {\n    padding: var(--button-padding);\n    background-color: var(--main);\n    color: white;\n    font-weight: bolder;\n    border-radius: var(--border-radius);\n    border: none;\n}\n\n.new-button:hover {\n    background-color: var(--secondary);\n}\n\n.new-button:active {\n    background-color: var(--tertiary);\n}\n\n.projects-grid {\n    display: grid;\n    grid-template-columns: repeat(auto-fill, minmax(25ch, 1fr));\n    gap: 1rem;\n    width: 100%;\n}\n\n.project,\n.upcoming-container {\n    border: 3px solid var(--main);\n    border-radius: 0.5rem;\n    height: 10rem;\n    padding: 0.75rem 1rem;\n    display: flex;\n    flex-direction: column;\n    align-items: center;\n    justify-content: center;\n    gap: 1.2rem;\n}\n\n.project {\n    justify-content: space-between;\n}\n\n.project:hover {\n    background-color: var(--hover);\n    border: 3px solid var(--tertiary);\n}\n\n.project > * {\n    width: 100%;\n    padding: .3rem 0;\n    text-align: center;\n    font-weight: bold;\n}\n\n.task-container {\n    width: 100%;\n    margin-bottom: 1rem;\n}\n\n.project-title-edit {\n    background-color: transparent;\n}\n\n.project-title-edit:hover {\n    background-color: white;\n}\n\n.project-title-edit:active {\n    background-color: white;\n}\n\n.project-title,\n.upcoming-title {\n    font-size: 2rem;\n}\n\n.delete-project {\n    height: 1.5rem;\n}\n\n.delete-project:hover {\n    filter: var(--main-filter);\n    height: 2rem;\n    transition: height var(--transition-time);\n}\n\n.tasks-grid {\n    display: grid;\n    grid-template-columns: repeat(auto-fill, minmax(40ch, 1fr));\n    width: 90%;\n    gap: 1rem;\n}\n\n.upcoming-container > * {\n    font-weight: normal;\n}\n\n.upcoming-container:hover {\n    background-color: var(--hover)\n}\n\n.upcoming-task-title {\n    font-size: 1.3rem;\n    text-align: center;\n    font-weight: bold;\n}\n\n.upcoming-task-info {\n    display: flex;\n    width: 100%;\n    justify-content: space-around;\n}\n\n.upcoming-container2,\n.upcoming-container1 {\n    display: grid;\n    gap: 0.75rem;\n}\n\n.upcoming-container2 {\n    text-align: end;\n}", "",{"version":3,"sources":["webpack://./src/style.css"],"names":[],"mappings":"AAAA;;;;EAIE;AACF;IACI,eAAe;IACf,uGAAuG;IACvG,oBAAoB;IACpB,2GAA2G;IAC3G,mBAAmB;IACnB,0GAA0G;IAC1G,gBAAgB;IAChB,kBAAkB;IAClB,uGAAuG;IACvG,yBAAyB;IACzB,gHAAgH;IAChH,0GAA0G;IAC1G,oBAAoB;IACpB,8BAA8B;IAC9B,gCAAgC;IAChC,8BAA8B;IAC9B,uBAAuB;EACzB;;AAEF;IACI,SAAS;IACT,UAAU;IACV,kBAAkB;IAClB,oBAAoB;IACpB,iBAAiB;AACrB;;AAEA;IACI,YAAY;AAChB;;AAEA;IACI,aAAa;IACb,sBAAsB;EACxB;;AAEF;IACI,aAAa;IACb,sBAAsB;IACtB,cAAc;AAClB;;AAEA;IACI,6BAA6B;IAC7B,YAAY;IACZ,aAAa;IACb,mBAAmB;IACnB,uBAAuB;IACvB,iBAAiB;IACjB,WAAW;IACX,cAAc;IACd,kBAAkB;AACtB;;AAEA;IACI,cAAc;IACd,UAAU;IACV;AACJ;;AAEA;IACI,yBAAyB;IACzB,0BAA0B;IAC1B;AACJ;;AAEA;IACI,6BAA6B;IAC7B,sCAAsC;IACtC,oBAAoB;IACpB,aAAa;IACb,SAAS;IACT,mBAAmB;AACvB;;AAEA;;;;IAII,gBAAgB;CACnB,YAAY;AACb;;AAEA;IACI,YAAY;IACZ;AACJ;;AAEA;IACI;AACJ;;AAEA;IACI;AACJ;;AAEA;IACI,mCAAmC;IACnC,aAAa;IACb,iBAAiB;AACrB;;AAEA;IACI,aAAa;AACjB;;AAEA;IACI,aAAa;IACb,sBAAsB;IACtB,WAAW;IACX,qBAAqB;IACrB,oBAAoB;AACxB;;AAEA;IACI,aAAa;IACb,mBAAmB;IACnB,2BAA2B;IAC3B,yBAAyB;IACzB,WAAW;IACX,sBAAsB;IACtB,+BAA+B;AACnC;;AAEA;IACI,cAAc;IACd;AACJ;;AAEA;IACI;AACJ;;AAEA;IACI;AACJ;;AAEA;IACI,UAAU;IACV,qBAAqB;AACzB;;AAEA;IACI,mBAAmB;AACvB;;AAEA;IACI,aAAa;IACb,mBAAmB;IACnB;AACJ;;AAEA;IACI,iBAAiB;IACjB,eAAe;IACf,YAAY;IACZ,oBAAoB;IACpB,mCAAmC;AACvC;;AAEA;IACI,YAAY;AAChB;;AAEA;;IAEI,0BAA0B;;AAE9B;;AAEA;IACI,aAAa;AACjB;;AAEA;IACI,yBAAyB;AAC7B;;AAEA;;IAEI;AACJ;;AAEA;;IAEI;AACJ;;AAEA;IACI,WAAW;IACX,YAAY;AAChB;;AAEA;IACI,aAAa;IACb,SAAS;IACT,gBAAgB;IAChB,sBAAsB;IACtB,+BAA+B;AACnC;;AAEA;IACI,eAAe;IACf,aAAa;IACb,iBAAiB;AACrB;;AAEA;IACI,aAAa;IACb,sBAAsB;IACtB,8BAA8B;IAC9B,qBAAqB;AACzB;;AAEA;IACI,aAAa;IACb,WAAW;AACf;;AAEA;;IAEI,sBAAsB;IACtB,mCAAmC;IACnC,6BAA6B;IAC7B,YAAY;IACZ,YAAY;IACZ,iBAAiB;AACrB;;AAEA;;IAEI,kCAAkC;AACtC;;AAEA;;IAEI,iCAAiC;AACrC;;AAEA;IACI,mCAAmC;IACnC,sBAAsB;IACtB,kBAAkB;AACtB;;AAEA;IACI,mCAAmC;AACvC;;AAEA;;;IAGI,kBAAkB;IAClB,aAAa;IACb,sBAAsB;IACtB,mBAAmB;IACnB,SAAS;IACT,mBAAmB;AACvB;;AAEA;IACI,8BAA8B;IAC9B,6BAA6B;IAC7B,YAAY;IACZ,mBAAmB;IACnB,mCAAmC;IACnC,YAAY;AAChB;;AAEA;IACI,kCAAkC;AACtC;;AAEA;IACI,iCAAiC;AACrC;;AAEA;IACI,aAAa;IACb,2DAA2D;IAC3D,SAAS;IACT,WAAW;AACf;;AAEA;;IAEI,6BAA6B;IAC7B,qBAAqB;IACrB,aAAa;IACb,qBAAqB;IACrB,aAAa;IACb,sBAAsB;IACtB,mBAAmB;IACnB,uBAAuB;IACvB,WAAW;AACf;;AAEA;IACI,8BAA8B;AAClC;;AAEA;IACI,8BAA8B;IAC9B,iCAAiC;AACrC;;AAEA;IACI,WAAW;IACX,gBAAgB;IAChB,kBAAkB;IAClB,iBAAiB;AACrB;;AAEA;IACI,WAAW;IACX,mBAAmB;AACvB;;AAEA;IACI,6BAA6B;AACjC;;AAEA;IACI,uBAAuB;AAC3B;;AAEA;IACI,uBAAuB;AAC3B;;AAEA;;IAEI,eAAe;AACnB;;AAEA;IACI,cAAc;AAClB;;AAEA;IACI,0BAA0B;IAC1B,YAAY;IACZ,yCAAyC;AAC7C;;AAEA;IACI,aAAa;IACb,2DAA2D;IAC3D,UAAU;IACV,SAAS;AACb;;AAEA;IACI,mBAAmB;AACvB;;AAEA;IACI;AACJ;;AAEA;IACI,iBAAiB;IACjB,kBAAkB;IAClB,iBAAiB;AACrB;;AAEA;IACI,aAAa;IACb,WAAW;IACX,6BAA6B;AACjC;;AAEA;;IAEI,aAAa;IACb,YAAY;AAChB;;AAEA;IACI,eAAe;AACnB","sourcesContent":["/* @font-face {\n    font-family: para;\n    src: url(Exo2-VariableFont_wght.ttf);\n}\n */\n:root {\n    --main: #8117de;\n    --main-filter: invert(20%) sepia(69%) saturate(6232%) hue-rotate(270deg) brightness(85%) contrast(108%);\n    --secondary: #8e31e0;\n    --secondary-filter: invert(22%) sepia(82%) saturate(4698%) hue-rotate(267deg) brightness(92%) contrast(89%);\n    --tertiary: #a364db;\n    --tertiary-filter: invert(47%) sepia(20%) saturate(2775%) hue-rotate(233deg) brightness(94%) contrast(81%);\n    --hover: #e6d5f5;\n    --inverse: #7ee821;\n    --inverse-filter: invert(81%) sepia(86%) saturate(512%) hue-rotate(32deg) brightness(95%) contrast(92%);\n    --inverse-active: #539618;\n    --inverse-active-filter: invert(62%) sepia(65%) saturate(6830%) hue-rotate(64deg) brightness(101%) contrast(81%);\n    --white-filter: invert(86%) sepia(100%) saturate(1764%) hue-rotate(182deg) brightness(130%) contrast(100%);\n    --border-radius: 7px;\n    --separator: solid 3px #aaaaaa;\n    --button-padding: 0.75rem 1.5rem;\n    --button-border-radius: 0.7rem;\n    --transition-time: 0.2s;\n  }\n\n* {\n    margin: 0;\n    padding: 0;\n    font-size: inherit;\n    font-family: inherit;\n    user-select: none;\n}\n\nhtml, body {\n    height: 100%;\n}\n\nbody {\n    display: flex;\n    flex-direction: column;\n  }\n\n#content {\n    display: flex;\n    flex-direction: column;\n    flex: 1 0 auto;\n}\n\nfooter {\n    background-color: var(--main);\n    color: white;\n    display: flex;\n    align-items: center;\n    justify-content: center;\n    padding: 0.4rem 0;\n    gap: 0.5rem;\n    flex-shrink: 0;\n    margin-top: 1.5rem;\n}\n\n.github {\n    height: 1.5rem;\n    width:auto;\n    fill: white\n}\n\n.github:hover {\n    transform: rotate(720deg);\n    transition: transform 1.5s;\n    fill: white\n}\n\nheader {\n    background-color: var(--main);\n    box-shadow: 0 5px 5px rgb(178 178 178);\n    padding: 1rem 1.5rem;\n    display: flex;\n    gap: 1rem;\n    margin-bottom: 1rem;\n}\n\n.header-button,\n.sidebar-button,\n.task-detail-button,\n.task-delete-button {\n    background: none;\n\tborder: none;\n}\n\n.header-icon {\n    height: 3rem;\n    filter: var(--white-filter)\n}\n\n.header-icon:hover {\n    filter: var(--inverse-filter)\n}\n\n.header-icon:active {\n    filter: var(--inverse-active-filter)\n}\n\n.header-search {\n    border-radius: var(--border-radius);\n    flex: content;\n    margin-left: 2rem;\n}\n\nmain {\n    display: flex;\n}\n\n.sidebar {\n    display: flex;\n    flex-direction: column;\n    gap: 0.5rem;\n    padding: 1rem 0.75rem;\n    margin-right: 1.5rem;\n}\n\n.sidebar-button {\n    display: flex;\n    align-items: center;\n    flex-direction: row-reverse;\n    justify-content: flex-end;\n    gap: 0.5rem;\n    padding-bottom: 0.5rem;\n    border-bottom: var(--separator);\n}\n\n.sidebar-icon {\n    height: 1.5rem;\n    filter: var(--main-filter)\n}\n\n.sidebar-icon:hover{\n    filter: var(--secondary-filter)\n}\n\n.sidebar-icon:active {\n    filter: var(--tertiary-filter)\n}\n\n.dashboard {\n    flex: auto;\n    padding: 0.25rem 2rem;\n}\n\n.task-dashboard {\n    margin-bottom: 3rem;\n}\n\n.task-container1 {\n    display: flex;\n    align-items: center;\n    border-bottom: var(--separator)\n}\n\n.task-title {\n    font-size: 1.2rem;\n    padding: 0.5rem;\n    flex:content;\n    margin: 0.75rem 1rem;\n    border-radius: var(--border-radius);\n}\n\ninput {\n    border: none;\n}\n\n.task-detail-button,\n.task-delete-button {\n    filter: var(--main-filter);\n        \n}\n\n.task-delete-button {\n    width: 2.2rem;\n}\n\n.task-detail-button {\n    transform: rotate(180deg);\n}\n\n.task-detail-button:hover,\n.task-delete-button:hover {\n    filter: var(--secondary-filter)\n}\n\n.task-detail-button:active,\n.task-delete-button:active {\n    filter: var(--tertiary-filter)\n}\n\n.task-completed {\n    width: 2rem;\n    height: 2rem;\n}\n\n.task-container2 {\n    display: flex;\n    gap: 1rem;\n    margin-top: 1rem;\n    padding-bottom: 1.5rem;\n    border-bottom: var(--separator);\n}\n\n.task-description {\n    padding: 0.5rem;\n    flex: content;\n    font-size: 1.1rem;\n}\n\n.task-container3 {\n    display: flex;\n    flex-direction: column;\n    justify-content: space-between;\n    align-items: flex-end;\n}\n\n.task-container4 {\n    display: flex;\n    gap: 0.3rem;\n}\n\n.task-container4 > *,\n.task-submit {\n    padding: 0.6rem 0.5rem;\n    border-radius: var(--border-radius);\n    background-color: var(--main);\n    border: none;\n    color: white;\n    font-weight: bold;\n}\n\n.task-container4 > *:hover,\n.task-submit:hover {\n    background-color: var(--secondary);\n}\n\n.task-container4 > *:active,\n.task-submit:active {\n    background-color: var(--tertiary);\n}\n\n.task-submit {\n    border-radius: var(--border-radius);\n    padding: 0.7rem 1.5rem;\n    width: fit-content;\n}\n\n.task-edit-input {\n    border-radius: var(--border-radius);\n}\n\n.projects-dashboard,\n.edit-project-dash,\n.upcoming-dash {\n    margin-top: 1.5rem;\n    display: flex;\n    flex-direction: column;\n    align-items: center;\n    gap: 2rem;\n    font-weight: bolder;\n}\n\n.new-button {\n    padding: var(--button-padding);\n    background-color: var(--main);\n    color: white;\n    font-weight: bolder;\n    border-radius: var(--border-radius);\n    border: none;\n}\n\n.new-button:hover {\n    background-color: var(--secondary);\n}\n\n.new-button:active {\n    background-color: var(--tertiary);\n}\n\n.projects-grid {\n    display: grid;\n    grid-template-columns: repeat(auto-fill, minmax(25ch, 1fr));\n    gap: 1rem;\n    width: 100%;\n}\n\n.project,\n.upcoming-container {\n    border: 3px solid var(--main);\n    border-radius: 0.5rem;\n    height: 10rem;\n    padding: 0.75rem 1rem;\n    display: flex;\n    flex-direction: column;\n    align-items: center;\n    justify-content: center;\n    gap: 1.2rem;\n}\n\n.project {\n    justify-content: space-between;\n}\n\n.project:hover {\n    background-color: var(--hover);\n    border: 3px solid var(--tertiary);\n}\n\n.project > * {\n    width: 100%;\n    padding: .3rem 0;\n    text-align: center;\n    font-weight: bold;\n}\n\n.task-container {\n    width: 100%;\n    margin-bottom: 1rem;\n}\n\n.project-title-edit {\n    background-color: transparent;\n}\n\n.project-title-edit:hover {\n    background-color: white;\n}\n\n.project-title-edit:active {\n    background-color: white;\n}\n\n.project-title,\n.upcoming-title {\n    font-size: 2rem;\n}\n\n.delete-project {\n    height: 1.5rem;\n}\n\n.delete-project:hover {\n    filter: var(--main-filter);\n    height: 2rem;\n    transition: height var(--transition-time);\n}\n\n.tasks-grid {\n    display: grid;\n    grid-template-columns: repeat(auto-fill, minmax(40ch, 1fr));\n    width: 90%;\n    gap: 1rem;\n}\n\n.upcoming-container > * {\n    font-weight: normal;\n}\n\n.upcoming-container:hover {\n    background-color: var(--hover)\n}\n\n.upcoming-task-title {\n    font-size: 1.3rem;\n    text-align: center;\n    font-weight: bold;\n}\n\n.upcoming-task-info {\n    display: flex;\n    width: 100%;\n    justify-content: space-around;\n}\n\n.upcoming-container2,\n.upcoming-container1 {\n    display: grid;\n    gap: 0.75rem;\n}\n\n.upcoming-container2 {\n    text-align: end;\n}"],"sourceRoot":""}]);
// Exports
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (___CSS_LOADER_EXPORT___);


/***/ }),

/***/ "./src/app.js":
/*!********************!*\
  !*** ./src/app.js ***!
  \********************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _style_css__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./style.css */ "./src/style.css");
/* harmony import */ var _header__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./header */ "./src/header.js");
/* harmony import */ var _sidebarDOM__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./sidebarDOM */ "./src/sidebarDOM.js");
/* harmony import */ var _projectListener__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./projectListener */ "./src/projectListener.js");
/* harmony import */ var _taskListener__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./taskListener */ "./src/taskListener.js");



(0,_header__WEBPACK_IMPORTED_MODULE_1__.headerDOM)()

;
(0,_sidebarDOM__WEBPACK_IMPORTED_MODULE_2__.sidebarDOM)()

;
(0,_projectListener__WEBPACK_IMPORTED_MODULE_3__.projectListener)()

;
(0,_taskListener__WEBPACK_IMPORTED_MODULE_4__.taskListener)()

/***/ }),

/***/ "./src/appendDOM.js":
/*!**************************!*\
  !*** ./src/appendDOM.js ***!
  \**************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "appendDOM": () => (/* binding */ appendDOM)
/* harmony export */ });
function appendDOM(taskEdit) {
    let container = document.querySelector('.dashboard')    
    let main = document.querySelector('main')

    if (container === null) {
        let container = document.createElement('div')
        container.className = 'dashboard'
        container.appendChild(taskEdit)
        main.appendChild(container)
        content.appendChild(main)
    }
    else {
        container.appendChild(taskEdit)
        main.appendChild(container)
        content.appendChild(main)
    }
}

/***/ }),

/***/ "./src/clearDOM.js":
/*!*************************!*\
  !*** ./src/clearDOM.js ***!
  \*************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "clearDOM": () => (/* binding */ clearDOM)
/* harmony export */ });
function clearDOM() {
    let dashboard = document.querySelector('.dashboard')
    dashboard.removeChild(dashboard.firstElementChild)

    let footer = document.querySelector('footer')
    let footerParent = footer.parentElement
    footerParent.removeChild(footer)
}

/***/ }),

/***/ "./src/footer.js":
/*!***********************!*\
  !*** ./src/footer.js ***!
  \***********************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "footer": () => (/* binding */ footer)
/* harmony export */ });
function footer() {
    let footer = document.createElement('footer')
    footer.innerHTML = 'Made by Zakrnem <a href="http://github.com/zakrnem"><svg class="github" xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24"><path d="M12 0c-6.626 0-12 5.373-12 12 0 5.302 3.438 9.8 8.207 11.387.599.111.793-.261.793-.577v-2.234c-3.338.726-4.033-1.416-4.033-1.416-.546-1.387-1.333-1.756-1.333-1.756-1.089-.745.083-.729.083-.729 1.205.084 1.839 1.237 1.839 1.237 1.07 1.834 2.807 1.304 3.492.997.107-.775.418-1.305.762-1.604-2.665-.305-5.467-1.334-5.467-5.931 0-1.311.469-2.381 1.236-3.221-.124-.303-.535-1.524.117-3.176 0 0 1.008-.322 3.301 1.23.957-.266 1.983-.399 3.003-.404 1.02.005 2.047.138 3.006.404 2.291-1.552 3.297-1.23 3.297-1.23.653 1.653.242 2.874.118 3.176.77.84 1.235 1.911 1.235 3.221 0 4.609-2.807 5.624-5.479 5.921.43.372.823 1.102.823 2.222v3.293c0 .319.192.694.801.576 4.765-1.589 8.199-6.086 8.199-11.386 0-6.627-5.373-12-12-12z"/></svg></a>'
    
    let body = document.querySelector('body')
    return body.appendChild(footer)
}

/***/ }),

/***/ "./src/header.js":
/*!***********************!*\
  !*** ./src/header.js ***!
  \***********************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "headerDOM": () => (/* binding */ headerDOM)
/* harmony export */ });
/* harmony import */ var _newIcon_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./newIcon.js */ "./src/newIcon.js");


function headerDOM() {
    let content = document.querySelector('#content')
    let header = document.createElement('header')
    
    let sideBarButton = (0,_newIcon_js__WEBPACK_IMPORTED_MODULE_0__.newIcon)('header-button', 'sidebar-button',
    'sidebar-close-svgrepo-com.svg', 'header-icon')
    header.appendChild(sideBarButton)

    let homeButton = (0,_newIcon_js__WEBPACK_IMPORTED_MODULE_0__.newIcon)('header-button','home-button',
    'home-svgrepo-com.svg', 'header-icon')
    header.appendChild(homeButton)

    let searchBar = document.createElement('input')
    searchBar.setAttribute("type", "text");
    searchBar.className = 'header-search'
    searchBar.id = 'search-bar'
    header.appendChild(searchBar)

    let searchButton = (0,_newIcon_js__WEBPACK_IMPORTED_MODULE_0__.newIcon)('header-button', 'search-button',
    'search-svgrepo-com.svg', 'header-icon')
    header.appendChild(searchButton)

  /*   let plusButton = newIcon('header-button','add-task1',
    'plus-svgrepo-com.svg', 'header-icon')
    header.appendChild(plusButton) */

    content.appendChild(header)
}

/***/ }),

/***/ "./src/newIcon.js":
/*!************************!*\
  !*** ./src/newIcon.js ***!
  \************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "newIcon": () => (/* binding */ newIcon)
/* harmony export */ });
function newIcon(className, id, imgSrc, iconClass, buttonText) {
    let newButton = document.createElement('button')
    newButton.className = className
    newButton.id = id
    newButton.textContent = buttonText
    let newIcon = document.createElement('img')
    newIcon.src = `./img/${imgSrc}`
    newIcon.className = iconClass
    newButton.appendChild(newIcon)
    
    return newButton
}

/***/ }),

/***/ "./src/projectDOM.js":
/*!***************************!*\
  !*** ./src/projectDOM.js ***!
  \***************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "projectDOM": () => (/* binding */ projectDOM)
/* harmony export */ });
/* harmony import */ var _appendDOM__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./appendDOM */ "./src/appendDOM.js");
/* harmony import */ var _projectNew__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./projectNew */ "./src/projectNew.js");
/* harmony import */ var _footer__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./footer */ "./src/footer.js");
/* harmony import */ var _projectInsertProjects__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./projectInsertProjects */ "./src/projectInsertProjects.js");





function projectDOM() {

    let dashboard = document.createElement('div')
        dashboard.className = 'projects-dashboard'

    let newProjectButtton = document.createElement('button')
        newProjectButtton.id = 'new-project'
        newProjectButtton.className = 'new-button'
        newProjectButtton.textContent = 'New project'
        dashboard.appendChild(newProjectButtton)

    let projectsGrid = document.createElement('div')
        projectsGrid.className = 'projects-grid'
        dashboard.appendChild(projectsGrid)

    
    document.addEventListener('DOMContentLoaded', () => {
        ;(0,_projectInsertProjects__WEBPACK_IMPORTED_MODULE_3__.insertStoredProjects)()
    })

    ;(0,_appendDOM__WEBPACK_IMPORTED_MODULE_0__.appendDOM)(dashboard)
    ;(0,_footer__WEBPACK_IMPORTED_MODULE_2__.footer)()
}

/***/ }),

/***/ "./src/projectEdit.js":
/*!****************************!*\
  !*** ./src/projectEdit.js ***!
  \****************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "projectEdit": () => (/* binding */ projectEdit)
/* harmony export */ });
/* harmony import */ var _appendDOM__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./appendDOM */ "./src/appendDOM.js");
/* harmony import */ var _clearDOM__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./clearDOM */ "./src/clearDOM.js");
/* harmony import */ var _newIcon__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./newIcon */ "./src/newIcon.js");
/* harmony import */ var _taskDate__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./taskDate */ "./src/taskDate.js");





function projectEdit(projTitle, projID) {
    (0,_clearDOM__WEBPACK_IMPORTED_MODULE_1__.clearDOM)()

    let sidebar = document.querySelector('.sidebar')
    let returnButton = (0,_newIcon__WEBPACK_IMPORTED_MODULE_2__.newIcon)('sidebar-button', 'return-pj-edit',
    'return-back-svgrepo-com.svg', 'sidebar-icon', 'Return')
    sidebar.appendChild(returnButton)

    let dashboard = document.createElement('div')
    dashboard.className = 'edit-project-dash'

    let projectTitle = document.createElement('p')
    projectTitle.className = 'project-title'
    projectTitle.textContent = projTitle
    projectTitle.id = projID
    dashboard.appendChild(projectTitle)

    let newTaskButtton = document.createElement('button')
    newTaskButtton.id = 'add-task1'
    newTaskButtton.className = 'new-button'
    newTaskButtton.textContent = 'New task'
    dashboard.appendChild(newTaskButtton)
       
    ;(0,_appendDOM__WEBPACK_IMPORTED_MODULE_0__.appendDOM)(dashboard)

    document.addEventListener('click', (e) => {
        if (e.target.id.includes('today') ||
        e.target.id.includes('tomorrow')) {
            (0,_taskDate__WEBPACK_IMPORTED_MODULE_3__.taskDate)(e)
        }
    })
}

/***/ }),

/***/ "./src/projectInsertProjects.js":
/*!**************************************!*\
  !*** ./src/projectInsertProjects.js ***!
  \**************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "insertStoredProjects": () => (/* binding */ insertStoredProjects)
/* harmony export */ });
/* harmony import */ var _projectStorage__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./projectStorage */ "./src/projectStorage.js");
/* harmony import */ var _projectNew__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./projectNew */ "./src/projectNew.js");



function insertStoredProjects() {
    let storedProjects = (0,_projectStorage__WEBPACK_IMPORTED_MODULE_0__.projectStorage)('read')
    let projectCount = storedProjects.length

    //For loop for inserting multiple stored projects
    for (; projectCount>0; projectCount--) {
        ;(0,_projectNew__WEBPACK_IMPORTED_MODULE_1__.newProject)(projectCount, storedProjects[projectCount-1].title)
    }
}

/***/ }),

/***/ "./src/projectInsertTasks.js":
/*!***********************************!*\
  !*** ./src/projectInsertTasks.js ***!
  \***********************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "insertStoredTasks": () => (/* binding */ insertStoredTasks)
/* harmony export */ });
/* harmony import */ var _projectStorage__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./projectStorage */ "./src/projectStorage.js");
/* harmony import */ var _taskNew__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./taskNew */ "./src/taskNew.js");
/* harmony import */ var _footer__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./footer */ "./src/footer.js");




function insertStoredTasks(projectIDnumber) {
    let storedProjects = (0,_projectStorage__WEBPACK_IMPORTED_MODULE_0__.projectStorage)('read')
    for (let key in storedProjects) {
        if (storedProjects[key].id == projectIDnumber) {
            //Checks if the selected project exists on storage
            let taskCount = storedProjects[key].tasks.length
            for (let key2 in storedProjects[key].tasks) {
                //Adds the properties of the stored tasks for a project to the DOM
                let tskTitle = storedProjects[key].tasks[key2].title
                let tskCheck = storedProjects[key].tasks[key2].completed
                let tskDescrip = storedProjects[key].tasks[key2].description
                let tskDate = storedProjects[key].tasks[key2].date
                let tskCount = parseInt(key2)+1
                ;(0,_taskNew__WEBPACK_IMPORTED_MODULE_1__.newTask)(tskCount, tskCheck, tskTitle, tskDescrip, tskDate)
            }
        }
    }
    (0,_footer__WEBPACK_IMPORTED_MODULE_2__.footer)()
}

/***/ }),

/***/ "./src/projectListener.js":
/*!********************************!*\
  !*** ./src/projectListener.js ***!
  \********************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "projectListener": () => (/* binding */ projectListener)
/* harmony export */ });
/* harmony import */ var _projectDOM__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./projectDOM */ "./src/projectDOM.js");
/* harmony import */ var _projectEdit__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./projectEdit */ "./src/projectEdit.js");
/* harmony import */ var _clearDOM__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./clearDOM */ "./src/clearDOM.js");
/* harmony import */ var _projectNew__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./projectNew */ "./src/projectNew.js");
/* harmony import */ var _projectStorage__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./projectStorage */ "./src/projectStorage.js");
/* harmony import */ var _upcomingDOM__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./upcomingDOM */ "./src/upcomingDOM.js");
/* harmony import */ var _projectInsertTasks__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./projectInsertTasks */ "./src/projectInsertTasks.js");
/* harmony import */ var _returnButtonRemove__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ./returnButtonRemove */ "./src/returnButtonRemove.js");
/* harmony import */ var _projectInsertProjects__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ./projectInsertProjects */ "./src/projectInsertProjects.js");










function projectListener() {
    let content = document.querySelector('#content')

    let storedProjects = (0,_projectStorage__WEBPACK_IMPORTED_MODULE_4__.projectStorage)('read')
    let projectCount = storedProjects.length

    //Insert project dashboard initially
    ;(0,_projectDOM__WEBPACK_IMPORTED_MODULE_0__.projectDOM)()

    content.addEventListener('click', (e) => {
        //Insert project dashboard
        if (e.target.id.includes('project-button') ||
        e.target.parentElement.id.includes('project-button')) {
        (0,_clearDOM__WEBPACK_IMPORTED_MODULE_2__.clearDOM)()
        ;(0,_projectDOM__WEBPACK_IMPORTED_MODULE_0__.projectDOM)()
        ;(0,_projectInsertProjects__WEBPACK_IMPORTED_MODULE_8__.insertStoredProjects)()
        ;(0,_returnButtonRemove__WEBPACK_IMPORTED_MODULE_7__.removeReturnButton)()
        }

        //Add a new project
        if (e.target.id.includes('new-project')) {
            (0,_projectNew__WEBPACK_IMPORTED_MODULE_3__.newProject)(++projectCount, `New project #${projectCount}`)
        }

        //Delete project
        if (e.target.className === 'delete-project') {
            let projectsGrid = document.querySelector('.projects-grid')
            projectsGrid.removeChild(e.target.parentElement)
            let projectIDnumber = e.target.id.match(/\d+$/)[0]
            ;(0,_projectStorage__WEBPACK_IMPORTED_MODULE_4__.projectStorage)('delete', projectIDnumber)
        }

        //Upcoming tasks
        if (e.target.id.includes('upcomingB') ||
        e.target.parentElement.id.includes('upcomingB')) {
            (0,_upcomingDOM__WEBPACK_IMPORTED_MODULE_5__.upcomingTasksDOM)()
        }

        //Return button
        if (e.target.id.includes('return-upcoming') ||
            e.target.parentElement.id.includes('return-upcoming')) {
                (0,_clearDOM__WEBPACK_IMPORTED_MODULE_2__.clearDOM)()
                ;(0,_projectDOM__WEBPACK_IMPORTED_MODULE_0__.projectDOM)()
                ;(0,_projectInsertProjects__WEBPACK_IMPORTED_MODULE_8__.insertStoredProjects)()
                ;(0,_returnButtonRemove__WEBPACK_IMPORTED_MODULE_7__.removeReturnButton)()                
            }
    })
    
    content.addEventListener('dblclick', (e) => {
        let projectIDnumber
        let projTitle
        //Go to project edit (task creation)
        if (e.target.id.includes('projectN')) {
            projectIDnumber = e.target.id.match(/\d+$/)[0]
            projTitle = document.querySelector(`#projectT${projectIDnumber}`).value
            ;(0,_projectEdit__WEBPACK_IMPORTED_MODULE_1__.projectEdit)(projTitle, projectIDnumber)
            ;(0,_projectInsertTasks__WEBPACK_IMPORTED_MODULE_6__.insertStoredTasks)(projectIDnumber)
        }
        if (e.target.id.includes('upcomingT')) {
            projectIDnumber = e.target.id.match(/\d+$/)[0]
            projTitle = document.querySelector(`#upcomingT-pj${projectIDnumber}`).textContent
            ;(0,_projectEdit__WEBPACK_IMPORTED_MODULE_1__.projectEdit)(projTitle, projectIDnumber)
            ;(0,_projectInsertTasks__WEBPACK_IMPORTED_MODULE_6__.insertStoredTasks)(projectIDnumber)
            ;(0,_returnButtonRemove__WEBPACK_IMPORTED_MODULE_7__.removeReturnButton)()
        }
    })
}

/***/ }),

/***/ "./src/projectNew.js":
/*!***************************!*\
  !*** ./src/projectNew.js ***!
  \***************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "newProject": () => (/* binding */ newProject)
/* harmony export */ });
/* harmony import */ var _appendDOM__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./appendDOM */ "./src/appendDOM.js");


function newProject(projectCount, projTextCont) {
        let dashboard = document.querySelector('.projects-dashboard')
        let projectsGrid = document.querySelector('.projects-grid')

        let newProject = document.createElement('div')
        newProject.id = `projectN${projectCount}`
        newProject.className = 'project'
            let projectTitle = document.createElement('input')
            projectTitle.setAttribute("type", "text")
            projectTitle.value = projTextCont
            projectTitle.id = `projectT${projectCount}`
            projectTitle.className = 'project-title-edit'
            newProject.appendChild(projectTitle)

            let deleteProject = document.createElement('img')
            deleteProject.src = `./img/remove-svgrepo-com.svg`
            deleteProject.className = 'delete-project'
            deleteProject.id = `projectD${projectCount}`
            newProject.appendChild(deleteProject)
        
        projectsGrid.appendChild(newProject)
}

/***/ }),

/***/ "./src/projectStorage.js":
/*!*******************************!*\
  !*** ./src/projectStorage.js ***!
  \*******************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "projectStorage": () => (/* binding */ projectStorage)
/* harmony export */ });
function projectStorage(typeOfOperation, projID, projTasks) {
    if (typeOfOperation === 'read') {
        return storedProjects
    }
    if (typeOfOperation === 'write') {
        //console.log(projTasks)
        let found
        for (let key in storedProjects) {
            if (storedProjects[key].id == projID) {
                storedProjects[key] = projTasks
                let projectCount = storedProjects.length
                found = true
            }
        }
        if (found !== true) {
            storedProjects.push(projTasks)
            let projectCount = storedProjects.length
        }
        for (let key in storedProjects) {
            let itemIndex = parseInt(key)
            if (storedProjects[itemIndex].id != itemIndex+1) {
                storedProjects[itemIndex].id = itemIndex+1
            }
        }
    }
    if (typeOfOperation === 'delete') {
        storedProjects.splice(projID-1,1)
    }
}

const storedProjects = [
    {
        "title": "Daihatsu",
        "tasks": [
            {
                "id": "1",
                "project": "Daihatsu",
                "title": "Review expenses logging from the last month",
                "description": "",
                "date": "2003-03-23",
                "completed": true
            },
            {
                "id": "1",
                "project": "Daihatsu",
                "title": "Study javascript array methods",
                "description": "",
                "date": "1811-03-24",
                "completed": false
            },
            {
                "id": "1",
                "project": "Daihatsu",
                "title": "Buy clothes for the holidays",
                "description": "",
                "date": "2005-04-05",
                "completed": false
            }
        ],
        "id": "1"
    },
    {
        "title": "Suzuki",
        "tasks": [
            {
                "id": "2",
                "project": "Suzuki",
                "title": "Ignis",
                "description": "",
                "date": "2001-03-01",
                "completed": false
            },
            {
                "id": "2",
                "project": "Suzuki",
                "title": "Cultus",
                "description": "",
                "date": "1999-03-31",
                "completed": true
            }
        ],
        "id": "2"
    },
    {
        "title": "Mazda",
        "tasks": [
            {
                "id": "3",
                "project": "Mazda",
                "title": "323",
                "description": "",
                "date": "2007-06-07",
                "completed": true
            },
            {
                "id": "3",
                "project": "Mazda",
                "title": "Protegé",
                "description": "",
                "date": "2003-04-13",
                "completed": false
            },
            {
                "id": "3",
                "project": "Mazda",
                "title": "626",
                "description": "",
                "date": "2004-02-07",
                "completed": false
            }
        ],
        "id": "3"
    }
]

/***/ }),

/***/ "./src/returnButtonRemove.js":
/*!***********************************!*\
  !*** ./src/returnButtonRemove.js ***!
  \***********************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "removeReturnButton": () => (/* binding */ removeReturnButton)
/* harmony export */ });
function removeReturnButton() {
    let sidebar = document.querySelector('.sidebar')
    let returnButton = document.querySelector('[id*="return"]')
    if (returnButton != null) {
        sidebar.removeChild(returnButton)
    }
}

/***/ }),

/***/ "./src/sidebarDOM.js":
/*!***************************!*\
  !*** ./src/sidebarDOM.js ***!
  \***************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "sidebarDOM": () => (/* binding */ sidebarDOM)
/* harmony export */ });
/* harmony import */ var _newIcon__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./newIcon */ "./src/newIcon.js");


function sidebarDOM() {
    let content = document.querySelector('#content')

    let sidebar = document.createElement('div')
    sidebar.className = 'sidebar'

    let upcomingButton = (0,_newIcon__WEBPACK_IMPORTED_MODULE_0__.newIcon)('sidebar-button', 'upcomingB',
    'calendar-svgrepo-com.svg', 'sidebar-icon', 'Upcoming Tasks')
    sidebar.appendChild(upcomingButton)

    let projectsButton = (0,_newIcon__WEBPACK_IMPORTED_MODULE_0__.newIcon)('sidebar-button', 'project-button1',
    'stack-svgrepo-com.svg', 'sidebar-icon', 'Projects')
    sidebar.appendChild(projectsButton)
    
    let main = document.createElement('main')
    main.appendChild(sidebar)
    content.appendChild(main)
}

/***/ }),

/***/ "./src/taskDate.js":
/*!*************************!*\
  !*** ./src/taskDate.js ***!
  \*************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "taskDate": () => (/* binding */ taskDate)
/* harmony export */ });
function taskDate(e) {
    //Tomorrow button not working at the end of a month
    
    let taskCount = parseInt(e.target.id.match(/\d+$/)[0]);
    let taskDateDisplay = document.getElementById(`date${taskCount}`) 
    
    const currentDate = new Date();
    let todayDate = currentDate.getDate().toString()
    if (todayDate.length === 1) {
        todayDate = 0 + todayDate
    }
    let todayMonth = (currentDate.getMonth()+1).toString()
    if (todayMonth.length === 1) {
        todayMonth = 0 + todayMonth
    }
    let todayYear = currentDate.getFullYear()
    let currentDateString = `${todayYear}-${todayMonth}-${todayDate}`


    const tomorrowDate = new Date();
    tomorrowDate.setDate(tomorrowDate.getDate()+1)
    let tomorrowDayDate = tomorrowDate.getDate().toString()
    if (tomorrowDayDate.toString().length === 1) {
        tomorrowDayDate = 0 + tomorrowDayDate
    }
    let tomorrowMonth = (tomorrowDate.getMonth()+1).toString()
    if (tomorrowMonth.length === 1) {
        tomorrowMonth = 0 + tomorrowMonth
    }
    let tomorrowYear = tomorrowDate.getFullYear()    
    let tomorrowDateString = `${tomorrowYear}-${tomorrowMonth}-${tomorrowDayDate}`

    switch (true) {
        case (e.target.textContent === 'Today'):
            taskDateDisplay.value = currentDateString
            break;
        case (e.target.textContent === 'Tomorrow'):
            taskDateDisplay.value = tomorrowDateString
            break;
    }
}

/***/ }),

/***/ "./src/taskListener.js":
/*!*****************************!*\
  !*** ./src/taskListener.js ***!
  \*****************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "taskListener": () => (/* binding */ taskListener)
/* harmony export */ });
/* harmony import */ var _taskToggleDetail__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./taskToggleDetail */ "./src/taskToggleDetail.js");
/* harmony import */ var _clearDOM__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./clearDOM */ "./src/clearDOM.js");
/* harmony import */ var _projectDOM__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./projectDOM */ "./src/projectDOM.js");
/* harmony import */ var _projectNew__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./projectNew */ "./src/projectNew.js");
/* harmony import */ var _taskNew__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./taskNew */ "./src/taskNew.js");
/* harmony import */ var _taskStoreInput__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./taskStoreInput */ "./src/taskStoreInput.js");
/* harmony import */ var _projectStorage__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./projectStorage */ "./src/projectStorage.js");
/* harmony import */ var _projectInsertProjects__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ./projectInsertProjects */ "./src/projectInsertProjects.js");
/* harmony import */ var _returnButtonRemove__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ./returnButtonRemove */ "./src/returnButtonRemove.js");










function taskListener() {
    let content = document.querySelector('#content')
    let taskCount = 0
    let taskIdNumber
    
    content.addEventListener('click', (e) => {
        let taskDash = document.querySelector('.edit-project-dash')

        if (taskDash != null) {
            //Add task
            if (e.target.id.includes('add-task')) {
                taskCount += 1
                ;(0,_taskNew__WEBPACK_IMPORTED_MODULE_4__.newTask)(taskCount) //Pushes taskCount number for creating different id's
            }

            //Delete task
            if (e.target.parentElement.id.includes('task-delete')) {
                let task = e.target.parentElement.parentElement.parentElement
                taskDash.removeChild(task)
    
                const taskId = e.target.parentElement.id
                taskIdNumber = parseInt(taskId.replace(/\D/g, ""))
                const task2delete = taskIdNumber-1
            }

            //Toggle task detail
            let selectedButton = e.target.parentElement.id
            let taskDetail = e.target.parentElement.parentElement.nextSibling
            let detailTarget = e.target.parentElement
            ;(0,_taskToggleDetail__WEBPACK_IMPORTED_MODULE_0__.toggleDetail)(selectedButton, taskDetail, detailTarget)

            //Return to projects
            if (e.target.id.includes('return-pj-edit') ||
            e.target.parentElement.id.includes('return-pj-edit')) {
                const storedTasks = [] //Will be filled with the inputs of an individual task
                let projectTitle = document.querySelector('.project-title').textContent
                let projectID = document.querySelector('.project-title').id
                const projectTasks = {title: projectTitle, tasks: (0,_taskStoreInput__WEBPACK_IMPORTED_MODULE_5__.storeTaskInput)(storedTasks), id: projectID}
                //Array of all the tasks of one project

                ;(0,_projectStorage__WEBPACK_IMPORTED_MODULE_6__.projectStorage)('write', projectID, projectTasks) //Stores the tasks of one project
                ;(0,_clearDOM__WEBPACK_IMPORTED_MODULE_1__.clearDOM)()
                ;(0,_projectDOM__WEBPACK_IMPORTED_MODULE_2__.projectDOM)()
                ;(0,_projectInsertProjects__WEBPACK_IMPORTED_MODULE_7__.insertStoredProjects)()
                ;(0,_returnButtonRemove__WEBPACK_IMPORTED_MODULE_8__.removeReturnButton)()
                taskCount = 0
            }
        }
    })
}

/***/ }),

/***/ "./src/taskNew.js":
/*!************************!*\
  !*** ./src/taskNew.js ***!
  \************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "newTask": () => (/* binding */ newTask)
/* harmony export */ });
/* harmony import */ var _newIcon__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./newIcon */ "./src/newIcon.js");
/* harmony import */ var _appendDOM__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./appendDOM */ "./src/appendDOM.js");



//Creates the DOM for an individual task
function newTask(taskCount, tskCheck, tskTitle, tskDescrip, tskDate) {
    if (tskTitle === undefined) {
        tskTitle = ''
        tskDescrip = ''
    }

    let dashboard = document.querySelector('.edit-project-dash')

    let taskEdit = document.createElement('div')
    taskEdit.className = 'task-container'
    dashboard.appendChild(taskEdit)

    let taskContainer1 = document.createElement('div')
    taskContainer1.className = 'task-container1'
    taskEdit.appendChild(taskContainer1)

        let taskCheck = document.createElement('input')
        taskCheck.setAttribute("type", "checkbox")
        taskCheck.className = 'task-completed'
        taskCheck.checked = tskCheck
        taskContainer1.appendChild(taskCheck)

        let taskTitle = document.createElement('input')
        taskTitle.setAttribute("type", "text")
        taskTitle.placeholder = 'Title your task'
        taskTitle.className = 'task-title'
        taskTitle.value = tskTitle
        taskContainer1.appendChild(taskTitle)

        let taskDetail = (0,_newIcon__WEBPACK_IMPORTED_MODULE_0__.newIcon)('task-detail-button', `task-detail${taskCount}`,
        'down-svgrepo-com.svg', 'task-icon')
        taskContainer1.appendChild(taskDetail)

        let taskDelete = (0,_newIcon__WEBPACK_IMPORTED_MODULE_0__.newIcon)('task-delete-button', `task-delete${taskCount}`,
        'delete-svgrepo-com.svg', 'task-icon')
        taskContainer1.appendChild(taskDelete)

    let taskContainer2 = document.createElement('div')
    taskContainer2.className = 'task-container2'
    taskEdit.appendChild(taskContainer2)

        let taskDescription = document.createElement('textarea')
        taskDescription.setAttribute("rows", "8")
        taskDescription.placeholder = 'Add a description'
        taskDescription.className = 'task-description'
        taskDescription.value = tskDescrip
        taskContainer2.appendChild(taskDescription)

        let taskContainer3 = document.createElement('div')
        taskContainer3.className = 'task-container3'
        taskContainer2.appendChild(taskContainer3)

            let taskContainer4 = document.createElement('div')
            taskContainer4.className = 'task-container4'
            taskContainer3.appendChild(taskContainer4)

                    let today = document.createElement('button')
                    today.id = `today${taskCount}`
                    today.textContent = 'Today'
                    taskContainer4.appendChild(today)

                    let tomorrow = document.createElement('button')
                    tomorrow.id = `tomorrow${taskCount}`
                    tomorrow.textContent = 'Tomorrow'
                    taskContainer4.appendChild(tomorrow)
                    
                    let dueDate = document.createElement('input')
                    dueDate.setAttribute("type", "date")
                    dueDate.className = 'task-date'
                    dueDate.id = `date${taskCount}`
                    dueDate.value = tskDate
                    taskContainer4.appendChild(dueDate)

            let taskSubmit = document.createElement('button')

            taskSubmit.textContent = 'Submit'
            taskSubmit.className = 'task-submit'
            taskContainer3.appendChild(taskSubmit)

    ;(0,_appendDOM__WEBPACK_IMPORTED_MODULE_1__.appendDOM)(dashboard)
}

/***/ }),

/***/ "./src/taskStoreInput.js":
/*!*******************************!*\
  !*** ./src/taskStoreInput.js ***!
  \*******************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "storeTaskInput": () => (/* binding */ storeTaskInput)
/* harmony export */ });
function storeTaskInput(storedTasks) {
    //Gets the tasks inputs from the DOM
    let tasksNodeList = document.querySelectorAll('.task-container')
    let tasksArray = Array.from(tasksNodeList)
    let projectTitle = document.querySelector('.project-title').textContent
    let projectID = document.querySelector('.project-title').id
    
    for (let key in tasksArray) {
        let taskTitle = tasksArray[key].querySelector(`.task-title`)
        let taskDescription = tasksArray[key].querySelector(`.task-description`)
        let taskCompleted = tasksArray[key].querySelector(`.task-completed`)
        let taskDate = tasksArray[key].querySelector(`.task-date`)

        if (taskTitle != null) {           
            const projectTasks = { id: projectID, project: projectTitle, title: taskTitle.value, description: taskDescription.value, date: taskDate.value,
            completed: taskCompleted.checked }
            storedTasks.push(projectTasks)
        }
    }
    return storedTasks
 }
 

/***/ }),

/***/ "./src/taskToggleDetail.js":
/*!*********************************!*\
  !*** ./src/taskToggleDetail.js ***!
  \*********************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "toggleDetail": () => (/* binding */ toggleDetail)
/* harmony export */ });
function toggleDetail(selectedButton, taskDetail, detailTarget) {
    if(selectedButton.includes('task-detail')
    && !detailTarget.outerHTML.includes('rotate')) {
        taskDetail.style.display = 'none'
        detailTarget.style.cssText = 
         'transform-box: fill-box; transform-origin: center;transform: rotate(0deg);transition: transform 0.7s;'
    }
    else if (selectedButton.includes('task-detail')
    && detailTarget.outerHTML.includes('rotate')) {
        taskDetail.style.display = 'flex'
        detailTarget.style.cssText = ''
    }
}

/***/ }),

/***/ "./src/upcomingDOM.js":
/*!****************************!*\
  !*** ./src/upcomingDOM.js ***!
  \****************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "upcomingTasksDOM": () => (/* binding */ upcomingTasksDOM)
/* harmony export */ });
/* harmony import */ var _clearDOM__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./clearDOM */ "./src/clearDOM.js");
/* harmony import */ var _appendDOM__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./appendDOM */ "./src/appendDOM.js");
/* harmony import */ var _footer__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./footer */ "./src/footer.js");
/* harmony import */ var _upcomingDisplay__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./upcomingDisplay */ "./src/upcomingDisplay.js");
/* harmony import */ var _upcomingObject__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./upcomingObject */ "./src/upcomingObject.js");
/* harmony import */ var _newIcon__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./newIcon */ "./src/newIcon.js");
/* harmony import */ var _returnButtonRemove__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./returnButtonRemove */ "./src/returnButtonRemove.js");








function upcomingTasksDOM() {
    (0,_clearDOM__WEBPACK_IMPORTED_MODULE_0__.clearDOM)()
    ;(0,_returnButtonRemove__WEBPACK_IMPORTED_MODULE_6__.removeReturnButton)()

    let sidebar = document.querySelector('.sidebar')
    let returnButton = (0,_newIcon__WEBPACK_IMPORTED_MODULE_5__.newIcon)('sidebar-button', 'return-upcoming-tsk',
    'return-back-svgrepo-com.svg', 'sidebar-icon', 'Return')
    sidebar.appendChild(returnButton)
    
    let dashboard = document.createElement('div')
    dashboard.className = 'upcoming-dash'

    let title = document.createElement('p')
    title.className = 'upcoming-title'
    title.textContent = 'Upcoming tasks'
    dashboard.appendChild(title)

    let tasksGrid = document.createElement('div')
    tasksGrid.className = 'tasks-grid'
    dashboard.appendChild(tasksGrid)

    ;(0,_appendDOM__WEBPACK_IMPORTED_MODULE_1__.appendDOM)(dashboard)
    ;(0,_footer__WEBPACK_IMPORTED_MODULE_2__.footer)()

    let sortedTasks = (0,_upcomingObject__WEBPACK_IMPORTED_MODULE_4__.upcomingTasksObject)()
    //console.log(sortedTasks)
    for (let key in sortedTasks) {
        let tskCompletion = sortedTasks[key].completed
        let tskTitle = sortedTasks[key].title
        let tskDate = sortedTasks[key].date
        let tskProject = sortedTasks[key].project
        let tskID = sortedTasks[key].id

        ;(0,_upcomingDisplay__WEBPACK_IMPORTED_MODULE_3__.displayUpcomingTask)(tskCompletion, tskTitle, tskDate, tskProject, tskID)
    }
}

/***/ }),

/***/ "./src/upcomingDisplay.js":
/*!********************************!*\
  !*** ./src/upcomingDisplay.js ***!
  \********************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "displayUpcomingTask": () => (/* binding */ displayUpcomingTask)
/* harmony export */ });
function displayUpcomingTask(tskCompletion, tskTitle, tskDate, tskProject, tskID) {
    if (tskCompletion) {
        tskCompletion = 'Completed task'
    }
    else {
        tskCompletion = 'Uncompleted task'
    }

    let tasksGrid = document.querySelector('.tasks-grid')
        
    let taskContainer = document.createElement('div')
    taskContainer.className = 'upcoming-container'
    taskContainer.id = `upcomingT-container${tskID}`
    tasksGrid.appendChild(taskContainer)

        let taskTitle = document.createElement('div')
        taskTitle.className = 'upcoming-task-title'
        taskTitle.id = `upcomingT-title${tskID}`
        taskTitle.textContent = tskTitle
        taskContainer.appendChild(taskTitle)

        let taskInfo = document.createElement('div')
        taskInfo.className = 'upcoming-task-info'
        taskInfo.id = `upcomingT-info${tskID}`
        taskContainer.appendChild(taskInfo)

            let container1 = document.createElement('div')
            container1.className = 'upcoming-container1'
            container1.id = `upcomingT-containerI${tskID}`
            taskInfo.appendChild(container1)

                let dateTitle = document.createElement('p')
                dateTitle.textContent = 'Date:'
                dateTitle.id = `upcomingT-date-title${tskID}`
                container1.appendChild(dateTitle)

                let projectTitle = document.createElement('p')
                projectTitle.textContent = 'Project:'
                projectTitle.id = `upcomingT-pj-title${tskID}`
                container1.appendChild(projectTitle)

                let completionTitle = document.createElement('p')
                completionTitle.textContent = 'Status:'
                completionTitle.id = `upcomingT-completion-title${tskID}`
                container1.appendChild(completionTitle)
            
            let container2 = document.createElement('div')
            container2.className = 'upcoming-container2'
            container2.id = `upcomingT-containerII${tskID}`
            taskInfo.appendChild(container2)

                let taskDate = document.createElement('p')
                taskDate.textContent = tskDate
                taskDate.className = 'task-date'
                taskDate.id = `upcomingT-date${tskID}`
                container2.appendChild(taskDate)

                let taskProject = document.createElement('p')
                taskProject.className = 'task-project'
                taskProject.id = `upcomingT-pj${tskID}`
                taskProject.textContent = tskProject
                container2.appendChild(taskProject)

                let taskCompletion = document.createElement('p')
                taskCompletion.className = 'task-completion'
                taskCompletion.id = `upcomingT-completion${tskID}`
                taskCompletion.textContent = tskCompletion
                container2.appendChild(taskCompletion)
}

/***/ }),

/***/ "./src/upcomingObject.js":
/*!*******************************!*\
  !*** ./src/upcomingObject.js ***!
  \*******************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "upcomingTasksObject": () => (/* binding */ upcomingTasksObject)
/* harmony export */ });
/* harmony import */ var _projectStorage__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./projectStorage */ "./src/projectStorage.js");


function upcomingTasksObject() {
    let storedProjects = (0,_projectStorage__WEBPACK_IMPORTED_MODULE_0__.projectStorage)('read')
    let flattened = storedProjects.flatMap(item => item.tasks);
    flattened.sort((a, b) => (a.date > b.date) ? 1 : -1)

    return flattened
}

/***/ }),

/***/ "./src/style.css":
/*!***********************!*\
  !*** ./src/style.css ***!
  \***********************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! !../node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js */ "./node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js");
/* harmony import */ var _node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _node_modules_style_loader_dist_runtime_styleDomAPI_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! !../node_modules/style-loader/dist/runtime/styleDomAPI.js */ "./node_modules/style-loader/dist/runtime/styleDomAPI.js");
/* harmony import */ var _node_modules_style_loader_dist_runtime_styleDomAPI_js__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_styleDomAPI_js__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _node_modules_style_loader_dist_runtime_insertBySelector_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! !../node_modules/style-loader/dist/runtime/insertBySelector.js */ "./node_modules/style-loader/dist/runtime/insertBySelector.js");
/* harmony import */ var _node_modules_style_loader_dist_runtime_insertBySelector_js__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_insertBySelector_js__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var _node_modules_style_loader_dist_runtime_setAttributesWithoutAttributes_js__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! !../node_modules/style-loader/dist/runtime/setAttributesWithoutAttributes.js */ "./node_modules/style-loader/dist/runtime/setAttributesWithoutAttributes.js");
/* harmony import */ var _node_modules_style_loader_dist_runtime_setAttributesWithoutAttributes_js__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_setAttributesWithoutAttributes_js__WEBPACK_IMPORTED_MODULE_3__);
/* harmony import */ var _node_modules_style_loader_dist_runtime_insertStyleElement_js__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! !../node_modules/style-loader/dist/runtime/insertStyleElement.js */ "./node_modules/style-loader/dist/runtime/insertStyleElement.js");
/* harmony import */ var _node_modules_style_loader_dist_runtime_insertStyleElement_js__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_insertStyleElement_js__WEBPACK_IMPORTED_MODULE_4__);
/* harmony import */ var _node_modules_style_loader_dist_runtime_styleTagTransform_js__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! !../node_modules/style-loader/dist/runtime/styleTagTransform.js */ "./node_modules/style-loader/dist/runtime/styleTagTransform.js");
/* harmony import */ var _node_modules_style_loader_dist_runtime_styleTagTransform_js__WEBPACK_IMPORTED_MODULE_5___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_styleTagTransform_js__WEBPACK_IMPORTED_MODULE_5__);
/* harmony import */ var _node_modules_css_loader_dist_cjs_js_style_css__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! !!../node_modules/css-loader/dist/cjs.js!./style.css */ "./node_modules/css-loader/dist/cjs.js!./src/style.css");

      
      
      
      
      
      
      
      
      

var options = {};

options.styleTagTransform = (_node_modules_style_loader_dist_runtime_styleTagTransform_js__WEBPACK_IMPORTED_MODULE_5___default());
options.setAttributes = (_node_modules_style_loader_dist_runtime_setAttributesWithoutAttributes_js__WEBPACK_IMPORTED_MODULE_3___default());

      options.insert = _node_modules_style_loader_dist_runtime_insertBySelector_js__WEBPACK_IMPORTED_MODULE_2___default().bind(null, "head");
    
options.domAPI = (_node_modules_style_loader_dist_runtime_styleDomAPI_js__WEBPACK_IMPORTED_MODULE_1___default());
options.insertStyleElement = (_node_modules_style_loader_dist_runtime_insertStyleElement_js__WEBPACK_IMPORTED_MODULE_4___default());

var update = _node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0___default()(_node_modules_css_loader_dist_cjs_js_style_css__WEBPACK_IMPORTED_MODULE_6__["default"], options);




       /* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (_node_modules_css_loader_dist_cjs_js_style_css__WEBPACK_IMPORTED_MODULE_6__["default"] && _node_modules_css_loader_dist_cjs_js_style_css__WEBPACK_IMPORTED_MODULE_6__["default"].locals ? _node_modules_css_loader_dist_cjs_js_style_css__WEBPACK_IMPORTED_MODULE_6__["default"].locals : undefined);


/***/ })

/******/ 	});
/************************************************************************/
/******/ 	// The module cache
/******/ 	var __webpack_module_cache__ = {};
/******/ 	
/******/ 	// The require function
/******/ 	function __webpack_require__(moduleId) {
/******/ 		// Check if module is in cache
/******/ 		var cachedModule = __webpack_module_cache__[moduleId];
/******/ 		if (cachedModule !== undefined) {
/******/ 			return cachedModule.exports;
/******/ 		}
/******/ 		// Create a new module (and put it into the cache)
/******/ 		var module = __webpack_module_cache__[moduleId] = {
/******/ 			id: moduleId,
/******/ 			// no module.loaded needed
/******/ 			exports: {}
/******/ 		};
/******/ 	
/******/ 		// Execute the module function
/******/ 		__webpack_modules__[moduleId](module, module.exports, __webpack_require__);
/******/ 	
/******/ 		// Return the exports of the module
/******/ 		return module.exports;
/******/ 	}
/******/ 	
/******/ 	// expose the modules object (__webpack_modules__)
/******/ 	__webpack_require__.m = __webpack_modules__;
/******/ 	
/************************************************************************/
/******/ 	/* webpack/runtime/chunk loaded */
/******/ 	(() => {
/******/ 		var deferred = [];
/******/ 		__webpack_require__.O = (result, chunkIds, fn, priority) => {
/******/ 			if(chunkIds) {
/******/ 				priority = priority || 0;
/******/ 				for(var i = deferred.length; i > 0 && deferred[i - 1][2] > priority; i--) deferred[i] = deferred[i - 1];
/******/ 				deferred[i] = [chunkIds, fn, priority];
/******/ 				return;
/******/ 			}
/******/ 			var notFulfilled = Infinity;
/******/ 			for (var i = 0; i < deferred.length; i++) {
/******/ 				var [chunkIds, fn, priority] = deferred[i];
/******/ 				var fulfilled = true;
/******/ 				for (var j = 0; j < chunkIds.length; j++) {
/******/ 					if ((priority & 1 === 0 || notFulfilled >= priority) && Object.keys(__webpack_require__.O).every((key) => (__webpack_require__.O[key](chunkIds[j])))) {
/******/ 						chunkIds.splice(j--, 1);
/******/ 					} else {
/******/ 						fulfilled = false;
/******/ 						if(priority < notFulfilled) notFulfilled = priority;
/******/ 					}
/******/ 				}
/******/ 				if(fulfilled) {
/******/ 					deferred.splice(i--, 1)
/******/ 					var r = fn();
/******/ 					if (r !== undefined) result = r;
/******/ 				}
/******/ 			}
/******/ 			return result;
/******/ 		};
/******/ 	})();
/******/ 	
/******/ 	/* webpack/runtime/compat get default export */
/******/ 	(() => {
/******/ 		// getDefaultExport function for compatibility with non-harmony modules
/******/ 		__webpack_require__.n = (module) => {
/******/ 			var getter = module && module.__esModule ?
/******/ 				() => (module['default']) :
/******/ 				() => (module);
/******/ 			__webpack_require__.d(getter, { a: getter });
/******/ 			return getter;
/******/ 		};
/******/ 	})();
/******/ 	
/******/ 	/* webpack/runtime/define property getters */
/******/ 	(() => {
/******/ 		// define getter functions for harmony exports
/******/ 		__webpack_require__.d = (exports, definition) => {
/******/ 			for(var key in definition) {
/******/ 				if(__webpack_require__.o(definition, key) && !__webpack_require__.o(exports, key)) {
/******/ 					Object.defineProperty(exports, key, { enumerable: true, get: definition[key] });
/******/ 				}
/******/ 			}
/******/ 		};
/******/ 	})();
/******/ 	
/******/ 	/* webpack/runtime/hasOwnProperty shorthand */
/******/ 	(() => {
/******/ 		__webpack_require__.o = (obj, prop) => (Object.prototype.hasOwnProperty.call(obj, prop))
/******/ 	})();
/******/ 	
/******/ 	/* webpack/runtime/make namespace object */
/******/ 	(() => {
/******/ 		// define __esModule on exports
/******/ 		__webpack_require__.r = (exports) => {
/******/ 			if(typeof Symbol !== 'undefined' && Symbol.toStringTag) {
/******/ 				Object.defineProperty(exports, Symbol.toStringTag, { value: 'Module' });
/******/ 			}
/******/ 			Object.defineProperty(exports, '__esModule', { value: true });
/******/ 		};
/******/ 	})();
/******/ 	
/******/ 	/* webpack/runtime/jsonp chunk loading */
/******/ 	(() => {
/******/ 		// no baseURI
/******/ 		
/******/ 		// object to store loaded and loading chunks
/******/ 		// undefined = chunk not loaded, null = chunk preloaded/prefetched
/******/ 		// [resolve, reject, Promise] = chunk loading, 0 = chunk loaded
/******/ 		var installedChunks = {
/******/ 			"app": 0
/******/ 		};
/******/ 		
/******/ 		// no chunk on demand loading
/******/ 		
/******/ 		// no prefetching
/******/ 		
/******/ 		// no preloaded
/******/ 		
/******/ 		// no HMR
/******/ 		
/******/ 		// no HMR manifest
/******/ 		
/******/ 		__webpack_require__.O.j = (chunkId) => (installedChunks[chunkId] === 0);
/******/ 		
/******/ 		// install a JSONP callback for chunk loading
/******/ 		var webpackJsonpCallback = (parentChunkLoadingFunction, data) => {
/******/ 			var [chunkIds, moreModules, runtime] = data;
/******/ 			// add "moreModules" to the modules object,
/******/ 			// then flag all "chunkIds" as loaded and fire callback
/******/ 			var moduleId, chunkId, i = 0;
/******/ 			if(chunkIds.some((id) => (installedChunks[id] !== 0))) {
/******/ 				for(moduleId in moreModules) {
/******/ 					if(__webpack_require__.o(moreModules, moduleId)) {
/******/ 						__webpack_require__.m[moduleId] = moreModules[moduleId];
/******/ 					}
/******/ 				}
/******/ 				if(runtime) var result = runtime(__webpack_require__);
/******/ 			}
/******/ 			if(parentChunkLoadingFunction) parentChunkLoadingFunction(data);
/******/ 			for(;i < chunkIds.length; i++) {
/******/ 				chunkId = chunkIds[i];
/******/ 				if(__webpack_require__.o(installedChunks, chunkId) && installedChunks[chunkId]) {
/******/ 					installedChunks[chunkId][0]();
/******/ 				}
/******/ 				installedChunks[chunkId] = 0;
/******/ 			}
/******/ 			return __webpack_require__.O(result);
/******/ 		}
/******/ 		
/******/ 		var chunkLoadingGlobal = self["webpackChunktodo_list"] = self["webpackChunktodo_list"] || [];
/******/ 		chunkLoadingGlobal.forEach(webpackJsonpCallback.bind(null, 0));
/******/ 		chunkLoadingGlobal.push = webpackJsonpCallback.bind(null, chunkLoadingGlobal.push.bind(chunkLoadingGlobal));
/******/ 	})();
/******/ 	
/******/ 	/* webpack/runtime/nonce */
/******/ 	(() => {
/******/ 		__webpack_require__.nc = undefined;
/******/ 	})();
/******/ 	
/************************************************************************/
/******/ 	
/******/ 	// startup
/******/ 	// Load entry module and return exports
/******/ 	// This entry module depends on other loaded chunks and execution need to be delayed
/******/ 	var __webpack_exports__ = __webpack_require__.O(undefined, ["vendors"], () => (__webpack_require__("./src/app.js")))
/******/ 	__webpack_exports__ = __webpack_require__.O(__webpack_exports__);
/******/ 	
/******/ })()
;
//# sourceMappingURL=app.js.map