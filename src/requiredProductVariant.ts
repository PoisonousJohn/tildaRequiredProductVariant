import * as jQuery from "jquery"

export class RequiredProductVariant {
    getVariantErrorElement() {
        return jQuery('.t-store__prod-popup__container .t-input-error')
    }

    createVariantErrorElement(text: string) {
        const el = document.createElement('div')
        el.innerText = text
        el.className = 't-input-error'
        el.style.display = 'block'
        jQuery('.t-store__prod-popup__container .t-product__option').append(el)
    }

    getVariantSelector() {
        return jQuery('.t-store__prod-popup__container select')
    }

    onProductCardClick(el: JQuery<any>) {
        el.closest('.js-product')
            .find(' a[href="#prodpopup"]:first')
            .trigger('click')
        this.bindProductPopupEvents()
    }

    bindProductPopupEvents() {
        const submitBtn = jQuery('.t-store__prod-popup__container a')
        submitBtn.bindFirst('click', (event) => {
            if (this.validateProductVariantRequired()) {
                event.preventDefault()
                event.stopPropagation()
                event.stopImmediatePropagation()
            }
        })
        this.getVariantSelector().change(() => this.validateProductVariantRequired())
        window.tcart__addEvent__links()
    }

    /**
     * Return true in case of an error
     */
    validateProductVariantRequired() {
        const selector = this.getVariantSelector()
        const isError = selector.val().toString() === ""
        let errorText = this.getVariantErrorElement()
        if (!errorText.length && isError) {
            this.createVariantErrorElement('Пожалуйста, выберите вариант')
        } else if (errorText.length && !isError) {
            errorText.remove()
        }

        return isError
    }

    init() {
        jQuery('.js-product:has(.js-product-edition-option-variants) a[href="#order"]').each((_, htmlEl) => {
            const el = jQuery(htmlEl)
            el.off('click')
            el.click((e) => {
                this.onProductCardClick(el)
                e.preventDefault()
                e.stopImmediatePropagation()
                e.stopPropagation()
            })
        })
    }

    setup() {
        jQuery(document).ready(() => {
            console.log('ready')
            this.init()
        })
        this.init()
        setTimeout(() => this.init(), 1000)
    }
}

