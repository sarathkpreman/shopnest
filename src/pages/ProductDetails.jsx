
import { useEffect, useState } from 'react';
import { useParams, useNavigate } from 'react-router-dom'
import { getProductById } from '../data/products';
import { useCart } from '../context/CartContext';

const ProductDetails = () => {

    const { id } = useParams();
    const navigate = useNavigate();
    const { addToCart } = useCart();
    const fetchProduct = getProductById(id);
    const [product, setProduct] = useState(fetchProduct);

   useEffect(()=> {
        if (!fetchProduct) {
            navigate("/");
            return;
        }
        setProduct(fetchProduct);
    }, [id, navigate, fetchProduct]);
    if (!product) {
        return null;
    }
  return (
    <div className='page'>
        <div className='container'>
            <div className='productdetail'>
                <div className='product-detail-image'>
                    <img src={product.image} alt={product.name} />
                </div>
                <div className='product-detail-info'>
                    <h1 className='product-detail-name'>{product.name}</h1>
                    <p className='product-detail-description'>{product.description}</p>
                    <p className='product-detail-price'>${product.price.toFixed(2)}</p>
                    <button className='btn btn-primary' onClick={() => addToCart(product.id)}>
                        Add to Cart
                    </button>
                </div>
            </div>
        </div>
    </div>
  )
}

export default ProductDetails