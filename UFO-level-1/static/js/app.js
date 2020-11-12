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
    inputValue = inputValue.replace(/[A-Za-z]/g, "");
    console.log(inputValue);

    var filteredData = data.filter(date => date.datetime === inputValue);
    console.log(filteredData);

    displayFilterTable(filteredData);
});


function displayFilterTable(data) {
    var tbody = document.getElementsByTagName("tbody")[0];
    tbody.innerHTML = "";


    data.forEach(data => {
        var table = document.createElement("tr");
        tbody.appendChild(table);
        Object.entries(data).forEach(([key, value]) => {
            var tableRow = document.createElement("td");
            table.appendChild(tableRow);
            tableRow.innerText = value;

        });

    });
}
