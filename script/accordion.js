const accordians = document.querySelectorAll(".accordion-container")


accordians.forEach((e) => {
    e.addEventListener("click" , function (){
        console.log(this)
     const data = this.nextElementSibling;
      data.classList.toggle("show") ;
      const icon =  this.querySelector("svg");
      if (icon) {
        icon.classList.toggle("animate");
        console.log(icon);
      }

    });
});




