import React, { Component } from 'react';
import './App.css';
import fire from './Components/Fire';
//import Home from './Home';
import Login from './Login';
import App2 from './App2';

class App extends Component {
  constructor() {
    super();
    this.state = ({
      user: null,
    });
    this.authListener = this.authListener.bind(this);
  }

  componentDidMount() {
    this.authListener();
  }

  authListener() {
    fire.auth().onAuthStateChanged((user) => {
      console.log(user);
      if (user) {
        this.setState({ user });
        localStorage.setItem('user', user.uid);
      } else {
        this.setState({ user: null });
        localStorage.removeItem('user');
      }
    });
  }

  render() {
    return (
      <div className="App">
        {this.state.user ? (
          <App2 />
        ) :
          (
            <Login />
          )}
      </div>
    );
  }
}

export default App;