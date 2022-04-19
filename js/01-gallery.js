import { galleryItems } from './gallery-items.js';
// Change code below this line

const galleryEl = document.querySelector('.gallery');

const galleryItemsMarkup = createGalleryItemsMarkup(galleryItems);
galleryEl.innerHTML = galleryItemsMarkup;

function createGalleryItemsMarkup(items) {
    const markup = items
        .map(({ preview, original, description }) => {
            return `
            <div class="gallery__item">
                <a class="gallery__link" href="${original}">
                    <img
                        class="gallery__image"
                        src="${preview}"
                        data-source="${original}"
                        alt="${description}"
                    />
                </a>
            </div>`;
        })
        .join('');

    return markup;
}

galleryEl.addEventListener('click', onGalleryElClick);
function onGalleryElClick(e) {
    const imgAttribute = e.target.dataset.source;

    e.preventDefault();

    if (e.target.nodeName !== 'IMG') {
        return;
    }

    openModal(imgAttribute);
}

function openModal(attribute) {
    const instance = basicLightbox.create(`<img src="${attribute}" width="800" height="600">`);
    instance.show();

    closeModalByButtonEsc(instance);
}

function closeModalByButtonEsc(instance) {
    document.addEventListener('keydown', onKeydownEsc, { once: true });
    function onKeydownEsc(e) {
        if (e.code === 'Escape') {
            instance.close();
        }
    }
}
