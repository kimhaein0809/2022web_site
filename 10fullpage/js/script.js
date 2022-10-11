$("#fullpage").fullpage({
    anchors:["m1st","m2st","m3st","m4st","m5st"],
    navigation:true,
    navigationPosition:"fp-left",
    afterLoad:function(anchorslink,index){
      console.log(anchorslink,index);
      if(index == 1){
        $(".page1 .txt1").addClass("move");
        $(".page1 .txt2").addClass("move");
        $(".page1 .btn").addClass("move");
      }else{
        $(".page1 .txt1").removeClass("move");
        $(".page1 .txt2").removeClass("move");
        $(".page1 .btn").removeClass("move");
      }
      if(index == 2){
        $(".page2 .txt3").addClass("move");
        $(".page2 .btn").addClass("move");
      }else{
        $(".page2 .txt3").removeClass("move");
        $(".page2 .btn").removeClass("move");
      }
      if(index == 3){
        $(".page3 li").addClass("move");
      }else{
        $(".page3 li").removeClass("move");
      }
      if(index == 4){
        $(".page4 .txtWrap").addClass("move");
        $(".page4 .swiper").addClass("move");
      }else{
        $(".page4 .txtWrap").removeClass("move");
        $(".page4 .swiper").removeClass("move");
      }
      if(index == 5){
        $(".page5 .contact-top").addClass("move");
        $(".page5 .contact-btm").addClass("move");
        $(".page5 .conMap").addClass("move");
      }else{
        $(".page5 .contact-top").removeClass("move");
        $(".page5 .contact-btm").removeClass("move");
        $(".page5 .conMap").removeClass("move");
      }
    }
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