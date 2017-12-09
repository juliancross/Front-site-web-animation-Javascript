$(document).ready(function() {

    $(window).scroll(toto);
    new WOW().init();


    /// DEBUT FUNCTION MENU STICKY

    function stickyMenu() {
        var scrollTop = $(document).scrollTop();
        var height = $('.menuSticky').height();
        var header = $('header').height() - height;

        if (scrollTop >= header) {
            $('.menuSticky').fadeIn(500);
        } else {
            $('.menuSticky').fadeOut(500);
        }

        $('.menuSticky a[href^="#"]').each(function() {
            var href = $(this).attr('href');
            var position = $(href).position().top;

            if (scrollTop >= position - height && scrollTop < position + $(href).height()) {
                $('.menuSticky a[href^="#"]').removeClass('active');
                $(this).addClass('active');
                var left = $(this).position().left;
                var width = $(this).width() / 2;
                var logo = $('.demiLogo').width() / 2;
                $('.demiLogo').css('left', left + width - logo);
            }
        });
    }


    ///ANIMATION CAROUSSEL

    var widthLi = $('.section4 li').outerWidth();
    var nbrLi = $('.section4 ul li').length;
    $('.section4 ul').width(nbrLi * widthLi);

    var timer = setInterval(carousel, 1000);

    function carousel() {
        $('.section4 .slider ul').animate({ left: -widthLi }, 1000, //étape 1    
            function() {

                $('.section4 ul li:last').after($('.section4 ul li:first'));
                $('.section4 ul').css({ left: 0 });
            }
        ).delay(1000)
    }

    $(".section4 ul").hover(
        function() {
            clearInterval(timer);
        },
        function() {
            timer = setInterval(carousel, 1000);
        }
    );
});