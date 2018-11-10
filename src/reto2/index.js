const eye = {
  left: document.querySelector('.left.eye'),
  right: document.querySelector('.right.eye')
};

const ref = {
  x: eye.right.getBoundingClientRect().x,
  y: eye.right.getBoundingClientRect().y
};

const direction = v => (v > 10 ? 10 : (v < -10 ? -10 : v));

const updateMouse = event => {
  const mouse = { x: event.clientX, y: event.clientY };

  const x = direction(mouse.x - ref.x);
  const y = direction(mouse.y - ref.y);

  // change eye value
  const leftEye = document.querySelector('.left.eye');
  leftEye.style.setProperty('--eye-x',`${x}px;`);
  leftEye.style.setProperty('--eye-y',`${y}px;`);

    // change eye value
  const rightEye = document.querySelector('.right.eye');
  rightEye.style.setProperty('--eye-x',`${x}px;`);
  rightEye.style.setProperty('--eye-y',`${y}px;`);

};

document.body.onmousemove = updateMouse;