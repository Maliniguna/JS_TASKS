//cp9-task-1

var buildPlanet = function (name, position, type) {
    var planet = {};
    planet.name = name;
    planet.position = position;
    planet.type = type;
    return planet;
  };
  var planet1 = buildPlanet("Jupiter", 5, "Gas Giant");
  console.log(planet1.name);
  console.log(planet1.position);
  console.log(planet1.type);
  
  // 1) Build a second planet, using the buildPlanet function
  var planet2 = buildPlanet("Mars", 4, "Terrestrial");
  
  // 2) Log its name and type
  console.log(planet2.name);
  console.log(planet2.type);

//cp9-task-3

var buildPlanet = function (name, position, type) {
    var planet = {};
    planet.name = name;
    planet.position = position;
    planet.type = type;
    planet.showPlanet = function () {
      var info = planet.name + ": planet " + planet.position + " - " + planet.type;
      console.log(info);
    };
    return planet;
  };
  var planets = [
    buildPlanet("Jupiter", 5, "Gas Giant"),
    buildPlanet("Neptune", 8, "Ice Giant"),
    buildPlanet("Mercury", 1, "Terrestrial"),
  ];
  
  // 1) Add two more planets to the planets array
  planets.push(buildPlanet("Venus", 2, "Terrestrial"));
  planets.push(buildPlanet("Earth", 3, "Terrestrial"));
  
  // 2) Run the program to display them
  
  planets.forEach(function (planet) {
    planet.showPlanet();
  });
  
  // 3) Add code to visually separate each planet from the next
  console.log("\n---\n"); // Add a separator line between planets

//cp9-task-5

var Planet = function (name, position, type) {
    this.name = name;
    this.position = position;
    this.type = type;
    this.moons = [];
    this.showPlanet = function () {
      var info = this.name + ": planet " + this.position;
      info += " - " + this.type;
      console.log(info);
      console.log("Moons: " + this.moons.join(", ") + ".");
    };
    this.addMoon = function (moon) {
      this.moons.push(moon);
    };
    this.removeMoon = function () {
      this.moons.pop();
    };
  };
  var planet1 = new Planet("Jupiter", 5, "Gas Giant");
  planet1.addMoon("Io");
  planet1.addMoon("Europa");
  planet1.addMoon("Ganymede");
  planet1.showPlanet();
  
  // 1) Create a second planet
  var planet2 = new Planet("Pluto", 13.5, "Dwarf Planet"); // Pluto is now classified as a Dwarf Planet
  
  // 2) Add three moons to the second planet
  planet2.addMoon("Charon");
  planet2.addMoon("Styx");
  planet2.addMoon("Nix");
  
  // 3) Call the showPlanet method on the second planet
  planet2.showPlanet();
  
//cp9-task-7

var QuizQuestion = function (question, answer) {
    this.question = question;
    this.answer = answer;
    this.options = [];
    this.addOption = function (option) {
      this.options.push(option);
    }
    this.showQuestion = function () {
      console.log(this.question);
      this.options.forEach(function (option, i) {
        console.log("(" + (i + 1) + ") " + option);
      });
    };
  };
  var question1 = new QuizQuestion(
    "What is the capital of France?",
    "Paris"
  );
  question1.addOption("Bordeaux");
  question1.addOption("F");
  question1.addOption("Paris");
  question1.addOption("Brussels");
  question1.addOption("Lyon");
  question1.showQuestion();
  
  // 2) Create two more questions
  var question2 = new QuizQuestion(
    "What is the largest country in the world?",
    "Russia"
  );
  question2.addOption("Canada");
  question2.addOption("China");
  question2.addOption("United States");
  question2.addOption("Brazil");
  question2.addOption("Russia");
  var question3 = new QuizQuestion(
    "What is the tallest mountain in the world?",
    "Mount Everest"
  );
  question3.addOption("K2");
  question3.addOption("Mount Kilimanjaro");
  question3.addOption("Mount McKinley");
  question3.addOption("Mount Everest");
  question3.addOption("Aconcagua");
  
  // 3) At the console prompt type question2.showQuestion(); Press Enter
  question2.showQuestion();
  
  // 4) At the console prompt type question2.answer; Press Enter
  console.log(question2.answer);
  
  //cp9-task-8

  var CalendarEvent = function (title, startDate, startTime, endTime) {
    this.title = title;
    this.startDate = startDate;
    this.startTime = startTime;
    this.endTime = endTime;
    this.showEvent = function () {
      var dateString = this.startDate + " - (" + this.startTime + " - " + this.endTime + ")";
      console.log(this.title + ": " + dateString);
    };
  };
  var calEvent1 = new CalendarEvent(
    "Annual Review",
    "3/5/16",
    "4.00pm",
    "5.00pm"
  );
  calEvent1.showEvent();
  
  // 1) Add a second event
  var calEvent2 = new CalendarEvent(
    "Team Meeting",
    "3/10/16",
    "10.00am",
    "11.30am"
  );
  
  // 2) Call the showEvent method on your new calendar event
  calEvent2.showEvent();