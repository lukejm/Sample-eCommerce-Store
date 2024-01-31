
import { Outlet, Link } from "react-router-dom";
import Logo from '../../assets/react.svg?react';

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
        </div>
      </div>
      <Outlet />
    </>
  );
}

export default NavigationComponent;