
$("#carousel-rehab").owlCarousel({
    items:4,
    nav:true,
    merge:true,
    dots: false,
    lazyLoad:true,
    responsive: {
        0: {
            items: 1,

        },

        481: {
            items : 2,
        },

        789: {
            items: 3,
        },

        960: {
            items: 4,
        },
    }
});

$(".carousel-estancias").owlCarousel({
    items:1,
    nav:true,
    
});

$('#carousel-cursos').owlCarousel({
    items:3,
    nav:true,
    dots:false,
    responsive: {
        0: {
            items: 1,

        },

        481: {
            items : 1,
        },

        789: {
            items: 2,
        },

        960: {
            items: 3,
        },
    }
});

$(".carousel-entorno").owlCarousel({
    items:1,
    nav:true,
});
