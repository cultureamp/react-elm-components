import React from "react";
import ReactDOM from "react-dom";
import EmojiPicker from "emojione-picker";
import Elm from "react-elm-components";
import Time from "./Time";

class ReactTimeExample extends React.Component {
  render() {
    return (
      <div className="time-container">
        <h2>The current time is:</h2>
        <Elm src={Time.Elm.Main} />
      </div>
    );
  }
}

ReactDOM.render(<ReactTimeExample />, document.getElementById("time"));
