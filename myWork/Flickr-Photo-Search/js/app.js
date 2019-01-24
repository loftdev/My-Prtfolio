$(document).ready(function () {


    $('form').submit(function (evt) {
        evt.preventDefault();
        var $searchField = $('#search');
        var $submitField = $('#submit');

        $searchField.prop("disabled", true);
        $submitField.attr("disabled", true).val("Searching...");

        var flickerAPI = "http://api.flickr.com/services/feeds/photos_public.gne?jsoncallback=?";
        var inputField = $searchField.val();
        var flickrOptions = {
            tags: inputField,
            format: "json"
        };
        function displayPhotos(data) {
            var photoHTML = '<ul>';
            $.each(data.items, function (i, photo) {
                photoHTML += '<li class="grid-25 tablet-grid-50">';
                photoHTML += '<a href="' + photo.link + '" class="image">';
                photoHTML += '<img src="' + photo.media.m + '"></a></li>';
            }); // end each
            photoHTML += '</ul>';
            $('#photos').html(photoHTML);
            $searchField.prop("disabled", false);
            $submitField.attr("disabled", false).val("Search");

        }
        $.getJSON(flickerAPI, flickrOptions, displayPhotos);

    }); // end click

}); // end ready