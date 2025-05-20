var goHomeImg = document.createElement("img");
goHomeImg.id = "goHomeImg"
goHomeImg.src = "https://image.flaticon.com/icons/svg/25/25694.svg";


goHomeImg.title="Go Back to Home Page"

var goHomeA = document.createElement("a");

goHomeA.href = "home.html";

goHomeA.appendChild(goHomeImg);

document.body.appendChild(goHomeA)
