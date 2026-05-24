const syncGalleryThumbs = (gallery) => {
  const mediaColumn = gallery.closest('.product-information__media');
  const thumbs = gallery.querySelectorAll('[data-jf-gallery-index]');
  const items = gallery.querySelectorAll('[data-jf-gallery-item]');

  if (!mediaColumn || thumbs.length === 0 || items.length === 0) return;

  const setActive = (index) => {
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
      const target = gallery.querySelector(`[data-jf-gallery-item="${thumb.dataset.jfGalleryIndex}"]`);

      if (!target) return;

      mediaColumn.scrollTo({
        top: target.offsetTop,
        behavior: 'smooth',
      });
      setActive(thumb.dataset.jfGalleryIndex);
    });
  });

  const observer = new IntersectionObserver(
    (entries) => {
      const visibleEntry = entries
        .filter((entry) => entry.isIntersecting)
        .sort((a, b) => b.intersectionRatio - a.intersectionRatio)[0];

      if (visibleEntry) {
        setActive(visibleEntry.target.dataset.jfGalleryItem);
      }
    },
    {
      root: mediaColumn,
      threshold: [0.52],
    }
  );

  items.forEach((item) => observer.observe(item));
};

const initProductGalleries = () => {
  document.querySelectorAll('media-gallery:not([data-jf-gallery-ready])').forEach((gallery) => {
    gallery.dataset.jfGalleryReady = 'true';
    syncGalleryThumbs(gallery);
  });
};

initProductGalleries();
document.addEventListener('shopify:section:load', initProductGalleries);
