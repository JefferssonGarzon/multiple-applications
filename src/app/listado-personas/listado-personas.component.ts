import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { DatosExtra } from '../models/datos-extra-persona.model';
import { Persona } from '../models/persona.model';
import { PersonasService } from '../services/listado-personas/personas.service';

import firebase from 'firebase';
import { LoginService } from '../services/listado-personas/login.service';

@Component({
  selector: 'app-listado-personas',
  templateUrl: './listado-personas.component.html',
  styleUrls: ['./listado-personas.component.css']
})
export class ListadoPersonasComponent implements OnInit {

  titulo = 'Listado de personas';

  nombreInput:string = '';
  apellidoInput:string = '';
  edadInput:number;
  correoInput:string = '';
  direccionInput:string = '';

  personas: Persona[] = [];

  constructor(private personaService:PersonasService, private loginService: LoginService  ,private router:Router) {
    // this.personaService.saludar.subscribe(
    //   (indice:number) => {
    //     alert('El indice es: '+indice);
    //   }
    // );
   }

  ngOnInit(): void {
    this.personaService.getPersona().subscribe(
      (personas: Persona[]) => {
        this.personas = personas;
        console.log(this.personas);
        this.personaService.setPersonas(personas);
      }
    )
  }

  personaAgregada(){
    this.personaService.addPersona(this.nombreInput, this.apellidoInput, this.edadInput, this.correoInput, this.direccionInput);
    this.nombreInput = '';
    this.apellidoInput = '';
    this.edadInput = null;
    this.correoInput = '';
    this.direccionInput = '';
  }

  eliminarPersona(i:number){
    this.personaService.deletePersona(i);
  }

  salir(){
    this.loginService.salir();
  }

}
