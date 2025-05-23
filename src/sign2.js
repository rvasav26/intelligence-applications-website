function replace(plaz) {
    if (plaz === "words") {
        window.location.href ="sign.html"
    }
    else if (plaz === "letters") {
        window.location.href ="sign2.html"
    }
    else if (plaz === "sentences") {
        window.location.href ="sign3.html"
    }


}
var alphabet = [
    "A",
    "B",
    "C",
    "D",
    "E",
    "F",
    "G",
    "H",
    "I",
    "J",
    "K",
    "L",
    "M",
    "N",
    "O",
    "P",
    "Q",
    "R",
    "S",
    "T",
    "U",
    "V",
    "W",
    "X",
    "Y",
    "Z"
]

var aImgs = [
    "https://emilypost.com/client_media/images/a.jpg",
    "https://qph.fs.quoracdn.net/main-qimg-5c98e0d9f5e6d910534e5d6bb4349a7f",
    "https://images2.pics4learning.com/catalog/c/c.jpg",
    "https://media.istockphoto.com/photos/the-letter-d-using-american-sign-language-picture-id167421896?k=6&m=167421896&s=612x612&w=0&h=wjWG5a9cWfov3p4qdyBQU8cs1gfwB8C5DDeTwmDqxq4=",
    "https://www.signingsavvy.com/images/words/alphabet/2/e1.jpg",
    "https://www.signingsavvy.com/images/words/alphabet/2/f1.jpg",
    "https://www.signingsavvy.com/images/words/alphabet/2/g1.jpg",
    "https://www.signingsavvy.com/images/words/alphabet/2/h1.jpg",
    "https://www.signingsavvy.com/images/words/alphabet/2/i1.jpg",
    "https://www.signingsavvy.com/images/words/alphabet/2/j1.jpg",
    "http://www.childstoryhour.com/images/coloring/k.jpg",
    "https://www.signingsavvy.com/images/words/alphabet/2/l1.jpg",
    "https://www.signingsavvy.com/images/words/alphabet/2/m1.jpg",
    "https://www.signingsavvy.com/images/words/alphabet/2/n1.jpg",
    "https://previews.123rf.com/images/torsak/torsak1304/torsak130400032/18911082-finger-spelling-the-alphabet-in-american-sign-language-asl-the-letter-o.jpg",
    "https://upload.wikimedia.org/wikipedia/commons/thumb/0/08/Sign_language_P.svg/1280px-Sign_language_P.svg.png",
    "https://images2.pics4learning.com/catalog/q/q.jpg",
    "https://www.signingsavvy.com/images/words/alphabet/2/r1.jpg",
    "https://previews.123rf.com/images/ovsianka/ovsianka1912/ovsianka191200028/134573053-finger-spelling-letter-s-in-american-sign-language-on-white-background-asl-concept.jpg",
    "https://www.signingsavvy.com/images/words/alphabet/2/t1.jpg",
    "https://www.signingsavvy.com/images/words/alphabet/2/u1.jpg",
    "https://www.signingsavvy.com/images/words/alphabet/2/v1.jpg",
    "https://i.pinimg.com/originals/b7/7a/8d/b77a8d2fcba6a619e9894f34dbdd9016.png",
    "https://www.signingsavvy.com/images/words/alphabet/2/x1.jpg",
    "https://www.signingsavvy.com/images/words/alphabet/2/y1.jpg",
    "https://www.signingsavvy.com/images/words/alphabet/2/z1.jpg"
]

var num = 0;
var x =0;

function load(dir) {


    if (dir === "back") {
        if(x===0) {
            x=alphabet.length-1
        }
        else {
            x-=1
        }
    }


    if (dir === "forwards") {
        if (x===(alphabet.length-1)) {
            x = 0;
        }
        else {
            x+=1
        }
    }
    //var random = Math.floor(Math.random() * alphabet.length)

    var img = document.createElement("img")
    img.id = "img"
    clean()
    document.getElementById("wordPlace").innerHTML += alphabet[x]
    document.getElementById("imagePlace").appendChild(img)
    img.id = "img"
    img.src = aImgs[x]
    num += 1
}

function clean() {

        document.getElementById("wordPlace").innerHTML = ""
        if (num > 0) {
            document.getElementById("img").remove()
    
    
        }
    
    
 }
