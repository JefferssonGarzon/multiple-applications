import { Component, OnInit } from '@angular/core';
import { Egreso } from '../models/presupuesto/egreso.model';
import { Ingreso } from '../models/presupuesto/ingreso.model';
import { EgresoService } from '../services/presupuesto/egreso.service';
import { IngresoService } from '../services/presupuesto/ingreso.service';

@Component({
  selector: 'app-presupuesto',
  templateUrl: './presupuesto.component.html',
  styleUrls: ['./presupuesto.component.css']
})
export class PresupuestoComponent implements OnInit {


  // PRESUPUESTO
  ingresos:Ingreso[] = [];
  egresos:Egreso[] = [];

  constructor(private ingresoServicio: IngresoService, private egresoServicio: EgresoService) {
    this.ingresos = ingresoServicio.ingresos;
    this.egresos = egresoServicio.egresos;
   }

  ngOnInit(): void {
  }

  // PARA APP PRESUPUESTO 

  getIngresoTotal(){
    let ingresoTotal:number = 0;
    this.ingresos.forEach(ingreso => {
      ingresoTotal += ingreso.valor;
    })
    return ingresoTotal;
  }

  getEgresoTotal(){
    let egresoTotal:number = 0;
    this.egresos.forEach(egreso => {
      egresoTotal += egreso.valor;
    })
    return egresoTotal;
  }

  getPorcentajeTotal(){
    return this.getEgresoTotal() / this.getIngresoTotal();
  }

  getPresupuestoTotal(){
    return this.getIngresoTotal() - this.getEgresoTotal();
  }
}
