var words = [
  "Understand",
  "Don't Understand",
  "Yes",
  "No",
  "Hurt",
  "Good Morning",
  "Thank You",
  "Again",
  "Need",
  "I or Me",
  "Rhushil",
  "How Many",
  "Me",
  "You",
  "Help",
  "Eat",
  "Like",
  "Sorry",
  "Please",
  "Good",
  "Want",
  "Today",
  "Mom",
  "Which",
  "Tomorrow",
  "Yesterday",
  "Morning",
  "Night",
  "Every Day",
  "Bad", //Missing??
  "Small",
  "Big",
  "Food",
  "Not", //Missing??
  "Dad", //Missing??
  "Here",
  "There",
  "Hot",
  "Cold",
  "Where",
  "Why",
  "What", //
  "When",
  "Nana",
  "Nani",
  "How Much",

  "Bathroom",
  "Class",
  "Have",
  "Think",
  "Name",
  "Who",
  "Sign",
  "Learn",
  "Hard of Hearing",
  "Nice",
  "Clean",
  "How",
  "Spell",
  "Fine",
];

var images = [
  "https://media1.giphy.com/media/l4Jz6lkydXsNEfuWk/giphy.gif",
  "https://media2.giphy.com/media/26FL0X4d3Epuecpj2/giphy.gif",
  "https://media3.giphy.com/media/H6QsadsWoD3RHcQWrk/giphy.gif",
  "https://media2.giphy.com/media/l4Jz4faxuS1FiSEV2/giphy.gif",
  "https://media3.giphy.com/media/3o7TKSkP392Tqsqk12/giphy.gif",
  "https://thumbs.gfycat.com/IdealShamelessGourami-size_restricted.gif",
  "https://www.lifeprint.com/asl101/gifs/t/thank-you.gif",
  "https://www.lifeprint.com/asl101/gifs/a/again.gif",
  "https://www.lifeprint.com/asl101/gifs/n/need.gif",
  "https://www.lifeprint.com/asl101/signjpegs/m/me1.jpg",
  "https://www.startasl.com/wp-content/uploads/asl-alphabet_wallpaper_1920x1200.png",
  "https://www.lifeprint.com/asl101/gifs/h/how-many.gif",
  "https://www.lifeprint.com/asl101/signjpegs/m/me1.jpg",
  "https://www.lifeprint.com/asl101/signjpegs/y/you.ht1.jpg",
  "https://www.lifeprint.com/asl101/signjpegs/h/help-me-03.jpg",
  "https://www.lifeprint.com/asl101/gifs/e/eat.gif",
  "https://www.lifeprint.com/asl101/gifs/l/like.gif",
  "https://www.lifeprint.com/asl101/gifs/s/sorry-A.gif",
  "https://media2.giphy.com/media/l0MYEXSLkUipy1zVK/giphy.gif",
  "https://www.lifeprint.com/asl101/gifs/g/good.gif",
  "https://www.lifeprint.com/asl101/gifs/w/want.gif",
  "https://www.lifeprint.com/asl101/gifs/n/now.gif",
  "https://www.lifeprint.com/asl101/gifs/m/mom.gif",
  "https://www.lifeprint.com/asl101/gifs/w/which.gif",
  "https://media4.giphy.com/media/l0HlVIYwcKAplTzsQ/source.gif",
  "https://www.lifeprint.com/asl101/gifs/y/yesterday.gif",
  "https://media2.giphy.com/media/3o6ZtrcJ9GCXGGw0ww/200.gif",
  "https://www.lifeprint.com/asl101/gifs/n/night.gif",
  "https://www.lifeprint.com/asl101/gifs/e/everyday.gif",
  "https://www.lifeprint.com/asl101/gifs/b/bad.gif",
  "https://www.lifeprint.com/asl101/gifs/s/small-1.gif",
  "http://www.lifeprint.com/asl101/gifs/b/big-large.gif",
  "https://www.lifeprint.com/asl101/gifs/e/eat.gif",
  "http://www.lifeprint.com/asl101/gifs/n/not-negative.gif",
  "http://www.lifeprint.com/asl101/gifs/d/dad-fast.gif",
  "https://www.lifeprint.com/asl101/gifs/h/here.gif",
  "https://www.lifeprint.com/asl101/signjpegs/t/there-c2.jpg",
  "https://res.cloudinary.com/spiralyze/image/upload/f_auto,w_auto/BabySignLanguage/DictionaryPages/hot.svg",
  "https://www.lifeprint.com/asl101/gifs/c/cold-winter.gif",
  "https://www.lifeprint.com/asl101/gifs/w/where.gif",
  "https://www.lifeprint.com/asl101/gifs/w/why.gif",
  "https://www.lifeprint.com/asl101/gifs/w/what.gif",
  "https://www.lifeprint.com/asl101/gifs/w/when.gif",
  "https://www.startasl.com/wp-content/uploads/asl-alphabet_wallpaper_1920x1200.png",
  "https://www.startasl.com/wp-content/uploads/asl-alphabet_wallpaper_1920x1200.png",
  "https://www.lifeprint.com/asl101/gifs/h/how-many.gif",

  "https://www.lifeprint.com/asl101/gifs/b/bathroom.gif",
  "https://res.cloudinary.com/spiralyze/image/upload/f_auto,w_auto/BabySignLanguage/DictionaryPages/class.svg",
  "https://www.lifeprint.com/asl101/gifs/h/have.gif",
  "https://www.lifeprint.com/asl101/gifs/t/think.gif",
  "https://www.lifeprint.com/asl101/gifs/n/name.gif",
  "https://www.lifeprint.com/asl101/gifs/w/who.gif",
  "https://www.lifeprint.com/asl101/gifs/s/signing-1-hands.gif",
  "https://www.lifeprint.com/asl101/gifs/l/learn.gif",
  "https://www.lifeprint.com/asl101/gifs/h/hard-of-hearing.gif",
  "https://www.lifeprint.com/asl101/gifs/n/nice.gif",
  "https://www.lifeprint.com/asl101/gifs/n/nice.gif",
  "https://www.lifeprint.com/asl101/gifs/h/how-2h.gif",
  "https://www.lifeprint.com/asl101/gifs/f/fingerspell.gif",
  "https://www.lifeprint.com/asl101/gifs/f/fine.gif",
];

var num = 0;
var x = 0;

function load(dir) {
  if (dir === "back") {
    if (x === 0) {
      x = words.length - 1;
    } else {
      x -= 1;
    }
  }

  if (dir === "forwards") {
    if (x === words.length - 1) {
      x = 0;
    } else {
      x += 1;
    }
  }

  //var random = Math.floor(Math.random() * words.length)

  var img = document.createElement("img");
  img.id = "img";
  clean();

  document.getElementById("wordPlace").innerHTML += words[x];
  document.getElementById("imagePlace").appendChild(img);
  img.id = "img";
  img.src = images[x];
  num += 1;
}

function prac() {
  var random = Math.floor(Math.random() * words.length);
  clean();

  var img1 = document.createElement("img");
  //img1.style.width = "400px"
  img1.id = "img1";
  img1.src = aImgs[random];
}

function clean() {
  document.getElementById("wordPlace").innerHTML = "";
  if (num > 0) {
    document.getElementById("img").remove();
  }
}

function replace(plaz) {
  if (plaz === "words") {
    window.location.href = "sign.html";
  } else if (plaz === "letters") {
    window.location.href = "sign2.html";
  } else if (plaz === "sentences") {
    window.location.href = "sign3.html";
  }
}
