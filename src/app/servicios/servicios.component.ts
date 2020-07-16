import { Component, OnInit } from '@angular/core';

interface data{
  num:number
  cvv:number
  name:string
}

@Component({
  selector: 'app-servicios',
  templateUrl: './servicios.component.html',
  styleUrls: ['./servicios.component.scss']
})
export class ServiciosComponent implements OnInit {

  tab: string = ''
  imgs:Array<string> = [
    "https://firebasestorage.googleapis.com/v0/b/calidad-project.appspot.com/o/parcial2svg%2Feeq.svg?alt=media&token=f2590c31-a7ef-4c81-b3b6-49c18699da1b",
    "https://firebasestorage.googleapis.com/v0/b/calidad-project.appspot.com/o/parcial2svg%2Fant.svg?alt=media&token=e21693f8-7127-4d15-96e6-0c2fb04e8c74",
    "https://firebasestorage.googleapis.com/v0/b/calidad-project.appspot.com/o/parcial2svg%2Fsri.svg?alt=media&token=896734dd-03ab-45ae-be18-57d7213c80bc",
    "https://firebasestorage.googleapis.com/v0/b/calidad-project.appspot.com/o/parcial2svg%2Fmovistar.svg?alt=media&token=5d5ba933-b82c-421e-a9f9-57762b9bcc50"
  ]
  
  card:Array<string> = [
    "assets/img/chip-tarjeta.png",
    "assets/img/logos/visa.png",
    "assets/img/logos/mastercard.png"
  ]

  servicios:Array<string> = [
    "Empresa Electrica Quito",
    "Agencia Nacional de Transito",
    "Servicio de Rentas Internas",
    "Movistar"
  ]

  num2:number

  valores:Array<data> = new Array<data>();

  constructor() {
    this.valores.push({
      num: 0,
      cvv: 0,
      name: ''
    })
  }

  ngOnInit(): void {
  }

  cambiarTab(p:string){
    this.tab = p
  }
}
