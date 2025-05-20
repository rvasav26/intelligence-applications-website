var startTime;
var clicked = "false";


function scroll2top() {
    window.scrollBy(0, -100000)
}
function start() {
    document.getElementById("startButton").disabled = "true";
    document.getElementById("startButton").style.cursor = "not-allowed";
    document.getElementById("startButton").className = "disabled";

    startTime = new Date().getTime();


}

function stop() {

    var elapsed = new Date().getTime() - startTime;
    elapsed = Math.round(222 / (elapsed / 60000));
    document.getElementById("content").innerHTML 
    document.getElementById("resultPlace").innerHTML = document.getElementById("resultPlace").innerHTML = "Words per minute: " + elapsed;






}
