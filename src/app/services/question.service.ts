import { Injectable }       from '@angular/core';

import { DropdownQuestion } from './../models/question-dropdown';
import { QuestionBase }     from './../models/question-base';
import { TextboxQuestion }  from './../models/question-textbox';
import { OptionsQuestion }  from './../models/question-options';

@Injectable()
export class QuestionService {

  // Todo: get from a remote source of question metadata
  // Todo: make asynchronous
  getQuestions() {

    let questions: QuestionBase<any>[] = [

      new DropdownQuestion({
        key: 'dropdown',
        label: 'Dropdown',
        options: [
          {key: 'one',  value: 'One'},
          {key: 'two',  value: 'Two'},
          {key: 'three',   value: 'Three'},
        ],
        order: 3
      }),

      new OptionsQuestion({
        key: 'option',
        label: 'Option',
        options: [
          {key: 'one',  value: 'One'},
          {key: 'two',  value: 'Two'},
          {key: 'three',   value: 'Three'},
        ],
        order: 2
      }),

      new TextboxQuestion({
        key: 'textfield',
        label: 'Textfield',
        placeholder: 'enter a short text',
        value: '',
        order: 1
      }),


    ];

    return questions.sort((a, b) => a.order - b.order);
  }
}
