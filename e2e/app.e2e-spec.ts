import { SanPage } from './app.po';

describe('san App', () => {
  let page: SanPage;

  beforeEach(() => {
    page = new SanPage();
  });

  it('should display welcome message', () => {
    page.navigateTo();
    expect(page.getParagraphText()).toEqual('Welcome to app!!');
  });
});
