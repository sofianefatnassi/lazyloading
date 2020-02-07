import {Directive, OnInit} from '@angular/core';

@Directive({
  selector: '[appColor]'
})
export class ColorTyperDirective implements OnInit {
  constructor(){}

  ngOnInit(): void {
    console.log('dkfasqklfsdmlkmflsdkmlfkmlsd');
  }
}
