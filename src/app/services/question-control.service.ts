import { FormArray } from '@angular/forms';
import { Injectable } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';

import { QuestionBase } from './../models/question-base';

@Injectable()
export class QuestionControlService {
  constructor() { }

  toFormGroup(questions: QuestionBase<any>[]) {
    let group: any = {};

    questions.forEach(question => {
      if (question.key === 'checkbox') {
        group[question.key] = new FormArray((question as any).options
          .map(x =>  {
            return new FormControl(question.value && question.value.some(y => y === x.value) ? x.value : '');
          }));
        return;
      }
      group[question.key] = question.required ? new FormControl(question.value || '', Validators.required)
        : new FormControl(question.value || '');

    });
    return new FormGroup(group);
  }
}
