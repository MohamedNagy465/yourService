var swiper = new Swiper(".mySwiper", {  
  slidesPerView: 2, 
  spaceBetween: 20,
  loop: true,
  navigation: {
    nextEl: ".arrow-btn",
    prevEl: ".arrow-btn2",
  },
  pagination: {
    el: ".swiper-pagination",
    clickable: true,
    renderBullet: function (index, className) {
      if (index < 6) return `<span class="${className}"></span>`; // دايمًا 6 نقاط
      return '';
    },
  },
  breakpoints: {
    0: { slidesPerView: 1 },
    576: { slidesPerView: 1 },
    768: { slidesPerView: 2 },
    992: { slidesPerView: 2 },
    1200: { slidesPerView: 2 }
  }
})
const isDesktop = window.innerWidth >= 992;

const screensSwiper = new Swiper('.screens-swiper', {
  slidesPerView: 5,
  spaceBetween: 20,
  loop: true,
  loopedSlides: 5,         // عدد الصور الأصلية
  centeredSlides: true,
  speed: 3000,
  allowTouchMove: true,

  // autoplay فقط على الديسك
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

  // pagination دايمًا 6 نقاط
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

// إيقاف autoplay عند hover في الديسك فقط
if (isDesktop && screensSwiper.params.autoplay) {
  const el = document.querySelector('.screens-swiper');
  el.addEventListener('mouseenter', () => screensSwiper.autoplay.stop());
  el.addEventListener('mouseleave', () => screensSwiper.autoplay.start());
}




// -------------------- Testimonials Swiper --------------------

;



window.addEventListener('scroll', function() {
  const navbar = document.getElementById('navbar-example');
  if (window.scrollY > 50) { 
    navbar.classList.add('scrolled');
  } else {
    navbar.classList.remove('scrolled');
  }
});
