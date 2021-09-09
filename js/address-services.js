const addressServices = () => {
   // get the navigation btns and the arrows 
   const btns = document.querySelectorAll('.servicesBtns__btn');
   const next = document.querySelector('.servicesNav__btn--next');
   const prev = document.querySelector('.servicesNav__btn--prev');

   // get the service boxes 
   const servicesWrap = document.querySelector('.servicesWrap');
   const services = servicesWrap.querySelectorAll('.service');

   // btns on click 
   btns.forEach((btn, i)  => {
      
      btn.addEventListener('click', e => {
         
         // remove active class from all siblings and add it to the clicked btn 
         btns.forEach(e => e.classList.remove('servicesBtns__btn--active'));
         btn.classList.add('servicesBtns__btn--active');

         // remove the active class from all the service boxes and add it to the one service box that has the same index as the pressed btn 
         services.forEach(e => e.classList.remove('service--active'));
         services[i].classList.add('service--active');

      })

   });

   //next on click 
   next.addEventListener('click', () => {
      
      // get the button that is currently active 
      const activeBtn = document.querySelector('.servicesBtns__btn--active');

      let activeIndex = 0;
      const countBtns = btns.length; //how many btns in total

      // find out what is the index of the active btn 
      for (let i = 0; i < countBtns; ++i) {
         if (activeBtn === btns[i]) {
            activeIndex = i;
            break;
         }
      }

      // find out what is the index of the next button 
      let nextIndex = activeIndex + 1;

      // remove the active class from the current button and box 
      btns[activeIndex].classList.remove('servicesBtns__btn--active');
      services[activeIndex].classList.remove('service--active');

      // check if the net index is higher or lower than the number of buttons and add the active class to the apropriate box and button
      if(nextIndex < countBtns){
         btns[nextIndex].classList.add('servicesBtns__btn--active');
         services[nextIndex].classList.add('service--active');
      }
      else{
         btns[0].classList.add('servicesBtns__btn--active');
         services[0].classList.add('service--active');
      }
      
   });

   //next on click 
   prev.addEventListener('click', () => {
      
      // get the button that is currently active 
      const activeBtn = document.querySelector('.servicesBtns__btn--active');

      let activeIndex = 0;
      const countBtns = btns.length;

      // find out what is the index of the active btn 
      for (let i = 0; i < countBtns; ++i) {
         if (activeBtn === btns[i]) {
            activeIndex = i;
            break;
         }
      }

      // find out what is the index of the next button 
      let prevIndex = activeIndex - 1;
      let lastIndex = countBtns - 1;

      // remove the active class from the current button and box 
      btns[activeIndex].classList.remove('servicesBtns__btn--active');
      services[activeIndex].classList.remove('service--active');

      // check if the net index is higher or lower than the number of buttons and add the active class to the apropriate box and button
      if(activeIndex > 0){
         btns[prevIndex].classList.add('servicesBtns__btn--active');
         services[prevIndex].classList.add('service--active');
      }
      else{
         btns[lastIndex].classList.add('servicesBtns__btn--active');
         services[lastIndex].classList.add('service--active');
      }
      
   });


}

addressServices();