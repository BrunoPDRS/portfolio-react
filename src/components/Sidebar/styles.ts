import { Link } from 'react-router-dom';
import styled, { css } from 'styled-components';

import convertHexToRGB from '../../utils/convertHexToRGB';

interface StyledLinkProps {
  type?: 'linkedin' | 'github' | 'gmail' | 'hackerrank' | 'instagram';
}

interface StyledNavLinkProps {
  activeroute: string;
}

const setSidebarCSS = (colorHex: string) => {
  const { r, g, b } = convertHexToRGB(colorHex);
  return css`
    svg {
      color: rgb(${r}, ${g}, ${b});
    }
  `;
};

const themeColors = {
  linkedin: convertHexToRGB('0077b5'),
  github: convertHexToRGB('#f1502f'),
  gmail: convertHexToRGB('#bb001b'),
  hackerrank: convertHexToRGB('#1ba94c'),
  instagram: convertHexToRGB('#cc2366'),
  default: convertHexToRGB('#e83f5b'),
};

const socialMedias = {
  linkedin: setSidebarCSS('0077b5'),
  github: setSidebarCSS('#f1502f'),
  gmail: setSidebarCSS('#bb001b'),
  hackerrank: setSidebarCSS('#1ba94c'),
  instagram: setSidebarCSS('#cc2366'),
  default: setSidebarCSS('#e83f5b'),
};

export const Container = styled.aside`
  background-color: #282c34;
  box-shadow: 2px 2px 8px 1px black;
  display: flex;
  flex-direction: column;
  height: 100vh;
  justify-content: space-between;
  left: 0;
  margin-right: 16px;
  overflow-x: hidden;
  padding: 16px 0;
  position: fixed;
  top: 0;
  transition: ease-in-out 0.5s;
  width: 80px;
  z-index: 0;

  &:hover {
    width: 250px;
  }
`;

export const StyledNavLink = styled(Link)<StyledNavLinkProps>`
  align-items: center;
  color: white;
  display: flex;
  flex-basis: content;
  font-size: 32px;
  font-weight: 600;
  padding: 4px 10px;
  position: relative;
  text-decoration: none;
  transition: transform ease 0.4s;
  width: 250px;
  white-space: nowrap;

  & + a {
    margin-top: 48px;
  }

  &::before {
    bottom: -4px;
    content: '';
    height: 4px;
    left: 0;
    margin-top: 10px;
    position: absolute;
    transition: all 0.3s ease-in-out;
    visibility: hidden;
    width: 0%;
    ${() => {
      const { r, g, b } = themeColors.default;
      return css`
        background-color: rgb(${r}, ${g}, ${b});
      `;
    }}
  }

  &:hover {
    transform: translateY(-10%);
    ${() => socialMedias.default}
  }

  &:hover:before {
    visibility: visible;
    width: 100%;
  }

  svg {
    ${props =>
      props.activeroute === 'true' &&
      css`
        color: #e83f5b;
      `}
    display: inline;
    font-size: 60px;
    margin-right: 16px;
    transition: color ease-in 0.2s;
  }
`;

export const StyledLink = styled.a<StyledLinkProps>`
  align-items: center;
  color: white;
  display: flex;
  flex-basis: content;
  font-size: 32px;
  font-weight: 600;
  padding: 4px 10px;
  position: relative;
  text-decoration: none;
  transition: transform ease 0.4s;
  width: 250px;
  white-space: nowrap;

  & + a {
    margin-top: 48px;
  }

  &::before {
    bottom: -4px;
    content: '';
    height: 4px;
    left: 0;
    margin-top: 10px;
    position: absolute;
    transition: all 0.3s ease-in-out;
    visibility: hidden;
    width: 0%;
    ${props => {
      const { r, g, b } = themeColors[props.type || 'default'];
      return css`
        background-color: rgb(${r}, ${g}, ${b});
      `;
    }}
  }

  &:hover {
    transform: translateY(-10%);
    ${props => socialMedias[props.type || 'default']}
  }

  &:hover:before {
    visibility: visible;
    width: 100%;
  }

  svg {
    display: inline;
    font-size: 60px;
    margin-right: 16px;
    transition: color ease-in 0.2s;
  }
`;
