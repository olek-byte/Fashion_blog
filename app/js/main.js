$(function () {

    // Fixed header
    let header = $('.header');
    let products = $('.hero');
    let productsH = products.innerHeight();
    let scrollPos = $(window).scrollTop();

    document.addEventListener('scroll', function () {
      scrollPos = $(this).scrollTop();

      if (scrollPos > productsH) {
        header.addClass('fixed');
      } else {
        header.removeClass('fixed');
      }
    });

  $('.js__nav-btn').on('click', function () {
    $('.main-nav__list').toggleClass('active');
    $('.header').toggleClass('active');
    $('body').toggleClass('active');
    $('.menu-btn').toggleClass('active');
  });

  // scrollup
  $('.js__scrollup').click(function () {
    $("html, body").animate({
      scrollTop: 0
    }, 1000);
  })
  $(window).scroll(function () {
    if ($(this).scrollTop() > 200) {
      $('.js__scrollup').fadeIn();
    }
    else {
      $('.js__scrollup').fadeOut();
    }
  });

  //slick slider
  $('.hero__inner').slick({
    slidesToShow: 1,
    slidesToScroll: 1,
    dots: false,
    arrows: false,
    autoplay: true,
    autoplaySpeed: 2000  
  });


  $('.slider-bottom__list').slick({
    slidesToShow: 6,
    slidesToScroll: 1,
    dots: false,
    arrows: false,
    autoplay: true,
    autoplaySpeed: 2000,      
    responsive: [{
        breakpoint: 1800,
        settings: {
          slidesToShow: 5,
          slidesToScroll: 1,
          arrows: false,
        }
      },

      {
        breakpoint: 1500,
        settings: {
          slidesToShow: 4,
          slidesToScroll: 1,
          arrows: false,
        }
      },

      {
        breakpoint: 1199,
        settings: {
          slidesToShow: 3,
          slidesToScroll: 1,
          arrows: false,
        }
      },
      {
        breakpoint: 991,
        settings: {
          slidesToShow: 2,
          slidesToScroll: 1,
          arrows: false
        }
      },
      {
        breakpoint: 767,
        settings: {
          slidesToShow: 1,
          slidesToScroll: 1,
          arrows: false,
        }
      }
    ]
  });

});