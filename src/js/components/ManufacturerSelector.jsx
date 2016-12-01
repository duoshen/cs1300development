var React = require('react');

var ManufacturerSelector = React.createClass({

   getInitialState: function () {
        return {
            selectedManufacture: "all",
        }
    },

    handleClick: function (e) {
        this.setState({selectedManufacture: e.target.value.toLowerCase()}, function() {
            this.props.selectionCallback(this.state.selectedManufacture);
        }.bind(this));
    },

    render: function () {
        return (
            <div className="manufacturer-selector">
            <span className="selector-header">Manufacturer:</span>
            <form action="">
                {
                    this.props.manufacturers.map(function(m) {
                        var classes;
                        if (m.toLowerCase() == this.state.selectedManufacture) {
                            classes = "pointer selector manufacturer-selected";
                        } else {
                            classes = "pointer selector manufacturer-default";
                        }

                        return <div><input type="text"
                                      className={classes}
                                      name="manufacturer"
                                      value={m}
                                      onClick={this.handleClick} /></div>
                    }.bind(this))
                }
            </form>
            </div>
        );
    }

});

module.exports = ManufacturerSelector