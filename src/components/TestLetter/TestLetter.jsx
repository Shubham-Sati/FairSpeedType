import React from 'react';
import './TestLetter.css'

const TestLetter = ({individualLetterInfo}) =>{

    const { status } = individualLetterInfo;
    

    const statusClass = {
        correct:"test-letter-correct",
        incorrect:"test-letter-incorrect",
        notAttempted:"text-letter-not-attempted",
    }[status]



    // // Alternate/Shortcut of the code in comment is the code above { const statusClass = {
    //     correct:"test-letter-correct",
    //     incorrect:"test-letter-incorrect",
    //     notAttempted:"text-letter-not-attempted",
    // }[status] }


    //let statusClass;
    // if( status === "correct" ){
    //     statusClass = "test-letter-correct";
    // }else if( status === "incorrect" ){
    //     statusClass = "test-letter-incorrect";
    // }else{
    //     statusClass = "text-letter-not-attempted";
    // }

    return(
        <span className={`test-letter ${statusClass}`}>
            {individualLetterInfo.testLetter}
        </span>
    )
}


export default TestLetter;