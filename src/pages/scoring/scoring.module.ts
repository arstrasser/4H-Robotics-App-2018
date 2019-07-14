import { NgModule } from '@angular/core';
import { IonicPageModule } from 'ionic-angular';
import { ScoringPage } from './scoring';

@NgModule({
  declarations: [
    ScoringPage,
  ],
  imports: [
    IonicPageModule.forChild(ScoringPage),
  ],
  exports: [
    ScoringPage
  ]
})
export class ScoringPageModule {}
