import $ from 'jquery';
import gsap from 'gsap';
import webp from './modules/webp';
import 'slick-carousel';

window.addEventListener('DOMContentLoaded', () => {
  webp();

  function openAlert(btnClass) {
    const btn = document.querySelectorAll(btnClass);
    const modal = document.querySelector('.modal');
    const modalBg = document.querySelector('.modalbg');

    btn.forEach((button) => {
      button.addEventListener('click', (e) => {
        e.preventDefault();
        modal.classList.add('modal--active');
        modalBg.classList.add('modalbg--active');
      });
    });
  }
  openAlert('.first-page__btn');
  openAlert('.aside__link');
  openAlert('.first__slider-poster');
  openAlert('.slider-bg__poster');
  openAlert('.our-stagins_search');
  openAlert('.theater-partners__link');
  openAlert('.became-patron__form-submit');

  function toggleClases(linkClass) {
    const links = document.querySelectorAll(linkClass);
    links.forEach((item) => {
      item.addEventListener('click', (e) => {
        e.preventDefault();
        document.querySelector('.mobile-menu').classList.remove('active');
        document.getElementById(item.getAttribute('href')).scrollIntoView({ behavior: 'smooth' });
      });
    });
  }
  toggleClases('.header__link');
  toggleClases('.mobile-menu__links-item');

  function closeModal(btnClass, modalClass, modalBgClass, modalCloseClass, modalBgCloseClass) {
    const btn = document.querySelector(btnClass);
    const modal = document.querySelector(modalClass);
    const modalBg = document.querySelector(modalBgClass);

    btn.addEventListener('click', () => {
      modal.classList.remove(modalCloseClass);
      modalBg.classList.remove(modalBgCloseClass);
    });
    modalBg.addEventListener('click', () => {
      modal.classList.remove(modalCloseClass);
      modalBg.classList.remove(modalBgCloseClass);
    });
  }
  closeModal('.modal__close', '.modal', '.modalbg', 'modal--active', 'modalbg--active');

  $('.first-page__slider').slick({
    infinite: false,
    slidesToShow: 1,
    slidesToScroll: 1,
    prevArrow: '<button class="btn-prev"><svg width="109" height="25" viewBox="0 0 109 25" fill="none" xmlns="http://www.w3.org/2000/svg"><path d="M0.292892 11.2929C-0.0976296 11.6834 -0.0976295 12.3166 0.292893 12.7071L6.65685 19.0711C7.04738 19.4616 7.68054 19.4616 8.07107 19.0711C8.46159 18.6805 8.46159 18.0474 8.07107 17.6569L2.41422 12L8.07107 6.34315C8.46159 5.95262 8.46159 5.31946 8.07107 4.92894C7.68054 4.53841 7.04738 4.53841 6.65685 4.92894L0.292892 11.2929ZM41 11L1 11L1 13L41 13L41 11Z" fill="#ffffff"/><path d="M75.0703 19H72.6973V8.25098H69.5244V19H67.1338V6.15039H75.0703V19ZM86.1516 10.1055C86.1516 11.4707 85.8059 12.5195 85.1145 13.252C84.4289 13.9785 83.4357 14.3418 82.135 14.3418H81.5373V19H79.1467V6.15039H82.4074C84.9035 6.15039 86.1516 7.46875 86.1516 10.1055ZM81.5373 12.2676H81.9943C82.5803 12.2676 83.0168 12.1064 83.3039 11.7842C83.591 11.4619 83.7346 10.9346 83.7346 10.2021C83.7346 9.52832 83.6027 9.03027 83.3391 8.70801C83.0754 8.37988 82.6682 8.21582 82.1174 8.21582H81.5373V12.2676ZM95.3695 19H89.5775V6.15039H95.3695V8.21582H91.9682V11.2744H95.1234V13.3486H91.9682V16.9082H95.3695V19ZM108.402 22.6738H106.082V19H100.316V22.6738H97.9957V16.8906H98.7516C99.9586 13.6855 100.732 10.1055 101.072 6.15039H106.943V16.8906H108.402V22.6738ZM104.552 16.8906V8.25098H103.093C102.947 9.6748 102.71 11.1543 102.381 12.6895C102.059 14.2188 101.678 15.6191 101.239 16.8906H104.552Z" fill="#ffffff"/></svg></button>',
    nextArrow: '<button class="btn-next"><svg width="109" height="25" viewBox="0 0 109 25" fill="none" xmlns="http://www.w3.org/2000/svg"><path d="M108.707 12.7071C109.098 12.3166 109.098 11.6834 108.707 11.2929L102.343 4.92894C101.953 4.53841 101.319 4.53841 100.929 4.92894C100.538 5.31946 100.538 5.95263 100.929 6.34315L106.586 12L100.929 17.6569C100.538 18.0474 100.538 18.6805 100.929 19.0711C101.319 19.4616 101.953 19.4616 102.343 19.0711L108.707 12.7071ZM68 13L108 13L108 11L68 11L68 13Z" fill="white"/><path d="M5.39648 8.05762C4.71094 8.05762 4.16895 8.45898 3.77051 9.26172C3.37793 10.0645 3.18164 11.1807 3.18164 12.6104C3.18164 15.5869 3.95801 17.0752 5.51074 17.0752C6.19043 17.0752 6.90234 16.8584 7.64648 16.4248V18.5518C7.01953 18.9678 6.2168 19.1758 5.23828 19.1758C3.79102 19.1758 2.67773 18.6016 1.89844 17.4531C1.125 16.2988 0.738281 14.6787 0.738281 12.5928C0.738281 10.5068 1.13672 8.88086 1.93359 7.71484C2.73633 6.54883 3.84961 5.96582 5.27344 5.96582C5.74219 5.96582 6.19043 6.03027 6.61816 6.15918C7.05176 6.28809 7.51465 6.51367 8.00684 6.83594L7.21582 8.77832C6.95215 8.59668 6.6709 8.43262 6.37207 8.28613C6.07324 8.13379 5.74805 8.05762 5.39648 8.05762ZM19.2023 19H16.8117V8.25098H14.8869C14.6232 11.2158 14.3596 13.665 14.0959 15.5986C13.9201 16.835 13.6008 17.7402 13.1379 18.3145C12.6809 18.8887 12.0686 19.1758 11.301 19.1758C10.8264 19.1758 10.4367 19.1113 10.132 18.9824V17.0049C10.3078 17.0752 10.5246 17.1104 10.7824 17.1104C11.1105 17.1104 11.3596 16.8525 11.5295 16.3369C11.7053 15.8213 11.9016 14.6641 12.1184 12.8652C12.341 11.0664 12.5725 8.82812 12.8127 6.15039H19.2023V19ZM29.0707 19H23.2787V6.15039H29.0707V8.21582H25.6693V11.2744H28.8246V13.3486H25.6693V16.9082H29.0707V19ZM42.1031 22.6738H39.7828V19H34.0172V22.6738H31.6969V16.8906H32.4527C33.6598 13.6855 34.4332 10.1055 34.773 6.15039H40.6441V16.8906H42.1031V22.6738ZM38.2535 16.8906V8.25098H36.7945C36.648 9.6748 36.4107 11.1543 36.0826 12.6895C35.7604 14.2188 35.3795 15.6191 34.94 16.8906H38.2535Z" fill="white"/></svg></button>',
    asNavFor: '.first-page__slider-bg',
  });

  $('.first-page__slider-bg').slick({
    infinite: false,
    slidesToShow: 1,
    slidesToScroll: 1,
    asNavFor: '.first-page__slider',
    fade: true,
    arrows: false,
  });

  $('.our-stagings__slide').slick({
    infinite: false,
    slidesToShow: 4,
    slidesToScroll: 1,
    variableWidth: true,
    prevArrow: '<button class="btn-prev"><svg width="109" height="25" viewBox="0 0 109 25" fill="none" xmlns="http://www.w3.org/2000/svg"><path d="M0.292892 11.2929C-0.0976296 11.6834 -0.0976295 12.3166 0.292893 12.7071L6.65685 19.0711C7.04738 19.4616 7.68054 19.4616 8.07107 19.0711C8.46159 18.6805 8.46159 18.0474 8.07107 17.6569L2.41422 12L8.07107 6.34315C8.46159 5.95262 8.46159 5.31946 8.07107 4.92894C7.68054 4.53841 7.04738 4.53841 6.65685 4.92894L0.292892 11.2929ZM41 11L1 11L1 13L41 13L41 11Z" fill="#ffffff"/><path d="M75.0703 19H72.6973V8.25098H69.5244V19H67.1338V6.15039H75.0703V19ZM86.1516 10.1055C86.1516 11.4707 85.8059 12.5195 85.1145 13.252C84.4289 13.9785 83.4357 14.3418 82.135 14.3418H81.5373V19H79.1467V6.15039H82.4074C84.9035 6.15039 86.1516 7.46875 86.1516 10.1055ZM81.5373 12.2676H81.9943C82.5803 12.2676 83.0168 12.1064 83.3039 11.7842C83.591 11.4619 83.7346 10.9346 83.7346 10.2021C83.7346 9.52832 83.6027 9.03027 83.3391 8.70801C83.0754 8.37988 82.6682 8.21582 82.1174 8.21582H81.5373V12.2676ZM95.3695 19H89.5775V6.15039H95.3695V8.21582H91.9682V11.2744H95.1234V13.3486H91.9682V16.9082H95.3695V19ZM108.402 22.6738H106.082V19H100.316V22.6738H97.9957V16.8906H98.7516C99.9586 13.6855 100.732 10.1055 101.072 6.15039H106.943V16.8906H108.402V22.6738ZM104.552 16.8906V8.25098H103.093C102.947 9.6748 102.71 11.1543 102.381 12.6895C102.059 14.2188 101.678 15.6191 101.239 16.8906H104.552Z" fill="#ffffff"/></svg></button>',
    nextArrow: '<button class="btn-next"><svg width="109" height="25" viewBox="0 0 109 25" fill="none" xmlns="http://www.w3.org/2000/svg"><path d="M108.707 12.7071C109.098 12.3166 109.098 11.6834 108.707 11.2929L102.343 4.92894C101.953 4.53841 101.319 4.53841 100.929 4.92894C100.538 5.31946 100.538 5.95263 100.929 6.34315L106.586 12L100.929 17.6569C100.538 18.0474 100.538 18.6805 100.929 19.0711C101.319 19.4616 101.953 19.4616 102.343 19.0711L108.707 12.7071ZM68 13L108 13L108 11L68 11L68 13Z" fill="white"/><path d="M5.39648 8.05762C4.71094 8.05762 4.16895 8.45898 3.77051 9.26172C3.37793 10.0645 3.18164 11.1807 3.18164 12.6104C3.18164 15.5869 3.95801 17.0752 5.51074 17.0752C6.19043 17.0752 6.90234 16.8584 7.64648 16.4248V18.5518C7.01953 18.9678 6.2168 19.1758 5.23828 19.1758C3.79102 19.1758 2.67773 18.6016 1.89844 17.4531C1.125 16.2988 0.738281 14.6787 0.738281 12.5928C0.738281 10.5068 1.13672 8.88086 1.93359 7.71484C2.73633 6.54883 3.84961 5.96582 5.27344 5.96582C5.74219 5.96582 6.19043 6.03027 6.61816 6.15918C7.05176 6.28809 7.51465 6.51367 8.00684 6.83594L7.21582 8.77832C6.95215 8.59668 6.6709 8.43262 6.37207 8.28613C6.07324 8.13379 5.74805 8.05762 5.39648 8.05762ZM19.2023 19H16.8117V8.25098H14.8869C14.6232 11.2158 14.3596 13.665 14.0959 15.5986C13.9201 16.835 13.6008 17.7402 13.1379 18.3145C12.6809 18.8887 12.0686 19.1758 11.301 19.1758C10.8264 19.1758 10.4367 19.1113 10.132 18.9824V17.0049C10.3078 17.0752 10.5246 17.1104 10.7824 17.1104C11.1105 17.1104 11.3596 16.8525 11.5295 16.3369C11.7053 15.8213 11.9016 14.6641 12.1184 12.8652C12.341 11.0664 12.5725 8.82812 12.8127 6.15039H19.2023V19ZM29.0707 19H23.2787V6.15039H29.0707V8.21582H25.6693V11.2744H28.8246V13.3486H25.6693V16.9082H29.0707V19ZM42.1031 22.6738H39.7828V19H34.0172V22.6738H31.6969V16.8906H32.4527C33.6598 13.6855 34.4332 10.1055 34.773 6.15039H40.6441V16.8906H42.1031V22.6738ZM38.2535 16.8906V8.25098H36.7945C36.648 9.6748 36.4107 11.1543 36.0826 12.6895C35.7604 14.2188 35.3795 15.6191 34.94 16.8906H38.2535Z" fill="white"/></svg></button>',
    responsive: [
      {
        breakpoint: 1600,
        settings: {
          slidesToShow: 3,
          slidesToScroll: 1,
        }
      },
      {
        breakpoint: 1215,
        settings: {
          slidesToShow: 2,
          slidesToScroll: 1,
        }
      },
      {
        breakpoint: 960,
        settings: {
          arrows: false,
          slidesToShow: 2,
          slidesToScroll: 1,
        }
      },
    ],
  });

  function mobileMenu(btnOpen, btnClose, menuClass) {
    const open = document.querySelector(btnOpen);
    const close = document.querySelector(btnClose);
    const menu = document.querySelector(menuClass);

    open.addEventListener('click', () => {
      menu.classList.add('active');
    });
    close.addEventListener('click', () => {
      menu.classList.remove('active');
    });
  }

  mobileMenu('.header__modile-btn', '.mobile-menu__close-btn', '.mobile-menu');

  const tl = gsap.timeline({ defaults: { ease: 'power1.out' } });

  tl.from('.header__link', {
    opacity: 0,
    translateX: 100,
    duration: 1,
    stagger: 0.1,
  });
  tl.from('.left-aside', {
    opacity: 0,
    translateX: -100,
    duration: 1,
  }, '-=1');
  tl.from('.first-page__header', {
    opacity: 0,
    translateY: 100,
    duration: 1,
  }, '-=1');
  tl.from('.first-page__text', {
    opacity: 0,
    translateY: 100,
    duration: 1,
  }, '-=0.9');
  tl.from('.first-page__btn', {
    opacity: 0,
    translateY: 100,
    duration: 1,
  }, '-=0.8');
  tl.from('.first-page__slider', {
    opacity: 0,
    translateY: 100,
    duration: 1,
  }, '-=1');
  tl.from('.first-page__slider-bg', {
    opacity: 0,
    translateY: 100,
    duration: 1,
  }, '-=0.8');

  window.addEventListener('scroll', () => {
    if (window.scrollY > 50) {
      document.querySelector('.dropHeader').classList.add('dropHeader--active');
    } else {
      document.querySelector('.dropHeader').classList.remove('dropHeader--active');
    }
  });
});
