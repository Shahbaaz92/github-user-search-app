const stats = document.getElementById("stats");
const searchBox = document.getElementById("search-box");
const toggle = document.getElementById("toggle");
const bodyBox = document.getElementById("body-box");
const hero = document.getElementById("hero");
const heading = document.getElementById("heading");
const switchImage = document.getElementById("switch-mode");
const switchText = document.getElementById("switch-text");
const heading2 = document.querySelectorAll("h2");
toggle.addEventListener("click", function () {
  if (toggle.classList.contains("dark-toggle")) {
    switchText.innerText = "LIGHT";
    switchImage.setAttribute("src", "assets/icon-moon.svg");
    bodyBox.classList.remove("dark-mode");
    bodyBox.classList.add("light-mode");
    searchBox.classList.remove("dark-box");
    searchBox.classList.add("light-box");
    hero.classList.remove("dark-box");
    hero.classList.add("light-box");
    heading.classList.add("light-text-secondary");
    stats.classList.remove("dark-mode");
    stats.classList.add("light-mode");
    toggle.classList.remove("dark-toggle");
    toggle.classList.add("light-toggle");
    heading2.forEach((item) => item.classList.add("light-text-secondary"));
  } else if (toggle.classList.contains("light-toggle")) {
    switchText.innerText = "DARK";
    switchImage.setAttribute("src", "assets/icon-sun.svg");
    bodyBox.classList.add("dark-mode");
    bodyBox.classList.remove("light-mode");
    searchBox.classList.add("dark-box");
    searchBox.classList.remove("light-box");
    hero.classList.add("dark-box");
    hero.classList.remove("light-box");
    heading.classList.remove("light-text-secondary");
    stats.classList.add("dark-mode");
    stats.classList.remove("light-mode");
    toggle.classList.add("dark-toggle");
    toggle.classList.remove("light-toggle");
    heading2.forEach((item) => item.classList.remove("light-text-secondary"));
  }
});
