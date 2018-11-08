import React, {Component} from 'react';
import styled             from 'styled-components';

const Wrapper = styled.div`
  display: flex;
`;

const Key = styled.div`
  text-transform: uppercase;
  border: 2px solid #656c81;
  border-radius: 17px;
  font-family: 'Navigo-Bold', serif;
  font-size: 13px;
  font-weight: 700;
  padding: ${props => props.count > 0 ? '5px 18px' : '9px 18px'};
  cursor: pointer;
  background-color: transparent;
  height: 36px;
  box-sizing: border-box;
  color: #fff;
`;

const Counter = styled.span`
  margin-left: 8px;
  display: inline-block;
  border: 1px solid #2694F7;
  border-radius: 50%;
  background-color: #2694F7;
  color: #fff;
  padding-left: 7px;
  padding-right: 7px;
  padding-top: 3px;
  padding-bottom: 3px;
`;

class Button extends Component {
  constructor(props) {
    super();

    this.state = {
      count: props.count
    };
  }
  render() {
    const count = this.state.count;
    return (
      <Wrapper>
        <Key count={count}>
          {this.props.text}
          {count > 0 ? <Counter>{count}</Counter> : null}
        </Key>
      </Wrapper>
    );
  }
}

export default Button;