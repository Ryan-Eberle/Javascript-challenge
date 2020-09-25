//create variable for the data.js file
var events = data;

// button variable using d3.select
var button = d3.select("#filter-btn")



var tbody = d3.select("tbody")

//load sighting data onto html tbody create as function
function tableBuild(data) {
    data.forEach((alienEvent) =>{
    var row = tbody.append("tr");
    Object.entries(alienEvent).forEach(([key,value]) =>{
        var cell = row.append("td");
        cell.text(value);
    });
});
};
tableBuild(events);


button.on("click", function dateInput(ufoEvent){
    tbody.html("")
    d3.event.preventDefault();
    var dateTime = d3.select('#datetime').property('value');
    var selectedCity = d3.select('#city').property('value').toLowerCase();
    var selectedState = d3.select('#state').property('value').toLowerCase();
    var selectedCountry = d3.select('#country').property('value').toLowerCase();
    var selectedShape = d3.select('#shape').property('value').toLowerCase();
    var wrongselection = ('What are they hiding?')
    filterEvents = events;

    if (dateTime) {
        filterEvents = filterEvents.filter(row => row.datetime === dateTime);
    }
    if (selectedCity) {
        filterEvents = filterEvents.filter(row => row.city === selectedCity);
    }
    if (selectedState) {
        filterEvents = filterEvents.filter(row => row.state === selectedState);
    }
    if (selectedCountry) {
        filterEvents = filterEvents.filter(row => row.country === selectedCountry);
    }
    if (selectedShape) {
        filterEvents = filterEvents.filter(row => row.shape === selectedShape);
    }
    else {
        wrongselection
    }
    filterEvents.forEach((alienEvent) => {
        var row = tbody.append('tr');
        Object.entries(alienEvent).forEach(([key,value]) => {
            console.log(key,value);
            var cell = row.append('td');
            cell.text(value);
        });
        
    });

    // console.log(dateSightings);
    // return tableBuild(dateSightings);
});
