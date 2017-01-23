var React = require("react");
var WeatherMessage = require('WeatherMessage');
var WeatherForm = require('WeatherForm');
var openWeatherMap = require('openWeatherMap');
var ErrorModal = require("ErrorModal");

var Weather = React.createClass({
    getInitialState:function(){
    return {
        isLoading:false
    }

    },
    handleSearch:function(location){
        var self = this;

         self.setState({
            isLoading:true,
            errorMessage:undefined
        })
        openWeatherMap.getTemp(location).then(function(temp){
            self.setState({
                location:location,
                temp:temp,
                isLoading:false
            })
        },
        
        function(e){
            self.setState({
                isLoading:false,
                errorMessage:e.message

                })
        });
    // this.setState({
    //     location:location,
    //     temp : 77
    // })
     },
    render:function(){
        var {isLoading,temp,location,errorMessage} = this.state;

        function renderError(){
            if(typeof errorMessage == "string"){
                return (
                    <ErrorModal/>
                )
            }
        }
        function renderMessage(){
            if(isLoading){
                return <h3>Fetching Weather....</h3>
            }
            else if(temp && location){
                return <WeatherMessage location = {location} temp = {temp}/>
            }
        }
       return (
           <div>
           <h1 className = "text-center">Get Weather</h1>
           <WeatherForm onSearch = {this.handleSearch}/>
           {renderMessage()}
           {renderError()}
           </div>
       )
    }
})
module.exports = Weather;