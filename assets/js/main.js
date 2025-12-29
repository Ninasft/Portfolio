const btn_sun = document.querySelector(".header__sun");

btn_sun.addEventListener("click", () => {
  document.body.classList.toggle("dark-mode");
  btn_sun.querySelector(".sun").style.display = document.body.classList.contains("dark-mode") ? "none" : "inline";
  btn_sun.querySelector(".moon").style.display = document.body.classList.contains("dark-mode") ? "inline" : "none";
});

const btn_notify = document.querySelector(".alert-button");
btn_notify.addEventListener("click", () => {
  alert("Berhasil! Anda akan mendapatkan notifikasi ketika development selesai");
});

const btn_email = document.querySelector(".contact-card.email");
btn_email.addEventListener("click", () => {
  const email = "fatimah28nina@gmail.com";
  const subject = "Hello from Portfolio";
  const body = "Hi Nina, I'd like to discuss a project with you.";
  
  window.location.href = `mailto:${email}?subject=${encodeURIComponent(subject)}&body=${encodeURIComponent(body)}`;
});


const headerbtn= document.querySelector('.header__bars');
const mobileNav = document.querySelector('.mobile-nav');
const mobileLinks = document.querySelectorAll('.mobile-nav__link');
// State
let isMobileNavOpen = false;

headerbtn.addEventListener("click", () => {
  isMobileNavOpen = !isMobileNavOpen;
  if (isMobileNavOpen) { 
    mobileNav.style.display = 'flex';
    document.body.style.overflowY = 'hidden'; 
  }else{
    mobileNav.style.display = 'none';
    document.body.style.overflowY = 'auto';
  }
}
);

mobileLinks.forEach(link => {
  link.addEventListener('click', () => {
    isMobileNavOpen = false; 
    mobileNav.style.display='none';
    document.body.style.overflowY='auto';
  })
})

const mobileSun = document.querySelector(".mobile-nav__sun");
mobileSun.addEventListener("click", () => {
  document.body.classList.toggle("dark-mode");
  mobileSun.querySelector(".sun").style.display = document.body.classList.contains("dark-mode") ? "none" : "inline";
  mobileSun.querySelector(".moon").style.display = document.body.classList.contains("dark-mode") ? "inline" : "none";
});


