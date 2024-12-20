var interval = 0;
var clicked = false;
var fonts = [
    "fantasy",
    "cursive"
]
var index;

var slideCount = 0

//make images for unnamed into nature images.

var quotes = [

    "Happiness can be found even in the darkest of times, if one only remembers to turn on the light. - Albus Dumbledore",

    "Be who you are and say what you feel, because those who mind don't matter, and those who matter don't mind. - Dr Suess",

    "If you want happiness for an hour, take a nap. If you want happiness for a day, go fishing. If you want happiness for a year, inherit a fortune. If you want happiness for a lifetime, help someone else. - Chinese Proverb",

    "You can't go back and change the beginning, but you can start where you are and change the ending. - C S Lewis",

    "Live as if you were to die tomorrow. Learn as if you were to live forever. - Mahatma Gandhi",

    "Wise men speak because they have something to say; fools because they have to say something. - Plato",

    "An eye for eye only ends up making the whole world blind. - Mahatma Gandhi",

    "Happiness is when what you think, what you say, and what you do are in harmony. - Mahatma Gandhi",

    "Earth provides enough to satisfy every man's needs, but not every man's greed. - Mahatma Gandhi",

    "The pessimist sees difficulty in every opportunity. The optimist sees the opportunity in every difficulty. - Winston Churchill",

    "Don't let yesterday take up too much of today. - Will Rogers",

    "It's not whether you get knocked down, it's whether you get up. - Vince Lombardi",

    "Tell me and I forget. Teach me and I remember. Involve me and I learn. - Benjamin Franklin",

    "We can never obtain peace in the outer world until we make peace with ourselves. - Dalai Lama",

    //"The only thing that can stop yourself from succeeding is your mind. Don't let it. - Unknown", //R
 
    "I never lose. I either win or learn. - Nelson Mandela",

    "No one can hurt you without your consent. - Eleanor Roosevelt", 

    //"If you have enough energy to complain about something, you have enough energy to fix it. - Unknown", //R

   // "Happy thoughts will lead to happy actions. Happy actions will lead to a happy life. - Unknown", //R

    "Nothing matches the happiness you get when you help someone. - Unknown", //R

    "If you want to go fast, go alone. If you want to go far, go together. - African Proverb", 

    "The real measure of your wealth is how much you’d be worth if you lost all your money. - Bernard Meltzer", 

    "Yesterday is history, tomorrow’s a mystery, and today is a gift. That is why they call it the present. - Master Oogway",

    "Don't cry because it's over. Smile because it happened. - Dr Seuss",

    "When we hit our lowest point, we are open to the greatest change. - Avatar Aang",

    "Numbing the pain for a while will make it worse when you finally feel it. - Albus Dumbledore",

    "It is not our abilities that show what we truly are, it is our choices. - Albus Dumbledore",

    "It is important to draw wisdom from many different places. If you take it from only one place, it becomes rigid and stale. - Iroh",

    "Sometimes life is like a dark tunnel, you can't always see the light at the end of the tunnel, but if you just keep moving forward, you will come to a better place. - Iroh",

    "While it is always best to believe in oneself, a little help from others can be a great blessing. - Iroh",

    "If you want to know what a man's like, take a good look at how he treats his inferiors, not his equals. - Sirius Black",

    "Darkness cannot drive out darkness; only light can do that. Hate cannot drive out hate; only love can do that. - Martin Luther King Jr",

    //"It is important to take small breaks from things you enjoy doing. This way you won't get tired of it, you will come back with new ideas, and you will get better at it. - Unknown", //R

    "Of course it is happening inside your head, Harry, but why on earth should that mean that it is not real? - Albus Dumbledore",

    "It takes a great deal of bravery to stand up to your enemies, but a great deal more to stand up to your friends. - Albus Dumbledore",

    "You can't shake hands with a clenched fist. - Indira Gandhi", //Need to add url and image

    "Silence and smile are two powerful tools. Smile is the way to solve many problems and silence is the way to avoid many problems. - Iris Johansen",//Need to add url and image

    "One moment can change a day. One day can change a life. One life can change the world. - Buddha", //Need to add url and image

    "There are three solutions to every problem: accept it, change it, or leave it. If you can't accepit it, change it. If you can't change it, leave it. - Buddha", //Need to add url and image

    "When things change inside you, things change around you. - Buddha", //Need to add url and image

    "Never reply when you are angry. Never make a promise when you are happy. Never make a decision when you are sad. - Buddha", 

    "Anger is only one letter short of danger. - Buddha",

    "We can complain because rose bushes have thorns, or rejoice because thorn bushes have roses. - Abraham Lincoln",
                                                

   



    





]

var images = [
    "https://vignette.wikia.nocookie.net/hogwarts-life/images/7/75/AlbusDumbledore-003.jpg/revision/latest?cb=20170109115706", //Dumbledore

    "https://bostonglobe-prod.cdn.arcpublishing.com/resizer/z1fqcSBCRj9mTSkDwdRYkpKjVWA=/1440x0/arc-anglerfish-arc2-prod-bostonglobe.s3.amazonaws.com/public/VYV5A5FOBAI6PGPMGA7BKSJE2M.jpg", //Dr. Suess

    "https://www.flowerglossary.com/wp-content/uploads/2019/12/lotus-flower-on-water.png", //Chinese Proverb

    "https://www.independent.org/images/bios_retina/l/lewis_cs_540x702.jpg", //C.S. Lewis

    "https://encrypted-tbn0.gstatic.com/images?q=tbn%3AANd9GcS93sfPmciF_ZFYnFZcf-BmnTmdWJnd3rZSwg&usqp=CAU", //Mahatma Gandhi

    "https://vignette.wikia.nocookie.net/real-life-heroes/images/6/64/Plato300px.jpg/revision/latest?cb=20190427012956", //Plato

    "https://encrypted-tbn0.gstatic.com/images?q=tbn%3AANd9GcS93sfPmciF_ZFYnFZcf-BmnTmdWJnd3rZSwg&usqp=CAU", //Mahatma Gandhi

    "https://encrypted-tbn0.gstatic.com/images?q=tbn%3AANd9GcS93sfPmciF_ZFYnFZcf-BmnTmdWJnd3rZSwg&usqp=CAU", //Mahatma Gandhi

    "https://encrypted-tbn0.gstatic.com/images?q=tbn%3AANd9GcS93sfPmciF_ZFYnFZcf-BmnTmdWJnd3rZSwg&usqp=CAU", //Mahatma Gandhi

    "https://upload.wikimedia.org/wikipedia/commons/b/bc/Sir_Winston_Churchill_-_19086236948.jpg", //Winston Churchill

    "https://encrypted-tbn0.gstatic.com/images?q=tbn%3AANd9GcSU-XyZn6B7ytKvvYBM1AxARxhxCJCNU-7S_w&usqp=CAU", //Will Rogers

    "https://cdn4.sportngin.com/attachments/photo/1079/6819/Vince_Lombardi.png", //Vince Lombardi

    "https://upload.wikimedia.org/wikipedia/commons/thumb/2/25/Franklin-Benjamin-LOC.jpg/1200px-Franklin-Benjamin-LOC.jpg", //Benjamin Franklin

    "https://www.phayul.com/wp-content/uploads/Dalai-Lama.jpg", //Dalai Lama,

    //"https://c4.wallpaperflare.com/wallpaper/844/260/13/flowers-lavender-field-nature-purple-flower-hd-wallpaper-preview.jpg", //Unknown

    "https://s3.amazonaws.com/one_org_international/international/media/international/2018/07/03100859/10Facts_Featured.jpg", //Nelson Mandela

    "https://cdn.britannica.com/78/19578-050-E720BE72/Eleanor-Roosevelt-1950.jpg", //Eleanor Roosevelt

    //"https://images.unsplash.com/photo-1543862475-eb136770ae9b?ixid=MXwxMjA3fDB8MHxzZWFyY2h8Mnx8Zmxvd2VyJTIwZmllbGR8ZW58MHx8MHw%3D&ixlib=rb-1.2.1&w=1000&q=80", //Unknown

   //"https://www.adventure-journal.com/wp-content/uploads/2013/06/adventure-journal-songs-about-mountains.jpg", //Unknown

    "https://images.pexels.com/photos/355748/pexels-photo-355748.jpeg?auto=compress&cs=tinysrgb&dpr=1&w=500", //Unknown

    "https://i.pinimg.com/originals/f7/15/17/f7151775226a88486c861ab5fb1e3743.jpg", //African Proverb

    "https://www-news.uchicago.edu/releases/07/images/070104.meltzer.jpg", //Bernard Meltzer

    "https://static.wikia.nocookie.net/character-stats-and-profiles/images/d/d3/EKTwbfMUEAgrwTc.jpg/revision/latest/scale-to-width-down/340?cb=20200612053140", //Master Oogway

    "https://bostonglobe-prod.cdn.arcpublishing.com/resizer/z1fqcSBCRj9mTSkDwdRYkpKjVWA=/1440x0/arc-anglerfish-arc2-prod-bostonglobe.s3.amazonaws.com/public/VYV5A5FOBAI6PGPMGA7BKSJE2M.jpg", //Dr. Suess

    "https://i.pinimg.com/originals/38/e2/2b/38e22b067d48b18522980b027a09d12b.png", //Avatar Aang

    "https://vignette.wikia.nocookie.net/hogwarts-life/images/7/75/AlbusDumbledore-003.jpg/revision/latest?cb=20170109115706", //Albus Dumbledore

    "https://vignette.wikia.nocookie.net/hogwarts-life/images/7/75/AlbusDumbledore-003.jpg/revision/latest?cb=20170109115706", //Albus Dumbledore

    "https://i.pinimg.com/originals/e2/70/5f/e2705fb2707812dd80e3d6a1d49449df.jpg", //Iroh

    "https://i.pinimg.com/originals/e2/70/5f/e2705fb2707812dd80e3d6a1d49449df.jpg", //Iroh

    "https://i.pinimg.com/originals/e2/70/5f/e2705fb2707812dd80e3d6a1d49449df.jpg", //Iroh

    "https://www.tomshw.it/images/images/2020/07/harry-potter-101824.768x432.jpg", //Sirius Black

    "https://cdn.vox-cdn.com/thumbor/cF82gIbsk9dclGSyaFBfqdamBVk=/0x0:2862x2164/1200x800/filters:focal(1203x854:1659x1310)/cdn.vox-cdn.com/uploads/chorus_image/image/59263513/GettyImages_74280025.0.jpg", //Martin Luther King Jr.

    //"https://hips.hearstapps.com/hmg-prod.s3.amazonaws.com/images/nature-quotes-1557340276.jpg?crop=1.00xw:0.757xh;0,0.0958xh&resize=1200:*", //Unknown

    "https://vignette.wikia.nocookie.net/hogwarts-life/images/7/75/AlbusDumbledore-003.jpg/revision/latest?cb=20170109115706", //Dumbledore

    "https://vignette.wikia.nocookie.net/hogwarts-life/images/7/75/AlbusDumbledore-003.jpg/revision/latest?cb=20170109115706", //Dumbledore

    "https://www.thoughtco.com/thmb/ikV41tCmvKVFeCCHA8RS8hKXD2Y=/3543x2349/filters:fill(auto,1)/IndiraGandhi1983HultonGetty-56a042a63df78cafdaa0b882.jpg", //Indira Gandhi

    "", //Iris Johansen

    "https://upload.wikimedia.org/wikipedia/commons/9/9c/Buddha%27s_statue_near_Belum_Caves_Andhra_Pradesh_India.jpg",//Buddha

    "https://upload.wikimedia.org/wikipedia/commons/9/9c/Buddha%27s_statue_near_Belum_Caves_Andhra_Pradesh_India.jpg",//Buddha

    "https://upload.wikimedia.org/wikipedia/commons/9/9c/Buddha%27s_statue_near_Belum_Caves_Andhra_Pradesh_India.jpg", //Buddha

    "https://upload.wikimedia.org/wikipedia/commons/9/9c/Buddha%27s_statue_near_Belum_Caves_Andhra_Pradesh_India.jpg", //Buddha

    "https://upload.wikimedia.org/wikipedia/commons/9/9c/Buddha%27s_statue_near_Belum_Caves_Andhra_Pradesh_India.jpg", //Buddha

    "https://upload.wikimedia.org/wikipedia/commons/a/ab/Abraham_Lincoln_O-77_matte_collodion_print.jpg", //Abraham Lincoln






    

]

var urls = [
    "https://en.wikipedia.org/wiki/Albus_Dumbledore", //Dumbledore

    "https://en.wikipedia.org/wiki/Dr._Seuss", //Dr. Suess
    "",
    "https://en.wikipedia.org/wiki/C._S._Lewis", //C.S. Lewis

    "https://en.wikipedia.org/wiki/Mahatma_Gandhi", //Mahatma Gandhi

    "https://en.wikipedia.org/wiki/Plato", //Plato

    "https://en.wikipedia.org/wiki/Mahatma_Gandhi", //Mahatma Gandhi

    "https://en.wikipedia.org/wiki/Mahatma_Gandhi", //Mahatma Gandhi

    "https://en.wikipedia.org/wiki/Mahatma_Gandhi", //Mahatma Gandhi

    "https://en.wikipedia.org/wiki/Winston_Churchill", //Winston Churchill

    "https://en.wikipedia.org/wiki/Will_Rogers", //Will Rogers

    "https://en.wikipedia.org/wiki/Vince_Lombardi", //Vince Lombardi

    "https://en.wikipedia.org/wiki/Benjamin_Franklin", //Benjamin Franklin

    "https://en.wikipedia.org/wiki/Dalai_Lama", //Dalai Lama

    //"", //Unknown

    "https://en.wikipedia.org/wiki/Nelson_Mandela", //Nelson Mandela

    "https://en.wikipedia.org/wiki/Eleanor_Roosevelt", //Eleanor Roosevelt

    //"", //Unknown

    //"", //Unknown

    "", //Unknown

    "", //African Proverb

    "https://en.wikipedia.org/wiki/Bernard_Meltzer", //Bernard Meltzer

    "https://kungfupanda.fandom.com/wiki/Oogway", //Master Oogway

    "https://en.wikipedia.org/wiki/Dr._Seuss", //Dr. Suess

    "https://en.wikipedia.org/wiki/Aang", //Avatar Aang

    "https://en.wikipedia.org/wiki/Albus_Dumbledore", //Albus Dumbledore

    "https://en.wikipedia.org/wiki/Albus_Dumbledore", //Albus Dumbledore

    "https://en.wikipedia.org/wiki/Iroh", //Iroh

    "https://en.wikipedia.org/wiki/Iroh", //Iroh

    "https://en.wikipedia.org/wiki/Iroh", //Iroh

    "https://en.wikipedia.org/wiki/Sirius_Black", //Sirius Black

    "https://en.wikipedia.org/wiki/Martin_Luther_King_Jr.", //Martin Luther King Jr.

    //"", //Unknown

    "https://en.wikipedia.org/wiki/Albus_Dumbledore", //Dumbledore


    "https://en.wikipedia.org/wiki/Albus_Dumbledore", //Dumbledore

    "https://en.wikipedia.org/wiki/Indira_Gandhi", //Indira Gandhi

    "https://en.wikipedia.org/wiki/Iris_Johansen", //Iris Johansen

    "https://en.wikipedia.org/wiki/Gautama_Buddha", //Buddha

    "https://en.wikipedia.org/wiki/Gautama_Buddha", //Buddha

    "https://en.wikipedia.org/wiki/Gautama_Buddha", //Buddha

    "https://en.wikipedia.org/wiki/Gautama_Buddha", //Buddha

    "https://en.wikipedia.org/wiki/Gautama_Buddha", //Buddha

    "https://en.wikipedia.org/wiki/Abraham_Lincoln", //Abraham Lincoln


]

function generateQuote() {
    
    document.getElementById("imagePlace").innerHTML = "";

    document.getElementById("quotePlace2").innerHTML = "";

    var quote = quotes[Math.floor(Math.random() * quotes.length)]
    index = quotes.indexOf(quote);
    
    var image = document.createElement("img")
    image.src = images[index]
    image.style.height = "300px"
    image.style.cursor = "pointer"
    image.id="image"

    image.addEventListener("click", function () {
        visitPage(urls[index]);
    }, false);

    quote = quote.split("")

    for (var i = 0; i < quote.length; i++) {
        if (quote[i] === ".") {
            document.getElementById("quotePlace2").innerHTML += quote[i] + "<br><br>"
        }
        else if (quote[i] === "?") {
            document.getElementById("quotePlace2").innerHTML += quote[i] + "<br><br>"
        }

        else {
            document.getElementById("quotePlace2").innerHTML += quote[i]
        }
    }
    /*document.getElementById("quotePlace2").addEventListener("click", function () {

        visitPage(urls[index]);
    }, false);*/

    document.getElementById("imagePlace").appendChild(image)
}

function visitPage(url) {
    if (url === "") {
        return
    }
    else {
        window.open(url)
    }
}

/*function startSlideShowTimer() {
    if (clicked === false) {

        slideCount = index;

    }
    clicked = true

    if (document.getElementById("slideshowButton").innerHTML === "Play in Slideshow") {
        document.getElementById("slideshowButton").innerHTML = "Pause Slideshow"
    }
    else {
        document.getElementById("slideshowButton").innerHTML = "Play in Slideshow"
        window.clearInterval(interval)
        return
    }


    interval = window.setInterval(startSlideShow, 5000);

}*/

/*function startSlideShow() {
    if (slideCount === quotes.length-1) {
        slideCount = 0;
    }
    else {
        slideCount+=1

    }

    document.getElementById("imagePlace").innerHTML = "";

    document.getElementById("quotePlace2").innerHTML = "";

    var quote = quotes[slideCount]


    var image = document.createElement("img")
    image.src = images[slideCount]
    image.style.height = "300px"
    image.style.cursor = "pointer"
    image.id="image"

    image.addEventListener("click", function () {
        visitPage(urls[slideCount]);
    }, false);

    quote = quote.split("")

    for (var i = 0; i < quote.length; i++) {
        if (quote[i] === ".") {
            document.getElementById("quotePlace2").innerHTML += quote[i] + "<br><br>"
        }

        else {
            document.getElementById("quotePlace2").innerHTML += quote[i]
        }
    }
    document.getElementById("quotePlace2").addEventListener("click", function () {

        visitPage(urls[slideCount]);
    }, false);

    document.getElementById("imagePlace").appendChild(image)
    

}*/