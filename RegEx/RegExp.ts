let TableOfNumber:Array<string>=['1','2','3','4','5','6','7','8','9'];
const PhoneNumber='86599024';   

const RegEx:string=`^${TableOfNumber[TableOfNumber.length-1]}`;
const RegExV2:RegExp = new RegExp(RegEx,'g');


console.log(RegExV2.test(PhoneNumber));
