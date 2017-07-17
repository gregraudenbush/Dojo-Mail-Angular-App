import { DojomailappPage } from './app.po';

describe('dojomailapp App', () => {
  let page: DojomailappPage;

  beforeEach(() => {
    page = new DojomailappPage();
  });

  it('should display welcome message', () => {
    page.navigateTo();
    expect(page.getParagraphText()).toEqual('Welcome to app!');
  });
});
