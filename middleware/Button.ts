export class Button {
    id: string | undefined
    private elem: Element | null = null
    public textContent: string | null | undefined = ''
    constructor(public selector: string) {
        this.id = selector
        this.elem = document.querySelector(this.id)
        this.textContent = this.elem?.textContent
    }
    disable() {
        document.querySelector(this.id!)?.setAttribute('disabled', 'disabled');
        return this
    }

    text(text: string) {
        if (this.elem) {
            this.elem.textContent = text
        }
        return this
    }
    

    enable() {
        document.querySelector(this.id!)?.removeAttribute('disabled');
        return this
    }
}
