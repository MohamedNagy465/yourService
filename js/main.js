
// -------------------- Screens Swiper --------------------
function getBulletsCount() {
  if (window.innerWidth < 576) return 1;   // 📱 موبايل صغير
  if (window.innerWidth < 768) return 2;   // 📱 موبايل كبير
  if (window.innerWidth < 992) return 3;   // 📱 تابلت
  if (window.innerWidth < 1200) return 4;  // 💻 لابتوب صغير
  return 5;                                // 🖥️ ديسكتوب
}

let totalBullets = getBulletsCount();

const screensSwiper = new Swiper('.screens-swiper', { 
  slidesPerView: 5,
  spaceBetween: 20,
  loop: true,
  centeredSlides: true,
  speed: 3000,
  autoplay: {
    delay: window.innerWidth >= 992 ? 0 : 3000, // ✅ ديسك = مستمر / موبايل = كل 3 ثواني
    disableOnInteraction: false,
  },
  effect: window.innerWidth >= 992 ? 'coverflow' : 'slide', // ✅ ديسك = coverflow / موبايل = slide
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
      if (index < totalBullets) {
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

// ✅ تحديث عند تغيير حجم الشاشة
window.addEventListener('resize', () => {
  totalBullets = getBulletsCount();
  screensSwiper.params.autoplay.delay = window.innerWidth >= 992 ? 0 : 3000;
  screensSwiper.params.effect = window.innerWidth >= 992 ? 'coverflow' : 'slide';
  screensSwiper.pagination.render();
  screensSwiper.pagination.update();
  screensSwiper.update();
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

