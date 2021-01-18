'use strict';

var opHours = ["6am", "7am", "8am", "9am", "10am", "11am","12pm"];
var Location1 = {
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
    name: "London",
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
var objArray = [Location1,Location2,Location3];
var divElement = document.getElementById('salesdata');
for(var i = 0; i < objArray.length; i++)
{
    var locResults = objArray[i].generateResults();
    console.log(locResults);
    var h2Element = document.createElement('h2');
    h2Element.textContent = objArray[i].name;
    divElement.appendChild(h2Element);
    var listElement = document.createElement('ul');

    for(var i = 0; i < locResults.length;i++ ){
        var listItem = document.createElement('li');
        listItem.textContent = locResults[i];
        listElement.appendChild(listItem);
    }
    divElement.appendChild(listElement);
}



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
