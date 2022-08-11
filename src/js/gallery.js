import SimpleLightbox from 'simplelightbox';
import 'simplelightbox/dist/simple-lightbox.min.css';

const gallery = document.querySelector('.cases-images__item');

export function lightbox() {
  return (lightbox = new SimpleLightbox('.cases-images__item a', {
    showCounter: false,
    scaleImageToRatio: true,
    caption: true,
    captionsData: 'alt',
    captionDelay: 100,
    disableRightClick: true,
    scrollZoom: false,
    overlayOpacity: 0.7,
  }));
}
