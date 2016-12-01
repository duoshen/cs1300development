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
            <div className="color-selector">
            <span className="selector-header">Colors:</span>
            <form action="">
                {
                    this.props.colors.map(function(m) {
                        var classes;
                        if (m.toLowerCase() == this.state.selectedColor) {
                            classes = "pointer selector color-selected";
                        } else {
                            classes = "pointer selector color-default";
                        }

                        return <div><input type="text"
                                      className={classes}
                                      name="color"
                                      value={m}
                                      onClick={this.handleClick} /></div>
                    }, this)
                }
            </form>
            </div>
        );
    }

});

module.exports = ColorSelector