import { Component, OnInit } from '@angular/core';
import {ColorTyperDirective} from './shared/directives/ColorType.directive';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css'],
  providers: [ColorTyperDirective]
})
export class AppComponent implements OnInit {

  constructor() { }

  ngOnInit() {
  }

}
