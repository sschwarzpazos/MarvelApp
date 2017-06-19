import { NgModule } from '@angular/core';
import { IonicPageModule } from 'ionic-angular';
import { ListComponent } from './list';

@NgModule({
  declarations: [
    ListComponent,
  ],
  imports: [
    IonicPageModule.forChild(ListComponent),
  ],
  exports: [
    ListComponent
  ]
})
export class ListComponentModule {}
