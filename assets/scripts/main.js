const isMobile = /Android|webOS|iPhone|iPad|iPod|BlackBerry|IEMobile|Opera Mini/i.test(navigator.userAgent);

const parent = document.querySelector('.reveal');
const content = document.querySelector('.content');

function mouse_event(event) {
  move_content(event, content, parent);
}

if(!isMobile) {
  animate_bg(content, parent, mouse_event);
}