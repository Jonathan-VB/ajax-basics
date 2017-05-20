$(document).ready(function() {
  // Executes when any button is clicked.
  $('button').click(function() {
    $("button").removeClass("selected");  // Removes the highlight from all buttons.
    $(this).addClass("selected");         // Adds the highlight to the clicked button.
  }); // end click
}); // end ready
