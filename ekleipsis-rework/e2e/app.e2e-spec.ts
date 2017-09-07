import { EkleipsisReworkPage } from './app.po';

describe('ekleipsis-rework App', () => {
  let page: EkleipsisReworkPage;

  beforeEach(() => {
    page = new EkleipsisReworkPage();
  });

  it('should display welcome message', () => {
    page.navigateTo();
    expect(page.getParagraphText()).toEqual('Welcome to app!');
  });
});
