var centre = document.getElementById("centre");
var disappear = function() {
  centre.style.display = "none";
};
centre.addEventListener("animationend", disappear);
