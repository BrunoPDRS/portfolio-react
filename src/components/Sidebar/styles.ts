import styled, { css } from 'styled-components';

interface StyledLinkProps {
  type?: 'linkedin' | 'github' | 'gmail' | 'hackerrank' | 'instagram';
}

const socialMedias = {
  linkedin: css`
    color: #0077b5;
  `,
  github: css`
    color: #f1502f;
  `,
  gmail: css`
    color: #bb001b;
  `,
  hackerrank: css`
    color: #1ba94c;
  `,
  instagram: css`
    color: #cc2366;
  `,
  default: css`
    color: #61dafb;
  `,
};

export const Container = styled.aside`
  background-color: #282c34;
  display: flex;
  flex-direction: column;
  height: 100vh;
  justify-content: center;
  left: 0;
  margin-right: 16px;
  overflow-x: hidden;
  top: 0;
  transition: ease-in-out 0.5s;
  width: 80px;

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
  transition: transform linear 0.2s;
  width: 250px;
  white-space: nowrap;

  & + a {
    margin-top: 48px;
  }

  &:hover {
    transform: translateY(-10%);
    svg {
      ${props => socialMedias[props.type || 'default']}
    }
  }

  svg {
    display: inline;
    font-size: 60px;
    margin-right: 16px;
    transition: color ease-in 0.2s;
  }
`;
