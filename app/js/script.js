const information = document.querySelector(".information");
const shareItems = document.querySelector(".share-items");

const desktopShare = document.querySelector(".desktop-share");
const shareIcon = document.querySelector(".share");

information.addEventListener("click", function () {
  if (window.innerWidth < 768) {
    information.style.display = "none";
    shareItems.style.display = "flex";
  }
});

shareItems.addEventListener("click", function () {
  if (window.innerWidth < 768) {
    shareItems.style.display = "none";
    information.style.display = "flex";
  }
});

shareIcon.addEventListener("click", function (e) {
  if (window.innerWidth > 767) {
    desktopShare.classList.toggle("show");
  }
});
