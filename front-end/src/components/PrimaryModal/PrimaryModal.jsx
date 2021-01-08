import React from 'react';
import QuizLaunch from '../QuizLaunch/QuizLaunch';
import QuestionReel from '../QuestionReel/QuestionReel';
import QuizCompleted from '../QuizCompleted/QuizCompleted';
import './PrimaryModal.scss';

function PrimaryModal({quizPosition}) {
    return (
        <div className="modal">
            <div className="modal__container">
                <p>{quizPosition}</p>
                {quizPosition === "not-started" && <QuizLaunch/>} 
                {quizPosition === "in-progress" && <QuestionReel/>} 
                {quizPosition === "completed" && <QuizCompleted/>} 
            </div>
        </div>
    )
}

export default PrimaryModal
