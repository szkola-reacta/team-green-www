import React from 'react';

import Footer from './Components/footer/Footer';
import Header from './Components/Header';
import Application from './Components/Content/Pages/Application';
import './App.css';
import Content from './Components/Content/Content';

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
