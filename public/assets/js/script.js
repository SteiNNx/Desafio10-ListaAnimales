"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports["default"] = void 0;

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }

function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); Object.defineProperty(Constructor, "prototype", { writable: false }); return Constructor; }

var Cliente = /*#__PURE__*/function () {
  /** Constructor
   * @param {string} nombre 
   * @param {Impuestos} impuestos 
  */
  function Cliente(nombre, impuestos) {
    _classCallCheck(this, Cliente);

    this._nombre = nombre;
    this._impuestos = impuestos;
  }

  _createClass(Cliente, [{
    key: "nombre",
    get: function get() {
      return this._nombre;
    },
    set: function set(nombre) {
      this._nombre = nombre;
    }
    /** Fórmula: ((monto_bruto_anual − deducciones) * 21%) */

  }, {
    key: "calcularImpuesto",
    value: function calcularImpuesto() {
      return (this._impuestos._monto_bruto_anual - this._impuestos._deducciones) * 0.21;
    }
  }]);

  return Cliente;
}();

exports["default"] = Cliente;
"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports["default"] = void 0;

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }

function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); Object.defineProperty(Constructor, "prototype", { writable: false }); return Constructor; }

var Impuestos = /*#__PURE__*/function () {
  /** Constructor 
   * @param {number} monto_bruto_anual 
   * @param {number} deducciones 
  */
  function Impuestos(monto_bruto_anual, deducciones) {
    _classCallCheck(this, Impuestos);

    this._monto_bruto_anual = monto_bruto_anual;
    this._deducciones = deducciones;
  }

  _createClass(Impuestos, [{
    key: "monto_bruto_anual",
    get: function get() {
      return this._monto_bruto_anual;
    },
    set: function set(monto_bruto_anual) {
      this._monto_bruto_anual = monto_bruto_anual;
    }
  }, {
    key: "deducciones",
    get: function get() {
      return this._deducciones;
    },
    set: function set(deducciones) {
      this._deducciones = deducciones;
    }
  }]);

  return Impuestos;
}();

exports["default"] = Impuestos;
"use strict";

var _Cliente = _interopRequireDefault(require("./Cliente"));

var _Impuestos = _interopRequireDefault(require("./Impuestos"));

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { "default": obj }; }

var impuesto1 = new _Impuestos["default"](1000, 100);
console.log({
  impuesto1: impuesto1
});
var cliente1 = new _Cliente["default"]('Pepito', impuesto1);
console.log({
  cliente1: cliente1
});
console.log(cliente1.calcularImpuesto());
