$(document).ready(function () {

    /*
    $('.nav-contents').on('mouseleave', event => {
        $(event.currentTarget).toggle();
    });
    */

    $('.menu-nav').click(function () {
        $('.menu').toggle();
        $('.menu-nav').toggleClass('nav-highlight');
    });

    $('.nutrition-nav').click(function () {
        $('.nutrition-contents').toggle();
        $('.nutrition-nav').toggleClass('nav-highlight');
    });

    $('.order-nav').click(function () {
        $('.order-form').toggle();
        $('.order-nav').toggleClass('nav-highlight');
    });

    $('.location-nav').click(function () {
        $('.location-map').toggle();
        $('.location-nav').toggleClass('nav-highlight');
    });

    

    $('.nav span').on('mouseenter', event => {
        $(event.currentTarget).addClass('nav-highlight')
    }).on('mouseleave', event => {
        $(event.currentTarget).removeClass('nav-highlight')
    });

    /*$
    ('.nav').click(function (event) {
        $(event.currentTarget).parent().parent().next().toggle();
    });
    */

});