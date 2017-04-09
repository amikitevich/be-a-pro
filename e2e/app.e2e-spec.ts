import { BeAProPage } from './app.po';

describe('be-a-pro App', () => {
  let page: BeAProPage;

  beforeEach(() => {
    page = new BeAProPage();
  });

  it('should display message saying app works', () => {
    page.navigateTo();
    expect(page.getParagraphText()).toEqual('app works!');
  });
});
