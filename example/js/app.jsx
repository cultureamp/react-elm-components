var EmojiPicker = require('emojione-picker');
var Elm = require('react-elm');
var Chat = require('../dist/elm-chat.js');


emoji: { send: function() {} }

function render()
{
	var flags = 'wss://echo.websocket.org';

	return (
		<div class="chat">
			<Elm src={Chat} flags={flags} ports={this.setupPorts} />
			<EmojiPicker onChange={this.sendEmojiToChat} />
		</div>
	);
}

function setupPorts(ports)
{
	this.emoji = ports.emoji;
}

function sendEmojiToChat(emoji)
{
	this.emoji.send(emoji);
}