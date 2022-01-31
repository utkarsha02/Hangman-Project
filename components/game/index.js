import React, { useState } from "react";

const MAX_LIVES = 6;
export default function Game() {
  //set lives=6
  const [lives, setLives] = useState(6);
  //the word we are filling
  const [actualWord, setActualWord] = useState(null);
  //words which have been played or used
  const [playedletters, setPlayedLetters] = useState([]);

  //find out if game is actually running we use isRunning
  //game runs if we still have lives left and actualword is not guessed
  const isRunning = lives && actualWord;
  //set of played and actual letters
  const word_set = new Set([...actualWord]);
  const played_set = new Set([...playedletters]);
  const lives = MAX_LIVES - word_set.length;
  //Wins if playedset doesnt match even one letter of actualword.
  //curr is ptr to actualword and we took help of reduce
  //initial val of acc or startval = true
  const isWon = word_set.reduce((acc, curr) => {
    if (!played_set.has(curr)) return false;
    return acc;
  }, true);

  const guess = (letter) => {
    setPlayedLetters((prev) => [...prev, letter]);
  };

  //for start lives and actualwords need to be set
  const start = () => {
    setActualWord("house");
    setPlayedLetters([]);
  };

  return <div></div>;
}
