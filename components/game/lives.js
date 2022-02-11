import React from "react";

export default function Lives({ livesleft }) {
  return (
    // `hangman hangman-${6 - livesLeft}`
    <div className="hangman-container">
      <div className="pole"></div>
      <div className={`hangman hangman-${6 - livesleft}`}>
        <div className="hangman__element"></div>
        <div className="hangman__element"></div>
        <div className="hangman__element"></div>
        <div className="hangman__element"></div>
        <div className="hangman__element"></div>
        <div className="hangman__element"></div>
      </div>
      <div>Lives: {livesleft}</div>
    </div>
  );
}
