// Warmup 1
// sleepIn
// function sleepIn(weekday, vacation) {
//     if (
//         (weekday && vacation) ||
//         (!weekday && vacation) ||
//         (!weekday && !vacation)
//     ) {
//         return true;
//     } else {
//         return false;
//     }
// }

function sleepIn(weekday, vacation) {
    return (
        (weekday && vacation) ||
        (!weekday && vacation) ||
        (!weekday && !vacation)
    );
}

console.log(sleepIn(true, true));

// mokeyTrouble
function monkeyTrouble(aSmile, bSmile) {
    return (aSmile && bSmile) || (!aSmile && !bSmile);
}

console.log(monkeyTrouble(true, true));

// sumDouble
function sumDouble(a, b) {
    return a !== b ? a + b : (a + b) * 2;
}
console.log(sumDouble(1, 2));

// diff21
// function diff21(n) {
//     if (n > 21) {
//         return (n - 21) * 2;
//     } else {
//         return Math.abs(n - 21);
//     }
// }

function diff21(n) {
    return n > 21 ? (n - 21) * 2 : Math.abs(n - 21);
}

console.log(diff21(19));
