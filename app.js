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
    
};



var objArray = [Location2, Location1,Location3, Location4, Location5];
var divElement = document.getElementById('salesdata');
for(var i = 0; i < objArray.length; i++)
{
    var locResults = objArray[i].generateResults();
    console.log(locResults);
    var h3Element = document.createElement('h3');
    h3Element.textContent = objArray[i].name;
    divElement.appendChild(h3Element);
    var listElement = document.createElement('ul');

    for(var x = 0; x < locResults.length;x++ ){
        var listItem = document.createElement('li');
        listItem.textContent = locResults[x];
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
