var array = [
  "Select Month",
  "January",
  "February",
  "March",
  "April",
  "May",
  "June",
  "July",
  "August",
  "September",
  "October",
  "November",
  "December",
];

var zodiacSign;
var zodiacNumber;
var picture;
function createQuiz() {
  document.getElementById("content").innerHTML = "";

  var p = document.createElement("p");
  p.style.fontSize = "50px";
  var pText = document.createTextNode("Quiz");
  p.appendChild(pText);
  document.getElementById("content").appendChild(p);

  var zodiacInputMonth = document.createElement("select");
  zodiacInputMonth.id = "zodiacInputMonth";

  for (var i = 0; i < 13; i++) {
    var month = document.createElement("option");
    month.innerHTML = array[i];
    month.id = array[i];
    month.className = i;
    zodiacInputMonth.appendChild(month);
  }

  var zodiacInputDay = document.createElement("input");
  zodiacInputDay.setAttribute("type", "text");
  zodiacInputDay.maxLength = "2";
  zodiacInputDay.id = "zodiacInputDay";

  document.getElementById("content").innerHTML +=
    "Please enter the day of month you were born:<br>";
  document.getElementById("content").appendChild(zodiacInputDay);

  document.getElementById("content").innerHTML +=
    "<br><br>Please select the month you were born:<br>";
  document.getElementById("content").appendChild(zodiacInputMonth);
  document.getElementById("content").innerHTML += "<br><br><br>";
  document.getElementById("zodiacInputMonth").options[0].disabled = true;

  var finishButton = document.createElement("button");
  finishButton.innerHTML = "Calculate Zodiac Sign";

  finishButton.addEventListener("click", finishTest);

  document.getElementById("content").appendChild(finishButton);
}

function finishTest() {
  switch (document.getElementById("zodiacInputMonth").value) {
    case "January":
      zodiacNumber = 1;
      break;

    case "February":
      zodiacNumber = 2;
      break;

    case "March":
      zodiacNumber = 3;
      break;

    case "April":
      zodiacNumber = 4;
      break;

    case "May":
      zodiacNumber = 5;
      break;

    case "June":
      zodiacNumber = 6;
      break;

    case "July":
      zodiacNumber = 7;
      break;

    case "August":
      zodiacNumber = 8;
      break;

    case "September":
      zodiacNumber = 9;
      break;

    case "October":
      zodiacNumber = 10;
      break;

    case "November":
      zodiacNumber = 11;
      break;

    case "December":
      zodiacNumber = 12;
      break;
  }

  if (document.getElementById("zodiacInputDay").value < 10) {
    document.getElementById("zodiacInputDay").value =
      "0" + document.getElementById("zodiacInputDay").value;
  }

  var zodiacNumber2 =
    "" + zodiacNumber + document.getElementById("zodiacInputDay").value;

  switch (true) {
    case zodiacNumber2 >= 321 && zodiacNumber2 <= 419:
      zodiacSign = "Aries";

      break;
    case zodiacNumber2 >= 420 && zodiacNumber2 <= 520:
      zodiacSign = "Taurus";

      break;
    case zodiacNumber2 >= 521 && zodiacNumber2 <= 620:
      zodiacSign = "Gemini";

      break;
    case zodiacNumber2 >= 621 && zodiacNumber2 <= 722:
      zodiacSign = "Cancer";

      break;
    case zodiacNumber2 >= 723 && zodiacNumber2 <= 822:
      zodiacSign = "Leo";

      break;
    case zodiacNumber2 >= 823 && zodiacNumber2 <= 922:
      zodiacSign = "Virgo";

      break;
    case zodiacNumber2 >= 923 && zodiacNumber2 <= 1022:
      zodiacSign = "Libra";

      break;
    case zodiacNumber2 >= 1023 && zodiacNumber2 <= 1121:
      zodiacSign = "Scorpio";

      break;
    case zodiacNumber2 >= 1122 && zodiacNumber2 <= 1221:
      zodiacSign = "Sagittarius";

      break;
    case (zodiacNumber2 >= 1222 && zodiacNumber2 <= 1231) ||
      (zodiacNumber2 >= 11 && zodiacNumber2 <= 119):
      zodiacSign = "Capricorn";

      break;
    case zodiacNumber2 >= 120 && zodiacNumber2 <= 218:
      zodiacSign = "Aquarius";

      break;
    case zodiacNumber2 >= 219 && zodiacNumber2 <= 320:
      zodiacSign = "Pisces";

      break;
  }

  var zodiacDiv = document.createElement("div");
  zodiacDiv.id = "zodiacDiv";

  zodiacDiv.innerHTML += "Your Zodiac Sign:<br><br>" + zodiacSign;
  document.getElementById("content").innerHTML = "";
  document.getElementById("content").appendChild(zodiacDiv);
  document.getElementById("content").innerHTML += "<br><br>";

  zodiacSign = zodiacSign.toLowerCase();

  var zodiacImage = document.createElement("img");
  zodiacImage.src =
    "https://www.astrology-zodiac-signs.com/images/" + zodiacSign + ".jpg";
  zodiacImage.width = "200";
  zodiacImage.height = "200";
  zodiacImage.style.opacity = "0.6";

  var zodiacHref = document.createElement("a");

  var zodiacHrefText = document.createTextNode(
    "Learn more about your Zodiac Sign"
  );
  zodiacHref.appendChild(zodiacHrefText);
  zodiacHref.setAttribute(
    "href",
    "https://www.astrology-zodiac-signs.com/zodiac-signs/" + zodiacSign + "/"
  );
  zodiacHref.setAttribute("target", "blank");

  document.getElementById("content").appendChild(zodiacHref);
  document.getElementById("content").innerHTML += "<br><br>";
  document.getElementById("content").appendChild(zodiacImage);

  //document.getElementById("con2").style.display = "block"
}
