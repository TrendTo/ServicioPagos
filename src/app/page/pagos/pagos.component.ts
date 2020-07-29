import { Component, OnInit } from '@angular/core';
import { element } from 'protractor';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';

@Component({
  selector: 'app-pagos',
  templateUrl: './pagos.component.html',
  styleUrls: ['./pagos.component.scss']
})
export class PagosComponent implements OnInit {

  formulario:boolean = false
  tarjeta:boolean = false
  meses:Array<number> = []
  anios:Array<number> = []
  anioActual:number = new Date().getFullYear()
  numT:string
  formTest:FormGroup

  constructor(private fb:FormBuilder) { }

  ngOnInit(): void {
    for (let i = 1; i <= 12; i++) {
      this.meses.push(i)
    }
    for (let i = this.anioActual; i < this.anioActual+8; i++) {
      this.anios.push(i)
    }
    this.TestVal()
  }

  btnAbrirFormulario(){
    this.formulario = !this.formulario;
  }

  VistaTarjeta(){
    this.tarjeta = !this.tarjeta
  }

  VistaSet(op:boolean){
    this.tarjeta = op
  }

  TestVal(){
    this.formTest = this.fb.group({
      numeroT:['', Validators.pattern(/^[1-9]\d{6,10}$/)]
    })
  }

  NumTarjeta(ev: KeyboardEvent){
    if (ev.keyCode>=48&&ev.keyCode<=57) {
      console.log(ev)
    }else{
    }
    // formulario.inputNumero.value = valorInput
    // // Eliminamos espacios en blanco
    // .replace(/\s/g, '')
    // // Eliminar las letras
    // .replace(/\D/g, '')
    // // Ponemos espacio cada cuatro numeros
    // .replace(/([0-9]{4})/g, '$1 ')
    // // Elimina el ultimo espaciado
    // .trim();
    
    // numeroTarjeta.textContent = valorInput;
  
    // if(valorInput == ''){
    //   numeroTarjeta.textContent = '#### #### #### ####';
      
    //   logoMarca.innerHTML = '';
    // }
  
    // if(valorInput[0] == 4){
    //   logoMarca.innerHTML = '';
    //   const imagen = document.createElement('img');
    //   imagen.src = 'img/logos/visa.png';
    //   logoMarca.appendChild(imagen);
    // } else if(valorInput[0] == 5){
    //   logoMarca.innerHTML = '';
    //   const imagen = document.createElement('img');
    //   imagen.src = 'img/logos/mastercard.png';
    //   logoMarca.appendChild(imagen);
    // }
    
  }

}
