export default class Impuestos {

    /** Constructor 
     * @param {number} monto_bruto_anual 
     * @param {number} deducciones 
    */

    constructor(monto_bruto_anual, deducciones) {
        this._monto_bruto_anual = monto_bruto_anual;
        this._deducciones = deducciones;
    }

    get monto_bruto_anual() {
        return this._monto_bruto_anual;
    }

    set monto_bruto_anual(monto_bruto_anual) {
        this._monto_bruto_anual = monto_bruto_anual;
    }

    get deducciones() {
        return this._deducciones;
    }

    set deducciones(deducciones) {
        this._deducciones = deducciones;
    }

}