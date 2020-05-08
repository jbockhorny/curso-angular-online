import { Component } from '@angular/core';

@Component({
  selector: 'app-diretivas',
  templateUrl: './diretivas.component.html',
  styleUrls: ['./diretivas.component.scss']
})
export class DiretivasComponent {

  listaFrutas = [
    'maça',
    'laranja',
    'mamão',
    'pera',
  ];

  carrosLista = [{
    placa: 'JND-7432',
    cor: 'Preto',
  }, {
    placa: 'HID-1586',
    cor: 'Azul',
  }, {
    placa: 'GRC-1828',
    cor: 'Branco',
  }, {
    placa: 'WER-7896',
    cor: 'Vermelho',
  }];

  deveExibir = false;

  trocarValor(){
    this.deveExibir = !this.deveExibir;
    console.log(typeof this.carrosLista);
  }

  soma(num1, num2){
    return num1 + num2;
  }
}
