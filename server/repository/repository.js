import {EXCEPTION} from "../config/constant";

const programme1 = (string, number)=>{
    if(string === undefined || number === undefined) throw "Error"
    number = parseInt(number)
    if(!(typeof(string) === "string") || !(typeof(number) === "number") || (number < 0) || (number > 20) ) throw "Error"
    if(number === 0 ) throw EXCEPTION.divisionByZero
    return string.length / number
}

const programme2 = (date_start,date_end=null)=>{
    console.log(date_start,date_end)
    return 0
}

export {programme1, programme2}