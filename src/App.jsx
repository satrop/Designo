import { HashRouter, Route, Routes } from 'react-router-dom';

import Nav from './Components/Nav';
import Footer from './Components/Footer';
import ScrollToTop from './Components/ScrollToTop';

import Home from './Pages/Home';
import WebDesign from './Pages/WebDesign';
import AppDesign from './Pages/AppDesign';
import GraphicDesign from './Pages/GraphicDesign';
import About from './Pages/About';
import Locations from './Pages/Locations';
import Contact from './Pages/Contact';

import leaf from '/shared/desktop/bg-pattern-leaf.svg';

import './SCSS/styles.scss';

function App() {
	return (
		<HashRouter>
			<img src={leaf} alt="" role={'presentation'} className="leaf " />
			<img src={leaf} alt="" role={'presentation'} className="leaf" />
			<ScrollToTop />
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
			<Footer />
		</HashRouter>
	);
}

export default App;
