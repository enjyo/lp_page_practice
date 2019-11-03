$(function(){
    $('header a').click(function(){
        var id = $(this).attr('href');
        var position = $(id).offset().top;
        $('html, body').animate({
            'scrollTop': position
        },500);
    });

    $('.characteristic-content').hover(function(){
        $(this).find('.characteristic-detail').slideDown();
    },function(){
        $(this).find('.characteristic-detail').slideUp();
    });

});