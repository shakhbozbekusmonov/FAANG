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

// --------------- Warmup 2 I am Started ------------------------ //
// Warmup 2.1
// Example 1
// function stringTimes(str, n) {
//     let str2 = "";
//     for (let i = 0; i < n; i++){
//         str2 += str;
//     }
//     return str2;
// }

// Example 2
// function stringTimes(str, n) {
//     let str2 = "";
//     for (let i = 0; i < n; i++) str2 += str;
//     return str2;
// }

// Example 3
function stringTimes(str, n){
    return str.repeat(n);
}

console.log(stringTimes("Hi", 4));

// Warmup 2.2
// Example 1
// function frontTimes(str, n) {
//     let str2 = "";
//     for (let i = 0; i < n; i++){
//         str2 += str.slice(0, 3);
//     }
//     return str2;
// }

// Example 2
function frontTimes(str, n){
    return str.slice(0, 3).repeat(n);
}

console.log(frontTimes("Chocolate", 3));

// Warmup 2.3
// Example 1
// function countXX(str) {
//     let count = 0;
//     for (let i = 0; i < str.length; i++){
//         if (str.charAt(i) === "x"){
//             count++;
//         }
//     }
//     return count - 1;
// }

// Example 2
function countXX(str){
    let count = 0;
    for (let i = 0; i < str.length -1; i++) {
        if (str.substring(i, i+2) === "xx") count++;
    }
    return count;
}

console.log(countXX("abcxx"));

// Warmup 2.4
// Example 1
// function doubleX(str) {
//     for (let i = 0; i < str.length + 1; i++){
//         if (str[i] === "x"){
//             return true;
//         } else {
//             return false;
//         }
//     }
// }

// Example 2
// function doubleX(str){
//     let i = str.indexOf("x");
//     return i === - 1 ? false : str.substring(i + 1, i + 2) === "x";
// }

// Example 3
function doubleX(str){
    return str.startsWith("xx") || str.startsWith("xx", 1);
}

console.log(doubleX("axbxbx"));

// Warmup 2.5
// Example 1
// function stringBits(str) {
//     let str2 = "";
//     for (let i = 0; i < str.length; i += 2){
//         str2 += str.slice(i, i + 1);
//     }
//     return str2;
// }

// Example 2
function stringBits(str){
    let str2 = "";
    for (let i = 0; i < str.length; i += 2){
        str2 += str.charAt(i);
    }
    return str2;
}

console.log(stringBits("Hello"));

// Warmup 2.6
// Example 1
// function stringSplosion(str) {
//     let str2 = "";
//     for (let i = 0; i < str.length; i++){
//         str2 += str.slice(0, i + 1);
//     }
//     return str2;
// }

// Example 2
// function stringSplosion(str){
//     let str2 = "";
//     for (let i = 0; i < str.length; i++) str2 += str.substring(0, i + 1);
//     return str2;
// }

// Example 3
function stringSplosion(str){
    let str2 = "";
    for (let i = 0; i < str.length + 1; i++){
        str2 += str.slice(0, i);
    }
    return str2;
}

console.log(stringSplosion("Code"));

// Warmup 2.7
// Example 1
// function last2(str) {
//     if (str.length % 2 === 1){
//         return 1;
//     } else {
//         return 2;
//     }
// }

// Example 2
function last2(str){
    let count = 0;
    for (let i = 0; i < str.length - 2; i++){
        if (str.slice(str.length - 2).localeCompare(str.slice(i, i + 2)) === 0){
            count++;
        }
    }
    return count;
}

console.log(last2("xaxxaxaxx"));

// Warmup 2.8
// Example 1
// function arrayCount9(arr) {
//     let count = 0;
//     for (let i = 0; i < arr.length; i++){
//         if (arr[i] === 9){
//             count++;
//         }
//     }
//     return count;
// }

// Example 2
// function arrayCount9(arr){
    // let count = 0;
    // for (let i = 0; i < arr.length; i++) if (arr[i] === 9) {
    //     count++;
    // }
    // return count;
// }

// Example 3
function arrayCount9(arr){
    let count = 0;
    for (let i in arr) if (arr[i] === 9){
        count++
    }
    return count;
}

console.log(arrayCount9([1, 9, 9, 3]));

// Warmup 2.9
// Example 1
// function arrayFront9(arr) {
//     let len = arr.length;
//     if (len > 4) len = 4;
//     for (let i = 0; i < len; i++){
//         if (arr[i] === 9) return true;
//     }
//     return false;
// }

// Example 2
function arrayFront9(arr){
    let len = arr.length;
    for (let i = 0; i < len; i++) if (arr[i] === 9) {
        return true;
    } return false;
}

console.log(arrayFront9([1, 2, 9, 3, 4]));

// Warmup 2.10
// Example 1
// function array123(arr) {
//     for (let i = 0; i < (arr.length - 2); i++){
//         if (arr[i] === 1 && arr[i + 1] === 2 && arr[i + 2] === 3){
//             return true;
//         }
//     } return false;
// }

// Example 2
function array123(arr){
    for (let i = 0; i < (arr.length - 2); i++) if (arr[i] === 1 && arr[i + 1] === 2 && arr[i + 2] === 3){
        return true;
    } return false;
}

console.log(array123([1, 1, 2, 3, 1]));

// Warmup 2.11
// Example 1
// function stringMatch(a, b) {
//     let len = Math.min(a.length, b.length);
//     let count = 0;
//     for (let i = 0; i < len - 1; i++){
//         let a2 = a.slice(i, i + 2);
//         let b2 = b.slice(i, i + 2);
//         if (a2 === b2){
//             count++;
//         }
//     }
//     return count;
// }

// Example 2
function stringMatch(a, b){
    let len = Math.min(a.length, b.length);
    let count = 0;
    for (let i = 0; i < len - 1; i++) if (a.slice(i, i + 2) === b.slice(i, i + 2)){
        count++;
    } return count;
}

console.log(stringMatch("xxcaazz", "xxbaaz"));

// Warmup 2.12
// Example 1
// function stringX(str) {
//     let result = "";
//     for (let i = 0; i < str.length; i++) {
//         if (!(i > 0 && i < (str.length - 1) && str.substring(i, i+1) === "x")) {
//             result += str.substring(i, i+1);
//         }
//     }
//     return result;
// }

// Example 2
function stringX(str){
    let result = "";
    for (let i = 0; i < str.length; i++){
        let str2 = str.charAt(i);
        if (!(i > 0 && i < str.length - 1 && str2 === "x")){
            result += str2;
        }
    } return result;
}

console.log(stringX("xxHxix"));

// Warmup 2.13
// Example 1
// function altPairs(str) {
//     return str.slice(0, 2) + str.slice(4, 6) + str.slice(8, 10);
// }

// Example 2
// function altPairs(str){
//     return str.substring(0, 2) + str.substring(4, 6) + str.substring(8, 10);
// }

// Example 3
function altPairs(str){
    return str.substr(0, 2) + str.substr(4, 2) + str.substr(8, 2);
}

console.log(altPairs("kitten"));

// Warmup 2.14
// Example 1
// function stringYak(str) {
//     if (str.startsWith("yak")){
//         return str.slice(3);
//     } else if (str.endsWith("yak")) {
//         return str.slice(0, -3);
//     } else {
//         return str;
//     }
// }

// Example 2
// function stringYak(str){
//     return str.startsWith("yak") ? str.slice(3) : str.endsWith("yak") ? str.slice(0, -3) : str;
// }

// Example 3
function stringYak(str){
    return str.includes("yak") ? str.replace("yak", "") : str;
}

console.log(stringYak("pakyak"));

// Warmup 2.15
// Example 1
// function array667(arr) {
//     let count = 0;
//     for (let i = 0; i < arr.length - 1; i++){
//         if ((arr[i] === 6 && arr[i + 1] === 6) || (arr[i] === 6 && arr[i + 1] === 7)){
//             count++;
//         }
//     } return count;
// }

// Example 2
function array667(arr){
    let count = 0;
    for (let i = 0; i < arr.length - 1; i++) if (arr[i] === 6 && (arr[i + 1] === 6 || arr[i + 1] === 7)){
        count++;
    } return count;
}

console.log(array667([6, 6, 1]));

// Warmup 2.16
// Example 1
// function noTriples(arr) {
//     for (let i = 0; i < arr.length - 2; i++){
//         let arrr = arr[i];
//         if (arr[i + 1] === arrr && arr[i + 2] === arrr){
//             return false;
//         }
//     } return true;
// }

// Example 2
function noTriples(arr){
    for (let i = 0; i < arr.length - 2; i++) {
        let ar = arr[i];
        return !(arr[i + 1] === ar && arr[i + 2] === ar);
    }
}

console.log(noTriples([1, 1, 2, 2, 1]));

// Warmup 2.17
// Example 1
// function has271(arr) {
//     for (let i = 0; i < arr.length - 2; i++){
//         if (arr[i] === 2 && arr[i + 1] === 7 && arr[i + 2] === 1){
//             return true;
//         }
//     } return false;
// }

// Example 2
function has271(arr){
    for (let i = 0; i < arr.length - 2; i ++) if (arr[i] === 2 && arr[i + 1] === 7 && arr[i + 2] === 1){
        return true;
    } return false;
}

console.log(has271([1, 2, 7, 1]));

// --------------- Warmup 2 I am Finished ----------------------- //

// --------------- String 1 I am Started ------------------------ //

// String 1.1
// Example 1
// function helloName(str) {
//     return "Hello " + str";
// }

// Example 2
function helloName(str) {
    return `Hello ${str}`
}

console.log(helloName("Bob"));

// String 1.2
// Example 1
function makeAbba(a, b) {
    return a + b + b + a;
}

console.log(makeAbba("Hi", "Bye"));

// String 1.3
// Example 1
// function makeTags(a, b) {
//     return "<" + a + ">" + b + "</" + a + ">";
// }

// Example 2
function makeTags(a, b){
    return `<${a}>${b}</${a}>`;
}

console.log(makeTags("i", "Yay"));

// String 1.4
// Example 1
// function makeOutWord(a, b) {
//     return a.slice(0, 2) + b + a.slice(-2);
// }

// Example 2
function makeOutWord(a, b){
    return a.slice(0, a.length / 2) + b + a.slice(a.length / 2);
}

console.log(makeOutWord("<<>>", "Yay"));

// String 1.5
// Example 1
// function extraEnd(str) {
//     return str.slice(-2) + str.slice(-2) + str.slice(-2);
// }

// Example 2
// function extraEnd(str){
//     return str.substr(-2, 2) + str.substr(-2, 2) + str.substr(-2, 2);
// }

// Example 3
function extraEnd(str){
    return str.slice(-2).repeat(3);
}

console.log(extraEnd("Hello"));

// String 1.6
// Example 1
// function firstTwo(str) {
//     return str.slice(0, 2);
// }

// Example 2
// function firstTwo(str){
//     return str.substr(0, 2);
// }

// Example 3
function firstTwo(str){
    return str.substring(0, 2);
}

console.log(firstTwo("Hello"));

// String 1.7
// Example 1
// function firstHalf(str) {
//     return str.slice(0, str.length / 2);
// }

// Example 2
// function firstHalf(str){
//     return str.substring(0, str.length / 2);
// }

// Example 3
function firstHalf(str){
    return str.substr(0, str.length / 2);
}

console.log(firstHalf("WooHoo"));

// String 1.8
// Example 1
// function withoutEnd(str) {
//     return str.slice(1, -1);
// }

// Example 2
function withoutEnd(str){
    return str.substring(1, str.length -1);
}

console.log(withoutEnd("Hello"));

// String 1.9
// Example 1
// function comboString(a, b) {
//     if (a.length > b.length){
//         return b + a + b;
//     } else {
//         return a + b + a;
//     }
// }

// Example 2
function comboString(a, b){
    return a.length > b.length ? b + a + b : a + b + a;
}

console.log(comboString("Hello", "Hi"));

// String 1.10
// Example 1
// function nonStart(a, b) {
//     return a.slice(1) + b.slice(1);
// }

// Example 2
// function nonStart(a, b){
//     return a.substring(1) + b.substring(1);
// }

// Example 3
function nonStart(a, b){
    return a.substr(1) + b.substr(1);
}

console.log(nonStart("Hello", "There"));

// String 1.11
// Example 1
// function left2(str) {
//     return str.slice(2) + str.slice(0, 2);
// }

// Example 2
// function left2(str){
//     return str.substring(2) + str.substring(0, 2);
// }

// Example 3
function left2(str){
    return str.substr(2) + str.substr(0, 2);
}

console.log(left2("Hello"));

// String 1.12
// Example 1
// function right2(str) {
//     return str.slice(-2) + str.slice(0, -2);
// }

// Example 2
// function right2(str){
//     return str.substring(str.length - 2) + str.substring(0, str.length - 2);
// }

// Example 3
function right2(str){
    return str.substr(-2, 2) + str.substr(0, str.length - 2);
}

console.log(right2("Hello"));

// String 1.13
// Example 1
// function theEnd(a, bool) {
//     if (bool === true){
//         return a.slice(0, 1);
//     } else {
//         return a.slice(-1);
//     }
// }

// Example 2
function theEnd(a, bool){
    return bool ? a.slice(0, 1) : a.slice(-1);
}

console.log(theEnd("Hello", false));

// String 1.14
// Example 1
// function withoutEnd2(str) {
//     return str.slice(1, -1);
// }

// Example 2
function withoutEnd2(str){
    return str.substring(1, str.length - 1);
}

console.log(withoutEnd2("Hello"));

// String 1.15
// Example 1
// function middleTwo(str) {
//     let str1 = str.slice(0, str.length / 2);
//     let str2 = str.slice(str.length / 2);
//     return str1.slice(-1) + str2.slice(0, 1);
// }

// Example 2
// function middleTwo(str){
//     return str.slice(0, str.length / 2).slice(-1) + str.slice(str.length / 2).slice(0, 1);
// }

// Example 3
function middleTwo(str){
    let half = str.length / 2;
    return str.slice(half - 1, half + 1);
}

console.log(middleTwo("string"));

// String 1.16
// Example 1
// function endsLy(str){
//     return str.slice(-2) === "ly";
// }

// Example 2
// function endsLy(str){
//     return str.charAt(str.length - 1) === 'y' && str.charAt(str.length - 2) === 'l';
// }

// Example 3
function endsLy(str) {
    return str.endsWith("ly");
}

console.log(endsLy("oddly"));

// String 1.17
// Example 1
// function nTwice(str, n) {
//     return str.slice(0, n) + str.slice(-n);
// }

// Example 2
function nTwice(str, n){
    return str.substring(0, n) + str.substring(str.length - n);
}

console.log(nTwice("Chocolate", 3));

// String 1.18
// Example 1
// function twoChar(str, n) {
//     if (n > 2){
//         return str.slice(0, 2);
//     } else {
//         return str.slice(n, n + 2);
//     }
// }

// Example 2
function twoChar(str, n){
    return n < 3 ? str.slice(n,  n + 2) : str.slice(0, 2);
}

console.log(twoChar("java", 3));

// String 1.19
// Example 1
// function middleThree(str) {
//     let str1 = str.slice(0, str.length / 2);
//     let str2 = str.slice(str.length / 2);
//     return str1.slice(-1) + str2.slice(0, 2);
// }

// Example 2
// function middleThree(str){
//     return str.slice(0, str.length / 2).slice(-1) + str.slice(str.length / 2).slice(0, 2);
// }

// Example 3
function middleThree(str){
    let half = str.length / 2;
    return str.substring(half - 1, half + 2);
}

console.log(middleThree("Candy"));

// String 1.20
// Example 1
// function hasBad(str) {
//     if (str.slice(0, 3) === "bad" || str.slice(1, 4) === "bad"){
//         return true;
//     } else {
//         return false;
//     }
// }

// Example 2
function hasBad(str){
    return str.startsWith("bad") || str.startsWith("bad", 1);
}


console.log(hasBad("badxx"));

// String 1.21
// Example 1
// function atFirst(str) {
//     if (str.length >= 2){
//         return str.slice(0, 2);
//     } else if(str.length === 1){
//         return str + "@";
//     } else {
//         return "@@";
//     }
// }

// Example 2
// function atFirst(str){
//     return str.length >= 2 ? str.slice(0, 2) : str.length === 1 ? str + "@" : "@@";
// }

// Example 3
function atFirst(str){
    return str.length >= 2 ? str.slice(0, 2) : str.length === 1 ? str + "@" : "@@";
}

console.log(atFirst("h"));

// String 1.22
// Example 1
// function lastChars(a, b) {
//     if (a.length >= 2 && b.length >= 2){
//         return a.slice(0, 1) + b.slice(-1);
//     } else if (a.length >= 2 && b.length === 0) {
//         return a.slice(0, 1) + "@";
//     } else {
//         return "@" + b.slice(-1);
//     }
// }

// Example 2
function lastChars(a, b){
    return a.length >= 2 && b.length >= 2 ? a.slice(0, 1) + b.slice(-1) : a.length >= 2 && b.length === 0 ? a.slice(0, 1) + "@" : "@" + b.slice(-1);
}

console.log(lastChars("last", "chars"));

// String 1.23
// Example 1
// function conCat(a, b) {
//     if (a.slice(-1) === b.slice(0, 1)){
//         return a.slice(0, -1) + b;
//     } else {
//         return a + b;
//     }
// }

// Example 2
// function conCat(a, b){
//     return a.slice(-1) === b.slice(0, 1) ? a.slice(0, -1) + b : a + b;
// }

// Example 3
function conCat(a, b){
    return a.slice(-1) === b.slice(0, 1) ? a.slice(0, -1).concat(b) : a.concat(b);
}

console.log(conCat("abc", "cat"));

// String 1.24
// Example 1
// function lastTwo(str) {
//     return str.slice(0, -2) + str.slice(-1) + str.slice(-2, -1);
// }

// Example 2
// function lastTwo(str){
//     return str.substring(0, str.length - 2) + str.substring(str.length - 1) + str.substring(str.length - 2, str.length - 1);
// }

// Example 3
// function lastTwo(str) {
//     return str.replace(str.substring(str.length-2),(str.substring(str.length-1)+str.substr(-2,1)))
// }

// Example 4
function lastTwo(str){
    return str.slice(0, -2) + str.charAt(str.length - 1) + str.charAt(str.length - 2);
}

console.log(lastTwo("coding"));

// String 1.25
// Example 1
// function seeColor(str) {
//     if (str.startsWith("red")){
//         return str.slice(0, 3);
//     } else if (str.startsWith("blue")){
//         return str.slice(0, 4);
//     } else {
//         return "";
//     }
// }

// Example 2
function seeColor(str){
    return str.startsWith("red") ? str.slice(0, 3) : str.startsWith("blue") ? str.slice(0, 4) : "";
}

console.log(seeColor("redxx"));