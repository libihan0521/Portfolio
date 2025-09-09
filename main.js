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


  // 让 .yellowboxContainer.marquee-cards 整组循环
  document.querySelectorAll('.yellowboxContainer.marquee-cards').forEach(box => {
    const track = box.querySelector('.marquee__track');
    if (!track) return;

    // 1) 复制一份 yellowbox 列表（注意：是复制子元素，不是复制 track 自己）
    const original = track.innerHTML;
    track.innerHTML = original + original;

    // 2) 计算动画时长：总宽度 / 速度（px/s）
    const SPEED = Number(box.dataset.speed) || 80; 

    function updateDuration(){
      const contentWidth = track.scrollWidth / 2; 
      const duration = contentWidth / SPEED; 
      box.style.setProperty('--yb-duration', `${duration}s`);
    }

    // 图片加载完再算宽度，避免宽度为 0
    const imgs = track.querySelectorAll('img');
    let done = 0; const tryUpdate = () => (++done >= imgs.length) && updateDuration();
    if (imgs.length){
      imgs.forEach(img => img.complete ? tryUpdate()
        : (img.addEventListener('load', tryUpdate, {once:true}),
           img.addEventListener('error', tryUpdate, {once:true})));
    } else { updateDuration(); }

    new ResizeObserver(updateDuration).observe(track);
    window.addEventListener('load', updateDuration);
  });


  const original = document.getElementById('projectContent');
  const clone = original.cloneNode(true);
  document.getElementById('projectContentFooter').appendChild(clone);