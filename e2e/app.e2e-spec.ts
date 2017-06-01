import { Angular2DynamicFormsAdvancedPage } from './app.po';

describe('angular2-dynamic-forms-advanced App', () => {
  let page: Angular2DynamicFormsAdvancedPage;

  beforeEach(() => {
    page = new Angular2DynamicFormsAdvancedPage();
  });

  it('should display message saying app works', () => {
    page.navigateTo();
    expect(page.getParagraphText()).toEqual('app works!');
  });
});
