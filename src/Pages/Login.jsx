import React, { useState } from 'react'

const Login = () => {
    const [currentState,setCurrentState] = useState("login")

    const handler = async (event)=>{
    event.preventDefault()
  }
  return (
    <div>
         <div className='login_container'>
      <form onSubmit={handler}>
       <div className="login_bg">
       <div>
          <h2 className=' text-center m-4'>{currentState}</h2>
        </div>
        <div className='d-flex flex-column align-items-center'>
            <div className='m-2'>
                <button className='login_parant_btn'>
                <button className='login_child_btn' onClick={()=> setCurrentState('login')}>Login</button>
                <button className='login_child_btn' onClick={()=> setCurrentState('Signup')}>SignUP</button>
                </button>
            </div>
        
          {currentState === 'login' ? '' : <input type="text" placeholder='Name' />}
          
         
          <input type="Email" placeholder='Email' />
          <input type="text" placeholder='Password' />
          <div className='login_info'>
          {
            currentState === 'login' ?<p className='cursor-pointer'>Forgot Password?</p> : ""
          }
          </div>
          {/* <div className='login_info'>
          {
            currentState === 'login' ?<p onClick={()=> setCurrentState('Signup')} className='cursor-pointer'>Create New Account</p> : <p onClick={()=> setCurrentState('login')}>Go to Login</p>
          }
          </div> */}

        </div>
        
        <div>
          <button className='login_bottom_btn'>
          {
            currentState ==="login" ? <button className='login_child_btn2'>Login</button>:  <button className='login_child_btn2' onClick={()=> setCurrentState('login')}>SignUP</button>
          }
          </button>
        </div>
       </div>
      </form>
    </div>
    </div>
  )
}

export default Login