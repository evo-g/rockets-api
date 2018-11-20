import React, { Component } from 'react';
import './App.css';
import axios from 'axios';
import Hook from './Hook.jsx';

class App extends Component {
  constructor() {
    super();
    this.state = {
      rockets: []
    };
    this.searchRockets = this.searchRockets.bind(this);
  };


  searchRockets = () => {
    axios({
      method: 'get',
      url: `https://launchlibrary.net/1.4/rocket`
    })
      .then((response) => {
        console.log(response.data.rockets)
        this.setState({ rockets: response.data.rockets })
      })
      .catch((error) => {
      })
  };

  render() {
    var array = this.state.rockets
    return (
      <div>
        <div className="btn-holder">
          <button className="btn" onClick={this.searchRockets}> click me for rockets </button>
        </div>
        <div className=" flex-container">
          { array.filter(rocket => rocket.imageURL).map((rocket, index) => (
            <div key={index} rocket={rocket}>
                <div >
                  <div>{rocket.name}<img className="big" src={rocket.imageURL} /><a className="editme" href={rocket.wikiURL} target="blank">{rocket.wikiURL}</a></div>
                </div>
              </div>

            ))}
          <Hook.js />   
        </div>
      </div>
    );
  }
}

export default App;