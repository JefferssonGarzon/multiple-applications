import { NumberSymbol } from '@angular/common';
import { ThisReceiver } from '@angular/compiler';
import { EventEmitter, Injectable } from '@angular/core';
import { DatosExtra } from '../models/datos-extra-persona.model';
import { Persona } from '../models/persona.model';
import { DataService } from './data.service';
import { LoggingServiceService } from './logging-service.service';

@Injectable({
  providedIn: 'root'
})
export class PersonasService {

  // saludar = new EventEmitter<number>();

  personas: Persona[] = [];

  constructor(private logService:LoggingServiceService, private dataService: DataService) { }

  setPersonas(personas: Persona[]){
    this.personas = personas;
  }

  addPersona(nombre:string, apellido:string, edad:number, correo:string, direccion:string){
    if(this.personas == null){
      this.personas = [];
    }
    if(correo != '' && direccion != ''){
      let persona1 = new Persona(nombre, apellido, edad, correo, direccion);
      this.personas.push(persona1);
      this.dataService.guardarPersonas(this.personas);
      
    }else{
      let persona1 = new Persona(nombre, apellido, edad, 'No especifica', 'No especifica');
      this.personas.push(persona1);
      this.dataService.guardarPersonas(this.personas);
    }
  }

  getPersona(){
    return this.dataService.cargarPersonas();
  }

  findPersona(index:number){
    let persona: Persona = this.personas[index];
    return persona;
  }

  modifyPersona(index:number, persona:Persona){
    let refPersona = this.personas[index];
    refPersona.nombre = persona.nombre;
    refPersona.apellido = persona.apellido;
    refPersona.edad = persona.edad;
    this.dataService.modificarPersonas(index, persona);
  }

  deletePersona(id:number){
    this.personas.splice(id,1);
    this.dataService.eliminarPersonas(id);
    
    // se vuelve a guardar el arreglo para regenerar los indices en la BD
    if(this.personas != null){
      this.dataService.guardarPersonas(this.personas);
    }
  }
}
