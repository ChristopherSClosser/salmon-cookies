'use strict';

var storeFirstPike = new CookieStore('1st and Pike',23, 65, 6.3);
var storeSeaTac = new CookieStore('SeaTac Airport', 3, 24, 1.2);
var storeSeaCenter = new CookieStore('Seattle Center', 11, 38, 2.3);
var storeCapHill  = new CookieStore('Capitol Hill', 20, 38, 2.3);
var storeAlki = new CookieStore('Alki', 2, 16, 4.6);

var storeLocale = [storeFirstPike, storeSeaTac, storeSeaCenter, storeCapHill, storeAlki];

var tableEl = document.getElementById('tableId');

/*------------------STORE CONSTRUCTOR---------------------*/
//UpperCamelCase object constructors!!----------
function CookieStore(name, minCustomersHr, maxCustomersHr, avgCookiesPerCustomer, hourlyCount, oneHrSales) {
  this.name = name || 'Unknown';
  this.minCustomersHr = minCustomersHr;
  this.maxCustomersHr = maxCustomersHr;
  this.avgCookiesPerCustomer = avgCookiesPerCustomer;
  this.hourlyCount = hourlyCount || [];
  this.oneHrSales = oneHrSales || [];
  this.range = Math.abs(maxCustomersHr - minCustomersHr);
  //add a tagId for each store---------------------------->
  this.hoursOpen = [/*'Store Location'*/'6am', '7am', '8am', '9am', '10am', '11am', '12pm', '1pm', '2pm', '3pm', '4pm', '5pm', '6pm','7pm', '8pm', /*'Totals'*/];
  this.totalPerDay = 0;
}

/*----------------COOKIES PER HOUR METHOD------------------*/
CookieStore.prototype.cookiesPerHr = function() {
  var totalCookiesHr = Math.ceil(Math.random() * ((this.range) + this.minCustomersHr) * this.avgCookiesPerCustomer);
  this.oneHrSales.push(totalCookiesHr);
  console.log('counting cookies');
  //return totalCookiesHr;
};

/*----------------POPULATE TABLE METHOD--------------------*/
CookieStore.prototype.populateTable = function() {
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

/*----------------CREATE TOTAL FOOTER----------------------*/
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

/*-----------------CREATE TABLE HEAD-----------------------*/
function CreateTableHeading(){
  //get id for thead wich = tableHeadings
  var headRowEl = document.createElement('tr');
  //blankEl append to thead
  var blankEl = document.createElement('th', 'id=tableHeadings');
  blankEl.textContent = 'Store Location';
  headRowEl.appendChild(blankEl);

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

createTable();

/*------------------------new code-------------------------*/

function createTable(){
  CreateTableHeading();
  // Itterate over storeLocale, and perform populateTable() for each location.
  for(var i = 0; i < storeLocale.length; i++){
    storeLocale[i].totalPerDay = 0;
    storeLocale[i].populateTable();
  }
  createHrTotalsRow();
}

function refreshTable(){
  var tableEl = document.getElementById('tableId');
  tableEl.innerHTML = '';
  createTable();
}

//--------------------EVENT LISTENERS----------------------
var storeFormEl = document.getElementById('new-store-form');
storeFormEl.addEventListener('submit', handleSubmit);

function handleSubmit(event){
  //both preventDefault and stopPropagation need to be first
  event.preventDefault();//prevents backend server pushing and page reload
  event.stopPropagation();//prevents bubbling and capturing
  //--------form---input-------tag-------value
  var name = event.target.cookieStoreName.value;
  var minCustomersHr = parseInt(event.target.minCust.value);
  var maxCustomersHr = parseInt(event.target.maxCust.value);
  var avgCookiesPerCustomer = parseFloat(event.target.avgCookies.value);

  minCustomersHr = Math.abs(minCustomersHr);
  maxCustomersHr = Math.abs(maxCustomersHr);
  avgCookiesPerCustomer = Math.abs(avgCookiesPerCustomer);

  var store = new CookieStore(name, minCustomersHr, maxCustomersHr, avgCookiesPerCustomer);

  console.log(store);
  console.log(store.cookiesPerHr());

//pop is oppisite of push
  storeLocale.push(store);

  refreshTable();
  //console.log('User has submitted.' + '\n' + name + '\n' + minCustomersHr + '\n' + maxCustomersHr + '\n' + avgCookiesPerCustomer);
}
