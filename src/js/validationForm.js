const messageEl = document.querySelector('.contact-require');
const formEl = document.querySelector('.contact-form');

export const validationForm = () => {
  messageEl.classList.add('visually-hidden');

  const handleSubmitForm = event => {
    event.preventDefault();

    const name = formEl.elements.name.value;
    const email = formEl.elements.email.value;

    if (name === '' || email === '') {
      messageEl.classList.remove('visually-hidden');
    } else {
      messageEl.classList.add('visually-hidden');
      formEl.reset();
    }
  };

  formEl.addEventListener('submit', handleSubmitForm);
};
