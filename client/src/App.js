import React, { Component } from 'react';
import logo from './Sportradar.png';
import './App.css';
//import { Card, CardText, CardTitle } from '@material-ui/core/Card';
import { withStyles } from '@material-ui/core/styles';
import Card from '@material-ui/core/Card';
import Button from '@material-ui/core/Button';
import TextField from '@material-ui/core/TextField';


const styles = theme => ({
  buttonStyle: {
    'background-color': '#4374c1',
    top: 30,
    margin: 'auto',
  },
  cardContainerDiv: {
    padding: 20,
    'background-color': '#ffffffff',

  },
  StatusCard: {
    width: 500,
    height: 200,
    margin: 'auto',
    justifyContent: 'center',
  },
  textField: {
    margin: 'auto',
    top: 0,
    width: 150,
    display: 'flex',
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
          <Card className={classes.StatusCard}>
            <TextField className={classes.textField} id="id-input" label="Enter ID"></TextField>
              <Button className={classes.buttonStyle}>Log IN/OUT</Button>
          </Card>
        </div>
      </div>
    );
  }
}

export default withStyles(styles)(App);
