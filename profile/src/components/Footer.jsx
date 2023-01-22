import React from 'react'
import { FooterContainer, SocialIcon, SocialIconItem, SocialIconLink, Menu, MenuItem, MenuLink} from '../Styles/FooterStyles';
// import LinkedIn from '../assets/img/social/linkedin.svg'
const Footer = () => {
  return (
    <>
      <FooterContainer>
        <Menu>
          <MenuItem>
            <MenuLink href="#">Let's get in contact!</MenuLink>
          </MenuItem>
        </Menu>
        <SocialIcon>
          <SocialIconItem>
            <SocialIconLink href="#">
              {/* <SocialSvg>
                <img src={LinkedIn} alt="LinkedIn" />
              </SocialSvg> */}
            </SocialIconLink>
          </SocialIconItem>
          <SocialIconItem>
            <SocialIconLink href="#">
              {/* <Ionicon name="logo-twitter" /> */}
            </SocialIconLink>
          </SocialIconItem>
          <SocialIconItem>
            <SocialIconLink href="#">
              {/* <Ionicon name="logo-linkedin" /> */}
            </SocialIconLink>
          </SocialIconItem>
          <SocialIconItem>
            <SocialIconLink href="#">
              {/* <Ionicon name="logo-instagram" /> */}
            </SocialIconLink>
          </SocialIconItem>
        </SocialIcon>
        <p>&copy;2023 Web Dev Maira Pajaro</p>
      </FooterContainer>
    </>
  );
}

export default Footer


