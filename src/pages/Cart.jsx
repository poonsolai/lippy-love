import React, { useEffect, useState } from 'react'
import './cart.css'

function Cart({cartdata,setCart,set}) {
  
  const [empty,setEmpty] = useState(true);
  const [amt,setAmt] = useState(0);
  let width = window.innerWidth;
 
  function removecart(id){
    setCart(cartdata.filter((pro)=>id !== pro.id));
  }
  
  useEffect(()=>{
    cartdata.length == 0 ? setEmpty(true) : setEmpty(false);
    setAmt(cartdata.reduce((acc,ans)=>acc + parseInt(ans.price),0))
  },[cartdata]);
    
 
  function ordernow(){
    alert("ORDER CONFIREMED SUCCESSFULLY 💕 💕");
    // setShow(true);
    setCart([])
  }
  return (
    <>
      
     {
      !empty && <div className="final">
                  <h1>Total amount is : ${amt}</h1>
                  <button className='order' onClick={ordernow}>Order Now</button>
                </div>
     }
       
      
      {
        empty && <div className="empty-cart"><h1 className='empty'>Cart is empty</h1><button className='add' onClick={()=>{set()}}>Add Products</button></div>
      }
      {
        cartdata.map((cart)=>(
          <div className='pro-box' key={cart.id}>
              <div className="cart-img">
                <img src={cart.image_link} alt="" />
                <div className="details">
                  <h3 className='cart-name'>  {cart.name.length>20 && width<400 ? cart.name.substring(0,15)+"..":cart.name}</h3>
                  <h3>price : {cart.price_sign}{cart.price}</h3>
                </div>
              </div>
              <div className="button">
                <button onClick={()=>{removecart(cart.id)}}>{width<400?"X":"REMOVE"}</button>
              </div>
          </div>
        ))
      }
    </>
  )
}

export default Cart