export function showPortrait() {
    document.getElementById("clearPortrait").style.visibility = "visible";
    document.getElementById("title").src = "image/titleBlur.png";
    document.getElementById("titleBG").style.visibility = "hidden";
  }
  
export function closePortrait() {
    document.getElementById("clearPortrait").style.visibility = "hidden";
    document.getElementById("title").src = "image/title.png";
    document.getElementById("titleBG").style.visibility = "visible";
  }
  
export function setActive(elementId) {
    document.getElementById(elementId).style.width = "100%";
  }
  
export function setInactive(elementId) {
    document.getElementById(elementId).style.width = "60px";
  }
  
export function playAnimation(animationIds) {
    animationIds.forEach(({ elementId, animationName }) => {
      document.getElementById(elementId).style.animationName = animationName;
    });
  }
  
export function withdrawAnimation(animationIds) {
    animationIds.forEach(({ elementId, animationName }) => {
      document.getElementById(elementId).style.animationName = `${animationName}-1`;
    });
  }
  