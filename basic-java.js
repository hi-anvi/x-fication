document.addEventListener("DOMContentLoaded", function() {
  var centre = document.getElementById("centre");
  centre.addEventListener("animationend", function() {
            centre.remove(); // Removes element from the DOM
  });
});
