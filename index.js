var React = require('react');

module.exports = React.createClass({

	initialize: function(node)
	{
		var app = this.props.src.embed(node, this.props.flags);

		if (typeof this.props.ports !== 'undefined')
		{
			this.props.ports(app.ports);
		}
	},

	shouldComponentUpdate: function(prevProps)
	{
		if (prevProps.src !== this.props.src)
		{
			return true;
		}

		if (typeof this.props.flags !== 'undefined' && prevProps.flags !== this.props.flags)
		{
			console.error(
				'You changed the `flags` property of an Elm component. '
				+ 'Flags are only useful on initialization, so it was ignored.'
			);
			return false;
		}

		if (typeof this.props.ports !== 'undefined' && prevProps.ports !== this.props.ports)
		{
			console.error(
				'You changed the `ports` property of an Elm component. '
				+ 'You can only setup ports at initialization, so it was ignored.'
			);
			return false;
		}
	},

	render: function ()
	{
		return <div ref={this.initialize} />
	}

});
