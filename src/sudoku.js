var sudokuArray = [
    6, 2, 1, 7, 8, 9, 5, 3, 4,
    3, 8, 5, 4, 6, 2, 1, 7, 9,
    7, 9, 4, 5, 3, 1, 2, 6, 8,
    1, 5, 9, 6, 2, 7, 4, 8, 3,
    4, 3, 8, 1, 9, 5, 7, 2, 6,
    2, 7, 6, 8, 4, 3, 9, 5, 1,
    8, 4, 2, 9, 7, 6, 3, 1, 5,
    5, 6, 3, 2, 1, 4, 8, 9, 7,
    9, 1, 7, 3, 5, 8, 6, 4, 2
]

var showNumbers = [
    "", 2, "", "", "", 9, 5, 3, "", 3, "",
    "", "", "", 2, 1, "", 9,
    "", "", "", 5, "", "", "", 6, "",
    1, "", "", 6, "", 7, "", 8, "",
    4, "", "", "", "", "", "", 2, "",
    2, "", 6, "", 4, 3, 9, 5, "",
    "", "", "", "", "", 6, "", "", "",
    "", "", "", "", 1, "", 8, "", 7,
    9, "", "", "", 5, "", "", 4, 2
]
var array;

var seconds = 0;
var minutes = 0;
var displaySeconds;
var displayMinutes;
var interval;
var x = 2;

function timer() {
    seconds += 1;

    if (seconds === 60) {
        seconds = 0;
        minutes += 1;
        if (minutes === 60) {
            minutes = 0;
        }
    }

    if (seconds < 10) {
        displaySeconds = "0" + seconds
    }
    else {
        displaySeconds = seconds;
    }
    if (minutes < 10) {
        displayMinutes = "0" + minutes
    }
    else {
        displayMinutes = minutes;
    }




    document.getElementById("timer").innerHTML = displayMinutes + ":" + displaySeconds;
}


function checkNumber(num) {

    for (var x = 0; x < 81; x++) {


        document.getElementById("cell" + x).style.backgroundColor = "white";


    }

    for (var x = 0; x < 81; x++) {

        if (document.getElementById("cell" + x).value === document.getElementById("cell" + num).value && document.getElementById("cell" + x).value != "") {

            document.getElementById("cell" + x).style.backgroundColor = "rgb(185, 218, 255)";

        }
    }
    if (document.getElementById("cell" + num).value == array[num]) {
        document.getElementById("cell" + num).style.backgroundColor = "lightGreen"
        document.getElementById("cell" + num).disabled = "true";

        var zy = 0;

        for (var x = 0; x < 81; x++) {
            if (document.getElementById("cell" + x).disabled === true) {
                zy += 1;
            }


        }

        if (zy === 81) {
            youWin()
            return
        }
    }
    else {

        //document.getElementById("cell" + num).style.backgroundColor = "rgb(129, 207, 233)"

        document.getElementById("cell" + num).style.backgroundColor = "rgb(185, 218, 255)"









    }


}

function resetBackground() {
    for (var x = 0; x < 81; x++) {


        document.getElementById("cell" + x).style.backgroundColor = "white";


    }
}

var div = document.createElement("div");

function youWin() {
    window.clearInterval(interval);

    div.innerHTML = "You Win!"
    div.id = "youWin";

    for (var x = 0; x < 81; x++) {


        document.getElementById("cell" + x).style.backgroundColor = "lightGreen";




    }
    document.getElementById("winPlace").innerHTML += "<br>"

    document.getElementById("winPlace").appendChild(div);
}

function onlyNumbers(evt) {
    evt = (evt) ? evt : window.event;
    var charCode = (evt.which) ? evt.which : evt.keyCode;
    if (charCode > 31 && (charCode < 49 || charCode > 57)) {
        return false;
    }


}

function newGame() {
    div.innerHTML = ""
    resetBackground()
    document.getElementById("timer").innerHTML = "00:00";
    seconds = 0;
    minutes = 0;
    window.clearInterval(interval);

    interval = window.setInterval(timer, 1000);



    array = [

        "", "", "", "", "", "", "", "", "",
        "", "", "", "", "", "", "", "", "",
        "", "", "", "", "", "", "", "", "",
        "", "", "", "", "", "", "", "", "",
        "", "", "", "", "", "", "", "", "",
        "", "", "", "", "", "", "", "", "",
        "", "", "", "", "", "", "", "", "",
        "", "", "", "", "", "", "", "", "",
        "", "", "", "", "", "", "", "", ""
    ]

    var randomNumbers = [1, 2, 3, 4, 5, 6, 7, 8, 9]

    for (var a = 0; a < 9; a++) {

        var index1 = Math.floor(Math.random() * randomNumbers.length);

        array[a] = randomNumbers[index1]




        randomNumbers.splice(index1, 1)


    }

    for (var h = 9; h < 18; h++) {
        if (h >= 15) {
            array[h] = array[h - 15]
        }
        else {


            array[h] = array[h - 6]

        }
    }

    for (var e = 18; e < 27; e++) {
        if (e >= 24) {
            array[e] = array[e - 15]
        }
        else {


            array[e] = array[e - 6]

        }
    }

    for (var e = 27; e < 36; e++) {
        if (e === 35) {
            array[e] = array[e - 17]
        }
        else {


            array[e] = array[e - 8]

        }
    }

    for (var e = 36; e < 45; e++) {
        if (e >= 42) {
            array[e] = array[e - 15]
        }
        else {


            array[e] = array[e - 6]

        }
    }

    for (var e = 45; e < 54; e++) {
        if (e >= 51) {
            array[e] = array[e - 15]
        }
        else {


            array[e] = array[e - 6]

        }
    }

    for (var e = 54; e < 63; e++) {


        if (e === 62) {

            array[e] = array[e - 17]
        }
        else {



            array[e] = array[e - 8]

        }

    }

    for (var e = 63; e < 72; e++) {
        if (e >= 69) {
            array[e] = array[e - 15]
        }
        else {


            array[e] = array[e - 6]

        }
    }
    for (var e = 72; e < 81; e++) {
        if (e >= 78) {
            array[e] = array[e - 15]
        }
        else {


            array[e] = array[e - 6]

        }
    }
    var p = 0;

    for (var e = 0; e < 9; e++) {

        array[p + 2] = [array[p], array[p] = array[p + 2]][0];
        p += 9
    }



    var p = 4;

    for (var e = 0; e < 9; e++) {

        array[p + 1] = [array[p], array[p] = array[p + 1]][0];
        p += 9
    }


    var p = 6;

    for (var e = 0; e < 9; e++) {

        array[p + 1] = [array[p], array[p] = array[p + 1]][0];
        p += 9
    }



    for (var x = 0; x < 81; x++) {


        document.getElementById("cell" + x).value = "";


    }
    var arr = [];

    for (var x = 0; x < 81; x++) {

        arr.push(x);

    }

    var showArray = array;


    for (var a = 0; a < 81; a++) {

        document.getElementById("cell" + a).value = array[a];
        document.getElementById("cell" + a).disabled = true

    }

    for (var a = 0; a < 30; a++) {

        var randomNumber = Math.floor(Math.random() * arr.length);

        document.getElementById("cell" + arr[randomNumber]).value = ""

        document.getElementById("cell" + arr[randomNumber]).disabled = false

        arr.splice(randomNumber, 1)


    }




















}
