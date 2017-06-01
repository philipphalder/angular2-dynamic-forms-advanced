import { Component, Input, OnInit } from '@angular/core';
import { FormGroup } from '@angular/forms';
import { QuestionBase } from '../../models/question-base';
import { QuestionService } from '../../services/question.service';

@Component({
  selector: 'app-survey',
  templateUrl: './survey.component.html',
  styleUrls: ['./survey.component.css'],
  providers: [QuestionService]
})
export class SurveyComponent {
    questions: any[];

   constructor(service: QuestionService) {
    this.questions = service.getQuestions();
  }
}