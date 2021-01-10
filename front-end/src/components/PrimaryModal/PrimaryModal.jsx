import React from 'react';
import QuizLaunch from '../QuizLaunch/QuizLaunch';
import QuestionReel from '../QuestionReel/QuestionReel';
import QuizCompleted from '../QuizCompleted/QuizCompleted';
import './PrimaryModal.scss';

class PrimaryModal extends React.Component {
    state = {
        quizPosition: "not-started",
        timer: 30,
        host: '',
        currentQuestion: 1,
      }
    
      componentDidMount() {
        this.setState({
          quizStarted: "not-started",
          currentQuestion: 1,
        })
      }

      componentDidUpdate(){
      }
    
      quizStart = (hostName) => {
          console.log(hostName);
        this.setState({
            quizPosition: "in-progress",
            host: `${hostName}`,
        })
      }

      nextQuestion = (currentQuestion) => {
          if (this.state.currentQuestion <= 14) {
              this.setState({
                  currentQuestion: currentQuestion+1
              })
          } else {
              this.setState({
                  quizPosition: 'completed',
              })
          }
      }

      wrongAnswer = () => {
            this.setState({
                quizPosition: 'not-started'
            })
            alert("Wrong, better luck next time")
      }

    render() {
        return (
            <div className="modal">
                <div className="modal__container">
                    {this.state.quizPosition === "not-started" && <QuizLaunch quizStart={this.quizStart} quizEnv={this.state}/>} 
                    {this.state.quizPosition === "in-progress" && <QuestionReel nextQuestion={this.nextQuestion} wrongAnswer={this.wrongAnswer} quizEnv={this.state}/>} 
                    {this.state.quizPosition === "completed" && <QuizCompleted quizEnv={this.state}/>} 
                </div>
            </div>
        )
    }
}

export default PrimaryModal
