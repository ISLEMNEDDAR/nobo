import {EXCEPTION} from "../config/constant";
import moment from "moment";

const programme1 = (string, number)=>{
    if(string === undefined || number === undefined) throw EXCEPTION.Error
    number = parseInt(number)
    if(!(typeof(string) === "string") || !(typeof(number) === "number") || (number < 0) || (number > 20) ) throw EXCEPTION.Error
    if(number === 0 ) throw EXCEPTION.divisionByZero
    return string.length / number
}

const programme2 = (date_start,date_end)=>{
    if (date_start === undefined) throw EXCEPTION.Error
    if(moment(date_end).isBefore(date_start)) throw EXCEPTION.dateComparaison
    let dateIntervalle = calculeDebutDateStart(date_start)
    if (date_end !== undefined) dateIntervalle+=calculeDebutDateEnd(date_end)
    return dateIntervalle
}

const getDayDate = (date)=>{
    return moment(date).date()
}

const getDayFinMonth = (date)=>{
    return moment(date).endOf("month").date()
}

const calculeDebutDateStart = (dateStart)=>{
    return getDayDate(dateStart) - 1
}

const calculeDebutDateEnd = (endDate)=>{
    return getDayFinMonth(endDate) - getDayDate(endDate)
}

export {programme1, programme2}