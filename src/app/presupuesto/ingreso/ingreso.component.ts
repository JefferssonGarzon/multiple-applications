import { Component, OnInit } from '@angular/core';
import { Ingreso } from '../../models/presupuesto/ingreso.model';
import { IngresoService } from '../../services/presupuesto/ingreso.service';

@Component({
  selector: 'app-ingreso',
  templateUrl: './ingreso.component.html',
  styleUrls: ['./ingreso.component.css']
})
export class IngresoComponent implements OnInit {


  ingresos: Ingreso[] = [];
  constructor(private ingresoServicio: IngresoService) { }

  ngOnInit(): void {
    this.ingresos = this.ingresoServicio.ingresos;
  }

  eliminarRegistro(registro:Ingreso){
    this.ingresoServicio.eliminarIngreso(registro);
  }

}
