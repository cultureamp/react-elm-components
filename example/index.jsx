import React from 'react'
import ReactDOM from 'react-dom'
import EmojiPicker from 'emojione-picker'
import Elm from 'react-elm-components'
import { Chat } from './Chat'

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
        <EmojiPicker onChange={handleChange} />
        <Elm src={Chat} flags={flags} ports={setupPorts} />
      </div>
    );
  }
});

ReactDOM.render(
  <EmojiChatRoom />,
  document.getElementById('chat')
);
