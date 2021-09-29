import React from "react";
import "./TestContainer.css";
import TryAgain from "../TryAgain/TryAgain";
import TypingChallengeContainer from "../TypingChallengeContainer/TypingChallengeContainer";

const TestContainer = ({
  selectedParagraph,
  timeStarted,
  timeRemaining,
  words,
  characters,
  wpm,
  testinfo,
  onInputChange,
  startAgain
}) => {
  return (
    <div className="test-container">
      {timeRemaining > 0 ? (
        <div
          data-aos="fade-up"
          data-aos-easing="linear"
          data-aos-duration="1500"
          className="typing-challenge-cont"
        >
          <TypingChallengeContainer
            timeStarted={timeStarted}
            selectedParagraph={selectedParagraph}
            words={words}
            characters={characters}
            wpm={wpm}
            timeRemaining={timeRemaining}
            testinfo={testinfo}
            onInputChange={onInputChange}
          />
        </div>
      ) : (
        <div className="try-again-container">
          <TryAgain words={words} characters={characters} wpm={wpm} startAgain={startAgain}/>
        </div>
      )}
    </div>
  );
};

export default TestContainer;
