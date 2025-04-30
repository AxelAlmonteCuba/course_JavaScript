//variables
var nombre = "Axel";
var apellido = "Almonte";
var edad = 22;
//constantes
var dni = 87654321;
console.log("Hola, soy " + nombre + " " + apellido + " y tengo " + edad + " años.");
//arreglos
var personas = ["Axel", "Almonte", "Jose"];
var div_personas = document.querySelector("#personas");
div_personas.innerHTML = "<ul>";
console.log(personas.map(function (persona) {
    return "<li> ".concat(persona, " </li>");
}).join(""));
div_personas.innerHTML += "</ul>";
