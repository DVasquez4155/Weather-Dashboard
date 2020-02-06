var values = getValues('Weather-Dashboard')
var citiesContainer = $('#cities');
$(values).each(function(index) {
    newCity(values[index])
})
function newCity(cityName) {
    var newCity = document.createElement('a');
    $(newCity)
    .addClass('row')
    .html(cityName)
    .on('click', function () {
        getWeather($(this).html())
    });
    citiesContainer.append(newCity);
}
$('#search').on('click', function() {
    var currentCity = $('#cityForm').val();
    getWeather(currentCity);
    addValue('Weather-Dashboard',currentCity)
    if (values.indexOf(currentCity) == -1) {
        return;
    }
    newCity(currentCity)
})