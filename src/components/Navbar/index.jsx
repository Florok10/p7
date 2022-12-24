import { Link, NavLink } from 'react-router-dom';

import logo from '../../assets/LOGO.png';
import './index.css';

const Navbar = () => (
  <header className='page-header'>
    <nav className='header-nav d-flex margin-auto'>
      <Link to='/' className='nav-logo d-flex justify-center'>
        <img src={logo} alt='Kasa logo' />
      </Link>
      <ul className='nav-list-wrapper d-flex align-center justify-center'>
        <li key='home' className='nav-list-item'>
          <NavLink
            to='/'
            className={({ isActive }) =>
              (isActive ? 'active ' : '') + 'nav-links'
            }
          >
            <span>Accueil</span>
          </NavLink>
        </li>
        <li key='about' className='nav-list-item'>
          <NavLink
            to='/about'
            className={({ isActive }) =>
              (isActive ? 'active ' : '') + 'nav-links'
            }
          >
            <span>A propos</span>
          </NavLink>
        </li>
      </ul>
    </nav>
  </header>
);

export default Navbar;
