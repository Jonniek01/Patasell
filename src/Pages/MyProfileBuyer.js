import React from 'react'
import { Container,Modal,Button } from 'react-bootstrap'
import { useState } from 'react'


import '../sass/MyProfileBuyer.scss'
import UpdateBuyerForm from '../components/UpdateBuyerForm';

function MyProfileBuyer({userId,clat,clong}) {

  const [show, setShow] = useState(false);

  const handleClose = () => setShow(false);
  const handleShow = () => setShow(true);


  return (
    <Container>
      <div className='buyer-profile'>
    <div className='buyer-profile-head'>
        <div className='profile-image'><p>Profile Image</p></div>
        <div className='buyer-contents'>
          <h1>User Name</h1>
          <Button variant="primary" onClick={handleShow}>
        Edit account
      </Button>          

        </div>
        <span>userId:{userId}</span><span>lat:{clat}</span><span>long:{clong}</span>




    </div>
    </div>

        {/*modal fo editing account*/}
        <Modal
        show={show}
        onHide={handleClose}
        backdrop="static"
        keyboard={false}
      >
        <Modal.Header closeButton>
          <Modal.Title>Update account</Modal.Title>
        </Modal.Header>
        <Modal.Body>
          <UpdateBuyerForm/>

        </Modal.Body>
        <Modal.Footer>

        </Modal.Footer>
      </Modal>



</Container>  )
}

export default MyProfileBuyer