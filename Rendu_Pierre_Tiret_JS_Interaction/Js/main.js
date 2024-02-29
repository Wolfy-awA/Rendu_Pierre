document.addEventListener("DOMContentLoaded", function () {
  const swiper = new Swiper(".mon-slider", {
    loop: true,

    // If we need pagination
    pagination: {
      el: ".swiper-pagination",
    },

    // Navigation arrows
    navigation: {
      nextEl: ".swiper-button-next",
      prevEl: ".swiper-button-prev",
    },
    autoplay: {
      delay: 5000,
    },
  });
});

// function tabNav() {
//   const tabButton = document.querySelectorAll(".tab_button");
//   const tabContent = document.querySelectorAll(".tab_content");
//   console.log(tabContent);
//   tabButton.forEach((button) => {
//     button.addEventListener("click", () => {
//       console.log("click");
//       document.querySelector(".tab_content.active").classList.remove("active");
//       tabButton.forEach((btn) => btn.classList.toggle("active"));
//       document
//         .getElementById(`${button.dataset.button}`)
//         .classList.toggle("active");
//     });
//   });
// }

function tabNav() {
  const tabButton = document.querySelectorAll(".tab_button");
  const tabContent = document.querySelectorAll(".tab_content");
  tabButton.forEach((button) => {
    button.addEventListener("click", () => {
      document.querySelector(".tab_button.active").classList.remove("active");
      document.querySelector(".tab_content.active").classList.remove("active");

      button.classList.add("active");
      document
        .getElementById(`${button.dataset.button}`)
        .classList.add("active");
    });
  });
}

function darkMode() {
  const darkMode = document.querySelector(".darkMode-btn");
  const body = document.querySelector("body");
  const content = document.querySelector(".content");
  const moon1 = document.querySelector(".fa-regular");
  const moon2 = document.querySelector(".fa-solid");

  darkMode.addEventListener("click", () => {
    body.classList.toggle("dark-mode");
    moon1.classList.toggle("active");
    moon2.classList.toggle("active");
    if (document.documentElement.getAttribute("data-theme") == "light") {
      document.documentElement.setAttribute("data-theme", "dark");
    } else {
      document.documentElement.setAttribute("data-theme", "light");
    }
  });
}

document.addEventListener("DOMContentLoaded", function () {
  tabNav();
  darkMode();
});
