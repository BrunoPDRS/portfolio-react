import React from 'react';

import Sidebar from './components/Sidebar';
import Routes from './routes';

import GlobalStyle from './styles/global';

const App: React.FC = () => {
  return (
    <div className="App">
      <Sidebar />
      <main>
        <Routes />
      </main>
      <GlobalStyle />
    </div>
  );
};

export default App;
