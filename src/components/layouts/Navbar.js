import React from 'react';
import PropTypes from 'prop-types';
import { Link } from 'react-router-dom';

const Navbar = (props)=> {
  const {icon, tittle} = props;


  return (
    <nav className='navbar bg-primary'>
     <Link to="/">
        <h1>
          <i className={icon} /> {tittle}
        </h1>
      </Link> 

      <ul>
        <li>
          <Link to='/'>Home</Link>
        </li>
        <li>
          <Link to='/about'>About</Link>
        </li>
      </ul>
    </nav>
  );

}

Navbar.defaultProps = {
  tittle: 'Github Finder',
  icon: 'fa fa-github',
};

Navbar.propTypes = {
  tittle: PropTypes.string.isRequired,
  icon: PropTypes.string.isRequired,
};

export default Navbar;
