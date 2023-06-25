//Banner animation
function showPortrait() {
  document.getElementById("clearPortrait").style.visibility = "visible";
  document.getElementById("title").src = "src/images/main/titleBlur.png";
  document.getElementById("titleBG").style.visibility = "hidden";
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
  document.getElementById(elementId).style.width = "160px";
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

function playInsAnimation(){
  document.getElementById("Egg").style.animationName = "Egg";
  document.getElementById("cloud").style.animationName = "cloud";
}

function withdrawInsAnimation(){
  document.getElementById("Egg").style.animationName = "Egg-1";
  document.getElementById("cloud").style.animationName = "cloud-1";
}

function playPaintingsAnimation(){
  document.getElementById("PCover1").style.animationName = "PCover1";
  document.getElementById("PCover2").style.animationName = "PCover2";
  document.getElementById("PCover3").style.animationName = "PCover3";
  document.getElementById("PCover4").style.animationName = "PCover4";
  document.getElementById("PCover5").style.animationName = "PCover5";
  document.getElementById("PCover6").style.animationName = "PCover6";
}

function withdrawPaintingsAnimation(){
  document.getElementById("PCover1").style.animationName = "PCover1-1";
  document.getElementById("PCover2").style.animationName = "PCover2-1";
  document.getElementById("PCover3").style.animationName = "PCover3-1";
  document.getElementById("PCover4").style.animationName = "PCover4-1";
  document.getElementById("PCover5").style.animationName = "PCover5-1";
  document.getElementById("PCover6").style.animationName = "PCover6-1";
}

function playGDAnimation(){
  document.getElementById("unityCover").style.animationName = "unityCover";
}

function withdrawGDAnimation(){
  document.getElementById("unityCover").style.animationName = "unityCover-1";
}

/*-----------Filter Function-----------*/
  // 筛选作品链接的函数
  function filterProjects(category) {
    var projectLinks = document.getElementsByClassName('project-link');
    var region=document.getElementById('project-links');
    var gameDemo=document.getElementById('gameDemo');
    var fashionGame=document.getElementById('fashionGame');
    var p5jsWorks=document.getElementById('p5jsWorks');
    var margot=document.getElementById('margot');
    var roblox=document.getElementById('roblox');
    var Installation=document.getElementById('Installation');
    var Paintings=document.getElementById('Paintings');
    var foldingPurifier=document.getElementById('foldingPurifier');
    var Landscape=document.getElementById('Landscape');
    
    // 如果选中的按钮是"All"，显示所有作品链接
    if (category === 'all') {
      region.style.height = "235vw";
      gameDemo.style.top="62vw";
      fashionGame.style.top="78vw";
      p5jsWorks.style.top="134vw";
      roblox.style.top="105vw";
      margot.style.top="115vw";
      Installation.style.top="152vw";
      Paintings.style.top="172vw";
      foldingPurifier.style.top="183vw";
      Landscape.style.top="203vw";
      for (var i = 0; i < projectLinks.length; i++) {
        projectLinks[i].style.display = 'block';
      }
    } else {
      if(category === 'ux-ui'){
        region.style.height = "70vw";
      }
      if(category === 'game-design'){
        region.style.height = "90vw";
        gameDemo.style.top="18vw";
        fashionGame.style.top="38vw";
        p5jsWorks.style.top="72vw";
      }
      if(category === 'other'){
        region.style.height = "114vw";
        roblox.style.top="4vw";
        margot.style.top="4vw";
        Installation.style.top="32vw";
        Paintings.style.top="48vw";
        foldingPurifier.style.top="64vw";
        Landscape.style.top="80vw";
      }
      // 根据选中的类别显示对应的作品链接，隐藏其他类别的作品链接
      for (var i = 0; i < projectLinks.length; i++) {
        var link = projectLinks[i];
        if (link.classList.contains(category)) {
          link.style.display = 'block';
        } else {
          link.style.display = 'none';
        }
      }  
    } 
  }

  function toggleActive(button) {
    const buttons = document.querySelectorAll('.filter-button');
    // 移除其他按钮的 active 类
    buttons.forEach((_, index) => {
        buttons[index].classList.remove('active');
    });
    // 切换当前按钮的 active 类
    button.classList.toggle('active');
  }