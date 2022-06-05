$('#my-work').owlCarousel({
    items: 4,
    loop: true,
    margin: 20,
    nav: true,
     autoplay: true,
    slideTransition: 'linear',
    autoplayTimeout: 2000,
    autoplaySpeed: 2000,
    autoplayHoverPause: true,
    responsive:{
        0:{
            items:1
        },
        640:{
            items:2
        },
        992:{
            items:3
        },
        1200:{
            items:4
        }
    }
})