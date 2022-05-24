import React from 'react';

// My imports
import Home from './pages/Home';

// Components
import Header from './components/Header';
import Footer from './components/Footer';

const App = () => {
  return (
    <>
      {/* HEADER */}
      <Header />

      {/* MAIN CONTENT */}
      <Home />

      {/* FOOTER */}
      <Footer />
    </>
  );
};

export default App;
