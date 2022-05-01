export {};

function functionName(arg1:number,arg2:number,argN?: {} | string):unknown {

    return (arg1+arg2)%2 === 0 ? `${arg1} + ${arg2} = ${arg1+arg2}
    ${argN}`: `${arg1} + ${arg2} = ${arg1+arg2}` ;

}

console.log(functionName(12,12,'is pair'));