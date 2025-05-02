
//variables
var nombre = ('Axel Almonte');
var edad = 17;

var nombres = ['Axel', 'Frank', 'Luis', 'Pablo', 'Javier', 'Jose', 'Juan', 'Pedro', 'Andres', 'Alberto']
var edades = [22, 23, 24, 25, 26, 27, 28, 29, 30, 31];


//bucles
nombres.forEach((nombre) => {
    document.write('Hola ' + nombre +'<br><br>')
}   )

//objetos
var person = new Persona('Axel', 17);


imprimir()


//funciones
function mostrarDatos(nombre, edad) {
    datos= `
    <h1> Hola ${nombre} </h1>
    <h2>tienes ${edad} años</h2>`;

    if(esMayorDeEdad(edad)) {
        datos += '<h2> Eres mayor de edad </h2>'
    }
    else {
        datos += '<h2> Eres menor de edad </h2>'
    }
     
    return datos;
}

function imprimir() {
    var datos = document.getElementById('datos');
    datos.innerHTML = mostrarDatos("Axel Almonte", 16);
}

function esMayorDeEdad(edad) {
    if (edad >= 18) {
        return true;
    } else {
        return false;
    }
}


//clases
class Persona {
    nombre = "nombre por defecto";
    #edad = 0;
    
    constructor(nombre, edad) {
        this.nombre = nombre;
        this.edad = edad;
    }

    mostrarDatos() {
        return `Hola ${this.nombre} tienes ${this.edad} años`;
    }
    aumentarEdad() {
        this.edad++;
    }
    
}











/*
En este aprtado se anotara codigos o conceptos que se usaran durante el aprendizaje conmo repaso en el futuro
    
*/



//alert('hola mundo')



/*for (var i = 0; i < nombres.length; i++) {
    document.write('Hola ' + nombres[i] + ' tienes ' + edades[i] + ' años' + '<br><br>')
}
*/

//document.write('Hola ' + nombre + ' tienes ' + edad + ' años' + '<br>')


//var datos = document.getElementById('datos')
//datos.innerHTML = 'Hola ' + nombre + ' tienes ' + edad + ' años' + '<br>'

/*datos.innerHTML = `
<h1> Hola ${nombre} </h1>
<h2>tienes ${edad} años</h2>`

if(edad >= 18) {
    datos.innerHTML += '<h2> Eres mayor de edad </h2>'
}
else {
    datos.innerHTML += '<h2> Eres menor de edad </h2>'
}

for (var i = 0; i < 10; i++) {
    datos.innerHTML += '<h2> Iteracion ' + i + '</h2>'
}
*/

//mostrarDatos(nombre, edad)