import React, { Component } from 'react';
import { Picker } from 'emoji-mart';
import Elm from 'react-elm-components';
import { Chat } from './Chat.elm';

import 'emoji-mart/css/emoji-mart.css';
import './App.css';

class App extends Component {
  render() {
    const flags = 'wss://echo.websocket.org';

    let sendEmojiToChat = function() {};

    function setupPorts(ports) {
      sendEmojiToChat = ports.emoji.send;
    }

    function handleChange(emoji) {
      sendEmojiToChat(emoji.native);
    }

    return (
      <div className="App">
        <Picker onClick={handleChange}/>
        <Elm src={Chat} flags={flags} ports={setupPorts} />
      </div>
    );
  }
}

export default App;
