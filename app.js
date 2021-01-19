'use strict';

var opHours = ["6am:  ", "7am:  ", "8am:  ", "9am:  ", "10am:  ", "11am:  ","12pm:  ", "1pm:  ", "2pm:  ", "3pm:  ", "4pm:  "];

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
       // console.log(salesArray);
        return salesArray;
    };



var array  = [23,24,25,35,25,25];
var num = 3;



    
    this.render = function(n,bodyElement){
        var locResults = this.generateResults();
        console.log(locResults);
        var rowElement = document.createElement('tr');
        var headElement = document.createElement('th');
        headElement.textContent = n;
        console.log(headElement.textContent)
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

/*var Location1 = {
    name: "Seattle",
    min_cust: 23,
    max_cust: 65,
    average_cpc: 6.3,
    generateCustomers: function(){

       return Math.floor(Math.random() * (this.max_cust - this.min_cust + 1)) + this.min_cust;
    },
    generateResults: function(){
        var salesArray = [];
        var total = 0;
       for(var i = 0; i < opHours.length; i++){
       // console.log(this.generateCustomers())
       var amount = Math.floor(this.average_cpc * this.generateCustomers());
       // salesArray.push(opHours[i] + " " + `${average_cpc * this.generateCustomers()}`)
       salesArray.push(opHours[i] + " " + `${amount}`);
       total += amount;
       }
        salesArray.push("total sales: " + total );
        console.log(salesArray);
        return salesArray;
    }
    
};
var Location2 = {
    name: "Tokyo",
    min_cust: 3,
    max_cust: 24,
    average_cpc: 1.2,
    generateCustomers: function(){
       return Math.floor(Math.random() * (this.max_cust - this.min_cust + 1)) + this.min_cust;
    },
    generateResults: function(){
        var salesArray = [];
        var total = 0;
       for(var i = 0; i < opHours.length; i++){
       var amount = Math.floor(this.average_cpc * this.generateCustomers());
       // salesArray.push(opHours[i] + " " + `${average_cpc * this.generateCustomers()}`)
       salesArray.push(opHours[i] + " " + `${amount}`);
       total += amount;
       }
        salesArray.push("total sales: " + total );
        return salesArray;
    }
    
};
var Location3 = {
    name: "Dubai",
    min_cust: 11,
    max_cust: 38,
    average_cpc: 3.7,
    generateCustomers: function(){
       return Math.floor(Math.random() * (this.max_cust - this.min_cust + 1)) + this.min_cust;
    },
    generateResults: function(){
        var salesArray = [];
        var total = 0;
       for(var i = 0; i < opHours.length; i++){
       var amount = Math.floor(this.average_cpc * this.generateCustomers());
       // salesArray.push(opHours[i] + " " + `${average_cpc * this.generateCustomers()}`)
       salesArray.push(opHours[i] + " " + `${amount}`);
       total += amount;
       }
        salesArray.push("total sales: " + total );
        return salesArray;
    }
    
};

var Location4 = {
    name: "Paris",
    min_cust: 20,
    max_cust: 38,
    average_cpc: 3.7,
    generateCustomers: function(){
       return Math.floor(Math.random() * (this.max_cust - this.min_cust + 1)) + this.min_cust;
    },
    generateResults: function(){
        var salesArray = [];
        var total = 0;
       for(var i = 0; i < opHours.length; i++){
       var amount = Math.floor(this.average_cpc * this.generateCustomers());
       // salesArray.push(opHours[i] + " " + `${average_cpc * this.generateCustomers()}`)
       salesArray.push(opHours[i] + " " + `${amount}`);
       total += amount;
       }
        salesArray.push("total sales: " + total );
        return salesArray;
    }
    
};

var Location5 = {
    name: "Lima",
    min_cust: 2,
    max_cust: 16,
    average_cpc: 4.6,
    generateCustomers: function(){
       return Math.floor(Math.random() * (this.max_cust - this.min_cust + 1)) + this.min_cust;
    },
    generateResults: function(){
        var salesArray = [];
        var total = 0;
       for(var i = 0; i < opHours.length; i++){
       var amount = Math.floor(this.average_cpc * this.generateCustomers());
       // salesArray.push(opHours[i] + " " + `${average_cpc * this.generateCustomers()}`)
       salesArray.push(opHours[i] + " " + `${amount}`);
       total += amount;
       }
        salesArray.push("total sales: " + total );
        return salesArray;
    }
    
};*/



var objArray = [Location2, Location1,Location3, Location4, Location5];
var tableElement = document.getElementById('salestable');

var bodyElement = document.getElementById('tbody');
var headRow = document.createElement('tr');
var tableheader = document.getElementById('thead');
//Set up Time Header for each Row
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
//tableheader.appendChild(timerowElement);
tableElement.appendChild(tableheader);
//Set Totals Sails Header

/*function BuildDataRows() */
//Set sales info for each location row
for(var i = 0; i < objArray.length; i++)
{
    var object = objArray[i];
    objArray[i].render(object.name,bodyElement);
    /*var locResults = objArray[i].generateResults();
    console.log(locResults);
    var rowElement = document.createElement('tr');
    var headElement = document.createElement('th');
    headElement.textContent = objArray[i].name;
    console.log(headElement.textContent)
    rowElement.appendChild(headElement);
    //var listElement = document.createElement('ul');

    for(var x = 0; x < locResults.length;x++ ){
        var cellItem = document.createElement('td');
        cellItem.textContent = locResults[x];
        rowElement.appendChild(cellItem);
    }
    bodyElement.appendChild(rowElement);*/
}


/*function createContent(elementType, content)
{
var item = document.createElement(elemenType);
item.textContent = content //textContent = property
return item;
}*/






/*var results = Location2.generateResults();
console.log(results);
var Location3 = {
    name: "Dubai",
    min_cust: 11,
    max_cust: 38,
    average_cpc: 3.7,
    generateCustomers: function(){
        Math.floor(Math.random() * (this.max_cust - this.min_cust + 1)) + min_cust;
    },

    generateResults: function(){
       
    }
};
//array to store locations
var objArray = [Location1, Location2, Location3];

function displayData(objArray){
    for(var i = 0; i < objArray.length; i++){

    }
}*/
