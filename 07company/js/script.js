console.log("test")

$(".navbar>ul>li").hover(function(){
    $(this).addClass("on");
},function(){
    $(this).removeClass("on");
});

$(".toggle").click(function(){
    $(".navbarClone").css("right",0)
    $(".overlay").show();
})
$(".overlay").click(function(){
    $(".navbarClone").css("right","-100%")
    $(".overlay").hide();
})

$(".navbar>ul").clone().appendTo(".mMenu")

$(".menu>li>a").click(function(e){
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

$(".lang>div").click(function(){
    let i = $(this).index();
    $(".lang>div").removeClass("active");
    $(this).addClass("active");
})

$(window).scroll(function(){
    let scrollY = window.pageYOffset;

    if( scrollY > 300 ){
        $("#header").addClass("fixed");
    }else{
        $("#header").removeClass("fixed");
    }
    $(".scroll").html(parseInt(scrollY))
})


// $(document).ready(function(){
//     $('.slide').bxSlider({
//         controls:false,
//         auto:true,
//         mode:'fade'
//     });
//     $(".next").click(function(){
//         slide.goToNextSlide();
//     });

//     $(".prev").click(function(){
//         slide.goToPrevSlide();
//     });
// });


// let view = true;
// $(".toggle").click(function(){
//     if( view == true){
//         $(".topMenu").addClass("active");
//         $(".toggle").addClass("active");
//         view = false;
//     }else{
//         $(".topMenu").removeClass("active");
//         $(".toggle").removeClass("active");
//         view = true;
//     }
// })