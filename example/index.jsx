var React = require('react');
var ReactDOM = require('react-dom');
var EmojiPicker = require('emojione-picker');
var Elm = require('react-elm');
var Chat = require('./Chat');

var EmojiChatRoom = React.createClass({

  render: function() {
    var flags = 'wss://echo.websocket.org';

    return (
      <div className="chat">
      <Elm src={Chat} flags={flags} ports={this.setupPorts} />
        <EmojiPicker onChange={this.sendEmojiToChat} />
      </div>
    );
  },

  sendEmojiToChat: function(emoji) {},

  setupPorts: function(ports) {
    this.sendEmojiToChat = ports.emoji.send;
  },

});

ReactDOM.render(
  <EmojiChatRoom />,
  document.getElementById('chat')
);
