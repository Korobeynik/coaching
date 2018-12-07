// Adds and removes body class depending on screen width.
function screenClass() {
    if($(window).innerWidth() > 960) {
        $('.service-grid').removeClass('owl-carousel');
    } else {
        $('.service-grid').addClass('owl-carousel');
            var owl2 = $('.service-grid');
            owl2.owlCarousel({
                items:1,
                loop:true,
                margin: 0,
                smartSpeed: 500,
                //autoplay: true,
                nav: true,
                autoplayTimeout: 20000,
                autoplayHoverPause: false
            });
    }
}

// Fire.
screenClass();

// And recheck when window gets resized.
$(window).bind('resize',function(){
    screenClass();
});

$(function() {

    $('.slider-settings-1').click(function() {
        $('.slider .owl-dots button.owl-dot:nth-child(1)').trigger('click');
    });
    $('.slider-settings-2').click(function() {
        $('.slider .owl-dots button.owl-dot:nth-child(2)').trigger('click');
    });
    $('.slider-settings-3').click(function() {
        $('.slider .owl-dots button.owl-dot:nth-child(3)').trigger('click');
    });
    $('.slider-settings-4').click(function() {
        $('.slider .owl-dots button.owl-dot:nth-child(4)').trigger('click');
    });

    //$('select').styler();

    var owl = $('.slider');
    owl.owlCarousel({
        items:1,
        loop:true,
        margin: 0,
        smartSpeed: 500,
        //autoplay: true,
        nav: true,
        autoplayTimeout: 20000,
        autoplayHoverPause: false
    });

    var owlReview = $('.reviews-slider');
        owlReview.owlCarousel({
        items:2,
        loop:true,
        margin: 30,
        smartSpeed: 500,
        //autoplay: true,
        nav: true,
        autoplayTimeout: 20000,
        autoplayHoverPause: false,
        responsive : {
            // breakpoint from 0 up
            0 : {
                 items:1
            },
            // breakpoint from 480 up
            480 : {
                 items:2
            }
        }
    })

    // $('.owl-carousel .composition-text').on('mouseleave',function(e){
    //     $(this).closest('.owl-carousel').trigger('play.owl.autoplay');
    // })

    // $('.owl-carousel .composition-text').on('mouseenter',function(e){
    //     $(this).closest('.owl-carousel').trigger('stop.owl.autoplay');
    // })

});
