export const headerOpacity = () => {
  const headerEl = document.querySelector('.header');

  if (scrollY !== 0) {
    headerEl.style.backgroundColor = '#000000';
    headerEl.style.opacity = '0.8';
  }

  window.onscroll = () => {
    if (window.matchMedia('(min-width: 1360px)').matches) {
      if (window.scrollY > 70) {
        headerEl.style.backgroundColor = '#000000';
        headerEl.style.opacity = '0.8';
      } else {
        headerEl.style.backgroundColor = 'transparent';
        headerEl.style.opacity = '1';
      }
    }

    if (window.matchMedia('(max-width: 1359px)').matches) {
      if (window.scrollY > 120) {
        headerEl.style.backgroundColor = '#000000';
        headerEl.style.opacity = '0.8';
      } else {
        headerEl.style.backgroundColor = 'transparent';
        headerEl.style.opacity = '1';
      }
    }
  };
};
