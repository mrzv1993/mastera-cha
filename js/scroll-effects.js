$(window).scroll(function () {
    $('.mov').each(function(){
        var titlePos = $(this).offset().top;
        var topOfWindow = $(window).scrollTop();
        if (titlePos < topOfWindow+400) {
            $(this).addClass('rubberBand');
        }
    });
});