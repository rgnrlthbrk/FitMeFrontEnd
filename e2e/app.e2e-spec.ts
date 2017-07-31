import { FitMeFrontEndPage } from './app.po';

describe('fit-me-front-end App', () => {
  let page: FitMeFrontEndPage;

  beforeEach(() => {
    page = new FitMeFrontEndPage();
  });

  it('should display welcome message', () => {
    page.navigateTo();
    expect(page.getParagraphText()).toEqual('Welcome to app!');
  });
});
