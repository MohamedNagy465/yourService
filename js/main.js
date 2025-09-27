var swiper = new Swiper(".mySwiper", {    
  slidesPerView: 2,
  slidesPerGroup: 2,
  spaceBetween: 20,
  loop: false,                  
  watchOverflow: true,          
  centeredSlides: true,        
  loopFillGroupWithBlank: false,
  centerInsufficientSlides: true,
  navigation: {
    nextEl: ".arrow-btn2", 
    prevEl: ".arrow-btn", 
  },
  pagination: {
    el: ".swiper-pagination",
    clickable: true,
  },
  breakpoints: {
    0: {   
      slidesPerView: 1,
      slidesPerGroup: 1,
      centeredSlides: true,
      spaceBetween: 10
    },
    576: { 
      slidesPerView: 1,
      slidesPerGroup: 1,
      centeredSlides: true,
      spaceBetween: 15
    },
    768: { 
      slidesPerView: 2, 
      slidesPerGroup: 2, 
      centeredSlides: false,
      spaceBetween: 20
    },
    992: { 
      slidesPerView: 2, 
      slidesPerGroup: 2,
      centeredSlides: false,
      spaceBetween: 25
    },
    1200:{ 
      slidesPerView: 2, 
      slidesPerGroup: 2,
      centeredSlides: false,
      spaceBetween: 30
    }
  }
});
const isDesktop = window.innerWidth >= 992;
const screensSwiper = new Swiper('.screens-swiper', {
  slidesPerView: 5,
  spaceBetween: 20,
  loop: true,
  loopedSlides: 5,         
  centeredSlides: true,
  speed: 3000,
  allowTouchMove: true,
  autoplay: isDesktop
    ? { delay: 0, disableOnInteraction: false }
    : false,

  effect: isDesktop ? 'coverflow' : 'slide',
  coverflowEffect: {
    rotate: 0,
    stretch: 0,
    depth: 150,
    modifier: 1,
    slideShadows: false,
  },
  pagination: isDesktop
    ? {
        el: '.screens-swiper .swiper-pagination',
        clickable: true,
        renderBullet: function (index, className) {
          if (index < 6) return `<span class="${className}"></span>`;
          return '';
        },
      }
    : false,

  navigation: {
    nextEl: '.swiper-button-next',
    prevEl: '.swiper-button-prev',
  },

  breakpoints: {
    0: { slidesPerView: 1, spaceBetween: 10, centeredSlides: false },
    576: { slidesPerView: 2, spaceBetween: 15, centeredSlides: false },
    768: { slidesPerView: 3, spaceBetween: 15, centeredSlides: false },
    992: { slidesPerView: 4, spaceBetween: 20, centeredSlides: true },
    1200: { slidesPerView: 5, spaceBetween: 20, centeredSlides: true },
  },
});
if (isDesktop && screensSwiper.params.autoplay) {
  const el = document.querySelector('.screens-swiper');
  el.addEventListener('mouseenter', () => screensSwiper.autoplay.stop());
  el.addEventListener('mouseleave', () => screensSwiper.autoplay.start());
}
;
window.addEventListener('scroll', function() {
  const navbar = document.getElementById('navbar-example');
  if (window.scrollY > 50) { 
    navbar.classList.add('scrolled');
  } else {
    navbar.classList.remove('scrolled');
  }
});
