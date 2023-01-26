/*
 * ATTENTION: The "eval" devtool has been used (maybe by default in mode: "development").
 * This devtool is neither made for production nor for readable output files.
 * It uses "eval()" calls to create a separate source file in the browser devtools.
 * If you are trying to read the output file, select a different devtool (https://webpack.js.org/configuration/devtool/)
 * or disable the default devtool with "devtool: false".
 * If you are looking for production-ready output files, see mode: "production" (https://webpack.js.org/configuration/mode/).
 */
/******/ (() => { // webpackBootstrap
/******/ 	"use strict";
/******/ 	var __webpack_modules__ = ({

/***/ "./node_modules/css-loader/dist/cjs.js!./src/styles/style.css":
/*!********************************************************************!*\
  !*** ./node_modules/css-loader/dist/cjs.js!./src/styles/style.css ***!
  \********************************************************************/
/***/ ((module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (__WEBPACK_DEFAULT_EXPORT__)\n/* harmony export */ });\n/* harmony import */ var _node_modules_css_loader_dist_runtime_noSourceMaps_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../../node_modules/css-loader/dist/runtime/noSourceMaps.js */ \"./node_modules/css-loader/dist/runtime/noSourceMaps.js\");\n/* harmony import */ var _node_modules_css_loader_dist_runtime_noSourceMaps_js__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_node_modules_css_loader_dist_runtime_noSourceMaps_js__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var _node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../../node_modules/css-loader/dist/runtime/api.js */ \"./node_modules/css-loader/dist/runtime/api.js\");\n/* harmony import */ var _node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1__);\n/* harmony import */ var _node_modules_css_loader_dist_runtime_getUrl_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../node_modules/css-loader/dist/runtime/getUrl.js */ \"./node_modules/css-loader/dist/runtime/getUrl.js\");\n/* harmony import */ var _node_modules_css_loader_dist_runtime_getUrl_js__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(_node_modules_css_loader_dist_runtime_getUrl_js__WEBPACK_IMPORTED_MODULE_2__);\n// Imports\n\n\n\nvar ___CSS_LOADER_URL_IMPORT_0___ = new URL(/* asset import */ __webpack_require__(/*! ./assets/fonts/bebas-neue-v9-latin-regular.woff2 */ \"./src/styles/assets/fonts/bebas-neue-v9-latin-regular.woff2\"), __webpack_require__.b);\nvar ___CSS_LOADER_URL_IMPORT_1___ = new URL(/* asset import */ __webpack_require__(/*! ./assets/fonts/bebas-neue-v9-latin-regular.woff */ \"./src/styles/assets/fonts/bebas-neue-v9-latin-regular.woff\"), __webpack_require__.b);\nvar ___CSS_LOADER_URL_IMPORT_2___ = new URL(/* asset import */ __webpack_require__(/*! ./assets/svg/dot-menu.svg */ \"./src/styles/assets/svg/dot-menu.svg\"), __webpack_require__.b);\nvar ___CSS_LOADER_URL_IMPORT_3___ = new URL(/* asset import */ __webpack_require__(/*! ./assets/svg/partly-sunny.svg */ \"./src/styles/assets/svg/partly-sunny.svg\"), __webpack_require__.b);\nvar ___CSS_LOADER_EXPORT___ = _node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1___default()((_node_modules_css_loader_dist_runtime_noSourceMaps_js__WEBPACK_IMPORTED_MODULE_0___default()));\nvar ___CSS_LOADER_URL_REPLACEMENT_0___ = _node_modules_css_loader_dist_runtime_getUrl_js__WEBPACK_IMPORTED_MODULE_2___default()(___CSS_LOADER_URL_IMPORT_0___);\nvar ___CSS_LOADER_URL_REPLACEMENT_1___ = _node_modules_css_loader_dist_runtime_getUrl_js__WEBPACK_IMPORTED_MODULE_2___default()(___CSS_LOADER_URL_IMPORT_1___);\nvar ___CSS_LOADER_URL_REPLACEMENT_2___ = _node_modules_css_loader_dist_runtime_getUrl_js__WEBPACK_IMPORTED_MODULE_2___default()(___CSS_LOADER_URL_IMPORT_2___);\nvar ___CSS_LOADER_URL_REPLACEMENT_3___ = _node_modules_css_loader_dist_runtime_getUrl_js__WEBPACK_IMPORTED_MODULE_2___default()(___CSS_LOADER_URL_IMPORT_3___);\n// Module\n___CSS_LOADER_EXPORT___.push([module.id, \":root {\\n  box-sizing: border-box;\\n  --header-tint: #c5e9d2;\\n  --search-bar: #81fa8182;\\n  --background: linear-gradient(#008c1c, #92ff95 90%);\\n  --temp-color: #60e164;\\n  --temp-circle: var(--temp-color), #32ccb6;\\n  --temp-circle-shadow: #1b8509;\\n  --wind-gauge-shadow: #108a1f;\\n}\\n\\nhtml[data-theme=\\\"cold\\\"] {\\n  --header-tint: #c5cae9;\\n  --search-bar: #81d4fa82;\\n  --background: linear-gradient(#001d8c, #92f2ff 90%);\\n  --temp-color: #60c2e1;\\n  --temp-circle: var(--temp-color), #3279cc;\\n  --temp-circle-shadow: #0034f6;\\n  --wind-gauge-shadow: #3557b1;\\n}\\n\\nhtml[data-theme=\\\"mild\\\"] {\\n  --header-tint: #c5e9d2;\\n  --search-bar: #81fa8182;\\n  --background: linear-gradient(#008c1c, #71de74 90%);\\n  --temp-color: #60e164;\\n  --temp-circle: var(--temp-color), #32ccb6;\\n  --temp-circle-shadow: #1b8509;\\n  --wind-gauge-shadow: #108a1f;\\n}\\n\\nhtml[data-theme=\\\"warm\\\"] {\\n  --header-tint: #e9dec5;\\n  --search-bar: #fa968182;\\n  --background: linear-gradient(#e91e63, #ffda53 90%);\\n  --temp-color: #e91e63;\\n  --temp-circle: var(--temp-color), #efd50f;\\n  --temp-circle-shadow: #b10a0a;\\n  --wind-gauge-shadow: #c3285d;\\n}\\n\\n@font-face {\\n  font-family: 'Bebas Neue';\\n  font-style: normal;\\n  font-weight: 400;\\n  src: local(''),\\n       url(\" + ___CSS_LOADER_URL_REPLACEMENT_0___ + \") format('woff2'), /* Chrome 26+, Opera 23+, Firefox 39+ */\\n       url(\" + ___CSS_LOADER_URL_REPLACEMENT_1___ + \") format('woff'); /* Chrome 6+, Firefox 3.6+, IE 9+, Safari 5.1+ */\\n}\\n\\nbody {\\n  margin: 0;\\n  overflow: hidden;\\n}\\n\\n.content {\\n  display: flex;\\n  flex-direction: column;\\n  height: 100vh;\\n  min-width: 320px;\\n  overflow-x: hidden;\\n  user-select: none;\\n  overflow: hidden;\\n}\\n\\n.header {\\n  display: flex;\\n  align-items: center;\\n  height: 60px;\\n  background: linear-gradient(180deg, #ffffff, var(--header-tint));\\n  box-shadow: 0px 0px 8px 0px black;\\n  z-index: 1;\\n}\\n\\n.search-container {\\n  display: flex;\\n  height: 40px;\\n  padding: 10px;\\n  flex: 1;\\n}\\n\\ninput.search-bar {\\n  border-radius: 6px;\\n  border: none;\\n  box-shadow: inset 0px 0px 3px 0px black;\\n  padding-left: 5px;\\n  font-size: 24px;\\n  flex: 1;\\n  background-color: var(--search-bar);\\n}\\n\\n.settings-icon {\\n  background-image: url(\" + ___CSS_LOADER_URL_REPLACEMENT_2___ + \");\\n  width: 24px;\\n  height: 24px;\\n  background-size: contain;\\n  background-repeat: no-repeat;\\n  background-position: center;\\n  transform: scale(1.5);\\n  margin-right: 10px;\\n  cursor: pointer;\\n}\\n\\n/* SETTINGS MODAL */\\n.settings-modal {\\n  position: fixed;\\n  top: 60px;\\n  right: -160px;\\n  padding: 10px 20px 15px 15px;\\n  border-radius: 0 0 0 25px;\\n  box-shadow: 0px 0px 8px 0px black;\\n  background: linear-gradient(180deg, #ffffff, var(--header-tint));\\n  color: #5f5f5f;\\n  transition: 0.2s ease-in;\\n}\\n\\n.open-menu {\\n  transform: translateX(-160px);\\n}\\n\\n.settings-container {\\n  font-family: sans-serif;\\n}\\n\\n.units {\\n  margin-bottom: 2px;\\n}\\n\\n.slider-container {\\n  display: flex;\\n  align-items: center;\\n  gap: 5px;\\n}\\n\\n.fc {\\n  font-size: 22px;\\n}\\n\\n.switch {\\n  position: relative;\\n  display: inline-block;\\n  width: 60px;\\n  height: 34px;\\n}\\n\\n.switch input { \\n  opacity: 0;\\n  width: 0;\\n  height: 0;\\n}\\n\\n.slider {\\n  position: absolute;\\n  cursor: pointer;\\n  top: 0;\\n  left: 0;\\n  right: 0;\\n  bottom: 0;\\n  background-color: rgb(0, 212, 4);\\n  -webkit-transition: .4s;\\n  transition: .4s;\\n}\\n\\n.slider:before {\\n  position: absolute;\\n  content: \\\"\\\";\\n  height: 26px;\\n  width: 26px;\\n  left: 4px;\\n  bottom: 4px;\\n  background-color: white;\\n  -webkit-transition: .4s;\\n  transition: .4s;\\n}\\n\\ninput:checked + .slider {\\n  background-color: #2196F3;\\n}\\n\\ninput:checked + .slider:before {\\n  -webkit-transform: translateX(26px);\\n  -ms-transform: translateX(26px);\\n  transform: translateX(26px);\\n}\\n\\n.slider.round {\\n  border-radius: 34px;\\n  box-shadow: inset 0px 0px 9px 0px #4c4c4c;\\n}\\n\\n.slider.round:before {\\n  border-radius: 50%;\\n}\\n\\n/* HIDDEN */\\n.hidden {\\n  display: none;\\n}\\n\\n/* ERROR */\\n.error {\\n  height: 100%;\\n}\\n\\n/* HOMEPAGE */\\n.homepage {\\n  height: 100%;\\n}\\n\\n.prompt-container {\\n  width: 75%;\\n  margin-top: 40px;\\n}\\n\\n.prompt {\\n  font-family: sans-serif;\\n  font-size: 22px;\\n  text-align: center;\\n  color: #707070;\\n}\\n\\n.welcome {\\n  background: linear-gradient(180deg, #e4ffc4, #b9ff8e);\\n  height: 100%;\\n  display: flex;\\n  flex-direction: column;\\n  align-items: center;\\n}\\n\\n/* LOADING */\\n.loading {\\n  height: 100%;\\n}\\n\\n.loading-container {\\n  top: 35%;\\n  position: absolute;\\n}\\n\\n.lds-ellipsis {\\n  display: inline-block;\\n  position: relative;\\n  width: 80px;\\n  height: 80px;\\n}\\n\\n.lds-ellipsis div {\\n  position: absolute;\\n  top: 33px;\\n  width: 13px;\\n  height: 13px;\\n  border-radius: 50%;\\n  background: #00e718;\\n  animation-timing-function: cubic-bezier(0, 1, 1, 0);\\n}\\n\\n.lds-ellipsis div:nth-child(1) {\\n  left: 8px;\\n  animation: lds-ellipsis1 0.6s infinite;\\n}\\n\\n.lds-ellipsis div:nth-child(2) {\\n  left: 8px;\\n  animation: lds-ellipsis2 0.6s infinite;\\n}\\n\\n.lds-ellipsis div:nth-child(3) {\\n  left: 32px;\\n  animation: lds-ellipsis2 0.6s infinite;\\n}\\n\\n.lds-ellipsis div:nth-child(4) {\\n  left: 56px;\\n  animation: lds-ellipsis3 0.6s infinite;\\n}\\n\\n@keyframes lds-ellipsis1 {\\n  0% {\\n    transform: scale(0);\\n  }\\n  100% {\\n    transform: scale(1);\\n  }\\n}\\n\\n@keyframes lds-ellipsis3 {\\n  0% {\\n    transform: scale(1);\\n  }\\n  100% {\\n    transform: scale(0);\\n  }\\n}\\n\\n@keyframes lds-ellipsis2 {\\n  0% {\\n    transform: translate(0, 0);\\n  }\\n  100% {\\n    transform: translate(24px, 0);\\n  }\\n}\\n\\n/* MAIN */\\n.main {\\n  height: 100%;\\n}\\n\\n.main-content {\\n  display: flex;\\n  flex-direction: column;\\n  /* grid-template-rows: 2fr 4fr 5fr; */\\n  height: 100%;\\n  background: var(--background);\\n}\\n\\n.city-info {\\n  font-family: 'Bebas Neue';\\n  color: white;\\n  padding-left: 5px;\\n}\\n\\n.city-name {\\n  font-size: 55px;\\n}\\n\\n.datetime {\\n  display: flex;\\n  gap: 10px;\\n  font-size: 24px;\\n}\\n\\n.weather {\\n  display: grid;\\n  grid-template-rows: repeat(2, 1fr);\\n  grid-template-columns: 2fr 1fr;\\n  font-family: sans-serif;\\n}\\n\\n.temp-circle-container {\\n  grid-row-start: 1;\\n  grid-row-end: 3;\\n  display: flex;\\n  justify-content: center;\\n  align-items: center;\\n}\\n\\n.temp-circle {\\n  border: 7px solid transparent;\\n  background: linear-gradient(white, white) padding-box,\\n              linear-gradient(to bottom, var(--temp-circle)) border-box;\\n  border-radius: 50%;\\n  height: 150px;\\n  width: 150px;\\n  display: flex;\\n  justify-content: center;\\n  align-items: center;\\n  flex-direction: column;\\n  box-shadow: 0 0 10px 0px var(--temp-circle-shadow);\\n}\\n\\n.high-low {\\n  display: flex;\\n  gap: 4px;\\n}\\n\\n.separator {\\n  color: lightgray;\\n}\\n\\n.low {\\n  color: #9b9a9a;\\n}\\n\\n.current-temp {\\n  display: flex;\\n  color: var(--temp-color);\\n}\\n\\n.current-temp .temp {\\n  font-size: 72px;\\n}\\n\\n.current-temp .temp-unit {\\n  position: relative;\\n  top: 13px;\\n}\\n\\n.temp-feels-like {\\n  display: flex;\\n  gap: 6px;\\n}\\n\\n.feels-temp {\\n  color: var(--temp-color);\\n}\\n\\n.status {\\n  display: flex;\\n  flex-direction: column;\\n  justify-content: center;\\n  align-items: center;\\n}\\n\\n.icon {\\n  background-image: url(\" + ___CSS_LOADER_URL_REPLACEMENT_3___ + \");\\n  height: 90px;\\n  width: 110px;\\n  background-size: contain;\\n  background-repeat: no-repeat;\\n  background-position: center;\\n}\\n\\n.weather-status {\\n  font-size: 13px;\\n  color: white;\\n}\\n\\n.windage-container {\\n  display: flex;\\n  justify-content: center;\\n  align-items: center;\\n}\\n\\n.windage {\\n  position: relative;\\n}\\n\\n.wind-gauge {\\n  border: 3px solid white;\\n  border-radius: 50%;\\n  height: 70px;\\n  width: 70px;\\n  position: relative;\\n  transform: rotate(1deg);\\n  box-shadow: inset 0 0 20px 0px var(--wind-gauge-shadow);\\n  transition: 1s ease-in-out;\\n}\\n\\n.wind-triangle {\\n  width: 0;\\n  height: 0;\\n  border-left: 5px solid transparent;\\n  border-right: 5px solid transparent;\\n  border-top: 18px solid white;\\n  position: absolute;\\n  left: 30px;\\n  top: -8px;\\n}\\n\\n.wind-data {\\n  position: absolute;\\n  top: 0;\\n  left: 0;\\n  height: 100%;\\n  width: 100%;\\n  display: flex;\\n  flex-direction: column;\\n  justify-content: center;\\n  align-items: center;\\n  color: white;\\n}\\n\\n.wind-direction {\\n  font-size: 12px;\\n}\\n\\n.wind-speed {\\n  font-weight: bolder;\\n}\\n\\n.weather-2 {\\n  height: 100%;\\n  display: flex;\\n  flex-direction: column;\\n  gap: 25px;\\n}\\n\\nfieldset {\\n  width: 80%;\\n  display: flex;\\n  justify-content: center;\\n  border: 1px solid white;\\n  position: relative;\\n  cursor: pointer;\\n}\\n\\nlegend {\\n  font-family: sans-serif;\\n  color: white;\\n  font-weight: bold;\\n}\\n\\n.popup {\\n  position: absolute;\\n  top: 20px;\\n  font-family: sans-serif;\\n  color: white;\\n  font-weight: bolder;\\n  border: 1px solid white;\\n  padding: 0 5px;\\n  background: #646464;\\n  border-radius: 5px;\\n  opacity: 0;\\n  pointer-events: none;\\n}\\n\\n.popup-animate {\\n  opacity: 1;\\n}\\n\\n.vhp-container {\\n  display: flex;\\n  flex-direction: column;\\n  justify-content: center;\\n  align-items: center;\\n}\\n\\nmeter {\\n  width: 95%;\\n  height: 50px;\\n  border-radius: 0;\\n}\\n\\n@-moz-document url-prefix() {\\n  meter {\\n    width: 98%;\\n    height: 30px;\\n    border-radius: 0;\\n    background: transparent;\\n    box-shadow: inset 0 0 3px 0 rgb(55, 54, 54);\\n  }\\n\\n  fieldset {\\n    height: 70px;\\n    display: flex;\\n    align-items: center;\\n  }\\n}\\n\\nmeter::-webkit-meter-bar {\\n  border-radius: 0;\\n  border: none;\\n  background: transparent;\\n  box-shadow: inset 0 0 3px 0 rgb(55, 54, 54);\\n}\\n\\nmeter::-webkit-meter-optimum-value {\\n  background: linear-gradient(to bottom, rgb(55, 255, 0), rgb(0, 255, 8));\\n}\\n\\nmeter::-webkit-meter-optimum-value:hover {\\n  background: linear-gradient(to bottom, rgb(51, 237, 0), rgb(0, 237, 8));\\n}\\n\\nmeter:-moz-meter-optimum::-moz-meter-bar {\\n  background: linear-gradient(to bottom, rgb(55, 255, 0), rgb(0, 255, 8));\\n}\\n\\nmeter:-moz-meter-optimum::-moz-meter-bar:hover {\\n  background: linear-gradient(to bottom, rgb(51, 237, 0), rgb(0, 237, 8));\\n}\\n\\nmeter::-webkit-meter-suboptimum-value {\\n  background: linear-gradient(to bottom, rgb(255, 225, 0), yellow);\\n}\\n\\nmeter::-webkit-meter-suboptimum-value:hover {\\n  background: linear-gradient(to bottom, rgb(236, 208, 0), rgb(233, 233, 0));\\n}\\n\\nmeter:-moz-meter-sub-optimum::-moz-meter-bar {\\n  background: linear-gradient(to bottom, rgb(255, 225, 0), yellow);\\n}\\n\\nmeter:-moz-meter-sub-optimum::-moz-meter-bar:hover {\\n  background: linear-gradient(to bottom, rgb(236, 208, 0), rgb(233, 233, 0));\\n}\\n\\nmeter::-webkit-meter-even-less-good-value {\\n  background: linear-gradient(to bottom, rgb(224, 0, 0), rgb(255, 0, 0));\\n}\\n\\nmeter::-webkit-meter-even-less-good-value:hover {\\n  background: linear-gradient(to bottom, rgb(206, 1, 1), rgb(236, 0, 0));\\n}\\n\\nmeter:-moz-meter-sub-sub-optimum::-moz-meter-bar {\\n  background: linear-gradient(to bottom, rgb(224, 0, 0), rgb(255, 0, 0));\\n}\\n\\nmeter:-moz-meter-sub-sub-optimum::-moz-meter-bar:hover {\\n  background: linear-gradient(to bottom, rgb(206, 1, 1), rgb(236, 0, 0));\\n}\\n\\n@media screen and (min-width: 768px) {\\n  .main-content {\\n    display: grid;\\n    grid-template-columns: 15% 1fr 1fr 15%;\\n    grid-template-rows: 50px 1fr 50px 3fr;\\n  }\\n\\n  .city-info {\\n    grid-row-start: 2;\\n    grid-column-start: 2;\\n  }\\n\\n  .city-name {\\n    font-size: 72px;\\n    overflow-wrap: anywhere;\\n  }\\n\\n  .datetime {\\n    font-size: 40px;\\n  }\\n\\n  .weather {\\n    grid-row-start: 2;\\n    grid-column-start: 3;\\n  }\\n\\n  .weather-2 {\\n    grid-row-start: 4;\\n    grid-column-start: 3;\\n  }\\n}\", \"\"]);\n// Exports\n/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (___CSS_LOADER_EXPORT___);\n\n\n//# sourceURL=webpack://weather-app/./src/styles/style.css?./node_modules/css-loader/dist/cjs.js");

/***/ }),

/***/ "./node_modules/css-loader/dist/runtime/api.js":
/*!*****************************************************!*\
  !*** ./node_modules/css-loader/dist/runtime/api.js ***!
  \*****************************************************/
/***/ ((module) => {

eval("\n\n/*\n  MIT License http://www.opensource.org/licenses/mit-license.php\n  Author Tobias Koppers @sokra\n*/\nmodule.exports = function (cssWithMappingToString) {\n  var list = [];\n\n  // return the list of modules as css string\n  list.toString = function toString() {\n    return this.map(function (item) {\n      var content = \"\";\n      var needLayer = typeof item[5] !== \"undefined\";\n      if (item[4]) {\n        content += \"@supports (\".concat(item[4], \") {\");\n      }\n      if (item[2]) {\n        content += \"@media \".concat(item[2], \" {\");\n      }\n      if (needLayer) {\n        content += \"@layer\".concat(item[5].length > 0 ? \" \".concat(item[5]) : \"\", \" {\");\n      }\n      content += cssWithMappingToString(item);\n      if (needLayer) {\n        content += \"}\";\n      }\n      if (item[2]) {\n        content += \"}\";\n      }\n      if (item[4]) {\n        content += \"}\";\n      }\n      return content;\n    }).join(\"\");\n  };\n\n  // import a list of modules into the list\n  list.i = function i(modules, media, dedupe, supports, layer) {\n    if (typeof modules === \"string\") {\n      modules = [[null, modules, undefined]];\n    }\n    var alreadyImportedModules = {};\n    if (dedupe) {\n      for (var k = 0; k < this.length; k++) {\n        var id = this[k][0];\n        if (id != null) {\n          alreadyImportedModules[id] = true;\n        }\n      }\n    }\n    for (var _k = 0; _k < modules.length; _k++) {\n      var item = [].concat(modules[_k]);\n      if (dedupe && alreadyImportedModules[item[0]]) {\n        continue;\n      }\n      if (typeof layer !== \"undefined\") {\n        if (typeof item[5] === \"undefined\") {\n          item[5] = layer;\n        } else {\n          item[1] = \"@layer\".concat(item[5].length > 0 ? \" \".concat(item[5]) : \"\", \" {\").concat(item[1], \"}\");\n          item[5] = layer;\n        }\n      }\n      if (media) {\n        if (!item[2]) {\n          item[2] = media;\n        } else {\n          item[1] = \"@media \".concat(item[2], \" {\").concat(item[1], \"}\");\n          item[2] = media;\n        }\n      }\n      if (supports) {\n        if (!item[4]) {\n          item[4] = \"\".concat(supports);\n        } else {\n          item[1] = \"@supports (\".concat(item[4], \") {\").concat(item[1], \"}\");\n          item[4] = supports;\n        }\n      }\n      list.push(item);\n    }\n  };\n  return list;\n};\n\n//# sourceURL=webpack://weather-app/./node_modules/css-loader/dist/runtime/api.js?");

/***/ }),

/***/ "./node_modules/css-loader/dist/runtime/getUrl.js":
/*!********************************************************!*\
  !*** ./node_modules/css-loader/dist/runtime/getUrl.js ***!
  \********************************************************/
/***/ ((module) => {

eval("\n\nmodule.exports = function (url, options) {\n  if (!options) {\n    options = {};\n  }\n  if (!url) {\n    return url;\n  }\n  url = String(url.__esModule ? url.default : url);\n\n  // If url is already wrapped in quotes, remove them\n  if (/^['\"].*['\"]$/.test(url)) {\n    url = url.slice(1, -1);\n  }\n  if (options.hash) {\n    url += options.hash;\n  }\n\n  // Should url be wrapped?\n  // See https://drafts.csswg.org/css-values-3/#urls\n  if (/[\"'() \\t\\n]|(%20)/.test(url) || options.needQuotes) {\n    return \"\\\"\".concat(url.replace(/\"/g, '\\\\\"').replace(/\\n/g, \"\\\\n\"), \"\\\"\");\n  }\n  return url;\n};\n\n//# sourceURL=webpack://weather-app/./node_modules/css-loader/dist/runtime/getUrl.js?");

/***/ }),

/***/ "./node_modules/css-loader/dist/runtime/noSourceMaps.js":
/*!**************************************************************!*\
  !*** ./node_modules/css-loader/dist/runtime/noSourceMaps.js ***!
  \**************************************************************/
/***/ ((module) => {

eval("\n\nmodule.exports = function (i) {\n  return i[1];\n};\n\n//# sourceURL=webpack://weather-app/./node_modules/css-loader/dist/runtime/noSourceMaps.js?");

/***/ }),

/***/ "./src/styles/style.css":
/*!******************************!*\
  !*** ./src/styles/style.css ***!
  \******************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (__WEBPACK_DEFAULT_EXPORT__)\n/* harmony export */ });\n/* harmony import */ var _node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! !../../node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js */ \"./node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js\");\n/* harmony import */ var _node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var _node_modules_style_loader_dist_runtime_styleDomAPI_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! !../../node_modules/style-loader/dist/runtime/styleDomAPI.js */ \"./node_modules/style-loader/dist/runtime/styleDomAPI.js\");\n/* harmony import */ var _node_modules_style_loader_dist_runtime_styleDomAPI_js__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_styleDomAPI_js__WEBPACK_IMPORTED_MODULE_1__);\n/* harmony import */ var _node_modules_style_loader_dist_runtime_insertBySelector_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! !../../node_modules/style-loader/dist/runtime/insertBySelector.js */ \"./node_modules/style-loader/dist/runtime/insertBySelector.js\");\n/* harmony import */ var _node_modules_style_loader_dist_runtime_insertBySelector_js__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_insertBySelector_js__WEBPACK_IMPORTED_MODULE_2__);\n/* harmony import */ var _node_modules_style_loader_dist_runtime_setAttributesWithoutAttributes_js__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! !../../node_modules/style-loader/dist/runtime/setAttributesWithoutAttributes.js */ \"./node_modules/style-loader/dist/runtime/setAttributesWithoutAttributes.js\");\n/* harmony import */ var _node_modules_style_loader_dist_runtime_setAttributesWithoutAttributes_js__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_setAttributesWithoutAttributes_js__WEBPACK_IMPORTED_MODULE_3__);\n/* harmony import */ var _node_modules_style_loader_dist_runtime_insertStyleElement_js__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! !../../node_modules/style-loader/dist/runtime/insertStyleElement.js */ \"./node_modules/style-loader/dist/runtime/insertStyleElement.js\");\n/* harmony import */ var _node_modules_style_loader_dist_runtime_insertStyleElement_js__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_insertStyleElement_js__WEBPACK_IMPORTED_MODULE_4__);\n/* harmony import */ var _node_modules_style_loader_dist_runtime_styleTagTransform_js__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! !../../node_modules/style-loader/dist/runtime/styleTagTransform.js */ \"./node_modules/style-loader/dist/runtime/styleTagTransform.js\");\n/* harmony import */ var _node_modules_style_loader_dist_runtime_styleTagTransform_js__WEBPACK_IMPORTED_MODULE_5___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_styleTagTransform_js__WEBPACK_IMPORTED_MODULE_5__);\n/* harmony import */ var _node_modules_css_loader_dist_cjs_js_style_css__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! !!../../node_modules/css-loader/dist/cjs.js!./style.css */ \"./node_modules/css-loader/dist/cjs.js!./src/styles/style.css\");\n\n      \n      \n      \n      \n      \n      \n      \n      \n      \n\nvar options = {};\n\noptions.styleTagTransform = (_node_modules_style_loader_dist_runtime_styleTagTransform_js__WEBPACK_IMPORTED_MODULE_5___default());\noptions.setAttributes = (_node_modules_style_loader_dist_runtime_setAttributesWithoutAttributes_js__WEBPACK_IMPORTED_MODULE_3___default());\n\n      options.insert = _node_modules_style_loader_dist_runtime_insertBySelector_js__WEBPACK_IMPORTED_MODULE_2___default().bind(null, \"head\");\n    \noptions.domAPI = (_node_modules_style_loader_dist_runtime_styleDomAPI_js__WEBPACK_IMPORTED_MODULE_1___default());\noptions.insertStyleElement = (_node_modules_style_loader_dist_runtime_insertStyleElement_js__WEBPACK_IMPORTED_MODULE_4___default());\n\nvar update = _node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0___default()(_node_modules_css_loader_dist_cjs_js_style_css__WEBPACK_IMPORTED_MODULE_6__[\"default\"], options);\n\n\n\n\n       /* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (_node_modules_css_loader_dist_cjs_js_style_css__WEBPACK_IMPORTED_MODULE_6__[\"default\"] && _node_modules_css_loader_dist_cjs_js_style_css__WEBPACK_IMPORTED_MODULE_6__[\"default\"].locals ? _node_modules_css_loader_dist_cjs_js_style_css__WEBPACK_IMPORTED_MODULE_6__[\"default\"].locals : undefined);\n\n\n//# sourceURL=webpack://weather-app/./src/styles/style.css?");

/***/ }),

/***/ "./node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js":
/*!****************************************************************************!*\
  !*** ./node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js ***!
  \****************************************************************************/
/***/ ((module) => {

eval("\n\nvar stylesInDOM = [];\n\nfunction getIndexByIdentifier(identifier) {\n  var result = -1;\n\n  for (var i = 0; i < stylesInDOM.length; i++) {\n    if (stylesInDOM[i].identifier === identifier) {\n      result = i;\n      break;\n    }\n  }\n\n  return result;\n}\n\nfunction modulesToDom(list, options) {\n  var idCountMap = {};\n  var identifiers = [];\n\n  for (var i = 0; i < list.length; i++) {\n    var item = list[i];\n    var id = options.base ? item[0] + options.base : item[0];\n    var count = idCountMap[id] || 0;\n    var identifier = \"\".concat(id, \" \").concat(count);\n    idCountMap[id] = count + 1;\n    var indexByIdentifier = getIndexByIdentifier(identifier);\n    var obj = {\n      css: item[1],\n      media: item[2],\n      sourceMap: item[3],\n      supports: item[4],\n      layer: item[5]\n    };\n\n    if (indexByIdentifier !== -1) {\n      stylesInDOM[indexByIdentifier].references++;\n      stylesInDOM[indexByIdentifier].updater(obj);\n    } else {\n      var updater = addElementStyle(obj, options);\n      options.byIndex = i;\n      stylesInDOM.splice(i, 0, {\n        identifier: identifier,\n        updater: updater,\n        references: 1\n      });\n    }\n\n    identifiers.push(identifier);\n  }\n\n  return identifiers;\n}\n\nfunction addElementStyle(obj, options) {\n  var api = options.domAPI(options);\n  api.update(obj);\n\n  var updater = function updater(newObj) {\n    if (newObj) {\n      if (newObj.css === obj.css && newObj.media === obj.media && newObj.sourceMap === obj.sourceMap && newObj.supports === obj.supports && newObj.layer === obj.layer) {\n        return;\n      }\n\n      api.update(obj = newObj);\n    } else {\n      api.remove();\n    }\n  };\n\n  return updater;\n}\n\nmodule.exports = function (list, options) {\n  options = options || {};\n  list = list || [];\n  var lastIdentifiers = modulesToDom(list, options);\n  return function update(newList) {\n    newList = newList || [];\n\n    for (var i = 0; i < lastIdentifiers.length; i++) {\n      var identifier = lastIdentifiers[i];\n      var index = getIndexByIdentifier(identifier);\n      stylesInDOM[index].references--;\n    }\n\n    var newLastIdentifiers = modulesToDom(newList, options);\n\n    for (var _i = 0; _i < lastIdentifiers.length; _i++) {\n      var _identifier = lastIdentifiers[_i];\n\n      var _index = getIndexByIdentifier(_identifier);\n\n      if (stylesInDOM[_index].references === 0) {\n        stylesInDOM[_index].updater();\n\n        stylesInDOM.splice(_index, 1);\n      }\n    }\n\n    lastIdentifiers = newLastIdentifiers;\n  };\n};\n\n//# sourceURL=webpack://weather-app/./node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js?");

/***/ }),

/***/ "./node_modules/style-loader/dist/runtime/insertBySelector.js":
/*!********************************************************************!*\
  !*** ./node_modules/style-loader/dist/runtime/insertBySelector.js ***!
  \********************************************************************/
/***/ ((module) => {

eval("\n\nvar memo = {};\n/* istanbul ignore next  */\n\nfunction getTarget(target) {\n  if (typeof memo[target] === \"undefined\") {\n    var styleTarget = document.querySelector(target); // Special case to return head of iframe instead of iframe itself\n\n    if (window.HTMLIFrameElement && styleTarget instanceof window.HTMLIFrameElement) {\n      try {\n        // This will throw an exception if access to iframe is blocked\n        // due to cross-origin restrictions\n        styleTarget = styleTarget.contentDocument.head;\n      } catch (e) {\n        // istanbul ignore next\n        styleTarget = null;\n      }\n    }\n\n    memo[target] = styleTarget;\n  }\n\n  return memo[target];\n}\n/* istanbul ignore next  */\n\n\nfunction insertBySelector(insert, style) {\n  var target = getTarget(insert);\n\n  if (!target) {\n    throw new Error(\"Couldn't find a style target. This probably means that the value for the 'insert' parameter is invalid.\");\n  }\n\n  target.appendChild(style);\n}\n\nmodule.exports = insertBySelector;\n\n//# sourceURL=webpack://weather-app/./node_modules/style-loader/dist/runtime/insertBySelector.js?");

/***/ }),

/***/ "./node_modules/style-loader/dist/runtime/insertStyleElement.js":
/*!**********************************************************************!*\
  !*** ./node_modules/style-loader/dist/runtime/insertStyleElement.js ***!
  \**********************************************************************/
/***/ ((module) => {

eval("\n\n/* istanbul ignore next  */\nfunction insertStyleElement(options) {\n  var element = document.createElement(\"style\");\n  options.setAttributes(element, options.attributes);\n  options.insert(element, options.options);\n  return element;\n}\n\nmodule.exports = insertStyleElement;\n\n//# sourceURL=webpack://weather-app/./node_modules/style-loader/dist/runtime/insertStyleElement.js?");

/***/ }),

/***/ "./node_modules/style-loader/dist/runtime/setAttributesWithoutAttributes.js":
/*!**********************************************************************************!*\
  !*** ./node_modules/style-loader/dist/runtime/setAttributesWithoutAttributes.js ***!
  \**********************************************************************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

eval("\n\n/* istanbul ignore next  */\nfunction setAttributesWithoutAttributes(styleElement) {\n  var nonce =  true ? __webpack_require__.nc : 0;\n\n  if (nonce) {\n    styleElement.setAttribute(\"nonce\", nonce);\n  }\n}\n\nmodule.exports = setAttributesWithoutAttributes;\n\n//# sourceURL=webpack://weather-app/./node_modules/style-loader/dist/runtime/setAttributesWithoutAttributes.js?");

/***/ }),

/***/ "./node_modules/style-loader/dist/runtime/styleDomAPI.js":
/*!***************************************************************!*\
  !*** ./node_modules/style-loader/dist/runtime/styleDomAPI.js ***!
  \***************************************************************/
/***/ ((module) => {

eval("\n\n/* istanbul ignore next  */\nfunction apply(styleElement, options, obj) {\n  var css = \"\";\n\n  if (obj.supports) {\n    css += \"@supports (\".concat(obj.supports, \") {\");\n  }\n\n  if (obj.media) {\n    css += \"@media \".concat(obj.media, \" {\");\n  }\n\n  var needLayer = typeof obj.layer !== \"undefined\";\n\n  if (needLayer) {\n    css += \"@layer\".concat(obj.layer.length > 0 ? \" \".concat(obj.layer) : \"\", \" {\");\n  }\n\n  css += obj.css;\n\n  if (needLayer) {\n    css += \"}\";\n  }\n\n  if (obj.media) {\n    css += \"}\";\n  }\n\n  if (obj.supports) {\n    css += \"}\";\n  }\n\n  var sourceMap = obj.sourceMap;\n\n  if (sourceMap && typeof btoa !== \"undefined\") {\n    css += \"\\n/*# sourceMappingURL=data:application/json;base64,\".concat(btoa(unescape(encodeURIComponent(JSON.stringify(sourceMap)))), \" */\");\n  } // For old IE\n\n  /* istanbul ignore if  */\n\n\n  options.styleTagTransform(css, styleElement, options.options);\n}\n\nfunction removeStyleElement(styleElement) {\n  // istanbul ignore if\n  if (styleElement.parentNode === null) {\n    return false;\n  }\n\n  styleElement.parentNode.removeChild(styleElement);\n}\n/* istanbul ignore next  */\n\n\nfunction domAPI(options) {\n  var styleElement = options.insertStyleElement(options);\n  return {\n    update: function update(obj) {\n      apply(styleElement, options, obj);\n    },\n    remove: function remove() {\n      removeStyleElement(styleElement);\n    }\n  };\n}\n\nmodule.exports = domAPI;\n\n//# sourceURL=webpack://weather-app/./node_modules/style-loader/dist/runtime/styleDomAPI.js?");

/***/ }),

/***/ "./node_modules/style-loader/dist/runtime/styleTagTransform.js":
/*!*********************************************************************!*\
  !*** ./node_modules/style-loader/dist/runtime/styleTagTransform.js ***!
  \*********************************************************************/
/***/ ((module) => {

eval("\n\n/* istanbul ignore next  */\nfunction styleTagTransform(css, styleElement) {\n  if (styleElement.styleSheet) {\n    styleElement.styleSheet.cssText = css;\n  } else {\n    while (styleElement.firstChild) {\n      styleElement.removeChild(styleElement.firstChild);\n    }\n\n    styleElement.appendChild(document.createTextNode(css));\n  }\n}\n\nmodule.exports = styleTagTransform;\n\n//# sourceURL=webpack://weather-app/./node_modules/style-loader/dist/runtime/styleTagTransform.js?");

/***/ }),

/***/ "./src/api.js":
/*!********************!*\
  !*** ./src/api.js ***!
  \********************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var _pubsub__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./pubsub */ \"./src/pubsub.js\");\n\n\nconst searchBar = document.querySelector('.search-bar');\nconst form = document.querySelector('.search-container');\n\nfunction getURL(value) {\n  const noLeadingOrTrailingWhiteSpace = value.replace(/^\\s+|\\s+$/g, '');\n  const city = noLeadingOrTrailingWhiteSpace.replace(/\\s/g, '%20');\n  return `https://api.openweathermap.org/data/2.5/weather?q=${city}&APPID=643ee83fd07e5e22fcd7e40a78fd4672`;\n}\n\nfunction Weather(name, timezone, temp, hi, low, feels, main, wind, pressure, humidity, visibility) {\n  return {\n    name,\n    timezone,\n    temp,\n    hi,\n    low,\n    feels,\n    main,\n    wind,\n    pressure,\n    humidity,\n    visibility,\n  };\n}\n\nfunction sortData(obj) {\n  return Weather(\n    obj.name,\n    obj.timezone,\n    obj.main.temp,\n    obj.main.temp_max,\n    obj.main.temp_min,\n    obj.main.feels_like,\n    obj.weather[0].main,\n    obj.wind,\n    obj.main.pressure,\n    obj.main.humidity,\n    obj.visibility,\n  );\n}\n\nasync function getData(url) {\n  try {\n    const response = await fetch(url, {\n      mode: 'cors',\n    });\n    if (!response.ok) {\n      throw new Error('Oops, city not found');\n    }\n    const data = await response.json();\n    return data;\n  } catch (error) {\n    console.log(error);\n  }\n}\n\nconst homepage = document.querySelector('.homepage');\nconst loading = document.querySelector('.loading');\nconst main = document.querySelector('.main');\nconst errorpage = document.querySelector('.error');\n\n// Alternates to loading screen while fetching\nasync function search(url) {\n  if (!homepage.classList.contains('hidden')) {\n    // homepage only visible on init load\n    homepage.classList.toggle('hidden');\n  }\n  if (!main.classList.contains('hidden')) {\n    // hides main if already looking at weather\n    main.classList.toggle('hidden');\n  }\n  if (!errorpage.classList.contains('hidden')) {\n    // hides errorpage if already looking at weather\n    errorpage.classList.toggle('hidden');\n  }\n  loading.classList.toggle('hidden');\n  try {\n    const dataObj = await getData(url);\n    _pubsub__WEBPACK_IMPORTED_MODULE_0__[\"default\"].publish('Data', sortData(dataObj));\n    loading.classList.toggle('hidden');\n    main.classList.toggle('hidden');\n  } catch {\n    loading.classList.toggle('hidden');\n    errorpage.classList.toggle('hidden');\n  }\n}\n\nfunction searchByEnter(e) {\n  if (document.activeElement === searchBar && e.key === 'Enter') {\n    e.preventDefault();\n    const validity = form.reportValidity();\n    if (validity) {\n      const url = getURL(searchBar.value);\n      search(url);\n    }\n  }\n}\n\nwindow.addEventListener('keydown', searchByEnter);\n\n\n//# sourceURL=webpack://weather-app/./src/api.js?");

/***/ }),

/***/ "./src/index.js":
/*!**********************!*\
  !*** ./src/index.js ***!
  \**********************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var _styles_style_css__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./styles/style.css */ \"./src/styles/style.css\");\n/* harmony import */ var _pubsub__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./pubsub */ \"./src/pubsub.js\");\n/* harmony import */ var _api__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./api */ \"./src/api.js\");\n/* harmony import */ var _theme__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./theme */ \"./src/theme.js\");\n/* harmony import */ var _settings__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./settings */ \"./src/settings.js\");\n/* harmony import */ var _populate__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./populate */ \"./src/populate.js\");\n\n\n\n\n\n\n\n\n//# sourceURL=webpack://weather-app/./src/index.js?");

/***/ }),

/***/ "./src/populate.js":
/*!*************************!*\
  !*** ./src/populate.js ***!
  \*************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var _pubsub__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./pubsub */ \"./src/pubsub.js\");\n/* harmony import */ var _styles_assets_svg_cloudy_svg__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./styles/assets/svg/cloudy.svg */ \"./src/styles/assets/svg/cloudy.svg\");\n/* harmony import */ var _styles_assets_svg_drizzle_svg__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./styles/assets/svg/drizzle.svg */ \"./src/styles/assets/svg/drizzle.svg\");\n/* harmony import */ var _styles_assets_svg_foggy_svg__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./styles/assets/svg/foggy.svg */ \"./src/styles/assets/svg/foggy.svg\");\n/* harmony import */ var _styles_assets_svg_partly_sunny_svg__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./styles/assets/svg/partly-sunny.svg */ \"./src/styles/assets/svg/partly-sunny.svg\");\n/* harmony import */ var _styles_assets_svg_rain_svg__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./styles/assets/svg/rain.svg */ \"./src/styles/assets/svg/rain.svg\");\n/* harmony import */ var _styles_assets_svg_snow_svg__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./styles/assets/svg/snow.svg */ \"./src/styles/assets/svg/snow.svg\");\n/* harmony import */ var _styles_assets_svg_sunny_svg__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ./styles/assets/svg/sunny.svg */ \"./src/styles/assets/svg/sunny.svg\");\n/* harmony import */ var _styles_assets_svg_thunderstorm_svg__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ./styles/assets/svg/thunderstorm.svg */ \"./src/styles/assets/svg/thunderstorm.svg\");\n\n\n\n\n\n\n\n\n\n\nfunction populateCityInfo(data) {\n  const cityName = document.querySelector('.city-name');\n  cityName.innerHTML = data.name;\n}\n\n// Sets temperature unit from toggle switch\nlet f = true;\n_pubsub__WEBPACK_IMPORTED_MODULE_0__[\"default\"].subscribe('Unit', (unit) => {\n  if (unit === 'C') {\n    f = false;\n  } else {\n    f = true;\n  }\n});\n\nfunction convertTempF(temp) {\n  const num = 1.8 * (temp - 273) + 32;\n  return Math[num < 0 ? 'ceil' : 'floor'](num); // truncate decimals\n}\n\nfunction convertTempC(temp) {\n  const num = temp - 273.15;\n  return Math[num < 0 ? 'ceil' : 'floor'](num); // truncate decimals\n}\n\nfunction populateTemps(data) {\n  const high = document.querySelector('.high');\n  const low = document.querySelector('.low');\n  const temp = document.querySelector('.temp');\n  const feels = document.querySelector('.feels-temp');\n  if (f) {\n    high.innerHTML = `${convertTempF(data.hi)}°`;\n    low.innerHTML = `${convertTempF(data.low)}°`;\n    temp.innerHTML = `${convertTempF(data.temp)}`;\n    feels.innerHTML = `${convertTempF(data.feels)}°`;\n  } else {\n    high.innerHTML = `${convertTempC(data.hi)}°`;\n    low.innerHTML = `${convertTempC(data.low)}°`;\n    temp.innerHTML = `${convertTempC(data.temp)}`;\n    feels.innerHTML = `${convertTempC(data.feels)}°`;\n  }\n}\n\nfunction convertWindDeg(deg) {\n  let cardinal;\n  switch (true) {\n    case (deg > 0 && deg <= 22.5):\n    case (deg > 337.5):\n      cardinal = 'N';\n      break;\n    case (deg > 22.5 && deg <= 67.5):\n      cardinal = 'NE';\n      break;\n    case (deg > 67.5 && deg <= 112.5):\n      cardinal = 'E';\n      break;\n    case (deg > 112.5 && deg <= 157.5):\n      cardinal = 'SE';\n      break;\n    case (deg > 157.5 && deg <= 202.5):\n      cardinal = 'S';\n      break;\n    case (deg > 202.5 && deg <= 247.5):\n      cardinal = 'SW';\n      break;\n    case (deg > 247.5 && deg <= 292.5):\n      cardinal = 'W';\n      break;\n    case (deg > 292.5 && deg <= 337.5):\n      cardinal = 'NW';\n      break;\n    default:\n      cardinal = 'N';\n  }\n  return cardinal;\n}\n\nfunction convertWind(data) {\n  return data * 1.944;\n}\n\nfunction populateWind(data) {\n  const direction = document.querySelector('.wind-direction');\n  const speed = document.querySelector('.wind-speed');\n  const gauge = document.querySelector('.wind-gauge');\n  direction.innerHTML = convertWindDeg(data.wind.deg);\n  speed.innerHTML = Math.floor(convertWind(data.wind.speed));\n  gauge.style.transform = `rotate(${Math.floor(data.wind.deg)}deg)`;\n}\n\nlet url;\nlet weatherName;\nfunction getIcon(code) {\n  switch (code) {\n    case 'Thunderstorm':\n      url = _styles_assets_svg_thunderstorm_svg__WEBPACK_IMPORTED_MODULE_8__;\n      weatherName = 'Thunderstorming';\n      break;\n    case 'Drizzle':\n      url = _styles_assets_svg_drizzle_svg__WEBPACK_IMPORTED_MODULE_2__;\n      weatherName = 'Drizzling';\n      break;\n    case 'Rain':\n      url = _styles_assets_svg_rain_svg__WEBPACK_IMPORTED_MODULE_5__;\n      weatherName = 'Raining';\n      break;\n    case 'Snow':\n      url = _styles_assets_svg_snow_svg__WEBPACK_IMPORTED_MODULE_6__;\n      weatherName = 'Snowing';\n      break;\n    case 'Clear':\n      url = _styles_assets_svg_sunny_svg__WEBPACK_IMPORTED_MODULE_7__;\n      weatherName = 'Clear';\n      break;\n    case 'Clouds':\n      url = _styles_assets_svg_cloudy_svg__WEBPACK_IMPORTED_MODULE_1__;\n      weatherName = 'Cloudy';\n      break;\n    case 'Mist':\n    case 'Smoke':\n    case 'Haze':\n    case 'Dust':\n    case 'Fog':\n    case 'Sand':\n    case 'Ash':\n    case 'Squall':\n    case 'Tornado':\n      url = _styles_assets_svg_foggy_svg__WEBPACK_IMPORTED_MODULE_3__;\n      weatherName = 'Hazy';\n      break;\n    default:\n      url = _styles_assets_svg_sunny_svg__WEBPACK_IMPORTED_MODULE_7__;\n      weatherName = 'Sunny';\n  }\n}\n\nfunction populateWeatherStatus(data) {\n  const icon = document.querySelector('.icon');\n  const weatherStatus = document.querySelector('.weather-status');\n  getIcon(data.main);\n  icon.style.backgroundImage = `url(${url.replace(/[']+g/, '')})`;\n  weatherStatus.innerHTML = weatherName;\n}\n\nfunction getTime(tz) {\n  const d = new Date();\n  let date = d.getUTCDate();\n  let day = d.getUTCDay();\n  let month = d.getUTCMonth();\n  let hh = d.getUTCHours() + (tz / 3600);\n  if (hh < 0) {\n    hh += 24;\n  }\n  const year = d.getFullYear();\n  const mm = d.getMinutes();\n  const months = [\n    'Jan', 'Feb', 'Mar', 'Apr', 'May', 'Jun',\n    'Jul', 'Aug', 'Sep', 'Oct', 'Nov', 'Dec',\n  ];\n  const days = [\n    'Sun', 'Mon', 'Tue', 'Wed', 'Thu', 'Fri', 'Sat',\n  ];\n  if (hh > 24) {\n    hh -= 24;\n    date += 1;\n    if (day === 6) {\n      day = 0;\n    } else {\n      day += 1;\n    }\n    const leap = () => ((year % 4 === 0) && (year % 100 !== 0)) || (year % 400 === 0);\n    if (day === 30 && month === 1 && leap) {\n      day = 1;\n      month = 2;\n    }\n    if (day === 29 && month === 1 && !leap) {\n      day = 1;\n      month = 2;\n    }\n    const thirty = [4, 6, 9, 11];\n    if (day === 31 && thirty.some((m) => m === month)) {\n      day = 1;\n      month += 1;\n    }\n    if (day === 32 && month !== 12) {\n      day = 1;\n      month += 1;\n    }\n    if (day === 32 && month === 12) {\n      day = 1;\n      month = 0;\n    }\n  }\n  return [`${days[day]} ${months[month]} ${date}`, `${hh}:${mm}`];\n}\n\nfunction populateDatetime(data) {\n  const date = document.querySelector('.date');\n  const time = document.querySelector('.time');\n  const dateArray = getTime(data.timezone);\n  const [d, t] = dateArray;\n  date.innerHTML = d;\n  time.innerHTML = t;\n}\n\nfunction populateVisibility(data) {\n  const meter = document.getElementById('visibility');\n  meter.setAttribute('value', `${data.visibility}`);\n  const popup = document.querySelector('.vis-pop');\n  popup.innerHTML = `${data.visibility}m`;\n}\n\nfunction populateHumidity(data) {\n  const meter = document.getElementById('humidity');\n  meter.setAttribute('value', `${data.humidity}`);\n  const popup = document.querySelector('.hum-pop');\n  popup.innerHTML = `${data.humidity}%`;\n}\n\nfunction populatePressure(data) {\n  const meter = document.getElementById('pressure');\n  meter.setAttribute('value', `${data.pressure}`);\n  const popup = document.querySelector('.pres-pop');\n  popup.innerHTML = `${data.pressure}hPa`;\n}\n\nfunction populate(data) {\n  console.log(data); // DELETE ME..........................\n  populateCityInfo(data);\n  populateDatetime(data);\n  populateTemps(data);\n  populateWeatherStatus(data);\n  populateWind(data);\n  populateVisibility(data);\n  populateHumidity(data);\n  populatePressure(data);\n}\n\n_pubsub__WEBPACK_IMPORTED_MODULE_0__[\"default\"].subscribe('Data', (data) => {\n  populate(data);\n});\n\n\n//# sourceURL=webpack://weather-app/./src/populate.js?");

/***/ }),

/***/ "./src/pubsub.js":
/*!***********************!*\
  !*** ./src/pubsub.js ***!
  \***********************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (__WEBPACK_DEFAULT_EXPORT__)\n/* harmony export */ });\nconst pubsub = {\n  events: {},\n  subscribe: (eventName, fn) => {\n    pubsub.events[eventName] = pubsub.events[eventName] || [];\n    pubsub.events[eventName].push(fn);\n  },\n  unsubscribe: (eventName, fn) => {\n    if (pubsub.events[eventName]) {\n      for (let i = 0; i < pubsub.events[eventName].length; i++) {\n        if (pubsub.events[eventName][i] === fn) {\n          pubsub.events[eventName].splice(i, 1);\n          break;\n        }\n      }\n    }\n  },\n  publish: (eventName, data) => {\n    if (pubsub.events[eventName]) {\n      pubsub.events[eventName].forEach((fn) => {\n        fn(data);\n      });\n    }\n  },\n};\n\n/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (pubsub);\n\n\n//# sourceURL=webpack://weather-app/./src/pubsub.js?");

/***/ }),

/***/ "./src/settings.js":
/*!*************************!*\
  !*** ./src/settings.js ***!
  \*************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var _pubsub__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./pubsub */ \"./src/pubsub.js\");\n\n\nfunction openSettings() {\n  const drawer = document.querySelector('.settings-modal');\n  drawer.classList.toggle('open-menu');\n}\n\nconst button = document.querySelector('.settings-icon');\nbutton.addEventListener('click', openSettings);\n\nconst slider = document.querySelector('.round');\nslider.addEventListener('click', () => {\n  setTimeout(() => {\n    openSettings();\n  }, 600);\n});\n\nconst checkbox = document.getElementById('temp');\n\nconst high = document.querySelector('.high');\nconst low = document.querySelector('.low');\nconst temp = document.querySelector('.temp');\nconst feels = document.querySelector('.feels-temp');\nconst unit = document.querySelector('.temp-unit');\n\nfunction convertFtoC(num) {\n  const number = (num - 32) * 0.5556;\n  return Math[number < 0 ? 'ceil' : 'floor'](number); // truncate decimals\n}\n\nfunction convertCtoF(num) {\n  const number = num * 1.8 + 32;\n  return Math[number < 0 ? 'ceil' : 'floor'](number); // truncate decimals\n}\n\nfunction convertTemps() {\n  setTimeout(() => {\n    if (checkbox.checked) {\n      const highVal = high.innerHTML.replace('°', '');\n      high.innerHTML = `${convertFtoC(highVal)}°`;\n      const lowVal = low.innerHTML.replace('°', '');\n      low.innerHTML = `${convertFtoC(lowVal)}°`;\n      const feelsVal = feels.innerHTML.replace('°', '');\n      feels.innerHTML = `${convertFtoC(feelsVal)}°`;\n      temp.innerHTML = convertFtoC(temp.innerHTML);\n      unit.innerHTML = unit.innerHTML.replace('F', 'C');\n      _pubsub__WEBPACK_IMPORTED_MODULE_0__[\"default\"].publish('Unit', 'C');\n    }\n    if (!checkbox.checked) {\n      const highVal = high.innerHTML.replace('°', '');\n      high.innerHTML = `${convertCtoF(highVal)}°`;\n      const lowVal = low.innerHTML.replace('°', '');\n      low.innerHTML = `${convertCtoF(lowVal)}°`;\n      const feelsVal = feels.innerHTML.replace('°', '');\n      feels.innerHTML = `${convertCtoF(feelsVal)}°`;\n      temp.innerHTML = convertCtoF(temp.innerHTML);\n      unit.innerHTML = unit.innerHTML.replace('C', 'F');\n      _pubsub__WEBPACK_IMPORTED_MODULE_0__[\"default\"].publish('Unit', 'F');\n    }\n  }, 100);\n}\n\nslider.addEventListener('click', convertTemps);\n\n\n//# sourceURL=webpack://weather-app/./src/settings.js?");

/***/ }),

/***/ "./src/theme.js":
/*!**********************!*\
  !*** ./src/theme.js ***!
  \**********************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var _pubsub__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./pubsub */ \"./src/pubsub.js\");\n\n\nfunction changeTheme(data) {\n  if (data.temp <= 285.92) {\n    document.documentElement.setAttribute('data-theme', 'cold');\n  } else if (data.temp > 285.92 && data.temp <= 297.03) {\n    document.documentElement.setAttribute('data-theme', 'mild');\n  } else {\n    document.documentElement.setAttribute('data-theme', 'warm');\n  }\n}\n\n_pubsub__WEBPACK_IMPORTED_MODULE_0__[\"default\"].subscribe('Data', changeTheme);\n\nconst meters = document.querySelectorAll('meter');\nconst fields = document.querySelectorAll('fieldset');\n\nmeters.forEach((meter) => {\n  meter.addEventListener('click', (e) => {\n    e.stopPropagation();\n    const popup = e.target.nextElementSibling;\n    popup.classList.toggle('popup-animate');\n  });\n});\n\nfields.forEach((field) => {\n  field.addEventListener('click', (e) => {\n    e.stopPropagation();\n    const popup = e.target.lastElementChild;\n    popup.classList.toggle('popup-animate');\n  });\n});\n\n\n//# sourceURL=webpack://weather-app/./src/theme.js?");

/***/ }),

/***/ "./src/styles/assets/fonts/bebas-neue-v9-latin-regular.woff":
/*!******************************************************************!*\
  !*** ./src/styles/assets/fonts/bebas-neue-v9-latin-regular.woff ***!
  \******************************************************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

eval("module.exports = __webpack_require__.p + \"b2c51ea5356cf5a381c7.woff\";\n\n//# sourceURL=webpack://weather-app/./src/styles/assets/fonts/bebas-neue-v9-latin-regular.woff?");

/***/ }),

/***/ "./src/styles/assets/fonts/bebas-neue-v9-latin-regular.woff2":
/*!*******************************************************************!*\
  !*** ./src/styles/assets/fonts/bebas-neue-v9-latin-regular.woff2 ***!
  \*******************************************************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

eval("module.exports = __webpack_require__.p + \"2722c396c28250094a8c.woff2\";\n\n//# sourceURL=webpack://weather-app/./src/styles/assets/fonts/bebas-neue-v9-latin-regular.woff2?");

/***/ }),

/***/ "./src/styles/assets/svg/cloudy.svg":
/*!******************************************!*\
  !*** ./src/styles/assets/svg/cloudy.svg ***!
  \******************************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

eval("module.exports = __webpack_require__.p + \"41a9a0b9d0227a299b43.svg\";\n\n//# sourceURL=webpack://weather-app/./src/styles/assets/svg/cloudy.svg?");

/***/ }),

/***/ "./src/styles/assets/svg/dot-menu.svg":
/*!********************************************!*\
  !*** ./src/styles/assets/svg/dot-menu.svg ***!
  \********************************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

eval("module.exports = __webpack_require__.p + \"28423e5202a162db886b.svg\";\n\n//# sourceURL=webpack://weather-app/./src/styles/assets/svg/dot-menu.svg?");

/***/ }),

/***/ "./src/styles/assets/svg/drizzle.svg":
/*!*******************************************!*\
  !*** ./src/styles/assets/svg/drizzle.svg ***!
  \*******************************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

eval("module.exports = __webpack_require__.p + \"47b4c122f200473d5b4e.svg\";\n\n//# sourceURL=webpack://weather-app/./src/styles/assets/svg/drizzle.svg?");

/***/ }),

/***/ "./src/styles/assets/svg/foggy.svg":
/*!*****************************************!*\
  !*** ./src/styles/assets/svg/foggy.svg ***!
  \*****************************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

eval("module.exports = __webpack_require__.p + \"3398ae4987b9ce379625.svg\";\n\n//# sourceURL=webpack://weather-app/./src/styles/assets/svg/foggy.svg?");

/***/ }),

/***/ "./src/styles/assets/svg/partly-sunny.svg":
/*!************************************************!*\
  !*** ./src/styles/assets/svg/partly-sunny.svg ***!
  \************************************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

eval("module.exports = __webpack_require__.p + \"aea867f9df1da52f796f.svg\";\n\n//# sourceURL=webpack://weather-app/./src/styles/assets/svg/partly-sunny.svg?");

/***/ }),

/***/ "./src/styles/assets/svg/rain.svg":
/*!****************************************!*\
  !*** ./src/styles/assets/svg/rain.svg ***!
  \****************************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

eval("module.exports = __webpack_require__.p + \"25086af993bebec6590c.svg\";\n\n//# sourceURL=webpack://weather-app/./src/styles/assets/svg/rain.svg?");

/***/ }),

/***/ "./src/styles/assets/svg/snow.svg":
/*!****************************************!*\
  !*** ./src/styles/assets/svg/snow.svg ***!
  \****************************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

eval("module.exports = __webpack_require__.p + \"4d02a6f4cba0919ba630.svg\";\n\n//# sourceURL=webpack://weather-app/./src/styles/assets/svg/snow.svg?");

/***/ }),

/***/ "./src/styles/assets/svg/sunny.svg":
/*!*****************************************!*\
  !*** ./src/styles/assets/svg/sunny.svg ***!
  \*****************************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

eval("module.exports = __webpack_require__.p + \"9a633ef37898c199f6e3.svg\";\n\n//# sourceURL=webpack://weather-app/./src/styles/assets/svg/sunny.svg?");

/***/ }),

/***/ "./src/styles/assets/svg/thunderstorm.svg":
/*!************************************************!*\
  !*** ./src/styles/assets/svg/thunderstorm.svg ***!
  \************************************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

eval("module.exports = __webpack_require__.p + \"bb3db9701f0ed1842d72.svg\";\n\n//# sourceURL=webpack://weather-app/./src/styles/assets/svg/thunderstorm.svg?");

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
/******/ 	/* webpack/runtime/global */
/******/ 	(() => {
/******/ 		__webpack_require__.g = (function() {
/******/ 			if (typeof globalThis === 'object') return globalThis;
/******/ 			try {
/******/ 				return this || new Function('return this')();
/******/ 			} catch (e) {
/******/ 				if (typeof window === 'object') return window;
/******/ 			}
/******/ 		})();
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
/******/ 	/* webpack/runtime/publicPath */
/******/ 	(() => {
/******/ 		var scriptUrl;
/******/ 		if (__webpack_require__.g.importScripts) scriptUrl = __webpack_require__.g.location + "";
/******/ 		var document = __webpack_require__.g.document;
/******/ 		if (!scriptUrl && document) {
/******/ 			if (document.currentScript)
/******/ 				scriptUrl = document.currentScript.src
/******/ 			if (!scriptUrl) {
/******/ 				var scripts = document.getElementsByTagName("script");
/******/ 				if(scripts.length) scriptUrl = scripts[scripts.length - 1].src
/******/ 			}
/******/ 		}
/******/ 		// When supporting browsers where an automatic publicPath is not supported you must specify an output.publicPath manually via configuration
/******/ 		// or pass an empty string ("") and set the __webpack_public_path__ variable from your code to use your own logic.
/******/ 		if (!scriptUrl) throw new Error("Automatic publicPath is not supported in this browser");
/******/ 		scriptUrl = scriptUrl.replace(/#.*$/, "").replace(/\?.*$/, "").replace(/\/[^\/]+$/, "/");
/******/ 		__webpack_require__.p = scriptUrl;
/******/ 	})();
/******/ 	
/******/ 	/* webpack/runtime/jsonp chunk loading */
/******/ 	(() => {
/******/ 		__webpack_require__.b = document.baseURI || self.location.href;
/******/ 		
/******/ 		// object to store loaded and loading chunks
/******/ 		// undefined = chunk not loaded, null = chunk preloaded/prefetched
/******/ 		// [resolve, reject, Promise] = chunk loading, 0 = chunk loaded
/******/ 		var installedChunks = {
/******/ 			"index": 0
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
/******/ 		// no on chunks loaded
/******/ 		
/******/ 		// no jsonp function
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
/******/ 	// This entry module can't be inlined because the eval devtool is used.
/******/ 	var __webpack_exports__ = __webpack_require__("./src/index.js");
/******/ 	
/******/ })()
;