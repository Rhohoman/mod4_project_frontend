import React from 'react'

    const RestaurantSearch = (props) => {
        // console.log(props)
        return (
            <form className="searchbar">
                <input type="text" value={props.searchTerm} onChange={props.handleSearchTerm} placeholder="Search"/>
            </form>
        )
    }

export default RestaurantSearch