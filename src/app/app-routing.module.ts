import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { TranslationComponent } from './translation/translation.component';
import { ServiciosComponent } from './servicios/servicios.component';


const routes: Routes = [
  {path: 'servicio', component: ServiciosComponent},
  {path: '**', component: TranslationComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
