//variables
var nombre = "Axel";
var apellido = "Almonte";
var edad = 22;
//constantes
var dni = 87654321;
console.log("Hola, soy " + nombre + " " + apellido + " y tengo " + edad + " años.");
//arreglos
var personas = ["Axel", "Almonte", "Jose"];
var edades = [22, 11, 24];
var div_personas = document.querySelector("#personas");
div_personas.innerHTML = "<ul>" +
    personas.map(function (persona) {
        return "<li> ".concat(persona, " </li>");
    }).join("");
div_personas.innerHTML += "</ul>";
mostrar_datos(personas, edades, div_personas);
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
