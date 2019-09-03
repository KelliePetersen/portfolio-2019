class ContactForm {
  constructor() {
    this.form = document.getElementsByClassName('contact__form');
    this.events();
  }

  events() {
    this.form[0].addEventListener("focusin", (event) => {
      event.target.previousElementSibling.classList.add("contact__label--is-focus");
      event.target.previousElementSibling.classList.add("contact__label--is-focus");
    });
    this.form[0].addEventListener("focusout", (event) => {
      if (event.target.value.length === 0) {
        event.target.previousElementSibling.classList.remove("contact__label--is-focus");
        event.target.previousElementSibling.classList.remove("contact__label--is-focus");
      }
    });
    this.form[0].addEventListener("input", (event) => {
      if (event.target.value.length === 0) {
        event.target.classList.add("contact--required");
        event.target.previousElementSibling.classList.add("contact__label--required");
      } else {
        event.target.classList.remove("contact--required");
        event.target.previousElementSibling.classList.remove("contact__label--required");
      }
    });
  }
}

export default ContactForm;