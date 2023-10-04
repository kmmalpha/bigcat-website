import { BrowserRouter } from 'react-router-dom';
import './App.css';
import Navbar from './components/navbar/Navbar';

const App = () => {
    return (
		<BrowserRouter>
			<Navbar />
		</BrowserRouter>
	);
}

export default App;
