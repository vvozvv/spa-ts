export const enum Pages {
  MainPage = 'main-page',
  HamburgerSinglePage = 'hamburgers-id',
}

type TMenu = {
  path: Pages;
  name: string;
}

export const pagesList: Array<TMenu> = [
  { path: Pages.MainPage, name: 'Главная страница' },
  { path: Pages.HamburgerSinglePage, name: 'Единичная страница' },
]

export const menuList: Array<TMenu> = pagesList.filter(item => item.path !== Pages.MainPage);
