const isMobile = navigator.userAgentData.mobile;

const parent = document.querySelector('.reveal');
const content = document.querySelector('.content');

function mouse_event(event) {
  move_content(event, content, parent);
}

if(!isMobile) {
  animate_bg(content, parent, mouse_event);
}