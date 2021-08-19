import { Injectable } from '@angular/core';
import { Ingreso } from 'src/app/models/presupuesto/ingreso.model';

@Injectable({
  providedIn: 'root'
})
export class IngresoService {

  ingresos:Ingreso[] = [
    new Ingreso('Salario', 1300000),
    new Ingreso('Venta moto', 2000000)
  ];

  constructor() { }

  eliminarIngreso(ingreso:Ingreso){
    const indice:number = this.ingresos.indexOf(ingreso);
    this.ingresos.splice(indice, 1);
  }
}
