
//alert('hola mundo')

var nombre = ('Axel Almonte')
var edad = 22

//document.write('Hola ' + nombre + ' tienes ' + edad + ' años' + '<br>')

var datos = document.getElementById('datos')
//datos.innerHTML = 'Hola ' + nombre + ' tienes ' + edad + ' años' + '<br>'

datos.innerHTML = `
<h1> Hola ${nombre} </h1>
<h2>tienes ${edad} años</h2>
` 