const parent = document.querySelector('.reveal');
const content = document.querySelector('.content');

parent.addEventListener('mousemove', moveContent);

function moveContent(event) {
  const parentRect = parent.getBoundingClientRect();
  const mouseX = event.clientX - parentRect.left;
  const mouseY = event.clientY - parentRect.top;

  const contentSize = 600; // Adjust the size of the circular area
  const contentRadius = contentSize / 2;

  const contentX = mouseX - contentRadius;
  const contentY = mouseY - contentRadius;

  content.style.width = contentSize + 'px';
  content.style.height = contentSize + 'px';
  content.style.borderRadius = contentRadius + 'px';
  content.style.boxShadow = '0 0 100px 90px #111116 inset';
  content.style.outline = '3px solid #111116';
  content.style.outlineOffset = '-2px';
  content.style.transform = `translate(${contentX}px, ${contentY}px)`;

  const bgPosX = -contentX + 'px';
  const bgPosY = -contentY + 'px';
  content.style.backgroundPosition = `${bgPosX} ${bgPosY}`;
}