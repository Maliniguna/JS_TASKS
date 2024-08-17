//cp-task-1
var bookTitle;
var bookAuthor;
bookTitle = "DARKKNIGHT";
bookAuthor = "RAM";
console.log(bookTitle + " by " + bookAuthor);
//cp-task-2
var book1Title = "DARKKNIGHT";
var book1Author = "RAM";
console.log(book1Title + " by " + book1Author);
//cp-task-3
var book;
book = {
    title: "DARKKNIGHT",
    author: "RAM",
    published: 1937
};
console.log(book);
//cp-task-5
var book;
book = {
    title : "DARKKNIGHT"
};
//cp-task-6
var book;
var bookName;
bookName = "The KNIGHT";
book = {
    title: bookName
};
console.log(book);
//cp-task-11
var player1;
var player2;
player1 = {
    name: "Max",
    score: 0
};
console.log(player1.name + " has scored " + player1.score);
player1.score = player1.score + 50;
console.log(player1.name + " has scored " + player1.score);
player1.score = player1.score * 10;
console.log(player1.name + " has scored " + player1.score);
player2 = {
    name: "Alex",
    score: 30
};
var totalScore = player1.score + player2.score;
console.log(player1.name + " and " + player2.name + " have a combined score of " + totalScore);
//cp-task-12
var geolocation = {
    "city"      : "JOSAN",
    "state"     : "TN",
    "country"   : "INDIA",
    "zip"       : "641011",
    "latitude"  : 37.775,
    "longitude" : -122.418,
    "elevation" : 47.000
};
console.log(geolocation.city); // Check the city property
console.log(geolocation);      // Display the entire geolocation object
//cp-task-15
var player1;
player1 = {
    name: "Kandra",
    health: 50,
    place: "The Dungeon of Doom",
    items: ["a rusty key", "The Sword of Destiny", "a piece of cheese"]
};
console.log(player1.name);
console.log(player1.name + " is in " + player1.place);
console.log(player1.name + " has health " + player1.health);
console.log("Items: " + player1.items.join(", "));
var player2;
player2 = {
    name: "Elara",
    health: 75,
    place: "The Enchanted Forest",
    items: ["a magical staff", "a healing potion", "a golden apple"]
};
console.log(player2.name);
console.log(player2.name + " is in " + player2.place);
console.log(player2.name + " has health " + player2.health);
console.log("Items: " + player2.items.join(", "));













































