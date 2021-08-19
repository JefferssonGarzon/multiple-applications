import { Component, Input, OnInit } from '@angular/core';
import { Egreso } from '../../models/presupuesto/egreso.model';
import { EgresoService } from '../../services/presupuesto/egreso.service';

@Component({
  selector: 'app-egreso',
  templateUrl: './egreso.component.html',
  styleUrls: ['./egreso.component.css']
})
export class EgresoComponent implements OnInit {

  @Input() ingresoTotal:number;

  egresos:Egreso[] = [];
  constructor(private egresoServicio: EgresoService) { }

  ngOnInit(): void {
    this.egresos = this.egresoServicio.egresos;
  }

  eliminarEgreso(egreso:Egreso){
    this.egresoServicio.eliminar(egreso);
  }

  calcularPorcentaje(egreso:Egreso){
    return egreso.valor / this.ingresoTotal;
  }
}
