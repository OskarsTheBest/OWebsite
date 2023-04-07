import React from 'react'
import { Link} from 'react-router-dom';
import '../App.css';

import Icosahedron from './Icosahedron';


//component that triggers the navbar menu

interface HeaderProps {
    setMenuState: (state: boolean) => void;
    menuState: boolean;
  }

const Header = (props: HeaderProps) => {

  return (
    <header className='site-header'>
        <div className='brand-icon'>
            <Link to='/'>
                <div className='icon'>
                    <Icosahedron></Icosahedron>
                </div>
                <span className='title'>OWebsite</span>
            </Link>
        </div>
        <button className={`menu-trigger ${props.menuState ? 'menu-close' : ''}`} onClick={() => props.setMenuState(!props.menuState)}>
            <span></span>
            <span></span>
            <span></span>
        </button>
    </header>
  );
};

export default Header
