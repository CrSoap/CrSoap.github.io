
document.addEventListener("DOMContentLoaded", function() {
    
    var barraNavegacion = document.querySelector(".barra-navegacion");

    window.addEventListener("scroll", function() {
      var scrollPos = window.scrollY;
  
      if (scrollPos > 170) {
        barraNavegacion.classList.add("cambio-color");
        barraNavegacion.classList.add("cambio-color");
      } else {
        barraNavegacion.classList.remove("cambio-color");
      }
    });
  });
  