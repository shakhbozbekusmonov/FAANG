// ------------------- CodingBat Warmup 1
// Warmup 1.1
// Example 1
// function sleepIn(weekDay, vacation) {
//     if ((weekDay === false && vacation === false) || (weekDay === false && vacation === true)){
//         return true;
//     } else {
//         return false;
//     }
// }

// Example 2
// function sleepIn(weekDay, vacation){
//     if ((!weekDay && !vacation) || (!weekDay && vacation)){
//         return true;
//     } else {
//         return false;
//     }
// }

// Example 3
// function sleepIn(weekDay, vacation){
//     if ((!weekDay && !vacation) || vacation){
//         return true;
//     } else {
//         return false;
//     }
// }

// Example 4
function sleepIn(weekDay, vacation){
    if (weekDay && !vacation){
        return false;
    } else {
        return true;
    }
}

console.log(sleepIn(false, false));

// Warmup 1.2
// Example 1
// function monkeyTrouble(a, b) {
//     if (a && !b){
//         return false;
//     } else {
//         return true;
//     }
// }

// Example 2
// function monkeyTrouble(a, b){
//     if ((a && b) || (!a && !b)){
//         return true;
//     } else {
//         return false;
//     }
// }

// Example 3
function monkeyTrouble(a, b){
        return !((!a || !b) && (!!a || !!b));
}

console.log(monkeyTrouble(true, false));

// Warmup 1.3
// Example 1
// function sumDouble(a, b) {
//     if (a === b){
//         return (a + b) * 2;
//     } else {
//         return (a + b);
//     }
// }

// Example 2
// function sumDouble(a, b){
//     if (a !== b){
//         return (a + b);
//     } else {
//         return (a + b) * 2;
//     }
// }

// Example 3
// function sumDouble(a, b){
//     return (a === b) ? (a + b) * 2 : a + b;
// }

// Example 4
function sumDouble(a, b){
    return (a === b) ? 4 * a : a + b;
}

console.log(sumDouble(2, 2));

// Warmup 1.4
// Example 1
// function diff21(n) {
//     if (n > 21){
//         return (n - 21) * 2;
//     } else {
//         return 21 - n;
//     }
// }

// Example 2
// function diff21(n){
//     if (n >= 21){
//         return Math.abs(21 - n) * 2;
//     } else {
//         return Math.abs(21 - n);
//     }
// }

// Example 3
function diff21(n){
    return (n >= 21) ? Math.abs((n - 21) * 2) : Math.abs(21 - n);
}

console.log(diff21(22));

// Warmup 1.5
// Example 1
// function parrotTrouble(talking, hour) {
//     if (talking && (hour === 7) || !talking){
//         return false;
//     } else {
//         return true;
//     }
// }

// Example 2
// function parrotTrouble(talking, hour){
//     return (!((talking && hour === 7) || !talking));
// }

// Example 3
// function parrotTrouble(talking, hour){
//     if (talking && (hour < 7 || hour > 20)){
//         return true;
//     } else {
//         return false;
//     }
// }

// Example 4
function parrotTrouble(talking, hour){
    return !!(talking && (hour < 7 || hour > 20));
}
console.log(parrotTrouble(false, 6));

// Warmup 1.6
// Example 1
// function makes10(a, b) {
//     if ((a === 10) || (b === 10) || (a + b) === 10){
//         return true;
//     } else {
//         return false;
//     }
// }

// Example 2
function makes10(a, b){
    return ((a + b) === 10 || a === 10 || b === 10);
}

console.log(makes10(9, 1));

// Warmup 1.7
// Example 1
// function nearHundred(n) {
//     if (Math.abs(n - 100) <= 10 || Math.abs(n - 200) <= 10){
//         return true;
//     } else {
//         return false;
//     }
// }

// Example 2
function nearHundred(n){
    return Math.abs(n - 100) <= 10 || Math.abs(n - 200) <= 10;
}

console.log(nearHundred(93));

// Warmup 1.8
// Example 1
// function posNeg(a, b, negative) {
//     if (((a < 0 || b < 0) && !negative) || ((a < 0 && b < 0) && negative)){
//         return true;
//     } else {
//         return false;
//     }
// }

// Example 2
// function posNeg(a,b,negative) {
//     return !!(((a < 0  b < 0) && !negative)  (a < 0 && b < 0 && negative));
// }

// Example 3
function posNeg(a, b, negative){
    return negative && a < 0 && b < 0 || !negative && a > 0 && b < 0 || !negative && a < 0 && b > 0;
}

console.log(posNeg(-1, -1,true));

// Warmup 1.9
// Example 1
// function notString(str) {
//     if (str.slice(0, 3) === "not"){
//         return str;
//     } else {
//         return "not " + str;
//     }
// }

// Example 2
// function notString(str){
//     return str.slice(0, 3) === "not" ? str : "not " + str;
// }

// Example 3
function notString(str){
    return str.startsWith("not") ? str : "not " + str;
}

console.log(notString("candy"));

// Warmup 1.10
// Example 1
// function missingChar(str, n) {
//     return str.slice(0, n) + str.slice(n + 1)
// }

// Example 2
function missingChar(str, n){
    return str.replace(str.charAt(n), "");
}

console.log(missingChar("kitten", 4));