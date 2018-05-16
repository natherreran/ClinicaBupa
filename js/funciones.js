$('.carousel').carousel({
    interval: 2000
})

$('.owl-carousel').owlCarousel({
    center: true,
    items:2,
    loop:true,
    margin:10,
    nav: true,
    dots: true,
    responsive:{
        0:{
            items:1,
            nav:false,
            dots: true
        },
        600:{
            items:3,
            nav:false
        },
        1000:{
            items:4,
            nav:true
        }
    }
});


$('.submenu').hide();
$('.item').mouseenter(function() {
  $('.submenu').hide();
  $(this).children('.submenu').show();
})

// Funciones efectos mobile

$('.menu-bar').click(function(){
    $('#menu-movil').addClass('menu_active');
    $('body').addClass('no-scrolling');
});
$('.menu-bar-hide').click(function(){
    $('#menu-movil').removeClass('menu_active');
    $('body').removeClass('no-scrolling');
});

//Funcion search input

$('.icon-search').click(function() {
    $('.search-input').toggleClass('search-hide');
})

// Funciones Post

$(".txt-post").text(function(index, currentText) {
    return currentText.substr(0, 60);
});
