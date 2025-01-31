import React from 'react'
import './FoodDisplay.css'
import { StoreContext } from '../../context/StoreContext'
import { useContext } from 'react'
import Fooditem from '../FoodItem/Fooditem'
const FoodDisplay = ({category}) => {
  const {food_list}= useContext(StoreContext);
  return (
    <div className="food-display" id='food-display'>
        <h2>Top dishes near you</h2>
        <div className="food-display-list">
            {food_list.map((item,index)=>{                         //if categ==all display all, else display category
                if(category==="All" || category===item.category){  //just to filter food like desserts, rolls etc
                  return <Fooditem key={index} id ={item._id} name={item.name} 
                 description={item.description} price={item.price} image={item.image}/>
                }
            })}
        </div>


    </div>
  )
}

export default FoodDisplay