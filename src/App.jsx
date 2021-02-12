import React, { Component } from 'react';
import Navbar from './components/Navbar';

class App extends Component {
  constructor(props) {
    super(props);

    this.state = {
      text: "Here's some filler text.",
    };

    this.handleInput = this.handleInput.bind(this);
    this.handleClick = this.handleClick.bind(this);
  }

  handleInput(e) {
    this.setState({ text: e.target.value });
  }

  handleClick() {
    this.setState({
      hasLoaded: this.state.hasLoaded ? false : true,
    });
  }

  componentDidMount() {
    this.setState({
      hasLoaded: true,
    });
  }

  render() {
    if (this.state.hasLoaded) {
      return (
        <div>
          <h1>{this.state.text}</h1>
          <hr />
          <input
            type='text'
            placeholder={this.state.text}
            onChange={this.handleInput}
          />
          <button onClick={this.handleClick}>Do Something</button>
        </div>
      );
    } else {
      return (
        <div>
          <h1>Loading...</h1>
          <button onClick={this.handleClick}>Do Something</button>
        </div>
      );
    }
  }
}

export default App;
