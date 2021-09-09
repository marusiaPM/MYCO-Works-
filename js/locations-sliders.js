$('.locationsSecondarySlider').slick({
   slidesToShow:1,
   slidesToScroll: 1,
   dots: false,
   arrows: false,
   fade: true,
   asNavFor: '.locationsNavSlider'
});

$('.locationsNavSlider').slick({
   slidesToShow:7,
   slidesToScroll: 1,
   dots: false,
   arrows: false,
   centerMode: true,
   centerPadding: '0px',
   focusOnSelect: true,
   asNavFor: '.locationsSecondarySlider',

   responsive: [
   {
      breakpoint: 1750,
      settings: {
         slidesToShow: 5
      }
   },
   {
      breakpoint: 1310,
      settings: {
         slidesToShow: 3
      }
   },
   {
      breakpoint: 830,
      settings: {
         slidesToShow: 2
      }
   }
   ,
   {
      breakpoint: 570,
      settings: {
         slidesToShow: 1
      }
   }
   ]
});

$('.locationNavArrow--right').click(function(){
   $('.locationsNavSlider').slick('slickNext');
});

$('.locationNavArrow--left').click(function(){
   $('.locationsNavSlider').slick('slickPrev');
});