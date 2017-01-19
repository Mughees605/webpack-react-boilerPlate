var React = require("react");
var WeatherMessage = require('WeatherMessage');
var WeatherForm = require('WeatherForm');

var Weather = React.createClass({
    getInitialState:function(){
    return {
        location:"Indonesia",
        temp:88
    }
    },
    handleSearch:function(location){
    this.setState({
        location:location,
        temp : 77
    })
    },
    render:function(){
       return (
           <div>
           <h3>Get Weather</h3>
           <WeatherForm onSearch = {this.handleSearch}/>
           <WeatherMessage location = {this.state.location} temp = {this.state.temp}/>
           </div>
       )
    }
})
module.exports = Weather;