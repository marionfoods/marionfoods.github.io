
var app = angular.module('app', ['ui.bootstrap'])

app.directive('carouselShowcase', function () {
  return {
    restrict: 'E',
    templateUrl: 'carousel-showcase.html',
    controller: function () {
      this.setInterval = 3000
      this.slides = [
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
    },
    controllerAs: 'carousel'
  }
})

/* Product class for each product in showcase */
class Product {
  constructor(name, image, availability) {
    this.name = name
    this.image = image
    this.availability = availability
  }
}

app.directive('productsShowcase', function () {
  return {
    restrict: "E",
    templateUrl: 'products-showcase.html',
    controller: function () {
      this.samples = [
        new Product(
          "Otap",
          "https://image.ibb.co/eHHV4k/packedotap.jpg",
          "200g \u2022 100g"
        ),
        new Product(
          "Rosquillos",
          "https://image.ibb.co/deDEVQ/packedrosq.jpg",
          "200g \u2022 100g"
        ),
        new Product(
          "Salvaro",
          "https://image.ibb.co/bZwZVQ/packedsalvaro.jpg",
          "130g"
        ),
        new Product(
          "Hojaldres",
          "https://image.ibb.co/e8BCH5/packedhojaldres.jpg",
          "200g"
        ),
        new Product(
          "Sesame Cookies",
          "https://image.ibb.co/ebw1AQ/packedsesamecookies.jpg",
          "200g \u2022 100g"
        ),
        new Product(
          "Galletas",
          "https://image.ibb.co/d9wex5/packedgalletas.jpg",
          "200g \u2022 100g"
        ),
        new Product(
          "Patatas",
          "https://image.ibb.co/m50TqQ/packedpatatas.jpg",
          "200g \u2022 100g"
        ),
        new Product(
          "Rolling Bayan",
          "https://image.ibb.co/gotgAQ/packedrollingbayan.jpg",
          "100g"
        )
      ]
    },
    controllerAs: 'products'
  }
})
app.directive('contactDetails', function () {
  return {
    restrict: 'E',
    templateUrl: 'contact-details.html',
    controller: function () {
      this.mobile = "+63 918 908 7305"
      this.email = "efigenianicer@yahoo.com"
      this.address = "36B JADE STREET EXTENSION BUENA HILLS GUADALUPE CEBU CITY CEBU PHILIPPINES 6000"
      this.fb = "https://www.facebook.com/profile.php?id=100006588585000"
    },
    controllerAs: 'contact'
  }
})

function main() {
  $('body').fadeIn(1000)
  response()
  $(window).on('resize', response)
  $('#contact-us-btn').click(function () {
    $('html, body').animate({ scrollTop: $(document).height() }, 1500)
  })
  $('#about-btn').click(function () {
    $('html, body').animate({ scrollTop: ($('#about-heading').offset().top - 150) }, 1500)
  })
  $('#home-btn').click(function () {
    $('html, body').animate({ scrollTop: 0 }, 1500)
  })
}

function response() {
  /* Re-arrange layout of navigation bar when viewed in smaller screen size */
  if ($(window).width() <= 650) {
    $('#address').css('display', 'none')
    $('#home-btn, #about-btn').addClass('navig-btns-collapsed')
    $('#contact-us-btn').addClass('contact-us-btn-collapsed')
    $('#logo-container').addClass('logo-collapsed center-block')
    $('ul').addClass('ul-collapsed')
    $('.product-showcase-image').removeClass('product-showcase-image-wide')
    $('#parallelogram-rear, #parallelogram-bottom').addClass('parallelogram-collapsed')
  } else {
    $('#address').css('display', 'inline')
    $('#home-btn, #about-btn').removeClass('navig-btns-collapsed')
    $('#contact-us-btn').removeClass('contact-us-btn-collapsed')
    $('#logo-container').removeClass('logo-collapsed')
    $('ul').removeClass('ul-collapsed')
    $('.product-showcase-image').addClass('product-showcase-image-wide')
    $('#parallelogram-rear, #parallelogram-bottom').removeClass('parallelogram-collapsed')
  }
}

$(document).ready(main)
