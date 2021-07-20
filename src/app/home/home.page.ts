import { Component } from '@angular/core';
import * as internal from 'stream';

@Component({
  selector: 'app-home',
  templateUrl: 'home.page.html',
  styleUrls: ['home.page.scss'],
})
export class HomePage {

  valorB : number;  
  valorKB : number; 
  valorMB : number;
  valorGB : number; 
  
  valorSaidaB : number;
  valorSaidaKB : number;
  valorSaidaMB : number;
  valorSaidaGB : number;


  calculaB(valor){
    this.valorB = valor
    this.valorSaidaKB = this.valorB / 1024
    this.valorSaidaMB = this.valorB / (1024 **2) 
    this.valorSaidaGB = this.valorB / (1024 **3)
  }

  calculaKB(valor){
    this.valorKB = valor
    this.valorSaidaB = this.valorKB * 1024
    this.valorSaidaMB = this.valorKB / 1024 
    this.valorSaidaGB = this.valorKB / (1024 **2)
  }

  calculaMB(valor){
    this.valorMB = valor
    this.valorSaidaKB = this.valorMB * 1024
    this.valorSaidaB = this.valorMB * (1024 **2) 
    this.valorSaidaGB = this.valorMB / 1024
  }

  calculaGB(valor){
    this.valorGB = valor
    this.valorSaidaKB = this.valorGB * (1024**2)
    this.valorSaidaMB = this.valorGB * 1024  
    this.valorSaidaB = this.valorGB * (1024 **3)
  }

  constructor() {}

}
