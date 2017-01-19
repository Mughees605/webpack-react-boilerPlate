var React = require("react");
var Nav = require('Nav')

var Main = React.createClass({
    render: function () {
        return (
            <div>
                <h2>Main component</h2>
                <Nav />
                {this.props.children}
            </div>
        )
    }
})
module.exports = Main;