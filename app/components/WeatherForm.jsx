var React = require('react');

var WeatherForm = React.createClass({
    onFormSubmit:function(){
    var location = this.refs.loc.value;
    this.props.onSearch(location);
    },
    render: function () {
        return (
            <form onSubmit = {this.onFormSubmit}>
                <input type="text" ref = "loc"/>
                <button>Click Me</button>
            </form>
        )
    }
});
module.exports = WeatherForm
