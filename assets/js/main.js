document.addEventListener("DOMContentLoaded", () => { 
    // Ini pakai CLASS (titik di depan)
    const carousel = document.querySelector(".carousel"); 
    const nextBtn = document.querySelector(".btn--next"); 
    const prevBtn = document.querySelector(".btn--prev"); 

    const cardWidth = 330 + 16; // width + gap 
   
    nextBtn.addEventListener("click", () => { 
      carousel.scrollBy({ 
        left: cardWidth, 
        behavior: "smooth" 
      }); 
    }); 
   
    prevBtn.addEventListener("click", () => { 
      carousel.scrollBy({ 
        left: -cardWidth, 
        behavior: "smooth" 
      }); 
    }); 
  });