$(document).ready(function () {

    $('.nav-contents').on('mouseleave', event => {
        $(event.currentTarget).toggle();
    });

    $('.menu-nav').click(function () {
        $('.menu').toggle();
        $('.nav-contents').toggle();
    });

    $('.nutrition-nav').click(function () {
        $('.nutrition-contents').toggle();
    });

    $('.order-nav').click(function () {
        $('.order-form').toggle();
    });

    $('.location-nav').click(function () {
        $('.location-map').toggle();
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