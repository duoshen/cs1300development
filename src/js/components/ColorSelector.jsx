var React = require('react');

var ColorSelector = React.createClass({

    getInitialState: function () {
        return {
            selectedColor: "all",
        }
    },

    handleClick: function (e) {
        this.setState({selectedColor: e.target.value.toLowerCase()}, function() {
            this.props.selectionCallback(this.state.selectedColor);
        }.bind(this));
    },

    render: function () {
        return (
            <form action="">
                {
                    this.props.colors.map(function(m) {
                        var classes;
                        if (m.toLowerCase() == this.state.selectedColor) {
                            classes = "btn btn-primary";
                        } else {
                            classes = "btn btn-default";
                        }

                        return <input type="button"
                                      className={classes}
                                      name="color"
                                      value={m}
                                      onClick={this.handleClick} />
                    }, this)
                }
            </form>
        );
    }

});

module.exports = ColorSelector