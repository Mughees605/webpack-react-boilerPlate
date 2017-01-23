var React = require('react');

var ErrorModal = React.createClass({
    componentDidMount:function(){ // render ho ne k baaad
       var modal = new Foundation.Reveal($("#error-modal"))
       modal.open()
    },
    render: function () {
        return (
            <div id="error-modal" className="reveal tiny text-center " data-reveal = "">
                <h4>Some title</h4>
                <p>Our Error Message!</p>
                <button className="button hollow" data-close = "">okay</button>
            </div>
        )
    }
})
module.exports = ErrorModal;