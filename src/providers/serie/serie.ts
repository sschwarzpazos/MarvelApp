import { Injectable } from '@angular/core';

import { API_MARVEL } from '../../config/api-marvel.config';
import { Provider } from '../Provider';


@Injectable()
export class SerieProvider {

  idx:string;
  endpoint:string = API_MARVEL.series;

  baseObject:any = {
      count:0
    , limit: 20
    , offset: 0
    , results: []
    , total: 0
  }

  series:any = Object.assign( { endPoint: '' }, this.baseObject );
  serie:any = Object.assign( { endPoint: '' }, this.baseObject );
  serieComics:any = Object.assign( { endPoint: '/comics' }, this.baseObject );
  serieCharacters:any = Object.assign( { endPoint: '/characters' }, this.baseObject );
  serieCreators:any = Object.assign( { endPoint: '/creators' }, this.baseObject );
  serieEvents:any = Object.assign( { endPoint: '/events' }, this.baseObject );
  serieStories:any = Object.assign( { endPoint: '/stories' }, this.baseObject );

  constructor(
    private provider: Provider
  ) {
    console.log('Hello SerieProvider Provider');
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
                      , title: item.name || item.title || item.fullName
                      , description: item.description
                      , thumbnail: item.thumbnail
                      , comics: ( item.comics && item.comics.available )? item.comics.available : 0
                      , events: ( item.events && item.events.available )? item.events.available : 0
                      , creators: ( item.creators && item.creators.available )? item.creators.available : 0
                      , stories: ( item.stories && item.stories.available )? item.stories.available : 0
                      , series: ( item.series && item.series.available )? item.series.available : 0
                      , characters: ( item.characters && item.characters.available )? item.characters.available : 0
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
