var categories = ["Countries", "Animals", "Famous People"]

var hangmanWordsCountries = ["france", "argentina", "russia", "india", "indonesia", "madagascar", "egypt", "australia", "china", "united states of america", "new zealand", "germany", "england", "canada", "nepal", "azerbaijan", "mongolia", "denmark", "andorra", "sierra leone", "belize", "pakistan", "bangladesh", "myanmar", "laos", "papua new guinea", "equitorial guinea", "montenegro", "jamaica", "aruba", "the netherlands", "finland", "kyrgyzstan", "tajikistan", "uzbekistan", "turkey", "romania", "bulgaria", "nigeria", "libya", "israel", "somalia"]



var hangmanWordsCountryCapitals = ["paris", "london", "moscow", "new delhi", "jakarta", "panama city", "cairo", "beijing", "washington dc", "berlin", "colombo", "brasilia", "lima", "quito", "oslo", "buenos aires", "madrid", "prague", "yerevan", "baku", "tokyo", "stockholm", "copenhagen", "kabul", "algiers", "tunis", "bogota", "san jose", "zagreb", "havana", "san salvador", "helsinki", "athens", "tehran", "baghdad", "dublin", "rome"]


var category = hangmanWordsCountries;
var hints = "on";
var inGame = false;
var lives = 5;
var clicked = true;
var randomWord;
var color1 = "red";
var color2 = "green";
var startTime;
var endTime;

var randomWord;
var randomWordArray;
var hintCharacters = [];


function awesome(){
    document.getElementById("directions").style.display = "none"
}
function changeHints() {
    if (inGame === true) {



        return
    }
    if (document.getElementById("hints").innerHTML === "On") {
        document.getElementById("hints").innerHTML = "Off"
        hints = "off";

    }
    else if (document.getElementById("hints").innerHTML === "Off") {
        document.getElementById("hints").innerHTML = "On"
        hints = "on"


    }
}

function changeDifficulty() {
    if (inGame === true) {
        return
    }
    if (document.getElementById("difficulty").innerHTML === "Easy") {
        document.getElementById("difficulty").innerHTML = "Medium"
        lives = 4;

    }
    else if (document.getElementById("difficulty").innerHTML === "Medium") {
        document.getElementById("difficulty").innerHTML = "Hard"
        difficulty = "hard"
        lives = 3;

    }
    else if (document.getElementById("difficulty").innerHTML === "Hard") {
        document.getElementById("difficulty").innerHTML = "Easy"
        difficulty = "easy"
        lives = 5;

    }
}
function changeCategory() {
    if (inGame === true) {
        return
    }
    if (document.getElementById("category").innerHTML === "Countries") {

        document.getElementById("category").innerHTML = "Country Capitals"
        category = hangmanWordsCountryCapitals;

    }
    else {

        document.getElementById("category").innerHTML = "Countries"
        category = hangmanWordsCountries;

    }



}

function startGame() {

    inGame = true;
    document.getElementById("hints").style.cursor = "default";
    document.getElementById("difficulty").style.cursor = "default";
    document.getElementById("category").style.cursor = "default";
    document.getElementById("hints").id = "inGame";
    document.getElementById("difficulty").id = "inGame";
    document.getElementById("category").id = "inGame";
    document.getElementById("startgame").disabled = "true"
    document.getElementById("startgame").className = "disabledButton"
    document.getElementById("startgame").id = "disabledStartButton"
    







    startTime = new Date().getTime();

    if (clicked === true) {
        document.getElementById("lives").innerHTML = "Lives: " + lives;
        var randomNumber = Math.floor(Math.random() * hangmanWordsCountries.length);

        randomWord = category[randomNumber]

        randomWordArray = randomWord.split("");

        var wordContainer = document.createElement("div");

        wordContainer.id = "wordContainer";
        wordContainer.style.letterSpacing = "2px";
        document.getElementById("content").appendChild(wordContainer)
        for (var y = 0; y < randomWordArray.length; y++) {
            var letterPlace = document.createElement("div");
            letterPlace.id = "letterPlace"
            if (randomWordArray[y] === " ") {

                letterPlace.innerHTML = " "
            }
            else {
                letterPlace.innerHTML = "_"
            }

            letterPlace.id = y

            letterPlace.style.display = "inline"
            letterPlace.style.fontSize = "30px"
            letterPlace.style.textAlign = "center"
            document.getElementById("wordContainer").appendChild(letterPlace)





        }
        if (hints === "on") {
            var hintButton = document.createElement("button")
            hintButton.className = "normalButton"
            hintButton.id = "hintButton"
            hintButton.innerHTML = "Get Hint"
            hintButton.addEventListener("click", getHint)
            document.getElementById("content").innerHTML += "<br>"
            document.getElementById("content").appendChild(hintButton);
        }
    }
    clicked = false;
}
function checkCharacter(character) {

    if (document.getElementById("lives").innerHTML === "") {
        alert("To begin the game, press the start game button.")
    }
    else {
        document.getElementById(character).disabled = "true";
        document.getElementById(character).className = "noButton";

        if (randomWordArray.includes(character)) {

            for (var x = 0; x < randomWordArray.length; x++) {
                if (randomWordArray[x] === character) {
                    document.getElementById(x).innerHTML = character


                }

            }
            var array = document.getElementById("wordContainer").innerHTML.split("");
            if (array.includes("_") === false) {

                endTime = (new Date().getTime() - startTime) / 1000;
document.getElementById("content").innerHTML += "<br>";
                var playAgainButton = document.createElement("button");
                playAgainButton.innerHTML = "Play Again";
                document.getElementById("content").appendChild(playAgainButton);


                playAgainButton.className = "normalButton"
                playAgainButton.addEventListener("click", playAgain)



                youWin()
                window.setInterval(youWin, 1000)


            }
        }

        else {
            lives -= 1;
            document.getElementById("lives").innerHTML = "Lives: " + lives;

            if (lives === 0) {

                endTime = (new Date().getTime() - startTime) / 1000;
document.getElementById("content").innerHTML += "<br>";
                var playAgainButton = document.createElement("button");
                playAgainButton.innerHTML = "Play Again";
                document.getElementById("content").appendChild(playAgainButton);
                
                playAgainButton.className = "normalButton"
                playAgainButton.addEventListener("click", playAgain)

                gameOver()
                window.setInterval(gameOver, 1000)


            }
        }

    }
}


function gameOver() {

    
    var buttons = document.querySelectorAll(".letterButton");

    for (var a = 0; a < buttons.length; a++) {
        buttons[a].className = "noButton";

        buttons[a].disabled = "true";
    }

    document.getElementById("wordContainer").innerHTML = "Game Over!<br>The correct answer was: " + randomWord + "<br>Time taken: " + endTime + " seconds";
    if (color1 === "red") {
        document.getElementById("wordContainer").style.color = color1;
        document.getElementById("wordContainer").style.fontWeight = "bold";

        color1 = "black";
    }
    else {
        document.getElementById("wordContainer").style.color = color1;
        document.getElementById("wordContainer").style.fontWeight = "normal";


        color1 = "red";
    }
    document.getElementById("hintButton").style.display = "none"

}

function youWin() {





    var buttons = document.querySelectorAll(".letterButton");

    for (var a = 0; a < buttons.length; a++) {
        buttons[a].className = "noButton";

        buttons[a].disabled = "true";
    }

    document.getElementById("wordContainer").innerHTML = "You Win!<br>Time taken: " + endTime + " seconds";
    if (color2 === "green") {
        document.getElementById("wordContainer").style.color = color2;
        document.getElementById("wordContainer").style.fontWeight = "bold";
        color2 = "black";
    }
    else {
        document.getElementById("wordContainer").style.color = color2;
        document.getElementById("wordContainer").style.fontWeight = "normal";


        color2 = "green";
    }
    document.getElementById("hintButton").style.display = "none"

}

function playAgain() {
    window.location.reload()
}
function getHint() {
    var b = Math.floor(Math.random() * randomWordArray.length);


    if (randomWordArray[b] === " " || document.getElementById(b).innerHTML === randomWordArray[b]) {

        getHint()
    }
    else {
        checkCharacter(randomWordArray[b])
        hintCharacters.push(randomWordArray[b])


    }
    document.getElementById("hintButton").disabled = "true";
    document.getElementById("hintButton").className = "disabledButton"








}