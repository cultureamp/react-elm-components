var React = require("react");
var createReactClass = require("create-react-class");

module.exports = createReactClass({
  initialize: function(node) {
    if (node === null) return;

    var app;

    if (this.props.src.embed) {
      // Elm 0.18
      app = this.props.src.embed(node, this.props.flags);
    } else if (this.props.src.init) {
      // Elm 0.19
      // Note that Elm 0.19 doesn't treat `node` as a container, but rather as a placeholder.
      // The Elm App will replace the provided node, rather than mount itself within the provided node.
      // This can cause react-dom runtime errors when unmounting this React component.
      // The workaround is to create an extra <div>, which React doesn't control, and allow Elm to replace that node.
      var elmPlaceholder = document.createElement("div");
      node.appendChild(elmPlaceholder);
      app = this.props.src.init({
        node: elmPlaceholder,
        flags: this.props.flags
      });
    }

    if (app && typeof this.props.ports !== "undefined") {
      this.props.ports(app.ports);
    }
  },

  shouldComponentUpdate: function(prevProps) {
    return false;
  },

  render: function() {
    return React.createElement("div", { ref: this.initialize });
  }
});
