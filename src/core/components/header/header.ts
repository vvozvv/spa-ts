import Component from '../../../core/templates/component';
import { menuList } from "../../contants/router";

class Header extends Component {
  constructor(tagName: string, className: string) {
    super(tagName, className);
  }

  renderButtons() {
    const headerMenuButtons = document.createElement('div');
    menuList.forEach((button) => {
      const buttonHTML = document.createElement('a');
      buttonHTML.text = `${button.name}`;
      buttonHTML.href = `#${button.path}`;
      headerMenuButtons.append(buttonHTML);
    });

    this.container.append(headerMenuButtons);
  }

  render(): HTMLElement {
    this.renderButtons();
    return this.container;
  }
}

export default Header;
