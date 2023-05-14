import {
  showPortrait,
  closePortrait,
} from "./anim.js";

document.addEventListener("mousemove", function(event) {
  // Get the screen position of the mouse
  const mouseX = event.clientX;
  const mouseY = event.clientY;

  // Define the area where you want the interaction to occur
  const interactionArea = document.getElementById("title");

  // Get the position and dimensions of the interaction area
  const rect = interactionArea.getBoundingClientRect();
  const areaX = rect.left;
  const areaY = rect.top;
  const areaWidth = interactionArea.offsetWidth;
  const areaHeight = interactionArea.offsetHeight;

  // Check if the mouse position is within the interaction area
  if (mouseX >= areaX && mouseX <= areaX + areaWidth && mouseY >= areaY && mouseY <= areaY + areaHeight) {
    showPortrait();
  } else {
    closePortrait();
  }
});
