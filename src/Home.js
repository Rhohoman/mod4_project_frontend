import React from 'react'
import RestaurantContainer from './RestaurantContainer'
import WishList from './WishList';

class Home extends React.Component{

    state = {
        restaurants: [],
        wishRestaurants: []
    }

    componentDidMount(){
        fetch('http://localhost:3002/restaurants')
        .then(response => response.json())
        .then(restaurantsJSON => {
            this.setState({
                restaurants: restaurantsJSON
            })
        })
    }

    handleAddClick = (restaurantObj) => {
        //if clicked add to wish
        let tempWishArray = this.state.wishRestaurants
        tempWishArray = [...tempWishArray,restaurantObj]

        this.setState({
            wishRestaurants: tempWishArray
        })
    }

    handleRemove = (restaurantObj) => {
        let tempWishArray = this.state.wishRestaurants
        tempWishArray = tempWishArray.filter(restaurant => restaurant !== restaurantObj)

        this.setState({
            wishRestaurants: tempWishArray
        })
    }

    handleSubmit = (event, restaurant) => {
        event.preventDefault()
        // console.log(event)
        // console.log("restaurant",restaurant)
        if (!this.state.restaurants.includes(restaurant)){
            let addedRestaurantArray = [restaurant, ...this.state.restaurants]
            this.setState({
                restaurants: addedRestaurantArray
            })
        }
    }
    
    render(){
        // console.log(this.state.wishRestaurants)
        return(
            <div className="container">
                <RestaurantContainer restaurants={this.state.restaurants} handleAddClick={this.handleAddClick} handleSubmit={this.handleSubmit}/>
                <WishList wishRestaurants={this.state.wishRestaurants} handleRemove={this.handleRemove}/>
                {/* <WishList wishlist={this.state.wishlist}/> */}
            </div>
    
        )
    }
}

export default Home