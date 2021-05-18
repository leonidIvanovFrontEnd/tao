

$(document).ready(function() {
  AOS.init({
    duration: 1000,
  });
	$('.sertif').magnificPopup({
		type: 'image',
		closeOnContentClick: true,
		closeBtnInside: false,
		fixedContentPos: true,
		mainClass: 'sertif', // class to remove default margin from left and right side
		image: {
			verticalFit: true
		},
		zoom: {
			enabled: true,
			duration: 300 // don't foget to change the duration also in CSS
		}
	});

  // header-slider
  var homebody = document.querySelector('#homebody-slider');
  var homebodyslider = new Swiper('#homebody-slider',{
    loop: true,
    autoplay: {
      delay: 4000,
    },
    speed: 1000,
  });
  homebody.addEventListener('mouseenter', function (e){
    homebodyslider.autoplay.stop(); 
  });
  homebody.addEventListener('mouseleave', function (e){
    homebodyslider.autoplay.start(); 
  });
   // header-slider


  var swiper = new Swiper('#slider-items', {
  grabCursor: true,
  centeredSlides: true,
  effect: 'coverflow',
  loop: true,
  initialSlide: 2,  
  breakpoints: {   
    0: {     
      slidesPerView: 1.35,
      spaceBetween:5,
    },
    360: {     
      slidesPerView: 1.5,
      spaceBetween:20,
    },
    450: {     
      slidesPerView: 2,
      spaceBetween:30,
    },
    625: {  
      slidesPerView: '2.9',
      spaceBetween:30,
      coverflowEffect: {
        rotate: 0,
        stretch: 0,
        depth: 100,
        modifier: 1,
        slideShadows: true,
      }
    },
    625: {
      slidesPerView: '2.9',
      spaceBetween:30,
      coverflowEffect: {
        rotate: 28,
        stretch: 0,
        depth: 100,
        modifier: 1,
        slideShadows: true,
      }
    },
    830: {
      slidesPerView: '3.1',
      spaceBetween:50,      
    },
    1120: {
      spaceBetween: 40, 
      slidesPerView: '4.6',
      coverflowEffect: {
        rotate: 24,
        stretch: 0,
        depth: 100,
        modifier: 1,
        slideShadows: true,
      }
    },   
    1400: {
      spaceBetween: 90, 
      slidesPerView: '4.3',
      coverflowEffect: {
        rotate: 28,       
      }
    }
  }
  });
  var swiper = new Swiper('#slider-news', { 
  pagination: {
    el: '.swiper-pagination',
    clickable: true,
  },
  navigation: {
    nextEl: '.swiper-button-next',
    prevEl: '.swiper-button-prev',
  },
  breakpoints: {
    0: {     
      slidesPerView: 1.1,
      spaceBetween: 15,
      centeredSlides: true,
      slidesPerGroup: 1,
      loop: true,
    },
    400: {     
      slidesPerView: 1.2,
      spaceBetween: 20,    
      slidesPerGroup: 1, 
      centeredSlides: true,
      loop: true,
    },
    520: {     
      slidesPerView: 2,
      spaceBetween: 25,
      slidesPerGroup: 2,
      centeredSlides: false,
      loop: false,
    },   
    800: {     
      slidesPerView: 3,
      spaceBetween: 25,
      slidesPerGroup: 3,
      centeredSlides: false,
      loop: false,
    },
    1060: {     
      slidesPerView: 4,
      centeredSlides: false,
      spaceBetween: 30,
      slidesPerGroup: 3,
      loop: false,
    },
  }
  });

  var burger = document.querySelector('.burger');
  var menu = document.querySelector('.header__mobmenu');
  var closemenu = document.querySelector('.closemenu');
  var body = document.querySelector('body');
  var window = document.querySelector('.window');

  burger.addEventListener('click', function(){
    menu.classList.add('active');  
    window.classList.add('active');  
    body.classList.add('fixed'); 
    
  });

  closemenu.addEventListener('click', function(){
    menu.classList.remove('active');  
    body.classList.remove('fixed');  
    window.classList.remove('active');  

  });
});
