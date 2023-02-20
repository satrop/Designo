import { Helmet, HelmetProvider } from 'react-helmet-async';
import { useEffect } from 'react';

const GraphicDesign = () => {
	// Class name to body tag for SCSS hooks
	useEffect(() => {
		document.body.classList.add('graphic-design');
		return () => {
			document.body.classList.remove('graphic-design');
		};
	}, []);

	return (
		<HelmetProvider>
			<Helmet>
				<title>Designo | App Design</title>
				<meta name="author" content="Steve Portas" />
				<meta name="description" content="Our graphic design" />
			</Helmet>
			<main id="main-content" className="wrapper flow">
				<h1>Graphic Design</h1>
			</main>
		</HelmetProvider>
	);
};

export default GraphicDesign;
