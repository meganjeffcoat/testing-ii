import React, { Component } from 'react';
import Display from './Components/Display/Display';
import Dashboard from './Components/Dashboard/Dashboard';
import './App.css';

class App extends Component {
  constructor(props) {
    super(props);
    this.state = {
      balls: 0,
      strikes: 0
    };
  }

  ballInc = e => {
    this.setState(prevState => {
      return {
        balls: prevState.balls + 1,
      }
    })
  };

  strikeInc = e => {
    this.setState(prevState => {
      return{
        strikes: prevState.strikes + 1,
      }
    })
  };

  hitBtn = e => {
    this.setState({
      balls: 0,
      strikes: 0,
    })
  };

  componentDidUpdate = (prevProps, prevState) => {
    if((this.state.balls > 4) || (this.state.strikes > 3)) {
      this.setState({
        balls: 0,
        strikes: 0,
      })
    }
  };

  render() {
    return (
      <div>
        <Display 
          ballCount = {this.state.balls} 
          strikeCount = {this.state.strikes} 
        />
        <Dashboard
          ballAction={this.ballInc}
          strikeAction={this.strikeInc}
          foulAction={this.ballInc}
          hitAction={this.hitBtn}
        />
      </div>
    )
  }
}

export default App;
