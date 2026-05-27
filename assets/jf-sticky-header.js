const headerGroup = document.getElementById('header-group');

if (headerGroup) {
  let lastScrollY = window.scrollY;
  let ticking = false;
  let headerHeight = 0;

  const revealOffset = 80;
  const scrollDelta = 6;

  const setHeaderHeight = () => {
    headerHeight = Math.ceil(headerGroup.getBoundingClientRect().height);
    document.body.style.setProperty('--header-group-height', `${headerHeight}px`);
    document.body.style.setProperty('--header-height', `${headerHeight}px`);
  };

  const setHiddenState = (isHidden) => {
    headerGroup.classList.toggle('jf-header-group--hidden', isHidden);
    headerGroup.dataset.stickyState = isHidden ? 'hidden' : 'visible';
  };

  const updateStickyState = () => {
    const currentScrollY = Math.max(window.scrollY, 0);
    const isNearTop = currentScrollY <= revealOffset;
    const isScrollingDown = currentScrollY > lastScrollY + scrollDelta;
    const isScrollingUp = currentScrollY < lastScrollY - scrollDelta;
    const isScrollLocked = document.documentElement.hasAttribute('scroll-lock');

    if (isScrollLocked || isNearTop || isScrollingUp) {
      setHiddenState(false);
    } else if (isScrollingDown && currentScrollY > headerHeight) {
      setHiddenState(true);
    }

    if (Math.abs(currentScrollY - lastScrollY) > scrollDelta) {
      lastScrollY = currentScrollY;
    }

    ticking = false;
  };

  const requestStickyUpdate = () => {
    if (ticking) return;

    ticking = true;
    window.requestAnimationFrame(updateStickyState);
  };

  setHeaderHeight();
  setHiddenState(false);

  window.addEventListener('scroll', requestStickyUpdate, { passive: true });
  window.addEventListener('resize', setHeaderHeight);

  if ('ResizeObserver' in window) {
    const resizeObserver = new ResizeObserver(setHeaderHeight);
    resizeObserver.observe(headerGroup);
  }
}
