import { QuestionBase } from './question-base';

export class OptionsQuestion extends QuestionBase<string> {
  controlType = 'options';
  options: {key: string, value: string}[] = [];

  constructor(options: {} = {}) {
    super(options);
    this.options = options['options'] || '';
  }
}
