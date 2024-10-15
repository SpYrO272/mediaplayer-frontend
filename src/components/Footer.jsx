import { faInstagram, faXTwitter, faFacebook, faWhatsapp } from '@fortawesome/free-brands-svg-icons';
import { faVideo } from '@fortawesome/free-solid-svg-icons'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import React from 'react'
import { Link } from 'react-router-dom';

function Footer() {
  return (
    <div className='container-fluid p-3'>
      <div className='row'>
        <div className='col-md-4'>
          <h3 className='text-warning'><FontAwesomeIcon icon={faVideo} beatFade className='me-2' />Media Player</h3>
          <p style={{textAlign:'justify'}}>Lorem ipsum dolor sit amet consectetur adipisicing elit. Delectus quasi sed, libero, eum molestias doloribus eos eius earum iure repellendus necessitatibus perspiciatis aperiam ad pariatur debitis cum porro exercitationem saepe.</p>
        </div>
        
        <div className="col-md-2 d-md-flex justify-content-center">
        <div>
            <h3>Links</h3>
            <Link to={'/'}><p>Landing Page</p></Link>
            <Link to={'/home'}><p>Home Page</p></Link>
            <Link to={'/watchHistory'}><p>Watch History</p></Link>
          </div>
        </div>
          
        <div className="col-md-2 d-md-flex justify-content-center">
        <div>
            <h3>Guides</h3>
            <p>React</p>
            <p>React Bootstrap</p>
            <p>Bootswatch</p>          </div>
        </div>
        <div className="col-md-4 px-md-5">
          <h3>Contact Us</h3>
          <div className='d-flex mt-4'>
            <input type="text" placeholder='Email Id'className='form-control' />
            <button className='btn btn-warning ms-3'>Subscribr</button>
          </div>
          <div className='d-flex justify-content-around mt-4'>
          <FontAwesomeIcon icon={faFacebook} className='fa-2x' />
          <FontAwesomeIcon icon={faWhatsapp} className='fa-2x'/>
          <FontAwesomeIcon icon={faInstagram} className='fa-2x'/>
          <FontAwesomeIcon icon={faXTwitter} className='fa-2x'/>
          </div>
        </div>
      </div>
      

    </div>
  )
}

export default Footer