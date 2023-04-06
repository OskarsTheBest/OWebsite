import React, {useState} from 'react';
import { BrowserRouter, Route, Routes} from 'react-router-dom';
import './App.css';
import Header from './components/Header';
import SidebarNav from './components/SidebarNav';
import Home from './pages/Home';
import Contact from './pages/Contact';
import About from './pages/About';


const App = () => {
  const [menuState, setMenuState] = useState(false);
  return (
        <BrowserRouter>
          <div className="App container">
            <Header menuState= {menuState} setMenuState= {setMenuState}></Header>
            <SidebarNav menuState={menuState} setMenuState={setMenuState}></SidebarNav>
            <Routes>
              <Route path='/' Component={Home} />
              <Route path='/Contact' Component={Contact} />
              <Route path='/About' Component={About} />
            </Routes>
          </div>
        
        </BrowserRouter>
  );
}

export default App;
