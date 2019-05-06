import React from 'react'
import RestaurantList from './RestaurantList'
import WishList from './WishList';

const Home = () => {
    return(
        <div>
            <h1 class="header">This is the Restaurant Dream App</h1>
            <RestaurantList/>
            <WishList/>
        </div>

    )
}

export default Home