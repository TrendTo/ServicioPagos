import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-factura',
  templateUrl: './factura.component.html',
  styleUrls: ['./factura.component.scss']
})
export class FacturaComponent implements OnInit {

  mesesPagos:Array<number> = [3,6,9,12]
  valor:number =1123123
  fecha:Date = new Date()
  imglogo:string = "https://firebasestorage.googleapis.com/v0/b/calidad-project.appspot.com/o/parcial2svg%2Flogo.svg?alt=media&token=41bf363a-3198-4e3c-aa2f-537da09e6e7f"
  imgs:Array<string> = [
    "https://firebasestorage.googleapis.com/v0/b/calidad-project.appspot.com/o/parcial2svg%2Feeq.svg?alt=media&token=f2590c31-a7ef-4c81-b3b6-49c18699da1b",
    "https://firebasestorage.googleapis.com/v0/b/calidad-project.appspot.com/o/parcial2svg%2Fant.svg?alt=media&token=e21693f8-7127-4d15-96e6-0c2fb04e8c74",
    "https://firebasestorage.googleapis.com/v0/b/calidad-project.appspot.com/o/parcial2svg%2Fsri.svg?alt=media&token=896734dd-03ab-45ae-be18-57d7213c80bc",
    "https://firebasestorage.googleapis.com/v0/b/calidad-project.appspot.com/o/parcial2svg%2Fmovistar.svg?alt=media&token=5d5ba933-b82c-421e-a9f9-57762b9bcc50"
  ]

  constructor() { }

  ngOnInit(): void {
  }

}
