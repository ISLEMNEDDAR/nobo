import validationType from "./validator"
import moment from "moment";

/*const validateDate = (value)=>{
    return moment(value, 'YYYY-MM-DD',true).isValid()
}*/




export const validateProgram = (methode) =>{
    switch (methode) {
        case "p1" : {
            return validationType.pOneTypes
        }
        case "p2" : {
            return validationType.pTwoTypes
        }
    }
}

