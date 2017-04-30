import { RefPage } from './app.po';

describe('ref App', () => {
  let page: RefPage;

  beforeEach(() => {
    page = new RefPage();
  });

  it('should display message saying app works', () => {
    page.navigateTo();
    expect(page.getParagraphText()).toEqual('app works!');
  });
});
