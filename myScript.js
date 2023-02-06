let n=200;
// setInterval(titleAnimation, 100);


function showPortrait() {
        document.getElementById("clearPortrait").style.visibility = "visible";
        document.getElementById("title").src = "assets/image/titleBlur.png";
        document.getElementById("titleBG").style.visibility = "hidden";   
  }

function closePortrait() {
        document.getElementById("clearPortrait").style.visibility = "hidden";
        document.getElementById("title").src = "assets/image/title.png";
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





