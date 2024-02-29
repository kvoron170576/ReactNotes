import React, { Component } from 'react';
import { Wrapper } from './Toggle.styled';
class Toggle extends Component {
  static defaultProps = {
    name: 'element',
  };
  state = { isOpen: true };

  show = () => this.setState({ isOpen: true });

  hide = () => this.setState({ isOpen: false });

  render() {
    const { isOpen } = this.state;
    const { children, name } = this.props;

    return (
      <Wrapper>
        {isOpen && children}
        {isOpen ? (
          <button onClick={this.hide}>Hide {name}</button>
        ) : (
          <button onClick={this.show}>Show {name}</button>
        )}
      </Wrapper>
    );
  }
}
export default Toggle;
