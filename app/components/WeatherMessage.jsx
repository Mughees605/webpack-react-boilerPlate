var React = require('react');

var WeatherMessage = React.createClass({
    render:function(){
        return (
            <div>
            <h3>Its {this.props.temp} in {this.props.location}</h3>
            </div>
        )
    }
})
module.exports = WeatherMessage