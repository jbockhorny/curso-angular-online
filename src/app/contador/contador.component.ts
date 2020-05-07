import { Component, EventEmitter, Input, Output } from '@angular/core';

@Component({
  selector: 'app-contador',
  templateUrl: './contador.component.html',
  styleUrls: ['./contador.component.scss']
})
export class ContadorComponent {
  @Input() valor = 0;
  @Output() valorMudou = new EventEmitter();

  decrementar(){
    this.valor = this.valor - 1;
    this.valorMudou.emit(this.valor);
  }
  incrementar(){
    this.valor = this.valor + 1;
    this.valorMudou.emit(this.valor);
  }
}
