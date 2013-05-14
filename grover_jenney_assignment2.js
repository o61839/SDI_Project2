//alert("JavaScript works!");
//Jenney Grover, SDI 1305, project 2

/*var p = "Jenney is the coolest aunt ever!";
var q = "Jenney planted flowers with the kiddos.";
var r = "The flowers have grown.";

var p = true, q = false, r = false; 

// Given: (p ^ q) v r

if ((p && q) || r) {
	console.log("The expression is true");
} else {
	console.log("The expression is false");
}

// console.log("The expression is " + ((p && q) || r)); 


console.log("The expression is " + (p && (q || r)));
console.log("The expression is " + ((p && !q) || (q && r)));
console.log("The expression is " + (!(p||r)));*/

// the above was from practice for Activity Boolean Logic

// subject pronouns
var firstPersonSingular = "Yo", 
//need an accent mark for this -- yea found! 
	secondPersonSingular = "Tú \"informal\"",
//need an accent mark for this -- yea found! 
	thirdPersonSingularMasculine = "Él",
	thirdPersonSingularFeminine = "Ella",
	thirdPersonSingular = "Usted, \"formal\"",
	thirdPersonSingularGeneric = "it \"understood\"",
	firstPersonPlural = "Nosotros or Nosotras",
	secondPersonPlural = "Vosotros or Vosotras, \"only in Spain\"",
	thirdPersonPluralMasculine = "Ellos",
	thirdPersonPluralFeminine = "Ellas",
	thirdPersonPlural = "Ustedes",
	thirdPersonPluralGeneric = "they, \"understood\""
;

// verb endings
var firstPS_AR_ending = "o",
	secondPS_AR_ending = "as",
	thirdPS_AR_ending = "a",
	firstPP_AR_ending = "amos",
	secondPP_AR_ending = "áis",
	thirdPP_AR_ending = "an"
;
var firstPS_ER_ending = "o",
	secondPS_ER_ending = "es",
	thirdPS_ER_ending = "e",
	firstPP_ER_ending = "emos",
	secondPP_ER_ending = "éis",
	thirdPP_ER_ending = "en"
;
var firstPS_IR_ending = "o",
	secondPS_IR_ending = "es",
	thirdPS_IR_ending = "e",
	firstPP_IR_ending = "imos",
	secondPP_IR_ending = "ís",
	thirdPP_IR_ending = "en"
;

var p = thirdPS_AR_ending
var q = thirdPersonSingularMasculine
var r = thirdPersonSingularFeminine
console.log("The expression is " + (p && (q || r)));

console.log("The following are the three singular verb endings.");

console.log("The verb ending in the \"" + firstPersonSingular + "\" form for -ar, -er, and -ir verbs is: " + "-" + (firstPS_AR_ending || firstPS_ER_ending));
console.log("The verb ending in the \"" + secondPersonSingular + "\" form for -ar, -er, and -ir verbs is: " + "-" + secondPS_AR_ending + ", -" + (secondPS_ER_ending || secondPS_IR_ending));
console.log("The verb ending in the \"" + thirdPersonSingularMasculine + "\", \"" + thirdPersonSingularFeminine + "\", \"" + thirdPersonSingular + "\", and \"" + thirdPersonSingularGeneric + "\" form is: -" + thirdPS_AR_ending + ", -" + (thirdPS_ER_ending || thirdPS_IR_ending) + ".");

console.log("The following are the three plural verb endings.");

console.log("The verb ending in the \"" + firstPersonPlural + "\" form for -ar, -er, and -ir verbs is: -" + firstPP_AR_ending + ", -" + firstPP_ER_ending + ", -" + firstPP_IR_ending);
console.log("The verb ending in the \"" + secondPersonPlural + "\" form for -ar, -er, and -ir verbs is: -" + secondPP_AR_ending + ", -" + secondPP_ER_ending + ", -" + secondPP_IR_ending);
console.log("The verb ending in the \"" + thirdPersonPluralMasculine + "\", \"" + thirdPersonPluralFeminine + "\", \"" + thirdPersonPlural + "\", and \"" + thirdPersonPluralGeneric + "\" form is: -" + thirdPP_AR_ending + ", -" + (thirdPP_ER_ending || thirdPP_IR_ending) + ".");

