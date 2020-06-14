import React from 'react';

import Footer from './components/Footer';
import Header from './components/Header';
import Application from './components/Content/Pages/Application';
import Content from './components/Content/Content';
import './App.css';

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
