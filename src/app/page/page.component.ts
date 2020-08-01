import { Component, OnInit } from '@angular/core';
import { DataService } from '../shared/data.service';

@Component({
  selector: 'app-page',
  templateUrl: './page.component.html',
  styleUrls: ['./page.component.scss']
})
export class PageComponent implements OnInit {

  imglogo:string = "https://firebasestorage.googleapis.com/v0/b/calidad-project.appspot.com/o/parcial2svg%2Flogo.svg?alt=media&token=41bf363a-3198-4e3c-aa2f-537da09e6e7f"

  constructor(private dataService:DataService) { }

  ngOnInit(): void {
  }

  cambiar(idi:string){
    this.dataService.cambiarLenguaje(idi);
  }

}
