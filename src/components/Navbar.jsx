import React, { useEffect, useState } from 'react'
import './navbar.css'
import Home from '../pages/Home'
import Cart from '../pages/Cart'
import openimg from '../image/open.png'
import makeup_data from '../makeup_data.json'

function Navbar() {

    //state variables
    const [home,setHome] = useState(true);
    const [cart,setCart] = useState(false);
    const [data,setData] = useState([]);
    const [cdata,setCdata] = useState([]);
    const [empty,setEmpty] = useState(true);

    //load data once
    useEffect(()=>{
        setData(makeup_data);
    },[]);
    
    //function to switch to home page
    function homefun(e){
            setHome(true);
            setCart(false);
    }
    //function to switch to cart page
    function cartfun(e){
            setHome(false);
            setCart(true);
            cdata.length == 0 ? setEmpty(true) : setEmpty(false)
    }

    
  return (
    
    <div>

        <div className='nav'>
            <h1>Lippy love</h1>
            <ul>
                <li onClick={()=>{homefun("Home")}}>Home</li>
                <li onClick={()=>{cartfun("Cart")}}> <span className="span" >{cdata.length}</span>  View Cart</li>
            </ul>
        </div>
        {
            !cart && <div className="new">
                        <img src={openimg} alt="" className='open-img'/>
                    </div>
        }
        <div className="pages">
            { home && <Home prodata = {data} cart = {cdata} setCdata = {setCdata}/> }
            { cart && <Cart cartdata = {cdata} setCart= {setCdata}  set = {homefun}/> }
        </div>
    </div>
  )
}

export default Navbar