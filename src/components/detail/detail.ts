import { Component } from '@angular/core';

/**
 * Generated class for the DetailComponent component.
 *
 * See https://angular.io/docs/ts/latest/api/core/index/ComponentMetadata-class.html
 * for more info on Angular Components.
 */
@Component({
  selector: 'detail',
  templateUrl: 'detail.html'
})
export class DetailComponent {

  text: string;

  constructor() {
    console.log('Hello DetailComponent Component');
    this.text = 'Hello World';
  }

}
