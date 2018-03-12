import { Projet1Page } from './app.po';

describe('projet1 App', () => {
  let page: Projet1Page;

  beforeEach(() => {
    page = new Projet1Page();
  });

  it('should display welcome message', () => {
    page.navigateTo();
    expect(page.getParagraphText()).toEqual('Welcome to app!');
  });
});
