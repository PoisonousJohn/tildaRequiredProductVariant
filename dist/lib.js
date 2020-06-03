var lib =
/******/ (function (modules) { // webpackBootstrap
/******/ 	// The module cache
/******/ 	var installedModules = {};
/******/
/******/ 	// The require function
/******/ 	function __webpack_require__(moduleId) {
/******/
/******/ 		// Check if module is in cache
/******/ 		if (installedModules[moduleId]) {
/******/ 			return installedModules[moduleId].exports;
                /******/
}
/******/ 		// Create a new module (and put it into the cache)
/******/ 		var module = installedModules[moduleId] = {
/******/ 			i: moduleId,
/******/ 			l: false,
/******/ 			exports: {}
                /******/
};
/******/
/******/ 		// Execute the module function
/******/ 		modules[moduleId].call(module.exports, module, module.exports, __webpack_require__);
/******/
/******/ 		// Flag the module as loaded
/******/ 		module.l = true;
/******/
/******/ 		// Return the exports of the module
/******/ 		return module.exports;
            /******/
}
/******/
/******/
/******/ 	// expose the modules object (__webpack_modules__)
/******/ 	__webpack_require__.m = modules;
/******/
/******/ 	// expose the module cache
/******/ 	__webpack_require__.c = installedModules;
/******/
/******/ 	// define getter function for harmony exports
/******/ 	__webpack_require__.d = function (exports, name, getter) {
/******/ 		if (!__webpack_require__.o(exports, name)) {
/******/ 			Object.defineProperty(exports, name, { enumerable: true, get: getter });
                /******/
}
            /******/
};
/******/
/******/ 	// define __esModule on exports
/******/ 	__webpack_require__.r = function (exports) {
/******/ 		if (typeof Symbol !== 'undefined' && Symbol.toStringTag) {
/******/ 			Object.defineProperty(exports, Symbol.toStringTag, { value: 'Module' });
                /******/
}
/******/ 		Object.defineProperty(exports, '__esModule', { value: true });
            /******/
};
/******/
/******/ 	// create a fake namespace object
/******/ 	// mode & 1: value is a module id, require it
/******/ 	// mode & 2: merge all properties of value into the ns
/******/ 	// mode & 4: return value when already ns object
/******/ 	// mode & 8|1: behave like require
/******/ 	__webpack_require__.t = function (value, mode) {
/******/ 		if (mode & 1) value = __webpack_require__(value);
/******/ 		if (mode & 8) return value;
/******/ 		if ((mode & 4) && typeof value === 'object' && value && value.__esModule) return value;
/******/ 		var ns = Object.create(null);
/******/ 		__webpack_require__.r(ns);
/******/ 		Object.defineProperty(ns, 'default', { enumerable: true, value: value });
/******/ 		if (mode & 2 && typeof value != 'string') for (var key in value) __webpack_require__.d(ns, key, function (key) { return value[key]; }.bind(null, key));
/******/ 		return ns;
            /******/
};
/******/
/******/ 	// getDefaultExport function for compatibility with non-harmony modules
/******/ 	__webpack_require__.n = function (module) {
/******/ 		var getter = module && module.__esModule ?
/******/ 			function getDefault() { return module['default']; } :
/******/ 			function getModuleExports() { return module; };
/******/ 		__webpack_require__.d(getter, 'a', getter);
/******/ 		return getter;
            /******/
};
/******/
/******/ 	// Object.prototype.hasOwnProperty.call
/******/ 	__webpack_require__.o = function (object, property) { return Object.prototype.hasOwnProperty.call(object, property); };
/******/
/******/ 	// __webpack_public_path__
/******/ 	__webpack_require__.p = "";
/******/
/******/
/******/ 	// Load entry module and return exports
/******/ 	return __webpack_require__(__webpack_require__.s = "./src/index.ts");
        /******/
})
/************************************************************************/
/******/({

/***/ "./src/index.ts":
/*!**********************!*\
  !*** ./src/index.ts ***!
  \**********************/
/*! no static exports found */
/***/ (function (module, exports, __webpack_require__) {

            "use strict";

            Object.defineProperty(exports, "__esModule", { value: true });
            exports.RequiredProductVariant = void 0;
            var RequiredProductVariant = /** @class */ (function () {
                function RequiredProductVariant() {
                }
                RequiredProductVariant.prototype.getVariantErrorElement = function () {
                    return $('.t-store__prod-popup__container .t-input-error');
                };
                RequiredProductVariant.prototype.createVariantErrorElement = function (text) {
                    var el = document.createElement('div');
                    el.innerText = text;
                    el.className = 't-input-error';
                    el.style.display = 'block';
                    $('.t-store__prod-popup__container .t-product__option').append(el);
                };
                RequiredProductVariant.prototype.getVariantSelector = function () {
                    return $('.t-store__prod-popup__container select');
                };
                RequiredProductVariant.prototype.onProductCardClick = function (el) {
                    el.closest('.js-product')
                        .find(' a[href="#prodpopup"]:first')
                        .trigger('click');
                    this.bindProductPopupEvents();
                };
                RequiredProductVariant.prototype.bindProductPopupEvents = function () {
                    var _this = this;
                    var submitBtn = $('.t-store__prod-popup__container a');
                    submitBtn.off('click');
                    submitBtn.click(function (event) {
                        if (_this.validateProductVariantRequired()) {
                            event.preventDefault();
                            event.stopPropagation();
                            event.stopImmediatePropagation();
                        }
                    });
                    this.getVariantSelector().change(function () { return _this.validateProductVariantRequired(); });
                };
                /**
                 * Return true in case of an error
                 */
                RequiredProductVariant.prototype.validateProductVariantRequired = function () {
                    var selector = this.getVariantSelector();
                    var isError = selector.val().toString() === "";
                    var errorText = this.getVariantErrorElement();
                    if (!errorText.length && isError) {
                        this.createVariantErrorElement('test');
                    }
                    else if (errorText.length && !isError) {
                        errorText.remove();
                    }
                    return isError;
                };
                RequiredProductVariant.prototype.setup = function () {
                    var _this = this;
                    $('.js-product:has(.js-product-edition-option-variants) a[href="#order"]').each(function (idx, htmlEl) {
                        var el = $(htmlEl);
                        el.off('click');
                        el.click(function (e) {
                            _this.onProductCardClick(el);
                            e.preventDefault();
                            e.stopImmediatePropagation();
                            e.stopPropagation();
                        });
                    });
                };
                return RequiredProductVariant;
            }());
            exports.RequiredProductVariant = RequiredProductVariant;


            /***/
})

    /******/
});
//# sourceMappingURL=lib.js.map