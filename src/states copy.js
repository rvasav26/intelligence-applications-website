var states = [
  "Alabama",
  "Alaska",
  "Arizona",
  "Arkansas",
  "California",
  "Colorado",
  "Connecticut",
  "Delaware",
  "Florida",
  "Georgia",
  "Hawaii",
  "Idaho",
  "Illinois",
  "Indiana",
  "Iowa",
  "Kansas",
  "Kentucky",
  "Louisiana",
  "Maine",
  "Maryland",
  "Massachusetts",
  "Michigan",
  "Minnesota",
  "Mississippi",
  "Missouri",
  "Montana",
  "Nebraska",
  "Nevada",
  "New Hampshire",
  "New Jersey",
  "New Mexico",
  "New York",
  "North Carolina",
  "North Dakota",
  "Ohio",
  "Oklahoma",
  "Oregon",
  "Pennsylvania",
  "Rhode Island",
  "South Carolina",
  "South Dakota",
  "Tennessee",
  "Texas",
  "Utah",
  "Vermont",
  "Virginia",
  "Washington",
  "West Virginia",
  "Wisconsin",
  "Wyoming",
];

var capitals = [
  "Montgomery",
  "Juneau",
  "Phoenix",
  "Little Rock",
  "Sacramento",
  "Denver",
  "Hartford",
  "Dover",
  "Tallahassee",
  "Atlanta",
  "Honolulu",
  "Boise",
  "Springfield",
  "Indianapolis",
  "Des Moines",
  "Topeka",
  "Frankfort",
  "Baton Rouge",
  "Augusta",
  "Annapolis",
  "Boston",
  "Lansing",
  "St. Paul",
  "Jackson",
  "Jefferson City",
  "Helena",
  "Lincoln",
  "Carson City",
  "Concord",
  "Trenton",
  "Santa Fe",
  "Albany",
  "Raleigh",
  "Bismarck",
  "Columbus",
  "Oklahoma City",
  "Salem",
  "Harrisburg",
  "Providence",
  "Columbia",
  "Pierre",
  "Nashville",
  "Austin",
  "Salt Lake City",
  "Montpelier",
  "Richmond",
  "Olympia",
  "Charleston",
  "Madison",
  "Cheyenne",
];

var buttons = ["option1", "option2", "option3", "option4"];
var question;
var alreadyUsedStates = [];
var alreadyUsedOptions = [];
var r;
var answer;
var correctCount = 0;
var questionCount = 0;
function startTest() {
  document.getElementById("totalContainer").style.display = "unset";

  document.getElementById("main").innerHTML = "";

  createQuestion();
}

function createQuestion() {
  resetButtons("on");

  questionCount += 1;

  document.getElementById("questionCount").innerHTML =
    "Question " + questionCount + " of 10";

  r = createRandomNumber();

  question = states[r];

  answer = capitals[r];

  var options = createOptions();

  var randomNumber = Math.floor(Math.random() * 2);

  options.splice(randomNumber, 0, answer);

  document.getElementById("question").innerHTML =
    "What is the Capital of " + question + "?";

  document.getElementById("option1").innerHTML = options[0];

  document.getElementById("option2").innerHTML = options[1];

  document.getElementById("option3").innerHTML = options[2];

  document.getElementById("option4").innerHTML = options[3];
}

function createRandomNumber() {
  rNum = Math.floor(Math.random() * states.length);

  if (alreadyUsedStates.includes(states[rNum])) {
    createRandomNumber();
  } else {
    alreadyUsedStates.push(states[rNum]);
  }

  return rNum;
}
function createOptions() {
  if (r - 15 < 0) {
    option1 = r + 4;
    option2 = r + 15;
    option3 = r + 12;
  } else if (r + 15 > 0) {
    option1 = r - 4;
    option2 = r - 15;
    option3 = r - 12;
  } else {
    option1 = r + 1;
    option2 = r + 2;
    option3 = r + 3;
  }

  option1 = capitals[option1];

  option2 = capitals[option2];

  option3 = capitals[option3];

  return [option1, option2, option3];
}

function checkAnswer(choice) {
  if (document.getElementById("option" + choice).innerHTML === answer) {
    document.getElementById("correctIncorrect").innerHTML = "Correct!";

    document.getElementById("option" + choice).style.backgroundColor = "Green";
    resetButtons("off");

    document.getElementById("continueContainer").style.display = "unset";

    document.getElementById("continueOn").innerHTML = "Continue";

    correctCount += 1;
  } else {
    document.getElementById("correctIncorrect").innerHTML =
      "Incorrect! The Capital of " + question + " is " + answer + ".";

    document.getElementById("option" + choice).style.backgroundColor = "Red";
    resetButtons("off");
    document.getElementById("continueContainer").style.display = "unset";

    document.getElementById("continueOn").innerHTML = "Continue";
  }

  if (questionCount === 10) {
    resetButtons("off");
    document.getElementById("continueContainer").style.display = "unset";

    document.getElementById("continueOn").innerHTML = "Finish";

    return;
  }
}

function resetButtons(onOrOff) {
  if (onOrOff === "off") {
    for (var i = 0; i < buttons.length; i++) {
      document.getElementById(buttons[i]).style.pointerEvents = "none";
    }
  } else {
    for (var i = 0; i < buttons.length; i++) {
      document.getElementById(buttons[i]).style.pointerEvents = "auto";
    }
  }
}
function resetContinue() {
  document.getElementById("continueContainer").style.display = "none";
}

function resetColors() {
  for (var i = 0; i < buttons.length; i++) {
    document.getElementById(buttons[i]).style.backgroundColor = "royalBlue";
    document.getElementById(buttons[i]).style.backgroundColor = "royalBlue";
  }
}

function resetText() {
  document.getElementById("correctIncorrect").innerHTML = "";
}

function continueOn() {
  if (document.getElementById("continueOn").innerHTML === "Finish") {
    resetColors();
    resetText();
    resetContinue();
    createQuestion();
    endTest();
  } else {
    resetColors();
    resetText();
    resetContinue();
    createQuestion();
  }
}

function endTest() {
  document.getElementById("main").innerHTML = "";

  document.getElementById("totalContainer").innerHTML = "";

  document.getElementById("endResultScore").innerHTML =
    "Your Score: " + correctCount;

  document.getElementById("endResultFinal").innerHTML =
    correctCount + " out of 10 answers correct.";

  document.getElementById("endResultPercent").innerHTML =
    (correctCount / 10) * 100 + "%";

  var again = document.createElement("button");
  again.id = "again";
  document.getElementById("endResultScore").appendChild(again);
}
