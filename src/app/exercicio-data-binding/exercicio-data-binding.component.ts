import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';

@Component({
  selector: 'app-exercicio-data-binding',
  templateUrl: './exercicio-data-binding.component.html',
  styleUrls: ['./exercicio-data-binding.component.scss']
})
export class ExercicioDataBindingComponent implements OnInit {

  imageURL = 'https://pbs.twimg.com/profile_images/2209676047/gatinho-5755_400x400.jpg';

  @Input() palavra: string;
  @Input() color: string;
  @Output() clicado = new EventEmitter();

  initialValue = 'valor inicial';
  isDisabled = true;
  acessibilityText = 'Um texto acessível';
  valorInput = '';
  constructor() {
    setTimeout(() => {
      this.isDisabled = false;
      console.log('isDisabled: ', this.isDisabled);
    }, 3000);
  }

  ngOnInit(): void {
  }

  onClick($event) {
  console.log('clicou', $event);
}

digitouAlgo($event){
  this.valorInput = $event.target.value;
  console.log($event);
}

passouMouse(){
  console.log('passou o mouse!');
}

onClickBotaoEmissor($event){
  console.log('Devo emitir informações para o componente pai');
  this.clicado.emit('true');
}

onValorAtualizadoNoContador(novoValor){
  console.log('Valor atualizado', novoValor);
}
}
