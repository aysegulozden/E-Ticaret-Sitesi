import React, { useEffect } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { getAllProducts } from '../redux/slices/productSlice';
import Products from './Products';
import '../css/Product.css';

function Product() {
    const dispatch = useDispatch();
    const { products } = useSelector((store) => store.product);
    console.log(products);


    useEffect(() => {
        dispatch(getAllProducts())

    }, [])
    return (
        <div className="flex-row">
            {
                products && products.map((product) => (
                    <Products key={product.id} product={product} />
                ))
            }
        </div>
    )
}

export default Product