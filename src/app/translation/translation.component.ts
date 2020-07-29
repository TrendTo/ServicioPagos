import { Component, OnInit } from '@angular/core';
import { TranslateService } from '@ngx-translate/core';

@Component({
  selector: 'app-translation',
  templateUrl: './translation.component.html',
  styleUrls: ['./translation.component.scss']
})
export class TranslationComponent implements OnInit {

  public activeLang = 'es'

  constructor(private translate: TranslateService) {
    this.translate.setDefaultLang(this.activeLang)
  }

  ngOnInit(): void {

  }

  public cambiarLenguaje(lang:string){
    this.activeLang=lang
    this.translate.use(this.activeLang)
  }

}
