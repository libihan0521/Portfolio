import {
    showPortrait,
    closePortrait,
  } from "./js/anim.js";
  
  document.getElementById("title").addEventListener("mouseenter", showPortrait);
  document.getElementById("title").addEventListener("mouseleave", closePortrait);