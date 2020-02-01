var values = getValues();
function getValues() {
    var retrievedObject = localStorage.getItem('values');
    if (retrievedObject == null || retrievedObject == undefined) {
        return [];
    }
    return JSON.parse(retrievedObject);
}
function updateValues() {
    localStorage.setItem('values', JSON.stringify(values));
}
function addValue(value) {
    if (values.indexOf(value) != -1) {
        return;
    }
    values.push(value);
    updateValues()
}