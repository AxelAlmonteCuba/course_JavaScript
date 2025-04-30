//variables
let nombre:string = "Axel";
let apellido:string = "Almonte";
let edad:number = 22;

//constantes
const dni:number = 87654321;

console.log("Hola, soy " + nombre + " " + apellido + " y tengo " + edad + " años.");

//arreglos
let personas:string[] = ["Axel", "Almonte", "Jose"];
let edades:number[] = [22, 11, 24];

let div_personas:HTMLElement | null = document.querySelector("#personas");
div_personas.innerHTML = "<ul>" + 
        personas.map((persona)=>{
            return `<li> ${persona} </li>`;
        }).join("");

div_personas.innerHTML += "</ul>";

mostrar_datos(personas, edades, div_personas);

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