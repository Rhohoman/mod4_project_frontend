import React from 'react'

const RestaurantCard = (props) => {
    //if id does not exist then null, !

    // console.log(props)
    if(props.restaurantObj === undefined){
        return null
    } else {
        return(
            <div onClick={() => props.handleClick(props.restaurantObj)}>
                <h2>{props.restaurantObj.name}</h2>
                <p>other details put here</p>
            </div>
        )
    }
}

export default RestaurantCard