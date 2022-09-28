// $(function () {
  
// });

/*Навігація бургер-меню*/

const menuBTN = document.querySelector('.header-top__nav-btn');
const menuItem = document.querySelectorAll('.header-top__contact, .header-top__nav, .header-user__cathegory, .header-user__service');


menuBTN.addEventListener('click', () => {
  menuBTN.classList.toggle('header-top__nav-btn--active');

  menuItem.forEach(item => {
    item.classList.toggle('visible-menu');
  });
});

/*********************************************************************/

/*Слайдер на .header*/

let width;

const sliderHeader = {
  slider: document.querySelector('.header-content__slider'),
  sliderLine: document.querySelector('.header-content__slider-line'),
  sliderItem: document.querySelectorAll('.header-content__slider-item'),
  initWidth: function () {
    width = this.slider.offsetWidth;
    this.sliderLine.style.width = width * this.sliderItem.length + 'px';
    this.sliderItem.forEach(item => {item.style.width = width + 'px';});
    this.rollSlider();
  },
  rollSlider: function() {
    this.sliderLine.style.transform = 'translateX(-' + this.count * width + 'px)';
  },
  count: 0,
  prevBTN: document.querySelector('.header-content__slider-btn--prev'),
  nextBTN: document.querySelector('.header-content__slider-btn--next'),
  sliderNum: document.querySelector('.header-content__slider-num--current'),
  counterSlider: function() {
    this.sliderNum.textContent = `0${this.count+1}`;
  },
};



sliderHeader.initWidth();
window.addEventListener('resize', () => {
  sliderHeader.initWidth();
});

sliderHeader.prevBTN.addEventListener('click', () => {
  sliderHeader.count--;
  if (sliderHeader.count < 0) {
    sliderHeader.count = 0;
  }
  if (sliderHeader.count == 0) {
    sliderHeader.prevBTN.classList.add('disabled');
  }
  sliderHeader.nextBTN.classList.remove('disabled');
  sliderHeader.rollSlider();
  sliderHeader.counterSlider();
});

sliderHeader.nextBTN.addEventListener('click', () => {
  sliderHeader.count++;
  if (sliderHeader.count > sliderHeader.sliderItem.length - 1) {
    sliderHeader.count = sliderHeader.sliderItem.length - 1;
  }
  if (sliderHeader.count == sliderHeader.sliderItem.length - 1) {
    sliderHeader.nextBTN.classList.add('disabled');
  }
  sliderHeader.prevBTN.classList.remove('disabled');
  sliderHeader.rollSlider();
  sliderHeader.counterSlider();
});




/**********************************************************************/

/*Слайдер .superiority*/

$(function () {
  $('.superiority__slider').slick({
    infinite: false,
    slidesToShow: 1,
    respondTo: 'slider',
    mobileFirst: true,
    fade: true,
    centerPadding: '0px',
    prevArrow: $('.superiority__slider-btn--prev'),
    nextArrow: $('.superiority__slider-btn--next'),
    responsive: [
      {
        breakpoint: 576,
        settings: {
          slidesToShow: 2,
          fade: false,
        }
      },
      {
        breakpoint: 1169,
        settings: {
          slidesToShow: 3,
          fade: false,
        }
      },
    ],
  });
});

/************************************/

/*Перемикач категорій товару*/

const cathegoryItem = document.querySelectorAll('.cathegory__nav-item');

cathegoryItem.forEach(item => {
  item.addEventListener('click', () => {
    for (let i of cathegoryItem) {
      i.classList.remove('cathegory__nav-item--active');
    }
    item.classList.add('cathegory__nav-item--active');
  });
});

/*********************************************/

/*Плавний скролл*/

const smoothLinks = document.querySelectorAll('a[href^="#"]');
for (let smoothLink of smoothLinks) {
  smoothLink.addEventListener('click', function (e) {
    e.preventDefault();
    const id = smoothLink.getAttribute('href');

    document.querySelector(id).scrollIntoView({
      behavior: 'smooth',
      block: 'start'
    });
  });
};

/**********************************************/

/*Кнопка скролл вгору*/

const scrollTop = document.querySelector('.scroll-top');
const header = document.querySelector('.header');

window.onscroll = () => {
  if (window.scrollY > header.offsetHeight) {
    scrollTop.classList.remove('scroll-top--hide');
  } else if (window.scrollY < header.offsetHeight) {
    scrollTop.classList.add('scroll-top--hide');
  }
};