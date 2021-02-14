import styled, { css } from 'styled-components';

interface StyledLinkProps {
  type?: 'linkedin' | 'github' | 'gmail' | 'hackerrank' | 'instagram';
}

const convertHexToRGB = (hex: string) => {
  const result = /^#?([a-f\d]{2})([a-f\d]{2})([a-f\d]{2})$/i.exec(hex);

  if (!result) return { r: 0, g: 0, b: 0 };
  return {
    r: parseInt(result[1], 16),
    g: parseInt(result[2], 16),
    b: parseInt(result[3], 16),
  };
};

const setSidebarCSS = (colorHex: string) => {
  const { r, g, b } = convertHexToRGB(colorHex);
  return css`
    border-bottom: 4px solid rgb(${r}, ${g}, ${b});
    margin-top: 44px;
    padding-bottom: 4px;
    svg {
      color: rgb(${r}, ${g}, ${b});
    }
  `;
};

const socialMedias = {
  linkedin: css`
    border-bottom: 4px solid #0077b5;
    padding-bottom: 4px;

    & + a {
      margin-top: 44px;
    }

    svg {
      color: #0077b5;
    }
  `,
  github: setSidebarCSS('#f1502f'),
  gmail: setSidebarCSS('#bb001b'),
  hackerrank: setSidebarCSS('#1ba94c'),
  instagram: setSidebarCSS('#cc2366'),
  default: setSidebarCSS('#61dafb'),
};

export const Container = styled.aside`
  background-color: #282c34;
  box-shadow: 2px 2px 8px 1px black;
  display: flex;
  flex-direction: column;
  height: 100vh;
  justify-content: center;
  left: 0;
  margin-right: 16px;
  overflow-x: hidden;
  position: fixed;
  top: 0;
  transition: ease-in-out 0.5s;
  width: 80px;
  z-index: 0;

  &:hover {
    width: 250px;
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

  &:hover {
    transform: translateY(-10%);
    ${props => socialMedias[props.type || 'default']}
  }

  svg {
    display: inline;
    font-size: 60px;
    margin-right: 16px;
    transition: color ease-in 0.2s;
  }
`;
