import MainPage from '../main/main.index';
import HamburgerPageIndex from '../hamburger-page/hamburger-page.index';
import Page from '@core/templates/page';
import { Pages } from '@core/constants/router';
import Header from '../../core/components/header/header';
// import Header from '@core/components/header/header';
import '../../core/style/main.scss';

class App {
  private static container: HTMLElement = document.body;
  private static defaultPageId = 'currentPage';
  private initialPage: MainPage;
  private header: Header;

  static insertNewPage(page: Page) {
    const pageHTML = page.render();
    pageHTML.id = App.defaultPageId;
    return document.body.append(pageHTML);
  }

  static renderNewPage(idPage: string) {
    const currentPage = document.querySelector(`#${App.defaultPageId}`);
    if (currentPage) {
      currentPage.remove();
    }

    switch (idPage) {
      case Pages.MainPage:
        return App.insertNewPage(new MainPage(Pages.MainPage));
      case Pages.HamburgerSinglePage:
        return App.insertNewPage(
          new HamburgerPageIndex(Pages.HamburgerSinglePage)
        );
      default:
        return document.body.append('not found');
    }
  }

  private enableRouteChange() {
    window.addEventListener('hashchange', () => {
      const hash = window.location.hash.slice(1);
      App.renderNewPage(hash);
    });
  }

  constructor() {
    this.initialPage = new HamburgerPageIndex('main-page-id');
    this.header = new Header('header', 'header');
  }

  run() {
    App.container.append(this.header.render());
    App.renderNewPage(Pages.MainPage);
    this.enableRouteChange();
  }
}

export default App;
