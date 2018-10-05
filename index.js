var React = require('react');
var createReactClass = require('create-react-class');

module.exports = createReactClass({
	initialize: function(node) {
		if (node === null) return;
		var app = this.props.src.init({node: node, flags: this.props.flags});

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
