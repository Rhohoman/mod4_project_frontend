import React from 'react'
import RestaurantList from './RestaurantList'
import {Route, Switch, Link} from 'react-router-dom'


class RestaurantContainer extends React.Component{
    render(){
        return(
            <div>
                <h1>This is the All Restaurants</h1>
                <RestaurantList />
            </div>
        )
    }
}

export default RestaurantContainer