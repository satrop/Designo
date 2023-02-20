import { Helmet, HelmetProvider } from 'react-helmet-async';
import { useEffect } from 'react';

const WebDesign = () => {
	// Class name to body tag for SCSS hooks
	useEffect(() => {
		document.body.classList.add('web-design');
		return () => {
			document.body.classList.remove('web-design');
		};
	}, []);

	return (
		<HelmetProvider>
			<Helmet>
				<title>Designo | Web Design</title>
				<meta name="author" content="Steve Portas" />
				<meta name="description" content="Our web design" />
			</Helmet>
			<main id="main-content" className="wrapper flow">
				<h1>Web Design</h1>
			</main>
		</HelmetProvider>
	);
};

export default WebDesign;
