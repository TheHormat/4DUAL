const swiper = new Swiper(".swiper", {
  // Optional parameters
  direction: "horizontal",
  loop: true,

  autoplay: {
    delay: 2000,
  },

  slidesPerView: 5,
  spaceBetween: 50,

  // If we need pagination
  pagination: {
    el: ".swiper-pagination",
  },

  // Navigation arrows
  navigation: {
    nextEl: ".swiper-button-next",
    prevEl: ".swiper-button-prev",
  },

  // Responsive breakpoints
  breakpoints: {
    // when window width is >= 200px
    200: {
      slidesPerView: 2,
      spaceBetween: 20,
    },
    // when window width is >= 320px
    320: {
      slidesPerView: 3,
      spaceBetween: 20,
    },
    // when window width is >= 480px
    480: {
      slidesPerView: 4,
      spaceBetween: 30,
    },
    // when window width is >= 1200px
    1200: {
      slidesPerView: 5,
      spaceBetween: 40,
    },
    // when window width is >= 1500px
    1500: {
      slidesPerView: 6,
      spaceBetween: 40,
    },
  },
});


// News Text Truncate
let maxCharac = 110;
let contents = document.querySelectorAll(".content");

contents.forEach(content => {
  if(content.textContent.length < maxCharac) {
    content.nextElementSibling.style.display = "none";
  }
  else {
    let displayText = content.textContent.slice(0, maxCharac);
    let moreText = content.textContent.slice(maxCharac);
    content.innerHTML = `${displayText}<span class = "dots">...</span><span class = "hide more">${moreText}</span> `;
  }
})