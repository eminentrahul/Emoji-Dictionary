import React from "react";
import Entry from "./Entry";
import EmojiData from "../emojipedia.js";

function CreateEntry(props) {
  return (
    <Entry
      key={props.id}
      emoji={props.emoji}
      name={props.name}
      meaning={props.meaning}
    />
  );
}

function App() {
  return (
    <div>
      <h1>
        <span>Emoji-Dictionary</span>
      </h1>

      <dl className="dictionary">{EmojiData.map(CreateEntry)}</dl>
    </div>
  );
}

export default App;
