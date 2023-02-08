import { HashRouter, Route, Routes } from 'react-router-dom';

import Nav from './Components/Nav/Nav';

import Home from './Pages/Home';
import WebDesign from './Pages/WebDesign';
import AppDesign from './Pages/AppDesign';
import GraphicDesign from './Pages/GraphicDesign';
import About from './Pages/About';
import Locations from './Pages/Locations';
import Contact from './Pages/Contact';

function App() {
	return (
		<HashRouter>
			{/* <ScrollToTop /> */}
			<Nav />
			<Routes>
				<Route index element={<Home />} />
				<Route path="/web-design" element={<WebDesign />} />
				<Route path="/app-design" element={<AppDesign />} />
				<Route path="/graphic-design" element={<GraphicDesign />} />
				<Route path="/about" element={<About />} />
				<Route path="/locations" element={<Locations />} />
				<Route path="/contact" element={<Contact />} />
			</Routes>
			{/* <Footer /> */}
		</HashRouter>
	);
}

export default App;
