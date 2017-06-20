import { Injectable } from '@angular/core';

import { API_MARVEL } from '../../config/api-marvel.config';
import { Provider } from '../Provider';


@Injectable()
export class CharacterProvider {

  idx:string;
  endpoint:string = API_MARVEL.characters;

  baseObject:any = {
      count:0
    , limit: 20
    , offset: 0
    , results: []
    , total: 0
  }

  characters:any = Object.assign( { endPoint: '' }, this.baseObject );
  character:any = Object.assign( { endPoint: '' }, this.baseObject );
  characterComics:any = Object.assign( { endPoint: '/comics' }, this.baseObject );
  characterEvents:any = Object.assign( { endPoint: '/events' }, this.baseObject );
  characterSeries:any = Object.assign( { endPoint: '/series' }, this.baseObject );
  characterStories:any = Object.assign( { endPoint: '/stories' }, this.baseObject );

  constructor(
    private provider: Provider
  ) {
    console.log('Hello CharacterProvider Provider');
  }

  get( action:string, idx?:string ) {

    let promise = new Promise( ( resolve, reject ) => {
      let validate = true;
      let error = '';

      if ( !action ) { // error: debe especificar una acción
        // reject( 'especificar acción' );
        validate = false;
        error = 'Se debe especificar una acción';
      } else {
        let selectedObject = this[ action ];
        if ( idx ) {
          this.idx = idx;
        }

        if ( validate ) {
          let _endpoint = this.createEndPoint( selectedObject );
          let _params = this.createParams( selectedObject );

          this.provider
               .send( _endpoint, _params )
               .subscribe( data => {
                  resolve( this.updateObject( selectedObject, data ) ) ;
               });
        }

      }

    } );

    return promise;
  }


  updateObject( obj, data ) {
    obj.offset = data.offset;
    obj.limit = data.limit;
    obj.count = data.count;
    obj.total = data.total;

    obj.results = obj.results.concat( data.results.map( item => {
                    return {
                      id: item.id
                      , title: item.name || item.title
                      , description: item.description
                      , thumbnail: item.thumbnail
                    };

                  } ) );

    return obj;
  }

  createEndPoint( selectedObject:any ) {
    let endpoint = this.endpoint;
    if ( this.idx ) {
      endpoint = `${ endpoint }/${ this.idx }${ selectedObject.endPoint }`;
    }

    return endpoint;
  }

  createParams( selectedObject:any ) {
    return {
      'offset': selectedObject.offset + selectedObject.count
    };
  }

}
