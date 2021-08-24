import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Persona } from '../../models/persona.model';
import { LoginService } from './login.service';

@Injectable({
  providedIn: 'root'
})
export class DataService {

  constructor(private httpClient:HttpClient, private loginService: LoginService) { }


  // Cargar personas
  cargarPersonas(){
    const token = this.loginService.getToken();
    return this.httpClient.get('https://listado-personas-3e56b-default-rtdb.firebaseio.com/datos.json?auth=' + token);
  }

  // Guardar personas
  guardarPersonas(persona: Persona[]){
    const token = this.loginService.getToken();
    this.httpClient.put('https://listado-personas-3e56b-default-rtdb.firebaseio.com/datos.json?auth=' + token, persona)
    .subscribe(
      response => console.log('resultado guardar personas:' + response),
      error => console.log('error al guardar personas:' + error)
    )
  }

  // Modificar personas
  modificarPersonas(index:number, persona: Persona){
    const token = this.loginService.getToken();
    let url:string;
    url = `https://listado-personas-3e56b-default-rtdb.firebaseio.com/datos/${index}.json?auth=${token}`;
    this.httpClient.put(url, persona).subscribe(
      response => console.log('response modify: ' + response),
      error => console.log('Error status modify: ' + error)
    )
  }

  // Eliminar personas
  eliminarPersonas(index:number){
    const token = this.loginService.getToken();
    let url:string;
    url = `https://listado-personas-3e56b-default-rtdb.firebaseio.com/datos/${index}.json?auth=${token}`;
    this.httpClient.delete(url).subscribe(
      response => console.log('response delete: ' + response),
      error => console.log('Error status delete: ' + error)
    )
  }
}
