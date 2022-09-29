$("#fullpage").fullpage({
    anchors:["m1st","m2st","m3st","m4st","m5st"],
    navigation:true,
    navigationPosition:"fp-left"
})
var swiper = new Swiper(".mySwiper", {
    slidesPerView: 3,
    centerPadding: '60px',
    spaceBetween: 0,
    navigation: {
      nextEl: ".swiper-button-next",
      prevEl: ".swiper-button-prev",
    },
    breakpoints: {
      0: {
        slidesPerView: 1,
        spaceBetween: 0
      },
      640: {
        slidesPerView: 1,
        spaceBetween: 0
      },
      768: {
        slidesPerView: 2,
        spaceBetween: 30
      },
      1024: {
        slidesPerView: 3,
        spaceBetween: 30
      }
    }
  });
  var swiper = new Swiper(".mySwiper1", {
    direction: "vertical",
    pagination: {
      el: ".swiper-pagination",
      clickable: true,
    },
  });
  var swiper = new Swiper(".mySwiper2", {
    slidesPerView: "auto",
    spaceBetween: 30,
    autoplay: {
      delay: 2000,
    },
    effect: 'fade',
    fadeEffect: {
      crossFade: true
    },
    pagination: {
      el: ".swiper-pagination",
      clickable: true,
    },
  });
  AOS.init();


  let on = "1"

  $(".shareWrap").click(function(){
    if( on == "1" ){
      $("ul").addClass("view");
      on = "2"
    }else{
      $("ul").removeClass("view");
      on = "1";
    }
  })