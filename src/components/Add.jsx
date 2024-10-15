import { faCloudArrowUp, faFilm } from '@fortawesome/free-solid-svg-icons'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import React from 'react'
import { useState } from 'react';
import Button from 'react-bootstrap/Button';
import Modal from 'react-bootstrap/Modal';
import { AddVideoApi } from '../services/allApi';
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';

function Add({setaddVideoStatus}) {//we get obejct from props. to get value we destructure here//

  const [videoDetails, setvideoDetails] = useState({
    caption:"",
    imageUrl:"",
    embedLink:""
  })
  
  const [show, setShow] = useState(false);

  console.log(videoDetails);


  const handleClose = () => {
    setShow(false);
    handleCancel()
  }
  

  const handleShow = () => setShow(true);
  
  // const getEmbedLink =(e)=>{
  //   const link = e.target.value
  //   if(link.startsWith('https://youtu.be/')){
  //     const embedL=`https://youtube.com/embed/${link.slice(17,28)}`  
  //     setvideoDetails({...videoDetails, embedLink:embedL})
  //     }
  //     else{
  //       const embedL=`https://youtube.com/embed/${link.slice(-11)}`  
  //       setvideoDetails({...videoDetails, embedLink:embedL})
  //     }
  // }
 
  const handleCancel=()=>{
    setvideoDetails({
      caption:"",
      imageUrl:"",
      embedLink:""
    })
  }


  const handleAdd = async()=>{
  const {caption , imageUrl , embedLink} = videoDetails

  if(!caption || !imageUrl || !embedLink){
    toast.info("Please fill the form completely")
  }
  else{
    if(videoDetails.embedLink.startsWith('https://youtu.be/')){
      const embedL=`https://www.youtube.com/embed/${videoDetails.embedLink.slice(17,28)}`  
      // setvideoDetails({...videoDetails, embedLink:embedL})
      
      const result = await AddVideoApi({...videoDetails, embedLink:embedL})
      console.log(result);  
      if(result.status>=200 && result.status<300){
        toast.success("Video Uploaded Successfully")
        handleClose()
        setaddVideoStatus(result.data)
      }
      else{
        toast.error("Something went wrong")
      }
    }
      else{
        const embedL=`https://www.youtube.com/embed/${videoDetails.embedLink.slice(-11)}`  
        // setvideoDetails({...videoDetails, embedLink:embedL})
        
        const result = await AddVideoApi({...videoDetails, embedLink:embedL})
        console.log(result);
        if(result.status>=200 && result.status<300){
          toast.success("Video Uploaded Successfully")
          handleClose()
          setaddVideoStatus(result.data)
        }
        else{
          toast.error("Something went wrong")
        }
      }
      
  }
    
    
  }
  
  return (
    <>
        <div className='d-flex align-items-center'>
            <h5 className='d-none d-md-inline'>Upload New Video</h5>
            <button className='btn pb-3' onClick={handleShow}><FontAwesomeIcon icon={faCloudArrowUp} className='fs-5'/></button>
        </div>

        <Modal show={show} onHide={handleClose}>
        <Modal.Header closeButton>
          <Modal.Title className='text-warning'><FontAwesomeIcon icon={faFilm} className='me-2'/>Upload Videos</Modal.Title>
        </Modal.Header>
        <Modal.Body>
            <h6>Please fill the following details</h6>
            <form className='p-3 border border-dark rounded mt-3'>
                <div className='mb-3'>
                    <input type="text" value={videoDetails.caption} placeholder='Video Caption' className='form-control' onChange={(e) => setvideoDetails({...videoDetails, caption:e.target.value})}/>
                </div>
                <div className='mb-3'>
                    <input type="text" value={videoDetails.imageUrl} placeholder='Video Image' className='form-control' onChange={(e) => setvideoDetails({...videoDetails, imageUrl:e.target.value})}/>
                </div>
                <div className='mb-1'>
                    <input type="text" value={videoDetails.embedLink} placeholder='Video URL' className='form-control' onChange={(e)=>setvideoDetails({...videoDetails, embedLink:e.target.value})}/>
                </div>
            </form>
        </Modal.Body>
        <Modal.Footer>
          <Button variant="secondary" onClick={handleCancel}>
            Cancel
          </Button>
          <Button variant="warning" onClick={handleAdd}>
            Upload
          </Button>
        </Modal.Footer>
      </Modal>
      <ToastContainer position='top-center' autoClose={2000} theme="colored" />
     
    </>

   
  )
}

export default Add