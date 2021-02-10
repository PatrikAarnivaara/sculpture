import React from 'react';
import { NavLink } from 'react-router-dom';
import './Navbar.css';

const NavBar = () => {
	return (
		<nav className="nav-wrapper">
			<NavLink activeClassName="nav-sculpture-logo-active" exact to="/" className="nav-sculpture-logo">
				<h2>sculpture</h2>
			</NavLink>
			<NavLink
				activeClassName="nav-collection-logo-active"
				exact
				to="/collection"
				className="nav-collection-logo"
			>
				<h2>c.</h2>
			</NavLink>
		</nav>
	);
};

export default NavBar;
