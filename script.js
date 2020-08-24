//Global Variables
//This is where you will define the variables you will be using in your project.
//#TODO: Create four variables to track each possible quiz outcome
var questionCount = 0;
var boujeeScore = 0;
var environmentalistScore = 0;
var outgoingScore = 0;
var sportyScore = 0;
var result = document.getElementById("result");

//#TODO: Use the DOM to create variables for the first quiz question.
var q1a1 = document.getElementById("q1a1");
var q1a2 = document.getElementById("q1a2");
var q1a3 = document.getElementById("q1a3");
var q1a4 = document.getElementById("q1a4");

var q2a1 = document.getElementById("q2a1");
var q2a2 = document.getElementById("q2a2");
var q2a3 = document.getElementById("q2a3");
var q2a4 = document.getElementById("q2a4");

var q3a1 = document.getElementById("q3a1");
var q3a2 = document.getElementById("q3a2");
var q3a3 = document.getElementById("q3a3");
var q3a4 = document.getElementById("q3a4");

//#TODO: Add Event Listeners to your answer choice variables.
q1a1.addEventListener("click", boujee);
q1a2.addEventListener("click", environmantalist);
q1a3.addEventListener("click", outgoing);
q1a4.addEventListener("click", athletic);

q2a1.addEventListener("click", athletic);
q2a2.addEventListener("click", boujee);
q2a3.addEventListener("click", environmantalist);
q2a4.addEventListener("click", outgoing);

q3a1.addEventListener("click", environmantalist);
q3a2.addEventListener("click", athletic);
q3a3.addEventListener("click", boujee);
q3a4.addEventListener("click", outgoing);

//#TODO: Define quiz functions here
function boujee() {
  boujeeScore += 1;
  questionCount += 1;
  //alert("One Point to Boujee!");

  if (questionCount >= 3) {
    updateResult();
  }
}

function environmantalist() {
  environmentalistScore += 1;
  questionCount += 1;
  //alert("One Point to Environmentalist!");

  if (questionCount >= 3) {
    updateResult();
  }
}

function outgoing() {
  outgoingScore += 1;
  questionCount += 1;
  //alert("One Point to Outgoing!");

  if (questionCount >= 3) {
    updateResult();
  }
}

function athletic() {
  sportyScore += 1;
  questionCount += 1;
  //alert("One Point to Athletic!");

  if (questionCount >= 3) {
    updateResult();
  }
}

function updateResult() {
  if (boujeeScore >= 2) {
    result.innerHTML = "Boujee!";
  } else if (environmentalistScore >= 2) {
    result.innerHTML = "Environmentalist!";
  } else if (outgoingScore >= 2) {
    result.innerHTML = "Outgoing!";
  } else if (sportyScore >= 2) {
    result.innerHTML = "Athletic!";
  } else {
    result.innerHTML =
      "Hmm.. You seem to have multiple characteristics. Try again later.";
  }
}
