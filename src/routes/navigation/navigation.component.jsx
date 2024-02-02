
import { Outlet, Link } from "react-router-dom";
import Logo from '../../assets/react.svg?react';
import './navigation.styles.scss';

function NavigationComponent() {
  return (
    <>
      <div className='navigation'>
        <Link className='logo-container' to='/'>
          <Logo className='logo' />
        </Link>
        <div className='nav-links-container'>
          <Link className='nav-link' to='/shop'>
            SHOP
          </Link>
          <Link className='nav-link' to='/sign-in'>
            SIGN IN
          </Link>
          <Link className='nav-link' to='/sign-out'>
            Sign Out
          </Link>
        </div>
      </div>
      <Outlet />
    </>
  );
}

export default NavigationComponent;