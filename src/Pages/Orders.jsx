import React, { useContext } from 'react'
import Title from '../Component/Title'
import { ShopContext } from '../Context/ShopContext';

const Orders = () => {
    const { products, currency } = useContext(ShopContext);
  return (
    <div className='border-t pt-16'>

            <div className='text-2xl'>
                <Title text1={'MY'} text2={'ORDERS'} />
                <hr />
            </div>

            <div>
                {products.slice(1, 4).map((item, index) => (
                    <div key={index} className='mb-4' >
                        <div style={{display:"flex",justifyContent:"space-around"}}>
                            <div style={{display:"flex"}}>
                            <img  src={item.image[0]} alt="" width={"100px"} className='me-4'/>
                            <div style={{display:"flex",flexDirection:"column"}}>
                                <p>{item.name}</p>
                                <div >
                                    <p >{currency}{item.price}</p>
                                    <div style={{display:"flex"}}>
                                    <p>Quantity: 1</p>
                                    <p className='ms-3'>Size: L</p>
                                    </div>
                                </div>
                                <p c>Date: <span>25, May, 2024</span></p>
                            </div>
                            </div>
                            
                            
                            <div style={{display:"flex",justifyContent:"space-around",alignItems:"center"}}>
                            <p>🟢Ready to ship</p>
                            </div>
                            <div style={{display:"flex",justifyContent:"space-around",alignItems:"center"}}>
                            <button  style={{backgroundColor:"black" ,color:"white",padding:"5px 10px"}}>Track Order</button>
                            </div>

                        </div>
                        <hr />
                    </div>
                ))}
            </div>


        </div>
  )
}

export default Orders