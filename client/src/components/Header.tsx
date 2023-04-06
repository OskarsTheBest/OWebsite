import React from 'react'
import { Link} from 'react-router-dom';
import '../App.css';
import icon from '../static/brand-icon.png';
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
                    <img src='icon'></img>
                </div>
                <span>OWebsite</span>
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
