var React = require('react');

var SortingOptions = React.createClass({

    getInitialState() {
        return {
            sortingField: "Manufacturer",
            sortInOrder: true
        }
    },

    updateSortingField: function (e) {
        this.setState({sortingField: e.target.value}, function () {
            this.props.sortingCallback(this.state.sortingField, this.state.sortInOrder);
        }.bind(this));
    },

    updateSortingOrder: function (e) {
        this.setState({sortInOrder: !(e.target.checked)}, function () {
            this.props.sortingCallback(this.state.sortingField, this.state.sortInOrder);
        }.bind(this));
    },

    render: function () {
        return (
            <form>
                <input type="button"
                       className={this.state.sortingField == "Manufacturer" ? "btn btn-primary" : "btn btn-default"}
                       value="Manufacturer"
                       onClick={this.updateSortingField}/>
                <input type="button"
                       className={this.state.sortingField == "Year" ? "btn btn-primary" : "btn btn-default"}
                       value="Year"
                       onClick={this.updateSortingField}/>
                <input type="button"
                       className={this.state.sortingField == "Price" ? "btn btn-primary" : "btn btn-default"}
                       value="Price"
                       onClick={this.updateSortingField}/>
                <label><input type="checkbox" checked={!this.state.sortInOrder} value="Sort in Reverse Order" onChange={this.updateSortingOrder} />Reverse Sort</label>
            </form>
        );
    }

});

module.exports = SortingOptions