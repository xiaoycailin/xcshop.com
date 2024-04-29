export function calulatePercent(nilaiAwal: number, terpakai: number): number {
    const sisa: number = nilaiAwal - terpakai;
    const persentaseSisa: number = (sisa / nilaiAwal) * 100;
    return persentaseSisa;
}