import React from 'react';
import {
  FaGithub,
  FaLinkedin,
  FaHackerrank,
  FaInstagram,
} from 'react-icons/fa';
import { SiGmail } from 'react-icons/si';

import { Container, StyledLink } from './styles';

const Sidebar: React.FC = () => (
  <Container>
    <nav>
      <StyledLink
        type="linkedin"
        href="https://www.linkedin.com/in/bruno-pedrosa-/"
        target="_blank"
      >
        <FaLinkedin />
        <span>LinkedIn</span>
      </StyledLink>
      <StyledLink
        type="github"
        href="https://github.com/brunopdrs"
        target="_blank"
      >
        <FaGithub />
        <span>Github</span>
      </StyledLink>
      <StyledLink type="gmail" href="mailto:bgpedrosas@gmail.com">
        <SiGmail />
        <span>Gmail</span>
      </StyledLink>
      <StyledLink
        type="hackerrank"
        href="https://www.hackerrank.com/bgpedrosas"
        target="_blank"
      >
        <FaHackerrank />
        <span>Hacker</span>
      </StyledLink>
      <StyledLink
        type="instagram"
        href="https://www.instagram.com/the.pedrosa27/"
        target="_blank"
      >
        <FaInstagram />
        <span>Instagram</span>
      </StyledLink>
    </nav>
  </Container>
);
export default Sidebar;
