import { BrowserModule } from '@angular/platform-browser';
import { ErrorHandler, NgModule } from '@angular/core';
import { IonicApp, IonicErrorHandler, IonicModule } from 'ionic-angular';

// providers / services
import {
    Provider
  , CharacterProvider
  , ComicProvider
  , CreatorProvider
  , EventProvider
  , SerieProvider
} from '../providers/index.providers';


import { MyApp } from './app.component';
import { HomePage } from '../pages/home/home';

import { StatusBar } from '@ionic-native/status-bar';
import { SplashScreen } from '@ionic-native/splash-screen';

@NgModule({
  declarations: [
    MyApp,
    HomePage
  ],
  imports: [
    BrowserModule,
    IonicModule.forRoot(MyApp),
  ],
  bootstrap: [IonicApp],
  entryComponents: [
    MyApp,
    HomePage
  ],
  providers: [
      Provider
    , CharacterProvider
    , ComicProvider
    , CreatorProvider
    , EventProvider
    , SerieProvider
    , StatusBar
    , SplashScreen
    , {
        provide: ErrorHandler,
        useClass: IonicErrorHandler
      }
  ]
})
export class AppModule {}
