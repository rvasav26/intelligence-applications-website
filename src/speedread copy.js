var startTime;
var clicked = "false";

function scroll2top() {
  window.scrollBy(0, -100000);
}
function start() {
  startTime = new Date().getTime();
  document.getElementById("content").innerHTML =
    "Text: <br><br><br>" +
    document.getElementById("text").innerHTML +
    "<br><br>";
  var button = document.createElement("button");
  var buttonText = document.createTextNode("Done");
  button.appendChild(buttonText);
  button.addEventListener("click", stop);
  document.getElementById("content").appendChild(button);
}

function stop() {
  window.scrollTo(0, 0);
  var elapsed = new Date().getTime() - startTime;
  elapsed = Math.round(222 / (elapsed / 60000));
  var h1 = document.createElement("H1");
  var h1Text = document.createTextNode("Your words per minute: ");
  h1.appendChild(h1Text);

  document.getElementById("content").innerHTML = "";
  document.getElementById("content").appendChild(h1);
  var elapsedText = document.createElement("div");
  elapsedText.setAttribute("id", "elapsedText");
  var elapsedNumber = document.createTextNode(elapsed);
  elapsedText.appendChild(elapsedNumber);
  document.getElementById("content").appendChild(elapsedText);
  var hr = document.createElement("hr");
  document.getElementById("content").appendChild(hr);

  /*var testOption = document.createElement("p")
    testOption.style.textDecoration = "underline"
    testOption.style.cursor = "pointer"
    var testOptionText = document.createTextNode("Take comprehension test")
    testOption.appendChild(testOptionText);
    document.getElementById("content").appendChild(testOption)

    testOption.addEventListener("click", createTest);*/
}

function createTest() {
  document.getElementById("content").innerHTML = "";
  compH1 = document.createElement("h1");
  compH1Text = document.createTextNode("Comprehension Test:");
  compH1.appendChild(compH1Text);
  document.getElementById("content").appendChild(compH1);

  const questionText = [
    "100 to 201 AD",
    "252 to 413 AD",
    "1376 to 1401 AD",
    "319 to 554 AD",
    "Russia",
    "Italy",
    "Sweden",
    "Britain",
    "1944",
    "1947",
    "1966",
    "1940",
    "True",
    "False",
    "Not explained in the text",
    "I don't know",
  ];

  const questions = [
    "1) What time period did the Gupta Dynasty take place?",
    "2) Which European country took control of India?",
    "3) When was India granted independence from Britain?",
    "4) India and Pakistan have had strained relations",
  ];

  var questionCount = 0;

  for (var i = 0; i < questionText.length; i += 1) {
    console.log(questions[questionCount]);

    if (i === 0 || i === 4 || i === 8 || i === 12) {
      document.getElementById("content").innerHTML += "<br>";

      document.getElementById("content").innerHTML += questions[questionCount];

      questionCount += 1;
    }

    const para = document.createElement("p");

    para.style.cursor = "pointer";

    para.innerHTML = questionText[i];
    para.id = questionText[i];

    document.getElementById("content").appendChild(para);
  }

  for (var x = 0; x < questionText.length; x += 1) {
    var question = questionText[x];
    alert("Setting listener->" + document.getElementById(question));
    document.getElementById(question).addEventListener("click", () => {
      questionIsTrue(document.getElementById(question));
    });
  }
}

function questionIsTrue(answer) {
  alert("Event listener clicked->" + answer.id);
  if (answer.innerHTML === "319 to 554 AD") {
    alert("RIGHT");
  } else {
    alert(answer.id);
  }
}
