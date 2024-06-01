const toggleBtn = document.querySelector(".toggle-open");
const toggleClose = document.querySelector(".toggle-close");
const aside = document.querySelector(".aside");
const main = document.querySelector("#main");


// TOGGLE BTNS

function togglebtns(){

  toggleBtn.addEventListener("click",function(){
    aside.classList.add("show-aside")
    main.style.filter="blur(5px)";
  })
  
  toggleClose.addEventListener("click",function(){
    aside.classList.remove("show-aside")
    main.style.filter="blur(0px)";
  })
}
togglebtns();

// TOGGLE BTNS


// AUTOMATIC SLIDER ---> SWIPER JS

function automaticSlider(){

  var swiper1 = new Swiper(".automaticSlider", {
    spaceBetween: 30,
    centeredSlides: true,
    autoplay: {
      delay: 2500,
      disableOnInteraction: false,
    },
    pagination: {
      el: ".swiper-pagination",
      clickable: true,
    },
    breakpoints:{
      600:{
        navigation: {
          nextEl: ".swiper-button-next",
          prevEl: ".swiper-button-prev",
        },
      },

    }
  });
}
automaticSlider(); 
// AUTOMATIC SLIDER ---> SWIPER JS


// TRENDING CARD SLIDER ---> SWIPER JS

function trending(){

  var swiper = new Swiper(".categories .mySwiper", {
    slidesPerView: 5,
    spaceBetween: 50,
    navigation:{
      nextEl:".next-btn",
      prevEl:".prev-btn",
    },
      
    breakpoints: {
      250:{
        slidesPerView:1,
        spaceBetween:80,
      },
      400: {
        slidesPerView: 2,
        spaceBetween: 100,
      },
      630: {
        slidesPerView: 3,
        spaceBetween: 40,
      },
      800:{
        slidesPerView: 4,
        spaceBetween: 40,
      },
      950: {
        slidesPerView: 5,
        spaceBetween: 50,
      },
    }
  });
}
trending();

// TRENDING CARD SLIDER ---> SWIPER JS


// YOUTUBE LINKS SLIDER ---> SWIPER JS

function ytContainer(){

  var swiper2 = new Swiper(".ytParent", {
    slidesPerView: 4,
    spaceBetween: 50,
    navigation:{
      nextEl:".next-btn2",
      prevEl:".prev-btn2",
    },
    breakpoints:{
      250:{
        slidesPerView:1,
        spaceBetween:10,
      },
      400:{
        slidesPerView: 2,
        spaceBetween: 50,
      },
      600:{
        slidesPerView: 3,
        spaceBetween: 40,
      },
      700: {
        slidesPerView: 3,
        spaceBetween: 40,
      },
      950:{
        slidesPerView:4,
        spaceBetween:50,
      }
    }
  });
  
}

ytContainer();

// YOUTUBE LINKS SLIDER ---> SWIPER JS


// BOOKS SLIDER ---> SWIPER JS

function books(){

var swiper3 = new Swiper(".bookSwipper", {
  slidesPerView: 4,
  spaceBetween: 10,
  pagination: {
    el: ".swiper-pagination1",
    clickable: true,
  },
  navigation:{
    nextEl:".next-btn3",
    prevEl:".prev-btn3",
  },
  breakpoints:{
    250:{
      slidesPerView:1,
      spaceBetween:10,
    },
    450:{
      slidesPerView: 2,
      spaceBetween: 10,
    },
    700: {
      slidesPerView: 3,
      spaceBetween: 30,
    },
    950:{
      slidesPerView:5,
      spaceBetween:40,
    }
  }
});
}
 books();

// BOOKS SLIDER ---> SWIPER JS


// LOCOMOTIVE JS 

  const locoScroll = new LocomotiveScroll({
    el: document.querySelector("#main"),
    smooth: true,
  })

// LOCOMOTIVE JS 

