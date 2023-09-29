import './style/Navbar.css';

const Navbar = () => {
    return (
		<nav>
			<div>
				<img src="src/images/New Logo.png" />
			</div>
			<div>
				<ul>
					<li>
						<a href="maaya">MAAYA</a>
					</li>
					<li>
						<a href="music-in-green">MUSIC IN GREEN</a>
					</li>
					<li>
						<a href="gallery">GALLERY</a>
					</li>
					<li>
						<a href="store">STORE</a>
					</li>
					<li>
						<a href="about">ABOUT</a>
					</li>
				</ul>
			</div>
		</nav>
	);
}

export default Navbar;
