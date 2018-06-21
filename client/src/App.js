import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';
//import { Card, CardText, CardTitle } from '@material-ui/core/Card';
import { withStyles } from '@material-ui/core/styles';
import Card from '@material-ui/core/Card';
import Button from '@material-ui/core/Button';
import TextField from '@material-ui/core/TextField';


const styles = theme => ({
  cardContainerDiv: {
    'background-color': '#ffffffff',
  },
  StatusCard: {
    'background-color': 'blue',
    width: 50,
    display: 'flex',
    flexDirection: 'column',
  },
  textField: {
    width: 10,
  }
});

class App extends Component {
  state = {
    response: ''
  };

  componentDidMount() {
    this.callApi()
      .then(res => this.setState({ response: res.express }))
      .catch(err => console.log(err));
  }

  callApi = async () => {
    const response = await fetch('/api/log/0181');
    const body = await response.json();
    if (response.status !== 200) throw Error(body.message);
    return body;

  };
  render() {
    const { classes } = this.props;
    return (
      <div className="App">
        <header className="App-header">
          <img src={logo} className="App-logo" alt="logo" />
          <h1 className="App-title">Welcome to StampIN</h1>
        </header>
        <p className="App-intro">
          Request response: {this.state.response}
        </p>
        <div className="cardContainerDiv">
          <Card className="StatusCard">
            <TextField className={classes.textField} id="id-input" label="Enter your ID"></TextField>
            <Button>Log IN/OUT</Button>
          </Card>
        </div>
      </div>
    );
  }
}

export default withStyles(styles)(App);
