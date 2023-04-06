import React, { useRef, useEffect } from 'react';
import { Link, useNavigate } from 'react-router-dom';
import gsap from 'gsap';

interface SidebarProps {
  setMenuState: (state: boolean) => void;
  menuState: boolean;
}

const SidebarNav = (props: SidebarProps) => {
  let sidebarMenu = useRef(null);
  let sidebarMenuOverlay = useRef(null);
  let menuLayer = useRef(null);
  const menuTimeline = useRef<any>(null);
  const navigate = useNavigate();

  useEffect(() => {
    menuTimeline.current = gsap.timeline({ paused: true });
    menuTimeline.current.fromTo(
      [sidebarMenuOverlay.current, menuLayer.current, sidebarMenu.current],
      {
        duration: 0,
        x: '100%',
      },
      {
        duration: 0.75,
        x: '0%',
        ease: 'power3.inOut',
        stagger: {
          amount: 0.5,
        },
      }
    );
  }, []);

  useEffect(() => {
    props.menuState ? menuTimeline.current.play() : menuTimeline.current.reverse();
  }, [props.menuState]);


  return (
    <>
      <div
        className="sidebarNavigationOverlay"
        ref={sidebarMenuOverlay}
        onClick={() => props.setMenuState(false)}
      ></div>
      <div className="menu-wrapper">
        <div className="menu-layer" ref={menuLayer}></div>
        <nav className="sidebarNavigation" ref={sidebarMenu}>
          <div className="sidebar-top">
            <div className="links-wrapper">
              <Link className="menu-link" to="/">
                Home
              </Link>
              <Link className="menu-link" to="/Contact">
                Contact
              </Link>
              <Link className="menu-link" to="/About">
                About
              </Link>
            </div>
          </div>
          <div className="sidebar-bottom">
            <ul className="extra-links">
              <li className="link-item">
                <div className="link-title">Email</div>
                <a href="mailto:oskarsbest@gmail.com">oskarsbest@gmail.com</a>
              </li>
              <li className="link-item">
                <div className="link-title">Social media</div>
                <div className="social-media-links">
                  <a href="https://twitter.com/BestOskars" className="social-link">
                    <i className="fab fa-twitter"></i>
                  </a>
                </div>
              </li>
            </ul>
          </div>
        </nav>
      </div>
    </>
  );
};

export default SidebarNav;
