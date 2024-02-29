import { Component } from 'react';

export class Shuffle extends Component {
  state = { value: '' };
  onChange = e => this.setState({ value: e.currentTarget.value });
  shuffle = (e, str) => {
    str = str ?? this.state.value;
    console.log(str);
    const shuffled = str
      .split('')
      .sort(function () {
        return 0.5 - Math.random();
      })
      .join('');
    //return shuffled;
    this.setState({ value: shuffled });
  };
  randomKey = (e, number) => {
    const chars = '0123456789abcdefghijklmnopqrstuvwxyz';
    return this.shuffle(e, chars);
  };
  render() {
    const { value } = this.state;
    return (
      <div>
        <h2>Shuffle string function</h2>
        <input
          type="text"
          value={value}
          onChange={this.onChange}
          placeholder="String to suffle"
        />
        <button onClick={this.shuffle}>Shuffle string</button>
        <button onClick={this.randomKey}>randomKey</button>
      </div>
    );
  }
}
