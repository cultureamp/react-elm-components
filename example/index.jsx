var React = require('react');
var ReactDOM = require('react-dom');
var EmojiPicker = require('emojione-picker');
var Elm = require('react-elm');
var { Chat } = require('./Chat');

var EmojiChatRoom = React.createClass({

  render: function() {
    var flags = 'wss://echo.websocket.org';

    var sendEmojiToChat = function(emoji) {};

    var setupPorts = function(ports) {
      sendEmojiToChat = ports.emoji.send;
    };

    function handleChange(emoji) {
      var str = String.fromCodePoint(parseInt("0x" + emoji.unicode));

      sendEmojiToChat(str);
    }

    return (
      <div className="emoji-chat">
        <Elm src={Chat} flags={flags} ports={setupPorts} />
        <EmojiPicker onChange={handleChange} />
      </div>
    );
  }
});

ReactDOM.render(
  <EmojiChatRoom />,
  document.getElementById('chat')
);
