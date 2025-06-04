function replace(plaz) {
  if (plaz === "words") {
    window.location.href = "sign.html";
  } else if (plaz === "letters") {
    window.location.href = "sign2.html";
  } else if (plaz === "sentences") {
    window.location.href = "sign3.html";
  }
}

var x = 0;
var num = 0;

var sentences = [
  "How are you?",
  "What is your name?",
  "Are you hot?",
  "Are you cold?",
  "I am good.",
  "I am fine.",
  "I need help.",
  "My ___ hurts.",
  "No class today.",
  "Class tomorrow.",
  "Do you have class today?",
  "When do you want food?",
  "I am hard of hearing.",
  "Thank you, the food is good.",
  "I like the food.",
  "Please spell/sign ____.",
];

function load(dir) {
  if (dir === "back") {
    if (x === 0) {
      x = sentences.length - 1;
    } else {
      x -= 1;
    }
  }

  if (dir === "forwards") {
    if (x === sentences.length - 1) {
      x = 0;
    } else {
      x += 1;
    }
  }

  //var random = Math.floor(Math.random() * words.length)

  clean();

  document.getElementById("wordPlace").innerHTML += sentences[x];

  num += 1;
}

function clean() {
  document.getElementById("wordPlace").innerHTML = "";
}
