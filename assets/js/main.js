const btn_sun = document.querySelector(".header__sun");

btn_sun.addEventListener("click", () => {
  document.body.classList.toggle("dark-mode");
  btn_sun.querySelector(".sun").style.display = document.body.classList.contains("dark-mode") ? "none" : "inline";
  btn_sun.querySelector(".moon").style.display = document.body.classList.contains("dark-mode") ? "inline" : "none";
});

