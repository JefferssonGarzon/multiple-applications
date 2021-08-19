import { Component, Input, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { Persona } from '../../models/persona.model';
import { PersonasService } from '../../services/personas.service';

@Component({
  selector: 'app-detalles-persona',
  templateUrl: './detalles-persona.component.html',
  styleUrls: ['./detalles-persona.component.css']
})
export class DetallesPersonaComponent implements OnInit {


  index:number;
  modoDetalles:number;
  tipo:boolean = false;

  @Input() persona: Persona;
  @Input() indice: number;

  personas: Persona;
  constructor(private personaService: PersonasService, private router:Router, private route:ActivatedRoute) { }

  ngOnInit(): void {
    this.modoDetalles = +this.route.snapshot.queryParams['modoDetalles'];
    console.log(typeof this.modoDetalles);
  
    if(this.modoDetalles != null && this.modoDetalles === 1){
      this.index = this.route.snapshot.params['id'];
      this.personas = this.personaService.personas[this.index];
      this.tipo = true;
    }else{
      this.tipo = false;
    }
    
  }

  volver(){
    // this.personaService.saludar.emit(i);
    this.router.navigate(['/listado']);
  }
}
