import { Component, OnInit } from '@angular/core';
import { Egreso } from '../../models/presupuesto/egreso.model';
import { Ingreso } from '../../models/presupuesto/ingreso.model';
import { EgresoService } from '../../services/presupuesto/egreso.service';
import { IngresoService } from '../../services/presupuesto/ingreso.service';

@Component({
  selector: 'app-formulario',
  templateUrl: './formulario.component.html',
  styleUrls: ['./formulario.component.css']
})
export class FormularioComponent implements OnInit {


  tipo:string = 'ingreso';
  descripcionInput:string;
  valorInput:number;

  constructor(private ingresoServicio: IngresoService, private egresoServicio: EgresoService) { }

  ngOnInit(): void {
  }
  
  tipoOperacion(evento){
    this.tipo = evento.target.value;
  }

  agregarValor(){
    if(this.tipo === 'ingreso')
      this.ingresoServicio.ingresos.push(new Ingreso(this.descripcionInput, this.valorInput));
    else
      this.egresoServicio.egresos.push(new Egreso(this.descripcionInput, this.valorInput));
  }

}
