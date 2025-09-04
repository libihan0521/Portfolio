document.addEventListener('DOMContentLoaded', () => {

  const header = document.getElementById('siteHeader'); 
  if (!header) {                                        
    console.error('[error] #siteHeader not found. ' +
      'Check: (1) HTML has <header id="siteHeader">, ' +
      '(2) script loading order/path, (3) exact ID spelling/case.');
    return;
  }

  function setHeaderH() {
    const h = header.offsetHeight || 64;                
    document.documentElement.style
      .setProperty('--header-h', h + 'px');              
    // console.log('[ok] --header-h =', h);              
  }
  setHeaderH();                                         
  window.addEventListener('resize', setHeaderH);       


  let lastY = window.pageYOffset ||                      
              document.documentElement.scrollTop || 0;
  const threshold = 8;                                   
  let ticking = false;                                  

  function onScroll() {
    const y = window.pageYOffset ||                      
              document.documentElement.scrollTop || 0;
    const diff = y - lastY;                              

    if (y <= 0) {                                        
      header.classList.remove('hide', 'stuck');         
      lastY = 0;
      return;
    }

    if (Math.abs(diff) > threshold) {                   
      if (diff > 0) {                                    
        header.classList.add('hide');            
        header.classList.remove('stuck');                
      } else {                                           
        header.classList.remove('hide');                 
        header.classList.add('stuck');                  
      }
      lastY = y;                                      
    }
  }

  window.addEventListener('scroll', () => {
    if (!ticking) {                                    
      requestAnimationFrame(() => {
        onScroll();                                     
        ticking = false;                               
      });
      ticking = true;                                   
    }
  }, { passive: true });                         
});
