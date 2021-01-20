'use strict';

var opHours = ["6:00 am  ", "7:00 am  ", "8:00 am  ", "9:00 am  ", "10:00 am  ", "11:00 am  ","12:00 pm  ", "1:00 pm  ", "2:00 pm  ", "3:00 pm  ", "4:00 pm  "];
var global = [];
function Location(name, min_cust, max_cust, average_cpc) {
    this.name = name;
    this.min_cust = min_cust;
    this.max_cust = max_cust;
    this.average_cpc = average_cpc;

    this.generateCustomers = function () {
    //generates a random number of customers when called.
     return Math.floor(Math.random() * (this.max_cust - this.min_cust + 1)) + this.min_cust;
    };

    this.generateResults = function(){

        var salesArray = [];
        var total = 0;

        for(var i = 0; i < opHours.length; i++){
            var amount = Math.floor(this.average_cpc * this.generateCustomers());
            salesArray.push(`${amount}`);
            total += amount;
       }

        salesArray.push( total );
        global.push(salesArray);
       // console.log(salesArray);
        return salesArray;
    };

    
    this.render = function(n,bodyElement){
        var locResults = this.generateResults();
       // console.log(locResults);
        var rowElement = document.createElement('tr');
        var headElement = document.createElement('th');
        headElement.setAttribute("id","locName");
        headElement.textContent = n;
       // console.log(headElement.textContent)
        rowElement.appendChild(headElement);
        //var listElement = document.createElement('ul');
    
        for(var x = 0; x < locResults.length;x++ ){
            var cellItem = document.createElement('td');
            cellItem.textContent = locResults[x];
            rowElement.appendChild(cellItem);
        }
        bodyElement.appendChild(rowElement);
    }


}
    var Location1 = new Location("Seattle",23,65,6.3);
    var Location2 = new Location("Tokyo",3,24,1.2);
    var Location3 = new Location("Dubai",11,38,3.7);
    var Location4 = new Location("Paris",20,38,3.7);
    var Location5 = new Location("Lima",2,16,4.6);

var objArray = [Location2, Location1,Location3, Location4, Location5];
var tableElement = document.getElementById('salestable');
var bodyElement = document.getElementById('tbody');


var headRow = document.createElement('tr');
var tableheader = document.getElementById('thead');


//Render Header
var emptyHeader = document.createElement('th');
emptyHeader.textContent = "";
headRow.appendChild(emptyHeader);
for(var j = 0; j < opHours.length; j++){
    var hourElement = document.createElement('th');
    hourElement.textContent = opHours[j];
    headRow.appendChild(hourElement);
}

var totalElement = document.createElement('th');
totalElement.textContent = "Daily Total Sales";
headRow.appendChild(totalElement);
tableheader.appendChild(headRow);
tableElement.appendChild(tableheader);



//Render Body Data
for(var i = 0; i < objArray.length; i++)
{
    var object = objArray[i];
    objArray[i].render(object.name,bodyElement);
}
console.log(global);


//Render Footer Data
var footRow = document.createElement('tr');
var footElement = document.getElementById('tfoot');
var headFoot = document.createElement('th');
headFoot.textContent = "Hourly Total";

// console.log(headElement.textContent)
footRow.appendChild(headFoot);
footElement.appendChild(footRow);
tableElement.append(footElement);
for(var q = 0; q < opHours.length; q++){
    var hourlyTotal = 0;
    for(var z = 0; z < 5; z++){
        hourlyTotal = hourlyTotal + parseInt(global[z][q]);
       // console.log(hourlyTotal);  
    }
    var footData = document.createElement('td');
       footData.textContent = hourlyTotal;
       footRow.appendChild(footData);
    console.log(q + "  " + global.length);
    
}