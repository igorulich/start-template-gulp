/*
 * ATTENTION: The "eval" devtool has been used (maybe by default in mode: "development").
 * This devtool is neither made for production nor for readable output files.
 * It uses "eval()" calls to create a separate source file in the browser devtools.
 * If you are trying to read the output file, select a different devtool (https://webpack.js.org/configuration/devtool/)
 * or disable the default devtool with "devtool: false".
 * If you are looking for production-ready output files, see mode: "production" (https://webpack.js.org/configuration/mode/).
 */
/******/ (() => { // webpackBootstrap
/******/ 	var __webpack_modules__ = ({

/***/ "./src/js/func/aos.js":
/*!****************************!*\
  !*** ./src/js/func/aos.js ***!
  \****************************/
/***/ (() => {

eval("AOS.init({\n  once: false,\n  easing: \"ease\",\n  debounceDelay: 50,\n  ThrottleDelay: 2,\n  offset: 160\n});\n\n//# sourceURL=webpack://start-template-gulp/./src/js/func/aos.js?");

/***/ }),

/***/ "./src/js/func/slick.js":
/*!******************************!*\
  !*** ./src/js/func/slick.js ***!
  \******************************/
/***/ (() => {

eval("$(\".slick-carousel\").slick({\n  dots: false,\n  infinite: true,\n  autoplay: true,\n  arrows: false,\n  speed: 500,\n  slidesToShow: 2,\n  slidesToScroll: 1,\n  responsive: [{\n    breakpoint: 480,\n    settings: {\n      slidesToShow: 1,\n      slidesToScroll: 1\n    }\n  }]\n});\n\n//# sourceURL=webpack://start-template-gulp/./src/js/func/slick.js?");

/***/ }),

/***/ "./src/js/main.js":
/*!************************!*\
  !*** ./src/js/main.js ***!
  \************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var _func_slick__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./func/slick */ \"./src/js/func/slick.js\");\n/* harmony import */ var _func_slick__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_func_slick__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var _func_aos__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./func/aos */ \"./src/js/func/aos.js\");\n/* harmony import */ var _func_aos__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_func_aos__WEBPACK_IMPORTED_MODULE_1__);\n\n\n\n//# sourceURL=webpack://start-template-gulp/./src/js/main.js?");

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
/******/ 			// no module.id needed
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
/************************************************************************/
/******/ 	
/******/ 	// startup
/******/ 	// Load entry module and return exports
/******/ 	// This entry module can't be inlined because the eval devtool is used.
/******/ 	__webpack_require__("./src/js/main.js");
/******/ 	__webpack_require__("./src/js/func/aos.js");
/******/ 	var __webpack_exports__ = __webpack_require__("./src/js/func/slick.js");
/******/ 	
/******/ })()
;
//# sourceMappingURL=scripts.js.map
