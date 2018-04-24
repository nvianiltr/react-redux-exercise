import React, {Component} from 'react';
import logo from './logo.svg';
import './App.css';

import {
    Route,
    Link,
} from 'react-router-dom';

import Home from './components/Home';
import About from './components/About';

class App extends Component {
    render() {
        return (
            <div className="App">
                <header className="App-header">
                    <img src={logo} className="App-logo" alt="logo"/>
                    <h1 className="App-title">Welcome to React</h1>
                </header>
                <div>
                    <Link to ="/">Home</Link>
                    <Link to="/about">About</Link>
                </div>
                <div>
                    <Route exact path="/" component={Home}/>
                    <Route exact path="/about" component={About}/>
                </div>
            </div>
        );
    }
}

export default App;
