// carousel.js

document.addEventListener("DOMContentLoaded", function() {
    // Start with the first slide
    let slideIndex = 0;
    showSlides();
  
    function showSlides() {
      let slides = document.querySelectorAll('.carousel-item');
      // Hide all slides
      for (let i = 0; i < slides.length; i++) {
        slides[i].style.display = "none";
      }
      // Increment index and reset to 0 if it exceeds the number of slides
      slideIndex++;
      if (slideIndex > slides.length) {
        slideIndex = 1;
      }
      // Display the current slide
      slides[slideIndex - 1].style.display = "block";
      // Call the function recursively every 3 seconds
      setTimeout(showSlides, 2000);
    }
  });
  