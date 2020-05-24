import React from 'react';

import Footer from './components/footer/Footer';
import Header from './components/Header';
import Application from './components/Content/Pages/Application';
import './App.css';
import Content from './components/Content/Content';

function App() {
  return (
    <div className="App">
      <Header />
      <Application />
      <Content />
      <Footer />
    </div>
  );
}

export default App;
