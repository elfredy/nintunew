$(document).ready(function () {
  $(".mainslider__center").owlCarousel({
    loop: true,
    margin: 0,
    nav: false,
    items: 1,
    dots: false,
    autoplay:true, 
    animateIn: 'animate__fadeIn',
    animateOut: 'animate__fadeOutDown',
  });
  $(".productoverview__slider").owlCarousel({
    loop: true,
    margin: 0,
    nav: false,
    items: 1,
    dots: false,
    autoplay:false,
    animateIn: 'animate__zoomIn',
    animateOut: 'animate__fadeOutDown',
    mouseDrag:false,
    
  });
  $(".features__slider").owlCarousel({
    loop: true,
    margin: 0,
    nav: true ,
    items: 1,
    dots: false,
    autoplay:true,
    animateIn: 'animate__slideInUp',
    animateOut: 'animate__slideOutUp',
  });
  $(".advantage__slider").owlCarousel({
    loop: true,
    margin: 45,
    nav: true,
    items: 1,
    dots: false,
    autoplay:true,
    
    responsive:{
      0:{
        items:1,
        margin:0

      },
      800:{
        items:2,
        margin:0

      },
      1000:{
        items:3

      },
      1300:{
        nav: true,
        items:4

      }
    }
  });
  $(".process__slider").owlCarousel({
    loop: true,
    margin: 100,
    nav: false,
    items: 1,
    dots: false,
    autoplay:false,
    responsive:{
      0:{
        items:1,
        nav:true

      },
      800:{
        items:2,
        nav:true

      },
      1000:{
        items:3,
        nav:true

      },
      1300:{
        items:4,
        nav:false,
        mouseDrag:false,
        

      }
    }
  });
});
