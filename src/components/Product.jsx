import React, { useEffect } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { getAllProducts } from '../redux/slices/productSlice';


function Product() {
    const dispatch = useDispatch();
    const { products } = useSelector((store) => store.product);
    console.log(products);


    useEffect(() => {
        dispatch(getAllProducts())

    }, [])
    return (
        <div>Product</div>
    )
}

export default Product