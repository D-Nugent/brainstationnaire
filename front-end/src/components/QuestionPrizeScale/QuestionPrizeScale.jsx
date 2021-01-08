import React from 'react';
import './QuestionPrizeScale.scss';

function QuestionPrizeScale() {
    return (
        <div className="scale">
            <h4 className="scale__heading">CURRENT WINNINGS</h4>
            <div className="scale__questions">
                <h4 className="scale__questions-item">15 $1 MILLION</h4>
                <h4 className="scale__questions-item">14 $500,000</h4>
                <h4 className="scale__questions-item">13 $250,000</h4>
                <h4 className="scale__questions-item">12 $64,000</h4>
                <h4 className="scale__questions-item">11 $32,000</h4>
                <h4 className="scale__questions-item">10 $16,000</h4>
                <h4 className="scale__questions-item">9 $8,000</h4>
                <h4 className="scale__questions-item">8 $4,000</h4>
                <h4 className="scale__questions-item">7 $3,000</h4>
                <h4 className="scale__questions-item">6 $2,000</h4>
                <h4 className="scale__questions-item">5 $1,000</h4>
                <h4 className="scale__questions-item">4 $500</h4>
                <h4 className="scale__questions-item --active-question">3 $300</h4>
                <h4 className="scale__questions-item">2 $200</h4>
                <h4 className="scale__questions-item">1 $100</h4>
            </div>
        </div>
    )
};

export default QuestionPrizeScale
