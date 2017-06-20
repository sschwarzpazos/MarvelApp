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
  , StoryProvider
} from '../providers/index.providers';


import { MyApp } from './app.component';

// pages
import {
  HomePage
  , CharactersPage
  , ComicsPage
  , CreatorsPage
  , EventsPage
  , SeriesPage
  , StoriesPage
} from '../pages/index.pages';

// components
import {
    ListComponent
  , DetailComponent
} from '../components/index.components';

import { StatusBar } from '@ionic-native/status-bar';
import { SplashScreen } from '@ionic-native/splash-screen';


@NgModule({
  declarations: [
    /* Pages */
      MyApp
    , HomePage
    , CharactersPage
    , ComicsPage
    , CreatorsPage
    , EventsPage
    , SeriesPage
    , StoriesPage
    /* components */
    , ListComponent
    , DetailComponent
  ],
  imports: [
    BrowserModule,
    IonicModule.forRoot(MyApp),
  ],
  bootstrap: [IonicApp],
  entryComponents: [
    MyApp
    , HomePage
    , CharactersPage
    , ComicsPage
    , CreatorsPage
    , EventsPage
    , SeriesPage
    , StoriesPage
  ],
  providers: [
      Provider
    , CharacterProvider
    , ComicProvider
    , CreatorProvider
    , EventProvider
    , SerieProvider
    , StoryProvider
    , StatusBar
    , SplashScreen
    , {
        provide: ErrorHandler,
        useClass: IonicErrorHandler
      }
  ]
})
export class AppModule {}
