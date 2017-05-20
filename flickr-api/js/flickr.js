$(document).ready(function() {
  // Executes when any button is clicked.
  $('button').click(function() {
    $("button").removeClass("selected");  // Removes the highlight from all buttons.
    $(this).addClass("selected");         // Adds the highlight to the clicked button.

    var flickerAPI = "http://api.flickr.com/servies/feeds/photos_public.gne?jsoncallback=?";
    var animal = $(this).text();  // Gets the text associated with the clicked button.
    // 'tags' and 'format' are Flickr API query string params.
    var flickrOptions = {
          tags: animal,   // We are associating the tag with the text in the clicked button (ex: "Dog", "Cat" or "Moose").
          format: "json", // Flickr sends XML by default. Change data to JSON format.
    };
    function displayPhotos(data) {

    }
    // Flickr AJAX request
    $.getJSON(flickerAPI, flickerOptions, displayPhotos);
  }); // end click
}); // end ready
