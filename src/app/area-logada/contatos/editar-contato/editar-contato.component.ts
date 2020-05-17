import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormControl, FormGroup, Validators } from '@angular/forms';
import { ActivatedRoute, Router } from '@angular/router';
import { ToastrService } from 'ngx-toastr';
import { finalize, take } from 'rxjs/operators';

import { Contato } from '../contatos.interface';
import { ContatosService } from '../contatos.service';

@Component({
  selector: 'app-editar-contato',
  templateUrl: './editar-contato.component.html',
  styleUrls: ['./editar-contato.component.scss']
})
export class EditarContatoComponent implements OnInit {

  idContato: string;
  contatoForm: FormGroup;

  estaCarregando: boolean;
  erroNoCarregamento: boolean;

  constructor(
    private router: Router,
    private formBuilder: FormBuilder,
    private contatoService: ContatosService,
    private toastr: ToastrService,
    private activatedRoute: ActivatedRoute,
  ) { }

  ngOnInit() {
    this.inicializarFormulario();

    this.idContato = this.activatedRoute.snapshot.paramMap.get('id');
    if (this.estaEditando()) {
      this.carregarContato();
    }
  }

  estaEditando = () => Boolean(this.idContato);

  inicializarFormulario() {

    this.contatoForm = this.formBuilder.group({
      nome: ['', Validators.required],
      cpf: ['', Validators.required],
      dadosBancarios: this.formBuilder.group({
        ag: ['', [Validators.required, Validators.minLength(4)]],
        cc: ['', [Validators.required, Validators.minLength(5)]],
        banco: ['', Validators.required],
      })
    });

    // this.contatoForm = new FormGroup({
    //   nome: new FormControl(),
    //   banco: new FormControl(),
    // });
  }

  exibeErro(nomeControle: string) {
    if (!this.contatoForm.get(nomeControle)) {
      return false;
    }
    return this.contatoForm.get(nomeControle).invalid && this.contatoForm.get(nomeControle).touched;

    //   if (!this.contatoForm.controls[nomeControle]){
    //     return false;
    //   }
    //   return this.contatoForm.controls[nomeControle].invalid && this.contatoForm.controls[nomeControle].touched;
    // }
  }

  carregarContato() {
    this.estaCarregando = true;
    this.erroNoCarregamento = false;

    const idContato = this.activatedRoute.snapshot.paramMap.get('id');
    this.contatoService.getContato(idContato)
      .pipe(
        take(1),
        finalize(() => this.estaCarregando = false)
      )
      .subscribe(
        response => this.onSucessoCarregarContato(response),
        error => this.onErrorCarregarContato(error),
      );
  }

  onSucessoCarregarContato(response: Contato) {
    this.contatoForm.patchValue(response);
  }
  onErrorCarregarContato(error: any) {
    this.erroNoCarregamento = true;
    console.error(error);
  }

  voltar() {
    this.router.navigate(['contatos']);
  }

  validarCamposDoFormulario(form: FormGroup) {
    Object.keys(form.controls).forEach(field => {
      const control = form.get(field);
      if (control instanceof FormControl) {
        control.markAsTouched();
      } else if ( control instanceof FormGroup){
        this.validarCamposDoFormulario(control);
      }
    });
  }

  onSubimit() {
    if (this.contatoForm.invalid) {
      this.validarCamposDoFormulario(this.contatoForm);
      return;
    }
    if (this.estaEditando()) {
      this.salvarContato();
      return;
    }
    this.criarContato();
  }

  criarContato() {
    this.contatoService.createContato(this.contatoForm.value)
      .subscribe(
        response => this.onSucessCriarContato(),
        error => this.onError(),
      );
  }

  onSucessCriarContato() {
    this.toastr.success('Sucesso', 'Contato criado com sucesso');
    this.router.navigate(['contatos']);
  }
  onError() {
    this.toastr.error('Erro!', 'Alguma coisa deu errado.');
  }

  salvarContato() {
    this.contatoService.updateContato(this.idContato, this.contatoForm.value)
      .subscribe(
        response => this.onSucessSalvarContato(),
        error => this.onError(),
      );
  }

  onSucessSalvarContato() {
    this.toastr.success('Sucesso', 'Contato salvo com sucesso');
    this.router.navigate(['contatos']);
  }

}
