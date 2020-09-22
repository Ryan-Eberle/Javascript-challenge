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
    var dateInfo = d3.select("#datetime").property("value");
    console.log(dateInfo);
    console.log(d3.event.target);
    var dateSightings = data.filter((row)=>row.datetime == dateInfo);
    console.log(dateSightings);
    return tableBuild(dateSightings);
});
