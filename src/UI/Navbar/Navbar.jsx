import React from 'react';
import { NavLink } from 'react-router-dom';
import './Navbar.css';
import collection from '../../assets/bookmarks.svg';

const NavBar = () => {
	return (
		<div className="nav">
			<nav className="nav-content">
				<NavLink activeClassName="nav-sculpture-logo-active" exact to="/" className="nav-sculpture-logo">
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
		</div>
	);
};

export default NavBar;
