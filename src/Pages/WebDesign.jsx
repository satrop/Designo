import { Helmet, HelmetProvider } from 'react-helmet-async';
import { useEffect } from 'react';

import ContentCard from '../Components/ContentCardBlock';

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
				<ContentCard
					title="World-class talent"
					flip={true}
					cardImage={'image-world-class-talent'}>
					<p>
						We are a crew of strategists, problem-solvers, and
						technologists. Every design is thoughtfully crafted from
						concept to launch, ensuring success in its given market.
						We are constantly updating our skills in a myriad of
						platforms.
					</p>
					<p>
						Our team is multi-disciplinary and we are not merely
						interested in form — content and meaning are just as
						important. We give great importance to craftsmanship,
						service, and prompt delivery. Clients have always been
						impressed with our high-quality outcomes that
						encapsulates their brand's story and mission.
					</p>
				</ContentCard>
				<ContentCard
					title="The real deal"
					cardImage={'image-real-deal'}>
					<p>
						As strategic partners in our clients' businesses, we are
						ready to take on any challenge as our own. Solving real
						problems require empathy and collaboration, and we
						strive to bring a fresh perspective to every
						opportunity. We make design and technology more
						accessible and give you tools to measure success.
					</p>
					<p>
						We are visual storytellers in appealing and captivating
						ways. By combining business and marketing strategies, we
						inspire audiences to take action and drive real results.
					</p>
				</ContentCard>
			</main>
		</HelmetProvider>
	);
};

export default WebDesign;
