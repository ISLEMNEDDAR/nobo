const handleResponse = (status,error,data)=>{
    return {status,error,data}
}

const response = (res,status,data)=>{
    return res.status(status).json(data)
}

export {
    handleResponse,response
}