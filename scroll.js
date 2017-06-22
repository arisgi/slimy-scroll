{
  let vx = vy = 0;

  document.addEventListener('wheel', (e) => {
    e.preventDefault();

    const x  = window.pageXOffset,
          y  = window.pageYOffset,
          dx = e.deltaX,
          dy = e.deltaY,
          ma = 10,
          w  = 0.5;

    let ax = ay = 0;

    if (dx > 0) {
      ax = (dx < ma) ? dx : ma;
    } else {
      ax = (dx < -ma) ? dx : -ma;
    }

    if (dy > 0) {
      ay = (dy < ma) ? dy : ma;
    } else {
      ay = (dy < -ma) ? dy : -ma;
    }

    vx += ax * w;
    vy += ay * w;

    window.scrollTo(x + vx, y + vy);
  })

  document.addEventListener('scroll', (e) => {
    e.preventDefault();

    const friction = 0.9;

    vx *= friction;
    vy *= friction;

    const x = window.pageXOffset;
    const y = window.pageYOffset;

    setTimeout(() => {
      (window.pageXOffset === x && window.pageYOffset === y) && (vx = vy = 0);
    }, 100)

  })
}
