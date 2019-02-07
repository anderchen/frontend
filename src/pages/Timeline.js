import React, { Component } from 'react';

import twitterLogo from '../twitter.svg';
import './Timeline.css';

export default class Timeline extends Component {
  state = {
    newTweet: "",
  }

  handleInputChange = (event) => {
    this.setState({ newTweet: event.target.value });
  };

  handelNewTweet = (event) => {

  };
  
  render() {
    return (
      <div className="timeline-wrapper">
        <img height={24} src={twitterLogo} alt="GoTwitter"/>
        <form>
          <textarea 
            value={this.state.newTweet}
            onChange={this.handleInputChange}
            onKeyDown={this.handleNewTweet}
            placeholder="O que está acontecendo?" />
        </form>
      </div>
    );
  }
}