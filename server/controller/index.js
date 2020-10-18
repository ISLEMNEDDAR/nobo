import {createErrorString, response} from "../utils/responseHandler";
import {handleValidationError} from "../utils/errorHandler";
import {programme1} from "../repository/repository";


const program1= (req,res)=>{
    try{
        let {iserror, errors}= handleValidationError(req,res)
        if(iserror) response(res, 422, {message: createErrorString(errors)})
        else {
            let result = programme1(req.query.string,req.query.number)
            response(res,200,{message: result})
        }
    }catch(err){
        console.log(err)
        response(res,500,{message : "error"})
    }


}

const program2 = (req,res)=>{

}


export {program1}