import { AfterViewInit, Component, Input, OnChanges, OnDestroy, OnInit } from '@angular/core';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.scss']
})
export class HeaderComponent implements OnInit, AfterViewInit, OnChanges, OnDestroy {

  @Input() title: string;

  constructor() {
    console.log('construtor');
   }

   ngOnChanges(){
     console.log('ngOnChanges');
   }

  ngOnInit(): void {
    console.log('ngOnInit');
  }

  ngAfterViewInit(){
    console.log('ngAfterViewInit');
  }

  ngOnDestroy(){
    console.log('Fui destruido!!!');
  }
}
