import './Navbar.scss';
import logo from '../../images/logo.svg';
import { Link } from 'react-router-dom';

export const Navbar = () => {
  return (
    <div className="nav">
      <div className="nav__wrap">
        <img src={logo} alt="logo" className='nav__logo' />
        <div className="nav__links">
          <Link to="/about" className='nav__link nav__link--is-active'>About Us</Link>
          <Link to="/why" className='nav__link'>Why Us</Link>
          <Link to="/blog" className='nav__link'>Blog</Link>
        </div>
      </div>
      <div className="nav__btn">
        <button className="nav__btn__signup btn">Sign Up</button>
        <button className="nav__btn__signin btn">Sign In</button>
      </div>
    </div>
  );
}
