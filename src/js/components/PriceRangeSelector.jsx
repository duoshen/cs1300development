var React = require('react');

var PriceRangeSelector = React.createClass({

    getDefaultProps: function () {
        return {
            ranges: {
                range_0_1999: { text: "$0 ~ $19999", min: 0, max: 19999 },
                range_20000_49999: { text: "$20000 ~ $49999", min: 20000, max: 49999},
                range_50000_99999: { text: "$50000 ~ $99999", min: 50000, max: 99999},
                range_100000_plus: { text: "over $100000", min: 100000, max: Number.MAX_VALUE},
                range_all: { text: "All", min: 0, max: Number.MAX_VALUE },
            },
            selectionCallback: function () {}
        }
    },

    getInitialState: function () {
        return {
            selectedRange: "All"
        }
    },

    selectRange: function (e) {
        this.setState({selectedRange: e.target.value}, function () {
            for (var k in this.props.ranges) {
                if (this.props.ranges[k].text == this.state.selectedRange) {
                    this.props.selectionCallback(this.props.ranges[k]);
                    break;
                }
            }
        }.bind(this));
    },

    render: function () {

        console.log(this.props.ranges);
        // this.props.ranges.forEach(function (a, b, c) {
        //     console.log(a, b, c);
        // }.bind(this));

        var buttons = [];
        for (var k in this.props.ranges) {
            buttons.push(this.props.ranges[k]);
        }

        return (
            <div className="price-range-selector">
            <span className="selector-header">Price Range:</span>
            <form action="">
                {
                    buttons.map(function (r) {
                        return <div><input type="text"
                                      className={this.state.selectedRange == r.text ? "pointer selector price-range-selected" : "pointer selector price-range-default"}
                                      value={r.text}
                                      onClick={this.selectRange}/></div>
                    }.bind(this))
                }
            </form>
            </div>
        );
    }
});

module.exports = PriceRangeSelector


