// Entscheidungsstrukturen | control structures

//Deklaration
// let ageJohn, ageMark;
// let isJohnOlder, isJohnEqual;

// Assignment (Wertzuweisung)
// ageJohn = 35;
// ageMark = 30;

// Test | Logische Aussage
// isJohnOlder = (ageJohn > ageMark);
// isJohnEqual = (ageJohn == ageMark);

// Ausgabe
// console.log("isJohnOlder: " + isJohnOlder);
// console.log("isJohnEqual: " + isJohnEqual);

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

// if (isJohnOlder) 
// {   
//     console.log("John ist älter.");    // true. auch Ja-Zweig genannt
// } 
// else 
// {
//     console.log("John ist jünger.");    // false. auch Nein-Zweig genannt
// }

/************ Ternäre (ternary) Schreibweise ************/
// console.log( (isJohnOlder) ? "John is older" : "Mark is older");


/************ IF - ELSE IF ************/
// mit alternativen Fällen (älter, jünger, gleich alt)

// if (isJohnOlder)                // true. auch Ja-Zweig genannt
// {   
//     console.log("John ist älter.");    
// }                  // 1. alternative
// else if(isJohnEqual)
// {
//     console.log("John ist gleich alt.");    
// }                 // ggf. weiter Alternativen ..


// else                            // false. auch Nein-Zweig genannt
// {
//     console.log("John ist jünger.");    
// }


/************ Fallunterscheidung / CASE|SWITCH 1 ************/

const firstName = "Jane";
let job;
job = "driver";     // .. fährt Taxi!
job = "diver";      // .. taucht im Rhein! 
job = "artist";     // .. malt ein Bild! 
job = "pilot";      // .. macht etwas anderes!

job = "teacher";        // .. unterrichtet!
job = "instructor";     // .. unterrichtet!     

// switch (job)
// {
//     case "driver":                                      // 1. Fall (case)
//         console.log(firstName + " fährt Taxi!");
//         break;
//     case "diver":                                       // 2. Fall (case)
//         console.log(firstName + " taucht im Rhein!");
//         break;
//     case "artist":                                      // 3. Fall (case)
//         console.log(firstName + " malt ein Bild!");
//         break;
//     case "teacher":                                 // 4. Fall (case)
//     case "instructor":                              // 4a. Fall (case)       
//     console.log(firstName + " unterrichtet!");
//         break;    
//     default:            // Für alle nichtbezeichneten Fälle     |   WICHTIG !
//             console.log(firstName + " macht etwas anderes!")
//         break;



/************ Fallunterscheidung / CASE|SWITCH 2 ************/

const a = 1;

switch (true) {
    case (a == 1):
        console.log("a ist 1");
        break;
    case (a == 2):
        console.log("a ist 2");
        break;
    default:
        console.log("a hat einen anderen Wert");
        break;
}



