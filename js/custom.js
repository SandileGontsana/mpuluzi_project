document.addEventListener("DOMContentLoaded", function () {
  const slides = document.querySelectorAll(".slideshow-image");
  let currentIndex = 0;

  function showSlide(index) {
      slides.forEach((slide, i) => {
          slide.classList.remove("active");
          if (i === index) {
              slide.classList.add("active");
          }
      });
  }

  function nextSlide() {
      currentIndex = (currentIndex + 1) % slides.length;
      showSlide(currentIndex);
  }

  // Initialize slideshow
  showSlide(currentIndex);
  setInterval(nextSlide, 4000); // Change image every 4 seconds
});




const sliderTrack = document.querySelector('.slider-track');
const slides = Array.from(document.querySelectorAll('.slide'));
const dotsContainer = document.querySelector('.slider-dots');
const visibleSlides = 4; // Number of slides visible at a time
const slideCount = slides.length;
let currentIndex = 0;

// Set up dots
slides.forEach((_, index) => {
  const dot = document.createElement('div');
  dot.classList.add('dot');
  if (index === 0) dot.classList.add('active');
  dot.dataset.index = index;
  dotsContainer.appendChild(dot);
});

const updateSlider = () => {
  // Calculate the translation amount
  const translateX = -(currentIndex * (100 / visibleSlides));
  sliderTrack.style.transform = `translateX(${translateX}%)`;

  // Update active dot
  document.querySelectorAll('.dot').forEach((dot, index) => {
    dot.classList.toggle('active', index === currentIndex);
  });
};

// Add dot click functionality
dotsContainer.addEventListener('click', (e) => {
  if (e.target.classList.contains('dot')) {
    currentIndex = parseInt(e.target.dataset.index);
    updateSlider();
  }
});

// Auto-slide functionality
setInterval(() => {
  currentIndex = (currentIndex + 1) % (slideCount - visibleSlides + 1);
  updateSlider();
}, 5000); // Change slide every 5 seconds






  (function ($) {
  
  "use strict";

    // MENU
    $('.navbar-collapse a').on('click',function(){
      $(".navbar-collapse").collapse('hide');
    });
    
    // CUSTOM LINK
    $('.smoothscroll').click(function(){
      var el = $(this).attr('href');
      var elWrapped = $(el);
      var header_height = $('.navbar').height();
  
      scrollToDiv(elWrapped,header_height);
      return false;
  
      function scrollToDiv(element,navheight){
        var offset = element.offset();
        var offsetTop = offset.top;
        var totalScroll = offsetTop-navheight;
  
        $('body,html').animate({
        scrollTop: totalScroll
        }, 300);
      }
    });
  
  })(window.jQuery);


