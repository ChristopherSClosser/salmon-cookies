'use strict';

var storeFirstPike = new CookieStore('1st and Pike',23, 65, 6.3);
var storeSeaTac = new CookieStore('SeaTac Airport', 3, 24, 1.2);
var storeSeaCenter = new CookieStore('Seattle Center', 11, 38, 2.3);
var storeCapHill  = new CookieStore('Capitol Hill', 20, 38, 2.3);
var storeAlki = new CookieStore('Alki', 2, 16, 4.6);
var storeLocale = [storeFirstPike, storeSeaTac, storeSeaCenter, storeCapHill, storeAlki];

var tableEl = document.getElementById('tableId');
var headRowEl = document.createElement('tr');
var blankEl = document.createElement('th');
blankEl.textContent = 'Store Location';
headRowEl.appendChild(blankEl);
for (var i = 0; i < storeFirstPike.hoursOpen.length; i++) {
  var hrsHeadEl = document.createElement('th');
  hrsHeadEl.textContent = storeFirstPike.hoursOpen[i];
  headRowEl.appendChild(hrsHeadEl);
}

//UpperCamelCase object constructors!!----------
function CookieStore(name, minCustomersHr, maxCustomersHr, avgCookiesPerCustomer, hourlyCount) {
  this.name = name || 'Unknown';
  this.minCustomersHr = minCustomersHr;
  this.maxCustomersHr = maxCustomersHr;
  this.avgCookiesPerCustomer = avgCookiesPerCustomer;
  this.hourlyCount = hourlyCount || [];
  this.range = maxCustomersHr - minCustomersHr;
  this.hoursOpen = ['6am', '7am', '8am', '9am', '10am', '11am', '12pm', '1pm', '2pm', '3pm', '4pm', '5pm', '6pm','7pm', '8pm'];
}

CookieStore.prototype.cookiesPerHr = function () {
  var totalCookiesHr = Math.round(Math.random() * ((this.range + 1) + this.minCustomersHr) * this.avgCookiesPerCustomer);
  this.hourlyCount.push(totalCookiesHr);
  return totalCookiesHr;
};

//function makeTableHead(){

//}

CookieStore.prototype.populateTable = function() {
  var tableEl = document.getElementById('tableId');
  var totalEl = document.createElement('th');
  totalEl.textContent = 'Totals';
  headRowEl.appendChild(totalEl);
  tableEl.appendChild(headRowEl);

  var tableRowEl = document.createElement('tr');
  var nameEl = document.createElement('th');
  nameEl.textContent = this.name;
  tableRowEl.appendChild(nameEl);
  for (var ii = 0; ii < this.hoursOpen.length; ii++) {
    this.cookiesPerHr();
    var totalSalesHrEl = document.createElement('td');
    totalSalesHrEl.textContent = this.hourlyCount[ii];
    tableRowEl.appendChild(totalSalesHrEl);
  }
  // tableRowEl.textContent = this.cookiesPerHr();
  tableEl.appendChild(tableRowEl);

  // var tableEl = document.getElementById('tableId');
  // var rowEl = document.createElement('tr');
  // tableEl.appendChild(rowEl);
  //
  // var storeNameEl = document.createElement ('td');
  // storeNameEl.textContent = this.name;
  // rowEl.appendChild(storeNameEl);
  //
  // for(var i = 0; i < this.hoursOpen.length; i++) {
  //   // var tableEl = document.getElementById('table');
  //   var numberRowEl = document.createElement('tr');
  //
  //   var hoursEl = document.createElement('td');
  //   hoursEl.textContent = this.hoursOpen[i];
  //   tableEl.appendChild(numberRowEl);
  //   numberRowEl.appendChild(hoursEl);
  //   console.log(hoursEl);
  // }
};

// CookieStore.prototype.salesPerDay = function () {
//
// };
//console.log(storeFirstPike.cookiesPerHr());

storeFirstPike.populateTable();
storeSeaTac.populateTable();
storeSeaCenter.populateTable();
storeCapHill.populateTable();
storeAlki.populateTable();
// console.log(storeFirstPike.hourlySales());
// console.log(storeFirstPike.cookiesPerHr());
// // for (var i = 0; i < storeLocale.length; i++) {
//   var currentStore = storeLocale[i];
//   //populate the table------------------------
//   var rowEl = document.createElement ('tr');
//   tableEl.appendChild (rowEl);
//
//   var nameEl = document.createElement ('th');
//   nameEl.textContent = currentStore.name;
//   rowEl.appendChild (nameEl);
// }
// for (var ii = 0; ii < storeLocale.hoursOpen.length; ii++) {
//   var hour = storeLocale.hoursOpen[ii];
//
//   var columnEl = document.createElement ('tr');
//   tableEl.appendChild (columnEl);
//
//   var timeEl = document.createElement('th');
//   timeEl.textContent = storeLocale.hour;
//   rowEl.appendChild (timeEl);
// }
  // var minCustEl = document.createElement('td');
  // minCustEl.textContent = currentStore.minCustomersHr;
  // rowEl.appendChild(minCustEl);

  // var maxCustEl = document.createElement('td');
  // maxCustEl.textContent = currentStore.maxCustomersHr;
  // rowEl.appendChild (maxCustEl);

  // var avgCookieEl = document.createElement ('td');
  // avgCookieEl.textContent = currentStore.avgCookiesPerCustomer;
  // rowEl.appendChild(avgCookieEl);
//}

//document.body.appendChild (tableEl);
