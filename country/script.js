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

      // Display country information in the console
      countries.forEach(function (country) {
        var name = country.name.common;
        var region = country.region;
        var subRegion = country.subregion;
        var population = country.population;

        console.log(`Name: ${name}, Region: ${region}, Sub-Region: ${subRegion}, Population: ${population}`);
      });
    } else {
      // Display an error message if the request fails
      console.error('Failed to fetch country data. Status code:', xhr.status);
    }
  }
};

// Send the request
xhr.send();
