const navigation = () => {

   //ADD STYLE TO STICKY NAV ON SCROLL
   const topNav = document.querySelector('.topNavWrap');
   function stick() {
      if (window.pageYOffset > 20) {
         topNav.classList.add("topNavWrap--sticky")
      } else {
         topNav.classList.remove("topNavWrap--sticky");
      }
   }
   window.onscroll = function() {stick()};


   // OPEN/CLOSE NAVIGATION 
   const burger = document.querySelector('.topNavBurger');
   const closeNav = document.querySelector('.close-nav');
   const sideNav = document.querySelector('.topNavLinks');
   const links = document.querySelectorAll('.navLink');


   const navTransitionTime = 0.5; //seconds - time for the nav to slide in
   const linkAnimationTimeout = 300; //milliseconds,half of the desired time - delay for the nav links to slide in


   const linksNumber = links.length; // how many links in the nav
   const menuInTransitionAnimationTime = linksNumber * linkAnimationTimeout; //milliseconds - time during which the burger can't be clicked , equals the time all links need to slide in
   let menuInTransition = false; // is the navigation in transition


   // open nav 
   burger.addEventListener('click',() => {

      //chanege the variable so the menu can not be closed while the links are transitioning
      menuInTransition = true;

      //change opacity of the close button to 0, will be changed to 1 once all links have transitioned
      closeNav.style.opacity = "0";

      // add transition property to the side nav - add here so all timings can be editted from this file
      sideNav.style.transitionDuration = navTransitionTime+"s";
      sideNav.style.transitionProperty = "all";
      sideNav.style.transitionTimingFunction = "ease";

      // show nav
      // sideNav.style.transform = "translateX(0%)";
      sideNav.classList.add('topNavLinks--open');

      // remove scroll from the body, the wait time is needed to avoid page jumping when the scroll bar disappears, timeout time equals the transition time of the navigation
      setTimeout(function () {
         document.body.style.overflowY = "hidden";
      }, navTransitionTime * 1000);

      //link animation
      links.forEach((link, i) => {
         setTimeout(() => {
            link.classList.add('navLink--show');
         }, i * linkAnimationTimeout + linkAnimationTimeout);
      });

      //after all links are shown - change menu in transition to FALSE and make the close btn visible
      setTimeout(function () {
         menuInTransition = false;
         closeNav.style.opacity = "1";
      }, menuInTransitionAnimationTime)

   });

   // close nav 
   closeNav.addEventListener('click',() => {
         
      // check the menu is still in transition
      if (menuInTransition == false){

         // close nav 
         sideNav.classList.remove('topNavLinks--open');

         // add scroll to the body
         document.body.style.overflowY = "auto";

         //link animation
         links.forEach(link =>
            link.classList.remove('navLink--show')
         );

         // remove transition from the menu - that way there won't be any flashes when resizing
         setTimeout(function () {
            sideNav.style.transitionDuration = "0s";
         }, navTransitionTime * 1000);

      }

   });

   
}

navigation();