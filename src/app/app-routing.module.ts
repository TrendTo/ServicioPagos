import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { TranslationComponent } from './translation/translation.component';
import { ServiciosComponent } from './servicios/servicios.component';
import { PagosComponent } from './page/pagos/pagos.component';
import { FacturaComponent } from './page/factura/factura.component';
import { PageComponent } from './page/page.component';


const routes: Routes = [
  {path: 'pay', component: PagosComponent},
  {path: 'servicio/:idio', component: ServiciosComponent},
  {path: 'fact', component: FacturaComponent},
  {path: 'page', component: PageComponent},
  {path: '', component: TranslationComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
