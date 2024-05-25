import React from 'react'
import '../css/Product.css';

function Products({ product }) {
    const { id, price, image, title, description } = product;
    console.log(image);
    return (
        <div className='card'>
            <img className="image" src={image} alt="" />
            <div >
                <p className='title'>{title}</p>
                <h3 className='price'>{price} ₺</h3>
            </div>
            <div className='flex-row'>
                <button className='button-detay'>Detaylar</button>
            </div>
        </div>

    )
}

export default Products