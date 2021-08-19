import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Persona } from '../models/persona.model';

@Injectable({
  providedIn: 'root'
})
export class DataService {

  constructor(private httpClient:HttpClient) { }


  // Cargar personas
  cargarPersonas(){
    return this.httpClient.get('https://listado-personas-3e56b-default-rtdb.firebaseio.com/datos.json');
  }

  // Guardar personas
  guardarPersonas(persona: Persona[]){
    this.httpClient.put('https://listado-personas-3e56b-default-rtdb.firebaseio.com/datos.json', persona)
    .subscribe(
      response => console.log('resultado guardar personas:' + response),
      error => console.log('error al guardar personas:' + error)
    )
  }

  // Modificar personas
  modificarPersonas(index:number, persona: Persona){
    let url:string;
    url = `https://listado-personas-3e56b-default-rtdb.firebaseio.com/datos/${index}.json`
    this.httpClient.put(url, persona).subscribe(
      response => console.log('response modify: ' + response),
      error => console.log('Error status modify: ' + error)
    )
  }

  // Eliminar personas
  eliminarPersonas(index:number){
    let url:string;
    url = `https://listado-personas-3e56b-default-rtdb.firebaseio.com/datos/${index}.json`
    this.httpClient.delete(url).subscribe(
      response => console.log('response delete: ' + response),
      error => console.log('Error status delete: ' + error)
    )
  }
}
