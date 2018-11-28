//Problem One
function sleep_in(weekday,vacation) {
    if(weekday == true && vacation == false){
        return false;
    }else{
        return true;
    }
}

//Problem Two
function monkey_trouble(monkeyA, monkeyB) {
    if (monkeyB == true && monkeyA == true) {
        return true;
    }
    if (monkeyB == false && monkeyA == false) {
        return true;
    }
    if (monkeyB == false && monkeyA == true) {
        return false;
    }
    if (monkeyB == true && monkeyA == false) {
        return false;
    }
}

//Problem Three
function string_times(string, number){
    if (number == 0) {
        return "";
    }
    var result = string;
    for(var i = 0; i < number - 1; i++){
        result += string;
    }
        return result ;
}

//Problem Four
function front_times(string, number) {
    if (number == 0) {
        return "";
    }
    var text = string.substr(0, 3);
    for (var i = 0; i < number - 1; i++) {
        text+= string.substr(0, 3);
    }
    return text;
}

//Problem Five
function string_bits(string){
    var letter = string.charAt();
    for(var i = 2; i < string.length; i+=2){
        letter += string.charAt(i);
    }
    return letter;
}


//Problem Six
function caughtSpeeding(speed,birthday ) {
    if (birthday == true) {
        if (speed <= 65) {
            return 0;
        }
        if (speed > 65 && speed <= 85) {
            return 1;
        }
        if (speed > 85) {
            return 2;
        }
    } else {
        if (speed <= 60) {
            return 0;
        }
        if (speed > 60 && speed <= 80) {
            return 1;
        }
        if (speed > 80) {
            return 2;
        }
    }
}

//Problem Seven
function fizz_buzz(number){
    if (number % 3 == 0 && number % 5 != 0) {
        return "Fizz";
    }
    if (number % 5 == 0 && number % 3 != 0) {
        return "Buzz";
    }
    if (number % 5 == 0 && number % 3 == 0) {
        return "FizzBuzz";
    }
    if (number % 5 != 0 && number % 3 != 0){
        return number + "!";
    }
}

//Problem Eight
function teaParty(tea,candy) {
    if (tea < 5 || candy < 5) {
        return 0;
    }
    if (tea / 2 >= candy || candy / 2 >= tea) {
        return 2;
    }
    if (tea >= 5 && candy >= 5) {
        return 1;
    }
}
//A party is good (1) if both tea and candy are at least 5.
//However, if either tea or candy is at least double the amount of the other one, the party is great (2).
//However, in all cases, if either tea or candy is less than 5, the party is always bad (0).

//Problem Nine
function blackjack(x,y){
    if (x > 21 && y > 21) {
        return 0;
    }
    if (x <= 21 && y <=21) {
        return Math.max(x,y);
    }
    if (x > 21 && y <= 21) {
        return y;
    }
    if (y > 21 && x <= 21) {
        return x;
    }
}
//Given 2 int values greater than 0, return whichever value is nearest to 21 without going over.
// Return 0 if they both go over.
//blackjack(19, 21) → 21       blackjack(21, 19) → 21        blackjack(19, 22) → 19

//Problem Ten
function loneSum(x,y,z){
    if (x != y && x != z && y != z) {
        return x + y + z;
    }
    if (x == y && x == z && y == z) {
        return 0;
    }
    if (x == y && x != z){
        return z;
    }
    if (x != y && x == z){
        return y;
    }
    if (x != y && y == z){
        return x;
    }
}


//Given 3 int values, a b c, return their sum.
// However, if one of the values is the same as another of the values, it does not count towards the sum.
//loneSum(1, 2, 3) → 6       loneSum(3, 2, 3) → 2        loneSum(3, 3, 3) → 0











//Github name: samuelgrayperiod5

//function runs on click and outputs test cases you create to page
function tester() {
    document.getElementById("output").innerHTML += sleepIn(true, false);
    document.getElementById("output").innerHTML += monkeyTrouble(true, false);
    document.getElementById("output").innerHTML += stringTimes(true, false);
    document.getElementById("output").innerHTML += frontTimes(true, false);
    document.getElementById("output").innerHTML += stringBits(true, false);
    document.getElementById("output").innerHTML += caughtSpeeding(true, false);
    document.getElementById("output").innerHTML += fizzBuzz(true, false);
    document.getElementById("output").innerHTML += teaParty(true, false);
    document.getElementById("output").innerHTML += blackjack(true, false);
    document.getElementById("output").innerHTML += loneSum(true, false);
    //test third method, etc
}
