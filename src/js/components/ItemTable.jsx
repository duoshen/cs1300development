var React = require('react');
var ItemRow = require('./ItemRow.jsx');

var ItemTable = React.createClass({

    propTyes: {
        items: React.PropTypes.array
    },

    render: function () {
        var rows = [];

        var not_found = [];

        not_found.push(<img className = "not-found" src = "./img/result_not_found.jpg" />);

        for (var i = 0; i < this.props.items.length; i++) {
            rows.push(
                <ItemRow
                    key={i}
                    item={this.props.items[i]}
                    prefix={this.props.filePathPrefix}
                    />);
        }

        return (
            <div className = "row">
                {
                    rows.length == 0 ? (
//                        "No results found with the selected filters......"
                        not_found
                    ) : (
                        rows
                    )
                }
            </div>
        );
    }
});


module.exports = ItemTable