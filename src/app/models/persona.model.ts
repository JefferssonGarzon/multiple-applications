export class Persona{
    nombre:string;
    apellido:string;
    edad:number;
    correo?:string;
    direccion?:string;

    constructor(nombre:string, apellido:string, edad:number, correo?:string, direccion?:string){

        this.nombre = nombre;
        this.apellido = apellido;
        this.edad = edad;
        this.correo = correo;
        this.direccion = direccion;
    }
}