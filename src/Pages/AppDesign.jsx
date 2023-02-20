import { Helmet, HelmetProvider } from 'react-helmet-async';
import { useEffect } from 'react';

const AppDesign = () => {
	// Class name to body tag for SCSS hooks
	useEffect(() => {
		document.body.classList.add('app-design');
		return () => {
			document.body.classList.remove('app-design');
		};
	}, []);

	return (
		<HelmetProvider>
			<Helmet>
				<title>Designo | App Design</title>
				<meta name="author" content="Steve Portas" />
				<meta name="description" content="Our app design" />
			</Helmet>
			<main id="main-content" className="wrapper flow">
				<h1>App Design</h1>
			</main>
		</HelmetProvider>
	);
};

export default AppDesign;
