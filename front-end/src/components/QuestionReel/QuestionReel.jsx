import React from 'react';
import axios from 'axios';
import './QuestionReel.scss';
import QuestionPrizeScale from '../QuestionPrizeScale/QuestionPrizeScale';
import PageLoading from '../PageLoading/PageLoading'
import jonIronMan from '../../assets/images/jon-ironMan.gif'

class QuestionReel extends React.Component {
    state = {
        currentQuestion: '',
        answer1: '',
        answer2: '',
        answer3: '',
        answer4: '',
        loaded: false
    }

    async componentDidMount() {
        await axios
        .get('http://localhost:8080/questions')
        .then((response)=> {
            console.log(response.data);
            let answerArray = response.data.answers
            const randomInt =() => {
                return Math.floor(Math.random() * answerArray.length)
            }
            console.log(randomInt);
            this.setState({
                currentQuestion: response.data.question,
                answer1: answerArray.splice(randomInt(),1).shift(),
                answer2: answerArray.splice(randomInt(),1).shift(),
                answer3: answerArray.splice(randomInt(),1).shift(),
                answer4: answerArray.splice(randomInt(),1).shift(),
                loaded: true
            })
        })
    }

    componentDidUpdate(prevProps) {
        if (this.props.quizEnv.currentQuestion !== prevProps.quizEnv.currentQuestion) {
            axios
            .get('http://localhost:8080/questions')
            .then((response)=> {
                console.log(response.data);
                let answerArray = response.data.answers
                const randomInt =() => {
                    return Math.floor(Math.random() * answerArray.length)
                }
                console.log(randomInt);
                this.setState({
                    currentQuestion: response.data.question,
                    answer1: answerArray.splice(randomInt(),1).shift(),
                    answer2: answerArray.splice(randomInt(),1).shift(),
                    answer3: answerArray.splice(randomInt(),1).shift(),
                    answer4: answerArray.splice(randomInt(),1).shift(),
                    loaded: true
                })
            })
        }
    }

    answerQuestion = (event) => {
        console.log(this.props.quizEnv)
        console.log(this.state);
        event.currentTarget.getAttribute('data-id').length === 4?
            this.props.nextQuestion(this.props.quizEnv.currentQuestion)
            :
            this.props.wrongAnswer()
    }
    
    render() {
        console.log(this.state)
        if (!this.state.loaded) {
            return(
                <PageLoading/>
            )
        } else {
            return (
                <>
                <div className="reel">
                    <QuestionPrizeScale className="reel__scale" currentQuestion={this.state.currentQuestion}/>
                    <h2 className="reel__header">QUESTION {this.props.quizEnv.currentQuestion}</h2>
                    <h3 className="reel__question">{this.state.currentQuestion}</h3>
                    <div className="reel__answers">
                        <div className="reel__answers-container" data-id={this.state.answer1.correct} onClick={(event)=> {this.answerQuestion(event)}}>
                            <h4 className="reel__answers-container-text"><span className="reel__answers-container-text--offset">A:</span> {this.state.answer1.answer}</h4>
                        </div>
                        <div className="reel__answers-container" data-id={this.state.answer2.correct} onClick={(event)=> {this.answerQuestion(event)}}>
                            <h4 className="reel__answers-container-text"><span className="reel__answers-container-text--offset">B:</span> {this.state.answer2.answer}</h4>
                        </div>
                        <div className="reel__answers-container" data-id={this.state.answer3.correct} onClick={(event)=> {this.answerQuestion(event)}}>
                            <h4 className="reel__answers-container-text"><span className="reel__answers-container-text--offset">C:</span> {this.state.answer3.answer}</h4>
                        </div>
                        <div className="reel__answers-container" data-id={this.state.answer4.correct} onClick={(event)=> {this.answerQuestion(event)}}>
                            <h4 className="reel__answers-container-text"><span className="reel__answers-container-text--offset">D:</span> {this.state.answer4.answer}</h4>
                        </div>
                    </div>
                </div>
                {this.props.quizEnv.host === "Jon" && <img className="host" src={jonIronMan} alt="Jon your host"/>} 
                {this.props.quizEnv.host === "Lauren" && <img className="host" src={jonIronMan} alt="Lauren your host"/>} 
                {this.props.quizEnv.host === "Nolan" && <img className="host" src={jonIronMan} alt="Nolan your host"/>} 
                </>
            )
        }
    }
}

export default QuestionReel
