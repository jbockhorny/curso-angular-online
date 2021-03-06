import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { finalize, take } from 'rxjs/operators';

import { Contato } from '../contatos.interface';
import { ContatosService } from '../contatos.service';

@Component({
  selector: 'app-detalhar-contato',
  templateUrl: './detalhar-contato.component.html',
  styleUrls: ['./detalhar-contato.component.scss']
})
export class DetalharContatoComponent implements OnInit {

contato: Contato;

estaCarregando: boolean;
erroNoCarregamento: boolean;

  constructor(
    private activatedRoute: ActivatedRoute,
    private contatosService: ContatosService,
    private router: Router,
  ) { }

  ngOnInit() {
    this.carregarContato();
  }
  carregarContato() {
    this.estaCarregando = true;
    this.erroNoCarregamento = false;

    const idContato = this.activatedRoute.snapshot.paramMap.get('id');
    this.contatosService.getContato(idContato)
    .pipe(
      take(1),
      finalize(() => this.estaCarregando = false)
    )
    .subscribe(
      response => this.onSucesso(response),
      error => this.onError(error),
    );
  }

    onSucesso(response: Contato) {
      this.contato = response;
    }
    onError(error: any) {
      this.erroNoCarregamento = true;
      console.error(error);
    }
    voltar(){
      this.router.navigate(['contatos']);
    }

}
