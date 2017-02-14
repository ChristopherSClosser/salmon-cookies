'use strict';

//UpperCamelCase object constructors!!----------
function CookieStore (name, minCustomersHr, maxCustomersHr, avgCookiesPerCustomer, hourlyCount) {
  this.name = name || 'Unknown';
  this.minCustomersHr = minCustomersHr;
  this.maxCustomersHr = maxCustomersHr;
  this.avgCookiesPerCustomer = avgCookiesPerCustomer;
  this.hourlyCount = hourlyCount || [];
  this.range = maxCustomersHr - minCustomersHr;
}

CookieStore.prototype.cookiesPerHr = function () {
  return Math.round (Math.random() * ((this.range + 1) + this.minCustomersHr) * this.avgCookiesPerCustomer);
  this.hourlyCount.push(cookiesPerHr);
};

// CookieStore.prototype.salesPerDay = function () {

// };
console.log(storeFirstPike.cookiesPerHr());

var storeFirstPike = new CookieStore ('1st and Pike',23, 65, 6.3);
var storeSeaTac = new CookieStore ('SeaTac Airport', 3, 24, 1.2);
var storeSeaCenter = new CookieStore ('Seattle Center', 11, 38, 2.3);
var storeCapHill  = new CookieStore ('Capitol Hill', 20, 38, 2.3);
var storeAlki = new CookieStore ('Alki', 2, 16, 4.6);

var tableEl = document.createElement ('table');
var storeLocale = [storeFirstPike, storeSeaTac, storeSeaCenter, storeCapHill, storeAlki];

for (var i = 0; i < storeLocale.length; i++) {
  var currentStore = storeLocale[i];
  //populate the table------------------------
  var rowEl = document.createElement ('tr');
  tableEl.appendChild (rowEl);

  var nameEl = document.createElement ('th');
  nameEl.textContent = currentStore.name;
  rowEl.appendChild (nameEl);

  var minCustEl = document.createElement('td');
  minCustEl.textContent = currentStore.minCustomersHr;
  rowEl.appendChild(minCustEl);

  var maxCustEl = document.createElement('td');
  maxCustEl.textContent = currentStore.maxCustomersHr;
  rowEl.appendChild (maxCustEl);

  var avgCookieEl = document.createElement ('td');
  avgCookieEl.textContent = currentStore.avgCookiesPerCustomer;
  rowEl.appendChild(avgCookieEl);
}

document.body.appendChild (tableEl);
