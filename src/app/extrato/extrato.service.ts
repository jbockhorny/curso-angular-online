import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { environment } from 'src/environments/environment';

import { Transacao } from './extrato.interfaces';

// import { throwError, timer } from 'rxjs';
// import { mergeMap } from 'rxjs/operators';
@Injectable({
  providedIn: 'root'
})
export class ExtratoService {

  API_URL = environment.API_URL;

  constructor(
    private http: HttpClient,
  ) {}

  getTransacoes(page: number){
  //  return this.http.get<Transacao[]>(this.API_URL + '/transacoes');

  return this.http.get<Transacao[]>(`${this.API_URL}/transacoes`, {
    params: {
    _page: String(page),
  }});

 // Finge um erro na API com tempo
  // const error =  throwError('Erro genérico');
  // return timer(3000)
  // .pipe(mergeMap(() => error));

    //  finge um erro na API
    //  return throwError(new Error('Erro genérico'));

    // [{
    //   id: 1,
    //   data: '2020-02-04T13:00:24.744Z',
    //   descricao: 'Salário',
    //   valor: 3500,
    //   categoria: 'Salário',
    // }, {
    //   id: 2,
    //   data: '2020-02-05T14:21:24.744Z',
    //   descricao: 'Sapato verde',
    //   valor: -235.99,
    //   categoria: 'Vestuário',
    // }, {
    //   id: 3,
    //   data: '2020-01-29T15:00:24.744Z',
    //   descricao: 'Notebook',
    //   valor: -10231.99,
    //   categoria: 'Eletrônicos',
    // }];
  }
}
