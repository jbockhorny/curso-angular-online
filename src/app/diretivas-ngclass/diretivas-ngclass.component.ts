import { Component, ViewEncapsulation } from '@angular/core';

@Component({
  selector: 'app-diretivas-ngclass',
  templateUrl: './diretivas-ngclass.component.html',
  styleUrls: ['./diretivas-ngclass.component.scss'],
  encapsulation: ViewEncapsulation.Emulated,
  // styles: [`
  // .verde{
  //   color: green;
  // }
  // `]
})
export class DiretivasNgclassComponent {

deveSerVerde = false;

tornarVerde(){
  this.deveSerVerde = true;
}
}
