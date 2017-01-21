var React = require("react");
var WeatherMessage = require('WeatherMessage');
var WeatherForm = require('WeatherForm');
var openWeatherMap = require('openWeatherMap');

var Weather = React.createClass({
    getInitialState:function(){
    return {
        location:"Indonesia",
        temp:88
    }
    },
    handleSearch:function(location){
        var self = this;
        openWeatherMap.getTemp(location).then(function(temp){
            self.setState({
                location:location,
                temp:temp
            })
        },
        
        function(err){
            alert(err);
        });
    // this.setState({
    //     location:location,
    //     temp : 77
    // })
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