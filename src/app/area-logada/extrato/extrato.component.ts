import { Component, OnInit } from '@angular/core';
import { finalize, take } from 'rxjs/operators';

import { Transacao } from './extrato.interfaces';
import { ExtratoService } from './extrato.service';

@Component({
  selector: 'app-extrato',
  templateUrl: './extrato.component.html',
  styleUrls: ['./extrato.component.scss']
})
export class ExtratoComponent implements OnInit {

  // transacoes: Array<Transacao>;
  transacoes: Transacao[];
  pagina = 1;

  estaCarregando: boolean;
  erroNoCarregamento: boolean;

  constructor(
    private extratoService: ExtratoService
  ) { }

  ngOnInit() {
    this.carregarExtrato();
  }

  carregarExtrato() {
    this.estaCarregando = true;
    this.erroNoCarregamento = false;

    this.extratoService.getTransacoes(this.pagina)
    .pipe(
      //Take vai ouvir somente uma vez e depois irá fechar.
      take(1),
      finalize(() => this.estaCarregando = false)
    )
      .subscribe(
        response => this.onSucesso(response),
        error => this.onError(error),

      );
  }

  onSucesso(response: Transacao[]) {
    this.transacoes = response;
  }
  onError(error: any) {
    this.erroNoCarregamento = true;
    console.error(error);
  }

  proximaPagina() {
    this.pagina = this.pagina + 1;
    this.carregarExtrato();
  }
  paginaAnterior(){
    this.pagina = this.pagina - 1;
    this.carregarExtrato();
  }
}
