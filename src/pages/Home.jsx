import React from 'react'
import { getProduct } from '../data/products'
import ProductCard from '../components/ProductCard'

const Home = () => {
  const products = getProduct()

  return (
    <div className='home-page'>
      <div className='home-page-welcome'>
       <h1>Freshness you can trust</h1>
        <p>From farm-fresh vegetables to daily essentials, ShopNest brings everything you need right to your doorstep.</p>
      </div>
    <div className='home-page-products'>
      <h2 className='page-title'>Featured Products</h2>
      <div className='product-grid'>
        {
          products.map((product)=>(
            <ProductCard product={product} key={product.id}/>
          ))}
      </div>
  </div>
  </div>
  )
}

export default Home