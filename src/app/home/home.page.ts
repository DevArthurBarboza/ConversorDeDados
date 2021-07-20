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
  

  calculaB(valor){
    this.valorB = valor
    this.valorKB = this.valorB / 1024
    this.valorMB = this.valorB / (1024 **2) 
    this.valorGB = this.valorB / (1024 **3)
  }

  calculaKB(valor){
    this.valorKB = valor
    this.valorB = this.valorKB * 1024
    this.valorMB = this.valorKB / 1024 
    this.valorGB = this.valorKB / (1024 **2)
  }

  calculaMB(valor){
    this.valorMB = valor
    this.valorKB = this.valorMB * 1024
    this.valorB = this.valorMB * (1024 **2) 
    this.valorGB = this.valorMB / 1024
  }

  calculaGB(valor){
    this.valorGB = valor
    this.valorKB = this.valorGB * (1024**2)
    this.valorMB = this.valorGB * 1024  
    this.valorB = this.valorGB * (1024 **3)
  }

  constructor() {}

}
