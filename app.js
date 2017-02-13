'use strict';

/*<---------------object literals--------------->*/
// declare global variables at the top
var storeElement = document.createElement ();
var storeFirstPike = {
  //has some properties
  minCustomersHr: 23,
  maxCustomersHr: 65,
  avgCookiesPerCustomer: 6.3,
  //should return random number between min and max custPerHr
  custPerHr: function () {
    return Math.random() * (this.minCustomersHr - this.maxCustomersHr) + this.minCustomersHr;
  }
};
console.log (storeFirstPike.custPerHr());
console.log (storeFirstPike.minCustomersHr + ' is the min, ' + storeFirstPike.maxCustomersHr + ' is the max');

var storeSeaTac = {
  minCustomersHr: 3,
  maxCustomersHr: 24,
  avgCookiesPerCustomer: 1.2
};

var storeSeaCenter = {
  minCustomersHr: 11,
  maxCustomersHr: 38,
  avgCookiesPerCustomer: 3.7
};

var storeCapHill = {
  minCustomersHr: 20,
  maxCustomersHr: 38,
  avgCookiesPerCustomer: 3.7
};

var storeAlki = {
  minCustomersHr: 2,
  maxCustomersHr: 16,
  avgCookiesPerCustomer: 4.6
};
