import { Injectable } from '@angular/core';
import { Http } from '@angular/http';
import 'rxjs/add/operator/map';


@Injectable()
export class CharacterProvider {

  constructor(
    private http: Http
  ) {
    console.log('Hello CharacterProvider Provider');
  }

}
