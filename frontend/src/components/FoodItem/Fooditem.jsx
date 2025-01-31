import React from 'react'
import './FoodItem.css'
import {assets} from '../../assets/assets'

import { useContext } from 'react'
import { StoreContext } from '../../context/StoreContext'


const Fooditem = ({id,name,price,description,image}) => {

  const {addToCart,removeFromCart,cartItems}=useContext(StoreContext);
 
  return (
    <div className='food-item'>
      <div className="food-item-img-container">
        <img className='food-item-image' src={image} alt=''/>
        {
        !cartItems[id]?
        <img className='add' onClick={()=>addToCart(id)} src={assets.add_icon_white} alt=''/>:
        <div className="food-item-counter">
          <img className='decrease' onClick={()=>removeFromCart(id)} src={assets.remove_icon_red} alt=''/>
          <p>{cartItems[id]}</p>
          <img className='increase' onClick={()=>addToCart(id)} src={assets.add_icon_green} alt=''/>
        </div>
        }
      </div>
      <div className="food-item-info">
        <div className="food-item-name-rating">
          <p>{name}</p>
          <img src={assets.rating_starts} alt=''/>
        </div>
        <p className='food-item-desc'>{description}</p>
        <p className="food-item-price">${price}</p>
      </div>
    </div>
  )
}

export default Fooditem