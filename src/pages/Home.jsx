import './home.css'


function Home({prodata,cart,setCdata}) {

    //product add to cart function
    function Addcart(pro){
        setCdata([...cart,pro]);
    }
    //product remove from cart function
    function Removecart(id){
        setCdata(cart.filter((pro)=>{return id !== pro.id}));
    }
    
  return (
    <div className='product'>
        {
       
            prodata.map((pro)=>(
            <div className='product-cart' key={pro.id}>
                <div className="imge-box">
                    <img src={pro.image_link} alt="" />
                </div>
                <div className="details">
                    <h3 className='name'>{pro.name.length<=20 ? pro.name : pro.name.slice(0,20)+"..."}</h3>
                    <div className="con">
                        <h3>Brand : {pro.brand}</h3>
                        <h3 style={{fontSize:"25px", color:"green"}}> {pro.price_sign}{pro.price}</h3>
                    </div>
                </div>
                <div>
                    {
                        cart.includes(pro)?( <button className="btn-remove" onClick={()=>{Removecart(pro.id)}}>Remove to cart</button>):(<button className="btn" onClick={()=>{Addcart(pro)}}>Add to cart</button>)
                    }
                </div>
            </div>
            ))
      
        }
    </div>
  )
}

export default Home