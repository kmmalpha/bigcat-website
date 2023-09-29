import './style/Navbar.css';
import { NavLink } from 'react-router-dom';

const Navbar = () => {
    return (
		<nav className="navbar">
			<div className="container">
				<div className="logo">
					<img src="src/images/New Logo.png" />
				</div>
				<div className="nav-elements">
					<ul>
						<li>
							<NavLink to="maaya">MAAYA</NavLink>
						</li>
						<li>
							<NavLink to="music-in-green">MUSIC IN GREEN</NavLink>
						</li>
						<li>
							<NavLink to="gallery">GALLERY</NavLink>
						</li>
						<li>
							<NavLink to="store">STORE</NavLink>
						</li>
						<li>
							<NavLink to="about">ABOUT</NavLink>
						</li>
					</ul>
				</div>
			</div>
		</nav>
	);
}

export default Navbar;
