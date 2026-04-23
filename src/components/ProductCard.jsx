 import React from 'react'
 
 const ProductCard = ({product}) => {
   return (
      <div className='product-card'>
              <img src={product.image} alt={product.name} className='product-image' />
               <div className='product-body'>
                  <h3 className='product-name'>{product.name}</h3>
                    <p className='product-description'>{product.description}</p>
              <div className='product-price'>
                ${product.price.toFixed(2)}
                {product.originalPrice && (
                  <span className='original-price'>${product.originalPrice.toFixed(2)}</span>
                )}
              </div>
                <div className='product-actions'>
                    <button className='btn btn-primary'>Add to Cart</button>
                    <button className='btn btn-secondary'>View Details</button>
            </div>
        </div>
    </div>
   )
 }
 
 export default ProductCard