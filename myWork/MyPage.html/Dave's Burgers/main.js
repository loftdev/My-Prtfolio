$(document).ready(function () {

    $('.menu-nav').click(function () {
        $('.menu').toggle();
        $('.menu-nav').toggleClass('nav-highlight');
        $('.menu').on('mouseleave', function () {
            $('.menu').hide();
            $('.menu-nav').removeClass('nav-highlight');
        })
    });

    $('.nutrition-nav').click(function () {
        $('.nutrition-contents').toggle();
        $('.nutrition-nav').toggleClass('nav-highlight');
        $('.nutrition-contents').on('mouseleave', function () {
            $('.nutrition-contents').hide();
            $('.nutrition-nav').removeClass('nav-highlight');
        })
    });

    $('.order-nav').click(function () {
        $('.order-form').toggle();
        $('.order-nav').toggleClass('nav-highlight');
        $('.order-form').on('mouseleave', function () {
            $('.order-form').hide();
            $('.order-nav').removeClass('nav-highlight');
        })
    });

    $('.location-nav').click(function () {
        $('.location-map').toggle();
        $('.location-nav').toggleClass('nav-highlight');
        $('.location-map').on('mouseleave', function () {
            $('.location-map').hide();
            $('.location-nav').removeClass('nav-highlight');
        })
    });

    

    $('.nav span').on('mouseenter', event => {
        $(event.currentTarget).addClass('nav-highlight')
    }).on('mouseleave', event => {
        $(event.currentTarget).removeClass('nav-highlight')
    });

});