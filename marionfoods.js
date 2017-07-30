var marionApp = angular.module('marionApp', ['ui.bootstrap'])
marionApp.controller('mainCtrl', function mainCtrl($scope) {
    $scope.address = "36B JADE STREET EXTENSION BUENA HILLS GUADALUPE CEBU CITY CEBU PHILIPPINES 6000"
    $scope.setInterval = 3000
    $scope.slides = [
        {
            image: "https://image.ibb.co/k6HKx5/all_Products.jpg"
        },
        {
            image: "https://image.ibb.co/dHQuVQ/otap.jpg"
        },
        {
            image: "https://image.ibb.co/cXpoqQ/rosquillos.jpg"
        },
        {
            image: "https://image.ibb.co/naTQLQ/salvaro.jpg"
        }
    ]
    $scope.popularProducts = [
        {
            name: "Otap",
            image: "https://image.ibb.co/eHHV4k/packedotap.jpg",
            avail: "200g \u2022 100g"
        }, {
            name: "Rosquillos",
            image: "https://image.ibb.co/deDEVQ/packedrosq.jpg",
            avail: "200g \u2022 100g"
        }, {
            name: "Salvaro",
            image: "https://image.ibb.co/bZwZVQ/packedsalvaro.jpg",
            avail: "130g"
        }, {
            name: "Hojaldres",
            image: "https://image.ibb.co/e8BCH5/packedhojaldres.jpg",
            avail: "200g"
        }, 
        {
            name: "Sesame Cookies",
            image: "https://image.ibb.co/ebw1AQ/packedsesamecookies.jpg",
            avail: "200g \u2022 100g"
        }, {
            name: "Galletas",
            image: "https://image.ibb.co/d9wex5/packedgalletas.jpg",
            avail: "200g \u2022 100g"
        }, {
            name: "Patatas",
            image: "https://image.ibb.co/m50TqQ/packedpatatas.jpg",
            avail: "200g \u2022 100g"
        }, {
            name: "Rolling Bayan",
            image: "https://image.ibb.co/gotgAQ/packedrollingbayan.jpg",
            avail: "100g"
        }
    ]
})



function buttonScroll() {
    var y_val = $(window).scrollTop()
    if (y_val < ($('#popular-heading').offset().top - 155)) {
        $('#about-btn, #contact-us-btn').removeClass('navig-btns-scrolled')
        $('#home-btn').addClass('navig-btns-scrolled')
    } else if (y_val >= ($('#about-heading').offset().top - 180) && y_val < ($('#about-heading').offset().top - 145) ) {
        $('#home-btn, #contact-us-btn').removeClass('navig-btns-scrolled')
        $('#about-btn').addClass('navig-btns-scrolled')
    } else if (y_val > ($('#about-heading').offset().top - 145) ) {
        $('#home-btn, #about-btn').removeClass('navig-btns-scrolled')
        $('#contact-us-btn').addClass('navig-btns-scrolled')
    }
}

function main() {
    $('body').fadeIn(1000)
    $('#otap, #rosquillos').animate({'width': '0'}, 0)
    buttonScroll()
    $(window).scroll(buttonScroll)
    $(window).on('resize', function() {
        if ($(window).width() <= 768) {
            $('#address').css('display', 'none')
            $('.navig-btns').addClass('collapsed-li')
        } else {
            $('#address').css('display', 'inline')
            $('.navig-btns').removeClass('collapsed-li')
        }
    })
    $('.sample-fullscreen button').click(function() {
        $('.sample-fullscreen').fadeOut(500)
    })
    $('#contact-us-btn').click(function() {
        $('html, body').animate({scrollTop: $(document).height()}, 1500)
    })
    $('#about-btn').click(function() {
        $('html, body').animate({scrollTop: ($('#about-heading').offset().top - 150)}, 1500)
    })
    $('#home-btn').click(function() {
        $('html, body').animate({scrollTop: 0}, 1500)
    })
    
}

$(document).ready(main)