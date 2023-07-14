const isMobile = navigator.userAgentData.mobile;

const parent = document.querySelector('.reveal');
const content = document.querySelector('.content');

function mouseMoved(event) {
  moveContent(event, content, parent);
}

if(!isMobile) {
  animateBg(content, parent, mouseMoved);
}