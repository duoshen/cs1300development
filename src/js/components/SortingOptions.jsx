var React = require('react');

var SortingOptions = React.createClass({

    // getInitialState() {
    //     return {
    //         sortingField: "Price",
    //         sortInOrder: true
    //     }
    // },

    getInitialState() {
        return {
          sortingOrder: "1"
        }
    },

    // updateSortingField: function (e) {
    //     console.log("update sortingField", e);
    //     this.setState({sortingField: e.target.value}, function () {
    //         console.log()
    //         this.props.sortingCallback(this.state.sortingField, this.state.sortInOrder);
    //     }.bind(this));
    // },

    // updateSortingOrder: function (e) {
    //     console.log("update sortingorde", e);

    //     this.setState({sortInOrder: !(e.target.checked)}, function () {
    //         this.props.sortingCallback(this.state.sortingField, this.state.sortInOrder);
    //     }.bind(this));
    // },

  //   updateSorting: function(e) {
  //     this.setState({sortingField: e.target.value, sortInOrder: !(e.target.checked)}, function () {
  //           console.log("updateSorting",this.state.sortingField);
  //             this.props.sortingCallback(this.state.sortingField);
  // //            this.props.sortingCallback(this.target.value);
  //       }.bind(this));
  //   },

    updateSorting: function(e) {
      console.log("update Sorting Order", e.target.value);
      this.setState({sortingOrder: e.target.value}, function (){
          this.props.sortingCallback(this.state.sortingOrder);
      }.bind(this));
    },

    render: function () {
        return (
/*            <form>
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
            </form>*/
            <select onChange={this.updateSorting}>
              <option value="1">Price: Low to High</option>
              <option value="2">Price: High to Low</option>
              <option value="3">Year: Earliest to Latest</option>
              <option value="4">Year: Latest to Earliest</option>
            </select>
        );
    }

});

module.exports = SortingOptions