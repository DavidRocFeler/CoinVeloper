function initializeCarousel() {
    const images = document.querySelectorAll('#portada .Cgi');
    const totalImages = images.length;
    let currentIndex = 0;
  
    function showNextImage() {
      currentIndex = (currentIndex + 1) % totalImages;
      const offset = currentIndex * -100;
      images.forEach((image) => {
        image.style.transform = `translateX(${offset}%)`;
      });
    }
  
    function startCarousel() {
      return setInterval(showNextImage, 3000); // Cambia la imagen cada 3 segundos
    }
  
    const mediaQuery = window.matchMedia('(max-width: 430px)');
    let intervalId;
  
    function checkMediaQuery(e) {
      if (e.matches) {
        intervalId = startCarousel();
      } else {
        clearInterval(intervalId);
        currentIndex = 0;
        images.forEach((image) => {
          image.style.transform = `translateX(0)`;
        });
      }
    }
  
    mediaQuery.addListener(checkMediaQuery);
    checkMediaQuery(mediaQuery);
  }
  
  initializeCarousel();