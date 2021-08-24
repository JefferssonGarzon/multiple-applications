import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { CalculadoraComponent } from './calculadora/calculadora.component';
import { LoginGuard } from './guards/login.guard';
import { LandingComponent } from './landing/landing.component';
import { DetallesPersonaComponent } from './listado-personas/detalles-persona/detalles-persona.component';
import { ListadoPersonasComponent } from './listado-personas/listado-personas.component';
import { ModifcarPersonaComponent } from './listado-personas/modifcar-persona/modifcar-persona.component';
import { LoginComponent } from './login/login.component';
import { PageNotFoundComponent } from './page-not-found/page-not-found.component';
import { PresupuestoComponent } from './presupuesto/presupuesto.component';

const routes: Routes = [
  {
    path: '',
    component: LandingComponent
  },
  {
    path: 'listado',
    canActivate: [LoginGuard],
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
    path: 'login',
    component: LoginComponent
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
