import React from "react";

export default function Word({ actualword, playedLetters }) {
  return (
    <div>
      {[...actualword].map((letter) => (
        <>
          {playedLetters.has(letter) ? (
            <span>{letter}</span>
          ) : (
            <span>&nbsp;_&nbsp;</span>
          )}
        </>
      ))}
    </div>
  );
}
