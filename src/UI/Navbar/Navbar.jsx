import React from 'react';
import { NavLink } from 'react-router-dom';
import './Navbar.css';
import collection from '../../assets/collection.svg'
import sculptureIcon from '../../assets/sculpture.png';

const NavBar = () => {
	return (
		<nav className="nav-wrapper">
			<NavLink activeClassName="nav-sculpture-logo-active" exact to="/" className="nav-sculpture-logo">
				{/* <img src={sculptureText} alt="sculpture-text" style={{ width: 'auto', maxHeight: 50 }}/> */}
				<h3>sculpture</h3>
			</NavLink>
			<NavLink
				activeClassName="nav-collection-logo-active"
				exact
				to="/collection"
				className="nav-collection-logo"
			>
				<img src={collection} alt="sculpture icon" style={{ width: 'auto', height: '40px' }} />
			</NavLink>
		</nav>
	);
};

export default NavBar;
