console.log("test")

$(".navbar>ul>li").hover(function(){
    $(this).addClass("on");
},function(){
    $(this).removeClass("on");
});


$(".navbar>ul").clone().appendTo(".mMenu")

$(".mMenu>.menu>li>a").click(function(e){
    e.preventDefault();
    $(".menu>li>a").parent().find(".submenu").slideUp() //#3
    if( $(this).hasClass("active")){  //#4
        $(".menu>li>a").removeClass("active");
        
    }else{
        $(this).parent().find(".submenu").slideDown();
        $(".menu>li>a").removeClass("active");
        $(this).addClass("active")

    }
    
})
$(".lang>.kor").addClass("active")
$(".lang>div").click(function(){
    let i = $(this).index();
    $(".lang>div").removeClass("active");
    $(this).addClass("active");
})





$(window).scroll(function(){
    let scrollY = window.pageYOffset;
    
    if( scrollY > 300 ){
        $("#header").addClass("fixed");
        $(".navbarWrap>h1").addClass("fixed");
        $(".navbar>ul>li>a").addClass("fixed");
        $(".kor").addClass("fixed");
        $(".eng").addClass("fixed");
        $(".toggle div").addClass("fixed");
    }else{
        $("#header").removeClass("fixed");
        $(".navbarWrap>h1").removeClass("fixed");
        $(".navbar>ul>li>a").removeClass("fixed");
        $(".kor").removeClass("fixed");
        $(".eng").removeClass("fixed");
        $(".toggle div").removeClass("fixed");
    }
    $(".scroll").html(parseInt(scrollY))
})
$(document).ready(function(){
  $(".youtube").colorbox({
      iframe:true,
      innerWidth:1120,
      innerHeight:630
  })
});



  var swiper = new Swiper(".mySwiper", {
    slidesPerView: 3,
    spaceBetween: 0,
    navigation: {
      nextEl: ".swiper-button-next",
      prevEl: ".swiper-button-prev",
    },
    pagination: {
      el: ".swiper-pagination",
      clickable: true,
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
        spaceBetween: 0
      },
      1024: {
        slidesPerView: 3,
        spaceBetween: 0
      }
    }
  });

        let view = true;
        $(".overlay").click(function(){
            $(".navbarClone").css("right","-100%")
            $(".overlay").hide();
            $(".toggle").removeClass("active");
        })
        
        $(".navbarClone").css("right","-100%");
        $(".overlay").hide();
        
        $(".toggle").click(function(){
            if( view == true){
                $(".navbarClone").css("right",0)
                $(".toggle").addClass("active");
                $(".overlay").show();
                view = false;
            }else{
                $(".navbarClone").css("right","-100%")
                $(".toggle").removeClass("active");
                $(".overlay").hide();
        view = true;
    }
})
let params = new URLSearchParams(location.search);
console.log(params.get("submenu"))


function tab(){
    $(".tab li").click(function(){
        let i = $(this).index();
        $(".tab li").removeClass("active");
        $(this).addClass("active")

        $(".content>div").hide().eq(i).show()
    })
}


function views(i){
    if( i != null){
        $(".tab li").removeClass("active").eq(i).addClass("active");
        $(".content>div").hide().eq(i).show();
        tab();
    }else{
        tab();
    }
}

views( params.get("submenu") )