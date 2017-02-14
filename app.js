'use strict';

/*<---------------object literals--------------->*/
// declare global variables at the top
//var storeElement = document.createElement ();
var storeLocale = [storeFirstPike, storeSeaTac, storeSeaCenter, storeCapHill, storeAlki];
var storeName = ['1st and Pike', 'SeaTac Airport', 'Seattle Center', 'Capitol Hill', 'Alki'];
var open = ['6am', '7am', '8am', '9am', '10am', '11am', '12pm', '1pm', '2pm', '3pm', '4pm', '5pm', '6pm','7pm', '8pm'];
var oneHrSales = [];


function salesPerDay (storeLocale) {
  console.log('----------' + storeName[i] + '----------');
  for (var ii = 0; ii < open.length; ii++) {
    var cookiesPerHr = storeLocale.custPerHr () * storeLocale.avgCookiesPerCustomer;
    console.log(open[ii] + ': ' + Math.round (cookiesPerHr) + ' Cookies sold.');
    oneHrSales.push(Math.round(cookiesPerHr));
  }
}
for (var i = 0; i < storeLocale.length; i++) {
  salesPerDay (storeLocale[i]);
  console.log (oneHrSales);
  oneHrSales = [];
}


var storeFirstPike = {
  //has some properties
  minCustomersHr: 23,
  maxCustomersHr: 65,
  avgCookiesPerCustomer: 6.3,
  //should return random number between min and max custPerHr
  custPerHr: function () {
    return Math.round (Math.random() * (this.maxCustomersHr - this.minCustomersHr) + this.minCustomersHr);
  }
};
/*
console.log (storeFirstPike.custPerHr());
console.log (storeFirstPike.minCustomersHr + ' is the min, ' + storeFirstPike.maxCustomersHr + ' is the max');
*/

var storeSeaTac = {
  minCustomersHr: 3,
  maxCustomersHr: 24,
  avgCookiesPerCustomer: 1.2,
  custPerHr: function () {
    return Math.round (Math.random() * (this.maxCustomersHr - this.minCustomersHr) + this.minCustomersHr);
  }
};

var storeSeaCenter = {
  minCustomersHr: 11,
  maxCustomersHr: 38,
  avgCookiesPerCustomer: 3.7,
  custPerHr: function () {
    return Math.round (Math.random() * (this.maxCustomersHr - this.minCustomersHr) + this.minCustomersHr);
  }
};

var storeCapHill = {
  minCustomersHr: 20,
  maxCustomersHr: 38,
  avgCookiesPerCustomer: 3.7,
  custPerHr: function () {
    return Math.round (Math.random() * (this.maxCustomersHr - this.minCustomersHr) + this.minCustomersHr);
  }
};

var storeAlki = {
  minCustomersHr: 2,
  maxCustomersHr: 16,
  avgCookiesPerCustomer: 4.6,
  custPerHr: function () {
    return Math.round (Math.random() * (this.maxCustomersHr - this.minCustomersHr) + this.minCustomersHr);
  }
};

//iterates through stores and open times
