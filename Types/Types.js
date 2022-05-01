"use strict";
exports.__esModule = true;
//RegExp
var Regex = /24 && [z]/;
var TestExp = "123456789abcdefghz..!!<&&";
console.log(Regex.test(TestExp));
//Types {string, Number, boolean, Array, Object}
var ID = "s87f8s97g9s87ezf89ez798g";
var First_Name = "Othmen";
var Last_Name = "Daghrour";
var Phone_Number = 96599024;
var Job = "JavaScript developer";
var isPaid = true;
//Subtypes {Unkown, Any, never, null, undefined}
var nll = null;
var und = undefined;
var unk;
var nv;
var an = 2;
var randomType;
//Array in typescript
var Jobs = ["front-end", "back-end", "blockchain dev", "devops"];
var Salary = [1200, 2400, 3600, 4800];
var Salary2 = [1200, 2400, 3600, 4800];
//Enum type
var Days;
(function (Days) {
    Days[Days["Monday"] = 0] = "Monday";
    Days[Days["Tuesday"] = 1] = "Tuesday";
    Days[Days["Wednesday"] = 2] = "Wednesday";
    Days[Days["Thursday"] = 3] = "Thursday";
    Days[Days["Friday"] = 4] = "Friday";
    Days[Days["Saturday"] = 5] = "Saturday";
    Days[Days["Sunday"] = 6] = "Sunday";
})(Days || (Days = {}));
;
var Months;
(function (Months) {
    Months[Months["January"] = 0] = "January";
    Months[Months["February"] = 1] = "February";
    Months[Months["March"] = 2] = "March";
    Months[Months["April"] = 3] = "April";
    Months[Months["May"] = 4] = "May";
    Months[Months["June"] = 5] = "June";
    Months[Months["July"] = 6] = "July";
    Months[Months["August"] = 7] = "August";
    Months[Months["September"] = 8] = "September";
    Months[Months["October"] = 9] = "October";
    Months[Months["November"] = 10] = "November";
    Months[Months["December"] = 11] = "December";
})(Months || (Months = {}));
;
var Symbols;
(function (Symbols) {
    Symbols[Symbols["."] = 0] = ".";
    Symbols[Symbols[".."] = 1] = "..";
    Symbols[Symbols["!"] = 2] = "!";
    Symbols[Symbols["?"] = 3] = "?";
    Symbols[Symbols["<"] = 4] = "<";
    Symbols[Symbols[">"] = 5] = ">";
    Symbols[Symbols["/"] = 6] = "/";
    Symbols[Symbols["\\"] = 7] = "\\";
    Symbols[Symbols["{"] = 8] = "{";
    Symbols[Symbols["}"] = 9] = "}";
    Symbols[Symbols[" "] = 10] = " ";
    Symbols[Symbols["["] = 11] = "[";
    Symbols[Symbols["]"] = 12] = "]";
    Symbols[Symbols["$"] = 13] = "$";
    Symbols[Symbols["`"] = 14] = "`";
})(Symbols || (Symbols = {}));
;
var Operators;
(function (Operators) {
    Operators[Operators["+"] = 0] = "+";
    Operators[Operators["-"] = 1] = "-";
    Operators[Operators["//"] = 2] = "//";
    Operators[Operators["*"] = 3] = "*";
    Operators[Operators["="] = 4] = "=";
    Operators[Operators["||"] = 5] = "||";
    Operators[Operators["&&"] = 6] = "&&";
})(Operators || (Operators = {}));
;
var HexaColors;
(function (HexaColors) {
    HexaColors[HexaColors["#FFFFFF"] = 0] = "#FFFFFF";
    HexaColors[HexaColors["#000000"] = 1] = "#000000";
})(HexaColors || (HexaColors = {}));
;
// Testing enum type
var day = Days.Wednesday;
console.log('***************');
console.log(day);
console.log('***************');
console.log(Days[day]);
//as
var name;
var age;
name = "";
age;
//Display
console.log(typeof (name));
