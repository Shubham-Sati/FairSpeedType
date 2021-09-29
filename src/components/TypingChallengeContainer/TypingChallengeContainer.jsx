import React from "react";
import ChallengeDetailsCards from "../ChallengeDetailsCards/ChallengeDetailsCards";
import "./TypingChallengeContainer.css";
import TypingChallenge from "../TypingChallenge/TypingChallenge";

const TypingChallengeContainer = ({
  selectedParagraph,
  timeStarted,
  timeRemaining,
  words,
  characters,
  wpm,
  testinfo,
  onInputChange
}) => {
  return (
    <div className="typing-challenge-container">
      <div className="details-container">
        <ChallengeDetailsCards cardName="Words" cardValue={words} />
        <ChallengeDetailsCards cardName="Characters" cardValue={characters} />
        <ChallengeDetailsCards cardName="Speed" cardValue={wpm} />
      </div>

      <div className="typewriter-container">
        <TypingChallenge
          selectedParagraph={selectedParagraph}
          timeRemaining={timeRemaining}
          timeStarted={timeStarted}
          testinfo={testinfo}
          onInputChange={onInputChange}
        />
      </div>
    </div>
  );
};

export default TypingChallengeContainer;
