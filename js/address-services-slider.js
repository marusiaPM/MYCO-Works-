$('.servicesBtns').slick({
   slidesToShow:4,
   slidesToScroll: 1,
   dots: false,
   arrows: false,
   centerMode: false,
   centerPadding: '0px',
   focusOnSelect: true,
   asNavFor: '.servicesWrap',

   responsive: [
   {
      breakpoint: 1100,
      settings: {
         slidesToShow: 3
      }
   },
   {
      breakpoint: 850,
      settings: {
         slidesToShow: 2
      }
   },
   {
      breakpoint: 550,
      settings: {
         slidesToShow: 1
      }
   }
   ]

});

$('.servicesNav__btn--next').click(function(){
   $('.servicesBtns').slick('slickNext');
});

$('.servicesNav__btn--prev').click(function(){
   $('.servicesBtns').slick('slickPrev');
});

$('.servicesWrap').slick({
   slidesToShow: 1,
   slidesToScroll: 1,
   arrows: false,
   fade: true,
   adaptiveHeight: true,
   asNavFor: '.servicesBtns'
});