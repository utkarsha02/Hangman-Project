import React, { useState } from "react";
import Layout from "./layout";

const MAX_LIVES = 6;
export default function Game() {
  //set lives=6

  // const [lives, setLives] = useState(6);
  //the word we are filling
  const [actualWord, setActualWord] = useState("");
  //words which have been played or used
  const [playedLetters, setPlayedLetters] = useState([]);
  //set of played and actual letters

  const word_set = new Set([...actualWord]);
  const played_set = new Set([...playedLetters]);
  //wrong letters are letters that are not actualword letter
  const wrongLetters = playedLetters.filter((letter) => {
    return !word_set.has(letter);
  });
  const lives = MAX_LIVES - wrongLetters.length;

  //Wins if playedset doesnt match even one letter of actualword.
  //curr is ptr to actualword and we took help of reduce
  //initial val of acc or startval = true
  const isWon =
    lives &&
    [...word_set].reduce((acc, curr) => {
      if (!played_set.has(curr)) return false;
      return acc;
    }, true);

  //find out if game is actually running we use isRunning
  //game runs if we still have lives left and actualword is not guessed
  // const isRunning = actualWord && lives > 0 && !isWon;
  const isRunning = actualWord;
  const guess = (letter) => {
    setPlayedLetters((prev) => [...prev, letter]);
  };

  //for start lives and actualwords need to be set
  const start = () => {
    setActualWord("house");
    setPlayedLetters([]);
  };

  return (
    <>
      <Layout
        lives={lives}
        actualWord={actualWord}
        played_set={played_set}
        guess={guess}
        start={start}
        isWon={isWon}
        isRunning={isRunning}
      />
    </>
  );
}
