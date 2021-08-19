import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { CalculadoraComponent } from './calculadora/calculadora.component';
import { LandingComponent } from './landing/landing.component';
import { DetallesPersonaComponent } from './listado-personas/detalles-persona/detalles-persona.component';
import { ListadoPersonasComponent } from './listado-personas/listado-personas.component';
import { ModifcarPersonaComponent } from './listado-personas/modifcar-persona/modifcar-persona.component';
import { PageNotFoundComponent } from './page-not-found/page-not-found.component';
import { PresupuestoComponent } from './presupuesto/presupuesto.component';

const routes: Routes = [
  {
    path: '',
    component: LandingComponent
  },
  {
    path: 'listado',
    component: ListadoPersonasComponent,
    children: [
      {
        path: 'detalles/:id',
        component: DetallesPersonaComponent,
      },
      {
        path: 'modificar/:id',
        component: ModifcarPersonaComponent
      }
    ]
  },
  {
    path: 'presupuesto',
    component: PresupuestoComponent
  },
  {
    path: 'calculadora',
    component: CalculadoraComponent
  },
  {
    path: '**',
    component: PageNotFoundComponent
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
