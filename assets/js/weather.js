var APIKey = "01ca9f9b934a40c31918c2ee0f5d52e4";
var colors = ["#65CC1B","#FEDE31","#FBA700","#E70074","#9572FF"];
var test;
function getWeather(city) {
    var queryURL = "https://api.openweathermap.org/data/2.5/weather?q=" + city + "&appid=" + APIKey;
    $.ajax({
        url: queryURL,
        method: "GET"
    }).then(function (response) {
        $('#city').html(response.name)
        $('#date').html(moment().format('LL'))
        var img = document.createElement('img');
        $(img).attr('src', 'http://openweathermap.org/img/wn/' + response.weather[0].icon + '.png');
        $('#weatherEmoji').html(img)
    
        $('#temp').html(kToF(response.main.temp) + '℉')
        $('#humidity').html(response.main.humidity + "%")
        $('#windSpeed').html(response.wind.speed + " MPH")
        getUVIndex(response.coord.lat, response.coord.lon)
    
    });
}

function getUVIndex(lat, lon) {
    var queryURL = "https://api.openweathermap.org/data/2.5/uvi?appid=" + APIKey + "&lat=" + lat + "&lon=" + lon;
    // We then created an AJAX call
    $.ajax({
        url: queryURL,
        method: "GET"
    }).then(function (response) {
        
        test = response;
        var uvValue = response.value;
        $('#uvIndex').html(uvValue);
        uvValue = Math.floor(uvValue);
        var uvColor;
        
        if(uvValue <= 2) {
            uvColor = colors[0];
        }
        else if (uvValue <= 5) {
            uvColor = colors[1];
        }
        else if (uvValue <= 7) {
            uvColor = colors[2];
        }
        else if (uvValue <= 10) {
            uvColor = colors[3];
        }
        else {
            uvColor = colors[4];
        }
        $('#uvIndex').attr('style', 'background-color: ' + uvColor + ";")
    });
}
function kToF(k) {
    return Math.round(cToF(kToC(k))*100)/100;
}
function kToC(k) {
    return k - 273.15;
}
function cToF(c) {
    return c * 1.8 + 32;
}
getWeather('Sacramento');