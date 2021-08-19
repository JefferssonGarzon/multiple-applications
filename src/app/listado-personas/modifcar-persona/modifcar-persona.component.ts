import { NumberSymbol } from '@angular/common';
import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { PersonasService } from 'src/app/services/personas.service';


@Component({
  selector: 'app-modifcar-persona',
  templateUrl: './modifcar-persona.component.html',
  styleUrls: ['./modifcar-persona.component.css']
})
export class ModifcarPersonaComponent implements OnInit {

  index:number;
  nombreInput:string = '';
  apellidoInput:string = '';
  edadInput:number;

  constructor(private route: ActivatedRoute, private router: Router, private personaServicio: PersonasService) { }

  ngOnInit(): void {
    this.index = this.route.snapshot.params['id'];
  }

  modificar(){
    if(this.index){
      let persona = this.personaServicio.findPersona(this.index);
      persona.nombre = this.nombreInput;
      persona.apellido = this.apellidoInput;
      persona.edad = this.edadInput;
      this.personaServicio.modifyPersona(this.index, persona);
      this.router.navigate(['listado']);
    }else{
      console.log('Ocurrio algo inesperado');
    }
  }

}
