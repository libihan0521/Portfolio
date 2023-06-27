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
  document.getElementById("fgModel2").style.animationName = "fgModel2";
  document.getElementById("fgModel2").setAttribute("src","src/images/FashionGame/CoverModel2-1.png");
  document.getElementById("fgModel1").style.animationName = "fgModel1";
  document.getElementById("fgModel1").setAttribute("src","src/images/FashionGame/CoverModel1-1.png");
  document.getElementById("fgMiddle").style.animationName = "fgMiddle";
}

function withdrawFgAnimation(){
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
  document.getElementById("BMCoverPhone").style.animationName = "BMCoverPhone";
  document.getElementById("BMCoverWatch").style.animationName = "BMCoverWatch";
}

function withdrawBMAnimation(){
  document.getElementById("BMCoverPad").style.animationName = "BMCoverPad-1";
  document.getElementById("BMCoverPhone").style.animationName = "BMCoverPhone-1";
  document.getElementById("BMCoverWatch").style.animationName = "BMCoverWatch-1";
}

function playMirrorAnimation(){
  document.getElementById("MirrorCoverGraphic").style.animationName = "MirrorCoverGraphic";
}

function withdrawMirrorAnimation(){
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
  function filterProjectsRed(category) {
    var projectLinks = document.getElementsByClassName('project-link-red');
    var bunnyMood=document.getElementById('bunnyMood');
    var trackCoin=document.getElementById('trackCoin');
    var cityDNA=document.getElementById('cityDNA');
    var fashionGame=document.getElementById('fashionGame');
    var drMirror=document.getElementById('drMirror');
    
    // 如果选中的按钮是"All"，显示所有作品链接
    if (category === 'all') {
      for (var i = 0; i < projectLinks.length; i++) {
        projectLinks[i].style.display = 'block';
      }
    } else {
      if(category === 'uxui'){
        drMirror.style.display='block';
        trackCoin.style.display='block';
        fashionGame.style.display='none';
        bunnyMood.style.display='block';
        cityDNA.style.display='block';
        scrollToTop(0.9);
      }
      if(category === 'gamedesign'){
        drMirror.style.display='none';
        trackCoin.style.display='none';
        fashionGame.style.display='block';
        bunnyMood.style.display='block';
        cityDNA.style.display='none';
        scrollToTop(0.9);
      }
      if(category === 'academic'){
        drMirror.style.display='block';
        trackCoin.style.display='block';
        fashionGame.style.display='block';
        bunnyMood.style.display='block';
        cityDNA.style.display='none';
        scrollToTop(0.9);
      }
      if(category === 'professional'){
        drMirror.style.display='none';
        trackCoin.style.display='none';
        fashionGame.style.display='none';
        bunnyMood.style.display='none';
        cityDNA.style.display='block';
        scrollToTop(0.9);
      }
    } 
  }

  function filterProjectsYellow(category) {
    var projectLinks = document.getElementsByClassName('project-link-yellow');
    var gameDemo=document.getElementById('gameDemo');
    var roblox=document.getElementById('roblox');
    var margot=document.getElementById('margot');
    var p5jsWorks=document.getElementById('p5jsWorks');
    var Installation=document.getElementById('Installation');
    var Paintings=document.getElementById('Paintings');
    var foldingPurifier=document.getElementById('foldingPurifier');
    var Landscape=document.getElementById('Landscape');
    
    // 如果选中的按钮是"All"，显示所有作品链接
    if (category === 'all') {
      for (var i = 0; i < projectLinks.length; i++) {
        projectLinks[i].style.opacity='100%';
      }
    } else {
      if(category === 'animation'){
        gameDemo.style.opacity='20%';
        roblox.style.opacity='20%';
        margot.style.opacity='100%';
        p5jsWorks.style.opacity='20%';
        Installation.style.opacity='20%';
        Paintings.style.opacity='20%';
        foldingPurifier.style.opacity='20%';
        Landscape.style.opacity='20%';
      }
      if(category === 'code'){
        gameDemo.style.opacity='100%';
        roblox.style.opacity='20%';
        margot.style.opacity='20%';
        p5jsWorks.style.opacity='100%';
        Installation.style.opacity='20%';
        Paintings.style.opacity='20%';
        foldingPurifier.style.opacity='20%';
        Landscape.style.opacity='20%';
      }
      if(category === 'art'){
        gameDemo.style.opacity='20%';
        roblox.style.opacity='100%';
        margot.style.opacity='100%';
        p5jsWorks.style.opacity='20%';
        Installation.style.opacity='20%';
        Paintings.style.opacity='100%';
        foldingPurifier.style.opacity='20%';
        Landscape.style.opacity='20%';
      }
      if(category === 'physical'){
        gameDemo.style.opacity='20%';
        roblox.style.opacity='20%';
        margot.style.opacity='20%';
        p5jsWorks.style.opacity='20%';
        Installation.style.opacity='100%';
        Paintings.style.opacity='20%';
        foldingPurifier.style.opacity='100%';
        Landscape.style.opacity='100%';
      }
    } 
  }

  function scrollToTop(n) {
    const viewportHeight = window.innerHeight;
    const scrollPosition = Math.floor(viewportHeight * n);
    window.scrollTo({
      top: scrollPosition,
      behavior: 'smooth'
    });
  }

  function toggleActive(button,color) {
    const buttons = document.querySelectorAll('.filter-button-'+color);
    // 移除其他按钮的 active 类
    buttons.forEach((_, index) => {
        buttons[index].classList.remove('active');
    });
    // 切换当前按钮的 active 类
    button.classList.toggle('active');
  }



  window.addEventListener('scroll', function() {
    var filterNavs = document.getElementsByClassName('filterNav');

    for (var i = 0; i < filterNavs.length; i++) {
      var filterNav = filterNavs[i];
      var filterText = filterNav.querySelector('.filterText');
      var filterTag = filterNav.querySelector('.filterTag');
      var distanceFromTop = filterNav.getBoundingClientRect().top;

      if (distanceFromTop <= 0) {
        filterText.style.display = 'none';
        filterTag.style.display = 'block';
        filterNav.style.backgroundColor = 'black';
      } else {
        filterText.style.display = 'block';
        filterTag.style.display = 'none';
        filterNav.style.backgroundColor = '#F6F5E8';
      }
    }
  });