function move_content(event, mvElement, parentElement) {
  const parentRect = parentElement.getBoundingClientRect();
  const mouseX = event.clientX - parentRect.left;
  const mouseY = event.clientY - parentRect.top;

  const contentSize = 600; // Adjust the size of the circular area
  const contentRadius = contentSize / 2;

  const contentX = mouseX - contentRadius;
  const contentY = mouseY - contentRadius;

  mvElement.style.width = contentSize + 'px';
  mvElement.style.height = contentSize + 'px';
  mvElement.style.borderRadius = contentRadius + 'px';
  mvElement.style.boxShadow = '0 0 100px 90px #111116 inset';
  mvElement.style.outline = '3px solid #111116';
  mvElement.style.outlineOffset = '-2px';
  mvElement.style.transform = `translate(${contentX}px, ${contentY}px)`;

  const bgPosX = -contentX + 'px';
  const bgPosY = -contentY + 'px';
  mvElement.style.backgroundPosition = `${bgPosX} ${bgPosY}`;
}

function animate_bg(bgElement, parentElement, moveResponse) {
  bgElement.style.width = 0;
  bgElement.style.height = 0;
  bgElement.classList.add('animate');
  parentElement.addEventListener('mouseenter', () => {
    parentElement.classList.add('hovered');
  });
  parentElement.addEventListener('mouseleave', () => {
    parentElement.classList.remove('hovered');
  });
  parentElement.addEventListener('mousemove', moveResponse);
}