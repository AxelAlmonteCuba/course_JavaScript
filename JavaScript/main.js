
//alert('hola mundo')

var nombre = ('Axel Almonte');
var edad = 17;

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

imprimir()

function mostrarDatos(nombre, edad) {
     datos= `
    <h1> Hola ${nombre} </h1>
    <h2>tienes ${edad} años</h2>`;
    return datos;
}

function imprimir() {
    var datos = document.getElementById('datos');
    datos.innerHTML = mostrarDatos("Axel Almonte", 22);
}