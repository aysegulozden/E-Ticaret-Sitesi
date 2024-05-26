import React, { useEffect, useState } from 'react'
import { useDispatch, useSelector } from 'react-redux';
import { useParams } from 'react-router-dom'
import { setSelectedProduct } from '../redux/slices/productSlice';
import '../css/ProductDetails.css';
import { CiCirclePlus } from "react-icons/ci";
import { CiCircleMinus } from "react-icons/ci";




function ProductDetails() {
    const { id } = useParams();//id'yi urlden yakaladık
    const { products, selectedProduct } = useSelector((store) => store.product)//productslarımızı çektik storeden

    const { price, image, title, description } = selectedProduct;

    const dispatch = useDispatch();

    const [count, setCount] = useState(0);
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
    const arttir = () => {
        setCount(count + 1);
    }
    const azalt = () => {
        setCount(count - 1);
    }


    return (
        <div style={{ marginTop: '30px', display: 'flex', flexDirection: 'row', justifyContent: 'center' }}>
            <div style={{ marginRight: '40px' }} >
                <img src={image} width={300} height={500} alt="" />
            </div>
            <div >
                <h1 className='title'>{title}</h1>
                <p className='desc'>{description}</p>
                <h1 className='price'>{price}₺</h1>
                <div style={{ display: 'flex', alignItems: 'center' }}>
                    <CiCirclePlus style={{ fontSize: '40px', marginRight: '15px' }} onClick={arttir} /> <span style={{ fontSize: '25px' }}>{count}</span> <CiCircleMinus style={{ fontSize: '40px', marginLeft: '15px' }} onClick={azalt} />

                </div>
                <div >
                    <button className='button'>Sepete Ekle</button>
                </div>
            </div>

        </div>
    )
}

export default ProductDetails