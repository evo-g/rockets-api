import React, { Component } from 'react';
import './App.css';
import axios from 'axios';

class App extends Component {
  constructor() {
    super();
    this.state = {
      rockets: []
    };
    this.searchRockets = this.searchRockets.bind(this);
  };

  searchRockets = () => {
    //  let me = Math.floor(Math.random() * 30)
    //  console.log(me);
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
    return (
      <div>
        <div className="btn-holder">
        <button className="btn" onClick={this.searchRockets}> click me for rockets </button>
        </div>
        <div className="">
          <ul>
            {this.state.rockets.map((rocket, index) => (
              <li key={index} rocket={rocket}>
                <div className="row" >
                  <div className="column"><img className="big" src={rocket.imageURL} /></div>
                  <div className="column">{rocket.name}<a href={rocket.wikiURL}>{rocket.wikiURL}</a></div>
                </div>
              </li>
            ))}
          </ul>
        </div>
      </div>
    );
  }
}

export default App;