import React from 'react';

import Sidebar from './components/Sidebar';
import Home from './pages/Home';

import GlobalStyle from './styles/global';

const App: React.FC = () => {
  return (
    <div className="App">
      <Sidebar />
      <Home />
      <GlobalStyle />
    </div>
  );
};

export default App;
