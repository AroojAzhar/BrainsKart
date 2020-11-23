import React from 'react';
import './App.css';
import IMAGE from "../src/assets/events-now.png";

class App extends React.Component{

    render() {
        return (
            <div className="App">
                <nav className="navbar navbar-dark bg-dark navbar-expand-sm">
                    <a href="/" className='navbar-brand'>Github Profile Search App</a>
                </nav>
                <h1>Github test</h1>
                <img src={IMAGE} alt=""/>
                </div>
        );
    }
}
export default App;
