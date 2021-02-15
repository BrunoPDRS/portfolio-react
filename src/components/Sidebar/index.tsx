import React from 'react';
import { FaGithub, FaLinkedin, FaInstagram } from 'react-icons/fa';
import { BsFillPersonFill, BsTools } from 'react-icons/bs';
import { SiGmail } from 'react-icons/si';
import { useLocation } from 'react-router-dom';

import { Container, StyledLink, StyledNavLink } from './styles';

const Sidebar: React.FC = () => {
  const { pathname } = useLocation();
  return (
    <Container>
      <nav>
        <StyledNavLink
          to="/about"
          activeroute={(pathname === '/about').toString()}
        >
          <BsFillPersonFill />
          <span>Sobre mim</span>
        </StyledNavLink>
        <StyledNavLink
          to="/projects"
          activeroute={(pathname === '/projects').toString()}
        >
          <BsTools size={55} />
          <span>Projetos</span>
        </StyledNavLink>
      </nav>
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
};
export default Sidebar;
