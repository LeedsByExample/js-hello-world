// const input = require('readline-sync');

// let userName = input.question("Welcome to my bar. What is your name? ");

// console.log(`Nice to meet you, ${userName}.`);

/*  
Welcome, new coder. 
Enter your code on line 7 to print 'Hello, World!' 
to the console (the panel on the right)
*/

//console.log("\"Hello, world\"");


/*  
Next, PLAY! 
Modify your code on line 7 to try to accomplish the tasks listed below:

   1. Change the message that is printed.
   2. Figure out what the parentheses do. Will the code work without them?
   3. Remove one or both quotation marks. Do we need to include both opening and closing quote marks? Is there a difference between using a single or a double quote (' vs. ")?
   4. Remove the semi-colon, ;.
   5. Print a number. (Bonus: Print two numbers added together).
   6. Print multiple messages one after the other.
   7. Print two messages on the same line.
   8. Print a message that contains quote marks, such as Quoth the Raven "Nevermore".
   9. Other. You choose!
*/

//Class 1 Exercise
//declare 3 variables: name, age, and favorite fruit

// let name = "Leeda ";
// let age = 26;
// let otherAge = 27;
// let favoriteFruit = "strawberry";
// console.log(5 % 5);
// console.log(name + favoriteFruit);

// console.log(age + otherAge + name); //adds number data type first, then adds string
// console.log(name + age + otherAge); //prints name then concatenates numbers


/////////////////////////////////////////////////////////////////////////////////////////////////////////////


// Declare and initialize the variables for exercise 1 here:

// BEFORE running the code, predict what will be printed to the console by the following statements:

let engineIndicatorLight = "red blinking";
let spaceSuitsOn = true;
let shuttleCabinReady = true;
let crewStatus = spaceSuitsOn && shuttleCabinReady;
let computerStatusCode = 20;
let shuttleSpeed = 15000;



// 3) Write conditional expressions to satisfy the following safety rules:

// a) If crewStatus is true, print "Crew Ready" else print "Crew Not Ready".
if (crewStatus === true) {
   console.log("Crew Ready");
} else {
   console.log("Crew Not Ready");
}

// b) If computerStatusCode is 200, print "Please stand by. Computer is rebooting." Else if computerStatusCode is 400, print "Success! Computer online." Else print "ALERT: Computer offline!"
if (computerStatusCode === 200) {
   console.log("Please stand by. Computer is rebooting.");
} else if (computerStatusCode === 400) {
   console.log("Success! Computer online.");
} else {
   console.log("ALERT: Computer offline!");
}

// c) If shuttleSpeed is > 17,500, print "ALERT: Escape velocity reached!" Else if shuttleSpeed is < 8000, print "ALERT: Cannot maintain orbit!" Else print "Stable speed".
if (shuttleSpeed > 17500) {
   console.log("ALERT: Escape velocity reached!");
} else if (shuttleSpeed < 8000) {
   console.log("ALERT: Cannot maintain orbit!");
} else {
   console.log("Stable speed");
}

// 4) PREDICT: Do the code blocks shown in the 'predict.txt' file produce the same result?

console.log(/* "Yes" or "No" */);

if (crewStatus && computerStatusCode === 200 && spaceSuitsOn) {
   console.log("all systems go");
} else {
   console.log("WARNING. Not ready");
}

if (!crewStatus || computerStatusCode !== 200 || !spaceSuitsOn) {
   console.log("WARNING. Not ready");
} else {
   console.log("all systems go");
}

///QUESTION: WHY ARE THESE TWO CODE BLOCKS PRODUCING THE SAME RESULT

//let engineIndicatorLight = 'red blinking';
let fuelLevel = 21000;
let engineTemperature = 1200;

/*
//5) Implement the following checks using if/else if/else statements:

//a) If fuelLevel is above 20000 AND engineTemperature is at or below 2500, print "Full tank. Engines good."
if (fuelLevel > 20000 && engineTemperature <= 2500) {
   console.log("Full tank. Engines good.");
}

//b) If fuelLevel is above 10000 AND engineTemperature is at or below 2500, print "Fuel level above 50%.  Engines good."
if (fuelLevel > 10000 && engineTemperature <= 2500) {
   console.log("Fuel level above 50%. Engines good.");
}

//c) If fuelLevel is above 5000 AND engineTemperature is at or below 2500, print "Fuel level above 25%. Engines good."
if (fuelLevel > 5000 && engineTemperature <= 2500) {
   console.log("Fuel level above 25%. Engines good.");
}

//d) If fuelLevel is at or below 5000 OR engineTemperature is above 2500, print "Check fuel level. Engines running hot."
if (fuelLevel <= 5000 || engineTemperature > 2500) {
   console.log("Check fuel level. Engines running hot.");
}

//e) If fuelLevel is below 1000 OR engineTemperature is above 3500 OR engineIndicatorLight is red blinking print "ENGINE FAILURE IMMINENT!" 
if (fuelLevel < 1000 || engineTemperature > 3500 || engineIndicatorLight === 'red blinking') {
   console.log("ENGINE FAILURE IMMINENT!"); 
}
*/

//f) Otherwise, print "Fuel and engine status pending..." 

// Code 5a - 5f here:
if (fuelLevel < 1000 || engineTemperature > 3500 || engineIndicatorLight === 'red blinking') {
   console.log("ENGINE FAILURE IMMINENT!");
} else if (fuelLevel <= 5000 || engineTemperature > 2500) {
   console.log("Check fuel level. Engines running hot.");
} else if (fuelLevel > 20000 && engineTemperature <= 2500) {
   console.log("Full tank. Engines good.");
} else if (fuelLevel > 10000 && engineTemperature <= 2500) {
   console.log("Fuel level above 50%. Engines good.");
} else if (fuelLevel > 5000 && engineTemperature <= 2500) {
   console.log("Fuel level above 25%. Engines good.");
} else {
   console.log("Fuel and engine status pending.");
}


// 6) a) Create the variable commandOverride, and set it to be true or false. If commandOverride is false, then the shuttle should only launch 
//       if the fuel and engine check are OK. If commandOverride is true, then the shuttle will launch regardless of the fuel and engine status.
//       fuelLevel = 21000
//       engineTemperature = 1200
let commandOverride = false;

if (!commandOverride) {
   if (fuelLevel > 5000 && engineTemperature <= 2500) {
      console.log("Shuttle ready to launch!");
   } else {
      console.log("WARNING: ENGINE FAILURE IMMINENT");
   }
} else {
   console.log("Shuttle ready to launch!");
}


/* 6) b) Code the following if/else check:
If fuelLevel is above 20000 AND engineIndicatorLight is NOT red blinking OR commandOverride is true print "Cleared to launch!" Else print "Launch scrubbed!" */
if (fuelLevel > 20000 && engineIndicatorLight !== 'red blinking' || commandOverride === false) {
   console.log("Cleared to launch!");
} else {
   console.log("Launch scrubbed!");
}

