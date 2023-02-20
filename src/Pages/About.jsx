import { Helmet, HelmetProvider } from 'react-helmet-async';
import { useEffect } from 'react';

const About = () => {
	// Class name to body tag for SCSS hooks
	useEffect(() => {
		document.body.classList.add('about');
		return () => {
			document.body.classList.remove('about');
		};
	}, []);

	return (
		<HelmetProvider>
			<Helmet>
				<title>Designo | About</title>
				<meta name="author" content="Steve Portas" />
				<meta
					name="description"
					content="About page for Designo where good design meets you!"
				/>
			</Helmet>
			<main id="main-content" className="wrapper flow">
				<h1>About</h1>
			</main>
		</HelmetProvider>
	);
};

export default About;
