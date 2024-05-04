console.clear();

const app = document.querySelector('#main');
const scenes = document.querySelectorAll('.scene');

let scene = 0;

scenes[scene].dataset.active = true;
app.dataset.scene = scene + 1;
app.dataset.sceneCount = scenes.length;

app.addEventListener('click', () => {
  delete scenes[scene].dataset.active;
  scene = (scene + 1) % scenes.length;
  app.dataset.scene = scene + 1;
  scenes[scene].dataset.active = true;
});

app.addEventListener('click', (e) => {
  const ripple = document.createElement('div');
  ripple.className = 'ripple';

  document.body.appendChild(ripple);
  ripple.style.left = `${e.clientX}px`;
  ripple.style.top = `${e.clientY}px`;

  ripple.onanimationend = () => document.body.removeChild(ripple);
});
