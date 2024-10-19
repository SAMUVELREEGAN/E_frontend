import React, { useContext } from 'react'
import { Container, Row , Col} from 'react-bootstrap'
import CartTotal from '../Component/CartTotal'
import Image from 'react-bootstrap/Image';
import rk from '../Assets/pngegg.png'
import { ShopContext } from '../Context/ShopContext';

const PlaceOrder = () => {
  const {navigate} = useContext(ShopContext)
  return (
    <div>
      <Container className='mt-lg-5' >
        <h3><span>DELIVERY</span> INFORMATION</h3>
        <Row>
          <Col lg={5}>
          <div className='place_order_info'>
            <div className='d-flex flex-wrap'>
              <div><input type="text" placeholder='First Name'/></div>
              <div><input type="text" placeholder='Last Name'/></div>
            </div>
            <div style={{display:"flex",flexWrap:"wrap"}}>
              <div><input type="email" placeholder='Email Address' /></div>
              <div><input type="number" placeholder='Phone Number' /></div>
            </div>
            <div style={{display:'flex',flexWrap:"wrap"}}>
              <div><input type="text" placeholder='City'/></div>
              <div> <input type="text" placeholder='Street' /></div>
            </div>
            <div style={{display:'flex',flexWrap:"wrap"}}>
              <div><input type="number" placeholder='Pin Code'/></div>
              <div><input type="text" placeholder='State'/></div>
            </div>
            
          </div>
          </Col>

          <Col lg={4} className='my-4'>
          <CartTotal />
          <div className='mt-3'>
          <h5><span>PAYMENT </span>METHOD</h5>
          <div className="d-flex">
          <div style={{ border:"1px solid gray" , padding:"5px 20px" ,width:"220px" , margin:"10px 2px"}}><input type="checkbox" /><label className='ms-2'>CASH ON DELIVERY</label></div>
          <div style={{ border:"1px solid gray" , padding:"5px 20px" ,width:"220px" , margin:"10px 2px  "}}><input type="checkbox" /><label className='ms-2'>ONLINE</label></div>
          </div>
          </div>
          <button onClick={()=>navigate('/orders')} className='mt-2 py-2' style={{width:"200px",backgroundColor:"black" ,color:"white"}}>Place Order</button>
          </Col>
          <Col lg={3}>
          <Image src={rk} fluid/>;
          </Col>
        </Row>
      </Container>
    </div>
  )
}

export default PlaceOrder