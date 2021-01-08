import React from 'react';
import './QuizLaunch.scss';

function QuizLaunch() {
    return (
        <div className="launch">
            <h2 className="launch__header">Welcome to 'Who Wants To Be a BrainStationnaire?'</h2>
            <p className="launch__message">Are YOU ready to step up and stretch your mental muscles and are you smart enough to answer all 15 questions and walk away with.... <span className="launch__message-emph">$1 Million!!!</span></p>
            <form className="launch__form">
                <label className="launch__form-instructions" for="hosts">To get started please select who our host will be today to take you through this quiz of a lifetime:</label>
                <select name="hosts" id="host-select" className="launch__form-dropdown"required>
                    <option value="">--Please choose an option--</option>
                    <option value="Jon">Jon</option>
                    <option value="Lauren">Lauren</option>
                    <option value="Nolan">Nolan</option>
                    <option value="Hussein">Hussein</option>
                    <option value="Eric">Eric</option>
                    <option value="Ashley">Ashley</option>
                </select>
                <input type="submit" className="launch__form-submit" value="LETS GET STARTED!"/>
            </form>
        </div>
    )
}

export default QuizLaunch