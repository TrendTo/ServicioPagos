import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { TranslateLoader, TranslateModule } from '@ngx-translate/core';
import { TranslateHttpLoader } from '@ngx-translate/http-loader';
import { HttpClient, HttpClientModule } from '@angular/common/http'
import { FacebookModule } from 'ngx-facebook'

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { TranslationComponent } from './translation/translation.component';
import { ServiciosComponent } from './servicios/servicios.component';
import { FormsModule, ReactiveFormsModule } from '@angular/forms'
import { DataService } from './shared/data.service';
import { PagosComponent } from './page/pagos/pagos.component';
import { PageComponent } from './page/page.component';
import { FacturaComponent } from './page/factura/factura.component';
import { ConfirmacionComponent } from './page/confirmacion/confirmacion.component';

@NgModule({
  declarations: [
    AppComponent,
    TranslationComponent,
    ServiciosComponent,
    PagosComponent,
    PageComponent,
    FacturaComponent,
    ConfirmacionComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule,
    ReactiveFormsModule,
    HttpClientModule,
    TranslateModule.forRoot({
      loader: {
        provide: TranslateLoader,
        useFactory: (http: HttpClient) => {
          return new TranslateHttpLoader(http)
        },
        deps:[ HttpClient ]
      },
    }),
    FacebookModule.forRoot()
  ],
  providers: [
    DataService
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
