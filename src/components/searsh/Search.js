import React, {Component} from 'react';
import styled             from 'styled-components';

const Wrapper = styled.div`
  display: flex;
  width: 120px;
`;

const Input = styled.input`
  width: ${props => props.active === true ? '100px' : '36px'};
  height: 36px;
  border-radius: ${props => props.active === true ? '50px' : '50%'};
  border: 1px solid #656c81;
  box-sizing: border-box;
  transition: border, width .15s, .5s ease-in;
  outline: none;
  padding: 10px;
  cursor: ${props => props.active === true ? 'text' : 'pointer'};
  background-color: transparent;
`;

class Search extends Component {
  constructor() {
    super();

    this.state = {
      value: '',
      focus: false
    }
  }

  focusField = () => {
    this.setState(state => {return {focus: !state.focus}});
  };

  types = (e) => {
    this.setState({value: e.target.value});
  };

  render() {
    return (
      <Wrapper>
        <Input
          type="text"
          active={this.state.focus}
          onFocus={this.focusField}
          onBlur={this.focusField}
          value={this.state.value}
          onChange={this.types}
        />
      </Wrapper>
    );
  }
}

export default Search;