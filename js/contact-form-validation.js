const contactFormValidation = () => {
   const contactForm = document.querySelector('.contactForm');

   // inputs 
   const inputs = contactForm.querySelectorAll('.contactFormInput');
   const name = contactForm.querySelector('input[name = "contact_name"]');
   const email = contactForm.querySelector('input[name = "contact-email"]');
   const reason = contactForm.querySelector('select[name = "contact-reason"]');
   const message = contactForm.querySelector('textarea[name = "contact-message"]');

   // error hints 
   const errorHints = contactForm.querySelectorAll('.errorHint');
   const nameError = contactForm.querySelector('.errorHint--name');
   const emailError = contactForm.querySelector('.errorHint--email');
   const reasonError = contactForm.querySelector('.errorHint--reason');
   const messageError = contactForm.querySelector('.errorHint--message');
   const capchaError = contactForm.querySelector('.errorHint--capcha');


   contactForm.addEventListener('submit', (e) =>{

      let errors = 0;

      // remove invalid styling 
      inputs.forEach(input =>
         input.classList.remove('invalidFormInput')
      );

      errorHints.forEach(hint =>
         hint.innerHTML = ""
      );

      //name validation 
      if(name.value === '' || name.value == null){
         errors ++;
         nameError.innerHTML = "Please enter your name";
         name.classList.add('invalidFormInput');
      }

      // emal validation 
      if(email.value === '' || email.value == null){
         errors ++;
         emailError.innerHTML = "Please enter a valid email";
         email.classList.add('invalidFormInput');
      }

      // reason validation 
      if(reason.value == "no"){
         errors ++;
         reasonError.innerHTML = "Please select";
         reason.classList.add('invalidFormInput');
      }

      // message validation 
      if(message.value === '' || message.value == null){
         errors ++;
         messageError.innerHTML = "Please enter your message";
         message.classList.add('invalidFormInput');
      }
      
      // if there are any errors don't submit form 
      if(errors > 0){
         console.log(errors);
         e.preventDefault();
      }

      // RECAPCHA VALIDATION 
      var response = grecaptcha.getResponse();
      if(response.length == 0) 
      { 
         //reCaptcha not verified
         capchaError.innerHTML = "Please prove you are not a robot before submitting";
         e.preventDefault();
         return false;
      }
   })
};

contactFormValidation();


