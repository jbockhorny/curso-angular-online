import { Component } from '@angular/core';

import { MEMES_AGRUPADOS_POR_CATEGORIA } from '.././dados-exercicios';

@Component({
  selector: 'app-diretivas',
  templateUrl: './diretivas.component.html',
  styleUrls: ['./diretivas.component.scss']
})
export class DiretivasComponent {

  MEME = MEMES_AGRUPADOS_POR_CATEGORIA;
  PREFIXO_IMG_URL = 'https://raw.githubusercontent.com/vitorfgsantos/angular-memes-diretivas/master/images';

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
    }

  soma(num1, num2){
    return num1 + num2;
  }
}
