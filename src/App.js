import React, { Component } from 'react';
import BigTitle from './Components/BigTitle';
import OrderButton from './Components/OrderButton';
import Image from './Components/Image.js';
import NewMenu from './Components/NewMenu.js';
import SecondPage from './Components/Second/SecondPage.js';
import FirstPage from './Components/First/FirstPage.js';
import { Container, Grid, Paper, Box, Button, borders } from '@material-ui/core';
import './App.css';
import Stairs from './assets/stairs.png';
import Wall from './assets/wall.png'

class App extends React.Component {
  constructor(props) {
    super(props);

    this.nextStep = this.nextStep.bind(this);
    this.backStep = this.backStep.bind(this);

    this.state = {
      step: 1
    };
  }

  nextStep() {
    // move to the next step
    this.setState({step: 2});
  }

  backStep() {
    // move to the back step
    this.setState({step: 1});
  }

  render() {
    let step = this.state.step;

    if (step == 1) {
      return (
        <FirstPage />
      )
    } else if (step == 2) {
      return (

        <Container fixed>
          <SecondPage onClick={this.backStep}/>

        </Container>
      );
    }
  }
}


export default App;
