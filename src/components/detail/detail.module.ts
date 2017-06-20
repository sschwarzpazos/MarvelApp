import { NgModule } from '@angular/core';
import { IonicPageModule } from 'ionic-angular';
import { DetailComponent } from './detail';

@NgModule({
  declarations: [
    DetailComponent,
  ],
  imports: [
    IonicPageModule.forChild(DetailComponent),
  ],
  exports: [
    DetailComponent
  ]
})
export class DetailComponentModule {}
