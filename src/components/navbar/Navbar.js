import { React, useState } from 'react';
import '../styles/Navbar.css';
import { NavLink } from 'react-router-dom';
import Hamburger from 'hamburger-react'

const Navbar = () => {
	const [showNavbar, setShowNavbar] = useState(false)

	const toggleNavbar = () => {
		setShowNavbar(!showNavbar)
	}

    return (
		<nav className="navbar">
			<div className="container">
				{/* <div className="logo">
					<img src="src/images/New Logo.png" />
				</div> */}
				{/* <div className='menu-icon' onClick={toggleNavbar}>
					<Hamburger />
				</div> */}
				<div className={`nav-elements ${showNavbar && 'active'}`}>
					<ul>
						<li>
							<NavLink to="/maaya">MAAYA</NavLink>
						</li>
						<li>
							<NavLink to="/music-in-green">MUSIC IN GREEN</NavLink>
						</li>
						<li>
							<NavLink to="/"><img src="src/images/New Logo.png" alt="bcg-logo" className="logo" /></NavLink>
						</li>
						<li>
							<NavLink to="/gallery">GALLERY</NavLink>
						</li>
						<li>
							<NavLink to="/store">STORE</NavLink>
						</li>
						<li>
							<NavLink to="/about">ABOUT</NavLink>
						</li>
					</ul>
				</div>
			</div>
		</nav>
	);
}

export default Navbar;
