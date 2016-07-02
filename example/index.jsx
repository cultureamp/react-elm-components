const React = require('react');
const ReactDOM = require('react-dom');
const EmojiPicker = require('emojione-picker');
const Elm = require('react-elm');
const { Chat } = require('./Chat');

const EmojiChatRoom = React.createClass({

  render: function() {
    const flags = 'wss://echo.websocket.org';

    let sendEmojiToChat = function() {};

    function setupPorts(ports) {
      sendEmojiToChat = ports.emoji.send;
    };

    function handleChange(emoji) {
      const str = String.fromCodePoint(parseInt("0x" + emoji.unicode));

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
