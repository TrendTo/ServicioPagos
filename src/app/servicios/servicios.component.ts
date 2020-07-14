import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-servicios',
  templateUrl: './servicios.component.html',
  styleUrls: ['./servicios.component.scss']
})
export class ServiciosComponent implements OnInit {

  tab: string = ''

  constructor() { }

  ngOnInit(): void {
  }

  cambiarTab(p:string){
    this.tab = p
  }
}
