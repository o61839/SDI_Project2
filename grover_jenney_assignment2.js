//alert("JavaScript works!");
//Jenney Grover, SDI 1305, project 2


var a = "This is the song that never ends.";
var b = "It goes on and on my friend.";
var c = "Some people started sining it,";
var d = "not knowing when it ends.";
var e = "And they'll continue singing it,";
var f = "FOREVER just because!!!";
var songLambChop = [a, b, c, d, e, f]; 

var neices = ["Holland", "Harper", "Finley"];
var nephews = ["Laken"];

var i = 0

//size of flower bed
var width;
var height;
var area = width * height; 
var perimeter = ((2 * width) + (2 * height));
var numberPlants;

//practice Boolean code
var p = "Jenney is the coolest aunt ever!";
var q = "Jenney planted flowers with the kiddos.";
var r = "The flowers have grown.";
var s = "The sun is shining.";
var t = "The flowers have been watered."; 


// procedure...welcome. 
function welcomeAuntie(hello) {
    if (hello === true) {
    	console.log ("Weeee! Hi! Auntie Jenney, said " + nephews[0] + "! What are we doing to do today?");
    } else {
    	console.log ("I want my mommy, said " + newphews [0] + "!");
    }
};

var auntieIsHere = welcomeAuntie(true); 

//string function with concatination
function coolAunt() {
	var bestAunt = p + " " + q; // local variable 
	return bestAunt;  // return string 
}

function theResult (flowers, sing) {
    var activityToday = "FUN";
        string = activityToday + "! We have ALL day today to play! What shall we start with? " + flowers + "? and then we can " + sing + " while we plant!";
    return string
}

var daysPlan = theResult("petunias", "Thunderstruck");

//number function
function areaFlowerBed(height, width) {
		area = height * width;
		return area; 
	
}
