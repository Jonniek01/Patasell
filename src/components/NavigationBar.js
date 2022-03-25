import React from 'react'
import {  Row, Col, Container} from 'react-bootstrap'
import {Link} from 'react-router-dom'
import '../sass/NavigationBar.scss'
// import logo from './logo.png'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faShop } from '@fortawesome/free-solid-svg-icons'
import { faLightbulb } from '@fortawesome/free-solid-svg-icons'
import profileImage from '../Images/me.jpg'
import { User } from '../data/User'



function NavigationBar() {
  return (
    <>
    <Container className="nav-bar" fluid>
      <Row className="nav-bar-row">
        <Col className="logo-col col">
        <Link className="logo-link" to="/">


          <h1 className='logo'>Patasell</h1>
          </Link>


        </Col>




        <Col className="nav-item col ">  
          <Link className='link' to="/">
          <FontAwesomeIcon className='nav-icon'  icon={faShop}  />

            <span>Shop</span>
            
            </Link>
        </Col>

        <Col className="nav-item col">
          <Link  className='link' to="/profile">
          <img className='profile-image-nav' src={profileImage}  style={{height:'40px' ,width:'40px',borderRadius:"50%",alignSelf:"center"}} alt=''></img>

            <span>Profile</span>
            
            </Link>
        </Col>
        <Col className="nav-item col">

          <Link  className='link' to="/about">
          <FontAwesomeIcon className='nav-icon' icon={faLightbulb} />

            <span>  About</span>
            </Link>
        </Col>






      </Row>

      </Container>



    </>
  )
}

export default NavigationBar