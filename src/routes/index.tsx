import React from 'react';
import { Switch, Route } from 'react-router-dom';

import About from '../pages/About';
import Landing from '../pages/Landing';
import NotFound from '../pages/NotFound';
import Projects from '../pages/Projects';

const Routes: React.FC = () => (
  <Switch>
    <Route exact path="/" component={Landing} />
    <Route exact path="/about" component={About} />
    <Route exact path="/projects" component={Projects} />
    <Route component={NotFound} />
  </Switch>
);

export default Routes;
