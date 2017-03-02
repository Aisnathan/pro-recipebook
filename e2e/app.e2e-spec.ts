import { ProRecipebookPage } from './app.po';

describe('pro-recipebook App', function() {
  let page: ProRecipebookPage;

  beforeEach(() => {
    page = new ProRecipebookPage();
  });

  it('should display message saying app works', () => {
    page.navigateTo();
    expect(page.getParagraphText()).toEqual('rb works!');
  });
});
