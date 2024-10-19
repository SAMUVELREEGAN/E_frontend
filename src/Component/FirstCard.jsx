import React from 'react'
import {card_1} from '../Data/Card'
import Card from '../Component/Card'

const FirstCard = () => {
  return (
    <div>
       <div className="home_card">
       {
          card_1.map((e,index)=>(
            <Card pic={e.pic} key={index}/>
          ))  
        }
       </div>
    </div>
  )
}

export default FirstCard