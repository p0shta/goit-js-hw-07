import { galleryItems } from './gallery-items.js';
// Change code below this line

const galleryEl = document.querySelector('.gallery');

const galleryItemsMarkup = createGalleryItemsMarkup(galleryItems);
galleryEl.innerHTML = galleryItemsMarkup;

function createGalleryItemsMarkup(items) {
    const markup = items
        .map(({ preview, original, description }) => {
            return `<a class="gallery__item" href="${original}">
                <img class="gallery__image" src="${preview}" alt="${description}" />
            </a>`;
        })
        .join('');

    return markup;
}

let gallery = new SimpleLightbox('.gallery a', { captionDelay: 250, captionsData: 'alt' });
gallery.on('show.simplelightbox', function () {});
