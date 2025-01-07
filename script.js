(function (global) {
    var dc = {};
  
    // Simulate an array of menu categories with short names
    var categories = ["Lunch", "Dinner", "Sushi", "Desserts", "Drinks"];
  
    // Function to pick a random category short name
    function getRandomCategoryShortName() {
      var randomIndex = Math.floor(Math.random() * categories.length);
      return categories[randomIndex];
    }
  
    // Function to dynamically update the Specials tile
    function updateSpecialsTile() {
      var randomCategoryShortName = getRandomCategoryShortName();
      var specialsTile = document.querySelector('[onclick*="loadMenuItems"]');
  
      if (specialsTile) {
        specialsTile.setAttribute(
          "onclick",
          `$dc.loadMenuItems('${randomCategoryShortName}');`
        );
      }
    }
  
    // Initialize the page when DOM is fully loaded
    document.addEventListener("DOMContentLoaded", function () {
      updateSpecialsTile();
    });
  
    // Function to load menu items (dummy implementation for demonstration)
    dc.loadMenuItems = function (categoryShortName) {
      alert("Loading items for category: " + categoryShortName);
      // You can replace this with AJAX calls or server-side rendering logic
    };
  
    // Expose the dc object to the global scope
    global.$dc = dc;
  })(window);
  