const hamburgerMenu = document.querySelector(".navigation");
const dropdownMenu = document.querySelector(".navigation__dropdown");

hamburgerMenu.addEventListener("click", function () {
  if (dropdownMenu.style.display === "block") {
    dropdownMenu.style.display = "none";
  } else {
    dropdownMenu.style.display = "block";
  }
});
