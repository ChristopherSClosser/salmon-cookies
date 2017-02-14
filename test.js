var myTweets = ['sfd','sdf','gww'];

var userFullName = prompt ('Please enter your full name.');
var screenName = prompt ('Please enter a user name that you would like to use.');
var user = {
  // properties of 'user'...
  fullName: userFullName,
  userName: screenName,
  numFollowers: 5,
  tweets: myTweets,
  login: function (){
    console.log(this.fullName + ' has now logged in.');
  }
};

user.tweets.push ('moredrums@comcast.net');
// log with visual break
console.log('----------New user ' + userFullName + '----------');
user.login ();
console.log('----------Present elements----------');
/*<---------------Present elements--------------->*/
console.log(user.fullName);

// window.document. same as document.
var userElement = document.createElement ('h1');//step 1
// ('h1') is actually equal to <h1></h1>

// .setAttribute() two arguments 1st--id or class, 2nd--value
userElement.setAttribute ('id', 'firstHeading');
userElement.textContent = user.fullName;//step 2
// this writes "<h1 id="firstHeading">user.fullName</h1>"
console.log(userElement);
//get reference to the section element in html
var sectionElement = document.getElementById('main-content');
//sectionElement = <section id="main-content"></section>

sectionElement.appendChild (userElement);//step  3
//renders to page
