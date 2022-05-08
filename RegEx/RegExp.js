var TableOfNumber = ['1', '2', '3', '4', '5', '6', '7', '8', '9'];
var PhoneNumber = '86599024';
var RegEx = "^".concat(TableOfNumber[TableOfNumber.length - 1]);
var RegExV2 = new RegExp(RegEx, 'g');
console.log(RegExV2.test(PhoneNumber));
