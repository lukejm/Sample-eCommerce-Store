
import { Outlet, Link } from "react-router-dom";
import Logo from '../../assets/react.svg?react';
import './navigation.styles.scss';
import {useContext} from "react";
import {UserContext} from "../../context/user.context.jsx";
import CartIcon from "../../components/cart/cart-icon.component.jsx";
import CartDropdown from "../../components/cart/cart-dropdown.component.jsx";
import {CartContext} from "../../context/cart.context.jsx";

function NavigationComponent() {
  const { currentUser } = useContext(UserContext);
  const { isCartOpen, setIsCartOpen } = useContext(CartContext);

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

  const toggleCart = () => {
    setIsCartOpen(!isCartOpen);
  }

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
          <button onClick={toggleCart} className='cart-button'><CartIcon /></button>
          {isCartOpen && <CartDropdown />}
        </div>
      </div>
      <Outlet />
    </>
  );
}

export default NavigationComponent;