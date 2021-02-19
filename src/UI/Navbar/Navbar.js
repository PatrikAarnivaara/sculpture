import React from 'react';
import { NavLink } from 'react-router-dom';
import './Navbar.css';
import sculptureIcon from '../../assets/sculpture.png';

const NavBar = () => {
	return (
		<nav className="nav-wrapper">
			<NavLink activeClassName="nav-sculpture-logo-active" exact to="/" className="nav-sculpture-logo">
				<h2>Sculpture</h2>
			</NavLink>
			<NavLink
				activeClassName="nav-collection-logo-active"
				exact
				to="/collection"
				className="nav-collection-logo"
			>
				<img src={sculptureIcon} alt="sculpture icon" style={{ width: 'auto', maxHeight: 60 }} />
			</NavLink>
		</nav>
	);
};

export default NavBar;
