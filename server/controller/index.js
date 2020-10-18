import {response} from "../utils/responseHandler";
import {createErrorString, handleValidationError} from "../utils/errorHandler";
import {programme1, programme2} from "../repository/repository";
import {EXCEPTION} from "../config/constant";


const program1= (req,res)=>{
    try{
        let {iserror, errors}= handleValidationError(req,res)
        if(iserror) response(res, 422, {message: createErrorString(errors)})
        else {
            let result = programme1(req.query.string,req.query.number)
            response(res,200,{result: result})
        }
    }catch(err){
        if(err === EXCEPTION.divisionByZero) response(res,500,{message : "number is zero"})
        else response(res,500,{message : "error"})
    }
}

const program2 = (req,res)=>{
    try{
        let {iserror, errors}= handleValidationError(req,res)
        if(iserror) response(res, 422, {message: createErrorString(errors)})
        else {
            let result = programme2(req.query.date_start,req.query.date_end)
            response(res,200,{result: result})
        }
    }catch(err){
        console.log("fsfsdfsdf")
        console.log(err === EXCEPTION.divisionByZero)
        if(err === EXCEPTION.divisionByZero) response(res,500,{message : "number is zero"})
        //else response(res,500,{message : "error"})
    }
}


export {program1,program2}