import './App.scss';
import React from 'react';
import PrimaryModal from '../PrimaryModal/PrimaryModal.jsx';
import BrainStationnaireLogo from '../../assets/logo/BrainStationnaire-Updated.png'
import BrainStationnaireText from '../../assets/logo/BrainStationnaire-Text.png'

class App extends React.Component {
  state = {
    quizPosition: "in-progress",
    questionsAns: 0,
    timer: 30,
  }

  componentDidMount() {
    this.setState({
      quizStarted: false,
    })
  }

  render() {
    return (
      <div className="app">
        <div className="app__header">
          <img src={BrainStationnaireText} className="app__header-title" alt="text"/>
          <img src={BrainStationnaireLogo} className="app__header-logo" alt="logo"/>
        </div>
        <PrimaryModal quizPosition={this.state.quizPosition} questionsAns={this.state.questionsAns}/>
      </div>
    );
  }
}

export default App;
