import React, {Component} from 'react';
import styled             from 'styled-components';
import IconVk from '../../assets/icon_social_vk.svg';
import IconFb from '../../assets/icon_social_fb.svg';
import IconInstagram from '../../assets/icon_social_instagram.svg';
import IconYoutube from '../../assets/icon_social_youtube.svg';

function Links(props) {
  return <Link href={props.sm.href}><Icon {...props} /></Link>
}

const Wrapper = styled.div`
  display: flex;
  width: 324px;
  justify-content: flex-end;
  @media (max-width: 950px) {
    width: 150px;
  }
  @media (max-width: 650px) {
    display: none;
  }
`;

const Icon =styled.div`
  width: ${props => props.sm.width};
  height: ${props => props.sm.height};
  background-image: url('${props => props.sm.srcIcon}');
  background-repeat: no-repeat;
`;

const Link = styled.a`
  width: 36px;
  height: 36px;
  border: 1px solid #8088a3;
  border-radius: 50%
  display: flex;
  align-items: center;
  justify-content: center;
  margin-right: 6px;
  &:last-child {
    margin-right: 0;
  }
  box-sizing: border-box;
`;

class SocialMedia extends Component {
  constructor() {
    super();

    this.state = {
      vk: {
        href: 'https://vk.com',
        srcIcon: `${IconVk}`,
        width: '18px',
        height: '10px',
      },
      facebook: {
        href: 'https://www.facebook.com',
        srcIcon: `${IconFb}`,
        width: '9px',
        height: '16px',
      },
      instagram: {
        href: 'https://www.instagram.com',
        srcIcon: `${IconInstagram}`,
        width: '14px',
        height: '14px',
      },
      youtube: {
        href: 'https://www.youtube.com',
        srcIcon: `${IconYoutube}`,
        width: '15px',
        height: '16px',
      }
    }
  }

  render() {
    const socialArray = Object.keys(this.state);
    const links = socialArray.map((item, index) =><Links key={index} sm={this.state[`${item}`]}/> );
    return (
      <Wrapper>
        {links}
      </Wrapper>
    );
  }
}

export default SocialMedia;