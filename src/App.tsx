import React from 'react';

import Sidebar from './components/Sidebar';
import Home from './pages/Home';

import GlobalStyle from './styles/global';

const App: React.FC = () => {
  return (
    <div className="App">
      <Sidebar />
      <main>
        <Home />
      </main>
      <GlobalStyle />
    </div>
  );
};

export default App;
