import React from 'react'
import RestaurantList from './RestaurantList'
import RestaurantSearch from './RestaurantSearch'
import RestaurantForm from './RestaurantForm'

class RestaurantContainer extends React.Component{

    state = {
        searchTerm: ""
    }

    handleSearchTerm = (event) => {
        // console.log(event.target.value)
        this.setState({
            searchTerm: event.target.value
        })
    }

    render(){
        // console.log(this.props.restaurants)
        return(
            <div className="restaurantlist">
                <h1>All Restaurants</h1>
                <RestaurantForm handleSubmit={this.props.handleSubmit}/>
                <RestaurantSearch searchTerm={this.state.searchTerm} handleSearchTerm={this.handleSearchTerm}/>
                <RestaurantList searchTerm={this.state.searchTerm} restaurants={this.props.restaurants} handleAddClick={this.props.handleAddClick}/>
            </div>
        )
    }
}

export default RestaurantContainer