import { NgModule } from '@angular/core';
import { IonicPageModule } from 'ionic-angular';
import { SeriesPage } from './series';

@NgModule({
  declarations: [
    SeriesPage,
  ],
  imports: [
    IonicPageModule.forChild(SeriesPage),
  ],
  exports: [
    SeriesPage
  ]
})
export class SeriesPageModule {}
