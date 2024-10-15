import React, { useEffect, useState } from 'react'
import Videocard from './Videocard'
import { addVideoToCategoryApi, getVideosApi } from '../services/allApi'

function Allvideos({addVideoStatus, setVideostatus}) {

  const [allVideos, setAllVideos] = useState([])
  const [deleteVideoStatus, setdeleteVideoStatus] = useState({})
  const [videoStatus, setVideoStatus] = useState({})

  //   /*side effects*/ 
  const getAllVideo= async()=>{
    const result = await getVideosApi()
    //  console.log(result);
     setAllVideos(result.data)
    
   }
console.log(allVideos);

const ondrop =(e)=>{
  e.preventDefault()
}
const VideoDrop =async(e)=>{
  const {category, video} = JSON.parse(e.dataTransfer.getData("dataShare"))
  console.log(category, video);

 const newArray = category.allvideos.filter((item)=>item.id!=video.id)
  const newCategory ={
    category: category.category,
    allvideos:newArray,
    id:category.id
  }
  const result = await addVideoToCategoryApi(category.id, newCategory)
  console.log(result);
  if(result.status>=200&& result.status<300){
    setVideostatus(result.data)
  }
  
  
}

// /*to handle sideseffects*/ 
  useEffect(()=>{
     getAllVideo()
   },[addVideoStatus,deleteVideoStatus])/*[]-useEffect is called when the component render to the browser*/
  

  return (
    
    <div droppable onDragOver={(e)=>ondrop(e)} onDrop ={(e)=>VideoDrop(e)}>
      <h4>All Videos</h4>
      {/* added video */}
      
      { allVideos.length>0?
        <div className="container">
          <div className="row">
           {allVideos.map((item)=>(
              <div className="col-md-3 p-2">
              <Videocard video={item} setdeleteVideoStatus={setdeleteVideoStatus}/>
            </div>
           )) 
            
            } 
          </div>
        </div>
        

          :

          
        <div className="container">
          <div className="row">
            <div className="col-md-3"></div>
            <div className="col-md-3">
              <img className='w-100' src="https://jrdsolar.com/templates/default-new/images/empty-cart.png" alt="no image" />
              <h5 className='text-warning text-center'>No Video Added Yet....</h5>
            </div>
            <div className="col-md-3"></div>
  
          </div>
        </div>
      }
    </div>
    
  )
}

export default Allvideos