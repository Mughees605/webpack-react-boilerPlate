var React = require('react');
var {Link, IndexLink} = require('react-router');

var Nav = React.createClass({
    render: function () {
        return (
            <div className="top-bar">
                <div className="top-bar-left">

                    <ul className="menu">
                        <li><IndexLink to="/" activeClassName="active" activeStyle={{ fontWeight: 'bold' }}>Get Weather</IndexLink></li>
                        <li><Link to="/About" activeClassName="active" activeStyle={{ fontWeight: 'bold' }}>About Page</Link></li>
                        <li><Link to="/Example" activeClassName="active" activeStyle={{ fontWeight: 'bold' }}>Example Page</Link></li>
                    </ul>
                </div>


                <div className="top-bar-right">
                    <form onSubmit={this.onSearch}>
                        <ul className="menu">
                            <li>
                                <input type="search" placeholder="Search Weather" />
                            </li>
                            <li>
                                <input type="submit" className="button" value="Get Weather" />
                            </li>
                        </ul>
                    </form>
                    
                </div>
            </div>
        )
    }
})
module.exports = Nav;

// <div>
//     <h3>Navigaiton</h3>
//     <IndexLink to="/" activeClassName="active" activeStyle={{ fontWeight: 'bold' }}>Get Weather</IndexLink>
//     <Link to="/About" activeClassName="active" activeStyle={{ fontWeight: 'bold' }}>About Page</Link>
//     <Link to="/Example" activeClassName="active" activeStyle={{ fontWeight: 'bold' }}>Example Page</Link>
// </div>