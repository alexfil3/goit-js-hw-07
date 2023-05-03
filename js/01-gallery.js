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
        <img
      class="gallery__image"
      src="${preview}"
      data-source="${original}"
      alt="${description}"
    />
  </a>
</li>`).join('');
}

galleryList.addEventListener('click', onModalOpen);

function onModalOpen(e) {
    e.preventDefault();
    
    if (e.target.nodeName !== "IMG") {
        return
    }

    const src = e.target.dataset.source;

    const instance = basicLightbox.create(`
    <img src="${src}" width="800" height="600">
    `)

    instance.show()

    window.addEventListener('keydown', onModalClose);
    function onModalClose(e) {
        if (e.code === "Escape") {
            instance.close();
            window.removeEventListener('keydown', onModalClose);
        }
    }
}