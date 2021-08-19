import { Injectable } from '@angular/core';
import { Egreso } from 'src/app/models/presupuesto/egreso.model';

@Injectable({
  providedIn: 'root'
})
export class EgresoService {


  egresos: Egreso[] = [
    new Egreso('Renta casa', 500000),
    new Egreso('Ropa', 400000)
  ];
  constructor() { }

  eliminar(egreso:Egreso){
    const indice:number = this.egresos.indexOf(egreso);
    this.egresos.splice(indice, 1);
  }
}
