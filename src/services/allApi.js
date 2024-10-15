import { commonApi } from "./commonApi"
import { serverUrl } from "./serverUrl"

//add video
export const AddVideoApi = async(reqBody)=>{
    return await commonApi('POST',`${serverUrl}/videos`,reqBody)
}
//get all video
export const getVideosApi = async()=>{
    return await commonApi('GET', `${serverUrl}/videos`)
}

//add video history
export const addVideoHistoryApi = async(reqBody)=>{
    return await commonApi('POST',`${serverUrl}/history`,reqBody)
}

// api to get video from history
export const getAllVideoHistoryApi = async()=>{
    return await commonApi('GET',`${serverUrl}/history`)
}
//api to delete a video from allVidoes
export const deleteVideoApi = async(id)=>{
    return await commonApi('DELETE',`${serverUrl}/videos/${id}`)
}
//delete video from history
export const deleteHistoryVideoApi = async(id)=>{
    return await commonApi('DELETE',`${serverUrl}/history/${id}`)
} 
//api to add category
export const addCategoryApi = async(reqBody)=>{
    return await commonApi('POST', `${serverUrl}/category`, reqBody)
}
//api to get category
export const getAllCategoryApi = async()=>{
    return await commonApi('GET',`${serverUrl}/category`)
}
//delete category
export const deleteCategoryApi = async(id)=>{
    return await commonApi('DELETE',`${serverUrl}/category/${id}`)
}
//api to add videodetails to a category
export const addVideoToCategoryApi = async(id, reqBody)=>{
    return await commonApi('PUT',`${serverUrl}/category/${id}`, reqBody)
}