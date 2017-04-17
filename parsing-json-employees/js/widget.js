// Employees
// Step 1: Create a XMLHttpRequest Object.
var xhr = new XMLHttpRequest();

// Step 2: Create callback function.
xhr.onreadystatechange = function () {
  if (xhr.readyState === 4) {

    // Convert the responseText string into a JavaScript object.
    var employees = JSON.parse(xhr.responseText);

    // Returns the type of the variable 'employees'.
    // console.log(typeof employees);
    // console.log(employees);

    var statusHTML = '<ul class="bulleted">';

    // Employee loop.
    for (var i = 0; i < employees.length; i += 1) {
      if (employees[i].inoffice === true) {
        statusHTML += '<li class="in">';
      } else {
        statusHTML += '<li class="out">';
      }
      statusHTML += employees[i].name;
      statusHTML += '</li>';
    }
    statusHTML += '</ul>';

    // Select the id 'employeeList' and inject the code placed inside
    // the variable 'statusHTML' to be displayed in the HTML.
    document.getElementById('employeeList').innerHTML = statusHTML;
  }
};

// Step 3: Open a request.
xhr.open('GET', 'data/employees.json');

// Step 4: Send the request.
xhr.send();

// Rooms
// Step 1: Create a XMLHttpRequest Object.
var xhrRooms = new XMLHttpRequest();

// Step 2: Create callback function.
xhrRooms.onreadystatechange = function () {
  if (xhrRooms.readyState === 4) {

    // Convert the responseText string into a JavaScript object.
    var rooms = JSON.parse(xhrRooms.responseText);

    // console.log(rooms);

    var statusHTML2 = '<ul class="bulleted">';

    // Room loop.
    for (var i = 0; i < rooms.length; i += 1) {
      if (rooms[i].available === true) {
        statusHTML2 += '<li class="empty">';
      } else {
        statusHTML2 += '<li class="full">';
      }
      statusHTML2 += rooms[i].room;
      statusHTML2 += '</li>';
    }
    statusHTML2 += '</ul>';

    // Select the id 'roomList' and inject the code placed inside
    // the variable 'statusHTML' to be displayed in the HTML.
    document.getElementById('roomList').innerHTML = statusHTML2;
  }
};

// Step 3: Open a request.
xhrRooms.open('GET', 'data/rooms.json');

// Step 4: Send the request.
xhrRooms.send();
