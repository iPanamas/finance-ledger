import './sass/main.scss';
import { headerOpacity } from './js/headerOpacity';
import { validationForm } from './js/validationForm';

const wrapper = document.querySelector('.team-images__wrapper');
const overlay = document.querySelector('.team-overlay');

const showSocial = () => {
  overlay.classList.remove('visually-hidden');
};
wrapper.addEventListener('mouseover', showSocial);

const hideSocial = () => {
  overlay.classList.add('visually-hidden');
};
wrapper.addEventListener('mouseout', hideSocial);

headerOpacity();
validationForm();
