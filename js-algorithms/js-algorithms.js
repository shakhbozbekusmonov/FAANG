// --------------- Warmup 1 I am Started ----------------------- //
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

// Warmup 1.11
// Example 1
// function frontBack(str) {
//     return str.slice(-1) + str.slice(1, -1) + str.slice(0, 1);
// }

// Example 2
function frontBack(str){
    if (str.length >= 2){
        return str.charAt(str.length - 1) + str.slice(1, -1) + str.charAt(0);
    } else {
        return str;
    }
}

console.log(frontBack("ab"));

// Warmup 1.12
// Example 1
// function front3(str) {
//     if (str.length < 3){
//         return str + str + str;
//     } else {
//         return str.slice(0, 3) + str.slice(0, 3) + str.slice(0, 3);
//     }
// }

// Example 2
// function front3(str){
//     return str.slice(0, 3) + str.slice(0, 3) + str.slice(0, 3);
// }

// Example 3
// function front3(str){
//     return str.substring(0, 3) + str.substring(0, 3) + str.substring(0, 3);
// }

// Example 4
// function front3(str){
//     return str.substr(0, 3) + str.substr(0, 3) + str.substr(0, 3);
// }

// Example 5
function front3(str){
    return str.length <= 3 ? str + str + str : str.substr(0, 3) +str.substr(0, 3) +str.substr(0, 3);
}

console.log(front3("JavaScript"));

// Warmup 1.13
// Example 1
// function backAround(str) {
//     return str.slice(-1) + str + str.slice(-1);
// }

// Example 2
// function backAround(str){
//     return str.charAt(str.length - 1) + str + str.charAt(str.length - 1);
// }

// Example 3
function backAround(str){
    return str.substr(-1, 1) + str + str.substr(-1, 1);
}

console.log(backAround("cat"));

// Warmup 1.14
// Example 1
// function or35(num) {
//     if (num % 3 === 0 || num % 5 === 0){
//         return true;
//     } else {
//         return false;
//     }
// }

// Example 2
function or35(num){
    return (num % 3 === 0) || (num % 5 === 0);
}

console.log(or35(3));

// Warmup 1.15
// Example 1
// function front22(str) {
//     return str.slice(0, 2) + str + str.slice(0, 2);
// }

// Example 2
function front22(str){
    return str.substr(0, 2) + str + str.substr(0, 2);
}

console.log(front22("kitten"));

// Warmup 1.16
// Example 1
// function startHi(str) {
//     return str.startsWith("hi");
// }

// Example 2
// function startHi(str){
//     return str.slice(0, 2) === "hi";
// }

// Example 3
function startHi(str){
    if (!str.startsWith("hi")) {
        return false;
    } else {
        return true;
    }
}
console.log(startHi("hi"));

// Warmup 1.17
// Example 1
// function icyHot(a, b) {
//     if (a < 0 || a > 100 && b < 0 || b > 100){
//         return true;
//     } else {
//         return false;
//     }
// }

// Example 2
// function icyHot(a, b){
//     return a < 0 || a > 100 && b < 0 || b > 100;
// }

// Example 3
function icyHot(a, b){
    return a > 100 && b < 0 || a < 0 && b > 100;
}

console.log(icyHot(-1, 120));

// Warmup 1.18
// Example 1
// function in1020(a, b) {
//     if (a >= 10 || a <= 20 && b >= 10 || b <= 20){
//         return true;
//     } else {
//         return false;
//     }
// }

// Example 2
// function in1020(a, b) {
//     return a >= 10 || a <= 20 && b >= 10 || b <= 20;
// }

// Example 3
function in1020(a, b){
    return a >= 10 || b <= 20;
}

console.log(in1020(12, 99));

// Warmup 1.19
// Example 1
// function hasTen(a, b, c) {
//     if (a >= 13 || a <= 19 && b >= 13 || b <= 19 && c >= 13 || c <= 19){
//         return true;
//     } else {
//         return false;
//     }
// }

// Example 2
// function hasTen(a, b, c){
//     return a >= 13 || a <= 19 && b >= 13 || b <= 19 && c >= 13 || c <= 19
// }

// Example 3
function hasTen(a, b, c){
    return  (a >= 13 && a <= 19) || (b >= 13 && b <= 19) || (c >= 13 && c <= 19);
}
console.log(hasTen(13, 20, 10));

// Warmup 1.20
// Example 1
// function loneTeen(a, b) {
//     if (a >= 13 && b > 19 || a > 19 && b >= 13){
//         return true;
//     } else {
//         return false;
//     }
// }

// Example 2
function loneTeen(a, b){
    return (a >= 13 && b > 19) || (a > 19 && b >= 13);
}


console.log(loneTeen(13, 99));

// Warmup 1.21
// Example 1
// function delDel(str) {
//     if (str.startsWith("del", 1)){
//         return str.slice(0, 1) + str.slice(4);
//     } else {
//         return str;
//     }
// }

// Example 2
// function delDel(str){
//     return str.startsWith("del", 1) ? str.slice(0, 1) + str.slice(4) : str;
// }

// Example 3
function delDel(str){
    return str.startsWith("del", 1) ? str.charAt(0) + str.substring(4, str.length) : str;
}

console.log(delDel("adedbc"));

// Warmup 1.22
// Example 1
// function mixStart(str) {
//     if (str.startsWith("mix") || str.startsWith("pix") || str.startsWith("9ix")){
//         return true;
//     } else {
//         return false;
//     }
// }

// Example 2
// function mixStart(str) {
//     return str.startsWith("mix") || str.startsWith("pix") || str.startsWith("9ix");
// }

// Example 3
function mixStart(str){
    return str.startsWith("ix", 1);
}

console.log(mixStart("piz snacks"));

// Warmup 1.23
// Example 1
// function startOz(str) {
//     if (str.startsWith("oz")){
//         return "oz";
//     } else if (str.startsWith("o")){
//         return "o";
//     } else if (str.startsWith("z", 1)){
//         return "z";
//     } else {
//         return "";
//     }
// }

// Example 2
// function startOz(str){
//     return str.startsWith("oz") ? str.slice(0, 1) : str.charAt(0) === "o" && str.charAt(1)!== "z" ? "o" : "z";
// }

// Example 3
function startOz(str) {
    let result = "";
    if (str.length > 0 && str.charAt(0) === 'o') result += 'o';
    if (str.length > 1 && str.charAt(1) === 'z') result += 'z';
    return result;
}

console.log(startOz("vzymandias"));

// Warmup 1.24
// Example 1
// function intMax(a, b, c) {
//     if (b < a && a > c){
//         return a;
//     } else if (a < b && b > c) {
//         return b;
//     } else {
//         return c;
//     }
// }

// Example 2
// function intMax(a, b, c){
//     return b < a && a > c ? a : a < b && b > c ? b : a < c && c > b ? c : "";
// }

// Example 3
// function intMax(a, b, c){
//     return Math.max(a, b, c);
// }

// Example 4
// function intMax(a, b, c){
//     let max = a;
//     if (b > max) max = b;
//     if (c > max) max = c;
//     return max;
// }

// Example 5
function intMax(a,b,c) {
    let max = a;
    return (b>max ? b : a) || (c>max ? c : a);
}

console.log(intMax(1, 3, 4));

// Warmup 1.25
// Example 1
// function close10(a, b) {
//     if (Math.abs(10 - a) < Math.abs(10 - b)){
//         return a;
//     } else if (Math.abs(10 - a) > Math.abs(10 - b)){
//         return b;
//     } else {
//         return 0;
//     }
// }

// Example 2
// function close10(a, b){
//     return Math.abs(10 - a) < Math.abs(10 - b) ? a : Math.abs(10 - a) > Math.abs(10 - b) ? b : 0;
// }

// Example 3
function close10(a, b){
    let c = Math.abs(b - 10);
    let d = Math.abs(a - 10);
    return (c === d) ? 0 : ((a < b) ? a : b);
}

console.log(close10(8, 13));

// Warmup 1.26
// Example 1
// function in3050(a, b) {
//     if ((a >= 30 && a <= 40) && (b >= 30 && b <= 40) || (a >= 40 && a <= 50) && (b >= 40 && b <= 50)){
//         return true;
//     } else {
//        return false;
//     }
// }

// Example 2
function in3050(a, b){
    return (a >= 30 && a <= 40) && (b >= 30 && b <= 40) || (a >= 40 && a <= 50) && (b >= 40 && b <= 50);
}

console.log(in3050(30, 31));

// Warmup 1.27
// Example 1
// function max1020(a, b) {
//     return (a >= 10 && b <= 20) ? Math.max(a, b) : 0;
// }

// Example 2
// function max1020(a, b){
//     if (b > a) {
//         let temp = a;
//         a = b;
//         b = temp;
//     }
//     if (a >= 10 && a <= 20) return a;
//     if (b >= 10 && b <= 20) return b;
//     return 0;
// }

// Example 3
function max1020(a, b){
    if ((a >= 10 && a <= 20) && (b >= 10 && b <= 20)){
        return Math.max(a, b);
    } else {
        return 0;
    }
}

console.log(max1020(11, 19));

// Warmup 1.28
// Example 1
// function stringE(str) {
//     let count = 0;
//     for (let i = 0; i < str.length; i++){
//         if (str[i] === "e"){
//             count++;
//         }
//     }
//     return 1 <= count && count <= 3;
// }

// Example 2
function stringE(str){
    let count = 0;
    for (let i = 0; i < str.length; i++){
        if (str.charAt(i) === "e"){
            count++;
        }
    }
    return 1 <= count && count <= 3;
}

console.log(stringE("Heelele"));

// Warmup 1.29
// Example 1
// function lastDigit(a, b) {
//     if (a % 2 === 1 && b % 2 === 1){
//         return true;
//     } else {
//         return false;
//     }
// }

// Example 2
// function lastDigit(a, b){
//     return a % 2 === 1 && b % 2 === 1;
// }

// Example 3
function lastDigit(a, b){
    return (a % 10 === b % 10);
}

console.log(lastDigit(3, 113));

// Warmup 1.30
// Example 1
// function endUp(str) {
//     if (str.length > 3){
//         let str2 = str.slice(-3);
//         return str.slice(0, -3) + str2.toUpperCase();
//     } else {
//         return str.toUpperCase();
//     }
// }

// Example 2
// function endUp(str) {
//     if (str.length > 3){
//         return str.slice(0, -3) + str.slice(-3).toUpperCase();
//     } else {
//         return str.toUpperCase();
//     }
// }

// Example 3
function endUp(str){
    return str.length < 3 ? str.toUpperCase() : str.slice(0, -3) + str.slice(-3).toUpperCase();
}

console.log(endUp("Hello"));

// Warmup 1.31
// Example 1
// function everyNth(str, n) {
//     let str2 = "";
//     for (let i = 0; i < str.length; i += n){
//         str2 += str.charAt(i);
//     }
//     return str2;
// }

// Example 2
function everyNth(str, n){
    let str2 = "";
    for (let i = 0; i < str.length; i += n) str2 += str.charAt(i);
    return str2;
}

console.log(everyNth("Miracle", 2));

// --------------- Warmup 1 I am Finished ----------------------- //