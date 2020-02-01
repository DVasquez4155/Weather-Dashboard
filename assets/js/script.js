var APIKey = "01ca9f9b934a40c31918c2ee0f5d52e4";

// Here we are building the URL we need to query the database
var queryURL = "https://api.openweathermap.org/data/2.5/weather?q=Bujumbura,Burundi&appid=" + APIKey;

// We then created an AJAX call
$.ajax({
    url: queryURL,
    method: "GET"
}).then(function (response) {
    console.log(response)
    // Create CODE HERE to Log the queryURL
    // Create CODE HERE to log the resulting object
    // Create CODE HERE to transfer content to HTML
    // Create CODE HERE to calculate the temperature (converted from Kelvin)
    // Hint: To convert from Kelvin to Fahrenheit: F = (K - 273.15) * 1.80 + 32
    // Create CODE HERE to dump the temperature content into HTML

});