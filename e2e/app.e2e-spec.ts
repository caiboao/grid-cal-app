import { GridCalAppPage } from './app.po';

describe('grid-cal-app App', function() {
  let page: GridCalAppPage;

  beforeEach(() => {
    page = new GridCalAppPage();
  });

  it('should display message saying app works', () => {
    page.navigateTo();
    expect(page.getParagraphText()).toEqual('app works!');
  });
});
