$(document).ready(function() {
  // Executes when any button is clicked.
  $('button').click(function() {
    $("button").removeClass("selected");  // Removes the highlight from all buttons.
    $(this).addClass("selected");         // Adds the highlight to the clicked button.

    var flickrAPI = "http://api.flickr.com/services/feeds/photos_public.gne?jsoncallback=?";
    var animal = $(this).text();  // Gets the text associated with the clicked button.
    // 'tags' and 'format' are Flickr API query string params.
    var flickrOptions = {
          tags: animal,   // We are associating the tag with the text in the clicked button (ex: "Dog", "Cat" or "Moose").
          format: "json", // Flickr sends XML by default. Change data to JSON format.
    };
    function displayPhotos(data) {
      var photoHTML = '<ul>';
      $.each(data.items, function(i, photo) {
        photoHTML += '<li class="grid-25 tablet-grid-50">';
        photoHTML += '<a href="' + photo.link + '" class="image">';
        photoHTML += '<img src="' + photo.media.m + '"></a></li>';
      });
      photoHTML += '</ul>';
      $('#photos').html(photoHTML);
    }
    // Flickr AJAX request
    $.getJSON(flickrAPI, flickrOptions, displayPhotos);
  }); // end click

  // Executes when any form is submitted.
  $('form').submit(function(evt) {
    evt.preventDefault();
    var flickrAPI = "http://api.flickr.com/services/feeds/photos_public.gne?jsoncallback=?";
    var animal = $('#search').val();  // Gets the text associated with the clicked button.
    // 'tags' and 'format' are Flickr API query string params.
    var flickrOptions = {
          tags: animal,   // We are associating the tag with the text in the clicked button (ex: "Dog", "Cat" or "Moose").
          format: "json", // Flickr sends XML by default. Change data to JSON format.
    };
    function displayPhotos(data) {
      var photoHTML = '<ul>';
      $.each(data.items, function(i, photo) {
        photoHTML += '<li class="grid-25 tablet-grid-50">';
        photoHTML += '<a href="' + photo.link + '" class="image">';
        photoHTML += '<img src="' + photo.media.m + '"></a></li>';
      });
      photoHTML += '</ul>';
      $('#photos').html(photoHTML);
    }
    // Flickr AJAX request
    $.getJSON(flickrAPI, flickrOptions, displayPhotos);
  }); // end click
}); // end ready
