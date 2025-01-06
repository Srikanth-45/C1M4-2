(function (global) {
    var dc = {};
  
    // Example function
    dc.loadRandomCategory = function () {
      console.log("loadRandomCategory function called.");
      // Your logic here
    };
  
    // Expose dc to the global scope
    global.$dc = dc;
  })(window);
  
  document.addEventListener("DOMContentLoaded", function () {
    var specialsTile = document.querySelector("#specials-tile");
  
    if (specialsTile) {
      specialsTile.addEventListener("click", function () {
        $dc.loadRandomCategory();
      });
    } else {
      console.error("Specials tile not found in the DOM!");
    }
  });
  