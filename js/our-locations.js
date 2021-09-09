const ourLocations = () => {  

   //select location drop down and btn
   const btn = document.querySelector('.ourLocations__changeSelected');
   const menu = document.querySelector('.ourLocations__locations');

   //select location btns and containers
   const londonBtn = document.querySelector('#london-radio');
   const edBtn = document.querySelector('#edinburgh-radio');
   const ipswBtn = document.querySelector('#ipswich-radio');
   // const gibBtn = document.querySelector('#gibraltar-radio');
   const containers = document.querySelectorAll('.ourOffices');
   const lon = document.querySelector('.ourOffices--London');
   const ed = document.querySelector('.ourOffices--Edinburgh');
   const ipsw = document.querySelector('.ourOffices--Ipswich');
   // const gib = document.querySelector('.ourOffices--Gibraltar');

   // select the go to btns 
   const goToLnd = document.querySelector('.goTo__link--lnd');
   const goToEd = document.querySelector('.goTo__link--ed');
   const goToIpsw = document.querySelector('.goTo__link--ipsw');

   londonBtn.addEventListener('change',() => {
      if(londonBtn.checked){
         containers.forEach((e) => {
            e.style.display = "none";
         });
         lon.style.display = "grid";

         goToLnd.style.display = "block";
         goToEd.style.display = "none";
         goToIpsw.style.display = "none";
      }
   });


   edBtn.addEventListener('change',() => {
      if(edBtn.checked){
         containers.forEach((e) => {
            e.style.display = "none";
         });
         ed.style.display = "grid";

         goToLnd.style.display = "none";
         goToEd.style.display = "block";
         goToIpsw.style.display = "none";
      }
   });
 

   ipswBtn.addEventListener('change',() => {
      if(ipswBtn.checked){
         containers.forEach((e) => {
            e.style.display = "none";
         });
         ipsw.style.display = "grid";

         goToLnd.style.display = "none";
         goToEd.style.display = "none";
         goToIpsw.style.display = "block";
      }
   });

   
   // gibBtn.addEventListener('change',() => {
   //    if(gibBtn.checked){
   //       containers.forEach((e) => {
   //          e.style.display = "none";
   //       });
   //       gib.style.display = "grid";
   //    }
   // });
   

   // open and close location drop down on btn click 
   btn.addEventListener('click',() => {

      // open menu 
      if (btn.classList.contains("ourLocations__changeSelected--closed")) {
         btn.classList.add('ourLocations__changeSelected--open');
         btn.classList.remove('ourLocations__changeSelected--closed');

         menu.style.display = "block";
         menu.style.height =  menu.scrollHeight + "px";
      }

      // close menu 
      else {
         btn.classList.remove('ourLocations__changeSelected--open');
         btn.classList.add('ourLocations__changeSelected--closed');

         menu.style.display = "none";
         menu.style.height =  null;
      }

   });

   // open and close location drop down on window resize
   window.addEventListener('resize',() => {

      let windowWidth = window.innerWidth;

      if(windowWidth > 1200){
         menu.style.display = "block";
         menu.style.height =  menu.scrollHeight + "px";
      }

      else{
         btn.classList.remove('ourLocations__changeSelected--open');
         btn.classList.add('ourLocations__changeSelected--closed');

         menu.style.display = "none";
         menu.style.height =  null;
      }

   });

}

ourLocations();