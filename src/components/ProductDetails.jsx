import React, { useEffect } from 'react'
import { useDispatch, useSelector } from 'react-redux';
import { useParams } from 'react-router-dom'
import { setSelectedProduct } from '../redux/slices/productSlice';

function ProductDetails() {
    const { id } = useParams();//id'yi urlden yakaladık
    const { products, selectedProduct } = useSelector((store) => store.product)//productslarımızı çektik storeden

    const { price, image, title, description } = selectedProduct;

    const dispatch = useDispatch();
    useEffect(() => {
        getProductById();//bu companent render edildiğinde bu fonksiyona gitsin

    }, [])
    const getProductById = () => {
        products && products.map((product) => {
            if (product.id == id) {
                dispatch(setSelectedProduct(product));

            }
        })

    }

    return (
        <div>{title}</div>
    )
}

export default ProductDetails