import { NgModule } from '@angular/core';
import { FeedbackPage } from './feedback';

@NgModule({
  declarations: [
    FeedbackPage,
  ],
  // imports: [
  //   IonicModule.forChild(FeedbackPage),
  // ],
  exports: [
    FeedbackPage
  ]
})
export class FeedbackPageModule {}
