var RequiredProductVariant=function(t){var e={};function r(o){if(e[o])return e[o].exports;var n=e[o]={i:o,l:!1,exports:{}};return t[o].call(n.exports,n,n.exports,r),n.l=!0,n.exports}return r.m=t,r.c=e,r.d=function(t,e,o){r.o(t,e)||Object.defineProperty(t,e,{enumerable:!0,get:o})},r.r=function(t){"undefined"!=typeof Symbol&&Symbol.toStringTag&&Object.defineProperty(t,Symbol.toStringTag,{value:"Module"}),Object.defineProperty(t,"__esModule",{value:!0})},r.t=function(t,e){if(1&e&&(t=r(t)),8&e)return t;if(4&e&&"object"==typeof t&&t&&t.__esModule)return t;var o=Object.create(null);if(r.r(o),Object.defineProperty(o,"default",{enumerable:!0,value:t}),2&e&&"string"!=typeof t)for(var n in t)r.d(o,n,function(e){return t[e]}.bind(null,n));return o},r.n=function(t){var e=t&&t.__esModule?function(){return t.default}:function(){return t};return r.d(e,"a",e),e},r.o=function(t,e){return Object.prototype.hasOwnProperty.call(t,e)},r.p="",r(r.s=0)}([function(t,e,r){"use strict";Object.defineProperty(e,"__esModule",{value:!0}),e.RequiredProductVariant=void 0;var o=r(1),n=function(){function t(){}return t.prototype.getVariantErrorElement=function(){return o(".t-store__prod-popup__container .t-input-error")},t.prototype.createVariantErrorElement=function(t){var e=document.createElement("div");e.innerText=t,e.className="t-input-error",e.style.display="block",o(".t-store__prod-popup__container .t-product__option").append(e)},t.prototype.getVariantSelector=function(){return o(".t-store__prod-popup__container select")},t.prototype.onProductCardClick=function(t){t.closest(".js-product").find(' a[href="#prodpopup"]:first').trigger("click"),this.bindProductPopupEvents()},t.prototype.bindProductPopupEvents=function(){var t=this,e=o(".t-store__prod-popup__container a");e.off("click"),e.click((function(e){t.validateProductVariantRequired()&&(e.preventDefault(),e.stopPropagation(),e.stopImmediatePropagation())})),this.getVariantSelector().change((function(){return t.validateProductVariantRequired()}))},t.prototype.validateProductVariantRequired=function(){var t=""===this.getVariantSelector().val().toString(),e=this.getVariantErrorElement();return!e.length&&t?this.createVariantErrorElement("Пожалуйста, выберите вариант"):e.length&&!t&&e.remove(),t},t.prototype.init=function(){var t=this;o('.js-product:has(.js-product-edition-option-variants) a[href="#order"]').each((function(e,r){var n=o(r);n.off("click"),n.click((function(e){t.onProductCardClick(n),e.preventDefault(),e.stopImmediatePropagation(),e.stopPropagation()}))}))},t.prototype.setup=function(){var t=this;o(document).ready((function(){console.log("ready"),t.init()})),setTimeout((function(){return t.init()}),100)},t}();e.RequiredProductVariant=n},function(t,e){t.exports=jQuery}]);
//# sourceMappingURL=RequiredProductVariant.js.map