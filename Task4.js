//cp4-task-1

var movie1 = {
    title: "Inside Out",
    actors: "Amy Poehler, Bill Hader",
    directors: "Pete Docter, Ronaldo Del Carmen"
};
console.log("Movie information for " + movie1.title);
console.log("------------------------------");
console.log("Actors: " + movie1.actors);
console.log("Directors: " + movie1.directors);
console.log("------------------------------");
var movie2 = {
    title: "The Incredibles",
    actors: "Craig T. Nelson, Holly Hunter",
    directors: "Brad Bird"
};
console.log("Movie information for " + movie2.title);
console.log("------------------------------");
console.log("Actors: " + movie2.actors);
console.log("Directors: " + movie2.directors);
console.log("------------------------------");
var blogPost = {
    title: "The Evolution of Web Development",
    author: "Jane Doe",
    date: "August 17, 2024",
    content: "Web development has evolved significantly over the years. From static HTML pages to dynamic, interactive web applications, the journey has been fascinating. In this post, we'll explore some of the major milestones in web development and discuss how modern technologies are shaping the future of the web."
};
console.log("Blog Post: " + blogPost.title);
console.log("------------------------------");
console.log("Author: " + blogPost.author);
console.log("Date: " + blogPost.date);
console.log("Content: " + blogPost.content);
console.log("------------------------------");

//cp4-task-2

var movie1 = {
    title: "Inside Out",
    actors: "Amy Poehler, Bill Hader",
    directors: "Pete Docter, Ronaldo Del Carmen"
};
var movie2 = {
    title: "Spectre",
    actors: "Daniel Craig, Christoph Waltz",
    directors: "Sam Mendes"
};
var movie3 = {
    title: "Star Wars: Episode VII - The Force Awakens",
    actors: "Harrison Ford, Mark Hamill, Carrie Fisher",
    directors: "J.J. Abrams"
};
var movie4 = {
    title: "Inception",
    actors: "Leonardo DiCaprio, Joseph Gordon-Levitt",
    directors: "Christopher Nolan"
};
console.log("Movie information for " + movie1.title);
console.log("------------------------------");
console.log("Actors: " + movie1.actors);
console.log("Directors: " + movie1.directors);
console.log("------------------------------");
console.log("Movie information for " + movie2.title);
console.log("------------------------------");
console.log("Actors: " + movie2.actors);
console.log("Directors: " + movie2.directors);
console.log("------------------------------");
console.log("Movie information for " + movie3.title);
console.log("------------------------------");
console.log("Actors: " + movie3.actors);
console.log("Directors: " + movie3.directors);
console.log("------------------------------");
console.log("Movie information for " + movie4.title);
console.log("------------------------------");
console.log("Actors: " + movie4.actors);
console.log("Directors: " + movie4.directors);
console.log("------------------------------");
var event1 = {
    title: "Team Meeting",
    date: "August 18, 2024",
    time: "10:00 AM",
    location: "Conference Room A"
};
var event2 = {
    title: "Project Deadline",
    date: "August 21, 2024",
    time: "5:00 PM",
    location: "Online"
};
var event3 = {
    title: "Client Presentation",
    date: "August 25, 2024",
    time: "2:00 PM",
    location: "Main Hall"
};
console.log("Event information for " + event1.title);
console.log("------------------------------");
console.log("Date: " + event1.date);
console.log("Time: " + event1.time);
console.log("Location: " + event1.location);
console.log("------------------------------");
console.log("Event information for " + event2.title);
console.log("------------------------------");
console.log("Date: " + event2.date);
console.log("Time: " + event2.time);
console.log("Location: " + event2.location);
console.log("------------------------------");
console.log("Event information for " + event3.title);
console.log("------------------------------");
console.log("Date: " + event3.date);
console.log("Time: " + event3.time);
console.log("Location: " + event3.location);
console.log("------------------------------");

//cp4-task-5

var findTotal;
var displayMenu;
findTotal = function () {
    var number1;
    var number2;
    var result;
    number1 = 10;
    number2 = 20;
    result = number1 + number2;
    console.log("The total is: " + result);
};
displayMenu = function () {
    console.log("Please choose an option:");
    console.log("(1) Print log");
    console.log("(2) Upload file");
    console.log("(9) Quit");
};
findTotal();
displayMenu(); 

//cp4-task-9

var showMovieInfo;
showMovieInfo = function () {
    console.log("Movie information for " + movie.title);
    console.log("------------------------------");
    console.log("Actors: " + movie.actors);
    console.log("Directors: " + movie.directors);
    console.log("------------------------------");
};
var movie = {
    title: "Inside Out",
    actors: "Amy Poehler, Bill Hader",
    directors: "Pete Docter, Ronaldo Del Carmen"
};
showMovieInfo();
var movie;
movie = {};
movie = {
    title: "Inside Out",
    actors: "Amy Poehler, Bill Hader",
    directors: "Pete Docter, Ronaldo Del Carmen"
};
showMovieInfo();

//cp4-task-13

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
var showPlayerLocation = function () {
    console.log(player.name + " is in " + player.place);
};
var showPlayerHealth = function () {
    console.log(player.name + " has health " + player.health);
};
var showPlayerInfo = function () {
    console.log(player.name);
    console.log("------------------------------");
    showPlayerLocation();  
    showPlayerHealth();    
    console.log("------------------------------");
    console.log("");
};
var player = player1;
showPlayerInfo();
player = player2;
showPlayerInfo();


































