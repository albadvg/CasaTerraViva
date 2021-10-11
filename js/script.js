
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




//seleccion idioma
const divIdiomas = document.querySelector('.idioma')
const idioma2 = document.querySelector('.idioma li:nth-child(2)')
const flecha = document.querySelector('.idioma i')


////

function is_touch_enabled() {
    return ( 'ontouchstart' in window ) || 
           ( navigator.maxTouchPoints > 0 ) ||
           ( navigator.msMaxTouchPoints > 0 );
}

function menuIdiomas(){
    
    if(idioma2.classList.contains('visible')){
        idioma2.classList.remove('visible');
        idioma2.classList.add('oculto');
        flecha.classList.remove('rotar')
    } else {
        idioma2.classList.remove('oculto');
        idioma2.classList.add('visible')
        flecha.classList.add('rotar')
    }
}


if ( is_touch_enabled() ) {
    divIdiomas.addEventListener('click', menuIdiomas)
    divIdiomas.addEventListener('blur', menuIdiomas)
} else {
    divIdiomas.addEventListener('mouseover', menuIdiomas)
    divIdiomas.addEventListener('mouseout', menuIdiomas)
}



