import {
  HomePage
, CharactersPage
, ComicsPage
, CreatorsPage
, EventsPage
, SeriesPage
, StoriesPage
} from '../pages/index.pages';

export let rootPage = HomePage;

export const SIDEMENU: Array<{title: string, component: any}> = [
    { title: 'Home', component: HomePage }
  , { title: 'Personajes', component: CharactersPage }
  , { title: 'Comics', component: ComicsPage }
  , { title: 'Creadores', component: CreatorsPage }
  , { title: 'Eventos', component: EventsPage }
  , { title: 'Series', component: SeriesPage }
  , { title: 'Historias', component: StoriesPage }
];
