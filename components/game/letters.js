import React from "react";

const ALL_APHABETS = [..."abcdefghijklmnopqrstuvwxyz"];
//pressed what happens and if letter already pressed -> onSelect is pressed key
export default function Letters({ playedLetters, onSelect }) {
  return (
    <div>
      {ALL_APHABETS.map((alphabet) => (
        //displaying selected key
        <button
          onClick={() => onSelect(alphabet)}
          //disabling after select
          disabled={playedLetters.has(alphabet)}
        >
          {alphabet}
        </button>
      ))}
    </div>
  );
}
