// Step 1: Create a XMLHttpRequest Object.
var xhr = new XMLHttpRequest();

// Step 2: Create callback function.
xhr.onreadystatechange = function () {
  if (xhr.readyState === 4) {
    console.log(xhr.responseText);
  }
};

// Step 3: Open a request.
xhr.open('GET', 'data/employees.json');

// Step 4: Send the request.
xhr.send();
