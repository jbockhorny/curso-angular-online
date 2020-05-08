import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {

  pudim = 'Carro';
  cor = 'green';
  titulo = 'Seja bem-vinda!';
  showHeader = true;

  constructor(){ }

  eventoRecebido($event){
    console.log('App component: EVENTO RECEBIDO!', $event);
  }

}

