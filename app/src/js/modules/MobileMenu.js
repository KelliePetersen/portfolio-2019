class MobileMenu {
  constructor() {
    this.menu = document.getElementsByClassName('nav__list');
    this.menuIcon = document.getElementsByClassName('menu__button');
    this.listItem = document.getElementsByClassName('menu__link');
    this.background = document.getElementsByClassName('menu__background');
    this.modal = document.getElementsByClassName('modal');
    this.events();
  }
  events() {
    this.menuIcon[0].addEventListener("click", this.toggleMenu.bind(this));
    this.menuIcon[0].addEventListener("click", this.animateMenu.bind(this));
    this.menuIcon[0].addEventListener("click", this.toggleBackground.bind(this));
    this.menuIcon[0].addEventListener("click", this.toggleModal.bind(this));
  }
  toggleMenu() {
    this.menu[0].classList.toggle("nav__list--is-open");
    Array.from(this.listItem).forEach(function (item) {
      item.classList.toggle("nav__link--is-open");
    })
  }
  toggleBackground() {
    this.background[0].classList.toggle("menu__background--is-open");
  }
  animateMenu() {
    this.menuIcon[0].classList.toggle("open");
  }
  toggleModal() {
    this.modal[0].classList.toggle("modal--is-open");
  }
}

export default MobileMenu;