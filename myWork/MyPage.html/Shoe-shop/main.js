$(document).ready(function () {

    $('.menu-button').click(function () {
        $('.nav-menu').toggle();
    });
   
    $('.login-button').click(function () {
        $('.login-form').toggle();
    });

    $('.product-photo').on('mouseenter', event => {
        $(event.currentTarget).addClass('photo-active')
    }).on('mouseleave', event => {
        $(event.currentTarget).removeClass('photo-active')
    });

    $('.more-details-button').click(function (event) {
        $(event.currentTarget).parent().parent().next().toggle();
    });

});
