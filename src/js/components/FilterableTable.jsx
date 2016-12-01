var React = require('react');
var ItemTable = require('./ItemTable.jsx');
var ManufacturerSelector = require('./ManufacturerSelector.jsx');
var ColorSelector = require('./ColorSelector.jsx');
var PriceRangeSelector = require('./PriceRangeSelector.jsx');
var SortingOptions = require('./SortingOptions.jsx');

const ALL = "All";

var FilterableTable = React.createClass({

    propTypes: {
        filterText: React.PropTypes.string,
        items: React.PropTypes.array,
        itemsLength: React.PropTypes.number
    },

    getInitialState: function () {
        return {
            filterText: '',
            selectedManufacture: ALL.toLowerCase(),
            selectedColor: ALL.toLowerCase(),
            sortingField: "Price",
            sortInOrder: true,
            minPrice: 0,
            maxPrice: Number.MAX_VALUE
        };
    },

    getDefaultProps: function () {
        return {
            shouldFilterByText: false,
            items: [],
            itemsLength: 0,
            selectedManufacture: ALL.toLowerCase(),
            selectedColor: ALL.toLowerCase(),
        };
    },

    updateManufacturerSelection: function (selection) {
        this.props.selectedManufacture = selection;
        this.setState({selectedManufacture: selection});
    },

    updateColorSelection: function (selection) {
        console.log("update color selection to " + selection);
        this.setState({selectedColor: selection});
    },

    updatePriceRangeSelection: function (selection) {
        this.setState({
                minPrice: selection.min,
                maxPrice: selection.max
        });
    },

    updateSorting: function (order) {
        console.log("case is ", order);
        // this.setState({
        //     sortingField: field,
        //     sortInOrder: inOrder
        // });
        switch(order){
            case "1": 
                this.setState({
                    sortingField: "Price",
                    sortInOrder: true
                });
                break;
            case "2": 
                this.setState({
                    sortingField: "Price",
                    sortInOrder: false
                });
                break;
            case "3": 
                this.setState({
                    sortingField: "Year",
                    sortInOrder: true
                });
                break;
            case "4": 
                this.setState({
                    sortingField: "Year",
                    sortInOrder: false
                });
                break;
            default:
               this.setState({
                    sortingField: "Price",
                    sortInOrder: true
                });
        }
    },

    filterItems: function (items) {
        return items.filter(function (item) {
            if ((this.state.selectedManufacture != ALL.toLowerCase()) && (this.state.selectedManufacture != item.manufacturer.toLowerCase())) {
                return false;
            }

            if ((this.state.selectedColor != ALL.toLowerCase()) && (this.state.selectedColor != item.color.toLowerCase())) {
                return false;
            }

            if ((item.price < this.state.minPrice) || (item.price > this.state.maxPrice)) {
                return false;
            }

            return true;
        }.bind(this))
    },

    sortItems: function (items) {
        return items.sort(function(a, b) {
            var aField, bField;

            switch(this.state.sortingField) {
                case "Manufacturer":
                    aField = a.manufacturer;
                    bField = b.manufacturer;
                    break;
                case "Year":
                    aField = a.year;
                    bField = b.year;
                    break;
                case "Price":
                    aField = a.price;
                    bField = b.price;
                    break;
                default:
                    aField = a.manufacturer;
                    bField = b.manufacturer;

            }

            var result = 0;

            if (aField < bField) {
                result = -1;
            }

            if (aField > bField) {
                result = 1;
            }

            if (!this.state.sortInOrder) {
                result = 0 - result;
            }

            return result;
        }.bind(this))
    },

    render: function() {

        var manufacturers = this.props.items.map(function(i) {
                                return i.manufacturer;
                            }).filter(function(item, pos, self) {
                                return self.indexOf(item) == pos;
                            });
        manufacturers.push(ALL);

        var colors = this.props.items.map(function(i) {
                                return i.color;
                            }).filter(function(item, pos, self) {
                                return self.indexOf(item) == pos;
                            });
        colors.push(ALL);

        var displayItems = this.sortItems(this.filterItems(this.props.items));

        return (
            <div className = "filterable-table row" >
                <div className = "col-md-2">
                    <ManufacturerSelector manufacturers={manufacturers} selected={this.props.selectedManufacture} selectionCallback={this.updateManufacturerSelection} />
                    <ColorSelector colors={colors} selected={this.props.selectedColor} selectionCallback={this.updateColorSelection} />
                    <PriceRangeSelector selectionCallback={this.updatePriceRangeSelection}/>
                </div>
                <div className = "col-md-10">
                    Sort by : <SortingOptions sortingCallback={this.updateSorting}/><br/>
                    <ItemTable items={displayItems} filePathPrefix={this.props.filePathPrefix} />
                </div>
            </div>
        );
    }
});


module.exports = FilterableTable