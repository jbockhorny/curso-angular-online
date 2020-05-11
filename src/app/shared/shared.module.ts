import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { RouterModule } from '@angular/router';

import { ContadorComponent } from './components/contador/contador.component';
import { DiretivasNgclassComponent } from './components/diretivas-ngclass/diretivas-ngclass.component';
import { DiretivasComponent } from './components/diretivas/diretivas.component';
import { ExercicioDataBindingComponent } from './components/exercicio-data-binding/exercicio-data-binding.component';
import { FooterComponent } from './components/footer/footer.component';
import { HeaderComponent } from './components/header/header.component';
import { PipesComponent } from './components/pipes/pipes.component';

@NgModule({
  declarations: [
    HeaderComponent,
    FooterComponent,
    ExercicioDataBindingComponent,
    ContadorComponent,
    DiretivasComponent,
    DiretivasNgclassComponent,
    PipesComponent,
  ],
  imports: [
    CommonModule,
    RouterModule,
  ],
  exports: [
    HeaderComponent,
    FooterComponent,
    ExercicioDataBindingComponent,
    ContadorComponent,
    DiretivasComponent,
    DiretivasNgclassComponent,
    PipesComponent,
  ],
})
export class SharedModule { }
