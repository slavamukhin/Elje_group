import React, {Component} from 'react';
import styled             from 'styled-components';
import Icon from '../../assets/icon_clock_dark.svg';

function Text(props) {
  return <div><TextWrapper {...props}>{props.text}</TextWrapper></div>
}

const Wrapper = styled.div`
  display: flex;
  font-family: 'Navigo-Bold', serif;
  font-size: 11px;
  font-weight: 700;
  @media (max-width: 950px) {
    display: none;
  }
`;

const TextWrapper = styled.span`
  display: inline-block;
  border-bottom: ${props => props.underline === true ? '1px solid rgba(61, 66, 82, .35)' : 'none'};
  line-height: 17.5px;
`;

const IconClock = styled.div`
  width: 36px;
  height: 36px;
  background-image: url('${Icon}');
  margin-right: 15px;
`;

const AboutTime = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: space-between;
`;

const TimeText = styled(Text)`
  text-transform: uppercase;
  color: #3d4252;
`;


class TimeWork extends Component {
  constructor() {
    super();

    this.state = {
      timeWork: '22:00',
      info1: 'Сегодня открыт до',
      info2: 'Время работы'
    }
  }

  render() {
    return (
      <Wrapper>
        <IconClock/>
        <AboutTime>
          <TimeText text={`${this.state.info1} ${this.state.timeWork}`} />
          <TimeText text={`${this.state.info2}`} underline={true} />
        </AboutTime>
      </Wrapper>
    );
  }
}

export default TimeWork;