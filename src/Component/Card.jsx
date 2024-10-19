import React from 'react'
import Image from 'react-bootstrap/Image';

const Card = ({pic}) => {
  return (
    <div>
      <div className="home_card_item">
      <Image src={pic} fluid className='card_image'/>;
      </div>
    </div>
  )
}

export default Card
