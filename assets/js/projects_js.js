// TOP header translateY on Scroll Direction

const header = document.querySelector("header");
function checkScrollDirection(event) {
  if (checkScrollDirectionIsUp(event)) {
    header.style.transform = "translateY(0.5rem)";
  } else {
    header.style.transform = "translateY(-12rem)";
  }
}

function checkScrollDirectionIsUp(event) {
  if (event.wheelDelta) {
    return event.wheelDelta > 0;
  }
  return event.deltaY < 0;
}

let scrollableElement = document.body;

scrollableElement.addEventListener("wheel", checkScrollDirection);
