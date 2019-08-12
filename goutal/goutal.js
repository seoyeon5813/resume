
$(window).on("scroll", function(){
    if($(window).scrollTop() > 80){
        $(".header").addClass("header_active");
    } else {
        $(".header").removeClass("header_active");
    }
});

$(function(){
    var $menu = $('.menu');

    $('.btn_menu').on('click', function(){
        $menu.addClass('active visible');
    });
    $('.btn_x').on('click', function(){
        $menu.removeClass('active visible');
    });
});