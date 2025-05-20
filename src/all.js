var goHomeImg = document.createElement("img");
goHomeImg.id = "goHomeImg"
goHomeImg.src = "../images/GoHome.png";


goHomeImg.title="Go Back to Home Page"

var goHomeA = document.createElement("a");

goHomeA.href = "../index.html";

goHomeA.appendChild(goHomeImg);

document.body.appendChild(goHomeA)
