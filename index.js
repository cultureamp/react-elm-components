var React = require('react');

module.exports = React.createClass({
	initialize: function(node) {
		var app = this.props.src.embed(node, this.props.flags);

		if (typeof this.props.ports !== 'undefined') {
			this.props.ports(app.ports);
		}
	},

	shouldComponentUpdate: function(prevProps) {
		return false;
	},

	render: function () {
		return React.createElement('div', { ref: this.initialize });
	}
});
