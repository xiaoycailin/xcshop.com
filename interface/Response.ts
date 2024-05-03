export interface Response<T = any> {
    success?: boolean
    message?: string
    status?: number
    error?: Error | string
    data?: T
}

export interface BuyerData {
    /**
     * @param inputs adalah data akun user yang wajib di isi 
     */
    inputs: { name: string, value: string }[]
    /**
     * @param email yang di inputkan oleh user (tidak wajib)
     */
    email?: string
    /**
     * @param qty adalah jumlah pembelian produk
     */
    qty: number

    /**
     * @param variant adalah kode sku produk yang di pilih oleh user
     */
    variant: string
    /**
     * @param payCode adalah kode dari pembayaran yang di pilih
     */
    payCode: string
    /**
     * @param promoCode adalah kode promo jika user menggunakan
     */
    promoCode: string

    /**
     * @param phoneCode adalah kode nomor telepon berdasarkan negara
     */
    phoneCode: string
    /**
     * @param phoneNumber adalah nomor telepon yang wajib di input user
     */
    phoneNumber: string,
    /**
     * @param act adalah type request ke server 
     * jika `inquiry` hanya melakukan validasi data saja
     * jika `invoice` akan melakukan generate pembayaran pesanan yang di lakukan oleh user
     */
    act: 'inquiry' | 'invoice'
}