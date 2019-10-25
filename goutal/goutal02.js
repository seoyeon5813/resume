$(function(){
    var $menu = $('.menu');

    $('.btn_menu').on('click', function(){
        $menu.addClass('active visible');
    });
    $('.btn_x').on('click', function(){
        $menu.removeClass('active visible');
    });
});