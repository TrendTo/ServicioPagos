import { Injectable } from '@angular/core';
import { TranslateService } from '@ngx-translate/core';

@Injectable({
  providedIn: 'root'
})
export class DataService {

  public activeLang = 'es'

  constructor(private translate: TranslateService) {
    this.translate.setDefaultLang(this.activeLang)
  }

  public cambiarLenguaje(lang:string){
    this.activeLang=lang
    this.translate.use(this.activeLang)
  }
}
