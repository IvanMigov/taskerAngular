import { TaskerAngularPage } from './app.po';

describe('tasker-angular App', () => {
  let page: TaskerAngularPage;

  beforeEach(() => {
    page = new TaskerAngularPage();
  });

  it('should display message saying app works', () => {
    page.navigateTo();
    expect(page.getParagraphText()).toEqual('app works!');
  });
});
