// Step 1: Create a XMLHttpRequest Object.
var xhr = new XMLHttpRequest();

// Step 2: Create callback function.
xhr.onreadystatechange = function () {
  if (xhr.readyState === 4) {

    // Convert the responseText string into a JavaScript object.
    var employees = JSON.parse(xhr.responseText);

    // Returns the type of the variable 'employees'.
    // console.log(typeof employees);
    console.log(employees);

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
