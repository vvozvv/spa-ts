import Component from '../../../core/templates/component';
import { menuList } from '../../constants/router';

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

    const logo = document.createElement('div');
    logo.innerText = 'HAMBURGER STORE';

    this.container.append(logo)
    this.container.append(headerMenuButtons);
  }

  render(): HTMLElement {
    this.renderButtons();
    return this.container;
  }
}

export default Header;
