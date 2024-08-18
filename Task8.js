//cp8-task-1

var scores;
var names;
scores = [3, 1, 8, 2];
names = ["Kandra", "Dax", "Blinky"];
console.log(scores);
console.log(names);
// 1) Add an extra element to each array
scores.push(5);
names.push("Willow");
console.log(scores);
console.log(names);

// 2) Declare a third variable, akaScores
var akaScores;

// 3) Assign the scores array to akaScores
akaScores = scores;

// 4) Log akaScores to the console
console.log(akaScores);

//cp8-task-2

var place1 = { name: "The Pyramids", country: "Egypt" };
var place2 = { name: "The Grand Canyon", country: "USA" };
var place3 = { name: "Bondi Beach", country: "Australia" };
var thisYear = [place1, place2];
var nextYear = [place3];
console.log(thisYear);
console.log(nextYear);

// 1) Add place1 to the nextYear array
nextYear.push(place1);

// 2) Run the program again to check if an object can be in two arrays at once
console.log(thisYear);
console.log(nextYear);

//cp8-task-4

var days = ["Monday", "Tuesday", "Wednesday", "Thursday", "Friday"];
var dayInWeek = 4;
console.log(days[dayInWeek]);
console.log(days[dayInWeek - 1]);

// 1) Change the value of the dayInWeek variable to display a different day
dayInWeek = 2;
console.log(days[dayInWeek]);

// 2) Write a function that accepts a number for the day of the week to be displayed and returns the day as a string
function getDay(dayNumber) {
  return days[dayNumber - 1];
}

// 3) Call your function, passing it 4 as the day of the week, and log the value it returns
var returnedDay = getDay(4);
console.log(returnedDay);

//cp8-task-6

var items = [];
var item = "The Pyramids";
var removed;
items.push(item);
items.push("The Grand Canyon");
items.push("Bondi Beach");
console.log(items);
removed = items.pop();
console.log(removed + " was removed");
console.log(items.join(" and "));

// 1) Push another item onto the array
items.push("The Eiffel Tower");

// 2) Log the joined items
console.log(items.join(", "));

// 3) Set one of the items using square brackets
items[1] = "The Great Wall of China";

// 4) Can you push more than one item at a time?
items.push("The Colosseum", "Mount Everest");
console.log(items);

//cp8-task-8

var items = ["The Pyramids", "The Grand Canyon", "Bondi Beach"];
console.log("Dream destinations:");
items.forEach(function (item) {
  console.log(" – " + item);
});

// 1) Change the program to show the number of places to visit as well as the places themselves
console.log("Number of places to visit:", items.length);
console.log("Dream destinations:");
items.forEach(function (item) {
  console.log(" – " + item);
});

// 2) Wrap the display code in a function and assign it to the showItems variable
function showItems() {
  console.log("Number of places to visit:", items.length);
  console.log("Dream destinations:");
  items.forEach(function (item) {
    console.log(" – " + item);
  });
}

// 3) Click after the prompt on the console, type showItems() and press Enter. Can you run your function from the console?
showItems(); 

// 4) Add and remove array items via the console and display the current state of the array with the showItems function
items.push("The Great Wall of China");
showItems();
items.pop();
showItems();

//cp8-task-10

["Dax", "Jahver", "Kandra"].forEach(function (item, index, wholeArray) {
    console.log("Item: " + item);
    console.log("Index: " + index);
    console.log("Array: " + wholeArray);
  });
  
  // 1) Create an array of rectangle objects
  const rectangles = [
    { length: 4, width: 3 },
    { length: 5, width: 2 },
    { length: 7, width: 4 },
  ];
  
  // 2) Define an assignArea function that takes a rectangle as an argument and assigns an area property holding the area of the rectangle
  function assignArea(rectangle) {
    rectangle.area = rectangle.length * rectangle.width;
  }
  
  // 3) Define a showInfo function that takes a rectangle as an argument and displays its properties on the console
  function showInfo(rectangle) {
    console.log("Length:", rectangle.length);
    console.log("Width:", rectangle.width);
    console.log("Area:", rectangle.area);
  }
  
  // 4) Use forEach and your two functions to display info about each of the rectangles in the array
  rectangles.forEach(assignArea);
  rectangles.forEach(showInfo);

  //cp8-task-13

  var spacer = {
    blank: function () {
      return "";
    },
    newLine: function () {
      return "\n";
    },
    line: function (length, character) {
      var longString =
        "****************************************" +
        "----------------------------------------" +
        "========================================";
      longString +=
        "++++++++++++++++++++++++++++++++++++++++" +
        "                                        ";
      length = Math.max(0, length);
      length = Math.min(40, length);
      return longString.substr(longString.indexOf(character), length);
    },
    wrap: function (text, length, character) {
      var padLength = length - text.length - 3;
      var wrapText = character + " " + text;
      wrapText += spacer.line(padLength, " ");
      wrapText += character;
      return wrapText;
    },
    box: function (text, length, character) {
      var boxText = spacer.newLine();
      boxText += spacer.line(length, character) + spacer.newLine();
      boxText += spacer.wrap(text, length, character) + spacer.newLine();
      boxText += spacer.line(length, character) + spacer.newLine();
      return boxText;
    },
  };
  var getPlayerName = function (player) {
    return player.name;
  };
  var getPlayerHealth = function (player) {
    return player.name + " has health " + player.health;
  };
  var getPlayerPlace = function (player) {
    return player.name + " is in " + player.place;
  };
  var getPlayerItems = function (player) {
    var itemsString = "Items:" + spacer.newLine();
    player.items.forEach(function (item, index) {
      itemsString += "   " + (index + 1) + ". " + item + spacer.newLine(); // Use index for numbering (starts at 1)
    });
    return itemsString;
  };
  var getPlayerInfo = function (player, character) {
    var place = getPlayerPlace(player);
    var health = getPlayerHealth(player);
    var longest = Math.max(place.length, health.length) + 4;
    var info = spacer.box(getPlayerName(player), longest, character);
    info += spacer.wrap(place, longest, character);
    info += spacer.newLine() + spacer.wrap(health, longest, character);
    info += spacer.newLine() + spacer.line(longest, character);
    info += spacer.newLine();
    info += "  " + getPlayerItems(player);
    info += spacer.newLine();
    info += spacer.line(longest, character);
    info += spacer.newLine();
    return info;
  };
  var showPlayerInfo = function (player, character) {
    console.log(getPlayerInfo(player, character));
  };
  var player1 = {
    name: "Kandra",
    place: "The Dungeon of Doom",
    health: 50,
    items: ["a trusty lamp"],
  };
  showPlayerInfo(player1, "=");
  function showItem(player, itemNumber) {
    if (itemNumber <= 0 || itemNumber > player.items.length) {
      console.log("Invalid item number.");
      return;
    }
    const itemIndex = itemNumber - 1; // Adjust for zero-based indexing
    console.log(player.items[itemIndex]);
  }
  function addItem(player, itemTitle) {
    player.items.push(itemTitle);
  }