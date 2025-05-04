
//variables
//var nombre = ('Axel Almonte');
//var edad = 17;



//bucles
/*nombres.forEach((nombre) => {
    document.write('Hola ' + nombre +'<br><br>')
}   )
*/

//clases
class Persona {
    nombre = "nombre por defecto";
    #edad = 0;
    
    constructor(nombre, edad) {
        this.nombre = nombre;
        this.#edad = edad;
    }

    
    aumentarEdad() {
        this.#edad++;
    }

    mostrarDatos() {
        let datos = `
        <h2> Hola ${this.nombre} </h2>
        <h2>tienes ${this.#edad} años</h2>`;
    
        if(esMayorDeEdad(this.#edad)) {
            datos += "<h2> Eres mayor de edad </h2>";
        }
        else {
            datos += "<h2> Eres menor de edad </h2>";
        }
         
        return datos;
    }
    getEdad() {
        return this.#edad;
    }

    esMayorDeEdad(edad) {
        if (edad >= 18) {
            return true;
        } else {
            return false;
        }
    }
}



//instancia de la clase
//const person = new Persona('Axel', 17);

//var datos = person.mostrarDatos();

const nombres = ['Axel', 'Frank', 'Luis', 'Pablo', 'Javier', 'Jose', 'Juan', 'Pedro', 'Andres', 'Alberto']
const edades = [12, 23, 24, 15, 26, 27, 28, 19, 3, 31];

const personas = [];

let data = "";

nombres.forEach((nombre, indice) => {
    var persona = new Persona(nombre, edades[indice]);
    personas.push(persona);
})
 
//filter
const mayorDeEdad = personas.filter(personaFilter => personaFilter.getEdad() >= 18);
//find
const findPerson = personas.find(personaFind => personaFind.nombre === 'Axel');
let dataFind = findPerson.mostrarDatos();


data += "<h1> Mayores de edad </h1>";
mayorDeEdad.forEach((personFor) => {
   data += personFor.mostrarDatos(); 
});

data += "<h1> Persona encontrada </h1>";
data += dataFind;

imprimir(data);


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

function imprimir(datos) {
    var datos_div = document.getElementById('datos');
    datos_div.innerHTML = datos;
}

function esMayorDeEdad(edad) {
    if (edad >= 18) {
        return true;
    } else {
        return false;
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