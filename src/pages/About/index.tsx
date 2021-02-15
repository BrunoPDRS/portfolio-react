import React from 'react';

import { Container, MainInfo, SecundaryInfo } from './styles';

const About: React.FC = () => (
  <Container>
    <MainInfo>
      <h1>Main</h1>
    </MainInfo>
    <SecundaryInfo>
      <h1>Secundary</h1>
    </SecundaryInfo>
  </Container>
);

export default About;
