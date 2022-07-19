console.log("test")





let view = true;
$(".toggleMenu").click(function(){
    if( view == true){
        $(".topMenu").addClass("active");
        $(".toggleMenu").addClass("active");
        view = false;
    }else{
        $(".topMenu").removeClass("active");
        $(".toggleMenu").removeClass("active");
        view = true;
    }
})