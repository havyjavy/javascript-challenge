// from data.js
var tableData = data;

// YOUR CODE HERE!

let tbody = d3.select("tbody");
console.log(data)

// populate table

data.forEach(data => {
    var table = tbody.append("tr");
    Object.entries(data).forEach(([key, value]) => {
        var tableRow = table.append("td");
        tableRow.text(value);

    });

});

let button = d3.select("#filter-btn");

button.on("click", function () {

    var inputElement = d3.select("#datetime");
    var inputValue = inputElement.property("value")
    console.log(inputValue);

    var filteredData = tableData.filter(date === inputValue);
    console.log(filteredData);
})
