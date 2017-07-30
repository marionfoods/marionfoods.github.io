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
function main() {
    $('body').fadeIn(1000)
    $(window).on('resize', function() {
        if ($(window).width() <= 650) {
            $('#address').css('display', 'none')
            $('#home-btn, #about-btn').addClass('navig-btns-collapsed')
            $('#contact-us-btn').addClass('contact-us-btn-collapsed')
            $('#logo-container').addClass('logo-collapsed center-block')
            $('ul').addClass('ul-collapsed')
            $('.product-showcase-image').removeClass('product-showcase-image-wide')
            $('body').css('background-image', 'none')
            $('#parallelogram-rear, #parallelogram-bottom').addClass('parallelogram-collapsed')
        } else {
            $('#address').css('display', 'inline')
            $('#home-btn, #about-btn').removeClass('navig-btns-collapsed')
            $('#contact-us-btn').removeClass('contact-us-btn-collapsed')
            $('#logo-container').removeClass('logo-collapsed')
            $('ul').removeClass('ul-collapsed')
            $('.product-showcase-image').addClass('product-showcase-image-wide')
            $('body').css('background-image', 'url("https://image.ibb.co/bGaiPk/backgroundwallpaper.jpg")')
            $('#parallelogram-rear, #parallelogram-bottom').removeClass('parallelogram-collapsed')
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
