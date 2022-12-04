import Page from '../../core/templates/page';

class HamburgerPageIndex extends Page {
  static TextObject = {
    mainTitle: 'HamburgerPageIndex',
  };
  constructor(id: string) {
    super(id);
  }

  render(): HTMLElement {
    const title = this.createHeaderTitle(
      HamburgerPageIndex.TextObject.mainTitle
    );
    this.container.append(title);
    return this.container;
  }
}

export default HamburgerPageIndex;
