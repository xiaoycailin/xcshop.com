import { eventemitter } from '@/lib/EventEmitter';
import { ToastMessage } from 'primereact/toast';


class ToastX {
    static toastProps: ToastMessage = {
        life: 3000
    }
    static initialize(onShow: (data: ToastMessage) => void) {
        eventemitter.on('toastOpen', (data: ToastMessage) => {
            onShow(data)
        })
    }
    static create({ title, detail }: { title?: string, detail?: string }) {
        this.toastProps.summary = title
        this.toastProps.detail = detail
        return this
    }
    static text(text?: string) {
        this.toastProps.detail = text
        return this
    }

    static life(number: number) {
        this.toastProps.life = number
        return this
    }

    private static serverity(typeToast: typeof this.toastProps.severity) {
        this.toastProps.severity = typeToast
    }
    static show() {
        if (!this.toastProps.summary) this.toastProps.summary = this.toastProps.severity?.toUpperCase()
        eventemitter.emit('toastOpen', this.toastProps)
    }
    static success() {
        this.serverity('success')
        this.show()
    }
    static error() {
        this.serverity('error')
        this.show()
    }
    static info() {
        this.serverity('info')
        this.show()
    }
    static warning() {
        this.serverity('warn')
        this.show()
    }
}

export default ToastX