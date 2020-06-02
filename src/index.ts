import * as jQuery from "jquery";

export class RequiredProductVariant {
    getVariantErrorElement() {
        return $('.t-store__prod-popup__container .t-input-error')
    }

    createVariantErrorElement(text: string) {
        const el = document.createElement('div');
        el.innerText = text;
        el.className = 't-input-error';
    }

    getVariantSelector() {
        return $('.t-store__prod-popup__container select')
    }

    onProductCardClick(el: JQuery<any>) {
        el.closest('.js-product')
            .find(' a[href="#prodpopup"]:first')
            .trigger('click');
        this.bindProductPopupEvents();
    }

    bindProductPopupEvents() {
        $('.t-store__prod-popup__container a').click((event) => {
            if (this.validateProductVariantRequired()) event.stopPropagation();
        })
        this.getVariantSelector().change(() => this.validateProductVariantRequired());
    }

    /**
     * Return true in case of an error
     */
    validateProductVariantRequired() {
        const selector = this.getVariantSelector();
        const isError = selector.val().toString() !== "";
        let errorText = this.getVariantErrorElement();
        if (!errorText && isError) {
            this.createVariantErrorElement('test');
        } else if (errorText && !isError) {
            errorText.remove();
        }

        return isError;
    }

    setup() {
        $('.js-product:has(.js-product-edition-option-variants) a[href="#order"]').each((idx, htmlEl) => {
            const el = $(htmlEl);
            el.off('click');
            el.click((e) => {
                e.preventDefault();
                this.onProductCardClick(el);
            })
        })
    }
}
