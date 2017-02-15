'use strict';

var storeFirstPike = new CookieStore('1st and Pike',23, 65, 6.3);
var storeSeaTac = new CookieStore('SeaTac Airport', 3, 24, 1.2);
var storeSeaCenter = new CookieStore('Seattle Center', 11, 38, 2.3);
var storeCapHill  = new CookieStore('Capitol Hill', 20, 38, 2.3);
var storeAlki = new CookieStore('Alki', 2, 16, 4.6);

var storeLocale = [storeFirstPike, storeSeaTac, storeSeaCenter, storeCapHill, storeAlki];

var tableEl = document.getElementById('tableId');
//get id for thead wich = tableHeadings
var headRowEl = document.createElement('tr');
//blankEl append to thead
var blankEl = document.createElement('th', 'id=tableHeadings');
blankEl.textContent = 'Store Location';
headRowEl.appendChild(blankEl);

//UpperCamelCase object constructors!!----------
function CookieStore(name, minCustomersHr, maxCustomersHr, avgCookiesPerCustomer, hourlyCount, oneHrSales) {
  this.name = name || 'Unknown';
  this.minCustomersHr = minCustomersHr;
  this.maxCustomersHr = maxCustomersHr;
  this.avgCookiesPerCustomer = avgCookiesPerCustomer;
  this.hourlyCount = hourlyCount || [];
  this.oneHrSales = oneHrSales || [];
  this.range = maxCustomersHr - minCustomersHr;
  //add a tagId for each store---------------------------->
  this.hoursOpen = [/*'Store Location'*/'6am', '7am', '8am', '9am', '10am', '11am', '12pm', '1pm', '2pm', '3pm', '4pm', '5pm', '6pm','7pm', '8pm', /*'Totals'*/];
  this.totalPerDay = 0;
}

CookieStore.prototype.cookiesPerHr = function() {
  var totalCookiesHr = Math.round(Math.random() * ((this.range + 1) + this.minCustomersHr) * this.avgCookiesPerCustomer);
  this.oneHrSales.push(totalCookiesHr);
  console.log('counting cookies');
  //return totalCookiesHr;
};

CookieStore.prototype.populateTable = function() {
  var tableEl = document.getElementById('tableId');
  var tableRowEl = document.createElement('tr');
  //nameEl append to thead
  var nameEl = document.createElement('th');
  nameEl.textContent = this.name;
  tableRowEl.appendChild(nameEl);

  for (var ii = 0; ii < this.hoursOpen.length; ii++) {
    this.cookiesPerHr();
    this.totalPerDay += this.oneHrSales[ii];
    var totalSalesHrEl = document.createElement('td');
    totalSalesHrEl.textContent = this.oneHrSales[ii];
    tableRowEl.appendChild(totalSalesHrEl);
    //console.log('in the for ' + ii);
    //this.salesPerDay(this.storeLocale);
    //tableRowEl.textContent = this.cookiesPerHr();
  }
  //console.log('done with for');
  var storeTotalSalesEl = document.createElement('td');
  storeTotalSalesEl.textContent = this.totalPerDay;
  tableRowEl.appendChild(storeTotalSalesEl);
  //salesPerDay(this.storeLocale);
  // tableRowEl.textContent = this.cookiesPerHr();
  tableEl.appendChild(tableRowEl);
};

function createHrTotalsRow(){
  var hrSalesAllStoresRow = document.createElement('tr');
  var hrTotalHead = document.createElement('th');
  hrTotalHead.textContent = 'Total';
  hrSalesAllStoresRow.appendChild(hrTotalHead);
  var totalTotal = 0;

  for (var j = 0; j < storeFirstPike.hoursOpen.length; j++) {
    var hrTotalEl = document.createElement('td');
    hrSalesAllStoresRow.appendChild(hrTotalEl);
    var hrSalesAllStores = 0;
    for (var jj = 0; jj < storeLocale.length; jj++) {
      console.log('hrSalesAllStores' + hrSalesAllStores);
      hrSalesAllStores += storeLocale[jj].oneHrSales[j];
    }
    hrTotalEl.textContent = hrSalesAllStores;
    totalTotal += hrSalesAllStores;
  }

  var totalTotalEl = document.createElement('td');
  totalTotalEl.textContent = totalTotal;
  hrSalesAllStoresRow.appendChild(totalTotalEl);
  tableEl.appendChild(hrSalesAllStoresRow);
}

function CreateTableHeading(){
  tableEl.appendChild(headRowEl);

  for(var i = 0; i < storeFirstPike.hoursOpen.length; i++) {
    var hrsHeadEl = document.createElement('th');
    hrsHeadEl.textContent = storeFirstPike.hoursOpen[i];
    headRowEl.appendChild(hrsHeadEl);
    //console.log('This is pass # ' + i + '\nSetting the hrsHeadEl');
  }
  var totalEl = document.createElement('th');
  totalEl.textContent = 'Totals';
  headRowEl.appendChild(totalEl);
  console.log('Finished Setting hrsHeadEl');
}

/*-------------------Call function-------------------------*/

CreateTableHeading();

storeFirstPike.populateTable();
console.log('Just ran storeFirstPike.populateTable();');

storeSeaTac.populateTable();
console.log('Just ran storeSeaTac.populateTable();');

storeSeaCenter.populateTable();
console.log('Just ran storeSeaCenter.populateTable();');

storeCapHill.populateTable();
console.log('Just ran storeCapHill.populateTable();');

storeAlki.populateTable();
console.log('Just ran storeAlki.populateTable();');

createHrTotalsRow();

/*---------------------new code----------------------------*/
//EVENT LISTENERS-------------------------------

// var storeFormEl = document.getElementById('new-store-form');
// //---------------------------
// storeFormEl.addEventListener('submit', handleSubmit);
//
// function handleSubmit(event){
//   //both preventDefault and stopPropagation need to be first
//   event.preventDefault();//prevents backend server pushing and page reload
//   event.stopPropagation();//prevents bubbling and capturing
//   //-----------------------form---input tag-------value
//   var name = event.target.cookieStoreName.value;
//   var minCustomersHr = parseInt(event.target.minCust.value);
//   var maxCustomersHr = parseInt(event.target.maxCust.value);
//   var avgCookiesPerCustomer = (event.target.avgCookies.value);
//   var store = new CookieStore(name, minCustomersHr, maxCustomersHr, avgCookiesPerCustomer);
//   console.log(store);
//   console.log(store.cookiesPerHr());
//   //console.log('User has submitted.' + '\n' + name + '\n' + minCustomersHr + '\n' + maxCustomersHr + '\n' + avgCookiesPerCustomer);
// }
