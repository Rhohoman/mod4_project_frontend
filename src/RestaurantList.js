import React from 'react'
import RestaurantCard from './RestaurantCard';
import { Link } from 'react-router-dom'

class RestaurantList extends React.Component{
    render(){
        return(
            <div>
                {this.props.restaurants.filter(restaurant => restaurant.name.includes(this.props.searchTerm)).map(restaurant => {
                    return <RestaurantCard restaurantObj={restaurant} handleClick={this.props.handleAddClick}/>
                })}
            </div>
        )
    }
}
export default RestaurantList