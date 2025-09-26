  const screensSwiper = new Swiper('.screens-swiper', { 
  slidesPerView: 5,
  spaceBetween: 20,
  loop: true,
  centeredSlides: true,
  speed: 3000,
  allowTouchMove: true,
  autoplay: {
    delay: window.innerWidth >= 992 ? 0 : 3000, 
    disableOnInteraction: false,
  },
  effect: window.innerWidth >= 992 ? 'coverflow' : 'slide', 
  coverflowEffect: {
    rotate: 0,
    stretch: 0,
    depth: 150,
    modifier: 1,
    slideShadows: false,
  },
  pagination: {
    el: '.screens-swiper .swiper-pagination',
    clickable: true,
    renderBullet: function (index, className) {
      // ✅ دايمًا نعمل 6 نقاط فقط
      if (index < 6) {
        return `<span class="${className}"></span>`;
      }
      return '';
    },
  },
  navigation: {
    nextEl: '.screens-swiper .swiper-button-next',
    prevEl: '.screens-swiper .swiper-button-prev',
  },
  breakpoints: {
    0: { slidesPerView: 1, spaceBetween: 10 },
    576: { slidesPerView: 2, spaceBetween: 15 },
    768: { slidesPerView: 3, spaceBetween: 15 },
    992: { slidesPerView: 4, spaceBetween: 20 },
    1200: { slidesPerView: 5, spaceBetween: 20 },
  },
});

// 🖱️ إيقاف autoplay عند hover في الديسك فقط
const screensSwiperEl = document.querySelector('.screens-swiper');
if (window.innerWidth >= 992) {
  screensSwiperEl.addEventListener('mouseenter', () => screensSwiper.autoplay.stop());
  screensSwiperEl.addEventListener('mouseleave', () => screensSwiper.autoplay.start());
}



// -------------------- Testimonials Swiper --------------------

var swiper = new Swiper(".mySwiper", { 
  slidesPerView: 2, // عدد الشرائح المرئية في نفس الوقت
  spaceBetween: 20,
  loop: true,
  navigation: {
    nextEl: ".arrow-btn",
    prevEl: ".arrow-btn2",
  },
  pagination: {
    el: ".swiper-pagination",
    clickable: true,
  },
  breakpoints: {
    // للشاشات الصغيرة
    0: {
      slidesPerView: 1,
    },
    576: {
      slidesPerView: 1,
    },
    768: {
      slidesPerView: 2,
    },
    992: {
      slidesPerView: 2,
    },
    1200: {
      slidesPerView: 2,
    }
  }
});

window.addEventListener('scroll', function() {
  const navbar = document.getElementById('navbar-example');
  if (window.scrollY > 50) { // بعد ما ينزل شوية
    navbar.classList.add('scrolled');
  } else {
    navbar.classList.remove('scrolled');
  }
});
