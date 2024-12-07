//Cover animation



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
  function filterProjectsBlue(category) {
    var projectLinks = document.getElementsByClassName('project-link-blue');
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
        scrollToTop(1);
      }
      if(category === 'gamedesign'){
        drMirror.style.display='none';
        trackCoin.style.display='none';
        fashionGame.style.display='block';
        bunnyMood.style.display='block';
        cityDNA.style.display='none';
        scrollToTop(1);
      }
      if(category === 'academic'){
        drMirror.style.display='block';
        trackCoin.style.display='block';
        fashionGame.style.display='block';
        bunnyMood.style.display='block';
        cityDNA.style.display='none';
        scrollToTop(1);
      }
      if(category === 'professional'){
        drMirror.style.display='none';
        trackCoin.style.display='none';
        fashionGame.style.display='none';
        bunnyMood.style.display='none';
        cityDNA.style.display='block';
        scrollToTop(1);
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
    var op='40%';
    
    // 如果选中的按钮是"All"，显示所有作品链接
    if (category === 'all') {
      for (var i = 0; i < projectLinks.length; i++) {
        projectLinks[i].style.opacity='100%';
      }
    } else {
      if(category === 'animation'){
        gameDemo.style.opacity=op;
        roblox.style.opacity=op;
        margot.style.opacity='100%';
        p5jsWorks.style.opacity=op;
        Installation.style.opacity=op;
        Paintings.style.opacity=op;
        foldingPurifier.style.opacity=op;
        Landscape.style.opacity=op;
      }
      if(category === 'code'){
        gameDemo.style.opacity='100%';
        roblox.style.opacity=op;
        margot.style.opacity=op;
        p5jsWorks.style.opacity='100%';
        Installation.style.opacity=op;
        Paintings.style.opacity=op;
        foldingPurifier.style.opacity=op;
        Landscape.style.opacity=op;
      }
      if(category === 'art'){
        gameDemo.style.opacity=op;
        roblox.style.opacity='100%';
        margot.style.opacity='100%';
        p5jsWorks.style.opacity=op;
        Installation.style.opacity=op;
        Paintings.style.opacity='100%';
        foldingPurifier.style.opacity=op;
        Landscape.style.opacity=op;
      }
      if(category === 'physical'){
        gameDemo.style.opacity=op;
        roblox.style.opacity=op;
        margot.style.opacity=op;
        p5jsWorks.style.opacity=op;
        Installation.style.opacity='100%';
        Paintings.style.opacity=op;
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

  function toggleActive(button) {
    const parentDiv = button.parentNode; // 获取父级 div
    const buttons = parentDiv.querySelectorAll('.filter-button');
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
        if(i==0){
          filterNav.style.height = '7vw';
        }
      } else {
        filterText.style.display = 'block';
        filterTag.style.display = 'none';
        if(i==0){
          filterNav.style.height = '12vw';
        }
      }
    }
  });

  function scrollToSection(mySection) {
    var section = document.getElementById(mySection); // 获取要跳转到的元素
    section.scrollIntoView({ behavior: 'smooth' }); // 平滑滚动到元素位置
  }