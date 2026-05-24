const syncGalleryThumbs = (gallery) => {
  const thumbs = gallery.querySelectorAll('[data-jf-gallery-index]');
  const items = gallery.querySelectorAll('[data-jf-gallery-item]');

  if (thumbs.length === 0 || items.length === 0) return;

  const setActive = (index) => {
    items.forEach((item) => {
      item.classList.toggle('is-active', item.dataset.jfGalleryItem === String(index));
    });

    thumbs.forEach((thumb) => {
      const isActive = thumb.dataset.jfGalleryIndex === String(index);
      thumb.classList.toggle('is-active', isActive);

      if (isActive) {
        thumb.setAttribute('aria-current', 'true');
      } else {
        thumb.removeAttribute('aria-current');
      }
    });
  };

  thumbs.forEach((thumb) => {
    thumb.addEventListener('click', () => {
      setActive(thumb.dataset.jfGalleryIndex);
    });
  });
};

const initProductGalleries = () => {
  document.querySelectorAll('media-gallery:not([data-jf-gallery-ready])').forEach((gallery) => {
    gallery.dataset.jfGalleryReady = 'true';
    syncGalleryThumbs(gallery);
  });
};

initProductGalleries();
document.addEventListener('shopify:section:load', initProductGalleries);
