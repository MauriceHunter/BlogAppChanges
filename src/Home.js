import React, { Component } from 'react';
import fire from './Components/Fire';
import './App.css';
import { userInfo } from 'os';

class Home extends Component {
    constructor(props) {
        super(props);
        this.logout = this.logout.bind(this);
    }


    logout() {
        fire.auth().signOut();
    }

    render() {
        return (
            <div>
                <h1>Welcome Back</h1>
                <button onClick={this.logout}>Logout</button>
            </div>
        );

    }

}

export default Home;