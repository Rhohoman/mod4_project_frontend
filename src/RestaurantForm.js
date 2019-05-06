import React from 'react'

class RestaurantForm extends React.Component {
    state={
        yelp_id: "",
        name: "",
        location: ""
    }

    handleChange = (event) => {
        this.setState({
            [event.target.name]: event.target.value
        })
    }

    render(){
        return(
            <form onSubmit={(event) => {this.props.handleSubmit(event,this.state)}}>
                <lablel>Yelp Id</lablel>
                <input onChange={this.handleChange} name="yelp_id" value={this.state.yelp_id}/>
                <label>Name</label>
                <input onChange={this.handleChange} name="name" value={this.state.name}/>
                <label>Location</label>
                <input onChange={this.handleChange} name="location" value={this.state.location}/>
                <input type="submit"/>
            </form>
        )
    }
}



export default RestaurantForm