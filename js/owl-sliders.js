$(document).ready(function(){

  //services slider
  $('.serviceSlider').owlCarousel({
    loop:true,
    margin:30,
    nav:false,
    dots:true,

    responsive:{
        0:{
            items:1
        },
        650:{
          items:2
        },
        1020:{
            items:3
        },
        1500:{
            items:4
        }
    }

  })

  //testimonials
  $('.testimonials').owlCarousel({
    loop:true,
    margin:0,
    stagePadding:0,

    responsive:{
        0:{
          items:1,
          margin:10,
          stagePadding:10,
          nav:false,
          dots:true,
        },
        600:{
          items:1,
          margin:50,
          stagePadding:50,
          nav:true,
          dots:false,
        },
        1000:{
          items:1,
          margin:100,
          stagePadding:100,
          nav:true,
          dots:false,
        },
        1500:{
          items:1,
          margin:200,
          stagePadding:200,
          nav:true,
          dots:false,
        }
    }

  })

  //gallery
  $('.gallery-slider-l1').owlCarousel({
    loop:true,
    margin:0,
    stagePadding:0,

    responsive:{
      0:{
        items:1,
        margin:0,
        stagePadding:0,
        nav:false,
        dots:true,
      },
      600:{
        items:1,
        margin:50,
        stagePadding:50,
        nav:true,
        dots:false,
      }
  }

  })

});

