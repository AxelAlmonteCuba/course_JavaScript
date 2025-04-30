//variables
let nombre:string = "Axel";
let apellido:string = "Almonte";
let edad:number = 22;

//constantes
const dni:number = 87654321;

console.log("Hola, soy " + nombre + " " + apellido + " y tengo " + edad + " años.");

//arreglos
let personas:string[] = ["Axel", "Almonte", "Jose"];

let div_personas:HTMLElement | null = document.querySelector("#personas");

personas.map((persona)=>{
    div_personas.innerHTML += persona
}
)