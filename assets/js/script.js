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
    addValue(currentCity)
    if (values.indexOf(value) != -1) {
        return;
    }
    newCity(currentCity)
})