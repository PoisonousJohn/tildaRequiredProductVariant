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
        if (submitBtn.attr('requiredProductVariantEventSet')) return
        submitBtn.bindFirst('click', (event) => {
            if (this.validateProductVariantRequired()) {
                event.preventDefault()
                event.stopPropagation()
                event.stopImmediatePropagation()
            }
        })
        submitBtn.attr('requiredProductVariantEventSet', 'true')
        this.getVariantSelector().change(() => this.validateProductVariantRequired())
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
        jQuery('.js-product:has(.js-product-edition-option-variants) a.t-store__card__btn[href="#order"]')
            .each((_, htmlEl) => {
                const el = jQuery(htmlEl)
                el.off('click')
                el.click((e) => {
                    this.onProductCardClick(el)
                    e.preventDefault()
                    e.stopImmediatePropagation()
                    e.stopPropagation()
                    return false
                })
            })
    }

    wrapFunc(sourceFunc: () => void, callback: () => void) {
        return () => {
            sourceFunc()
            callback()
        }
    }

    setup() {
        jQuery(document).ready(() => {
            console.log('ready')
            this.init()
        })
        this.init()
        window.tcart__addEvent__links = this.wrapFunc(window.tcart__addEvent__links, () => this.init())
        setTimeout(() => this.init(), 1000)
    }
}

