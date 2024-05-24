import React, { useState } from 'react'
import '../css/Header.css';
import { CiShoppingBasket } from "react-icons/ci";
import { CiLight } from "react-icons/ci";
import { IoMoonOutline } from "react-icons/io5";

function Header() {
    const [theme, setThem] = useState(false);
    const changeThem = () => {
        const root = document.getElementById("root");
        setThem(!theme);
        if (theme) {
            root.style.backgroundColor = "black";
            root.style.color = "#fff";
        }
        else {
            root.style.backgroundColor = "#fff";
            root.style.color = "black";

        }


    }
    return (
        <div style={{ display: 'flex', flexDirection: 'row', alignItems: 'center', justifyContent: 'space-between' }}>

            <div className='flex-row'>
                <img className='logo ' src="./src/images/images.png" />
                <p className='logo-text'>Beauty</p>

            </div>
            <div className='flex-row'>
                <input className='search-input' type="text" placeholder='Search ' />
                <div >
                    <CiShoppingBasket className='icons' />
                    {theme ? <IoMoonOutline className='icons' onClick={changeThem} /> : <CiLight className='icons' onClick={changeThem} />
                    }
                </div>
            </div>

        </div>
    )
}

export default Header