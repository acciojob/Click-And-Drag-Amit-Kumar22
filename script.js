// Your code here.
let isDragging = false;
let initialX;
let cubes = document.querySelectorAll('.item');

cubes.forEach(cube => {
  cube.addEventListener('mousedown', (e) => {
    isDragging = true;
    initialX = e.clientX;
    cube.style.cursor = 'grabbing';
  });

  document.addEventListener('mousemove', (e) => {
    if (!isDragging) return;

    const deltaX = e.clientX - initialX;
    cube.style.transform = `translateX(${deltaX}px)`;
  });

  document.addEventListener('mouseup', () => {
    if (isDragging) {
      cube.style.cursor = 'grab';
      isDragging = false;
      initialX = null;
    }
  });
});
