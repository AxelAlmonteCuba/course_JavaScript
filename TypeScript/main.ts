
//clases

class persona{
    nombre:string;
    apellido:string;
    private edad:number;

    constructor(nombre:string, apellido:string, edad:number){
        this.nombre = nombre;
        this.apellido = apellido;
        this.edad = edad;
    }
    get getEdad():number{
        return this.edad;
    }
    set setNombre(nombre:string){
        this.nombre = nombre;
    }

    mostrar_datos():string{
        return `<p>Hola, soy ${this.nombre} ${this.apellido} y tengo ${this.edad} años.</p>`;
    }
}

//interfaces
interface user{
    nombre:string;
    rol:string;
}

class Admininstrador implements user{
    nombre: string;
    rol: string;
    area:string;
    constructor(nombre:string, rol:string, area:string){
        this.nombre = nombre;
        this.rol = "Administrador";
        this.area = area;
    }
}

//instanciando la clase
const persona1:persona = new persona("Axel", "Almonte", 21);
var datos = ""

/*if(persona1.getEdad >= 18){
    datos = "<h3>Es mayor de edad</h3>";
}else{  
    datos = "<h3>Es menor de edad</h3>";
}
*/

//types
type ram = number | string;
type nombre = string;
type notas = [number, number];

type  articulo = {
    nombre:string;
    precio:number;
    marca:string;
}
type cpu = {
    modelo:string;
    ram:ram;
}

type monitores = {
    pulgadas:number;
}

type computador = articulo & cpu & monitores ;
type computadorConMetodo = computador & {
    mostrar_datos: () => string; // funciones flechas o anonimas equivalente a un funcion lambda
}

const compuHP :computadorConMetodo = {
    nombre: "Laptop HP",   
    precio: 1000,
    marca: "HP",
    modelo: "HP 123",
    ram: 16,
    pulgadas: 24,
    mostrar_datos(){
        return `<h1> Computador ${this.nombre} </h1>
        <ul>
        <li> Precio: ${this.precio} </li>
        <li> Marca: ${this.marca} </li>
        <li> Modelo: ${this.modelo} </li>
        <li> Ram: ${this.ram} </li>
        <li> Pulgadas: ${this.pulgadas} </li>
        </ul>`;
    }
}

const datos_Compu = compuHP.mostrar_datos();
let div_computador:HTMLElement | null = document.querySelector("#computadora");

if(div_computador === null){
    throw new Error("No se ha encontrado el elemento con id 'computadora'");
}
else{
    div_computador.innerHTML = datos_Compu;
}
const admin:Admininstrador = new Admininstrador("Axel", "Administrador", "Sistemas");
const usuario:user = {
    nombre: "Axel Almonte",
    rol: "Usuario"
}

datos += `<p>Hola, soy ${admin.nombre}, soy ${admin.rol} del area ${admin.area}</p>`;
datos += `<p>Hola, soy ${usuario.nombre}, soy ${usuario.rol}</p>`;

//variables
let nombre:string = "Axel";
let apellido:string = "Almonte";
let edad:number = 22;

//constantes
const dni:number = 87654321;

console.log("Hola, soy " + nombre + " " + apellido + " y tengo " + edad + " años.");

datos += persona1.mostrar_datos();

let div_personas:HTMLElement | null = document.querySelector("#personas");
if(div_personas === null){
    throw new Error("No se ha encontrado el elemento con id 'personas'");
}else{
    div_personas.innerHTML = datos;
}

//arreglos
let personas:string[] = ["Axel", "Almonte", "Jose"];
let edades:number[] = [22, 11, 24];


//map
div_personas.innerHTML = "<ul>" + 
        personas.map((persona)=>{ //funcion flecha con el metodo map
            return `<li> ${persona} </li>`;
        }).join("");

//filter
const personas_mayores = edades.filter((edad)=>{
    return edad >= 18;
});
 //find
 const personFind: string|undefined = personas.find((person) => person === "Axel") ; 

 

//div_personas.innerHTML += "</ul>";

//mostrar_datos(personas, edades, div_personas);



//funciones
function esMayorDeEdad(edad:number):boolean{
    return edad >= 18;
}

function mostrar_datos(nombre:string[], edades:number[], div: HTMLElement){
    for(let i = 0; i < nombre.length; i++){
        div.innerHTML += `<p>${nombre[i]} tiene ${edades[i]} años</p>`;
        if(esMayorDeEdad(edades[i])){
            div.innerHTML += `<p>${nombre[i]} es mayor de edad</p>`;
        }else{
            div.innerHTML += `<p>${nombre[i]} es menor de edad</p>`;
        }
    }
}