export function showPortrait() {
    document.getElementById("clearPortrait").style.visibility = "visible";
    document.getElementById("title").src = "/src/images/main/titleBlur.png";
    document.getElementById("titleBG").style.visibility = "hidden";
    console.log("mouse");
  }
  
export function closePortrait() {
    document.getElementById("clearPortrait").style.visibility = "hidden";
    document.getElementById("title").src = "/src/images/main/title.png";
    document.getElementById("titleBG").style.visibility = "visible";
  }
