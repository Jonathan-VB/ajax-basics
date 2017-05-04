$(document).ready(function() {
  var url = "./data/employees.json";
  $.getJSON(url, function(response) {
    var statusHTML = '<ul class="bulleted">';
    $.each(response, function(index, employee) {
      if (employee.inoffice === true) {
        statusHTML += '<li class="in">';
      } else {
        statusHTML += '<li class="out">'
      }
      statusHTML += employee.name + '</li>';
    }); // end each
    statusHTML += '</ul>';
    $('#employeeList').html(statusHTML);
  }); // end getJSON

  var url = "./data/rooms.json";
  $.getJSON(url, function(response) {
    var statusHTML = '<ul class="bulleted">';
    $.each(response, function(index, room) {
      if (room.available === true) {
        statusHTML += '<li class="empty">';
      } else {
        statusHTML += '<li class="full">'
      }
      statusHTML += room.room + '</li>';
    }); // end each
    statusHTML += '</ul>';
    $('#roomList').html(statusHTML);
  }); // end getJSON
}); // end ready
