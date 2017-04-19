import { TripxpenseV2Page } from './app.po';

describe('tripxpense-v2 App', () => {
  let page: TripxpenseV2Page;

  beforeEach(() => {
    page = new TripxpenseV2Page();
  });

  it('should display message saying app works', () => {
    page.navigateTo();
    expect(page.getParagraphText()).toEqual('app works!');
  });
});
