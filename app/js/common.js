$(function() {

    var owl = $('.owl-carousel');
    owl.owlCarousel({
        items:1,
        loop:true,
        margin: 0,
        smartSpeed: 500,
        //autoplay: true,
        nav: true,
        autoplayTimeout: 20000,
        autoplayHoverPause: false
    })

    // $('.owl-carousel .composition-text').on('mouseleave',function(e){
    //     $(this).closest('.owl-carousel').trigger('play.owl.autoplay');
    // })

    // $('.owl-carousel .composition-text').on('mouseenter',function(e){
    //     $(this).closest('.owl-carousel').trigger('stop.owl.autoplay');
    // })

});
