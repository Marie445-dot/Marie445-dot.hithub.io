document.addEventListener('DOMContentLoaded', function () {
    const videos = document.querySelectorAll('.video');
  
    function isElementInViewport(el) {
      const rect = el.getBoundingClientRect();
      return (
        rect.left >= 0 &&
        rect.right <= (window.innerWidth || document.documentElement.clientWidth)
      );
    }
  
    function checkVideos() {
      videos.forEach(video => {
        if (isElementInViewport(video)) {
          video.play();
        } else {
          video.pause();
        }
      });
    }
  
    // Check video visibility on scroll and on page load
    const galeria = document.querySelector('.galeria');
    galeria.addEventListener('scroll', checkVideos);
    window.addEventListener('resize', checkVideos);
    checkVideos(); // Initial check

    const galeriaVi = document.querySelector('.galeriaVi');
    galeriaVi.addEventListener('scroll', checkVideos);
    window.addEventListener('resize', checkVideos);
    checkVideos(); // Initial check
  });
  

  document.addEventListener('DOMContentLoaded', function () {
    const galeria = document.querySelector('.galeria1');
    const imagenes = document.querySelector('.imagenes3');
    const imagenesCount = document.querySelectorAll('.imagenes3 img').length;
  
    let index = 0;
  
    function showNextImage() {
      index = (index + 1) % imagenesCount;
      const offset = -index * 100;
      imagenes.style.transform = `translateX(${offset}%)`;
    }
  
    // Cambia de imagen cada 3 segundos
    setInterval(showNextImage, 3000);
  });
  document.addEventListener('DOMContentLoaded', function () {
    const galeria = document.querySelector('.galeria10');
    const imagenes = document.querySelector('.imagenes30');
    const imagenesCount = document.querySelectorAll('.imagenes30 img').length;
  
    let index = 0;
  
    function showNextImage() {
      index = (index + 1) % imagenesCount;
      const offset = -index * 100;
      imagenes.style.transform = `translateX(${offset}%)`;
    }
  
    // Cambia de imagen cada 3 segundos
    setInterval(showNextImage, 3000);
  });