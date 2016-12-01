var React = require('react');

var ItemRow = React.createClass({

    render: function () {

        return (
            <div>
                <img src={this.props.prefix + this.props.item.img} height="100" width="100" />
                Make : {this.props.item.manufacturer}, Model : {this.props.item.model}<br/>
                Year : {this.props.item.year}, Price :{this.props.item.price}
            </div>
            );
    }

});


module.exports = ItemRow