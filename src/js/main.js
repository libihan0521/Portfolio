import {
    showPortrait,
    closePortrait,
    setActive,
    setInactive,
    playAnimation,
    withdrawAnimation
  } from "./coveranim.js";
  
  // Example usage:
  showPortrait();
  closePortrait();
  setActive("PortfolioIcon");
  setInactive("PortfolioIcon");
  playAnimation([
    { elementId: "la01", animationName: "laImage1" },
    { elementId: "la02", animationName: "laImage2" },
    { elementId: "la03", animationName: "laImage3" },
    { elementId: "la04", animationName: "laImage4" },
    { elementId: "laTitle", animationName: "laTitle" }
  ]);
  withdrawAnimation([
    { elementId: "la01", animationName: "laImage1" },
    { elementId: "la02", animationName: "laImage2" },
    { elementId: "la03", animationName: "laImage3" },
    { elementId: "la04", animationName: "laImage4" },
    { elementId: "laTitle", animationName: "laTitle" }
  ]);
  