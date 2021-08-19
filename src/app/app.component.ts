import { Component } from '@angular/core';
import { Egreso } from './models/presupuesto/egreso.model';
import { Ingreso } from './models/presupuesto/ingreso.model';
import { EgresoService } from './services/presupuesto/egreso.service';
import { IngresoService } from './services/presupuesto/ingreso.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {

  constructor(){ }

}
