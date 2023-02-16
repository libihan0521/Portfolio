window.onscroll = function() {myFunction()};

function myFunction() {
 if (document.body.scrollTop > 5){
  document.getElementById("topHifi").style.position = "sticky";
  document.getElementById("topHifi").style.position = "-webkit-sticky";
  document.getElementById("topHifi").style.top = "0";
 }
}