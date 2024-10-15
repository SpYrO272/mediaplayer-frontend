import React, { useState } from 'react'
import Add from '../components/Add'
import { Link } from 'react-router-dom'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faClockRotateLeft } from '@fortawesome/free-solid-svg-icons'
import Allvideos from '../components/Allvideos'
import Category from '../components/Category'

function Home() {
  const [addVideoStatus, setaddVideoStatus] = useState({})
  const [videoStatus, setVideostatus] = useState({})
  return (
    <>
    <div className='d-flex p-md-5 p-3 align-items-center'>
      <Add setaddVideoStatus={setaddVideoStatus}/>
      <Link to={'/WatchHistory'} className='ms-auto' style={{textDecoration:'none'}}><h4><span className='d-none d-md-inline'>Watch History</span> <FontAwesomeIcon icon={faClockRotateLeft} className="ms-2" /></h4></Link>
    </div>

    <div className='container-fluid p-4'>
      <div className="row">
        <div className="col-md-9">
          <Allvideos addVideoStatus={addVideoStatus} setVideostatus={setVideostatus}/>
        </div>
        <div className="col-md-3">
          <Category videoStatus ={videoStatus}/>
        </div>
      </div>
    </div>
    </>
  )
}

export default Home