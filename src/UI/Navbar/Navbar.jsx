import React from 'react';
import { NavLink } from 'react-router-dom';
import './Navbar.css';
import collection from '../../assets/bookmarks.svg'
/* import sculptureIcon from '../../assets/sculpture-webb.svg'; */

const NavBar = () => {
	return (
		<nav className="nav-wrapper">
			<NavLink activeClassName="nav-sculpture-logo-active" exact to="/" className="nav-sculpture-logo">
				{/* <img src={sculptureIcon} alt="sculpture-text"/> */}
				<h3>LOGO</h3>
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
