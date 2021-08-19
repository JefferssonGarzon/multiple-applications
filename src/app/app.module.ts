import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { BrowserModule } from '@angular/platform-browser';

import {MatIconModule} from '@angular/material/icon';
import {MatGridListModule} from '@angular/material/grid-list';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { CalculadoraComponent } from './calculadora/calculadora.component';
import { ListadoPersonasComponent } from './listado-personas/listado-personas.component';
import { DetallesPersonaComponent } from './listado-personas/detalles-persona/detalles-persona.component';
import { InformacionExtraPersonaComponent } from './listado-personas/informacion-extra-persona/informacion-extra-persona.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { LoggingServiceService } from './services/logging-service.service';
import { PersonasService } from './services/personas.service';
import { CabeceroComponent } from './presupuesto/cabecero/cabecero.component';
import { IngresoComponent } from './presupuesto/ingreso/ingreso.component';
import { EgresoComponent } from './presupuesto/egreso/egreso.component';
import { FormularioComponent } from './presupuesto/formulario/formulario.component';
import { IngresoService } from './services/presupuesto/ingreso.service';
import { EgresoService } from './services/presupuesto/egreso.service';
import { ModifcarPersonaComponent } from './listado-personas/modifcar-persona/modifcar-persona.component';
import { PageNotFoundComponent } from './page-not-found/page-not-found.component';
import { DataService } from './services/data.service';
import { HttpClientModule } from '@angular/common/http';
import { PresupuestoComponent } from './presupuesto/presupuesto.component';
import { LandingComponent } from './landing/landing.component';

@NgModule({
  declarations: [
    AppComponent,
    CalculadoraComponent,
    ListadoPersonasComponent,
    DetallesPersonaComponent,
    InformacionExtraPersonaComponent,
    CabeceroComponent,
    IngresoComponent,
    EgresoComponent,
    FormularioComponent,
    ModifcarPersonaComponent,
    PageNotFoundComponent,
    PresupuestoComponent,
    LandingComponent,
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule,
    BrowserAnimationsModule,
    MatIconModule,
    HttpClientModule,
    MatGridListModule,
  ],
  providers: [LoggingServiceService, 
    PersonasService,
    IngresoService,
    EgresoService,
    DataService],
  bootstrap: [AppComponent]
})
export class AppModule { }
