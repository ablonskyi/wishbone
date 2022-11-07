$('.owl-carousel').owlCarousel({
    loop:true,
    margin:0,
    nav:true,
    navText: [ '', ' ' ],
    autoplay: false,
    autoplayTimeout:2000,
    responsive:{
        0:{
            items:1,
            autoplay: false,
        },
        992:{
            items:2,
            autoplay: true,
        },
        1000:{
            items:3,
            loop: false
        }
    }
});
$( function() {
    $( "#dialog" ).dialog({
        autoOpen: false,
        show: {
            effect: "fade",
            duration: 500
        },
        hide: {
            effect: "fade",
            duration: 500
        },
        height: 200,
        width: 400
    });
    $( "#opener" ).on( "click", function() {
        $( "#dialog" ).dialog("open");
    });
} );