import { Component, OnInit } from '@angular/core';
import { finalize, take } from 'rxjs/operators';

import { Contato } from './contatos.interface';
import { ContatosService } from './contatos.service';

@Component({
  selector: 'app-contatos',
  templateUrl: './contatos.component.html',
  styleUrls: ['./contatos.component.scss']
})
export class ContatosComponent implements OnInit {

  contatos: Contato[];

  estaCarregando: boolean;
  erroNoCarregamento: boolean;

  constructor(
    private contratosService: ContatosService
  ) { }

  ngOnInit(): void {
    this.carregarContatos();
  }

  carregarContatos() {
    this.estaCarregando = true;
    this.erroNoCarregamento = false;

    this.contratosService.getContatos()
    .pipe(
      take(1),
      finalize(() => this.estaCarregando = false)
    )
    .subscribe(
      response => this.onSucesso(response),
      error => this.onError(error),
    );
  }

    onSucesso(response: Contato[]) {
      this.contatos = response;
    }
    onError(error: any) {
      this.erroNoCarregamento = true;
      console.error(error);
    }
}
