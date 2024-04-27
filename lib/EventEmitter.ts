export class EventEmitter {
    private events: { [eventName: string]: Array<(...args: any[]) => void> } = {};

    // Metode untuk mendengarkan event
    on(eventName: string, handler: (...args: any[]) => void): void {
        if (!this.events[eventName]) {
            // Jika event belum didaftarkan sebelumnya, buat array kosong
            this.events[eventName] = [];
        }
        // Tambahkan handler ke array handlers untuk event tertentu
        this.events[eventName].push(handler);
    }

    // Metode untuk mendengarkan event sekali saja
    once(eventName: string, handler: (...args: any[]) => void): void {
        const onceHandler = (...args: any[]) => {
            handler(...args);
            this.off(eventName, onceHandler); // Hapus handler setelah dipanggil sekali
        };
        this.on(eventName, onceHandler);
    }

    // Metode untuk memancarkan event
    emit(eventName: string, ...args: any[]): void {
        if (this.events[eventName]) {
            // Panggil setiap handler untuk event tertentu dengan meneruskan argumen yang diberikan
            this.events[eventName].forEach(handler => handler(...args));
        }
    }

    // Metode untuk menghapus handler dari event tertentu
    off(eventName: string, handler: (...args: any[]) => void): void {
        if (this.events[eventName]) {
            this.events[eventName] = this.events[eventName].filter(existingHandler => existingHandler !== handler);
        }
    }
}

export const eventemitter: EventEmitter = new EventEmitter();
