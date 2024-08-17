//cp5-task-1

var message;
var showMessage;
message = "It's full of stars!";
showMessage = function () {
    console.log(message);
};
message = "The sky is clear.";
showMessage();
showMessage = function () {
    var msg = message;  
    console.log(msg); 
};
showMessage();

//cp5-task-3

var showMessage;
showMessage = function (message) {
    console.log("The message is: " + message);
};
showMessage("It's full of stars!"); 
showMessage("Hello, world!"); 
showMessage("JavaScript is fun!"); 
showMessage("Keep coding and learning!");
showMessage = function (message) {
    console.log("The message is: " + message + " -- Have a great day!");
};
showMessage("It's full of stars!"); 
showMessage("Hello, world!"); 

//cp5-task-6

var showSum = function (number1, number2) {
    var total = number1 + number2;
    console.log("The sum is " + total);
};
var showProduct = function (number1, number2) {
    var product = number1 * number2;
    console.log("The product is " + product);
};
var showDifference = function (number1, number2) {
    var difference = number1 - number2;
    console.log("The difference is " + difference);
};
var showQuotient = function (number1, number2) {
    var quotient = number1 / number2;
    console.log("The quotient is " + quotient);
};
showSum(56, 74); 
showProduct(5, 8); 
showProduct(2.5, 4); 
showDifference(100, 45);
showDifference(15.5, 10); 
showQuotient(20, 4); 
showQuotient(9, 3); 

//cp5-task-8

var showPlayerName = function (playerName) {
    console.log(playerName.toUpperCase());
};
var player1 = {
    name: "Kandra",
    place: "The Dungeon of Doom",
    health: 50
};
var player2 = {
    name: "Dax",
    place: "The Old Library",
    health: 40
};
showPlayerName(player1.name); 
showPlayerName(player2.name); 
showPlayerName = function (playerName) {
    console.log(playerName.toLowerCase()); 
};
showPlayerName(player1.name); 
showPlayerName(player2.name); 

//cp5-task-14

var showLine = function (length) {
    var line = "--------------------"; 
    console.log(line.substring(0, length));
};
var showPlayerName = function (playerName) {
    console.log(playerName);
};
var showPlayerHealth = function (playerName, playerHealth) {
    console.log(playerName + " has health " + playerHealth);
};
var showPlayerPlace = function (playerName, playerPlace) {
    console.log(playerName + " is in " + playerPlace);
};
var showPlayerInfo = function (playerName, playerPlace, playerHealth) {
    console.log("");
    showLine(30); 
    showPlayerName(playerName);
    showLine(30); 
    showPlayerPlace(playerName, playerPlace);
    showPlayerHealth(playerName, playerHealth);
    showLine(30); 
    console.log("");
};
var player1 = {
    name: "Kandra",
    place: "The Dungeon of Doom",
    health: 50
};
var player2 = {
    name: "Dax",
    place: "The Old Library",
    health: 40
};
showPlayerInfo(player1.name, player1.place, player1.health);
showPlayerInfo(player2.name, player2.place, player2.health);
var showLine = function (length, character) {
    var line = character.repeat(length); 
    console.log(line);
};
var showPlayerNameInBox = function (playerName) {
    var length = playerName.length + 4; 
    showLine(length, '*'); 
    console.log('* ' + playerName + ' *'); 
    showLine(length, '*'); 
};
showPlayerNameInBox(player1.name);
showPlayerNameInBox(player2.name);







































