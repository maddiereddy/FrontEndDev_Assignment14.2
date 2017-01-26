import { Assignment142Page } from './app.po';

describe('assignment14-2 App', function() {
  let page: Assignment142Page;

  beforeEach(() => {
    page = new Assignment142Page();
  });

  it('should display message saying app works', () => {
    page.navigateTo();
    expect(page.getParagraphText()).toEqual('app works!');
  });
});
