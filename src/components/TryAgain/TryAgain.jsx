import React from "react";
import "./TryAgain.css";

const TryAgain = ({ words, characters, wpm, startAgain }) => {
  return (
    <div className="try-again-container">
      <h1>Test Results</h1>
      <div className="result-container">
        <p>
          <b>Words:</b> {words}
        </p>
        <p>
          <b>Characters:</b> {characters}
        </p>
        <p>
          <b>Speed:</b> {wpm} wpm
        </p>
      </div>

      <div>
        <button
          onClick={() => startAgain()}
          className="end-button start-again-btn"
        >
          Re-try
        </button>

        <button
          onClick={() => {
            window.open(
              "https://www.facebook.com/sharer/sharer/php?u=ShubhamSati.com/aam",
              "facebook-share-dialogue",
              "width=800, height=600"
            );
          }}
          className="end-button share-btn"
        >
          Share
        </button>

        <button
          onClick={() => {
            window.open(
              "https://twitter.com/intent/tweet?text=ShubhamSati.com",
              "twitter",
              "width=800, height=600"
            );
          }}
          className="end-button tweet-btn"
        >
          Tweet
        </button>
      </div>
    </div>
  );
};

export default TryAgain;
