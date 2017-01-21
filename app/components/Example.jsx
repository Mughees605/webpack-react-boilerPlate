var React = require('react');
var {Link} = require("react-router");

var Example = React.createClass({
    render: function () {
        return (<div>
            <h1 className="text-center">Examples page</h1>
            <p>Here are few examples</p>
            <ol>
                <li>
                <Link to = "/?location=karachi">Karachi, PK</Link>
                </li>

                <li>
                <Link to = "/?location=london">London, UK</Link>
                </li>
            </ol>
        </div>)
    }
})
module.exports = Example;