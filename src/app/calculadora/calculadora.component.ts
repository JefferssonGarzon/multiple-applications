import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-calculadora',
  templateUrl: './calculadora.component.html',
  styleUrls: ['./calculadora.component.css']
})
export class CalculadoraComponent implements OnInit {

  opA:number = 0;
  opB:number = 0;
  operacion:number = 0;
  total:number = 0;
  resultado:string = 'n ( + , - , * , / ) n';
  
  constructor() { }

  ngOnInit(): void {
  }

  sumar = (a:number,b:number):number => a + b;
  restar = (a,b) => a - b;
  multi = (a,b) => a * b;
  divi = (a,b) => a / b;
  pote = (a,b) => a ** b;

  mostrar(){

    switch (Number(this.operacion)) {
      case 1:
        this.total = this.sumar(this.opA, this.opB);
        this.resultado = `${this.opA} + ${this.opB} = ${this.total}`;
        break;
      
      case 2:
        this.total = this.restar(this.opA, this.opB);
        this.resultado = `${this.opA} - ${this.opB} = ${this.total}`;
        break;

      case 3:
        this.total = this.multi(this.opA, this.opB);
        this.resultado = `${this.opA} * ${this.opB} = ${this.total}`;
        break;

      case 4:
        this.total = this.divi(this.opA, this.opB);
        this.resultado = `${this.opA} / ${this.opB} = ${this.total}`;
        break;

      case 5:
        this.total = this.pote(this.opA, this.opB);
        this.resultado = `${this.opA} ^ ${this.opB} = ${this.total}`;
        break;

      default:
        console.log('Ocurrio algo inesperado');
        break;
    }
  }

  limpiar(){
    this.resultado = 'n ( + , - , * , / ) n';
  }

}
