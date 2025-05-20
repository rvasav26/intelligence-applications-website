var riddles = [
    "What runs around the whole yard without moving?",

    "What can you catch but never throw?",

    "You see a boat filled with people, yet there isn’t a single person on board. How is that possible?",

    "What has many keys but can’t open a single lock?",

    "What is black when it’s clean and white when it’s dirty?",

    "What gets bigger when more is taken away?"

]

var answers = [
    "A fence.",

    "A cold.",

    "All the people on the boat are married.",

    "A piano.",

    "A chalkboard.",

    "A hole.",

]

var riddle;

function generateRiddle() {


    document.getElementById("answerPlace").innerHTML = "";
    document.getElementById("riddlePlace").innerHTML = "";
    document.getElementById("answerButton").innerHTML = "View Answer";

    riddle = riddles[Math.floor(Math.random() * riddles.length)]


    document.getElementById("riddlePlace").innerHTML = riddle;




}

function viewAnswer() {
    if (document.getElementById("answerButton").innerHTML === "Hide Answer") {

        document.getElementById("answerButton").innerHTML = "View Answer";

        document.getElementById("answerPlace").innerHTML = "";

    }
    else {


        var index = riddles.indexOf(riddle);

        document.getElementById("answerPlace").innerHTML = answers[index];



        document.getElementById("answerButton").innerHTML = "Hide Answer"


    }





}
function visitPage(url) {
    if (url === "") {
        return
    }
    else {


        window.open(url)
    }
}
