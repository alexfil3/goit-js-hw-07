import { galleryItems } from './gallery-items.js';
// Change code below this line

const galleryList = document.querySelector('.gallery');
const imagesMarkup = createMarkup(galleryItems);
galleryList.insertAdjacentHTML('beforeend', imagesMarkup);

function createMarkup(galleryItems) {
    return galleryItems
    .map(({ preview, original, description }) =>
    `<li class="gallery__item">
   <a class="gallery__link" href="${original}">
      <img class="gallery__image" src="${preview}" alt="${description}" />
   </a>
</li>`).join('');
}


new SimpleLightbox('.gallery a', {
    captions: true,
    captionDelay: 250,
    captionsData: "alt",
});
