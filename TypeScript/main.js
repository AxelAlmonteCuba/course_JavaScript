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
personas.map(function (persona) {
    div_personas.innerHTML += persona;
});
