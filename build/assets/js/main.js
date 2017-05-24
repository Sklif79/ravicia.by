$(document).ready(function () {

    stickyNav();

    scrollNav();

    mapToggle();

    initMap();

    phoneMask();

    $('a.modalbox').fancybox({
        closeBtn: true,
        padding: 0,
        helpers: {
            overlay: {
                css: {
                    'background': 'rgba(0,0,0,0.5)'
                }
            }
        }
    });
});

//google maps
function initMap() {
    var ravicia = {lat: 53.8506881, lng: 27.682263799999987};
    var map = new google.maps.Map(document.getElementById('map'), {
        zoom: 14,
        center: {lat: 53.8456881, lng: 27.682263799999987}
    });
    var marker = new google.maps.Marker({
        position: ravicia,
        map: map
    });
}

// show/hide map
function mapToggle() {
    $('.overlay-half-blink__btn').on('click', function () {
        $(this).parent().fadeOut(200);
        $('.map-close').fadeTo(200, 1);
    });

    $('.map-close').on('click', function () {
        $(this).fadeTo(0,0);
        $('.overlay-half-blink').fadeIn(200);
    });
}

// scroll to element
function scrollNav() {
    $('.header-top-nav__lnk').on('click', function () {
        var navEl = '.' + $(this).attr('data-link');
        var scrollTop = $(navEl).offset().top - 120;

        $('body, html').animate({scrollTop:scrollTop},500);
    });

    $('.header-top__logo, .footer-logo').on('click', function () {
        $('body, html').animate({scrollTop:0},500);
    })
}

// sticky header
function stickyNav() {
    $('div.header-top').clone().addClass('scroll').appendTo('div#header-top-scroll');
    $(window).scroll(function() {
        console.log($(this).scrollTop())
        if($(this).scrollTop() >= 150) {
            $('.header-top.scroll').addClass('show');
        }
        else{
            $('.header-top.scroll').removeClass('show');
        }
    });
}

function phoneMask(){
    $(".phone-mask").mask("+375 (99) 999-99-99");
}