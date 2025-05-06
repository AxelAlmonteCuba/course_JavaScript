//clases
var persona = /** @class */ (function () {
    function persona(nombre, apellido, edad) {
        this.nombre = nombre;
        this.apellido = apellido;
        this.edad = edad;
    }
    Object.defineProperty(persona.prototype, "getEdad", {
        get: function () {
            return this.edad;
        },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(persona.prototype, "setNombre", {
        set: function (nombre) {
            this.nombre = nombre;
        },
        enumerable: false,
        configurable: true
    });
    persona.prototype.mostrar_datos = function () {
        return "<p>Hola, soy ".concat(this.nombre, " ").concat(this.apellido, " y tengo ").concat(this.edad, " a\u00F1os.</p>");
    };
    return persona;
}());
var Admininstrador = /** @class */ (function () {
    function Admininstrador(nombre, rol, area) {
        this.nombre = nombre;
        this.rol = "Administrador";
        this.area = area;
    }
    return Admininstrador;
}());
//instanciando la clase
var persona1 = new persona("Axel", "Almonte", 21);
var datos = "";
var compuHP = {
    nombre: "Laptop HP",
    precio: 1000,
    marca: "HP",
    modelo: "HP 123",
    ram: 16,
    pulgadas: 24,
    mostrar_datos: function () {
        return "<h1> Computador ".concat(this.nombre, " </h1>\n        <ul>\n        <li> Precio: ").concat(this.precio, " </li>\n        <li> Marca: ").concat(this.marca, " </li>\n        <li> Modelo: ").concat(this.modelo, " </li>\n        <li> Ram: ").concat(this.ram, " </li>\n        <li> Pulgadas: ").concat(this.pulgadas, " </li>\n        </ul>");
    }
};
var datos_Compu = compuHP.mostrar_datos();
var div_computador = document.querySelector("#computadora");
if (div_computador === null) {
    throw new Error("No se ha encontrado el elemento con id 'computadora'");
}
else {
    div_computador.innerHTML = datos_Compu;
}
var admin = new Admininstrador("Axel", "Administrador", "Sistemas");
var usuario = {
    nombre: "Axel Almonte",
    rol: "Usuario"
};
datos += "<p>Hola, soy ".concat(admin.nombre, ", soy ").concat(admin.rol, " del area ").concat(admin.area, "</p>");
datos += "<p>Hola, soy ".concat(usuario.nombre, ", soy ").concat(usuario.rol, "</p>");
//variables
var nombre = "Axel";
var apellido = "Almonte";
var edad = 22;
//constantes
var dni = 87654321;
console.log("Hola, soy " + nombre + " " + apellido + " y tengo " + edad + " años.");
datos += persona1.mostrar_datos();
var div_personas = document.querySelector("#personas");
if (div_personas === null) {
    throw new Error("No se ha encontrado el elemento con id 'personas'");
}
else {
    div_personas.innerHTML = datos;
}
//arreglos
var personas = ["Axel", "Almonte", "Jose"];
var edades = [22, 11, 24];
//map
div_personas.innerHTML = "<ul>" +
    personas.map(function (persona) {
        return "<li> ".concat(persona, " </li>");
    }).join("");
//filter
var personas_mayores = edades.filter(function (edad) {
    return edad >= 18;
});
//find
var personFind = personas.find(function (person) { return person === "Axel"; });
//div_personas.innerHTML += "</ul>";
//mostrar_datos(personas, edades, div_personas);
//funciones
function esMayorDeEdad(edad) {
    return edad >= 18;
}
function mostrar_datos(nombre, edades, div) {
    for (var i = 0; i < nombre.length; i++) {
        div.innerHTML += "<p>".concat(nombre[i], " tiene ").concat(edades[i], " a\u00F1os</p>");
        if (esMayorDeEdad(edades[i])) {
            div.innerHTML += "<p>".concat(nombre[i], " es mayor de edad</p>");
        }
        else {
            div.innerHTML += "<p>".concat(nombre[i], " es menor de edad</p>");
        }
    }
}
