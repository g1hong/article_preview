const information = document.querySelector(".information");
const shareItems = document.querySelector(".share-items");

const desktopShare = document.querySelector(".desktop-share");
// const shareIcon = document.querySelector(".share-icon");

function resizeApply(width) {
  //mobile;
  if (width < 768) {
    desktopShare.classList.remove("show");
    information.classList.remove("show");
    information
      .querySelector(".share-icon")
      .addEventListener("click", function () {
        desktopShare.classList.remove("show");
        information.classList.remove("show");
        information.style.display = "none";
        shareItems.style.display = "flex";
      });
    shareItems
      .querySelector(".share-icon")
      .addEventListener("click", function () {
        shareItems.style.display = "none";
        information.style.display = "flex";
      });
  }
  if (width >= 768) {
    shareItems.style.display = "none";
    information.style.display = "flex";
    information
      .querySelector(".share-icon")
      .addEventListener("click", function (e) {
        shareItems.style.display = "none";
        information.style.display = "flex";

        if (desktopShare.classList.contains("show")) {
          desktopShare.classList.remove("show");
          information.classList.remove("show");
        } else {
          desktopShare.classList.toggle("show");
          information.classList.toggle("show");
        }
      });
  }
}

//     };
// window.onload = function () {
window.onresize = function () {
  let width = window.innerWidth;
  resizeApply(width);
};
window.onload = function () {
  let width = window.innerWidth;
  resizeApply(width);
};
// };

// resizeApply();
// 출처: https://extbrain.tistory.com/120 [확장형 뇌 저장소]
// information.addEventListener("click", function () {
//   if (window.innerWidth < 768) {
//     information.style.display = "none";
//     shareItems.style.display = "flex";
//   }
// });

// shareItems.addEventListener("click", function () {
//   if (window.innerWidth < 768) {
//     shareItems.style.display = "none";
//     information.style.display = "flex";
//   }
// });

// shareIcon.addEventListener("click", function (e) {
//   if (window.innerWidth > 767) {
//     desktopShare.classList.toggle("show");
//     information.classList.toggle("show");
//   }
// });
