import MainPage from '../main/main.index';

class App {
  protected container: HTMLElement;
  private initialPage: MainPage;

  constructor() {
    this.container = document.body;
    this.initialPage = new MainPage('main-page-id');
  }

  run() {
    const mainPageHtml = this.initialPage.render();
    this.container.append(mainPageHtml);
  }
}

export default App;
