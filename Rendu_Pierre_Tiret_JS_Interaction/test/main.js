const darkToggle = document.querySelector(".toggle");
darkToggle.addEventListener("click", () => {
  if (document.documentElement.getAttribute("data-theme") == "light") {
    document.documentElement.setAttribute("data-theme", "dark");
  } else {
    document.documentElement.setAttribute("data-theme", "light");
  }
});

const pinkToggle = document.querySelector(".pinkToggle");
pinkToggle.addEventListener("click", () => {
  if (document.documentElement.getAttribute("data-theme") == "pink") {
    document.documentElement.setAttribute("data-theme", "dark");
  } else {
    document.documentElement.setAttribute("data-theme", "pink");
  }
});
