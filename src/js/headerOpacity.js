import { refs } from './referenceEl';

const { header } = refs;
export const headerOpacity = () => {
  if (scrollY !== 0) {
    header.style.backgroundColor = '#000000';
    header.style.opacity = '0.8';
  }

  window.onscroll = () => {
    if (window.matchMedia('(min-width: 1360px)').matches) {
      if (window.scrollY > 70) {
        header.style.backgroundColor = '#000000';
        header.style.opacity = '0.8';
      } else {
        header.style.backgroundColor = 'transparent';
        header.style.opacity = '1';
      }
    }

    if (window.matchMedia('(max-width: 1359px)').matches) {
      if (window.scrollY > 120) {
        header.style.backgroundColor = '#000000';
        header.style.opacity = '0.8';
      } else {
        header.style.backgroundColor = 'transparent';
        header.style.opacity = '1';
      }
    }
  };
};
