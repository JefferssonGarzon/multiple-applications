import { Component, EventEmitter, OnInit, Output } from '@angular/core';
import { DatosExtra } from '../../models/datos-extra-persona.model';

@Component({
  selector: 'app-informacion-extra-persona',
  templateUrl: './informacion-extra-persona.component.html',
  styleUrls: ['./informacion-extra-persona.component.css']
})

export class InformacionExtraPersonaComponent implements OnInit {

  @Output() addDatos = new EventEmitter<DatosExtra>();

  correoInput:string = '';
  direccionInput:string = '';
  constructor() { }

  ngOnInit(): void {
  }

  // agregarExtra(){
  //   let datos = new DatosExtra(this.correoInput, this.direccionInput);
  //   this.addDatos.emit(datos);
  // }
}
