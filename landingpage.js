var flag = 0;
  toggle.addEventListener("click", function () {
    if(flag%2===1){

      document.body.classList.remove("light");
      document.querySelector('header').classList.remove("lightheader")
      document.querySelector('footer').classList.remove("lightfooter")
      document.querySelector('.dropdown-menu').classList.remove("lightdropdown-menu")
      document.querySelectorAll('*').forEach(function(element) {
         element.style.color = 'white';
      });
      document.querySelector('nav').classList.remove("lightheader")
      toggle.classList.remove("lightmode")
      toggle.innerHTML = "LIGHT MODE"
   }
   else {
      document.body.classList.add("light");
      document.querySelector('header').classList.add("lightheader")
      document.querySelector('footer').classList.add("lightfooter")
      document.querySelector('.dropdown-menu').classList.add("lightdropdown-menu")
      document.querySelectorAll('*').forEach(function(element) {
       element.style.color = 'black';
     });
     toggle.classList.add("lightmode")
     toggle.innerHTML = "DARK MODE"
      }
      flag++;
  });
