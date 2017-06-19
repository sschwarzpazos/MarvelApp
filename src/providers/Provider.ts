import { Injectable } from '@angular/core';
import {
  Http,
  RequestOptions,
  Headers,
  URLSearchParams
} from '@angular/http';

import 'rxjs/add/operator/map';

import { API_MARVEL } from '../config/api-marvel.config';

@Injectable()
export class Provider {


  private headers: any = new Headers( { 'Content-Type': 'application/json' } );
  private params: any = new URLSearchParams();

  private url: string;

  private count:number = 0;
  private offset:number = 0;
  private limit:number = 20;
  // private total:number;

  constructor( private http: Http ) {
    this.url = [
      API_MARVEL.protocol
      , API_MARVEL.uri
      , API_MARVEL.port
      , API_MARVEL.version
      , API_MARVEL.status
    ].reduce( ( prev, current ) => prev + current );

    this.params.append( 'apikey', API_MARVEL.apikey );
    this.params.append( 'ts', API_MARVEL.ts );
    this.params.append( 'hash', API_MARVEL.hash );
    this.params.append( 'limit', this.limit );
    this.params.append( 'offset', this.offset + this.count );
  }

  /*
  generateUrl(){

      https://gateway.marvel.com:443/v1/public/characters?apikey=b6ec14effa925965bd776af6a56b42d9
                                    /v1/public/characters/{characterId}
                                    /v1/public/characters/{characterId}/comics
                                    /v1/public/characters/{characterId}/events
                                    /v1/public/characters/{characterId}/series
                                    /v1/public/characters/{characterId}/stories
      https://gateway.marvel.com:443/v1/public/events?apikey=b6ec14effa925965bd776af6a56b42d9
                                    /v1/public/events/{eventId}
                                    /v1/public/events/{eventId}/characters
                                    /v1/public/events/{eventId}/comics
                                    /v1/public/events/{eventId}/creators
                                    /v1/public/events/{eventId}/series
                                    /v1/public/events/{eventId}/stories

  }
  */

  send( endpoint:string, params:any ) {
    let url = this.url + endpoint;

    for ( let param in params) {
      this.params.set( param, params[ param ] );
    }

    let options = new RequestOptions(
      {
        headers: this.headers
        , params: this.params
      }
    );

    return this.http
                .get( url, options )
                .map( response => {
                  return response.json().data;
                } );

  }

}
