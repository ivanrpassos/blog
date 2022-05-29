import React from 'react';

// Components
import Router from './router';
import { HeaderProvider } from './context/headerContext';

const App = () => {
  return (
    <HeaderProvider>
      <Router />
    </HeaderProvider>
  );
};

export default App;
