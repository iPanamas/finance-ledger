var throttle = require('lodash.throttle');

import { refs } from './referenceEl';

const { form, message, inputName, inputEmail } = refs;

export const validationForm = () => {
  message.classList.add('visually-hidden');

  const handleChangeInput = () => {
    if (inputName.value !== '' || inputEmail.value !== '') {
      message.classList.add('visually-hidden');
    }
  };
  inputName.addEventListener('input', throttle(handleChangeInput, 1000));
  inputEmail.addEventListener('input', throttle(handleChangeInput, 1000));

  const handleSubmitForm = event => {
    const name = form.elements.name.value;
    const email = form.elements.email.value;

    if (name === '' || email === '') {
      event.preventDefault();
      message.classList.remove('visually-hidden');
    } else {
      message.classList.add('visually-hidden');
      form.reset();
    }
  };
  form.addEventListener('submit', handleSubmitForm);
};
