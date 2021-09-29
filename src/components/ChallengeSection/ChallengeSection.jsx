import React from "react";
import "./ChallengeSection.css";
import TestContainer from "../TestContainer/TestContainer";

const ChallengeSection = ({
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
    <div className="challenge-section-container">
      <h1
        data-aos="fade-down"
        data-aos-easing="linear"
        data-aos-duration="1500"
        className="challenge-section-header"
      >
        Take a speed test Now!
      </h1>

      <TestContainer 
      words={words} 
      characters={characters} 
      wpm={wpm} 
      selectedParagraph={selectedParagraph} 
      timeStarted={timeStarted}  
      timeRemaining={timeRemaining} 
      testinfo={testinfo}
      onInputChange={onInputChange}
      startAgain={startAgain}
      />
    </div>
  );
};

export default ChallengeSection;
