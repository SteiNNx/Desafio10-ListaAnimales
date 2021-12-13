import Cliente from './Cliente';
import Impuestos from './Impuestos';

const impuesto1 = new Impuestos(1000, 100);
console.log({ impuesto1});

const cliente1 = new Cliente('Pepito', impuesto1);
console.log({ cliente1});

console.log(cliente1.calcularImpuesto());
