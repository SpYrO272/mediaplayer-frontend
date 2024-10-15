import axios from "axios"

export const commonApi = async(httpmethod, url , reqBody)=>{
    const reqConfig = {
        method:httpmethod,
        url,
        data:reqBody,
        headers :{"Content-Type":"application/json"}
    }

    return await axios(reqConfig).then((result)=>{
        return result
    }).catch((error)=>{
        return error
    })
}