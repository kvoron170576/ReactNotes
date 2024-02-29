import React, { Component } from 'react';
import { Result, Wrapper } from './Counter.styled';

class Counter extends Component {
  static defaultProps = {
    step: 1,
    initialValue: 0,
  };
  state = {
    value: this.props.initialValue,
  };

  handleIncrement = () => {
    this.setState((state, props) => {
      return {
        value: state.value + props.step,
      };
    });
    //console.log(value);
  };

  handleDecrement = () => {
    this.setState((state, props) => ({
      value: state.value - props.step,
    }));
  };

  render() {
    const { step } = this.props;

    return (
      <Wrapper>
        <Result>{this.state.value}</Result>
        <button type="button" onClick={this.handleIncrement}>
          Increment by {step}
        </button>
        <button type="button" onClick={this.handleDecrement}>
          Decrement by {step}
        </button>
      </Wrapper>
    );
  }
}
export default Counter;
