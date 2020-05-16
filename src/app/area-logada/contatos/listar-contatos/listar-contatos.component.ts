import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { ToastrService } from 'ngx-toastr';
import { finalize, take } from 'rxjs/operators';

import { Contato } from '../contatos.interface';
import { ContatosService } from '../contatos.service';

@Component({
  selector: 'app-listar-contatos',
  templateUrl: './listar-contatos.component.html',
  styleUrls: ['./listar-contatos.component.scss']
})
export class ListarContatosComponent implements OnInit {

  contatos: Contato[];

  estaCarregando: boolean;
  erroNoCarregamento: boolean;

  constructor(
    private contratosService: ContatosService,
    private router: Router,
    private toastr: ToastrService,
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
    irParaDetalhes(idContato: number){
      this.router.navigate([`contatos/${idContato}`]);
    }

    deletarContato(idContato: number) {
      this.contratosService.deleteContato(idContato.toString()) 
      .subscribe(
        response => this.onSucessDeletarContato(idContato),
        error => this.onErrorDeletarContato(),
      );
    }

    onSucessDeletarContato(idContato){
      this.toastr.success('sucesso', 'Contato deletado com sucesso!');
      this.contatos = this.contatos.filter(contatos => contatos.id !== idContato);
    }

    onErrorDeletarContato(){
      console.log('Erro ao deletar');
    }
    novoContato(){
      this.router.navigate(['contatos/novo']);
    }

    irParaEditar(idContato: number){
      this.router.navigate([`contatos/${idContato}/editar`]);
    }
}
