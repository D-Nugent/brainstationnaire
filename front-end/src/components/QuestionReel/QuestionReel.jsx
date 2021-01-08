import React from 'react';
import './QuestionReel.scss';
import QuestionPrizeScale from '../QuestionPrizeScale/QuestionPrizeScale';
import jonIronMan from '../../assets/images/jon-ironMan.gif'

function QuestionReel() {
    return (
        <div className="reel">
            <QuestionPrizeScale className="reel__scale"/>
            <h2 className="reel__header">QUESTION 1</h2>
            <h3 className="reel__question">This is a placeholder question?</h3>
            <div className="reel__answers">
                <div className="reel__answers-container">
                    <h4 className="reel__answers-container-text"><span className="reel__answers-container-text--offset">A:</span> Placeholder</h4>
                </div>
                <div className="reel__answers-container">
                    <h4 className="reel__answers-container-text"><span className="reel__answers-container-text--offset">B:</span> Placeholder</h4>
                </div>
                <div className="reel__answers-container">
                    <h4 className="reel__answers-container-text"><span className="reel__answers-container-text--offset">C:</span> Placeholder</h4>
                </div>
                <div className="reel__answers-container">
                    <h4 className="reel__answers-container-text"><span className="reel__answers-container-text--offset">D:</span> Placeholder</h4>
                </div>
            </div>
            <img src={jonIronMan}/>
        </div>
    )
}

export default QuestionReel
