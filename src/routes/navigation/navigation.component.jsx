
import { Outlet, Link } from "react-router-dom";
import Logo from '../../assets/react.svg?react';
import './navigation.styles.scss';
import {useContext} from "react";
import {UserContext} from "../../context/user.context.jsx";

function NavigationComponent() {
  const { currentUser } = useContext(UserContext);
  const signIn = () => {
    return (
      <Link className='nav-link' to='/sign-in'>
        SIGN IN
      </Link>
    );
  };

  const signOut = () => {
    return (
      <Link className='nav-link' to='/sign-out'>
        Sign Out
      </Link>
    );
  };

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
          {currentUser ? signOut() : signIn()}
        </div>
      </div>
      <Outlet />
    </>
  );
}

export default NavigationComponent;