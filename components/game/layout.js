import React from "react";
import Lives from "./lives";
import Word from "./actualWord";
import Letters from "./letters";
import Start from "./start";

export default function Layout({
  isRunning,
  isWon,
  lives,
  actualWord,
  played_set,
  guess,
  start,
}) {
  return (
    <>
      <div className="game-wrapper">
        {isRunning && (
          <>
            <div className="left-pane">
              <Lives livesleft={lives} />
            </div>
            <div className="right-pane">
              <Word actualWord={actualWord} playedLetters={played_set} />
              <Letters playedLetters={played_set} onSelect={guess} />
            </div>
          </>
        )}
        <Start onStart={start} isRunning={isRunning} />
        {/* {isWon && (
          <>
            <>You Won!!</>
          </>
        )} */}
      </div>
    </>
  );
}
