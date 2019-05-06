import React from 'react'
import RestaurantCard from './RestaurantCard';
import { Link } from 'react-router-dom'

class RestaurantList extends React.Component{
    render(){
        return(
            <div>
                <h2>RestaurantList</h2>
                <ul>
                    <RestaurantCard/>
                </ul>
            </div>
        )
    }
}
export default RestaurantList