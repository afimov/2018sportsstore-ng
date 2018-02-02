import { SportsStorePage } from './app.po';

describe('sports-store App', () => {
  let page: SportsStorePage;

  beforeEach(() => {
    page = new SportsStorePage();
  });

  it('should display welcome message', () => {
    page.navigateTo();
    expect(page.getParagraphText()).toEqual('Welcome to app!');
  });
});
