class Propietario {

    /**
     * @constructor
     * @param {string} nombre 
     * @param {string} direccion 
     * @param {string} telefono 
    */
    constructor(nombre, direccion, telefono) {
        this._nombre = nombre;
        this._direccion = direccion;
        this._telefono = telefono;
    }

    /**
     * Getters
     */
    get nombre() {
        return this._nombre;
    }
    get direccion() {
        return this._direccion;
    }
    get telefono() {
        return this._telefono;
    }

    /**
     * Setters
     */
    set nombre(nombre) {
        this._nombre = nombre;
    }
    set direccion(direccion) {
        this._direccion = direccion;
    }
    set telefono(telefono) {
        this._telefono = telefono;
    }

    /**
     * @function
     */
    datosPropietarios() {
        return `El nombre del dueño es: ${this.nombre}. El domicilio es: ${this.direccion}, y el número telefónico de contacto: ${this.telefono}`;
    }
}

class Animal extends Propietario {
    /**
     * @constructor
     * @param {string} tipo
    */
    constructor(nombre, direccion, telefono, tipo) {
        super(nombre, direccion, telefono);
        this._tipo = tipo;
    }
    /**
     * Getters
     */
    get tipo() {
        return this._tipo;
    }

    /**
     * Setters
     */
    set tipo(tipo) {
        this._tipo = tipo;
    }

    /**
     * @function
     */
    getTipo() {
        return `\n El tipo de animal es un ${this.tipo},`;
    }
}

class Mascota extends Animal {
    /**
    * @constructor
    * @param {string} nombre 
    * @param {string} direccion 
    * @param {string} telefono
    * @param {string} tipo
    * @param {string} enfermedad
    * @param {string} nombreMascota
    * @param {string} enfermedad
    */
    constructor(nombre, direccion, telefono, tipo, nombreMascota, enfermedad) {
        super(nombre, direccion, telefono, tipo);
        this._nombreMascota = nombreMascota;
        this._enfermedad = enfermedad;
    }
    /**
     * Getters
     */
    get nombreMascota() {
        return this._nombreMascota;
    }
    get enfermedad() {
        return this._enfermedad;
    }
    /**
     * Setters
     */
    set nombreMascota(nombreMascota) {
        this._nombreMascota = nombreMascota;
    }
    set enfermedad(enfermedad) {
        this._enfermedad = enfermedad;
    }

    /**
     * @function
     */
    getNombreEnfermedadMascota() {
        return `mientras que el nombre de la mascota es: ${this.nombreMascota} y la enfermedad es: ${this.enfermedad}`;
    }
}


const obtenerValoresInputs = (valueIdNameElement) => {
    return document.getElementById(valueIdNameElement).value;
}

document.getElementsByTagName('button')[0].addEventListener('click', (event) => {
    event.preventDefault();
    const propietario = obtenerValoresInputs('propietario');
    const telefono = obtenerValoresInputs('telefono');
    const direccion = obtenerValoresInputs('direccion');
    const nombreMascota = obtenerValoresInputs('nombreMascota');
    const tipo = obtenerValoresInputs('tipo');
    const enfermedad = obtenerValoresInputs('enfermedad');

    const objMascota = new Mascota(propietario, direccion, telefono, tipo, nombreMascota, enfermedad);

    const resultElementUl = document.getElementById('resultado').children[0];

    const liDatosPropetario = document.createElement("li");
    const liTipoNombreEnfermedadMascota = document.createElement("li");

    liDatosPropetario.innerHTML = `${objMascota.datosPropietarios()}`;
    liTipoNombreEnfermedadMascota.innerHTML = `${objMascota.getTipo()} ${objMascota.getNombreEnfermedadMascota()}`;

    resultElementUl.appendChild(liDatosPropetario);
    resultElementUl.appendChild(liTipoNombreEnfermedadMascota);
});

