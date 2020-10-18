import {body, query} from "express-validator";
import moment from "moment"

const validateDate = (value)=>{
    return moment(value, 'YYYY-MM-DD',true).isValid()
}

export default {
    pOneTypes : [
        query('string',"une chaine de caractere est requise").exists().isString().withMessage("string doit etre une chaine de caractere"),
        query("number","number est requis").exists().isInt({min : 0,max : 20}).withMessage("number doit etre numeric entre 0 et 20")
    ],
    pTwoTypes : [
        body("dateStart").exists().custom(value=>validateDate(value)).withMessage("date is invlid"),
        body("dateEnd").optional().custom(value=>validateDate(value)).withMessage("date is invlid"),
    ]
}



