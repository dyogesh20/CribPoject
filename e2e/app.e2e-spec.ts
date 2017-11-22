import { ExistingProjectPage } from './app.po';

describe('existing-project App', () => {
  let page: ExistingProjectPage;

  beforeEach(() => {
    page = new ExistingProjectPage();
  });

  it('should display welcome message', done => {
    page.navigateTo();
    page.getParagraphText()
      .then(msg => expect(msg).toEqual('Welcome to app!!'))
      .then(done, done.fail);
  });
});
