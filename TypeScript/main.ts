//clases

class persona{
    nombre:string;
    apellido:string;
    edad:number;

    constructor(nombre:string, apellido:string, edad:number){
        this.nombre = nombre;
        this.apellido = apellido;
        this.edad = edad;
    }

    mostrar_datos():string{
        return `<p>Hola, soy ${this.nombre} ${this.apellido} y tengo ${this.edad} años.</p>`;
    }
}


//instanciando la clase
const persona1:persona = new persona("Axel", "Almonte", 21);


//variables
let nombre:string = "Axel";
let apellido:string = "Almonte";
let edad:number = 22;

//constantes
const dni:number = 87654321;

console.log("Hola, soy " + nombre + " " + apellido + " y tengo " + edad + " años.");

let div_personas:HTMLElement | null = document.querySelector("#personas");
if(div_personas === null){
    throw new Error("No se ha encontrado el elemento con id 'personas'");
}else{
    div_personas.innerHTML = persona1.mostrar_datos();
}

//arreglos
/*let personas:string[] = ["Axel", "Almonte", "Jose"];
let edades:number[] = [22, 11, 24];


div_personas.innerHTML = "<ul>" + 
        personas.map((persona)=>{
            return `<li> ${persona} </li>`;
        }).join("");

div_personas.innerHTML += "</ul>";

mostrar_datos(personas, edades, div_personas);*/



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