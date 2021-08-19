import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class LoggingServiceService {

  constructor() { }

  enviaMensajeConsola(mensaje:string){
    console.log(mensaje);
  }
}
