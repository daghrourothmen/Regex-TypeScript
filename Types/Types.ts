export {};

//RegExp

const Regex:RegExp= /24 && [z]/;
const TestExp="123456789abcdefghz..!!<&&"
// console.log(Regex.test(TestExp));

//Types {string, Number, boolean, Array, Object}

const ID:string ="s87f8s97g9s87ezf89ez798g";
const First_Name:string="Othmen";
const Last_Name:string="Daghrour";
let Phone_Number:Number=96599024;
let Job:string="JavaScript developer";
const isPaid:boolean=true;

//Subtypes {Unkown, Any, never, null, undefined}

let nll:null=null;
let und:undefined=undefined;
let unk:unknown;
let nv:never;
let an:any=2;
let randomType: string | Number | boolean | {} | []  | Operators ;

//Array in typescript

let Jobs:Array<string>=["front-end","back-end","blockchain dev","devops"];
let Salary: unknown[]=[1200,2400,3600,4800];
let Salary2: Array< {} | Number> =[1200,2400,3600,4800];

//Enum type

enum Days {Monday, Tuesday, Wednesday, Thursday, Friday, Saturday, Sunday};
enum Months {January, February, March, April, May, June, July, August, September, October, November, December};
enum Symbols {'.', '..', '!', '?', '<', '>', '/', '\\', '{', '}', ' ', '[',']','$','`'};
enum Operators {'+', '-', '//', '*', '=', '||', '&&'};
enum HexaColors {'#FFFFFF','#000000'};

// Testing enum type
let day:Days =Days.Wednesday;
// console.log('***************');
// console.log(day);
// console.log('***************');
// console.log(Days[day]);

//as

let name:unknown;
let age:unknown;

(name as string) = "";
age as Number;

//Display

// console.log(typeof(name));


//_Regexp_Test

const RegExp:RegExp=/^aa.+[zz]$/;
const PhoneNumberTNRegExp:RegExp=/^[+216].+[0..9]/;

let Random_Number='aa4sd65f4sd6zz';
let TunsianPhoneNumber='+21496599024'
console.log(RegExp.test(Random_Number));
console.log(PhoneNumberTNRegExp.test(TunsianPhoneNumber));

//the exec() function in JS, used to test for match in a string
// return the first match or null
//the test() function in JS, used to execute a search for a match
// between regex and a string, it returns true or false



