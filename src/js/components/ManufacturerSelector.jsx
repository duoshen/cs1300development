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
            <form action="">
                {
                    this.props.manufacturers.map(function(m) {
                        var classes;
                        if (m.toLowerCase() == this.state.selectedManufacture) {
                            classes = "btn btn-primary";
                        } else {
                            classes = "btn btn-default";
                        }

                        return <input type="button"
                                      className={classes}
                                      name="manufacturer"
                                      value={m}
                                      onClick={this.handleClick} />
                    }.bind(this))
                }
            </form>
        );
    }

});

module.exports = ManufacturerSelector