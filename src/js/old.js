let n=200;
// setInterval(titleAnimation, 100);


function showPortrait() {
        document.getElementById("clearPortrait").style.visibility = "visible";
        document.getElementById("title").src = "image/titleBlur.png";
        document.getElementById("titleBG").style.visibility = "hidden";   
  }

function closePortrait() {
        document.getElementById("clearPortrait").style.visibility = "hidden";
        document.getElementById("title").src = "image/title.png";
        document.getElementById("titleBG").style.visibility = "visible";
  }

function portfolioActive(){
    document.getElementById("PortfolioIcon").style.width = "100%";
}

function portfolioInactive(){
    document.getElementById("PortfolioIcon").style.width = "60px";
}

function aboutActive(){
    document.getElementById("AboutIcon").style.width = "100%";
}

function aboutInactive(){
    document.getElementById("AboutIcon").style.width = "60px";
}

function skillsActive(){
    document.getElementById("SkillsIcon").style.width = "100%";
}

function skillsInactive(){
    document.getElementById("SkillsIcon").style.width = "60px";
}

function resumeActive(){
    document.getElementById("ResumeIcon").style.width = "100%";
}

function resumeInactive(){
    document.getElementById("ResumeIcon").style.width = "60px";
}

function contactActive(){
    document.getElementById("ContactIcon").style.width = "100%";
}

function contactInactive(){
    document.getElementById("ContactIcon").style.width = "60px";
}

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
    document.getElementById("mg01").setAttribute("src","Margot/margot2-1.jpg");
    document.getElementById("mg02").style.animationName = "mgImage2";
    document.getElementById("mg02").setAttribute("src","Margot/margot3-1.jpg");
    document.getElementById("mg03").style.animationName = "mgImage3";
    document.getElementById("mg03").setAttribute("src","Margot/margot1-1.jpg");
}

function withdrawMgAnimation(){
    document.getElementById("mg01").style.animationName = "mgImage1-1";
    document.getElementById("mg01").setAttribute("src","Margot/margot2.jpg");
    document.getElementById("mg02").style.animationName = "mgImage2-1";
    document.getElementById("mg02").setAttribute("src","Margot/margot3.jpg");
    document.getElementById("mg03").style.animationName = "mgImage3-1";
    document.getElementById("mg03").setAttribute("src","Margot/margot1.jpg");
}

function playFgAnimation(){
    document.getElementById("fgT1").style.animationName = "fgTitle1";
    document.getElementById("fgT2").style.animationName = "fgTitle2";
    document.getElementById("fgModel2").style.animationName = "fgModel2";
    document.getElementById("fgModel2").setAttribute("src","FashionGame/CoverModel2-1.png");
    document.getElementById("fgModel1").style.animationName = "fgModel1";
    document.getElementById("fgModel1").setAttribute("src","FashionGame/CoverModel1-1.png");
    document.getElementById("fgMiddle").style.animationName = "fgMiddle";
}

function withdrawFgAnimation(){
    document.getElementById("fgT1").style.animationName = "fgTitle1-1";
    document.getElementById("fgT2").style.animationName = "fgTitle2-1";
    document.getElementById("fgModel2").style.animationName = "fgModel2-1";
    document.getElementById("fgModel2").setAttribute("src","FashionGame/CoverModel2.png");
    document.getElementById("fgModel1").style.animationName = "fgModel1-1";
    document.getElementById("fgModel1").setAttribute("src","FashionGame/CoverModel1.png");
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
    document.getElementById("p5Cover").setAttribute("src","image/P5Cover.gif");
}

function p5cover1(){
    document.getElementById("p5Cover").setAttribute("src","image/P5Cover0.png");
}

function playTBAnimation(){
    document.getElementById("TBCoverPad").style.animationName = "TBCoverPad";
    document.getElementById("TBCoverPhone").style.animationName = "TBCoverPhone";
    document.getElementById("TBCoverWatch").style.animationName = "TBCoverWatch";
    document.getElementById("TBCoverTitle").style.animationName = "TBCoverTitle";
}

function withdrawTBAnimation(){
    document.getElementById("TBCoverPad").style.animationName = "TBCoverPad-1";
    document.getElementById("TBCoverPhone").style.animationName = "TBCoverPhone-1";
    document.getElementById("TBCoverWatch").style.animationName = "TBCoverWatch-1";
    document.getElementById("TBCoverTitle").style.animationName = "TBCoverTitle-1";
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