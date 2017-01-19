var React = require('react');
var {Link,IndexLink} = require('react-router');

var Nav = React.createClass({
    render:function(){
        return (
            <div>
            <h3>Navigaiton</h3>
            <IndexLink to = "/" activeClassName = "active" activeStyle = {{fontWeight:'bold'}}>Get Weather</IndexLink>
            <Link to = "/About" activeClassName = "active" activeStyle = {{fontWeight:'bold'}}>About Page</Link>
            <Link to = "/Example" activeClassName = "active" activeStyle = {{fontWeight:'bold'}}>Example Page</Link>
            </div>
        )
    }
})
module.exports = Nav;