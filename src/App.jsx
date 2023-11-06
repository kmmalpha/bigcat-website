import './App.css';
import Navbar from './components/navbar/Navbar';
import Maaya from './pages/Maaya';
import Home from './pages/Home';
import { BrowserRouter as Router, Route, Routes, Navigate } from 'react-router-dom'
import MusicInGreen from './pages/MusicInGreen';
import Gallery from './pages/Gallery';
import Store from './pages/Store'
import About from './pages/About';

const App = () => {
	return (
		<Router>
			<Navbar />
			<Routes>
				<Route path="/" element={<Home />} />
				<Route path="/maaya" element={<Maaya />} />
				<Route path="/music-in-green" element={<MusicInGreen />} />
				<Route path="/gallery" element={<Gallery />} />
				<Route path="/store" element={<Store />} />
				<Route path="/about" element={<About />} />
				<Route path="*" element={<Navigate to="/" />} />
			</Routes>
		</Router>
	);
}

export default App;

// import './App.css';
// import Navbar from './components/navbar/Navbar';
// import Maaya from './pages/Maaya';
// import Home from './pages/Home';
// import { BrowserRouter as Route, Router, Routes } from 'react-router-dom'
// import MusicInGreen from './pages/MusicInGreen';
// import Gallery from './pages/Gallery';
// import About from './pages/About';

// const App = () => {
//     return (
// 		<Router>
// 			<Navbar />
// 			<Routes>
// 				<Route exact path="/" component={Home} />
// 				<Route path="/maaya" components={Maaya} />
// 				<Route path="/musicingreen" components={MusicInGreen} />
// 				<Route path="/gallery" components={Gallery} />
// 				<Route path="/store" components={About} />
// 			</Routes>
// 		</Router>
// 	);
// }

// export default App;
