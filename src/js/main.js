//Banner animation
function showPortrait() {
  document.getElementById("clearPortrait").style.visibility = "visible";
  document.getElementById("title").src = "src/images/main/titleBlur.png";
  document.getElementById("titleBG").style.visibility = "hidden";
  console.log("mouse");
}
function closePortrait() {
  document.getElementById("clearPortrait").style.visibility = "hidden";
  document.getElementById("title").src = "src/images/main/title.png";
  document.getElementById("titleBG").style.visibility = "visible";
}

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

//Nav-Icon animation
function setActive(elementId) {
  document.getElementById(elementId).style.width = "100%";
}
function setInactive(elementId) {
  document.getElementById(elementId).style.width = "60px";
}

//Cover animation
function playlaAnimation(){
  document.getElementById("la01").style.animationName = "laImage1";
  document.getElementById("la02").style.animationName = "laImage2";
  document.getElementById("la03").style.animationName = "laImage3";
  document.getElementById("la04").style.animationName = "laImage4";
  document.getElementById("laTitle").style.animationName = "laTitle";
}

function withdrawlaAnimation(){
  document.getElementById("la01").style.animationName = "laImage1-1";
  document.getElementById("la02").style.animationName = "laImage2-1";
  document.getElementById("la03").style.animationName = "laImage3-1";
  document.getElementById("la04").style.animationName = "laImage4-1";
  document.getElementById("laTitle").style.animationName = "laTitle-1";
}

function playMgAnimation(){
  document.getElementById("mg01").style.animationName = "mgImage1";
  document.getElementById("mg01").setAttribute("src","src/images/Margot/margot2-1.jpg");
  document.getElementById("mg02").style.animationName = "mgImage2";
  document.getElementById("mg02").setAttribute("src","src/images/Margot/margot3-1.jpg");
  document.getElementById("mg03").style.animationName = "mgImage3";
  document.getElementById("mg03").setAttribute("src","src/images/Margot/margot1-1.jpg");
}

function withdrawMgAnimation(){
  document.getElementById("mg01").style.animationName = "mgImage1-1";
  document.getElementById("mg01").setAttribute("src","src/images/Margot/margot2.jpg");
  document.getElementById("mg02").style.animationName = "mgImage2-1";
  document.getElementById("mg02").setAttribute("src","src/images/Margot/margot3.jpg");
  document.getElementById("mg03").style.animationName = "mgImage3-1";
  document.getElementById("mg03").setAttribute("src","src/images/Margot/margot1.jpg");
}

function playFgAnimation(){
  document.getElementById("fgT1").style.animationName = "fgTitle1";
  document.getElementById("fgT2").style.animationName = "fgTitle2";
  document.getElementById("fgModel2").style.animationName = "fgModel2";
  document.getElementById("fgModel2").setAttribute("src","src/images/FashionGame/CoverModel2-1.png");
  document.getElementById("fgModel1").style.animationName = "fgModel1";
  document.getElementById("fgModel1").setAttribute("src","src/images/FashionGame/CoverModel1-1.png");
  document.getElementById("fgMiddle").style.animationName = "fgMiddle";
}

function withdrawFgAnimation(){
  document.getElementById("fgT1").style.animationName = "fgTitle1-1";
  document.getElementById("fgT2").style.animationName = "fgTitle2-1";
  document.getElementById("fgModel2").style.animationName = "fgModel2-1";
  document.getElementById("fgModel2").setAttribute("src","src/images/FashionGame/CoverModel2.png");
  document.getElementById("fgModel1").style.animationName = "fgModel1-1";
  document.getElementById("fgModel1").setAttribute("src","src/images/FashionGame/CoverModel1.png");
  document.getElementById("fgMiddle").style.animationName = "fgMiddle-1";
}

function playTcAnimation(){
  document.getElementById("TcCover1").style.animationName = "TcCover1";
  document.getElementById("TcCover2").style.animationName = "TcCover2";
}

function withdrawTcAnimation(){
  document.getElementById("TcCover1").style.animationName = "TcCover1-1";
  document.getElementById("TcCover2").style.animationName = "TcCover2-1";
}

function p5cover(){
  document.getElementById("p5Cover").setAttribute("src","src/images/main/P5Cover.gif");
}

function p5cover1(){
  document.getElementById("p5Cover").setAttribute("src","src/images/main/P5Cover0.png");
}

function playBMAnimation(){
  document.getElementById("BMCoverPad").style.animationName = "BMCoverPad";
  // document.getElementById("BMCoverPhone").style.animationName = "BMCoverPhone";
  // document.getElementById("BMCoverWatch").style.animationName = "BMCoverWatch";
  document.getElementById("BMCoverTitle").style.animationName = "BMCoverTitle";
}

function withdrawBMAnimation(){
  document.getElementById("BMCoverPad").style.animationName = "BMCoverPad-1";
  // document.getElementById("BMCoverPhone").style.animationName = "BMCoverPhone-1";
  // document.getElementById("BMCoverWatch").style.animationName = "BMCoverWatch-1";
  document.getElementById("BMCoverTitle").style.animationName = "BMCoverTitle-1";
}

function playMirrorAnimation(){
  document.getElementById("MirrorTitle").style.animationName = "MirrorTitle";
  document.getElementById("MirrorTitle1").style.animationName = "MirrorTitle1";
  document.getElementById("MirrorCoverGraphic").style.animationName = "MirrorCoverGraphic";
}

function withdrawMirrorAnimation(){
  document.getElementById("MirrorTitle").style.animationName = "MirrorTitle-1";
  document.getElementById("MirrorTitle1").style.animationName = "MirrorTitle1-1";
  document.getElementById("MirrorCoverGraphic").style.animationName = "MirrorCoverGraphic-1";
}

function playFpAnimation(){
  document.getElementById("fpGraphic").style.animationName = "fpGraphic";
}

function withdrawFpAnimation(){
  document.getElementById("fpGraphic").style.animationName = "fpGraphic-1";
}

function playRlAnimation(){
  document.getElementById("WaterDress").style.animationName = "WaterDress";
  document.getElementById("GoldenFeather").style.animationName = "GoldenFeather";
  document.getElementById("RlTitle").style.animationName = "RlTitle";
}

function withdrawRlAnimation(){
  document.getElementById("WaterDress").style.animationName = "WaterDress-1";
  document.getElementById("GoldenFeather").style.animationName = "GoldenFeather-1";
  document.getElementById("RlTitle").style.animationName = "RlTitle-1";
}