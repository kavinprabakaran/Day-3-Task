// Create a new XMLHttpRequest object
var xhr = new XMLHttpRequest();

// Define the API endpoint
var apiUrl = 'https://restcountries.com/v3.1/all';

// Set up the request
xhr.open('GET', apiUrl, true);

// Define the callback function to handle the response
xhr.onreadystatechange = function () {
  // Check if the request is complete
  if (xhr.readyState === 4) {
    // Check if the request was successful (status code 200)
    if (xhr.status === 200) {
      // Parse the JSON response
      var countries = JSON.parse(xhr.responseText);

      // Display country flags in the console
      countries.forEach(function (country) {
        var flag = country.flags.png;
        console.log(flag);
      });
    } else {
      // Display an error message if the request fails
      console.error('Failed to fetch country data. Status code:', xhr.status);
    }
  }
};

// Send the request
xhr.send();
