import React, { Component } from 'react';
import logo from './logo.svg';
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
  constructor(props) {
    super(props);
    this.onButtonPress = this.onButtonPress.bind(this);
  }

  state = {
    response: ''
  };

  componentDidMount() {
  }

  callApi = async (id) => {
    let request = '/api/log/' + id;
    const response = await fetch(request);
    const body = await response.json();
    if (response.status !== 200) throw Error(body.message);
    return body;
  };

  onButtonPress(){
    let id = document.getElementById('id-input').value;
    this.callApi(id)
      .then(res => this.setState({ response: res.express }))
      .catch(err => console.log(err));
    // this.setState({ response: id });
  }

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
              <Button className={classes.buttonStyle} onClick={this.onButtonPress}>Log IN/OUT</Button>
          </Card>

        </div>
      </div>
    );
  }
}

export default withStyles(styles)(App);
