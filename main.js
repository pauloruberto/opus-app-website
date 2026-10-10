// Feature carousel: keep the dots and paddles in step with the scroll position.
(() => {
  const list = document.querySelector('.features-list');
  const dots = document.querySelectorAll('.dot');
  const paddles = document.querySelectorAll('.paddle');
  if (!list || !dots.length) return;

  const slides = Array.from(list.querySelectorAll('.feature'));
  let active = 0;
  let frame = 0;

  const update = () => {
    frame = 0;

    // Paddles: off at either end of the scroller.
    const max = list.scrollWidth - list.clientWidth;
    paddles.forEach((paddle) => {
      paddle.disabled = paddle.dataset.step < 0 ? list.scrollLeft <= 1 : list.scrollLeft >= max - 1;
    });

    // Dots (phone only): the slide nearest the centre.
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

  const schedule = () => {
    if (!frame) frame = requestAnimationFrame(update);
  };

  list.addEventListener('scroll', schedule, { passive: true });
  window.addEventListener('resize', schedule);

  // Each paddle moves by as many whole slides as fit in view; snapping lines them up.
  paddles.forEach((paddle) => {
    paddle.addEventListener('click', () => {
      const step = slides[1].offsetLeft - slides[0].offsetLeft;
      const gap = step - slides[0].offsetWidth;
      const inset = slides[0].offsetLeft;
      const perPage = Math.max(1, Math.floor((list.clientWidth - inset + gap) / step));
      list.scrollBy({ left: paddle.dataset.step * step * perPage });
    });
  });

  update();
})();
