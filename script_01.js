// Entscheidungsstrukturen | control structures

//Deklaration
let ageJohn, ageMark;
let isJohnOlder, isJohnEqual;

// Assignment (Wertzuweisung)
ageJohn = 30;
ageMark = 30;

// Test | Logische Aussage
isJohnOlder = (ageJohn > ageMark);
isJohnEqual = (ageJohn == ageMark);

// Ausgabe
console.log("isJohnOlder: " + isJohnOlder);
console.log("isJohnEqual: " + isJohnEqual);

/************ IF ************/
//TINA --> There is no alternative!
//entweder Ja oder nix ... alternativlos

// if(true)
// if(false)
// if(ageJohn > ageMark)

// if(isJohnOlder)     // sauberer bzw. lesbarer
// {
//     console.log("John ist älter.");
// }


/************ IF - ELSE ************/

// mit Alternative
// entweder ja oder nein

if (isJohnOlder) 
{   
    console.log("John ist älter.");    // true. auch Ja-Zweig genannt
} 
else 
{
    console.log("John ist jünger.");    // false. auch Nein-Zweig genannt
}

/************ Ternäre (ternary) Schreibweise ************/
// console.log( (isJohnOlder) ? "John is older" : "Mark is older");





