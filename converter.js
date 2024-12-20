function changeConversion() {

    if (location.href.split("/").slice(-1) == "converterDistance.html") {
        window.location.replace("converterTemp.html");
    }
    else if (location.href.split("/").slice(-1) == "converterTemp.html") {

        window.location.replace("converterDistance.html");
    }

}

function calculateConversion() {

    var leftSelect = document.getElementById("left").value
    var rightSelect = document.getElementById("right").value

    
    if (location.href.split("/").slice(-1) == "converterDistance.html") {
        if (leftSelect === "Inch") {
            if (rightSelect === "Inch") {
                document.getElementById("rightText").value = document.getElementById("leftText").value
            }
            else if (rightSelect === "Foot") {
                document.getElementById("rightText").value = (document.getElementById("leftText").value) / 12
            }
            else if (rightSelect === "Yard") {
                document.getElementById("rightText").value = (document.getElementById("leftText").value) / 36
            }
            else if (rightSelect === "Mile") {
                document.getElementById("rightText").value = (document.getElementById("leftText").value) / 63360
            }
            else if (rightSelect === "Centimeter") {
                document.getElementById("rightText").value = (document.getElementById("leftText").value) * 2.54
            }
            else if (rightSelect === "Meter") {
                document.getElementById("rightText").value = (document.getElementById("leftText").value) / 39.37
            }
            else if (rightSelect === "Kilometer") {
                document.getElementById("rightText").value = (document.getElementById("leftText").value) / 39370
            }
        }
        else if (leftSelect === "Foot") {

            if (rightSelect === "Inch") {
                document.getElementById("rightText").value = (document.getElementById("leftText").value) * 12
            }
            else if (rightSelect === "Foot") {
                document.getElementById("rightText").value = document.getElementById("leftText").value
            }
            else if (rightSelect === "Yard") {
                document.getElementById("rightText").value = (document.getElementById("leftText").value) / 3
            }
            else if (rightSelect === "Mile") {
                document.getElementById("rightText").value = (document.getElementById("leftText").value) / 5280
            }
            else if (rightSelect === "Centimeter") {
                document.getElementById("rightText").value = (document.getElementById("leftText").value) * 30.48
            }
            else if (rightSelect === "Meter") {
                document.getElementById("rightText").value = (document.getElementById("leftText").value) / 3.281
            }
            else if (rightSelect === "Kilometer") {
                document.getElementById("rightText").value = (document.getElementById("leftText").value) / 3281
            }
        }
        else if (leftSelect === "Yard") {

            if (rightSelect === "Inch") {
                document.getElementById("rightText").value = (document.getElementById("leftText").value) * 36
            }
            else if (rightSelect === "Foot") {
                document.getElementById("rightText").value = (document.getElementById("leftText").value) * 3
            }
            else if (rightSelect === "Yard") {
                document.getElementById("rightText").value = document.getElementById("leftText").value
            }
            else if (rightSelect === "Mile") {
                document.getElementById("rightText").value = (document.getElementById("leftText").value) / 1760
            }
            else if (rightSelect === "Centimeter") {
                document.getElementById("rightText").value = (document.getElementById("leftText").value) * 91.44
            }
            else if (rightSelect === "Meter") {
                document.getElementById("rightText").value = (document.getElementById("leftText").value) / 1.094
            }
            else if (rightSelect === "Kilometer") {
                document.getElementById("rightText").value = (document.getElementById("leftText").value) / 1094
            }
        }
        else if (leftSelect === "Mile") {

            if (rightSelect === "Inch") {
                document.getElementById("rightText").value = (document.getElementById("leftText").value) * 63360
            }
            else if (rightSelect === "Foot") {
                document.getElementById("rightText").value = (document.getElementById("leftText").value) * 5280
            }
            else if (rightSelect === "Yard") {
                document.getElementById("rightText").value = (document.getElementById("leftText").value) * 1760
            }
            else if (rightSelect === "Mile") {
                document.getElementById("rightText").value = document.getElementById("leftText").value
            }
            else if (rightSelect === "Centimeter") {
                document.getElementById("rightText").value = (document.getElementById("leftText").value) * 160934
            }
            else if (rightSelect === "Meter") {
                document.getElementById("rightText").value = (document.getElementById("leftText").value) * 1609
            }
            else if (rightSelect === "Kilometer") {
                document.getElementById("rightText").value = (document.getElementById("leftText").value) * 1.609
            }

        }
        else if (leftSelect === "Centimeter") {

            if (rightSelect === "Inch") {
                document.getElementById("rightText").value = (document.getElementById("leftText").value) / 2.54
            }
            else if (rightSelect === "Foot") {
                document.getElementById("rightText").value = (document.getElementById("leftText").value) / 30.48
            }
            else if (rightSelect === "Yard") {
                document.getElementById("rightText").value = (document.getElementById("leftText").value) / 91.44
            }
            else if (rightSelect === "Mile") {
                document.getElementById("rightText").value = (document.getElementById("leftText").value) / 160934
            }
            else if (rightSelect === "Centimeter") {
                document.getElementById("rightText").value = document.getElementById("leftText").value
            }
            else if (rightSelect === "Meter") {
                document.getElementById("rightText").value = (document.getElementById("leftText").value) / 100
            }
            else if (rightSelect === "Kilometer") {
                document.getElementById("rightText").value = (document.getElementById("leftText").value) / 100000
            }

        }
        else if (leftSelect === "Meter") {

            if (rightSelect === "Inch") {
                document.getElementById("rightText").value = (document.getElementById("leftText").value) * 39.37
            }
            else if (rightSelect === "Foot") {
                document.getElementById("rightText").value = (document.getElementById("leftText").value) * 3.281
            }
            else if (rightSelect === "Yard") {
                document.getElementById("rightText").value = (document.getElementById("leftText").value) * 1.094
            }
            else if (rightSelect === "Mile") {
                document.getElementById("rightText").value = (document.getElementById("leftText").value) / 1609
            }
            else if (rightSelect === "Centimeter") {
                document.getElementById("rightText").value = (document.getElementById("leftText").value) * 100
            }
            else if (rightSelect === "Meter") {
                document.getElementById("rightText").value = document.getElementById("leftText").value
            }
            else if (rightSelect === "Kilometer") {
                document.getElementById("rightText").value = (document.getElementById("leftText").value) / 1000
            }
        }
        else if (leftSelect === "Kilometer") {

            if (rightSelect === "Inch") {
                document.getElementById("rightText").value = (document.getElementById("leftText").value) * 39370
            }
            else if (rightSelect === "Foot") {
                document.getElementById("rightText").value = (document.getElementById("leftText").value) * 3281
            }
            else if (rightSelect === "Yard") {
                document.getElementById("rightText").value = (document.getElementById("leftText").value) * 1094
            }
            else if (rightSelect === "Mile") {
                document.getElementById("rightText").value = (document.getElementById("leftText").value) / 1.609
            }
            else if (rightSelect === "Centimeter") {
                document.getElementById("rightText").value = (document.getElementById("leftText").value) * 100000
            }
            else if (rightSelect === "Meter") {
                document.getElementById("rightText").value = (document.getElementById("leftText").value) * 1000
            }
            else if (rightSelect === "Kilometer") {
                document.getElementById("rightText").value = document.getElementById("leftText").value

            }
        }
    }
    else {
        if (leftSelect === "Fahrenheit (F)") {
            if (rightSelect === "Fahrenheit (F)") {
                document.getElementById("rightText").value = document.getElementById("leftText").value
            }
            else if (rightSelect === "Celsius (C)") {
                document.getElementById("rightText").value = ((document.getElementById("leftText").value) - 32) * (5 / 9)
            }
            else if (rightSelect === "Kelvin (K)") {
                document.getElementById("rightText").value = (((document.getElementById("leftText").value) - 32) * (5 / 9)) + 273.15
            }

        }
        else if (leftSelect === "Celsius (C)") { 

            if (rightSelect === "Fahrenheit (F)") {
                document.getElementById("rightText").value = (document.getElementById("leftText").value)*(9/5)+32
            }
            else if (rightSelect === "Celsius (C)") {
                document.getElementById("rightText").value = ((document.getElementById("leftText").value) - 32) * (5 / 9)
            }
            else if (rightSelect === "Kelvin (K)") {
                document.getElementById("rightText").value = (((document.getElementById("leftText").value) +273.15)) 
            }

        }
        else if (leftSelect === "Kelvin (K)") {

            if (rightSelect === "Fahrenheit (F)") {
                document.getElementById("rightText").value = (document.getElementById("leftText").value -273.15)*(9/5)+32
            }
            else if (rightSelect === "Celsius (C)") {
                document.getElementById("rightText").value = (document.getElementById("leftText").value)-273.15
            }
            else if (rightSelect === "Kelvin (K)") {
                document.getElementById("rightText").value = document.getElementById("leftText").value
            }
        }
    }
}


function onlyNumbers(evt) {
    evt = (evt) ? evt : window.event;
    var charCode = (evt.which) ? evt.which : evt.keyCode;
    if (charCode > 31 && (charCode < 48 || charCode > 57)) {
        return false;
    }


}