import { Component, Input, OnInit }  from '@angular/core';
import { FormGroup }                 from '@angular/forms';

import { QuestionBase }              from '../../models/question-base';
import { CheckboxQuestion } from '../../models/question-checkbox';
import { QuestionControlService }    from '../../services/question-control.service';

@Component({
  selector: 'dynamic-form',
  templateUrl: './dynamic-form.component.html',
  providers: [ QuestionControlService ]
})
export class DynamicFormComponent implements OnInit {

  @Input() questions: QuestionBase<any>[] = [];
  form: FormGroup;
  payLoad = '';

  constructor(private qcs: QuestionControlService) {  }

  ngOnInit() {
    this.form = this.qcs.toFormGroup(this.questions);
  }

  onSubmit() {
    let result = Object.assign({}, this.form.value);
    const checkboxQuestions = this.questions.filter(x => x instanceof CheckboxQuestion) as CheckboxQuestion[];
    Object.keys(this.form.value)
      .filter(x => x === 'checkbox')
      .forEach(x => {
        result[x] = checkboxQuestions[0].options
          .filter((y, n) => result[x][n])
          .map(z => z.value);
    });

    this.payLoad = JSON.stringify(result);
  }
}