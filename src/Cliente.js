export default class Cliente {

    /** Constructor
     * @param {string} nombre 
     * @param {Impuestos} impuestos 
    */

    constructor(nombre, impuestos) {
        this._nombre = nombre;
        this._impuestos = impuestos;
    }

    get nombre() {
        return this._nombre;
    }

    set nombre(nombre) {
        this._nombre = nombre;
    }

    /** Fórmula: ((monto_bruto_anual − deducciones) * 21%) */
    calcularImpuesto() {
        return ((this._impuestos._monto_bruto_anual - this._impuestos._deducciones) * 0.21);
    }
}