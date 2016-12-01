var React = require('react');

var ColorComponent = React.createClass({
  propTypes: {
  	color: React.PropTypes.string
  },
  getDefaultProps() {
  	return {
  		color: "red",
      height: 200,
      width: 200
  	};
  },
  render: function() {
  	var style = {
  		backgroundColor: this.props.color,
  		height: this.props.height,
  		width: this.props.width,
  	};

    return (
    	// <div style={style} />
      <div style={style}>Hello World</div>
    );

  }
});

module.exports = ColorComponent