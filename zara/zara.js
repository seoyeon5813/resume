
$(window).on("scroll", function(){
    if($(window).scrollTop() > 80){
        $(".header").addClass("header_active");
    } else {
        $(".header").removeClass("header_active");
    }
});
