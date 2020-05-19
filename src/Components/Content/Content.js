import React from 'react';
import Home from './Pages/Home';
import Application from './Pages/Application/Application';
import About from './Pages/About';

function Content(){
    return(
        <div className="content">
            <Home />
            <Application />
            <About />
        </div>
    );
}

export default Content;