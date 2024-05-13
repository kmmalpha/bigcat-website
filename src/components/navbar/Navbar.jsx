import { React } from 'react';
import '../styles/Navbar.css';
import { NavLink } from 'react-router-dom';
import logo from '../styles/images/logo-small.png';
// import Hamburger from 'hamburger-react'

const Navbar = () => {
    return (
		<nav className="navbar">
			<div className="container">
				<div className="nav-elements" >
					<ul>
						<li>
							<NavLink to="/services">Services</NavLink>
						</li>
						<li>
							<NavLink to="/music-in-green">Music In Green</NavLink>
						</li>
						<li>
							<NavLink to="/blog-posts">Blog Posts</NavLink>
						</li>
						<li>
							<NavLink to="/"><img src={logo} alt='logo' className="navbar-logo" /></NavLink>
						</li>
						<li>
							<NavLink to="/gallery">Gallery</NavLink>
						</li>
						<li>
							<NavLink to="/store">Store</NavLink>
						</li>
						<li>
							<NavLink to="/contact">Contact</NavLink>
						</li>
						<li>
							<NavLink to="/about">About</NavLink>
						</li>
					</ul>
				</div>
			</div>
		</nav>
	);
}

export default Navbar;
