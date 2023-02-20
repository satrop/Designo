import { Helmet, HelmetProvider } from 'react-helmet-async';
import { useEffect } from 'react';

const Locations = () => {
	// Class name to body tag for SCSS hooks
	useEffect(() => {
		document.body.classList.add('locations');
		return () => {
			document.body.classList.remove('locations');
		};
	}, []);

	return (
		<HelmetProvider>
			<Helmet>
				<title>Designo | Locations Page</title>
				<meta name="author" content="Steve Portas" />
				<meta name="description" content="Come visit us!" />
			</Helmet>
			<main id="main-content" className="wrapper flow">
				<h1>Locations</h1>
			</main>
		</HelmetProvider>
	);
};

export default Locations;
