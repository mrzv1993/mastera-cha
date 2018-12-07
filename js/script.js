//navigation
// Cache selectors
var lastId,
  topMenu = $("#top-menu"),
  topMenuHeight = topMenu.outerHeight() - 0,
  // All list items
  menuItems = topMenu.find("a"),
  // Anchors corresponding to menu items
  scrollItems = menuItems.map(function() {
    var item = $($(this).attr("href"));
    if (item.length) {
      return item;
    }
  });

// Bind click handler to menu items
// so we can get a fancy scroll animation
menuItems.click(function(e) {
  var href = $(this).attr("href"),
    offsetTop = href === "#" ? 0 : $(href).offset().top - topMenuHeight + 1;
  $('html, body').stop().animate({
    scrollTop: offsetTop
  }, 300);
  e.preventDefault();
});

// Bind to scroll
$(window).scroll(function() {
  // Get container scroll position
  var fromTop = $(this).scrollTop() + topMenuHeight;

  // Get id of current scroll item
  var cur = scrollItems.map(function() {
    if ($(this).offset().top < fromTop)
      return this;
  });
  // Get the id of the current element
  cur = cur[cur.length - 1];
  var id = cur && cur.length ? cur[0].id : "";

  if (lastId !== id) {
    lastId = id;
    // Set/remove active class
    menuItems
      .parent().removeClass("nav__link_active")
      .end().filter("[href='#" + id + "']").parent().addClass("nav__link_active");
  }
})
//navigation-2

$(document).ready(function(){
    $('.mobile-menu__link').on('click', function(e){
        e.preventDefault();
       
        showSection($(this).attr('href'), true);
    })
    
    
    showSection(window.location.hash, false);
});// -- ready_end

$(window).scroll(function(){
    checkSection();
});// --scroll_end

function showSection(section, isAnimate){
    var
       direction = section.replace(/#/,''),
       reqSection = $('.section').filter('[data-section="' + direction +'"]'),
        reqSectionPos = reqSection.offset().top;
    if(isAnimate){
        $('body,html').animate({scrollTop: reqSectionPos},700);
    }else{
        $('body,html').scrollTop(reqSectionPos);
    }
        
}

function checkSection(){
    $('.section').each(function(){
        var
           $this = $(this),
            topEdge = $this.offset().top - 200,
            bottonEdge = topEdge + $this.height(),
            wScroll = $(window).scrollTop();
        if(topEdge < wScroll && bottonEdge > wScroll){
            var
               currentId = $this.data('section');
            }
    })
}

//slider
$(document).ready(function() {
    $('#images-slider').owlCarousel({
        loop: true, //Зацикливаем слайдер
        margin: 0, //Отступ от элемента справа в 0px
        nav: true, //Отключение навигации
        dots: true,
        navElement: "div",
        navText: ["<img src='/images/svg/nav-left-1.svg'>", "<img src='/images/svg/nav-right-1.svg'>"],
        navClass: ['prev-1','next-1'],
        dots: true,
        navContainerClass: "nav-images",
        smartSpeed:500, //Время движения слайда
        responsive:{ //Адаптивность. Кол-во выводимых элементов при определенной ширине.
            0:{
                items:1
            },
            600:{
                items:1
            },
            1000:{
                items:1
            }
        }
    });
    $('#images-slider-2').owlCarousel({
        loop: true, //Зацикливаем слайдер
        margin: 0, //Отступ от элемента справа в 0px
        nav: true, //Отключение навигации
        dots: true,
        navElement: "div",
        navText: ["<img src='/images/svg/main-nav-left.svg'>", "<img src='/images/svg/main-nav-right.svg'>"],
        navClass: ['reviews-btn-left','reviews-btn-right'],
        dots: true,
        mouseDrag: false,
        touchDrag: false,
        navContainerClass: "nav-images",
        smartSpeed:500, //Время движения слайда
        responsive:{ //Адаптивность. Кол-во выводимых элементов при определенной ширине.
            0:{
                items:1
            },
            600:{
                items:1
            },
            1000:{
                items:1
            }
        }
    });
    $('#images-slider-3').owlCarousel({
        loop: true, //Зацикливаем слайдер
        margin: 0, //Отступ от элемента справа в 0px
        nav: true, //Отключение навигации
        dots: true,
        navElement: "div",
        navText: ["<img src='/images/svg/nav-left-1.svg'>", "<img src='/images/svg/nav-right-1.svg'>"],
        navClass: ['prev-1','next-1'],
        dots: true,
        navContainerClass: "nav-images",
        smartSpeed:500, //Время движения слайда
        responsive:{ //Адаптивность. Кол-во выводимых элементов при определенной ширине.
            0:{
                items:1
            },
            600:{
                items:1
            },
            1000:{
                items:1
            }
        }
    });
    $('#images-slider-4').owlCarousel({
        loop: true, //Зацикливаем слайдер
        margin: 0, //Отступ от элемента справа в 0px
        nav: true, //Отключение навигации
        dots: true,
        navElement: "div",
        navText: ["<img src='/images/svg/nav-left-1.svg'>", "<img src='/images/svg/nav-right-1.svg'>"],
        navClass: ['prev-1','next-1'],
        dots: true,
        navContainerClass: "nav-images",
        smartSpeed:500, //Время движения слайда
        responsive:{ //Адаптивность. Кол-во выводимых элементов при определенной ширине.
            0:{
                items:1
            },
            600:{
                items:1
            },
            1000:{
                items:1
            }
        }
    });
    $('#images-slider-5').owlCarousel({
        loop: true, //Зацикливаем слайдер
        margin: 0, //Отступ от элемента справа в 0px
        nav: true, //Отключение навигации
        dots: true,
        navElement: "div",
        navText: ["<img src='/images/svg/nav-left-1.svg'>", "<img src='/images/svg/nav-right-1.svg'>"],
        navClass: ['prev-1','next-1'],
        dots: true,
        navContainerClass: "nav-images",
        smartSpeed:500, //Время движения слайда
        responsive:{ //Адаптивность. Кол-во выводимых элементов при определенной ширине.
            0:{
                items:1
            },
            600:{
                items:1
            },
            1000:{
                items:1
            }
        }
    });
    $('#images-slider-6').owlCarousel({
        loop: true, //Зацикливаем слайдер
        margin: 0, //Отступ от элемента справа в 0px
        nav: true, //Отключение навигации
        dots: true,
        navElement: "div",
        navText: ["<img src='/images/svg/nav-left-1.svg'>", "<img src='/images/svg/nav-right-1.svg'>"],
        navClass: ['prev-1','next-1'],
        dots: true,
        navContainerClass: "nav-images",
        smartSpeed:500, //Время движения слайда
        responsive:{ //Адаптивность. Кол-во выводимых элементов при определенной ширине.
            0:{
                items:1
            },
            600:{
                items:1
            },
            1000:{
                items:1
            }
        }
    });
    $('#images-slider-7').owlCarousel({
        loop: true, //Зацикливаем слайдер
        margin: 0, //Отступ от элемента справа в 0px
        nav: true, //Отключение навигации
        dots: true,
        navElement: "div",
        navText: ["<img src='/images/svg/nav-left-1.svg'>", "<img src='/images/svg/nav-right-1.svg'>"],
        navClass: ['prev-1','next-1'],
        dots: true,
        navContainerClass: "nav-images",
        smartSpeed:500, //Время движения слайда
        responsive:{ //Адаптивность. Кол-во выводимых элементов при определенной ширине.
            0:{
                items:1
            },
            600:{
                items:1
            },
            1000:{
                items:1
            }
        }
    });
    $('#images-slider-8').owlCarousel({
        loop: true, //Зацикливаем слайдер
        margin: 0, //Отступ от элемента справа в 0px
        nav: true, //Отключение навигации
        dots: true,
        navElement: "div",
        navText: ["<img src='/images/svg/nav-left-1.svg'>", "<img src='/images/svg/nav-right-1.svg'>"],
        navClass: ['prev-1','next-1'],
        dots: true,
        navContainerClass: "nav-images",
        smartSpeed:500, //Время движения слайда
        responsive:{ //Адаптивность. Кол-во выводимых элементов при определенной ширине.
            0:{
                items:1
            },
            600:{
                items:1
            },
            1000:{
                items:1
            }
        }
    });
    $('#images-slider-9').owlCarousel({
        loop: true, //Зацикливаем слайдер
        margin: 0, //Отступ от элемента справа в 0px
        nav: true, //Отключение навигации
        dots: true,
        navElement: "div",
        navText: ["<img src='/images/svg/nav-left-1.svg'>", "<img src='/images/svg/nav-right-1.svg'>"],
        navClass: ['prev-1','next-1'],
        dots: true,
        navContainerClass: "nav-images",
        smartSpeed:500, //Время движения слайда
        responsive:{ //Адаптивность. Кол-во выводимых элементов при определенной ширине.
            0:{
                items:1
            },
            600:{
                items:1
            },
            1000:{
                items:1
            }
        }
    });
   
});





//ham-menu

var hamMenu = document.querySelector('.hamburger');
var ham = document.querySelectorAll('.line');
var bY = document.querySelector('body');
var mobileMenu = document.querySelector('.mobile-menu');
var header = document.querySelector('.header');

hamMenu.addEventListener('click', function(e){
    e.preventDefault;
    mobileMenu.classList.add('mobile-menu_active');
    bY.classList.add('ovhid');
});

var mobLink = document.querySelectorAll('.mobile-menu__link');

mobLink[0].addEventListener('click', function(e){
    e.preventDefault();
   mobileMenu.classList.remove('mobile-menu_active');
    ham[0].classList.remove('ham-1_active');
    ham[1].classList.remove('none');
    ham[2].classList.remove('ham-3_active');
    bY.classList.remove('ovhid');
});
mobLink[1].addEventListener('click', function(e){
    e.preventDefault();
   mobileMenu.classList.remove('mobile-menu_active');
    ham[0].classList.remove('ham-1_active');
    ham[1].classList.remove('none');
    ham[2].classList.remove('ham-3_active');
    bY.classList.remove('ovhid');
});
mobLink[2].addEventListener('click', function(e){
    e.preventDefault();
   mobileMenu.classList.remove('mobile-menu_active');
    ham[0].classList.remove('ham-1_active');
    ham[1].classList.remove('none');
    ham[2].classList.remove('ham-3_active');
    bY.classList.remove('ovhid');
});
mobLink[3].addEventListener('click', function(e){
    e.preventDefault();
   mobileMenu.classList.remove('mobile-menu_active');
    ham[0].classList.remove('ham-1_active');
    ham[1].classList.remove('none');
    ham[2].classList.remove('ham-3_active');
    bY.classList.remove('ovhid');
});
mobLink[4].addEventListener('click', function(e){
    e.preventDefault();
   mobileMenu.classList.remove('mobile-menu_active');
    ham[0].classList.remove('ham-1_active');
    ham[1].classList.remove('none');
    ham[2].classList.remove('ham-3_active');
    bY.classList.remove('ovhid');
});
mobLink[5].addEventListener('click', function(e){
    e.preventDefault();
   mobileMenu.classList.remove('mobile-menu_active');
    ham[0].classList.remove('ham-1_active');
    ham[1].classList.remove('none');
    ham[2].classList.remove('ham-3_active');
    bY.classList.remove('ovhid');
});
mobLink[6].addEventListener('click', function(e){
    e.preventDefault();
   mobileMenu.classList.remove('mobile-menu_active');
    ham[0].classList.remove('ham-1_active');
    ham[1].classList.remove('none');
    ham[2].classList.remove('ham-3_active');
    bY.classList.remove('ovhid');
});
mobLink[7].addEventListener('click', function(e){
    e.preventDefault();
   mobileMenu.classList.remove('mobile-menu_active');
    ham[0].classList.remove('ham-1_active');
    ham[1].classList.remove('none');
    ham[2].classList.remove('ham-3_active');
    bY.classList.remove('ovhid');
});
// //navigation


 //модальное окно   
//
var overlay = document.querySelector('.modal-overlay');
var modal = document.querySelector('.modal');
var modalBtn = document.querySelector('.modal-btn');
var body = document.querySelector('body');
var modalClose = document.querySelector('.modal__close');


$('.modalBtn').click(function(e){
    e.preventDefault();
    $('.modal-overlay').addClass('modal-overlay_active');
    $('body').addClass('ovhid');
})
$('.mobile-menu__close').click(function(e) {
    e.preventDefault();
    $('.mobile-menu').removeClass('mobile-menu_active');
    $('body').removeClass('ovhid');
});


var t = $('.main-sliderr');

t.slick({
  dots: false,
  infinite: true,
  speed: 300,
  swipe: false,
  slidesToShow: 1,
  autoplay: false,
  autoplaySpeed: 4000,
    fade: true,
    prevArrow: $('.mn-left'),
    nextArrow: $('.mn-right'),
  cssEase: 'linear'
});
t.on('beforeChange', function(event, slick, currentSlide, nextSlide) {
	var s = t.find('[data-slick-index="'+nextSlide+'"]').attr('data');
	t.slick('setOption','autoplaySpeed',s);
});
