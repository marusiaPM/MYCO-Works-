// faq 
const faq = () => {

   // get all FAQs
   const faq = document.querySelectorAll('.faq');
   const firstFAQ = faq[0];

   // for every faq box
   faq.forEach(function (faq) {
      
      //get all FAQs again - to be used to close whatever other questions is already open
      const allFaq = document.querySelectorAll('.faq');
      // get all answers within the clicked faq box 
      const a = faq.querySelector('.answer');
      
      // when the faq box ix clicked
      faq.addEventListener('click', e => {

         // if the box is already open 
         if (faq.classList.contains("faq--open")) {
            a.style.height =  null;
            a.style.paddingTop = null;
            a.style.paddingBottom = null;

            setTimeout(function () {
               faq.classList.remove('faq--open');
               a.style.display = "none";
            }, 200);
            
         }

         // if the box is closed 
         else{

            // close all other boxes 
            allFaq.forEach(function (faq) {
               const a = faq.querySelector('.answer');
            
               if (faq.classList.contains("faq--open")) {
                  a.style.height =  null;
                  a.style.paddingTop = null;
                  a.style.paddingBottom = null;
      
                  setTimeout(function () {
                     faq.classList.remove('faq--open');
                     a.style.display = "none";
                  }, 200);
               }
         
            });

            faq.classList.add('faq--open');
            a.style.display = "block";
            a.style.height =  a.scrollHeight + "px";
            a.style.paddingTop = "30px";
            a.style.paddingBottom = "20px";
         }
         
      })

   });

   window.onload=function(){
      firstFAQ.click();
   };


}
faq();