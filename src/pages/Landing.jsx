import React from 'react'
import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import Button from 'react-bootstrap/Button';
import Card from 'react-bootstrap/Card';
import { Link } from 'react-router-dom';
function Landing() {
  return (
    <>
      <Container className='d-flex justify-content-center align-items-center py-5 px-4'>
        <Row className='mt-5 d-flex justify-content-center align-items-center'>
          <Col md={6}>
            <h2 className='mt-md-5'>Welcome to <span className='text-warning'>Media Player</span></h2>
            <p style={{textAlign:'justify'}}> Lorem ipsum dolor sit amet consectetur adipisicing elit. Quis nemo atque aspernatur quas eaque ducimus nobis sint eveniet. Nostrum quia, aspernatur fugit dolorem dicta ullam quaerat autem quas architecto odio.Lorem ipsum dolor sit amet consectetur adipisicing elit. Quis nemo atque aspernatur quas eaque ducimus nobis sint eveniet. Nostrum quia, aspernatur fugit dolorem dicta ullam quaerat autem quas architecto odio.</p>
            <Link to={'/home'}><button className='btn btn-warning mt-3'>Get Started</button></Link>
          </Col>
          <Col md={1}></Col>
          <Col md={5} className='d-flex justify-content-center mt-5 mt-md-0'>
          <img className='w-100' src="https://img.freepik.com/premium-photo/headphones-resting-table_1107815-10684.jpg" alt="no image" /></Col>
        </Row>
      </Container>
      
    <Container className='mt-5'>
      <h2 className='text-center'>Features</h2>
      <Row>
        <Col md={1}></Col>
        <Col md={10}>
          <Row className='mt-5 d-flex justify-content-center align-items-center'>
            <Col md={4} className='p-3'>  
            <Card style={{ width: '18rem' }}>
      <Card.Img className='w-100' height={'300px'} variant="top" src="https://cdn.dribbble.com/users/473297/screenshots/1533865/socialmedia.gif" />
      <Card.Body>
        <Card.Title>Card Title</Card.Title>
        <Card.Text>
          Some quick example text to build on the card title and make up the
          bulk of the card's content.
        </Card.Text>
      </Card.Body>
    </Card></Col>
            <Col md={4} className='p-3'>  
            <Card style={{ width: '18rem' }}>
      <Card.Img className='w-100' height={'300px'} variant="top" src="https://images.squarespace-cdn.com/content/v1/5e59eefe0e4624584d852c64/de039f25-73da-4743-8bb5-ee01a9ccd244/giphy.gif" />
      <Card.Body>
        <Card.Title>Card Title</Card.Title>
        <Card.Text>
          Some quick example text to build on the card title and make up the
          bulk of the card's content.
        </Card.Text>
      </Card.Body>
    </Card></Col>
            <Col md={4} className='p-3'>  
            <Card style={{ width: '18rem' }}>
      <Card.Img className='w-100' height={'300px'} variant="top" src="https://media3.giphy.com/media/jQmn1Dkw55R3cjm3eC/giphy.gif?cid=6c09b952j98ng276fbi2chy58d6es0cdgbt0w0ameowitz04&ep=v1_internal_gif_by_id&rid=giphy.gif&ct=g" />
      <Card.Body>
        <Card.Title>Card Title</Card.Title>
        <Card.Text>
          Some quick example text to build on the card title and make up the
          bulk of the card's content.
        </Card.Text>
      </Card.Body>
    </Card></Col>
          </Row>
        </Col>
        <Col md={1}></Col>
      </Row>
    </Container>
      
     <div className="container">
        <div className='row p-md-5 p-3'>
          
          <div className="col border border-secondary border-2 rounded p-md-5 p-3">
          <div className='row'>
              <div className="col-md-6">
                <h2 className='text-warning'>Simple fast and Powerfull</h2>
                <p className='mt-2'><span className='fs-4'>Play Everything : </span>Lorem ipsum dolor sit amet consectetur adipisicing elit. Vero, ea eveniet? Totam voluptates similique unde doloremque, eos possimus, perferendis vitae harum inventore incidunt vel voluptas fugit omnis sed assumenda autem.</p>
                
                <p className='mt-2'><span className='fs-4'>Play Everything :</span>Lorem ipsum dolor sit amet consectetur adipisicing elit. Vero, ea eveniet? Totam voluptates similique unde doloremque, eos possimus, perferendis vitae harum inventore incidunt vel voluptas fugit omnis sed assumenda autem.</p>
                
                <p className='mt-2'><span className='fs-4'>Play Everything : </span>Lorem ipsum dolor sit amet consectetur adipisicing elit. Vero, ea eveniet? Totam voluptates similique unde doloremque, eos possimus, perferendis vitae harum inventore incidunt vel voluptas fugit omnis sed assumenda autem.</p>
              </div>
              <div className='col-md-6'>
              <iframe width="100%" height="514px" src="https://www.youtube.com/embed/-IApMCvS6AU?si=XRy896oFfuUBt-zX" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" referrerpolicy="strict-origin-when-cross-origin" allowfullscreen></iframe>
              </div>
            </div>
          </div>
            
        </div>
      </div> 
    </>
  )
}

export default Landing