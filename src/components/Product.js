import React from 'react'
import { Products } from '../data/Products'
import '../sass/Product.scss'
import { useState } from 'react'
import { Link } from 'react-router-dom'

  // const [product,setProducts]=useState(Products)
  // const productCard=Products.filter(product=>product.ProductName.includes(product)).map(()=>{
  // })

  let sellerId=null
  function setId(){

  }

export const Producthome = () => {
  


  return (
    <div className='product-card'>
        <div className='name-image'>
            <div className='product-name'>ProductName</div>
            <div className='product-image'>Image</div>
        </div>
        <div className='price-available'>
            <div className='price'><p>Ksh.252.00</p></div>
            <Link  className='' to="/seller">

            <button onClick={setId} className='enquire'>Enquire</button>
            </Link>
        </div>
    </div>
  )
}


export const Productprofile = () => {
  return (
    <div>{sellerId}</div>
  )
}

