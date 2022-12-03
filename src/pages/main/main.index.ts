import Page from '../../core/templates/page';

class MainPage extends Page{
  static textObject = {
    mainTitle: 'Hamburgers',
  }

  constructor(id: string) {
    super(id);
  }

  render() {
    const title = this.createHeaderTitle(MainPage.textObject.mainTitle)
    this.container.append(title);
    return this.container;
  }
}

export default MainPage;
