 import React from 'react'
 import { Link } from 'react-router-dom'


 const ProductCard = ({product}) => {
   return (
      <div className='product-card'>
              <img src={product.image} alt={product.name} className='product-image' />
               <div className='product-body'>
                  <h3 className='product-name'>{product.name}</h3>
                    <p className='product-description'>{product.description}</p>
              <div className='product-price'>
                ${product.price.toFixed(2)}
                {product.originalPrice!= null && (
                  <span className='original-price'>${product.originalPrice.toFixed(2)}</span>
                )}
              </div>
                <div className='product-actions'>
                     <button
                              className="btn btn-primary"
                              type="button"
                              disabled={product.stock === 0}
                              aria-disabled={product.stock === 0}>
                                  {product.stock === 0 ? "Out of Stock" : "Add to Cart"}
                              </button>

                            <Link className="btn btn-secondary" type="button" to={`/products/${product.id}`}>
                          View Details
                  </Link>
            </div>
        </div>
    </div>
   )
 }
 
 export default ProductCard