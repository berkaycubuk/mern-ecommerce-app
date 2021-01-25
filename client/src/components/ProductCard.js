import React from 'react'
import { Link } from 'react-router-dom'

import productImage from '../assets/images/product-1.jpg'

const ProductCard = (props) => {
  return (
    <div className="card">
      <img src={ productImage } className="card-img-top" alt={ props.product.title } />
      <div className="card-body">
        <p className="card-text">{ props.product.title }</p>
        <Link to={ `/product/${props.product.slug}` } className="btn btn-primary">Buy - 100$</Link>
      </div> 
    </div>
  )
}

export default ProductCard