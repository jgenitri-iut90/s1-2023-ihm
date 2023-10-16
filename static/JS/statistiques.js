(function () {
    function checkVisibility() {
      const elements = document.querySelectorAll('.bloc1, .bloc2, .bloc3');
  
      elements.forEach((element) => {
        const rect = element.getBoundingClientRect();
        const isVisible = rect.top < window.innerHeight && rect.bottom >= 0;
        
        if (isVisible) {
          element.classList.add('active');
        } else {
      
        }
      });
    }
  
    function init() {
      checkVisibility();
  
      window.addEventListener('scroll', checkVisibility);
      window.addEventListener('resize', checkVisibility);
      window.addEventListener('load', checkVisibility);
    }
  
    init();
  })();