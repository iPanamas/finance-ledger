import './sass/main.scss';

const headerEl = document.querySelector('.header');

window.onscroll = () => {
  if (window.matchMedia('(min-width: 1360px)').matches) {
    window.scrollY > 70
      ? (headerEl.style.backgroundColor = '#000000cc')
      : (headerEl.style.backgroundColor = 'transparent');
  }

  if (window.matchMedia('(max-width: 768px)').matches) {
    window.scrollY > 120
      ? (headerEl.style.backgroundColor = '#000000cc')
      : (headerEl.style.backgroundColor = 'transparent');
  }
};

console.log(scrollY);
