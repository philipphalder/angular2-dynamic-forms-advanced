import { Component }       from '@angular/core';

import { QuestionService } from './services/question.service';

@Component({
  selector: 'my-app',
  template: `
    <div>
      <md-toolbar color="primary">Angular2 dynamic forms advanced</md-toolbar>
      <dynamic-form [questions]="questions"></dynamic-form>
    </div>
  `,
  providers:  [QuestionService]
})
export class AppComponent {
  questions: any[];

  constructor(service: QuestionService) {
    this.questions = service.getQuestions();
  }
}
