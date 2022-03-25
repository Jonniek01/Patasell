import React from 'react'
import { Container,Modal,Button } from 'react-bootstrap'
import '../sass/MyProfileSeller.scss'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faLocation } from '@fortawesome/free-solid-svg-icons'
import { Products } from '../data/Products'
import { useState } from 'react'
import UpdateSellerForm from '../components/UpdateSellerForm'
import UpdateProductForm from '../components/UpdateProductForm'
import CreateProductForm from '../components/CreateProductForm'




function MyProfileSeller({userId,clat,clong}) {
  const [show, setShow] = useState(false);
  const [showp, setShowp] = useState(false);
  const handleClosep = () => setShowp(false);
  const handleShowp = () => setShowp(true);
  const [showpedit, setShowpedit] = useState(false);
  const handleClosepedit = () => setShowpedit(false);
  const handleShowpedit = () => setShowpedit(true);



  const [products,setProducts]=useState(Products)
  const product=products.filter(product=>product.userId===userId).map((product)=>{
    return<div key={product.productId}>
          <div className='product-card-seller'>
        <div className='name-image'>
            <div className='product-name'>{product.productName}</div>
            <div className='product-image'>Image</div>
        </div>
        <div className='price-available'>
            <div className='price'><p>{product.price} Ksh</p></div>
            <span>
            <button className='b-available' style={{color:product.available===true?"blue":"red"}}>{product.available===true?"Available":"Unavailable"}</button>
            <Button variant="primary" onClick={handleShowpedit}>
      Edit Product
      </Button>



            </span>
            
        </div>
    </div>

      
      
      </div>
  }

  )


  return (
    <Container>
      <div className='seller-profile'>
    <div className='seller-profile-head'>
        <div className='profile-image'><p>Profile Image</p></div>
        <div className='contents'>
          <div className='s-brand'><h1>Brand</h1></div>
          <div className='s-distance-name'><div className='s-distance'>30km</div><div className='s-name'>LocationName<FontAwesomeIcon className='search-icon'  icon={faLocation}  /></div></div>
          <span>userId:{userId}</span><span>lat:{clat}</span><span>long:{clong}</span>

          <p className='description'>
Lorem ipsum dolor sit amet, consectetur adipiscing elit. Etiam elementum convallis sem, quis egestas ante lacinia sed. Nunc luctus dui in arcu semper, vel mattis libero varius. Donec at ligula massa. Praesent convallis et justo et fringilla
  </p>
            
        </div>


    </div>
    <div className='edit-create'>
      <span className='edit'>  
      <Button variant="primary" onClick={() => setShow(true)}>
        Edit account
      </Button></span><span className='create'> 
       <Button variant="primary" onClick={handleShowp}>
      Create Product
      </Button>

</span>
    </div>
    <div className='seller-product-cards'>
      {product}
    </div>
    </div>


    {/*modal fo editing account*/}
    <Modal
        show={show}
        onHide={() => setShow(false)}
        dialogClassName="modal-100w"
        aria-labelledby="example-custom-modal-styling-title"
      >
        <Modal.Header closeButton>
          <Modal.Title id="example-custom-modal-styling-title">
            Edit Account
          </Modal.Title>
        </Modal.Header>
        <Modal.Body>

          <UpdateSellerForm clat={clat} clong={clong}/>

        </Modal.Body>
      </Modal>

      {/*modal for creating poduct*/}

      <Modal show={showp} onHide={handleClosep} animation={false}>
        <Modal.Header closeButton>
          <Modal.Title>Create Product</Modal.Title>
        </Modal.Header>
        <Modal.Body>
          <CreateProductForm/>

        </Modal.Body>
      </Modal>

            {/*modal for editing poduct*/}

            <Modal show={showpedit} onHide={handleClosepedit} animation={false}>
        <Modal.Header closeButton>
          <Modal.Title>Edit Product</Modal.Title>
        </Modal.Header>
        <Modal.Body>
          <UpdateProductForm/>

        </Modal.Body>
      </Modal>
      


</Container>  )
}

export default MyProfileSeller