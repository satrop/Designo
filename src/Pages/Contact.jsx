import { Helmet, HelmetProvider } from 'react-helmet-async';
import { useEffect } from 'react';

const Contact = () => {
	// Class name to body tag for SCSS hooks
	useEffect(() => {
		document.body.classList.add('contact');
		return () => {
			document.body.classList.remove('contact');
		};
	}, []);

	return (
		<HelmetProvider>
			<Helmet>
				<title>Designo | Contact Page</title>
				<meta name="author" content="Steve Portas" />
				<meta name="description" content="Drop us a line." />
			</Helmet>
			<main id="main-content" className="wrapper flow">
				<h1>Contact</h1>
			</main>
		</HelmetProvider>
	);
};

export default Contact;
