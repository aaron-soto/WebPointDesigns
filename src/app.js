// SCROLLBAR

$(function () {
  var button = $(".button");

  function switchToNext() {
    var _this = $(this);

    if (_this.hasClass("active")) return false;
    else {
      $(".button.active").removeClass("active");
      _this.addClass("active");
    }
  }

  button.on("click", switchToNext);
});

$(document).ready(function () {
  $("#fullpage").fullpage({
    navigation: true,
    parallax: true,
    parallaxOptions: { type: "cover", percentage: 20, property: "translate" },
    scrollingSpeed: 1500,
    verticalCentered: false,
    easingcss3: "cubic-bezier(0.770, 0.005, 0.275, 1.005)",
  });
});

// NAV
console.clear();

const app = (() => {
  let body;
  let menu;
  let menuItems;

  const init = () => {
    body = document.querySelector("body");
    menu = document.querySelector(".menu-icon");
    menuItems = document.querySelectorAll(".nav__list-item");

    applyListeners();
  };

  const applyListeners = () => {
    menu.addEventListener("click", () => toggleClass(body, "nav-active"));
  };

  const toggleClass = (element, stringClass) => {
    if (element.classList.contains(stringClass))
      element.classList.remove(stringClass);
    else element.classList.add(stringClass);
  };

  init();
})();
