import images from "./gallery-items.js";

const galleryRef = document.querySelector(".js-gallery");
const modalRef = document.querySelector(".js-lightbox");
const lightboxImageRef = document.querySelector(".lightbox__image");
const btnCloseModalRef = document.querySelector(
  'button[data-action="close-lightbox"]'
);
const lightboxOverlayRef = document.querySelector(".lightbox__overlay");

galleryRef.insertAdjacentHTML("afterbegin", images.map(makeImage).join(""));

galleryRef.addEventListener("click", onGalleryItemOpenModal);

btnCloseModalRef.addEventListener("click", onBtnCloseModal);

lightboxOverlayRef.addEventListener("click", onBtnCloseModal);

window.addEventListener("keyup", (evt) => {
  if (evt.key === "Escape") {
    onBtnCloseModal();
  }
});

function makeImage(evt) {
  return `<li class="gallery__item">
  <a
    class="gallery__link"
    href='${evt.original}'
  >
    <img
      class="gallery__image"
      src='${evt.preview}'
      data-source='${evt.original}'
      alt='${evt.description}'
    />
  </a>
</li>`;
}

function onGalleryItemOpenModal(evt) {
  evt.preventDefault();
  modalRef.classList.add("is-open");
  lightboxImageRef.src = evt.target.dataset.source;
  lightboxImageRef.alt = evt.target.alt;
}

function onBtnCloseModal() {
  modalRef.classList.remove("is-open");
  lightboxImageRef.src = "";
  lightboxImageRef.alt = "";
}
