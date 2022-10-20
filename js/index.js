// example slider
const swiper = new Swiper('.swiper', {
    
    direction: 'horizontal',
    loop: true,
    autoplay: true,
    speed: 400,
    slidesPerView: 4,
    spaceBetween: 30,
    autoHeight: true,
    breakpoints: {
        // when window width is >= 320px
        320: {
          slidesPerView: 1,
          spaceBetween: 20,
          
        },
        // when window width is >= 576px
        576: {
          slidesPerView: 2,
          spaceBetween: 30
        },
        // when window width is >= 768px
        768: {
          slidesPerView: 3,
          spaceBetween: 40
        },
        // when window width is >= 992px
        992: {
          slidesPerView: 4,
          spaceBetween: 40
        }
      },
  
  
    // Navigation arrows
    navigation: {
      nextEl: '.example-btn-next',
      prevEl: '.example-btn-prev',
    },
    
  });

  // works slider

  const swiper2 = new Swiper('.works-swiper', {
  
    direction: 'horizontal',
    loop: true,
    slidesPerView: 4,
    spaceBetween: 30,
    breakpoints: {
      // when window width is >= 320px
      320: {
        slidesPerView: 1,
        spaceBetween: 20,
        
      },
      // when window width is >= 576px
      576: {
        slidesPerView: 2,
        spaceBetween: 30
      },
      // when window width is >= 768px
      768: {
        slidesPerView: 3,
        spaceBetween: 40
      },
      // when window width is >= 992px
      992: {
        slidesPerView: 4,
        spaceBetween: 40
      }
    },
  
  
    // Navigation arrows
    navigation: {
      nextEl: '.works-btn-next',
      prevEl: '.works-btn-prev',
    },

  });

  // about tabs

const tabHeaders = document.querySelectorAll('[data-tab]');
const contentBoxes = document.querySelectorAll('[data-tab-content]');

tabHeaders.forEach(function(item){
    item.addEventListener('click', function(){
        
        contentBoxes.forEach(function(item){
            item.classList.add('hidden');
        });

        const contentBox = document.querySelector('#' + this.dataset.tab);
        contentBox.classList.remove('hidden')
    });
});

  // accordion 

const accordions = document.querySelectorAll('.faq-accordion');

accordions.forEach(function(item) { 
  item.addEventListener('click', function(item){
    const self = item.currentTarget;
    const content = self.querySelector('.faq-accordion-content');
    const accordionIcon = self.querySelector('.faq-accordion-icon');
    content.classList.toggle('hidden');
    if (content.classList.contains('hidden')) {
      accordionIcon.style.transform = 'rotate(0deg)';
      
    } else {
      accordionIcon.style.transform = 'rotate(45deg)';
    }
  });
});

   // mobile nav

   const mobileNav = document.querySelector('.mobile-nav-btn');
   const navMenu = document.querySelector('.header-inner');

   mobileNav.addEventListener('click', function(){
       navMenu.classList.toggle('active');
       document.body.classList.toggle('no-scroll');
   });

  
