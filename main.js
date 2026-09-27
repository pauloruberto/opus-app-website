// Phone feature carousel: keep the dots in step with the scroll position.
(() => {
  const list = document.querySelector('.features-list');
  const dots = document.querySelectorAll('.dot');
  if (!list || !dots.length) return;

  const slides = Array.from(list.querySelectorAll('.feature'));
  const phone = window.matchMedia('(max-width: 799px)');
  let active = 0;
  let frame = 0;

  const update = () => {
    frame = 0;
    const centre = list.scrollLeft + list.clientWidth / 2;
    let nearest = 0;
    let best = Infinity;
    slides.forEach((slide, i) => {
      const distance = Math.abs(slide.offsetLeft + slide.offsetWidth / 2 - centre);
      if (distance < best) {
        best = distance;
        nearest = i;
      }
    });
    if (nearest === active) return;
    dots[active].classList.remove('is-active');
    dots[nearest].classList.add('is-active');
    active = nearest;
  };

  list.addEventListener('scroll', () => {
    if (!frame) frame = requestAnimationFrame(update);
  }, { passive: true });

  // Only the phone carousel scrolls, so only then make it a keyboard tab stop.
  const syncMode = () => {
    if (phone.matches) {
      list.tabIndex = 0;
      list.setAttribute('aria-label', 'Features, scrolls sideways');
    } else {
      list.removeAttribute('tabindex');
      list.removeAttribute('aria-label');
    }
  };
  phone.addEventListener('change', syncMode);
  syncMode();
})();
