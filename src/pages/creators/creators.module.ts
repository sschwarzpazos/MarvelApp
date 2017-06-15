import { NgModule } from '@angular/core';
import { IonicPageModule } from 'ionic-angular';
import { CreatorsPage } from './creators';

@NgModule({
  declarations: [
    CreatorsPage,
  ],
  imports: [
    IonicPageModule.forChild(CreatorsPage),
  ],
  exports: [
    CreatorsPage
  ]
})
export class CreatorsPageModule {}
