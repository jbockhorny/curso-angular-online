import { LOCALE_ID, NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HomeComponent } from './home/home.component';
import { ContadorComponent } from './shared/components/contador/contador.component';
import { DiretivasNgclassComponent } from './shared/components/diretivas-ngclass/diretivas-ngclass.component';
import { DiretivasComponent } from './shared/components/diretivas/diretivas.component';
import { ExercicioDataBindingComponent } from './shared/components/exercicio-data-binding/exercicio-data-binding.component';
import { FooterComponent } from './shared/components/footer/footer.component';
import { HeaderComponent } from './shared/components/header/header.component';
import { PipesComponent } from './shared/components/pipes/pipes.component';

@NgModule({
  declarations: [
    AppComponent,
    HeaderComponent,
    HomeComponent,
    FooterComponent,
    ExercicioDataBindingComponent,
    ContadorComponent,
    DiretivasComponent,
    DiretivasNgclassComponent,
    PipesComponent,
  ],
  imports: [
    BrowserModule,
    AppRoutingModule
  ],
  providers: [{
    provide: LOCALE_ID,
    useValue: 'pt'
  }],
  bootstrap: [AppComponent]
})
export class AppModule { }
