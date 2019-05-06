import React from 'react'
import RestaurantCard from './RestaurantCard';

const WishList = (props) =>{
    return (
        <div className="wishlist"> 
            <h1>Wish list</h1>
            {props.wishRestaurants.map(wishedRestaurant => {
                return <RestaurantCard restaurantObj={wishedRestaurant} handleClick={props.handleRemove}/>
            })}
        </div>
    )
}
export default WishList