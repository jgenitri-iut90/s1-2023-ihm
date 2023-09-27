let slideIndex = 0;
showSlides();

function showSlides() {
  let i;
  let slides = document.getElementsByClassName("mySlides");
  let dots = document.getElementsByClassName("dot");
  for (i = 0; i < slides.length; i++) {
    slides[i].style.display = "none";  
  }
  slideIndex++;
  if (slideIndex > slides.length) {slideIndex = 1}    
  for (i = 0; i < dots.length; i++) {
    dots[i].className = dots[i].className.replace(" active", "");
  }
  slides[slideIndex-1].style.display = "block";  
  dots[slideIndex-1].className += " active";
  setTimeout(showSlides, 2500); // Change image every 2 seconds
}


(function () {
  function checkVisibility() {
    const elements = document.querySelectorAll('.containerimg1, .containerimg2, .containerimg3, .containerimg4');

    elements.forEach((element) => {
      const rect = element.getBoundingClientRect();
      const isVisible = rect.top < window.innerHeight && rect.bottom >= 0;
      
      if (isVisible) {
        element.classList.add('active');
      } else {
        element.classList.remove('active');
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

(function () {
  function checkVisibility2() {
    const containerminn = document.querySelectorAll('.containermin');

    containerminn.forEach((element) => {
      const rect2 = element.getBoundingClientRect();
      const isVisible2 = rect2.top < window.innerHeight && rect2.bottom >= 0;
      
      if (isVisible2) {
        element.classList.add('active');
      } 
    });
  }

  function init2() {
    checkVisibility2();

    window.addEventListener('scroll', checkVisibility2);
    window.addEventListener('resize', checkVisibility2);
    window.addEventListener('load', checkVisibility2);
  }

  init2();
})();




