
// import { Route } from 'react-router-dom';
// import {  } from 'react-router-dom';
import { Routes, Route } from 'react-router-dom';
import Home from './Components/Home';
import About from './Components/About';
import Error from './Components/Error'
import Accordion from './Components/Accordion';

import './App.css';

function App() {
  return (
    <div className="App">
      <Accordion></Accordion>


      <Routes>
        {/* <Route path="/Home" component={Home} /> */}
        <Route exact path='/' element={<Home />} />
        <Route path='/about' element={<About />} />
        <Route element={<Error />} />
      </Routes>

    </div>
  );
}

export default App;



// Switch is replaced by Routes inv6 of react dom 