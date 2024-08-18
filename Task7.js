//cp7-task-1
var planet1;
var getPlanetInfo
planet1 = {
  name: "Jupiter",
  position: 5,
  type: "Gas Giant",
  radius: 69911,
  sizeRank: 1,
};
getPlanetInfo = function (planet) {
  return (
    planet.name +
    ": planet number " +
    planet.position +
    ", " +
    planet.type +
    ", with a radius of " +
    planet.radius +
    " km and ranked " +
    planet.sizeRank +
    " in size."
  );
};
console.log(getPlanetInfo(planet1));
// 1) Create a second planet object
var planet2 = {
  name: "Earth",
  position: 3,
  type: "Terrestrial",
  radius: 6371,
  sizeRank: 5,
};
// 2) Use getPlanetInfo to log details of the second planet
console.log(getPlanetInfo(planet2));

//cp7-task-3

var buildPlanet;
var getPlanetInfo;
var planet1;
var planet2;
buildPlanet = function (name, position, type, radius, rank) {
  return {
    name: name,
    position: position,
    type: type,
    radius: radius,
    sizeRank: rank,
  };
};
getPlanetInfo = function (planet) {
  return planet.name.toUpperCase() + ": planet " + planet.position;
};
planet1 = buildPlanet("Jupiter", 5, "Gas Giant", 69911, 1);
planet2 = buildPlanet("Neptune", 8, "Ice Giant", 24622, 4);

console.log(getPlanetInfo(planet1));
console.log(getPlanetInfo(planet2));
// Function to build car objects
var buildCar = function (make, model, year, color, mileage) {
  return {
    make: make,
    model: model,
    year: year,
    color: color,
    mileage: mileage,
  };
};
var displayCarInfo = function (car) {
  return (
    car.make +
    " " +
    car.model +
    ": " +
    car.year +
    " " +
    car.color +
    " (" +
    car.mileage +
    " miles)"
  );
};
var car1 = buildCar("Toyota", "Camry", 2023, "Silver", 10000);
var car2 = buildCar("Ford", "Mustang", 2020, "Red", 35000)
console.log(displayCarInfo(car1));
console.log(displayCarInfo(car2));

//cp7-task-5

var showSmaller = function (num1, num2) {
    var smaller = Math.min(num1, num2);
    var larger = Math.max(num1, num2);
  
    console.log(smaller + " is smaller than " + larger);
  };
  showSmaller(12, 3);
  showSmaller(-10, 3);
  // 1) Try out some different arguments
  showSmaller(0, 0); // Both numbers are equal
  showSmaller(5.5, 4.2); // Decimals
  showSmaller(-100, 100); // Large numbers
  
  // 2) Write a showLarger function
  var showLarger = function (num1, num2) {
    var larger = Math.max(num1, num2);
    var smaller = Math.min(num1, num2);
  
    console.log(larger + " is larger than " + smaller);
  };
  showLarger(5, 8);
  
  // 3) Write a showSmallest function that takes three arguments
  var showSmallest = function (num1, num2, num3) {
    var smallest = Math.min(num1, num2, num3);
    console.log(smallest + " is the smallest");
  };
  showSmallest(10, 5, 8);

//cp7-task-7

var planet = "Jupiter";
var bigPlanet = planet.toUpperCase();
console.log(planet + " becomes " + bigPlanet);
// 1) Create a getBig function that accepts a string as an argument and returns it converted to upper case
function getBig(str) {
  return str.toUpperCase();
}
console.log(getBig("earth"));

// 2) Create a getSmall function that accepts a string as an argument and returns it converted to lower case
function getSmall(str) {
  return str.toLowerCase();
}
console.log(getSmall("MARS"));

//cp7-task-9

var message = "We choose to go to the Moon!";
var charIndex = message.indexOf("M");
console.log(message.substr(charIndex, 3));

// 1) Use indexOf to find the index of where the word 'go' starts in the message string
var goIndex = message.indexOf("go");
console.log("Index of 'go':", goIndex);

// 2) Use indexOf and substr to display the word 'choose' from the message string
var chooseIndex = message.indexOf("choose");
var choose = message.substr(chooseIndex, 6);
console.log("The word 'choose' is:", choose);

// 3) Use lastIndexOf to find the index of the 'oo' in the word 'Moon' of the message string
var ooIndex = message.lastIndexOf("oo");
console.log("Index of 'oo' in 'Moon':", ooIndex);



