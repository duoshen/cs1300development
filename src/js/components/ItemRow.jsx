var React = require('react');

var ItemRow = React.createClass({

    render: function () {

        return (
            <div className = "col-md-6">
                <img className = "car-thumbnail" src={this.props.prefix + this.props.item.img}/> <br/>
                <div>
	                <p className = "item-row-manufacturer">{this.props.item.manufacturer}  {this.props.item.model}  {this.props.item.year} </p>
	                <p className = "item-price">$ {this.props.item.price}</p>
                </div>
            </div>
            );
    }

});


module.exports = ItemRow