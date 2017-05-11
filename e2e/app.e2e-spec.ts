import { AppDirectoryPage } from './app.po';

describe('app-directory App', () => {
  let page: AppDirectoryPage;

  beforeEach(() => {
    page = new AppDirectoryPage();
  });

  it('should display message saying app works', () => {
    page.navigateTo();
    expect(page.getParagraphText()).toEqual('app works!');
  });
});
