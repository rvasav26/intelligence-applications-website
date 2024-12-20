var level = 0;
var seconds;
var interval;
var randomNumber;

function resetAll() {
    document.getElementById("p").innerHTML = "";



    document.getElementById("start").innerHTML = "";

    document.getElementById("number").innerHTML = "";

    document.getElementById("countDown").innerHTML = "";





}
function start() {
    if (level <=3) {
        seconds = 5;
    }
    else {

    
    seconds = 10;
    }
    document.getElementById("countDown").style.fontWeight = "bold"

    document.getElementById("countDown").innerHTML = "Seconds left: " + seconds

    document.getElementById("start").innerHTML = ""



    if (level === 0) {
        var min = 0;
        var max = 9;
    }
    else {
        var min = 10 ** level
        var max = (min * 10) - 1
    }


    randomNumber = Math.floor(Math.random() * (max - min + 1) + min);

    document.getElementById("p").innerHTML = "Memorize this number:"

    document.getElementById("number").innerHTML = randomNumber

    level += 1

    interval = window.setInterval(
        countDown, 1000
    )

}

function countDown() {



    seconds -= 1;



    document.getElementById("countDown").innerHTML = "Seconds left: " + seconds

    if (seconds === 0) {
        document.getElementById("countDown").innerHTML = "Seconds left: " + seconds
        window.clearInterval(interval);

        question()
    }


}

function question() {


    document.getElementById("countDown").innerHTML = "";

    document.getElementById("number").innerHTML = "";

    document.getElementById("p").innerHTML = "";

    document.getElementById("p").innerHTML = "What was the number?";

    var button = document.createElement("button")

    button.innerHTML = "Submit";
    button.id = "button";


    button.addEventListener("click", checkAnswer)

    button.style.position = "relative";

    var input = document.createElement("input")

    input.id = "input"
    input.autofocus = "true"

    input.addEventListener("keyup", function (event) {

        if (event.keyCode === 13) {

            event.preventDefault();

            document.getElementById("button").click();
        }
    });
    input.setAttribute("type", "text")


    input.setAttribute("placeholder", "Enter your answer");

    var block = document.createElement("div");

    block.id = "block";
    block.style.display = "block";
    block.style.height = "20px";









    document.getElementById("test").appendChild(input)

    document.getElementById("test").appendChild(block)



    document.getElementById("test").appendChild(button)






}

function checkAnswer() {
    if (document.getElementById("input").value === "") {
        return
    }
    else if (document.getElementById("input").value != randomNumber) {
        wrong()
    }
    else {
        right()
    }
}

function wrong() {
    document.getElementById("input").parentNode.removeChild(document.getElementById("input"));

    document.getElementById("button").parentNode.removeChild(document.getElementById("button"));

    document.getElementById("block").parentNode.removeChild(document.getElementById("block"));

    resetAll();

    document.getElementById("p").innerHTML = "Incorrect! <br><br> The correct answer was: " + randomNumber+"<br><br><b>Your Score: "+level+"</b>";
}

function right() {


    document.getElementById("input").parentNode.removeChild(document.getElementById("input"));

    document.getElementById("button").parentNode.removeChild(document.getElementById("button"));

    document.getElementById("block").parentNode.removeChild(document.getElementById("block"));



    resetAll()

    var continueButton = document.createElement("button");

    continueButton.innerHTML = "Continue";

    continueButton.id = "continueButton"
    continueButton.addEventListener("click", continueTest)


    document.getElementById("p").innerHTML = "That's Right!";

    document.getElementById("test").appendChild(continueButton)


}

function continueTest() {
    document.getElementById("continueButton").parentNode.removeChild(document.getElementById("continueButton"));

    resetAll()
    start()
}