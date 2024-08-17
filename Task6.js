//cp6-task-1

var getMessage = function () {
    return "I’m going on an adventure!";
};
var response = getMessage();
console.log(response);
var getMyMessage = function () {
    return "The journey begins now!";
};
console.log(getMyMessage());

//cp6-task-3

var getHelloTo;
getHelloTo = function (name) {
    var template = "Hello to {{name}}";
    template = template.replace("{{name}}", name);
    return template;
};
console.log(getHelloTo("Kandra"));
console.log(getHelloTo("Dax"));

//cp6-task-5

var totalCost;
totalCost = function (callOutCharge, costPerHour, numberOfHours, discount) {
    var total = callOutCharge + costPerHour * numberOfHours;
    return total - discount;
};
console.log("$" + totalCost(30, 40, 12, 0)); 
console.log("$" + totalCost(30, 40, 3, 20));

//cp6-task-7

var getPlayerName;
getPlayerName = function (playerName) {
    var prefixSuffix = "====";
    return prefixSuffix + " " + playerName + " " + prefixSuffix;
};
console.log(getPlayerName("Kiki"));  
console.log(getPlayerName("Mahesha")); 
var getPlayerNameWithBorder;
getPlayerNameWithBorder = function (playerName) {
    var border = "|";
    var lineBreak = "\n";
    return border + lineBreak +
           border + " " + playerName + lineBreak +
           border;
};
console.log(getPlayerNameWithBorder("Jahver"));




































































































