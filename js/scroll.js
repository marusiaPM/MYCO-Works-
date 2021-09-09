// scroll function for the header in the secondary pages 
function scrollDown() {
   const header = document.querySelector('.headerWrap');
   let headerHeight = header.offsetHeight;
   let scroll = headerHeight;

   window.scrollTo({
      top: scroll, 
      left: 0, 
      behavior: 'smooth'
   });
}

// scroll function for the header in the home page 
function scrollDown1() {
   const header = document.querySelector('.headerWrap');
   let headerHeight = header.offsetHeight;
   let scroll = headerHeight - 60;

   window.scrollTo({
      top: scroll, 
      left: 0, 
      behavior: 'smooth'
   });
}

// make scroll scroll to too button visible
document.addEventListener('scroll', function(e) {
   const btn = document.querySelector('.scrollToTop');
   yOffset = window.pageYOffset;

   if(yOffset > 300){
      btn.style.opacity = "1";
   }
   else{
      btn.style.opacity = "0";
   }
});

// scroll function for the header in the home page 
function scrollToTop() {
   window.scrollTo({
      top: 0, 
      left: 0, 
      behavior: 'smooth'
   });
}