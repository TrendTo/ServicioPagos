import { Component, OnInit } from '@angular/core';
import { TranslateService } from '@ngx-translate/core';
import { ActivatedRoute } from '@angular/router';
import { FormBuilder, Validators, FormGroup } from '@angular/forms';

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

  num2:number
  sms:string
  formularioCreado: FormGroup

  valores:Array<data> = new Array<data>();
  
  idioma: string = this.ruta.snapshot.params.idio

  constructor(
    private formBuilder:FormBuilder,
    private translate: TranslateService,
    private ruta: ActivatedRoute
    ) {
      this.translate.use(this.idioma)
      this.valores.push({
      num: 0,
      cvv: 0,
      name: ''
    })
  }

  ngOnInit(): void {
    this.crearFormulario()
  }

  cambiarTab(p:string){
    this.tab = p
  }

  public cambiarLenguaje(lang:string){
    this.idioma=lang
    this.translate.use(this.idioma)
  }

  crearFormulario(){
    this.formularioCreado = this.formBuilder.group({
      cedula: ['', Validators.compose([
        Validators.minLength(10), Validators.maxLength(13), Validators.pattern('[0-9]*')
      ])],
      contrato: ['', Validators.compose([
        Validators.minLength(12), Validators.maxLength(12)
      ])]
    })
  }

  agregar(){
    console.log(this.formularioCreado.value)
  }

  borrar(){
    this.formularioCreado.reset()
  }

  validarDocumento( numero:string ) {
    console.log(numero);
    var suma = 0;
    var residuo = 0;
    var pri = false;
    var pub = false;
    var nat = false;
    var modulo = 11;
    var p1,p2,p3,p4,p5,p6,p7,p8,p9;
    var digitoVerificador:number
    
    /* Verifico que el campo no contenga letras */
    // var ok=1;
    // for (let i=0; i<numeroProvincias;i++){
    // alert('El código de la provincia (dos primeros dígitos) es inválido');
    // return false;
    // }
    
    /* Aqui almacenamos los digitos de la cedula en variables. */
    const d1:number = parseInt(numero.substr(0,1));
    const d2:number = parseInt(numero.substr(1,1));
    const d3:number = parseInt(numero.substr(2,1));
    const d4:number = parseInt(numero.substr(3,1));
    const d5:number = parseInt(numero.substr(4,1));
    const d6:number = parseInt(numero.substr(5,1));
    const d7:number = parseInt(numero.substr(6,1));
    const d8:number = parseInt(numero.substr(7,1));
    const d9:number = parseInt(numero.substr(8,1));
    const d10:number = parseInt(numero.substr(9,1));
    /* El tercer digito es: */
    /* 9 para sociedades privadas y extranjeros */
    /* 6 para sociedades publicas */
    /* menor que 6 (0,1,2,3,4,5) para personas naturales */
    
    if (d1>2 && d2>4){
      console.log('entro 1-2');
      alert('El código de la provincia (dos primeros dígitos) es inválido');
      return false;
    }

    if (d3==7 || d3==8){
      console.log('entro 3');
      alert('El tercer dígito ingresado es inválido');
      return false;
    }
    
    /* Solo para personas naturales (modulo 10) */
    if (d3 < 6){
      console.log('entro normal');
      nat = true;
      p1 = d1 * 2; if (p1 >= 10) p1 -= 9;
      p2 = d2 * 1; if (p2 >= 10) p2 -= 9;
      p3 = d3 * 2; if (p3 >= 10) p3 -= 9;
      p4 = d4 * 1; if (p4 >= 10) p4 -= 9;
      p5 = d5 * 2; if (p5 >= 10) p5 -= 9;
      p6 = d6 * 1; if (p6 >= 10) p6 -= 9;
      p7 = d7 * 2; if (p7 >= 10) p7 -= 9;
      p8 = d8 * 1; if (p8 >= 10) p8 -= 9;
      p9 = d9 * 2; if (p9 >= 10) p9 -= 9;
      modulo = 10;
    }
    
    /* Solo para sociedades publicas (modulo 11) */
    /* Aqui el digito verficador esta en la posicion 9, en las otras 2 en la pos. 10 */
    else if(d3 == 6){
      console.log('entro 6');
      pub = true;
      p1 = d1 * 3;
      p2 = d2 * 2;
      p3 = d3 * 7;
      p4 = d4 * 6;
      p5 = d5 * 5;
      p6 = d6 * 4;
      p7 = d7 * 3;
      p8 = d8 * 2;
      p9 = 0;
    }
    
    /* Solo para entidades privadas (modulo 11) */
    else if(d3 == 9) {
      console.log('entro 9');
      pri = true;
      p1 = d1 * 4;
      p2 = d2 * 3;
      p3 = d3 * 2;
      p4 = d4 * 7;
      p5 = d5 * 6;
      p6 = d6 * 5;
      p7 = d7 * 4;
      p8 = d8 * 3;
      p9 = d9 * 2;
    }
    
    suma = p1 + p2 + p3 + p4 + p5 + p6 + p7 + p8 + p9;
    residuo = suma % modulo;
    
    /* Si residuo=0, dig.ver.=0, caso contrario 10 - residuo*/
    if (residuo==0) {
      digitoVerificador=0
    } else {
      digitoVerificador=modulo - residuo
    }
    // digitoVerificador = residuo==0 ? 0: modulo - residuo;
    
    /* ahora comparamos el elemento de la posicion 10 con el dig. ver.*/
    if (pub==true){
      if (digitoVerificador != d9){
        alert('El ruc de la empresa del sector público es incorrecto.');
        return false;
      }
      /* El ruc de las empresas del sector publico terminan con 0001*/
      else if ( numero.substr(9,4) != '0001' ){
        alert('El ruc de la empresa del sector público debe terminar con 0001');
        return false;
      }
    }
    else if(pri == true){
      if (digitoVerificador != d10){
        alert('El ruc de la empresa del sector privado es incorrecto.');
        return false;
      }
      else if ( numero.substr(10,3) != '001' ){
        alert('El ruc de la empresa del sector privado debe terminar con 001');
        return false;
      }
    }
    else if(nat == true){
      if (digitoVerificador != d10){
        alert('El número de cédula de la persona natural es incorrecto.');
        console.log('no vale 2');
        return false;
      }
      else if (numero.length >10 && numero.substr(10,3) != '001' ){
        alert('El ruc de la persona natural debe terminar con 001');
        console.log('no vale');
        return false;
      }
    }
    console.log('si vale');
    }
}
